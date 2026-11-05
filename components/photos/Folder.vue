

<template>
    <div class="accordion accordion-flush">
        <div
            v-for="(folder, index) in folders"
            :key="folder.id"
            class="accordion-item"
        >
            <h2 class="accordion-header">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + folder.id"
                    aria-expanded="false"
                    @click="openedChild = index"
                >
                    {{ folder.name }}
                </button>
            </h2>

            <div
                :id="folder.id"
                ref="item"
                class="accordion-collapse collapse"
            >
                <div
                    v-if="folder.id"
                    class="accordion-body"
                >
                    <Folder
                        :folder-id="folder.id"
                        :open="openedChild === index"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Photo grid -->
    <div
        v-if="images.length"
        class="photoGrid"
    >
        <img
            v-for="(image, index) in images"
            :key="image.id"
            :src="image.thumbnailLink"
            :alt="image.name"
            referrerpolicy="no-referrer"
            loading="lazy"
            @click="openImage(index)"
        />
    </div>

    <!-- Pagination -->
    <div
        v-if="nextPageToken"
        class="loadMoreContainer"
    >
        <button
            class="btn btn-primary"
            type="button"
            :disabled="loadingMore"
            @click="loadFolder"
        >
            {{
                loadingMore
                    ? 'Fotos werden geladen...'
                    : 'Weitere Fotos laden'
            }}
        </button>
    </div>

    <p v-if="loadError" role="alert">
        {{ loadError }}
        <button
            type="button"
            @click="loadFolder"
        >
            Erneut versuchen
        </button>
    </p>

    <!-- Image modal -->
    <Modal
        :show="showImageModal"
        @close="showImageModal = false"
    >
        <template v-if="images.length">
            <Diashow
                :first-image-id="clickedImage"
                :images="slideshowImages"
                width="80vw"
                @next-image="nextImage"
                @prev-image="prevImage"
            />

            <div
                v-if="
                    !images[clickedImage]?.loaded &&
                    !images[clickedImage]?.error
                "
                class="loader"
            ></div>

            <p
                v-if="images[clickedImage]?.error"
                class="imageError"
                role="alert"
            >
                Bild konnte nicht geladen werden.
            </p>

            <!-- Download original image -->
            <svg
                v-if="images[clickedImage]?.loaded"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.5"
                stroke="white"
                class="downloadButton"
                fill="currentColor"
                viewBox="-1 -1 19 19"
                role="button"
                tabindex="0"
                aria-label="Bild herunterladen"
                @click="downloadImage(clickedImage)"
                @keydown.enter="downloadImage(clickedImage)"
            >
                <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1 1h-12a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                />
            </svg>
        </template>
    </Modal>
</template>

<script>
import { nextTick } from 'vue'
import pkg from 'file-saver'

const { saveAs } = pkg

export default {
    props: {
        folderId: {
            type: String,
            required: true,
        },
        open: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            folders: [],
            images: [],
            openedChild: null,
            showImageModal: false,
            clickedImage: 0,

            // Pagination
            nextPageToken: null,
            hasLoadedFirstPage: false,
            loadingMore: false,
            loadError: null,

            // Image loading
            pendingImages: new Map(),
            disposed: false,
        }
    },

    computed: {
        slideshowImages() {
            return this.images.map(
                (image) =>
                    image.fullImageUrl || image.thumbnailLink
            )
        },
    },

    watch: {
        open(isOpen) {
            if (isOpen) this.loadFolder()
        },
    },

    mounted() {
        if (this.open) this.loadFolder()
    },

    beforeUnmount() {
        this.disposed = true

        // Release all full-resolution images
        this.images.forEach((image) => {
            if (image.fullImageUrl) {
                URL.revokeObjectURL(image.fullImageUrl)
            }
        })
    },

    methods: {
        // --------------------------------
        // Folder loading and pagination
        // --------------------------------

        async loadFolder() {
            if (
                !useState('loggedIn').value ||
                this.loadingMore ||
                (
                    this.hasLoadedFirstPage &&
                    !this.nextPageToken
                )
            ) {
                return
            }

            this.loadingMore = true
            this.loadError = null

            try {
                const params = new URLSearchParams({
                    id: this.folderId,
                })

                if (this.nextPageToken) {
                    params.set('pageToken', this.nextPageToken)
                }

                const response = await $fetch(
                    `/api/listImages?${params.toString()}`
                )

                if (this.disposed) return

                const files = response.files ?? []

                const newFolders = files.filter(
                    (file) =>
                        file.mimeType ===
                        'application/vnd.google-apps.folder'
                )

                const newImages = files
                    .filter((file) =>
                        file.mimeType?.startsWith('image/')
                    )
                    .map((image) => ({
                        ...image,
                        fullImageUrl: null,
                        loaded: false,
                        loading: false,
                        error: null,
                    }))

                const existingFolderIds = new Set(
                    this.folders.map((folder) => folder.id)
                )

                const existingImageIds = new Set(
                    this.images.map((image) => image.id)
                )

                this.folders.push(
                    ...newFolders.filter(
                        (folder) =>
                            !existingFolderIds.has(folder.id)
                    )
                )

                this.images.push(
                    ...newImages.filter(
                        (image) =>
                            !existingImageIds.has(image.id)
                    )
                )

                this.nextPageToken =
                    response.nextPageToken ?? null

                this.hasLoadedFirstPage = true

            } catch (error) {
                console.error('Failed to load folder:', error)

                if (!this.disposed) {
                    this.loadError =
                        'Fotos konnten nicht geladen werden.'
                }
            } finally {
                this.loadingMore = false
            }
        },

        // --------------------------------
        // Image loading
        // --------------------------------

        async getImageUrl(id) {
            const response = await fetch(
                `/api/image?id=${encodeURIComponent(id)}`
            )

            if (!response.ok) {
                throw new Error(
                    `Failed to load image (${response.status})`
                )
            }

            const blob = await response.blob()

            return URL.createObjectURL(blob)
        },

        loadImage(index) {
            const image = this.images[index]

            if (!image || this.disposed) return

            if (image.loaded) return

            // Reuse an existing request
            if (this.pendingImages.has(image.id)) {
                return this.pendingImages.get(image.id)
            }

            image.loading = true
            image.error = null

            const request = (async () => {
                try {
                    const url = await this.getImageUrl(image.id)

                    if (this.disposed) {
                        URL.revokeObjectURL(url)
                        return
                    }

                    // Only retain nearby originals
                    if (!this.shouldKeepImage(index)) {
                        URL.revokeObjectURL(url)
                        return
                    }

                    image.fullImageUrl = url
                    image.loaded = true

                } catch (error) {
                    console.error('Failed to load image:', error)

                    if (!this.disposed) {
                        image.error = error.message
                    }
                } finally {
                    image.loading = false
                    this.pendingImages.delete(image.id)
                }
            })()

            this.pendingImages.set(image.id, request)

            return request
        },

        // --------------------------------
        // Image cache / preloading
        // --------------------------------

        getNearbyIndices(index) {
            const count = this.images.length

            if (!count) return []

            const indices = new Set()

            // Current image
            indices.add(index)

            // Preload 2 previous images
            for (let offset = 1; offset <= 2; offset++) {
                indices.add((index - offset + count) % count)
            }

            // Preload 4 upcoming images
            for (let offset = 1; offset <= 4; offset++) {
                indices.add((index + offset) % count)
            }

            return [...indices]
        },

        shouldKeepImage(index) {
            return this.getNearbyIndices(
                this.clickedImage
            ).includes(index)
        },

        async preloadImages(index) {
            const nearby = this.getNearbyIndices(index)

            // Load selected image first
            await this.loadImage(index)

            if (
                this.disposed ||
                this.clickedImage !== index
            ) return

            // Preload neighboring images
            const neighbors = nearby.filter(
                (i) => i !== index
            )

            await Promise.all(
                neighbors.map((i) => this.loadImage(i))
            )

            await this.cleanupImages()
        },

        async cleanupImages() {
            if (this.disposed) return

            const keep = new Set(
                this.getNearbyIndices(this.clickedImage)
            )

            const urlsToRelease = []

            this.images.forEach((image, index) => {
                if (
                    !keep.has(index) &&
                    image.fullImageUrl
                ) {
                    urlsToRelease.push(image.fullImageUrl)

                    image.fullImageUrl = null
                    image.loaded = false
                }
            })

            // Let Vue update image sources first
            await nextTick()

            urlsToRelease.forEach((url) => {
                URL.revokeObjectURL(url)
            })
        },

        // --------------------------------
        // Modal and slideshow
        // --------------------------------

        openImage(index) {
            this.clickedImage = index
            this.showImageModal = true

            this.preloadImages(index)
        },

        nextImage(index) {
            this.changeImage(index)
        },

        prevImage(index) {
            this.changeImage(index)
        },

        changeImage(index) {
            const count = this.images.length

            if (!count) return

            // Keep index valid when wrapping
            const normalizedIndex =
                ((index % count) + count) % count

            this.clickedImage = normalizedIndex

            // Free old images and preload neighbors
            this.cleanupImages()
            this.preloadImages(normalizedIndex)
        },

        // --------------------------------
        // Download original
        // --------------------------------

        downloadImage(index) {
            const image = this.images[index]

            if (!image?.fullImageUrl) return

            saveAs(image.fullImageUrl, image.name)
        },
    },
}
</script>


<style lang="scss" scoped>
.accordion {
    width: 100%;
}
.accordion-button {
    color: black;
    background-color: white;
}
.accordion-button:not(.collapsed)::after {
    background-image: var(--bs-accordion-btn-icon);
}
.accordion-button:focus {
    box-shadow: none;
}
.photoGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 100%;
    gap: 50px;
    justify-items: center;
    padding: 10px 5px;
    img {
        width: 230px;
        height: 160px;
        object-fit: cover;
        box-shadow: 0 0 26px rgba(0, 0, 0, 0.358);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            transform: scale(1.02);
        }
    }
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: fixed;
    z-index: 50;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.downloadButton {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    margin: auto;
    width: 25px;
    fill: white;
    filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 1));
}
</style>

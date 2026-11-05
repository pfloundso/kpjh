
<template>
    <div class="pictures">
        <div
            v-if="images.length > 1"
            class="prevButton"
            role="button"
            tabindex="0"
            aria-label="Vorheriges Bild"
            @click="prevImage"
            @keydown.enter.prevent="prevImage"
        >
            <svg
                viewBox="0 0 28 18"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"
                />
            </svg>
        </div>

        <Carousel
            v-model="currentImg"
            wrap-around
            :transition="transition"
            :style="{ width, height }"
        >
            <Slide
                v-for="(image, index) in images"
                :key="index"
            >
                <img
                    :src="image"
                    class="slideImg"
                    :style="{ width, height }"
                    alt="Foto"
                    loading="lazy"
                />
            </Slide>
        </Carousel>

        <div
            v-if="images.length > 1"
            class="nextButton"
            role="button"
            tabindex="0"
            aria-label="Nächstes Bild"
            @click="nextImage"
            @keydown.enter.prevent="nextImage"
        >
            <svg
                viewBox="0 0 28 18"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z"                />
            </svg>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
    components: {
        Carousel,
        Slide,
    },

    props: {
        images: {
            type: Array,
            default: () => [],
        },
        firstImageId: {
            type: Number,
            default: 0,
        },
        repeat: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        },
        transition: {
            type: Number,
            default: 0,
        },
    },

    emits: ['prevImage', 'nextImage'],

    data() {
        return {
            currentImg: this.firstImageId,
        }
    },

    watch: {
        // Keep the carousel synchronized with its parent
        firstImageId(newIndex) {
            if (newIndex !== this.currentImg) {
                this.currentImg = newIndex
            }
        },

        // Also handle navigation by swiping
        currentImg(newIndex, oldIndex) {
            if (newIndex === oldIndex || !this.images.length) {
                return
            }

            const count = this.images.length
            const normalizedIndex =
                ((newIndex % count) + count) % count

            if (newIndex > oldIndex) {
                this.$emit('nextImage', normalizedIndex)
            } else {
                this.$emit('prevImage', normalizedIndex)
            }
        },
    },

    methods: {
        nextImage() {
            if (this.images.length < 2) return

            this.currentImg =
                (this.currentImg + 1) % this.images.length
        },

        prevImage() {
            if (this.images.length < 2) return

            this.currentImg =
                (
                    this.currentImg - 1 +
                    this.images.length
                ) % this.images.length
        },
    },
}
</script>


<style lang="scss" scoped>
img {
    object-fit: cover;
    object-position: center;
    user-select: none;
}

.pictures {
    position: relative;
}

* {
    user-select: none;
}

.prevButton,
.nextButton {
    width: 10%;
    height: 97%;
    top: 0;
    position: absolute;
    margin: auto;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s;
    overflow: visible;
    svg {
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        width: 20px;
        transition: all 0.2s;
        opacity: 0.8;
        filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 1));
    }
}

.prevButton {
    left: 0;
    svg {
        transform: rotate(90deg);
        left: 18px;
    }
    &:hover {
        overflow: visible;

        svg {
            opacity: 1;
            left: 10px;
        }
    }
}

.nextButton {
    right: 0;
    svg {
        transform: rotate(-90deg);
        right: 18px;
    }
    &:hover {
        svg {
            opacity: 1;
            right: 10px;
        }
    }
}
.carousel {
    max-height: 70vh;
    overflow: hidden;
}
.slideImg {
    max-height: 70vh;
}
</style>

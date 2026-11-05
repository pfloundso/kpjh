import { _ as __nuxt_component_0 } from './DefaultView-96f97d93.mjs';
import { _ as _export_sfc, d as useRoute, e as useAsyncQuery, a as useState, f as __nuxt_component_0$3, u as useRuntimeConfig, b as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, toDisplayString, createCommentVNode, createTextVNode, nextTick, resolveComponent, Fragment, withKeys } from 'vue';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './Diashow-3b3c9b5e.mjs';
import pkg from 'file-saver';
import { gql } from 'graphql-tag';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'ohash';
import 'destr';
import 'defu';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'jsonwebtoken';
import 'ipx';
import 'vue3-carousel/dist/carousel.js';
import 'vue3-carousel';

const _sfc_main$2 = {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  props: {
    location: {
      type: Array,
      default: () => [0, 0]
    }
  },
  data() {
    return {
      zoom: 10,
      showMap: false,
      timer: void 0,
      center: this.location
    };
  },
  async mounted() {
    await nextTick();
    setTimeout(() => {
      this.showMap = true;
    }, 1e3);
  },
  methods: {
    mapChangeZoom(e) {
      this.zoom = e;
      this.reset();
    },
    mapChangeLocation(e) {
      this.center = e;
      this.reset();
    },
    reset() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.zoom = 14;
        this.center = this.location;
      }, 2500);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_l_map = resolveComponent("l-map");
  const _component_l_tile_layer = resolveComponent("l-tile-layer");
  const _component_l_marker = resolveComponent("l-marker");
  const _component_l_icon = resolveComponent("l-icon");
  if ($data.showMap) {
    _push(ssrRenderComponent(_component_l_map, mergeProps({
      ref: "map",
      "use-global-leaflet": false,
      zoom: $data.zoom,
      center: $data.center,
      options: {
        dragging: true,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        attributionControl: false
      },
      "onUpdate:zoom": $options.mapChangeZoom,
      "onUpdate:center": $options.mapChangeLocation
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_l_tile_layer, {
            url: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.cartoApiKey}`
          }, null, _parent2, _scopeId));
          if ($props.location) {
            _push2(ssrRenderComponent(_component_l_marker, { "lat-lng": $props.location }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_l_icon, {
                    "icon-url": "/images/location.svg",
                    "icon-size": [35, 35]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_l_icon, {
                      "icon-url": "/images/location.svg",
                      "icon-size": [35, 35]
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createVNode(_component_l_tile_layer, {
              url: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.cartoApiKey}`
            }, null, 8, ["url"]),
            $props.location ? (openBlock(), createBlock(_component_l_marker, {
              key: 0,
              "lat-lng": $props.location
            }, {
              default: withCtx(() => [
                createVNode(_component_l_icon, {
                  "icon-url": "/images/location.svg",
                  "icon-size": [35, 35]
                })
              ]),
              _: 1
            }, 8, ["lat-lng"])) : createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Map.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const { saveAs } = pkg;
const _sfc_main$1 = {
  props: {
    folderId: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
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
      pendingImages: /* @__PURE__ */ new Map(),
      disposed: false
    };
  },
  computed: {
    slideshowImages() {
      return this.images.map(
        (image) => image.fullImageUrl || image.thumbnailLink
      );
    }
  },
  watch: {
    open(isOpen) {
      if (isOpen)
        this.loadFolder();
    }
  },
  mounted() {
    if (this.open)
      this.loadFolder();
  },
  beforeUnmount() {
    this.disposed = true;
    this.images.forEach((image) => {
      if (image.fullImageUrl) {
        URL.revokeObjectURL(image.fullImageUrl);
      }
    });
  },
  methods: {
    // --------------------------------
    // Folder loading and pagination
    // --------------------------------
    async loadFolder() {
      var _a, _b;
      if (!useState("loggedIn").value || this.loadingMore || this.hasLoadedFirstPage && !this.nextPageToken) {
        return;
      }
      this.loadingMore = true;
      this.loadError = null;
      try {
        const params = new URLSearchParams({
          id: this.folderId
        });
        if (this.nextPageToken) {
          params.set("pageToken", this.nextPageToken);
        }
        const response = await $fetch(
          `/api/listImages?${params.toString()}`
        );
        if (this.disposed)
          return;
        const files = (_a = response.files) != null ? _a : [];
        const newFolders = files.filter(
          (file) => file.mimeType === "application/vnd.google-apps.folder"
        );
        const newImages = files.filter(
          (file) => {
            var _a2;
            return (_a2 = file.mimeType) == null ? void 0 : _a2.startsWith("image/");
          }
        ).map((image) => ({
          ...image,
          fullImageUrl: null,
          loaded: false,
          loading: false,
          error: null
        }));
        const existingFolderIds = new Set(
          this.folders.map((folder) => folder.id)
        );
        const existingImageIds = new Set(
          this.images.map((image) => image.id)
        );
        this.folders.push(
          ...newFolders.filter(
            (folder) => !existingFolderIds.has(folder.id)
          )
        );
        this.images.push(
          ...newImages.filter(
            (image) => !existingImageIds.has(image.id)
          )
        );
        this.nextPageToken = (_b = response.nextPageToken) != null ? _b : null;
        this.hasLoadedFirstPage = true;
      } catch (error) {
        console.error("Failed to load folder:", error);
        if (!this.disposed) {
          this.loadError = "Fotos konnten nicht geladen werden.";
        }
      } finally {
        this.loadingMore = false;
      }
    },
    // --------------------------------
    // Image loading
    // --------------------------------
    async getImageUrl(id) {
      const response = await fetch(
        `/api/image?id=${encodeURIComponent(id)}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to load image (${response.status})`
        );
      }
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    },
    loadImage(index) {
      const image = this.images[index];
      if (!image || this.disposed)
        return;
      if (image.loaded)
        return;
      if (this.pendingImages.has(image.id)) {
        return this.pendingImages.get(image.id);
      }
      image.loading = true;
      image.error = null;
      const request = (async () => {
        try {
          const url = await this.getImageUrl(image.id);
          if (this.disposed) {
            URL.revokeObjectURL(url);
            return;
          }
          if (!this.shouldKeepImage(index)) {
            URL.revokeObjectURL(url);
            return;
          }
          image.fullImageUrl = url;
          image.loaded = true;
        } catch (error) {
          console.error("Failed to load image:", error);
          if (!this.disposed) {
            image.error = error.message;
          }
        } finally {
          image.loading = false;
          this.pendingImages.delete(image.id);
        }
      })();
      this.pendingImages.set(image.id, request);
      return request;
    },
    // --------------------------------
    // Image cache / preloading
    // --------------------------------
    getNearbyIndices(index) {
      const count = this.images.length;
      if (!count)
        return [];
      const indices = /* @__PURE__ */ new Set();
      indices.add(index);
      for (let offset = 1; offset <= 2; offset++) {
        indices.add((index - offset + count) % count);
      }
      for (let offset = 1; offset <= 4; offset++) {
        indices.add((index + offset) % count);
      }
      return [...indices];
    },
    shouldKeepImage(index) {
      return this.getNearbyIndices(
        this.clickedImage
      ).includes(index);
    },
    async preloadImages(index) {
      const nearby = this.getNearbyIndices(index);
      await this.loadImage(index);
      if (this.disposed || this.clickedImage !== index)
        return;
      const neighbors = nearby.filter(
        (i) => i !== index
      );
      await Promise.all(
        neighbors.map((i) => this.loadImage(i))
      );
      await this.cleanupImages();
    },
    async cleanupImages() {
      if (this.disposed)
        return;
      const keep = new Set(
        this.getNearbyIndices(this.clickedImage)
      );
      const urlsToRelease = [];
      this.images.forEach((image, index) => {
        if (!keep.has(index) && image.fullImageUrl) {
          urlsToRelease.push(image.fullImageUrl);
          image.fullImageUrl = null;
          image.loaded = false;
        }
      });
      await nextTick();
      urlsToRelease.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    },
    // --------------------------------
    // Modal and slideshow
    // --------------------------------
    openImage(index) {
      this.clickedImage = index;
      this.showImageModal = true;
      this.preloadImages(index);
    },
    nextImage(index) {
      this.changeImage(index);
    },
    prevImage(index) {
      this.changeImage(index);
    },
    changeImage(index) {
      const count = this.images.length;
      if (!count)
        return;
      const normalizedIndex = (index % count + count) % count;
      this.clickedImage = normalizedIndex;
      this.cleanupImages();
      this.preloadImages(normalizedIndex);
    },
    // --------------------------------
    // Download original
    // --------------------------------
    downloadImage(index) {
      const image = this.images[index];
      if (!(image == null ? void 0 : image.fullImageUrl))
        return;
      saveAs(image.fullImageUrl, image.name);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Folder = __nuxt_component_3;
  const _component_Modal = __nuxt_component_0$2;
  const _component_Diashow = __nuxt_component_0$1;
  _push(`<!--[--><div class="accordion accordion-flush" data-v-4c3dba02><!--[-->`);
  ssrRenderList($data.folders, (folder, index) => {
    _push(`<div class="accordion-item" data-v-4c3dba02><h2 class="accordion-header" data-v-4c3dba02><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#" + folder.id)} aria-expanded="false" data-v-4c3dba02>${ssrInterpolate(folder.name)}</button></h2><div${ssrRenderAttr("id", folder.id)} class="accordion-collapse collapse" data-v-4c3dba02>`);
    if (folder.id) {
      _push(`<div class="accordion-body" data-v-4c3dba02>`);
      _push(ssrRenderComponent(_component_Folder, {
        "folder-id": folder.id,
        open: $data.openedChild === index
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
  if ($data.images.length) {
    _push(`<div class="photoGrid" data-v-4c3dba02><!--[-->`);
    ssrRenderList($data.images, (image, index) => {
      _push(`<img${ssrRenderAttr("src", image.thumbnailLink)}${ssrRenderAttr("alt", image.name)} referrerpolicy="no-referrer" loading="lazy" data-v-4c3dba02>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.nextPageToken) {
    _push(`<div class="loadMoreContainer" data-v-4c3dba02><button class="btn btn-primary" type="button"${ssrIncludeBooleanAttr($data.loadingMore) ? " disabled" : ""} data-v-4c3dba02>${ssrInterpolate($data.loadingMore ? "Fotos werden geladen..." : "Weitere Fotos laden")}</button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.loadError) {
    _push(`<p role="alert" data-v-4c3dba02>${ssrInterpolate($data.loadError)} <button type="button" data-v-4c3dba02> Erneut versuchen </button></p>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Modal, {
    show: $data.showImageModal,
    onClose: ($event) => $data.showImageModal = false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (_push2) {
        if ($data.images.length) {
          _push2(`<!--[-->`);
          _push2(ssrRenderComponent(_component_Diashow, {
            "first-image-id": $data.clickedImage,
            images: $options.slideshowImages,
            width: "80vw",
            onNextImage: $options.nextImage,
            onPrevImage: $options.prevImage
          }, null, _parent2, _scopeId));
          if (!((_a = $data.images[$data.clickedImage]) == null ? void 0 : _a.loaded) && !((_b = $data.images[$data.clickedImage]) == null ? void 0 : _b.error)) {
            _push2(`<div class="loader" data-v-4c3dba02${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          if ((_c = $data.images[$data.clickedImage]) == null ? void 0 : _c.error) {
            _push2(`<p class="imageError" role="alert" data-v-4c3dba02${_scopeId}> Bild konnte nicht geladen werden. </p>`);
          } else {
            _push2(`<!---->`);
          }
          if ((_d = $data.images[$data.clickedImage]) == null ? void 0 : _d.loaded) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="white" class="downloadButton" fill="currentColor" viewBox="-1 -1 19 19" role="button" tabindex="0" aria-label="Bild herunterladen" data-v-4c3dba02${_scopeId}><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1 1h-12a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" data-v-4c3dba02${_scopeId}></path><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" data-v-4c3dba02${_scopeId}></path></svg>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<!--]-->`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $data.images.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createVNode(_component_Diashow, {
              "first-image-id": $data.clickedImage,
              images: $options.slideshowImages,
              width: "80vw",
              onNextImage: $options.nextImage,
              onPrevImage: $options.prevImage
            }, null, 8, ["first-image-id", "images", "onNextImage", "onPrevImage"]),
            !((_e = $data.images[$data.clickedImage]) == null ? void 0 : _e.loaded) && !((_f = $data.images[$data.clickedImage]) == null ? void 0 : _f.error) ? (openBlock(), createBlock("div", {
              key: 0,
              class: "loader"
            })) : createCommentVNode("", true),
            ((_g = $data.images[$data.clickedImage]) == null ? void 0 : _g.error) ? (openBlock(), createBlock("p", {
              key: 1,
              class: "imageError",
              role: "alert"
            }, " Bild konnte nicht geladen werden. ")) : createCommentVNode("", true),
            ((_h = $data.images[$data.clickedImage]) == null ? void 0 : _h.loaded) ? (openBlock(), createBlock("svg", {
              key: 2,
              xmlns: "http://www.w3.org/2000/svg",
              "stroke-width": "1.5",
              stroke: "white",
              class: "downloadButton",
              fill: "currentColor",
              viewBox: "-1 -1 19 19",
              role: "button",
              tabindex: "0",
              "aria-label": "Bild herunterladen",
              onClick: ($event) => $options.downloadImage($data.clickedImage),
              onKeydown: withKeys(($event) => $options.downloadImage($data.clickedImage), ["enter"])
            }, [
              createVNode("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1 1h-12a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
              createVNode("path", { d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" })
            ], 40, ["onClick", "onKeydown"])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/photos/Folder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4c3dba02"]]);
const useLogin = () => {
  useState("showLogin").value = true;
};
const _sfc_main = {
  emits: ["back"],
  async setup() {
    const query = gql`
            query getAlbum($id: String!) {
                album(id: $id) {
                    title
                    eventType
                    eventDate
                    location {
                        lat
                        lon
                    }
                    folderId
                }
            }
        `;
    const variables = { id: useRoute().params.id };
    const {
      data: {
        value: { album }
      }
    } = await useAsyncQuery(query, variables);
    return { album };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DefaultView = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_Map = __nuxt_component_2;
  const _component_Folder = __nuxt_component_3;
  _push(ssrRenderComponent(_component_DefaultView, mergeProps({ titel: "Fotos" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<head data-v-8eb39a68${_scopeId}><title data-v-8eb39a68${_scopeId}>KPJH - Fotos</title></head><div class="wrapper" data-v-8eb39a68${_scopeId}><h3 class="title" data-v-8eb39a68${_scopeId}>${ssrInterpolate($setup.album.eventType)} ${ssrInterpolate($setup.album.title)}</h3>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "backButton",
          to: "/fotos"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<svg viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8eb39a68${_scopeId2}><path d="M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z" fill="#3D5C6D" fill-opacity="0.4" data-v-8eb39a68${_scopeId2}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 39",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z",
                    fill: "#3D5C6D",
                    "fill-opacity": "0.4"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<h3 data-v-8eb39a68${_scopeId}>${ssrInterpolate($setup.album.eventDate)}</h3><div class="map" data-v-8eb39a68${_scopeId}>`);
        if ($setup.album.location) {
          _push2(ssrRenderComponent(_component_Map, {
            location: [$setup.album.location.lat, $setup.album.location.lon]
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (("useState" in _ctx ? _ctx.useState : unref(useState))("loggedIn").value) {
          _push2(`<div class="photos" data-v-8eb39a68${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Folder, {
            "folder-id": $setup.album.folderId,
            open: true
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div class="contentLocked" data-v-8eb39a68${_scopeId}><svg viewBox="0 0 34 41" xmlns="http://www.w3.org/2000/svg" fill="#304C5C" data-v-8eb39a68${_scopeId}><path d="M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z" data-v-8eb39a68${_scopeId}></path></svg><p data-v-8eb39a68${_scopeId}>Bitte melde dich an um<br data-v-8eb39a68${_scopeId}>alle Bilder sehen zu k\xF6nnen:</p><button class="btn btn-primary" data-v-8eb39a68${_scopeId}> Anmelden </button></div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("head", null, [
            createVNode("title", null, "KPJH - Fotos")
          ]),
          createVNode("div", { class: "wrapper" }, [
            createVNode("h3", { class: "title" }, toDisplayString($setup.album.eventType) + " " + toDisplayString($setup.album.title), 1),
            createVNode(_component_NuxtLink, {
              class: "backButton",
              to: "/fotos"
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 39",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z",
                    fill: "#3D5C6D",
                    "fill-opacity": "0.4"
                  })
                ]))
              ]),
              _: 1
            }),
            createVNode("h3", null, toDisplayString($setup.album.eventDate), 1),
            createVNode("div", { class: "map" }, [
              $setup.album.location ? (openBlock(), createBlock(_component_Map, {
                key: 0,
                location: [$setup.album.location.lat, $setup.album.location.lon]
              }, null, 8, ["location"])) : createCommentVNode("", true)
            ]),
            ("useState" in _ctx ? _ctx.useState : unref(useState))("loggedIn").value ? (openBlock(), createBlock("div", {
              key: 0,
              class: "photos"
            }, [
              createVNode(_component_Folder, {
                "folder-id": $setup.album.folderId,
                open: true
              }, null, 8, ["folder-id"])
            ])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "contentLocked"
            }, [
              (openBlock(), createBlock("svg", {
                viewBox: "0 0 34 41",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#304C5C"
              }, [
                createVNode("path", { d: "M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z" })
              ])),
              createVNode("p", null, [
                createTextVNode("Bitte melde dich an um"),
                createVNode("br"),
                createTextVNode("alle Bilder sehen zu k\xF6nnen:")
              ]),
              createVNode("button", {
                class: "btn btn-primary",
                onClick: ($event) => ("useLogin" in _ctx ? _ctx.useLogin : unref(useLogin))()
              }, " Anmelden ", 8, ["onClick"])
            ]))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fotos/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8eb39a68"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-c0f0f85b.mjs.map

import { Carousel as Carousel$1, Slide as Slide$1 } from 'vue3-carousel/dist/carousel.js';
import { _ as _export_sfc } from '../server.mjs';
import { Carousel, Slide } from 'vue3-carousel';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  components: {
    Carousel,
    Slide
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    firstImageId: {
      type: Number,
      default: 0
    },
    repeat: Boolean,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    transition: {
      type: Number,
      default: 0
    }
  },
  emits: ["prevImage", "nextImage"],
  data() {
    return {
      currentImg: this.firstImageId
    };
  },
  watch: {
    // Keep the carousel synchronized with its parent
    firstImageId(newIndex) {
      if (newIndex !== this.currentImg) {
        this.currentImg = newIndex;
      }
    },
    // Also handle navigation by swiping
    currentImg(newIndex, oldIndex) {
      if (newIndex === oldIndex || !this.images.length) {
        return;
      }
      const count = this.images.length;
      const normalizedIndex = (newIndex % count + count) % count;
      if (newIndex > oldIndex) {
        this.$emit("nextImage", normalizedIndex);
      } else {
        this.$emit("prevImage", normalizedIndex);
      }
    }
  },
  methods: {
    nextImage() {
      if (this.images.length < 2)
        return;
      this.currentImg = (this.currentImg + 1) % this.images.length;
    },
    prevImage() {
      if (this.images.length < 2)
        return;
      this.currentImg = (this.currentImg - 1 + this.images.length) % this.images.length;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = Carousel$1;
  const _component_Slide = Slide$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pictures" }, _attrs))} data-v-c8f2dbc1>`);
  if ($props.images.length > 1) {
    _push(`<div class="prevButton" role="button" tabindex="0" aria-label="Vorheriges Bild" data-v-c8f2dbc1><svg viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg" data-v-c8f2dbc1><path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z" data-v-c8f2dbc1></path></svg></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Carousel, {
    modelValue: $data.currentImg,
    "onUpdate:modelValue": ($event) => $data.currentImg = $event,
    "wrap-around": "",
    transition: $props.transition,
    style: { width: $props.width, height: $props.height }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.images, (image, index) => {
          _push2(ssrRenderComponent(_component_Slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", image)} class="slideImg" style="${ssrRenderStyle({ width: $props.width, height: $props.height })}" alt="Foto" loading="lazy" data-v-c8f2dbc1${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: image,
                    class: "slideImg",
                    style: { width: $props.width, height: $props.height },
                    alt: "Foto",
                    loading: "lazy"
                  }, null, 12, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.images, (image, index) => {
            return openBlock(), createBlock(_component_Slide, { key: index }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: image,
                  class: "slideImg",
                  style: { width: $props.width, height: $props.height },
                  alt: "Foto",
                  loading: "lazy"
                }, null, 12, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.images.length > 1) {
    _push(`<div class="nextButton" role="button" tabindex="0" aria-label="N\xE4chstes Bild" data-v-c8f2dbc1><svg viewBox="0 0 28 18" fill="white" xmlns="http://www.w3.org/2000/svg" data-v-c8f2dbc1><path d="M15.9639 16.2952C14.8821 17.4034 13.1179 17.4034 12.0361 16.2952L0.801466 4.78587C-0.267156 3.69112 -0.267156 1.92596 0.801466 0.831215C1.88326 -0.277029 3.64744 -0.277029 4.72924 0.831215L14 10.5L23.2708 0.831214C24.3526 -0.27703 26.1167 -0.27703 27.1985 0.831214C28.2672 1.92596 28.2672 3.69112 27.1985 4.78587L15.9639 16.2952Z" data-v-c8f2dbc1></path></svg></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/helpers/Diashow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c8f2dbc1"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Diashow-3b3c9b5e.mjs.map

import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './DefaultView-96f97d93.mjs';
import { _ as _export_sfc, e as useAsyncQuery, b as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './Diashow-3b3c9b5e.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { gql } from 'graphql-tag';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'googleapis';
import 'jsonwebtoken';
import 'ipx';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'vue3-carousel/dist/carousel.js';
import 'vue3-carousel';

const _sfc_main$2 = {
  props: {
    groupData: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Diashow = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "groupDetails" }, _attrs))} data-v-8d1f9e9d><div class="pics" data-v-8d1f9e9d>`);
  _push(ssrRenderComponent(_component_Diashow, {
    images: $props.groupData.images.items.map((image) => image.url),
    "current-img": "3",
    height: "280px",
    repeat: ""
  }, null, _parent));
  _push(`</div><div class="name" data-v-8d1f9e9d>${ssrInterpolate($props.groupData.name)}</div><div class="info" data-v-8d1f9e9d><p data-v-8d1f9e9d>Jahrgang: ${ssrInterpolate($props.groupData.year)}</p>`);
  if ($props.groupData.time) {
    _push(`<p data-v-8d1f9e9d>Gruppenstunde: ${ssrInterpolate($props.groupData.time)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p data-v-8d1f9e9d>Leiter:in: ${ssrInterpolate($props.groupData.supervisor)}</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/groups/GroupDetails.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8d1f9e9d"]]);
const _imports_0 = "" + buildAssetsURL("imageError.ef762fd4.svg");
const _sfc_main$1 = {
  props: {
    gruppe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDetails: false,
      loaded: false
    };
  },
  computed: {
    getImages() {
      return this.gruppe.images.items;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = __nuxt_component_0$2;
  const _component_GroupDetails = __nuxt_component_1$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Modal, {
    show: $data.showDetails,
    "button-color": "white",
    onClose: ($event) => $data.showDetails = false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GroupDetails, { "group-data": $props.gruppe }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_GroupDetails, { "group-data": $props.gruppe }, null, 8, ["group-data"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="group" data-v-e07381ab>`);
  if ($options.getImages[0]) {
    _push(`<img class="cover"${ssrRenderAttr("src", $options.getImages[0].url)} data-v-e07381ab>`);
  } else {
    _push(`<img class="cover"${ssrRenderAttr("src", _imports_0)} data-v-e07381ab>`);
  }
  _push(`<p class="name" data-v-e07381ab>${ssrInterpolate($props.gruppe.name)}</p><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" data-v-e07381ab><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" data-v-e07381ab></path></svg></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/groups/Group.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e07381ab"]]);
const _sfc_main = {
  async setup() {
    const query = gql`
            query {
                groups: groupCollection(limit: 0) {
                    items {
                        name
                        supervisor
                        year
                        time
                        images: imagesCollection(limit: 0) {
                            items {
                                url(
                                    transform: {
                                        format: JPG_PROGRESSIVE
                                        quality: 20
                                    }
                                )
                            }
                        }
                    }
                }
            }
        `;
    const {
      data: {
        value: {
          groups: { items: groups }
        }
      }
    } = await useAsyncQuery(query);
    groups.forEach((group) => {
      group.numericYear = Number(group.year.slice(-4));
    });
    const sortedGroups = groups.sort((a, b) => b.numericYear - a.numericYear);
    return { groups: sortedGroups };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DefaultView = __nuxt_component_0;
  const _component_Group = __nuxt_component_1;
  _push(ssrRenderComponent(_component_DefaultView, mergeProps({ titel: "Gruppen" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<head data-v-2cb8753c${_scopeId}><title data-v-2cb8753c${_scopeId}>KPJH - Gruppen</title></head><div class="groups" data-v-2cb8753c${_scopeId}><div class="group-grid" data-v-2cb8753c${_scopeId}><!--[-->`);
        ssrRenderList($setup.groups, (group, index) => {
          _push2(ssrRenderComponent(_component_Group, {
            key: index,
            gruppe: group
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("head", null, [
            createVNode("title", null, "KPJH - Gruppen")
          ]),
          createVNode("div", { class: "groups" }, [
            createVNode("div", { class: "group-grid" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.groups, (group, index) => {
                return openBlock(), createBlock(_component_Group, {
                  key: index,
                  gruppe: group
                }, null, 8, ["gruppe"]);
              }), 128))
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gruppen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gruppen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2cb8753c"]]);

export { gruppen as default };
//# sourceMappingURL=gruppen-05044813.mjs.map

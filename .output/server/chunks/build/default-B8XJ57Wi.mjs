import { defineComponent, h, ref, mergeProps, unref, mergeDefaults, withCtx, createBlock, createCommentVNode, createVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { u as useLoadingIndicator, a as useCategory } from './loading-indicator-VUhMIUcD.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-CYwSUJtg.mjs';
import __nuxt_component_1$1 from './index-ByARHp6E.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_2 } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@vue/shared';
import './asyncData-6bOAxUdy.mjs';
import 'perfect-debounce';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-DKG304T8.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    hideDelay: {
      type: Number,
      default: 500
    },
    resetDelay: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      hideDelay: props.hideDelay,
      resetDelay: props.resetDelay,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeDefaults({
    to: String,
    label: String,
    align: String,
    icon: String
  }, {
    to: "/",
    label: "",
    icon: "",
    align: "start"
  }),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: `h-14 min-w-32 p-4 text-white hover:bg-[#3d76ad] hover:text-cyan-400 flex justify-${__props.align} items-center gap-2`,
        to: __props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: __props.icon,
                style: { "font-size": "18px" }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p${_scopeId}>${ssrInterpolate(__props.label)}</p>`);
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: __props.icon,
                style: { "font-size": "18px" }
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createVNode("p", null, toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/top/item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "MenuTopItem" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const hoveredItem = ref(null);
    const hovered = ref(false);
    const hover = (item) => {
      hovered.value = true;
      hoveredItem.value = item;
    };
    const { menuOptions, loadCategory, newsCategories } = useCategory();
    loadCategory();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuTopItem = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex justify-start items-center bg-primary max-h-14" }, _attrs))}><div class="text-neutral-700 text-[20px] mx-8">AFK<span class="text-white">hub</span>.ru</div><!--[-->`);
      ssrRenderList(unref(menuOptions), (item) => {
        _push(ssrRenderComponent(_component_MenuTopItem, {
          align: "center",
          onMouseenter: ($event) => hover(item),
          to: item.to,
          label: item.label,
          icon: item.icon
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(hovered)) {
        _push(`<div class="w-full h-auto absolute left-0 top-14 bg-[#3d76ad] opacity-90 text-white flex flex-col justify-start items-start p-4"><!--[-->`);
        ssrRenderList(unref(newsCategories), (subitem) => {
          _push(ssrRenderComponent(_component_MenuTopItem, {
            to: subitem.to,
            label: subitem.label,
            icon: subitem.icon
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/top/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "MenuTop" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
  const _component_MenuTop = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, {
    color: "#57aaf7",
    height: 4
  }, null, _parent));
  _push(ssrRenderComponent(_component_MenuTop, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-B8XJ57Wi.mjs.map

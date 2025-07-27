import { defineComponent, useTemplateRef, watch, computed, unref, ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
import { u as useLoadingIndicator, a as useCategory } from './loading-indicator-VUhMIUcD.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { useElementVisibility } from '@vueuse/core';
import 'vue-router';
import '@iconify/vue';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "tag" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tags/item.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "TagsItem" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "item",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { getCategoryByUUID, loadCategory, allCategories } = useCategory();
    if (allCategories.value.length === 0) {
      loadCategory();
    }
    const api = useRuntimeConfig().public.API;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_tags_item = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col sm:flex-row hover:bg-neutral-700 cursor-pointer justify-start items-center border-b-1 border-r-1 border-[#3b3b40]" }, _attrs))} data-v-9c10daa4><div class="w-full min-h-[450px] h-full article-cover" style="${ssrRenderStyle(`background-image: url(${unref(api)}/assets/${_ctx.item.cover});`)}" data-v-9c10daa4></div><div class="w-full h-full p-8" data-v-9c10daa4><h2 class="text-primary" data-v-9c10daa4>${ssrInterpolate(_ctx.item.name)}</h2><div size="small" class="mb-4 text-white inline-flex gap-1" data-v-9c10daa4><!--[-->`);
      ssrRenderList(_ctx.item.categories, (category) => {
        _push(ssrRenderComponent(_component_tags_item, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(getCategoryByUUID)(category.categories_uuid || ""))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(getCategoryByUUID)(category.categories_uuid || "")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (_ctx.item.short_content) {
        _push(`<div class="text-white" data-v-9c10daa4>${_ctx.item.short_content ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/news/item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-9c10daa4"]]), { __name: "NewsItem" });
const useArticle = () => {
  const items = ref([]);
  const loadingBar = useLoadingIndicator();
  const limit = 4;
  let offset = 0;
  let allLoading = false;
  const fetchItems = async () => {
    loadingBar.start();
    if (allLoading) {
      loadingBar.finish();
      return;
    }
    await $fetch("/api/articles?limit=" + limit + "&offset=" + offset).then((articles) => {
      if (offset === 0) {
        items.value = articles;
      } else {
        if (Array.isArray(articles) && articles.length === 0) allLoading = true;
        for (let article of articles) {
          items.value.push(article);
        }
      }
      loadingBar.finish();
      offset += limit;
    });
  };
  return {
    items,
    fetchItems,
    loadingBar
  };
};
const _imports_0 = publicAssetsURL("/spinner.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    width: "50",
    src: _imports_0,
    alt: "loading"
  }, _attrs))}>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chared/spinner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Spinner = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "CharedSpinner" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loader = useTemplateRef("loader");
    const targetIsVisible = useElementVisibility(loader);
    const { fetchItems, items: news, loadingBar } = useArticle();
    watch(targetIsVisible, (isVisible) => {
      if (isVisible) {
        fetchItems();
      }
    });
    const loaderVisible = computed(() => {
      return !loadingBar.isLoading.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NewsItem = __nuxt_component_0$1;
      _push(`<!--[--><div class="w-full grid grid-cols-1 xl:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(news), (item) => {
        _push(ssrRenderComponent(_component_NewsItem, { item }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(loaderVisible)) {
        _push(`<div class="flex justify-center items-center p-4">`);
        _push(ssrRenderComponent(Spinner, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/news/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "News" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_News = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_News, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B1dMxB0P.mjs.map

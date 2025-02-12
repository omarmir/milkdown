'use strict';

var core = require('@milkdown/kit/core');
var commonmark = require('@milkdown/kit/preset/commonmark');
var gfm = require('@milkdown/kit/preset/gfm');
var history = require('@milkdown/kit/plugin/history');
var indent = require('@milkdown/kit/plugin/indent');
var utils = require('@milkdown/kit/utils');
var clipboard = require('@milkdown/kit/plugin/clipboard');
var trailing = require('@milkdown/kit/plugin/trailing');
var ctx = require('@milkdown/kit/ctx');
var listener = require('@milkdown/kit/plugin/listener');

var CrepeFeature = /* @__PURE__ */ ((CrepeFeature2) => {
  CrepeFeature2["CodeMirror"] = "code-mirror";
  CrepeFeature2["ListItem"] = "list-item";
  CrepeFeature2["LinkTooltip"] = "link-tooltip";
  CrepeFeature2["Cursor"] = "cursor";
  CrepeFeature2["ImageBlock"] = "image-block";
  CrepeFeature2["BlockEdit"] = "block-edit";
  CrepeFeature2["Toolbar"] = "toolbar";
  CrepeFeature2["Placeholder"] = "placeholder";
  CrepeFeature2["Table"] = "table";
  CrepeFeature2["Latex"] = "latex";
  return CrepeFeature2;
})(CrepeFeature || {});
const defaultFeatures = {
  ["cursor" /* Cursor */]: true,
  ["list-item" /* ListItem */]: true,
  ["link-tooltip" /* LinkTooltip */]: true,
  ["image-block" /* ImageBlock */]: true,
  ["block-edit" /* BlockEdit */]: true,
  ["placeholder" /* Placeholder */]: true,
  ["toolbar" /* Toolbar */]: true,
  ["code-mirror" /* CodeMirror */]: true,
  ["table" /* Table */]: true,
  ["latex" /* Latex */]: true
};
async function loadFeature(feature, editor, config) {
  switch (feature) {
    case "code-mirror" /* CodeMirror */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-DZmlmuIU.js'); });
      return defineFeature(editor, config);
    }
    case "list-item" /* ListItem */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-BJhhsrPv.js'); });
      return defineFeature(editor, config);
    }
    case "link-tooltip" /* LinkTooltip */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-DB_Dzz99.js'); });
      return defineFeature(editor, config);
    }
    case "image-block" /* ImageBlock */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-_7bLgFIN.js'); });
      return defineFeature(editor, config);
    }
    case "cursor" /* Cursor */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-BuSAwj4j.js'); });
      return defineFeature(editor, config);
    }
    case "block-edit" /* BlockEdit */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-xo_nbMJj.js'); });
      return defineFeature(editor, config);
    }
    case "placeholder" /* Placeholder */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-Dub20F3z.js'); });
      return defineFeature(editor, config);
    }
    case "toolbar" /* Toolbar */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-CoLhXfbE.js'); });
      return defineFeature(editor, config);
    }
    case "table" /* Table */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-DlNibqv5.js'); });
      return defineFeature(editor, config);
    }
    case "latex" /* Latex */: {
      const { defineFeature } = await Promise.resolve().then(function () { return require('./index-D_a4yX-a.js'); });
      return defineFeature(editor, config);
    }
  }
}

const FeaturesCtx = ctx.createSlice([], "FeaturesCtx");
const crepeCtx = ctx.createSlice({}, "CrepeCtx");
function configureFeatures(features) {
  return (ctx) => {
    ctx.inject(FeaturesCtx, features);
  };
}

var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _editor, _initPromise, _rootElement, _editable;
class Crepe {
  constructor({
    root,
    features = {},
    featureConfigs = {},
    defaultValue = ""
  }) {
    __privateAdd(this, _editor);
    __privateAdd(this, _initPromise);
    __privateAdd(this, _rootElement);
    __privateAdd(this, _editable, true);
    var _a;
    const enabledFeatures = Object.entries({
      ...defaultFeatures,
      ...features
    }).filter(([, enabled]) => enabled).map(([feature]) => feature);
    __privateSet(this, _rootElement, (_a = typeof root === "string" ? document.querySelector(root) : root) != null ? _a : document.body);
    __privateSet(this, _editor, core.Editor.make().config((ctx) => {
      ctx.inject(crepeCtx, this);
    }).config(configureFeatures(enabledFeatures)).config((ctx) => {
      ctx.set(core.rootCtx, __privateGet(this, _rootElement));
      ctx.set(core.defaultValueCtx, defaultValue);
      ctx.set(core.editorViewOptionsCtx, {
        editable: () => __privateGet(this, _editable)
      });
      ctx.update(indent.indentConfig.key, (value) => ({
        ...value,
        size: 4
      }));
    }).use(commonmark.commonmark).use(listener.listener).use(history.history).use(indent.indent).use(trailing.trailing).use(clipboard.clipboard).use(gfm.gfm));
    const promiseList = [];
    enabledFeatures.forEach((feature) => {
      const config = featureConfigs[feature];
      promiseList.push(loadFeature(feature, __privateGet(this, _editor), config));
    });
    __privateSet(this, _initPromise, Promise.all(promiseList));
  }
  async create() {
    await __privateGet(this, _initPromise);
    return __privateGet(this, _editor).create();
  }
  async destroy() {
    await __privateGet(this, _initPromise);
    return __privateGet(this, _editor).destroy();
  }
  get editor() {
    return __privateGet(this, _editor);
  }
  setReadonly(value) {
    __privateSet(this, _editable, !value);
    return this;
  }
  getMarkdown() {
    return __privateGet(this, _editor).action(utils.getMarkdown());
  }
  on(fn) {
    if (__privateGet(this, _editor).status !== core.EditorStatus.Created) {
      __privateGet(this, _editor).config((ctx) => {
        const listener2 = ctx.get(listener.listenerCtx);
        fn(listener2);
      });
      return this;
    }
    __privateGet(this, _editor).action((ctx) => {
      const listener2 = ctx.get(listener.listenerCtx);
      fn(listener2);
    });
    return this;
  }
}
_editor = new WeakMap();
_initPromise = new WeakMap();
_rootElement = new WeakMap();
_editable = new WeakMap();
Crepe.Feature = CrepeFeature;

exports.Crepe = Crepe;
exports.CrepeFeature = CrepeFeature;
exports.FeaturesCtx = FeaturesCtx;
exports.crepeCtx = crepeCtx;
//# sourceMappingURL=index-zAgs5czn.js.map

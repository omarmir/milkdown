'use strict';

var tooltip = require('@milkdown/kit/plugin/tooltip');
var state = require('@milkdown/kit/prose/state');
var index$1 = require('./index-AlHHvSR_.js');
var atomico = require('atomico');
var core = require('@milkdown/kit/core');
var commonmark = require('@milkdown/kit/preset/commonmark');
var clsx = require('clsx');
var linkTooltip = require('@milkdown/kit/component/link-tooltip');
var gfm = require('@milkdown/kit/preset/gfm');
var todoList = require('./todo-list-V4JWO5-M.js');
var inlineLatex = require('./inline-latex-D0G71cGk.js');
var index = require('./index-zAgs5czn.js');
require('@milkdown/kit/utils');
require('katex');
require('@milkdown/kit/plugin/history');
require('@milkdown/kit/plugin/indent');
require('@milkdown/kit/plugin/clipboard');
require('@milkdown/kit/plugin/trailing');
require('@milkdown/kit/ctx');
require('@milkdown/kit/plugin/listener');

const functionsIcon = atomico.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7 19v-.808L13.096 12L7 5.808V5h10v1.25H9.102L14.727 12l-5.625 5.77H17V19z"
    />
  </svg>
`;

const toolbarComponent = ({
  ctx,
  hide,
  show,
  config,
  selection
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const update = atomico.useUpdate();
  atomico.useEffect(() => {
    update();
  }, [show]);
  const onClick = (fn) => (e) => {
    e.preventDefault();
    ctx && fn(ctx);
    update();
  };
  const isActive = (mark) => {
    if (!ctx || !selection) return false;
    const view = ctx.get(core.editorViewCtx);
    const {
      state: { doc }
    } = view;
    return doc.rangeHasMark(selection.from, selection.to, mark);
  };
  const containsNode = (node) => {
    if (!ctx || !selection) return false;
    const view = ctx.get(core.editorViewCtx);
    const {
      state: { doc }
    } = view;
    if (selection instanceof state.NodeSelection) {
      return selection.node.type === node;
    }
    const { from, to } = selection;
    let hasNode = false;
    doc.nodesBetween(from, to, (n) => {
      if (n.type === node) {
        hasNode = true;
        return false;
      }
      return true;
    });
    return hasNode;
  };
  const flags = ctx == null ? void 0 : ctx.get(index.FeaturesCtx);
  const isLatexEnabled = flags == null ? void 0 : flags.includes(index.CrepeFeature.Latex);
  const toggleLatex = (ctx2) => {
    const hasLatex = containsNode(inlineLatex.mathInlineSchema.type(ctx2));
    const view = ctx2.get(core.editorViewCtx);
    const { selection: selection2, doc, tr } = view.state;
    if (!hasLatex) {
      const text = doc.textBetween(selection2.from, selection2.to);
      let _tr2 = tr.replaceSelectionWith(
        inlineLatex.mathInlineSchema.type(ctx2).create({
          value: text
        })
      );
      view.dispatch(
        _tr2.setSelection(state.NodeSelection.create(_tr2.doc, selection2.from))
      );
      return;
    }
    const { from, to } = selection2;
    let pos = -1;
    let node = null;
    doc.nodesBetween(from, to, (n, p) => {
      if (node) return false;
      if (n.type === inlineLatex.mathInlineSchema.type(ctx2)) {
        pos = p;
        node = n;
        return false;
      }
      return true;
    });
    if (!node || pos < 0) return;
    let _tr = tr.delete(pos, pos + 1);
    const content = node.attrs.value;
    _tr = _tr.insertText(content, pos);
    view.dispatch(
      _tr.setSelection(
        state.TextSelection.create(_tr.doc, from, to + content.length - 1)
      )
    );
  };
  return atomico.html`<host>
    <button
      type="button"
      class=${clsx(
    "toolbar-item",
    ctx && isActive(commonmark.strongSchema.type(ctx)) && "active"
  )}
      onmousedown=${onClick((ctx2) => {
    const commands = ctx2.get(core.commandsCtx);
    commands.call(commonmark.toggleStrongCommand.key);
  })}
    >
      ${(_b = (_a = config == null ? void 0 : config.boldIcon) == null ? void 0 : _a.call(config)) != null ? _b : todoList.boldIcon}
    </button>
    <button
      type="button"
      class=${clsx(
    "toolbar-item",
    ctx && isActive(commonmark.emphasisSchema.type(ctx)) && "active"
  )}
      onmousedown=${onClick((ctx2) => {
    const commands = ctx2.get(core.commandsCtx);
    commands.call(commonmark.toggleEmphasisCommand.key);
  })}
    >
      ${(_d = (_c = config == null ? void 0 : config.italicIcon) == null ? void 0 : _c.call(config)) != null ? _d : todoList.italicIcon}
    </button>
    <button
      type="button"
      class=${clsx(
    "toolbar-item",
    ctx && isActive(gfm.strikethroughSchema.type(ctx)) && "active"
  )}
      onmousedown=${onClick((ctx2) => {
    const commands = ctx2.get(core.commandsCtx);
    commands.call(gfm.toggleStrikethroughCommand.key);
  })}
    >
      ${(_f = (_e = config == null ? void 0 : config.strikethroughIcon) == null ? void 0 : _e.call(config)) != null ? _f : todoList.strikethroughIcon}
    </button>
    <div class="divider"></div>
    <button
      type="button"
      class=${clsx(
    "toolbar-item",
    ctx && isActive(commonmark.inlineCodeSchema.type(ctx)) && "active"
  )}
      onmousedown=${onClick((ctx2) => {
    const commands = ctx2.get(core.commandsCtx);
    commands.call(commonmark.toggleInlineCodeCommand.key);
  })}
    >
      ${(_h = (_g = config == null ? void 0 : config.codeIcon) == null ? void 0 : _g.call(config)) != null ? _h : todoList.codeIcon}
    </button>
    ${isLatexEnabled && atomico.html`<button
      type="button"
      class=${clsx(
    "toolbar-item",
    ctx && containsNode(inlineLatex.mathInlineSchema.type(ctx)) && "active"
  )}
      onmousedown=${onClick(toggleLatex)}
    >
      ${(_j = (_i = config == null ? void 0 : config.latexIcon) == null ? void 0 : _i.call(config)) != null ? _j : functionsIcon}
    </button>`}
    <button
      type="button"
      class=${clsx(
    "toolbar-item",
    ctx && isActive(commonmark.linkSchema.type(ctx)) && "active"
  )}
      onmousedown=${onClick((ctx2) => {
    const view = ctx2.get(core.editorViewCtx);
    const { selection: selection2 } = view.state;
    if (isActive(commonmark.linkSchema.type(ctx2))) {
      ctx2.get(linkTooltip.linkTooltipAPI.key).removeLink(selection2.from, selection2.to);
      return;
    }
    ctx2.get(linkTooltip.linkTooltipAPI.key).addLink(selection2.from, selection2.to);
    hide == null ? void 0 : hide();
  })}
    >
      ${(_l = (_k = config == null ? void 0 : config.linkIcon) == null ? void 0 : _k.call(config)) != null ? _l : todoList.linkIcon}
    </button>
  </host>`;
};
toolbarComponent.props = {
  ctx: Object,
  hide: Function,
  show: Boolean,
  config: Object,
  selection: Object
};
const ToolbarElement = atomico.c(toolbarComponent);

var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _tooltipProvider, _content;
const toolbar = tooltip.tooltipFactory("CREPE_TOOLBAR");
class ToolbarView {
  constructor(ctx, view, config) {
    __privateAdd(this, _tooltipProvider);
    __privateAdd(this, _content);
    this.update = (view, prevState) => {
      __privateGet(this, _tooltipProvider).update(view, prevState);
      __privateGet(this, _content).selection = view.state.selection;
    };
    this.destroy = () => {
      __privateGet(this, _tooltipProvider).destroy();
      __privateGet(this, _content).remove();
    };
    this.hide = () => {
      __privateGet(this, _tooltipProvider).hide();
    };
    const content = new ToolbarElement();
    __privateSet(this, _content, content);
    __privateGet(this, _content).ctx = ctx;
    __privateGet(this, _content).hide = this.hide;
    __privateGet(this, _content).config = config;
    __privateGet(this, _content).selection = view.state.selection;
    __privateSet(this, _tooltipProvider, new tooltip.TooltipProvider({
      content: __privateGet(this, _content),
      debounce: 20,
      offset: 10,
      shouldShow(view2) {
        const { doc, selection } = view2.state;
        const { empty, from, to } = selection;
        const isEmptyTextBlock = !doc.textBetween(from, to).length && selection instanceof state.TextSelection;
        const isNotTextBlock = !(selection instanceof state.TextSelection);
        const activeElement = view2.dom.getRootNode().activeElement;
        const isTooltipChildren = content.contains(activeElement);
        const notHasFocus = !view2.hasFocus() && !isTooltipChildren;
        const isReadonly = !view2.editable;
        if (notHasFocus || isNotTextBlock || empty || isEmptyTextBlock || isReadonly)
          return false;
        return true;
      }
    }));
    __privateGet(this, _tooltipProvider).onShow = () => {
      __privateGet(this, _content).show = true;
    };
    __privateGet(this, _tooltipProvider).onHide = () => {
      __privateGet(this, _content).show = false;
    };
    this.update(view);
  }
}
_tooltipProvider = new WeakMap();
_content = new WeakMap();
index$1.defIfNotExists("milkdown-toolbar", ToolbarElement);
const defineFeature = (editor, config) => {
  editor.config((ctx) => {
    ctx.set(toolbar.key, {
      view: (view) => new ToolbarView(ctx, view, config)
    });
  }).use(toolbar);
};

exports.defineFeature = defineFeature;
//# sourceMappingURL=index-CoLhXfbE.js.map

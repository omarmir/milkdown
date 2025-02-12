'use strict';

var katex = require('katex');
var codeBlock = require('@milkdown/kit/component/code-block');
var index = require('./index-zAgs5czn.js');
var remarkMath = require('remark-math');
var utils = require('@milkdown/kit/utils');
var unistUtilVisit = require('unist-util-visit');
var inlineLatex = require('./inline-latex-D0G71cGk.js');
var index$1 = require('./index-AlHHvSR_.js');
var atomico = require('atomico');
var tooltip = require('@milkdown/kit/plugin/tooltip');
var state = require('@milkdown/kit/prose/state');
var view = require('@milkdown/kit/prose/view');
var keymap = require('@milkdown/kit/prose/keymap');
var history = require('@milkdown/kit/prose/history');
var model = require('@milkdown/kit/prose/model');
var todoList = require('./todo-list-V4JWO5-M.js');
var prose = require('@milkdown/kit/prose');
var commonmark = require('@milkdown/kit/preset/commonmark');
var inputrules = require('@milkdown/kit/prose/inputrules');
require('@milkdown/kit/core');
require('@milkdown/kit/preset/gfm');
require('@milkdown/kit/plugin/history');
require('@milkdown/kit/plugin/indent');
require('@milkdown/kit/plugin/clipboard');
require('@milkdown/kit/plugin/trailing');
require('@milkdown/kit/ctx');
require('@milkdown/kit/plugin/listener');

const remarkMathPlugin = utils.$remark(
  "remarkMath",
  () => remarkMath
);
function visitMathBlock(ast) {
  return unistUtilVisit.visit(
    ast,
    "math",
    (node, index, parent) => {
      const { value } = node;
      const newNode = {
        type: "code",
        lang: "LaTeX",
        value
      };
      parent.children.splice(index, 1, newNode);
    }
  );
}
const remarkMathBlockPlugin = utils.$remark(
  "remarkMathBlock",
  () => () => visitMathBlock
);

const latexEditComponent = ({
  config,
  innerView,
  updateValue
}) => {
  var _a;
  const onMouseDown = (e) => {
    e.preventDefault();
    updateValue == null ? void 0 : updateValue();
  };
  return atomico.html`
    <host>
      <div class="container">
        ${innerView && atomico.h(innerView.dom, {})}
        <button onmousedown=${onMouseDown}>
          ${(_a = config == null ? void 0 : config.inlineEditConfirm) == null ? void 0 : _a.call(config)}
        </button>
      </div>
    </host>
  `;
};
latexEditComponent.props = {
  config: Object,
  innerView: Object,
  updateValue: Function
};
const LatexInlineEditElement = atomico.c(latexEditComponent);

const inlineLatexTooltip = tooltip.tooltipFactory("INLINE_LATEX");

var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _content, _provider, _dom, _innerView, _onHide, _shouldShow;
class LatexInlineTooltip {
  constructor(ctx, view$1, config) {
    this.ctx = ctx;
    __privateAdd(this, _content, new LatexInlineEditElement());
    __privateAdd(this, _provider);
    __privateAdd(this, _dom);
    __privateAdd(this, _innerView);
    __privateAdd(this, _onHide, () => {
      if (__privateGet(this, _innerView)) {
        __privateGet(this, _innerView).destroy();
        __privateSet(this, _innerView, null);
      }
    });
    __privateAdd(this, _shouldShow, (view$1) => {
      const shouldShow = () => {
        const { selection, schema } = view$1.state;
        if (selection.empty) return false;
        if (!(selection instanceof state.NodeSelection)) return false;
        const node = selection.node;
        if (node.type.name !== inlineLatex.mathInlineId) return false;
        const textFrom = selection.from;
        const paragraph = schema.nodes.paragraph.create(
          null,
          schema.text(node.attrs.value)
        );
        const innerView = new view.EditorView(__privateGet(this, _dom), {
          state: state.EditorState.create({
            doc: paragraph,
            schema: new model.Schema({
              nodes: {
                doc: {
                  content: "block+"
                },
                paragraph: {
                  content: "inline*",
                  group: "block",
                  parseDOM: [{ tag: "p" }],
                  toDOM() {
                    return ["p", 0];
                  }
                },
                text: {
                  group: "inline"
                }
              }
            }),
            plugins: [
              keymap.keymap({
                "Mod-z": history.undo,
                "Mod-Z": history.redo,
                "Mod-y": history.redo,
                Enter: () => {
                  var _a, _b;
                  (_b = (_a = __privateGet(this, _content)).updateValue) == null ? void 0 : _b.call(_a);
                  return true;
                }
              })
            ]
          })
        });
        __privateSet(this, _innerView, innerView);
        __privateGet(this, _content).innerView = __privateGet(this, _innerView);
        __privateGet(this, _content).updateValue = () => {
          const { tr } = view$1.state;
          tr.setNodeAttribute(textFrom, "value", innerView.state.doc.textContent);
          view$1.dispatch(tr);
          requestAnimationFrame(() => {
            view$1.focus();
          });
        };
        return true;
      };
      const show = shouldShow();
      if (!show) __privateGet(this, _onHide).call(this);
      return show;
    });
    this.update = (view, prevState) => {
      __privateGet(this, _provider).update(view, prevState);
    };
    this.destroy = () => {
      __privateGet(this, _provider).destroy();
      __privateGet(this, _content).remove();
    };
    __privateSet(this, _provider, new tooltip.TooltipProvider({
      debounce: 0,
      content: __privateGet(this, _content),
      shouldShow: __privateGet(this, _shouldShow),
      offset: 10,
      floatingUIOptions: {
        placement: "bottom"
      }
    }));
    __privateGet(this, _content).config = config;
    __privateGet(this, _provider).update(view$1);
    __privateSet(this, _dom, document.createElement("div"));
    __privateSet(this, _innerView, null);
  }
}
_content = new WeakMap();
_provider = new WeakMap();
_dom = new WeakMap();
_innerView = new WeakMap();
_onHide = new WeakMap();
_shouldShow = new WeakMap();

const mathInlineInputRule = utils.$inputRule(
  (ctx) => prose.nodeRule(/(?:\$)([^$]+)(?:\$)$/, inlineLatex.mathInlineSchema.type(ctx), {
    getAttr: (match) => {
      var _a;
      return {
        value: (_a = match[1]) != null ? _a : ""
      };
    }
  })
);
const mathBlockInputRule = utils.$inputRule(
  (ctx) => inputrules.textblockTypeInputRule(/^\$\$[\s\n]$/, commonmark.codeBlockSchema.type(ctx), () => ({
    language: "LaTeX"
  }))
);

const blockLatexSchema = commonmark.codeBlockSchema.extendSchema((prev) => {
  return (ctx) => {
    const baseSchema = prev(ctx);
    return {
      ...baseSchema,
      toMarkdown: {
        match: baseSchema.toMarkdown.match,
        runner: (state, node) => {
          var _a, _b;
          const language = (_a = node.attrs.language) != null ? _a : "";
          if (language.toLowerCase() === "latex") {
            state.addNode(
              "math",
              void 0,
              ((_b = node.content.firstChild) == null ? void 0 : _b.text) || ""
            );
          } else {
            return baseSchema.toMarkdown.runner(state, node);
          }
        }
      }
    };
  };
});

index$1.defIfNotExists("milkdown-latex-inline-edit", LatexInlineEditElement);
const defineFeature = (editor, config) => {
  editor.config((ctx) => {
    const flags = ctx.get(index.FeaturesCtx);
    const isCodeMirrorEnabled = flags.includes(index.CrepeFeature.CodeMirror);
    if (!isCodeMirrorEnabled) {
      throw new Error("You need to enable CodeMirror to use LaTeX feature");
    }
    ctx.update(codeBlock.codeBlockConfig.key, (prev) => ({
      ...prev,
      renderPreview: (language, content) => {
        if (language.toLowerCase() === "latex" && content.length > 0) {
          return renderLatex(content, config == null ? void 0 : config.katexOptions);
        }
        const renderPreview = prev.renderPreview;
        return renderPreview(language, content);
      }
    }));
    ctx.set(inlineLatexTooltip.key, {
      view: (view) => {
        var _a;
        return new LatexInlineTooltip(ctx, view, {
          inlineEditConfirm: (_a = config == null ? void 0 : config.inlineEditConfirm) != null ? _a : () => todoList.confirmIcon,
          ...config
        });
      }
    });
  }).use(remarkMathPlugin).use(remarkMathBlockPlugin).use(inlineLatex.mathInlineSchema).use(inlineLatexTooltip).use(mathInlineInputRule).use(mathBlockInputRule).use(blockLatexSchema);
};
function renderLatex(content, options) {
  const html = katex.renderToString(content, {
    ...options,
    throwOnError: false,
    displayMode: true
  });
  return html;
}

exports.defineFeature = defineFeature;
//# sourceMappingURL=index-D_a4yX-a.js.map

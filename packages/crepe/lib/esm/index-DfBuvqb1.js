import katex from 'katex';
import { codeBlockConfig } from '@milkdown/kit/component/code-block';
import { F as FeaturesCtx, C as CrepeFeature } from './index-DmtfYIY6.js';
import remarkMath from 'remark-math';
import { $remark, $inputRule } from '@milkdown/kit/utils';
import { visit } from 'unist-util-visit';
import { a as mathInlineId, m as mathInlineSchema } from './inline-latex-C9IGAXXQ.js';
import { d as defIfNotExists } from './index-D6fLMv29.js';
import { c, html, h } from 'atomico';
import { tooltipFactory, TooltipProvider } from '@milkdown/kit/plugin/tooltip';
import { NodeSelection, EditorState } from '@milkdown/kit/prose/state';
import { EditorView } from '@milkdown/kit/prose/view';
import { keymap } from '@milkdown/kit/prose/keymap';
import { redo, undo } from '@milkdown/kit/prose/history';
import { Schema } from '@milkdown/kit/prose/model';
import { g as confirmIcon } from './todo-list-B9RfgTQO.js';
import { nodeRule } from '@milkdown/kit/prose';
import { codeBlockSchema } from '@milkdown/kit/preset/commonmark';
import { textblockTypeInputRule } from '@milkdown/kit/prose/inputrules';
import '@milkdown/kit/core';
import '@milkdown/kit/preset/gfm';
import '@milkdown/kit/plugin/history';
import '@milkdown/kit/plugin/indent';
import '@milkdown/kit/plugin/clipboard';
import '@milkdown/kit/plugin/trailing';
import '@milkdown/kit/ctx';
import '@milkdown/kit/plugin/listener';

const remarkMathPlugin = $remark(
  "remarkMath",
  () => remarkMath
);
function visitMathBlock(ast) {
  return visit(
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
const remarkMathBlockPlugin = $remark(
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
  return html`
    <host>
      <div class="container">
        ${innerView && h(innerView.dom, {})}
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
const LatexInlineEditElement = c(latexEditComponent);

const inlineLatexTooltip = tooltipFactory("INLINE_LATEX");

var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _content, _provider, _dom, _innerView, _onHide, _shouldShow;
class LatexInlineTooltip {
  constructor(ctx, view, config) {
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
    __privateAdd(this, _shouldShow, (view) => {
      const shouldShow = () => {
        const { selection, schema } = view.state;
        if (selection.empty) return false;
        if (!(selection instanceof NodeSelection)) return false;
        const node = selection.node;
        if (node.type.name !== mathInlineId) return false;
        const textFrom = selection.from;
        const paragraph = schema.nodes.paragraph.create(
          null,
          schema.text(node.attrs.value)
        );
        const innerView = new EditorView(__privateGet(this, _dom), {
          state: EditorState.create({
            doc: paragraph,
            schema: new Schema({
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
              keymap({
                "Mod-z": undo,
                "Mod-Z": redo,
                "Mod-y": redo,
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
          const { tr } = view.state;
          tr.setNodeAttribute(textFrom, "value", innerView.state.doc.textContent);
          view.dispatch(tr);
          requestAnimationFrame(() => {
            view.focus();
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
    __privateSet(this, _provider, new TooltipProvider({
      debounce: 0,
      content: __privateGet(this, _content),
      shouldShow: __privateGet(this, _shouldShow),
      offset: 10,
      floatingUIOptions: {
        placement: "bottom"
      }
    }));
    __privateGet(this, _content).config = config;
    __privateGet(this, _provider).update(view);
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

const mathInlineInputRule = $inputRule(
  (ctx) => nodeRule(/(?:\$)([^$]+)(?:\$)$/, mathInlineSchema.type(ctx), {
    getAttr: (match) => {
      var _a;
      return {
        value: (_a = match[1]) != null ? _a : ""
      };
    }
  })
);
const mathBlockInputRule = $inputRule(
  (ctx) => textblockTypeInputRule(/^\$\$[\s\n]$/, codeBlockSchema.type(ctx), () => ({
    language: "LaTeX"
  }))
);

const blockLatexSchema = codeBlockSchema.extendSchema((prev) => {
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

defIfNotExists("milkdown-latex-inline-edit", LatexInlineEditElement);
const defineFeature = (editor, config) => {
  editor.config((ctx) => {
    const flags = ctx.get(FeaturesCtx);
    const isCodeMirrorEnabled = flags.includes(CrepeFeature.CodeMirror);
    if (!isCodeMirrorEnabled) {
      throw new Error("You need to enable CodeMirror to use LaTeX feature");
    }
    ctx.update(codeBlockConfig.key, (prev) => ({
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
          inlineEditConfirm: (_a = config == null ? void 0 : config.inlineEditConfirm) != null ? _a : () => confirmIcon,
          ...config
        });
      }
    });
  }).use(remarkMathPlugin).use(remarkMathBlockPlugin).use(mathInlineSchema).use(inlineLatexTooltip).use(mathInlineInputRule).use(mathBlockInputRule).use(blockLatexSchema);
};
function renderLatex(content, options) {
  const html = katex.renderToString(content, {
    ...options,
    throwOnError: false,
    displayMode: true
  });
  return html;
}

export { defineFeature };
//# sourceMappingURL=index-DfBuvqb1.js.map

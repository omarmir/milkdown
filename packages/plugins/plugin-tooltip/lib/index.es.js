var S = (s) => {
  throw TypeError(s);
};
var P = (s, t, e) => t.has(s) || S("Cannot " + e);
var i = (s, t, e) => (P(s, t, "read from private field"), e ? e.call(s) : t.get(s)), n = (s, t, e) => t.has(s) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), l = (s, t, e, o) => (P(s, t, "write to private field"), o ? o.call(s, e) : t.set(s, e), e), b = (s, t, e) => (P(s, t, "access private method"), e);
import { TextSelection as H, Plugin as M, PluginKey as R } from "@milkdown/prose/state";
import U from "lodash.throttle";
import { computePosition as C, flip as E, offset as I, shift as j } from "@floating-ui/dom";
import { posToDOMRect as q } from "@milkdown/prose";
import { $ctx as K, $prose as L } from "@milkdown/utils";
var d, f, u, a, c, m, g, $, _;
class V {
  constructor(t) {
    n(this, $);
    /// @internal
    n(this, d);
    /// @internal
    n(this, f);
    /// @internal
    n(this, u);
    /// @internal
    n(this, a);
    n(this, c);
    /// @internal
    n(this, m);
    n(this, g);
    l(this, c, !1), this.onShow = () => {
    }, this.onHide = () => {
    }, l(this, g, (e, o) => {
      var T;
      const { state: h, composing: p } = e, { selection: y, doc: x } = h, { ranges: w } = y, k = Math.min(...w.map((r) => r.$from.pos)), O = Math.max(...w.map((r) => r.$to.pos)), B = o && o.doc.eq(x) && o.selection.eq(y);
      if (i(this, c) || ((T = e.dom.parentElement) == null || T.appendChild(this.element), l(this, c, !0)), p || B) return;
      if (!i(this, f).call(this, e, o)) {
        this.hide();
        return;
      }
      C({
        getBoundingClientRect: () => q(e, k, O)
      }, this.element, {
        placement: i(this, a).placement ?? "top",
        middleware: [E(), I(i(this, m)), j(), ...i(this, u)]
      }).then(({ x: r, y: F }) => {
        Object.assign(this.element.style, {
          left: `${r}px`,
          top: `${F}px`
        });
      }), this.show();
    }), this.update = (e, o) => {
      U(i(this, g), i(this, d))(e, o);
    }, this.destroy = () => {
    }, this.show = (e) => {
      this.element.dataset.show = "true", e && C(e, this.element, {
        placement: "top",
        middleware: [E(), I(i(this, m))],
        ...i(this, a)
      }).then(({ x: o, y: h }) => {
        Object.assign(this.element.style, {
          left: `${o}px`,
          top: `${h}px`
        });
      }), this.onShow();
    }, this.hide = () => {
      this.element.dataset.show !== "false" && (this.element.dataset.show = "false", this.onHide());
    }, this.element = t.content, l(this, d, t.debounce ?? 200), l(this, f, t.shouldShow ?? b(this, $, _)), l(this, m, t.offset), l(this, u, t.middleware ?? []), l(this, a, t.floatingUIOptions ?? {}), this.element.dataset.show = "false";
  }
}
d = new WeakMap(), f = new WeakMap(), u = new WeakMap(), a = new WeakMap(), c = new WeakMap(), m = new WeakMap(), g = new WeakMap(), $ = new WeakSet(), /// @internal
_ = function(t) {
  const { doc: e, selection: o } = t.state, { empty: h, from: p, to: y } = o, x = !e.textBetween(p, y).length && t.state.selection instanceof H, w = this.element.contains(document.activeElement), k = !t.hasFocus() && !w, O = !t.editable;
  return !(k || h || x || O);
};
function W(s) {
  const t = K(
    {},
    `${s}_TOOLTIP_SPEC`
  ), e = L((h) => {
    const p = h.get(t.key);
    return new M({
      key: new R(`${s}_TOOLTIP`),
      ...p
    });
  }), o = [t, e];
  return o.key = t.key, o.pluginKey = e.key, t.meta = {
    package: "@milkdown/plugin-tooltip",
    displayName: `Ctx<tooltipSpec>|${s}`
  }, e.meta = {
    package: "@milkdown/plugin-tooltip",
    displayName: `Prose<tooltip>|${s}`
  }, o;
}
export {
  V as TooltipProvider,
  W as tooltipFactory
};
//# sourceMappingURL=index.es.js.map

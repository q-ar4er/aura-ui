import { computed as c, defineComponent as g, createElementBlock as i, openBlock as o, normalizeClass as _, renderSlot as S, useAttrs as K, createBlock as C, unref as k, mergeProps as z, withCtx as B, createCommentVNode as p, createElementVNode as n, createTextVNode as q, toDisplayString as v, createVNode as T, ref as I, normalizeStyle as j, Fragment as U, renderList as H, watchEffect as pe, watch as oe, onBeforeUnmount as G, Teleport as be, Transition as ne, withModifiers as Y, nextTick as re, toRefs as ge, onMounted as ie, createSlots as ye } from "vue";
import { Motion as N } from "@motionone/vue";
import { Icon as D } from "@iconify/vue";
import xe from "vue-echarts";
const ce = "aura-theme", W = () => typeof window < "u" && typeof document < "u", we = (e) => W() ? (e == null ? void 0 : e.target) ?? document.documentElement : null, ke = () => {
  var e;
  return W() && ((e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-color-scheme: light)").matches);
}, de = (e, a) => {
  const t = we(a);
  if (!t) return;
  const s = e === "auto" ? ke() ? "light" : "dark" : e;
  t.dataset.theme = s;
}, $e = (e) => {
  if (!W()) return null;
  const a = (e == null ? void 0 : e.storageKey) ?? ce, t = window.localStorage.getItem(a);
  return t === "light" || t === "dark" || t === "auto" ? t : null;
}, Ka = (e, a) => {
  if (!W()) return;
  const t = (a == null ? void 0 : a.storageKey) ?? ce;
  window.localStorage.setItem(t, e), de(e, a);
}, Ua = (e) => {
  const a = $e(e) ?? "auto";
  return de(a, e), a;
}, Ce = "0.1.0", Se = "0.1.0", Ha = () => ({
  ui: Se,
  tokens: Ce
}), E = (e) => typeof window > "u" ? "" : getComputedStyle(document.documentElement).getPropertyValue(e).trim(), _e = (e = "neutral") => {
  const a = [
    E("--aura-accent-300"),
    E("--aura-accent-200"),
    E("--aura-accent-400")
  ].filter(Boolean), t = [E("--aura-success-300"), E("--aura-success-200")].filter(Boolean), s = [E("--aura-danger-300"), E("--aura-danger-200")].filter(Boolean);
  return e === "positive" ? [...t, ...a] : e === "negative" ? [...s, ...a] : a;
}, Ae = () => {
  const e = E("--fg-muted") || "#94a3b8", a = E("--border") || "rgba(148,163,184,0.2)";
  return {
    backgroundColor: "transparent",
    textStyle: { fontFamily: "inherit", color: e },
    grid: { left: 16, right: 16, top: 16, bottom: 16, containLabel: !0 },
    xAxis: {
      axisLine: { lineStyle: { color: a } },
      axisTick: { show: !1 },
      axisLabel: { color: e },
      splitLine: { lineStyle: { color: a } }
    },
    yAxis: {
      axisLine: { lineStyle: { color: a } },
      axisTick: { show: !1 },
      axisLabel: { color: e },
      splitLine: { lineStyle: { color: a } }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "line" }
    }
  };
}, ae = (e) => {
  if (!e || typeof e != "object") return !1;
  const a = Object.getPrototypeOf(e);
  return a === Object.prototype || a === null;
}, Q = (e, a) => {
  const t = { ...e };
  for (const [s, l] of Object.entries(a)) {
    const r = t[s];
    if (Array.isArray(l)) {
      t[s] = l;
      continue;
    }
    if (ae(r) && ae(l)) {
      t[s] = Q(r, l);
      continue;
    }
    t[s] = l;
  }
  return t;
}, Be = (e, { tone: a = "neutral" } = {}) => ({
  themedOption: c(() => {
    const s = _e(a), l = Ae();
    return Q(l, Q({ color: s }, e));
  })
}), ue = (e, a) => {
  if (e) {
    if (typeof e == "string") {
      a.push(e);
      return;
    }
    if (Array.isArray(e)) {
      for (const t of e)
        ue(t, a);
      return;
    }
    for (const [t, s] of Object.entries(e))
      s && a.push(t);
  }
}, V = (...e) => {
  const a = [];
  for (const t of e)
    ue(t, a);
  return a.join(" ").trim();
}, qa = (e, a = "info") => {
  typeof window > "u" || window.dispatchEvent(new CustomEvent("aura:toast", { detail: { type: a, message: e } }));
}, Ve = /* @__PURE__ */ g({
  name: "AuraBadge",
  __name: "Badge",
  props: {
    tone: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const a = e, t = {
      default: "bg-white/5 text-[color:var(--text)]/90 shadow-[var(--shadow-neo)] border border-white/5",
      accent: "bg-[var(--gradient-accent-soft)] text-[color:var(--text)] shadow-[var(--shadow-neo-accent)]",
      muted: "bg-white/5 text-[color:var(--muted)] border border-white/10"
    }, s = c(
      () => V(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs uppercase tracking-wide",
        t[a.tone]
      )
    );
    return (l, r) => (o(), i("span", {
      class: _(s.value)
    }, [
      S(l.$slots, "default")
    ], 2));
  }
}), Le = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, Te = "relative inline-flex select-none items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] will-change-transform", se = /* @__PURE__ */ g({
  name: "AuraButton",
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md"
    },
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: [Object, String],
      default: void 0
    }
  },
  setup(e) {
    const a = e, t = K(), s = {
      sm: "px-3 py-2 text-xs",
      md: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3 text-base"
    }, l = {
      primary: "bg-[var(--gradient-accent)] text-[color:var(--text)] shadow-[var(--shadow-neo-accent)] hover:shadow-[var(--shadow-glow)] focus-visible:shadow-[var(--shadow-glow)]",
      ghost: "border border-white/10 bg-transparent text-[color:var(--text)] backdrop-blur-[var(--blur)] hover:border-white/20 hover:bg-white/8",
      subtle: "bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)] text-[color:var(--text)]/90 shadow-[var(--shadow-neo)] hover:shadow-[var(--shadow-neo-accent)]",
      pill: "bg-[var(--gradient-accent-soft)] text-[color:var(--text)]/95 shadow-[var(--shadow-neo)] hover:shadow-[var(--shadow-neo-accent)]"
    }, r = c(
      () => V(Te, s[a.size], l[a.variant], {
        "w-full": a.block,
        "opacity-60 pointer-events-none": a.disabled || a.loading
      })
    ), d = c(() => a.loading ? "opacity-0" : "opacity-100"), h = c(() => a.disabled || a.loading ? void 0 : { scale: 1.02 }), m = c(() => a.disabled || a.loading ? void 0 : { scale: 0.97 });
    return (f, u) => (o(), C(k(N), z({
      tag: "button",
      class: r.value,
      disabled: e.disabled || e.loading,
      "while-hover": h.value,
      "while-tap": m.value
    }, k(t)), {
      default: B(() => [
        e.loading ? (o(), i("span", Le, [...u[0] || (u[0] = [
          n("svg", {
            class: "h-5 w-5 animate-spin text-[color:var(--text)]/70",
            viewBox: "0 0 24 24",
            "aria-hidden": "true"
          }, [
            n("circle", {
              class: "opacity-20",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "3",
              fill: "none"
            }),
            n("path", {
              d: "M22 12a10 10 0 0 1-10 10",
              stroke: "currentColor",
              "stroke-width": "3",
              "stroke-linecap": "round",
              fill: "none"
            })
          ], -1)
        ])])) : p("", !0),
        n("span", {
          class: _(["flex w-full items-center justify-center gap-2", d.value])
        }, [
          e.icon && !e.loading ? (o(), C(k(D), {
            key: 0,
            icon: e.icon,
            class: "h-5 w-5",
            "aria-hidden": "true"
          }, null, 8, ["icon"])) : p("", !0),
          S(f.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16, ["class", "disabled", "while-hover", "while-tap"]));
  }
}), Ya = /* @__PURE__ */ g({
  name: "AuraSurfaceButton",
  __name: "SurfaceButton",
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const a = e, t = K(), s = c(
      () => V(
        "relative inline-flex select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)]",
        {
          "opacity-60 pointer-events-none": a.disabled
        }
      )
    ), l = c(() => a.disabled ? void 0 : { scale: 1.01 }), r = c(() => a.disabled ? void 0 : { scale: 0.99 });
    return (d, h) => (o(), C(k(N), z({
      tag: "button",
      class: s.value,
      disabled: e.disabled,
      "while-hover": l.value,
      "while-tap": r.value
    }, k(t)), {
      default: B(() => [
        S(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "disabled", "while-hover", "while-tap"]));
  }
}), X = /* @__PURE__ */ g({
  __name: "CardSurface",
  props: {
    tone: {
      type: String,
      default: "default"
    },
    padded: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const a = e, t = {
      default: "bg-[color:var(--panel)]/95 shadow-[var(--shadow-neo)] text-[color:var(--text)]",
      accent: "bg-[var(--gradient-accent-soft)] shadow-[var(--shadow-neo-accent)] text-[color:var(--text)]",
      translucent: "backdrop-blur-[var(--blur)] bg-white/5 border border-white/10 text-[color:var(--text)]",
      muted: "bg-[color:var(--panel)]/60 shadow-[var(--shadow-neo-soft)] text-[color:var(--text)]",
      strong: "bg-[color:var(--panel)] shadow-[var(--shadow-neo-strong)] text-[color:var(--text)]"
    }, s = c(
      () => V(
        "rounded-[var(--radius-active)] transition-shadow",
        t[a.tone],
        a.padded ? "p-6" : ""
      )
    );
    return (l, r) => (o(), i("section", {
      class: _(s.value)
    }, [
      S(l.$slots, "default")
    ], 2));
  }
}), Me = {
  class: "h-full w-full",
  viewBox: "0 0 120 120",
  "aria-hidden": "true"
}, Ie = ["id"], je = ["stroke", "stroke-dashoffset"], ze = {
  key: 0,
  class: "absolute text-center"
}, fe = /* @__PURE__ */ g({
  __name: "ProgressRadial",
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: "md"
    },
    showLabel: {
      type: Boolean,
      default: !0
    },
    gradientId: {
      type: String,
      default: "progress-radial"
    }
  },
  setup(e) {
    const a = e, t = c(() => {
      switch (a.size) {
        case "sm":
          return "h-12 w-12";
        case "lg":
          return "h-32 w-32";
        default:
          return "h-24 w-24";
      }
    }), s = 2 * Math.PI * 54, l = c(() => Math.min(1, Math.max(0, a.value))), r = c(() => Math.round(l.value * 100)), d = c(() => s * (1 - l.value));
    return (h, m) => (o(), i("div", {
      class: _(["relative flex items-center justify-center", t.value])
    }, [
      (o(), i("svg", Me, [
        n("defs", null, [
          n("linearGradient", {
            id: e.gradientId,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%"
          }, [...m[0] || (m[0] = [
            n("stop", {
              offset: "0%",
              "stop-color": "var(--accent)"
            }, null, -1),
            n("stop", {
              offset: "100%",
              "stop-color": "var(--accent-2)"
            }, null, -1)
          ])], 8, Ie)
        ]),
        m[1] || (m[1] = n("circle", {
          class: "opacity-30",
          cx: "60",
          cy: "60",
          r: "54",
          stroke: "var(--accent)",
          "stroke-width": "10",
          fill: "none"
        }, null, -1)),
        n("circle", {
          stroke: `url(#${e.gradientId})`,
          cx: "60",
          cy: "60",
          r: "54",
          "stroke-width": "10",
          "stroke-linecap": "round",
          fill: "none",
          "stroke-dasharray": s,
          "stroke-dashoffset": d.value,
          transform: "rotate(-90 60 60)"
        }, null, 8, je)
      ])),
      e.showLabel ? (o(), i("div", ze, [
        S(h.$slots, "default", { value: r.value }, () => [
          q(v(r.value) + "%", 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ g({
  __name: "Dial",
  props: {
    value: {},
    size: { default: "sm" },
    showLabel: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (a, t) => (o(), C(fe, {
      value: e.value,
      size: e.size,
      "show-label": e.showLabel
    }, null, 8, ["value", "size", "show-label"]));
  }
}), Fe = { class: "sr-only" }, Ga = /* @__PURE__ */ g({
  __name: "IconButton",
  props: {
    icon: {
      type: [Object, String],
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const a = e, t = K(), s = c(
      () => V(
        "relative flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)] text-[color:var(--text)] shadow-[var(--shadow-neo)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] hover:shadow-[var(--shadow-neo-accent)]",
        {
          "opacity-40 pointer-events-none": a.disabled
        }
      )
    ), l = c(() => a.disabled ? void 0 : { scale: 1.08 }), r = c(() => a.disabled ? void 0 : { scale: 0.94 });
    return (d, h) => (o(), C(k(N), z({
      tag: "button",
      class: s.value,
      "while-hover": l.value,
      "while-tap": r.value,
      disabled: e.disabled
    }, k(t)), {
      default: B(() => [
        T(k(D), {
          icon: e.icon,
          class: "h-5 w-5",
          "aria-hidden": "true"
        }, null, 8, ["icon"]),
        S(d.$slots, "overlay"),
        n("span", Fe, [
          S(d.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["class", "while-hover", "while-tap", "disabled"]));
  }
}), Ee = { class: "block space-y-2" }, De = {
  key: 0,
  class: "text-sm font-medium text-muted"
}, Ne = ["type", "value", "placeholder", "disabled"], Wa = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "TextInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    message: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = {
      default: "",
      error: "border-red-500/70 text-red-200 placeholder:text-red-200 caret-red-300 focus-visible:ring-red-400/50 focus-visible:ring-offset-red-400/10 focus-visible:border-red-400/60 selection:bg-red-500/20 selection:text-red-100",
      success: "border-emerald-500/70 text-emerald-100 placeholder:text-emerald-100 caret-emerald-300 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-emerald-400/10 focus-visible:border-emerald-400/60 selection:bg-emerald-500/20 selection:text-emerald-50"
    }, r = c(
      () => V("neo-field", l[t.state])
    ), d = c(
      () => V("text-xs", {
        "text-muted": t.state === "default",
        "text-red-300": t.state === "error",
        "text-emerald-300": t.state === "success"
      })
    ), h = (m) => {
      const f = m.target;
      s("update:modelValue", f.value), s("change", f.value);
    };
    return (m, f) => (o(), i("label", Ee, [
      e.label ? (o(), i("span", De, v(e.label), 1)) : p("", !0),
      n("input", z({
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        class: r.value,
        disabled: e.disabled
      }, m.$attrs, { onInput: h }), null, 16, Ne),
      e.message ? (o(), i("p", {
        key: 1,
        class: _(d.value)
      }, v(e.message), 3)) : p("", !0)
    ]));
  }
}), Pe = { class: "block space-y-2" }, Re = {
  key: 0,
  class: "text-sm font-medium text-muted"
}, Ke = ["value", "placeholder", "rows", "disabled"], Ja = /* @__PURE__ */ g({
  inheritAttrs: !1,
  __name: "TextArea",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: Number,
      default: 4
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = {
      default: "",
      error: "border-red-500/70 text-red-200 placeholder:text-red-200 caret-red-300 focus-visible:ring-red-400/50 focus-visible:ring-offset-red-400/10 focus-visible:border-red-400/60 selection:bg-red-500/20 selection:text-red-100",
      success: "border-emerald-500/70 text-emerald-100 placeholder:text-emerald-100 caret-emerald-300 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-emerald-400/10 focus-visible:border-emerald-400/60 selection:bg-emerald-500/20 selection:text-emerald-50"
    }, r = c(
      () => V("neo-field resize-y", l[t.state])
    ), d = c(
      () => V("text-xs", {
        "text-muted": t.state === "default",
        "text-red-300": t.state === "error",
        "text-emerald-300": t.state === "success"
      })
    ), h = (m) => {
      const f = m.target;
      s("update:modelValue", f.value), s("change", f.value);
    };
    return (m, f) => (o(), i("label", Pe, [
      e.label ? (o(), i("span", Re, v(e.label), 1)) : p("", !0),
      n("textarea", z({
        value: e.modelValue,
        placeholder: e.placeholder,
        rows: e.rows,
        class: r.value,
        disabled: e.disabled
      }, m.$attrs, { onInput: h }), null, 16, Ke),
      e.message ? (o(), i("p", {
        key: 1,
        class: _(d.value)
      }, v(e.message), 3)) : p("", !0)
    ]));
  }
}), Ue = ["value", "placeholder", "rows", "disabled"], Qa = /* @__PURE__ */ g({
  name: "AuraTextAreaControl",
  inheritAttrs: !1,
  __name: "TextAreaControl",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 4
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: a, emit: t }) {
    const s = e, l = t, r = I(null), d = c(
      () => V("neo-field resize-y", {
        "opacity-60 pointer-events-none": s.disabled
      })
    ), h = (f) => {
      const u = f.target;
      l("update:modelValue", u.value), l("change", u.value);
    };
    return a({
      get el() {
        return r.value;
      },
      focus: () => {
        var f;
        return (f = r.value) == null ? void 0 : f.focus();
      }
    }), (f, u) => (o(), i("textarea", z({
      ref_key: "el",
      ref: r,
      value: e.modelValue,
      placeholder: e.placeholder,
      rows: e.rows,
      disabled: e.disabled,
      class: d.value
    }, f.$attrs, { onInput: h }), null, 16, Ue));
  }
}), He = ["multiple", "accept", "disabled"], Xa = /* @__PURE__ */ g({
  name: "AuraFileInput",
  inheritAttrs: !1,
  __name: "FileInput",
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change"],
  setup(e, { expose: a, emit: t }) {
    const s = t, l = I(null), r = () => {
      var m;
      (m = l.value) == null || m.click();
    }, d = () => {
      l.value && (l.value.value = "");
    }, h = (m) => {
      s("change", m);
    };
    return a({
      get el() {
        return l.value;
      },
      open: r,
      reset: d
    }), (m, f) => (o(), i("input", z({
      ref_key: "el",
      ref: l,
      type: "file",
      multiple: e.multiple,
      accept: e.accept,
      disabled: e.disabled
    }, m.$attrs, { onChange: h }), null, 16, He));
  }
}), qe = ["value", "min", "max", "step", "disabled"], Za = /* @__PURE__ */ g({
  name: "AuraRange",
  inheritAttrs: !1,
  __name: "Range",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: a, emit: t }) {
    const s = e, l = t, r = I(null), d = c(() => {
      const b = s.modelValue;
      return Number.isFinite(b) ? b : 0;
    }), h = (b) => {
      const y = b.target, $ = y.valueAsNumber;
      return Number.isFinite($) ? $ : Number(y.value);
    }, m = (b) => {
      l("update:modelValue", h(b));
    }, f = (b) => {
      l("change", h(b));
    };
    return a({
      get el() {
        return r.value;
      },
      focus: () => {
        var b;
        return (b = r.value) == null ? void 0 : b.focus();
      }
    }), (b, y) => (o(), i("input", z({
      ref_key: "el",
      ref: r,
      type: "range",
      value: d.value,
      min: e.min,
      max: e.max,
      step: e.step,
      disabled: e.disabled
    }, b.$attrs, {
      onInput: m,
      onChange: f
    }), null, 16, qe));
  }
}), Ye = "<path d='M5 14l4.5-5.5 3.5 4 6-7.5' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/><path d='M16 5h3v3' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/>", Ge = {
  body: Ye
}, We = "<path d='M5 6l5 5 3.5-4 6 7.5' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/><path d='M16 19h3v-3' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/>", Je = {
  body: We
}, Qe = { class: "space-y-2" }, Xe = {
  key: 0,
  class: "text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]"
}, Ze = { class: "flex items-baseline gap-3" }, et = {
  class: "font-display font-semibold text-[color:var(--text)]",
  style: { "font-size": "calc(2.4rem * var(--font-scale))", "line-height": "1.06" }
}, tt = {
  key: 1,
  class: "inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-[color:var(--muted)]"
}, at = {
  key: 1,
  class: "text-sm text-[color:var(--muted)]"
}, st = /* @__PURE__ */ g({
  __name: "KpiNumber",
  props: {
    label: { default: void 0 },
    value: {},
    description: { default: "" },
    prefix: { default: "" },
    suffix: { default: "" },
    unit: { default: void 0 },
    trend: { default: void 0 },
    direction: { default: void 0 }
  },
  setup(e) {
    const a = e, t = c(() => a.unit ?? a.suffix), s = c(() => `${a.prefix}${a.value}${t.value}`), l = c(
      () => a.trend !== void 0 && a.trend >= 0 ? "inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-200" : "inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-medium text-rose-200"
    ), r = c(() => a.trend !== void 0 && a.trend >= 0 ? Ge : Je), d = c(
      () => a.direction === "up" ? "mdi:trending-up" : a.direction === "down" ? "mdi:trending-down" : "mdi:minus"
    );
    return (h, m) => (o(), i("div", Qe, [
      e.label ? (o(), i("p", Xe, v(e.label), 1)) : p("", !0),
      n("div", Ze, [
        n("h3", et, v(s.value), 1),
        e.trend !== void 0 ? (o(), i("span", {
          key: 0,
          class: _(l.value)
        }, [
          T(k(D), {
            icon: r.value,
            class: "h-4 w-4",
            "aria-hidden": "true"
          }, null, 8, ["icon"]),
          n("span", null, v(Math.abs(e.trend)) + "%", 1)
        ], 2)) : e.direction ? (o(), i("span", tt, [
          T(k(D), {
            icon: d.value,
            class: "h-4 w-4",
            "aria-hidden": "true"
          }, null, 8, ["icon"])
        ])) : p("", !0)
      ]),
      e.description ? (o(), i("p", at, v(e.description), 1)) : p("", !0)
    ]));
  }
}), lt = { class: "space-y-2" }, ot = { class: "flex items-center justify-between text-xs text-[color:var(--muted)]" }, nt = { key: 0 }, rt = { class: "h-2 w-full overflow-hidden rounded-full bg-white/5 shadow-[var(--shadow-neo-inset)]" }, me = /* @__PURE__ */ g({
  __name: "ProgressLinear",
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const a = e, t = c(() => Math.min(100, Math.max(0, Math.round(a.value * 100))));
    return (s, l) => (o(), i("div", lt, [
      n("div", ot, [
        e.label ? (o(), i("span", nt, v(e.label), 1)) : p("", !0),
        n("span", null, v(t.value) + "%", 1)
      ]),
      n("div", rt, [
        n("div", {
          class: "h-full rounded-full bg-[var(--gradient-accent)]",
          style: j({ width: `${t.value}%` })
        }, null, 4)
      ])
    ]));
  }
}), it = ["aria-pressed", "onClick"], ct = /* @__PURE__ */ g({
  __name: "SegmentedControl",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = c(
      () => V(
        "relative isolate flex w-full gap-1 rounded-full border border-white/10 bg-[color:color-mix(in_srgb,var(--panel)_94%,transparent)]/80 p-1 text-sm text-[color:var(--muted)] shadow-[var(--shadow-neo-inset)] backdrop-blur-[14px]"
      )
    ), r = c(() => t.options.findIndex((u) => u.value === t.modelValue)), d = c(() => ({
      width: `${t.options.length ? 100 / t.options.length : 0}%`
    })), h = (u) => V(
      "relative z-[1] inline-flex flex-1 select-none items-center justify-center gap-2 rounded-full px-3 py-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
      {
        "text-[color:var(--text)] drop-shadow-[0_6px_18px_rgba(95,159,245,0.25)]": u === t.modelValue,
        "text-[color:var(--muted)] hover:text-[color:var(--text)]/80": u !== t.modelValue
      }
    ), m = (u) => {
      t.modelValue !== u && (s("update:modelValue", u), s("change", u));
    }, f = { type: "spring", stiffness: 260, damping: 22 };
    return (u, b) => (o(), i("div", {
      class: _(l.value)
    }, [
      e.options.length > 0 && r.value !== -1 ? (o(), C(k(N), {
        key: 0,
        tag: "span",
        class: "absolute inset-y-1 rounded-full bg-[color:var(--gradient-accent-soft)] shadow-[var(--shadow-neo-accent)]",
        style: j(d.value),
        animate: { x: `${r.value * 100}%` },
        transition: f
      }, null, 8, ["style", "animate"])) : p("", !0),
      (o(!0), i(U, null, H(e.options, (y) => (o(), i("button", {
        key: y.value,
        type: "button",
        class: _(h(y.value)),
        "aria-pressed": y.value === e.modelValue,
        onClick: ($) => m(y.value)
      }, [
        y.icon ? (o(), C(k(D), {
          key: 0,
          icon: y.icon,
          class: "h-4 w-4"
        }, null, 8, ["icon"])) : p("", !0),
        n("span", null, v(y.label), 1)
      ], 10, it))), 128))
    ], 2));
  }
}), dt = { class: "block space-y-2" }, ut = {
  key: 0,
  class: "text-sm font-medium text-[color:var(--muted)]"
}, ft = { class: "relative" }, mt = ["value", "disabled"], vt = ["value"], ht = "w-full appearance-none rounded-[var(--radius-active)] border bg-[color:var(--panel)]/80 px-4 py-3 text-sm text-[color:var(--text)] shadow-[var(--shadow-neo-inset)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]", es = /* @__PURE__ */ g({
  __name: "SelectField",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    state: {
      type: String,
      default: "default"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = K(), l = a, r = {
      default: "border-white/10",
      error: "border-red-500/60 text-red-200"
    }, d = c(
      () => V(ht, r[t.state], {
        "opacity-60 cursor-not-allowed": t.disabled
      })
    ), h = c(
      () => V("text-xs", {
        "text-[color:var(--muted)]": t.state === "default",
        "text-red-300": t.state === "error"
      })
    ), m = (f) => {
      const u = f.target;
      l("update:modelValue", u.value), l("change", u.value);
    };
    return (f, u) => (o(), i("label", dt, [
      e.label ? (o(), i("span", ut, v(e.label), 1)) : p("", !0),
      n("div", ft, [
        n("select", z(k(s), {
          value: e.modelValue,
          class: d.value,
          disabled: e.disabled,
          onChange: m
        }), [
          (o(!0), i(U, null, H(e.options, (b) => (o(), i("option", {
            key: b.value,
            value: b.value
          }, v(b.label), 9, vt))), 128))
        ], 16, mt),
        u[0] || (u[0] = n("span", {
          class: "pointer-events-none absolute inset-y-0 right-4 flex items-center text-[color:var(--muted)]",
          "aria-hidden": "true"
        }, " ▾ ", -1))
      ]),
      e.message ? (o(), i("p", {
        key: 1,
        class: _(h.value)
      }, v(e.message), 3)) : p("", !0)
    ]));
  }
}), pt = ["checked", "disabled"], bt = {
  key: 0,
  class: "ml-3 text-sm text-[color:var(--text)]"
}, ts = /* @__PURE__ */ g({
  __name: "ToggleSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = I(null), r = c(
      () => V("inline-flex cursor-pointer select-none items-center", {
        "opacity-40 cursor-not-allowed": t.disabled
      })
    ), d = c(
      () => V(
        "relative h-7 w-12 rounded-full border border-white/10 bg-white/5 transition-all shadow-[var(--shadow-neo-inset)]",
        t.modelValue ? "bg-[var(--gradient-accent-soft)]" : "bg-white/5"
      )
    ), h = c(
      () => V(
        "absolute top-1 left-1 h-5 w-5 rounded-full bg-[color:var(--panel)] shadow-[var(--shadow-neo)] transition-transform",
        t.modelValue ? "translate-x-5 bg-[var(--gradient-accent)] shadow-[var(--shadow-neo-accent)]" : ""
      )
    ), m = (f) => {
      if (t.disabled) return;
      const u = f.target;
      s("update:modelValue", u.checked), s("change", u.checked);
    };
    return pe(() => {
      l.value && l.value.checked !== t.modelValue && (l.value.checked = t.modelValue);
    }), (f, u) => (o(), i("label", {
      class: _(r.value)
    }, [
      n("input", {
        ref_key: "inputRef",
        ref: l,
        type: "checkbox",
        class: "sr-only",
        checked: e.modelValue,
        onChange: m,
        disabled: e.disabled
      }, null, 40, pt),
      n("span", {
        class: _(d.value),
        "aria-hidden": "true"
      }, [
        n("span", {
          class: _(h.value)
        }, null, 2)
      ], 2),
      e.label ? (o(), i("span", bt, v(e.label), 1)) : p("", !0)
    ], 2));
  }
}), gt = {
  key: 0,
  class: "neo-chart__title"
}, yt = /* @__PURE__ */ g({
  __name: "AuraChart",
  props: {
    title: {},
    option: {},
    height: { default: "192px" },
    tone: { default: "neutral" },
    ariaLabel: { default: void 0 }
  },
  setup(e) {
    const a = e, { themedOption: t } = Be(a.option, { tone: a.tone }), s = c(() => ({ height: a.height }));
    return (l, r) => (o(), i("div", {
      class: "neo-chart",
      style: j(s.value)
    }, [
      e.title ? (o(), i("div", gt, v(e.title), 1)) : p("", !0),
      T(k(xe), {
        autoresize: "",
        option: k(t),
        class: "neo-chart__chart"
      }, null, 8, ["option"])
    ], 4));
  }
}), Z = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, l] of a)
    t[s] = l;
  return t;
}, ve = /* @__PURE__ */ Z(yt, [["__scopeId", "data-v-37375974"]]), xt = /* @__PURE__ */ g({
  __name: "Skeleton",
  props: {
    height: { default: "1rem" },
    width: { default: "100%" },
    rounded: { type: Boolean, default: !1 }
  },
  setup(e) {
    const a = e, t = c(() => ({
      height: a.height,
      width: a.width,
      borderRadius: a.rounded ? "9999px" : "calc(var(--radius-active) - 12px)"
    }));
    return (s, l) => (o(), i("div", {
      class: "aura-skeleton",
      style: j(t.value)
    }, null, 4));
  }
}), wt = /* @__PURE__ */ Z(xt, [["__scopeId", "data-v-31eb7c09"]]), as = /* @__PURE__ */ g({
  __name: "BlockSkeleton",
  props: {
    height: {}
  },
  setup(e) {
    const a = e, t = c(() => a.height ?? "180px");
    return (s, l) => (o(), C(wt, { height: t.value }, null, 8, ["height"]));
  }
}), kt = { class: "flex flex-wrap items-center justify-between gap-4" }, $t = { class: "min-w-0" }, Ct = { class: "flex flex-wrap items-center gap-2" }, ss = /* @__PURE__ */ g({
  name: "AuraToolbar",
  __name: "AuraToolbar",
  setup(e) {
    return (a, t) => (o(), i("div", kt, [
      n("div", $t, [
        S(a.$slots, "title"),
        S(a.$slots, "subtitle")
      ]),
      n("div", Ct, [
        S(a.$slots, "actions")
      ])
    ]));
  }
}), ls = /* @__PURE__ */ g({
  name: "AuraFiltersPanel",
  __name: "AuraFiltersPanel",
  props: {
    mdCols: { default: 2 }
  },
  setup(e) {
    const a = e, t = c(() => {
      switch (a.mdCols) {
        case 4:
          return "md:grid-cols-4";
        case 3:
          return "md:grid-cols-3";
        default:
          return "md:grid-cols-2";
      }
    });
    return (s, l) => (o(), i("div", {
      class: _(["grid gap-4", t.value])
    }, [
      S(s.$slots, "default")
    ], 2));
  }
}), St = {
  key: 0,
  class: "fixed inset-0 z-40",
  "data-test": "neo-modal"
}, _t = ["role", "aria-modal", "aria-label", "aria-labelledby", "aria-describedby"], le = 'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])', At = /* @__PURE__ */ g({
  name: "AuraModal",
  __name: "AuraModal",
  props: {
    open: { type: Boolean },
    variant: { default: "dialog" },
    size: { default: "md" },
    role: { default: "dialog" },
    ariaModal: { type: Boolean, default: !0 },
    ariaLabel: {},
    ariaLabelledby: {},
    ariaDescribedby: {},
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !0 },
    containerClass: { default: "" },
    overlayClass: { default: "" },
    panelClass: { default: "" }
  },
  emits: ["update:open", "close"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = I(null);
    let r = null, d = null;
    const h = c({
      get: () => t.open,
      set: (w) => s("update:open", w)
    }), m = c(() => {
      switch (t.size) {
        case "sm":
          return "max-w-md";
        case "lg":
          return "max-w-3xl";
        case "xl":
          return "max-w-5xl";
        default:
          return "max-w-xl";
      }
    }), f = c(() => t.variant === "drawer-right" ? ["items-stretch justify-end", t.containerClass].filter(Boolean).join(" ") : ["items-center justify-center px-4 py-8 sm:px-6", t.containerClass].filter(Boolean).join(" ")), u = c(() => [
      "bg-black/60 backdrop-blur-sm",
      t.overlayClass
    ].filter(Boolean).join(" ")), b = c(() => t.variant === "drawer-right" ? [
      "relative h-full w-full max-w-2xl overflow-y-auto",
      "border-l border-white/10",
      "bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)]",
      "shadow-[var(--shadow-neo)]",
      t.panelClass
    ].filter(Boolean).join(" ") : [
      "relative w-full",
      m.value,
      "max-h-[85vh] overflow-hidden",
      "rounded-[var(--radius-active)] border border-white/10",
      "bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)]",
      "shadow-[var(--shadow-neo)]",
      t.panelClass
    ].filter(Boolean).join(" ")), y = c(() => t.variant === "drawer-right" ? {
      enterActive: "transition duration-200 ease-out",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leaveActive: "transition duration-150 ease-in",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    } : {
      enterActive: "transition duration-200 ease-out",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leaveActive: "transition duration-150 ease-in",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }), $ = (w) => {
      s("close", { reason: w }), h.value = !1;
    }, M = () => {
      t.closeOnBackdrop && $("backdrop");
    }, O = async () => {
      var F, P, R;
      await re();
      const w = l.value;
      if (!w) return;
      const A = w.querySelector(le);
      t.autoFocus ? (P = (F = A ?? w).focus) == null || P.call(F) : (R = w.focus) == null || R.call(w);
    }, x = (w) => {
      var ee;
      if (!t.open) return;
      if (w.key === "Escape" && t.closeOnEscape) {
        w.preventDefault(), $("escape");
        return;
      }
      if (w.key !== "Tab") return;
      const A = l.value;
      if (!A) return;
      const F = Array.from(A.querySelectorAll(le)).filter((te) => !te.hasAttribute("disabled") && te.tabIndex !== -1);
      if (F.length === 0) {
        w.preventDefault(), (ee = A.focus) == null || ee.call(A);
        return;
      }
      const P = F[0], R = F[F.length - 1], J = document.activeElement;
      !w.shiftKey && J === R ? (w.preventDefault(), P.focus()) : w.shiftKey && (J === P || J === A) && (w.preventDefault(), R.focus());
    }, L = (w) => {
      if (typeof document > "u" || !t.lockScroll) return;
      const A = document.body;
      w ? (d = A.style.overflow, A.style.overflow = "hidden") : A.style.overflow = d || "";
    };
    return oe(
      () => t.open,
      async (w) => {
        var A;
        typeof document > "u" || (w ? (r = document.activeElement, L(!0), document.addEventListener("keydown", x), await O()) : (document.removeEventListener("keydown", x), L(!1), (A = r == null ? void 0 : r.focus) == null || A.call(r), r = null));
      },
      { immediate: !0 }
    ), G(() => {
      typeof document < "u" && (document.removeEventListener("keydown", x), L(!1));
    }), (w, A) => (o(), C(be, { to: "body" }, [
      T(ne, {
        "enter-active-class": y.value.enterActive,
        "enter-from-class": y.value.enterFrom,
        "enter-to-class": y.value.enterTo,
        "leave-active-class": y.value.leaveActive,
        "leave-from-class": y.value.leaveFrom,
        "leave-to-class": y.value.leaveTo
      }, {
        default: B(() => [
          e.open ? (o(), i("div", St, [
            n("div", {
              class: _(["absolute inset-0", u.value]),
              "aria-hidden": "true",
              onClick: M
            }, null, 2),
            n("div", {
              class: _(["relative z-10 flex h-full w-full", f.value]),
              onClick: Y(M, ["self"])
            }, [
              n("div", {
                ref_key: "panelRef",
                ref: l,
                class: _(["neo-surface outline-none", b.value]),
                role: e.role,
                "aria-modal": e.ariaModal ? "true" : "false",
                "aria-label": e.ariaLabel,
                "aria-labelledby": e.ariaLabelledby,
                "aria-describedby": e.ariaDescribedby,
                tabindex: "-1",
                onClick: A[0] || (A[0] = Y(() => {
                }, ["stop"]))
              }, [
                S(w.$slots, "default")
              ], 10, _t)
            ], 2)
          ])) : p("", !0)
        ]),
        _: 3
      }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"])
    ]));
  }
}), Bt = { class: "flex w-full flex-col" }, Vt = { class: "flex items-start justify-between gap-4 border-b border-white/5 bg-white/5 px-6 py-4" }, Lt = { class: "space-y-1" }, Tt = {
  key: 0,
  class: "text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]"
}, Mt = ["id"], It = ["id"], jt = { class: "flex items-center gap-2" }, zt = ["aria-label"], Ot = { class: "px-6 py-6" }, Ft = {
  key: 0,
  class: "border-t border-white/5 bg-white/5 px-6 py-4"
}, he = /* @__PURE__ */ g({
  name: "AuraDialog",
  __name: "AuraDialog",
  props: {
    open: { type: Boolean },
    title: { default: "" },
    pretitle: { default: "" },
    subtitle: { default: "" },
    showClose: { type: Boolean, default: !0 },
    closeAriaLabel: { default: "Close" },
    variant: { default: "dialog" },
    size: { default: "md" },
    role: { default: "dialog" },
    ariaModal: { type: Boolean, default: !0 },
    ariaLabel: {},
    ariaLabelledby: {},
    ariaDescribedby: {},
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !0 },
    containerClass: { default: "" },
    overlayClass: { default: "" },
    panelClass: { default: "" }
  },
  emits: ["update:open", "close"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = I(Math.random().toString(36).slice(2)), r = c(() => `neo-dialog-title-${l.value}`), d = c(() => `neo-dialog-subtitle-${l.value}`), h = c(() => t.ariaLabelledby || (t.title ? r.value : void 0)), m = c(() => t.ariaDescribedby || (t.subtitle ? d.value : void 0)), f = () => {
      s("close", { reason: "api" }), s("update:open", !1);
    };
    return (u, b) => (o(), C(At, {
      open: e.open,
      variant: e.variant,
      size: e.size,
      role: e.role,
      "aria-modal": e.ariaModal,
      "aria-label": e.ariaLabel,
      "aria-labelledby": h.value,
      "aria-describedby": m.value,
      "close-on-backdrop": e.closeOnBackdrop,
      "close-on-escape": e.closeOnEscape,
      "lock-scroll": e.lockScroll,
      "auto-focus": e.autoFocus,
      "container-class": e.containerClass,
      "overlay-class": e.overlayClass,
      "panel-class": e.panelClass,
      "onUpdate:open": b[1] || (b[1] = (y) => s("update:open", y)),
      onClose: b[2] || (b[2] = (y) => s("close", y))
    }, {
      default: B(() => [
        n("div", Bt, [
          S(u.$slots, "header", {}, () => [
            n("header", Vt, [
              n("div", Lt, [
                e.pretitle ? (o(), i("p", Tt, v(e.pretitle), 1)) : p("", !0),
                e.title ? (o(), i("h2", {
                  key: 1,
                  id: r.value,
                  class: "text-xl font-semibold text-[color:var(--text)]"
                }, v(e.title), 9, Mt)) : p("", !0),
                e.subtitle ? (o(), i("p", {
                  key: 2,
                  id: d.value,
                  class: "text-sm text-[color:var(--muted)]"
                }, v(e.subtitle), 9, It)) : p("", !0)
              ]),
              n("div", jt, [
                S(u.$slots, "header-actions"),
                e.showClose ? (o(), i("button", {
                  key: 0,
                  type: "button",
                  class: "inline-flex h-9 w-9 items-center justify-center rounded-[calc(var(--radius-active)_-_12px)] border border-white/10 bg-white/5 text-[color:var(--text)] hover:bg-white/10",
                  "aria-label": e.closeAriaLabel,
                  onClick: b[0] || (b[0] = (y) => f())
                }, " × ", 8, zt)) : p("", !0)
              ])
            ])
          ]),
          n("div", Ot, [
            S(u.$slots, "default")
          ]),
          u.$slots.footer ? (o(), i("footer", Ft, [
            S(u.$slots, "footer")
          ])) : p("", !0)
        ])
      ]),
      _: 3
    }, 8, ["open", "variant", "size", "role", "aria-modal", "aria-label", "aria-labelledby", "aria-describedby", "close-on-backdrop", "close-on-escape", "lock-scroll", "auto-focus", "container-class", "overlay-class", "panel-class"]));
  }
}), Et = { class: "flex h-14 w-14 items-center justify-center rounded-[20px] bg-[var(--gradient-accent-soft)] text-[color:var(--text)] shadow-[var(--shadow-neo-accent)]" }, Dt = { class: "flex flex-1 flex-col gap-2" }, Nt = { class: "text-sm font-semibold text-[color:var(--text)]" }, Pt = { class: "text-xs text-[color:var(--muted)]/85" }, os = /* @__PURE__ */ g({
  __name: "ActionPill",
  props: {
    icon: {
      type: [Object, String],
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    progress: {
      type: Number,
      default: void 0
    }
  },
  setup(e) {
    const a = e, { progress: t } = ge(a), s = K(), l = c(() => ({
      boxShadow: "0 0 52px color-mix(in srgb, var(--accent) 46%, transparent)"
    }));
    return (r, d) => (o(), C(k(N), z({
      tag: "button",
      class: "group relative flex w-full items-center gap-4 rounded-[var(--r-2xl)] border border-white/5 bg-[color:color-mix(in_srgb,var(--panel)_92%,transparent)]/90 px-6 py-5 text-left shadow-[var(--shadow-neo)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel)] hover:shadow-[var(--shadow-neo-accent)]",
      "while-hover": { scale: 1.03 },
      "while-tap": { scale: 0.97 }
    }, k(s)), {
      default: B(() => [
        n("div", Et, [
          T(k(D), {
            icon: e.icon,
            class: "h-6 w-6",
            "aria-hidden": "true"
          }, null, 8, ["icon"])
        ]),
        n("div", Dt, [
          n("div", null, [
            n("p", Nt, v(e.label), 1),
            n("p", Pt, v(e.description), 1)
          ]),
          k(t) !== void 0 ? (o(), C(k(me), {
            key: 0,
            value: k(t)
          }, null, 8, ["value"])) : p("", !0)
        ]),
        n("span", {
          class: "pointer-events-none absolute inset-0 -z-[1] rounded-[var(--r-2xl)] opacity-0 transition-opacity duration-200 group-hover:opacity-100",
          style: j(l.value)
        }, null, 4)
      ]),
      _: 1
    }, 16));
  }
}), Rt = {
  key: 0,
  class: "mt-2 text-sm text-[color:var(--muted)]"
}, Kt = { class: "flex items-center justify-end gap-2" }, ns = /* @__PURE__ */ g({
  __name: "ConfirmDialog",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: void 0 },
    confirmLabel: { default: "Confirm" },
    cancelLabel: { default: "Cancel" },
    destructive: { type: Boolean, default: !1 }
  },
  emits: ["update:open", "confirm", "cancel"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = () => s("update:open", !1), r = () => {
      s("cancel"), l();
    }, d = () => {
      s("confirm"), l();
    };
    return (h, m) => (o(), C(he, {
      open: t.open,
      title: t.title,
      "onUpdate:open": m[0] || (m[0] = (f) => s("update:open", f))
    }, {
      default: B(() => [
        e.description ? (o(), i("p", Rt, v(e.description), 1)) : p("", !0)
      ]),
      footer: B(() => [
        n("div", Kt, [
          T(se, {
            variant: "ghost",
            onClick: r
          }, {
            default: B(() => [
              q(v(e.cancelLabel), 1)
            ]),
            _: 1
          }),
          T(se, {
            variant: e.destructive ? "subtle" : "primary",
            onClick: d
          }, {
            default: B(() => [
              q(v(e.confirmLabel), 1)
            ]),
            _: 1
          }, 8, ["variant"])
        ])
      ]),
      _: 1
    }, 8, ["open", "title"]));
  }
}), Ut = ["aria-valuemin", "aria-valuemax", "aria-valuenow"], Ht = { class: "text-3xl font-semibold text-[color:var(--text)]" }, qt = { class: "space-y-1" }, Yt = { class: "text-sm uppercase tracking-wide text-[color:var(--muted)]" }, Gt = { class: "text-xs text-[color:var(--muted)]" }, rs = /* @__PURE__ */ g({
  __name: "DialKnob",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = I(!1);
    let r = 0, d = null;
    const h = (x) => Math.min(t.max, Math.max(t.min, x)), m = c(() => (t.modelValue - t.min) / (t.max - t.min || 1)), f = c(() => {
      const w = (m.value * 270 - 135) * Math.PI / 180, A = Math.cos(w) * 48, F = Math.sin(w) * 48;
      return {
        transform: `translate(${A}px, ${F}px)`
      };
    }), u = (x) => {
      const L = h(Math.round(x / t.step) * t.step);
      L !== t.modelValue && (s("update:modelValue", L), s("change", L));
    }, b = (x) => {
      l.value = !0, r = t.modelValue, d = x.pointerId, x.target.setPointerCapture(x.pointerId);
    }, y = (x) => {
      if (!l.value || d !== x.pointerId) return;
      const L = t.max - t.min || 1;
      r += (x.movementY ?? 0) * -0.05 * L, u(r);
    }, $ = (x) => {
      if (d !== null && x.pointerId !== d) return;
      l.value = !1;
      const L = x.target;
      if (d !== null)
        try {
          L.releasePointerCapture(d);
        } catch {
        }
      d = null;
    }, M = (x) => {
      const L = x.deltaY > 0 ? -1 : 1;
      u(t.modelValue + L * t.step);
    }, O = (x) => {
      x.key === "ArrowUp" || x.key === "ArrowRight" ? u(t.modelValue + t.step) : (x.key === "ArrowDown" || x.key === "ArrowLeft") && u(t.modelValue - t.step);
    };
    return (x, L) => (o(), C(k(N), {
      tag: "div",
      class: "relative flex h-40 w-40 select-none flex-col items-center justify-center gap-3 rounded-[var(--radius-active)] bg-[color:var(--panel)]/80 p-6 text-center shadow-[var(--shadow-neo)]",
      "while-hover": { scale: 1.02 },
      "while-tap": { scale: 0.98 }
    }, {
      default: B(() => [
        n("div", {
          class: "relative flex h-28 w-28 items-center justify-center rounded-full bg-[color:var(--panel)]/70 shadow-[var(--shadow-neo-inset)]",
          role: "slider",
          "aria-valuemin": e.min,
          "aria-valuemax": e.max,
          "aria-valuenow": e.modelValue,
          tabindex: "0",
          onPointerdown: b,
          onPointermove: y,
          onPointerup: $,
          onPointerleave: $,
          onWheel: Y(M, ["prevent"]),
          onKeydown: Y(O, ["prevent"])
        }, [
          L[0] || (L[0] = n("div", {
            class: "absolute h-24 w-24 rounded-full border border-white/10",
            "aria-hidden": "true"
          }, null, -1)),
          n("div", {
            class: "absolute h-3 w-3 rounded-full bg-[var(--accent)] shadow-[var(--shadow-neo-accent)]",
            style: j(f.value),
            "aria-hidden": "true"
          }, null, 4),
          n("span", Ht, v(e.modelValue), 1)
        ], 40, Ut),
        n("div", qt, [
          n("p", Yt, v(e.label), 1),
          n("p", Gt, v(e.hint), 1)
        ])
      ]),
      _: 1
    }));
  }
}), Wt = { class: "neo-surface neo-ring flex flex-col items-center gap-4 px-6 py-10 text-center" }, Jt = { class: "space-y-2" }, Qt = { class: "text-lg font-semibold text-[color:var(--text)]" }, Xt = {
  key: 0,
  class: "text-sm text-[color:var(--muted)]"
}, is = /* @__PURE__ */ g({
  __name: "EmptyState",
  props: {
    title: {},
    description: { default: void 0 },
    actionLabel: { default: void 0 }
  },
  emits: ["action"],
  setup(e, { emit: a }) {
    const t = a;
    return (s, l) => (o(), i("section", Wt, [
      n("div", Jt, [
        n("h2", Qt, v(e.title), 1),
        e.description ? (o(), i("p", Xt, v(e.description), 1)) : p("", !0)
      ]),
      e.actionLabel ? (o(), i("button", {
        key: 0,
        type: "button",
        class: "inline-flex items-center rounded-full bg-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] px-4 py-2 text-sm font-medium text-bg shadow-neo-accent transition-transform hover:translate-y-0.5",
        onClick: l[0] || (l[0] = (r) => t("action"))
      }, v(e.actionLabel), 1)) : p("", !0),
      S(s.$slots, "default")
    ]));
  }
}), Zt = {
  class: "flex flex-col gap-4",
  role: "alert",
  "aria-live": "assertive"
}, ea = { class: "text-xl font-semibold text-[color:var(--text)]" }, ta = {
  key: 0,
  class: "mt-1 text-sm text-[color:var(--muted)]"
}, aa = {
  key: 0,
  class: "space-y-2 text-sm text-[color:var(--muted)]"
}, sa = { class: "text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]/80" }, la = { class: "list-disc space-y-1 pl-5" }, cs = /* @__PURE__ */ g({
  __name: "ErrorView",
  props: {
    title: {},
    description: { default: void 0 },
    details: { default: () => [] },
    detailsLabel: { default: "Details" },
    actionLabel: { default: void 0 }
  },
  emits: ["action"],
  setup(e, { emit: a }) {
    const t = a;
    return (s, l) => {
      var r;
      return o(), i("div", Zt, [
        n("div", null, [
          n("h2", ea, v(e.title), 1),
          e.description ? (o(), i("p", ta, v(e.description), 1)) : p("", !0)
        ]),
        (r = e.details) != null && r.length ? (o(), i("div", aa, [
          n("p", sa, v(e.detailsLabel), 1),
          n("ul", la, [
            (o(!0), i(U, null, H(e.details, (d) => (o(), i("li", { key: d }, v(d), 1))), 128))
          ])
        ])) : p("", !0),
        e.actionLabel ? (o(), i("button", {
          key: 1,
          type: "button",
          class: "inline-flex items-center self-start rounded-full bg-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] px-4 py-2 text-sm font-medium text-bg shadow-neo-accent transition-transform hover:translate-y-0.5",
          onClick: l[0] || (l[0] = (d) => t("action"))
        }, v(e.actionLabel), 1)) : p("", !0)
      ]);
    };
  }
}), oa = { class: "mb-4" }, na = { class: "text-xl font-semibold" }, ra = {
  key: 0,
  class: "text-sm opacity-70 mt-1"
}, ds = /* @__PURE__ */ g({
  __name: "FormCardLayout",
  props: {
    title: {},
    description: { default: void 0 }
  },
  setup(e) {
    return (a, t) => (o(), C(X, { class: "w-full p-6" }, {
      default: B(() => [
        n("div", oa, [
          n("div", na, v(e.title), 1),
          e.description ? (o(), i("div", ra, v(e.description), 1)) : p("", !0)
        ]),
        n("div", null, [
          S(a.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}), ia = { class: "flex items-start justify-between gap-4" }, ca = { class: "min-w-0" }, da = { class: "text-sm font-medium text-ink-muted" }, ua = {
  key: 0,
  class: "mt-0.5 text-xs text-ink-muted/80"
}, fa = { class: "mt-3 flex items-center gap-3" }, ma = {
  key: 0,
  class: "w-40 shrink-0"
}, va = { class: "flex items-center justify-between text-xs text-ink-muted" }, ha = {
  key: 0,
  class: "mt-4"
}, us = /* @__PURE__ */ g({
  __name: "MetricCard",
  props: {
    title: {},
    value: {},
    unit: { default: void 0 },
    direction: { default: void 0 },
    progress: { default: void 0 },
    subtitle: { default: void 0 },
    chartOption: { default: void 0 },
    chartHeight: { default: "160px" }
  },
  setup(e) {
    const a = e, t = c(() => {
      if (a.progress === void 0) return;
      const s = Math.max(0, Math.min(1, a.progress));
      return `${Math.round(s * 100)}%`;
    });
    return (s, l) => (o(), C(X, { class: "p-4" }, {
      default: B(() => [
        n("div", ia, [
          n("div", ca, [
            n("div", da, v(e.title), 1),
            e.subtitle ? (o(), i("div", ua, v(e.subtitle), 1)) : p("", !0),
            n("div", fa, [
              T(st, {
                value: e.value,
                unit: e.unit,
                direction: e.direction
              }, null, 8, ["value", "unit", "direction"]),
              e.progress !== void 0 ? (o(), C(Oe, {
                key: 0,
                value: e.progress,
                size: "sm"
              }, null, 8, ["value"])) : p("", !0)
            ])
          ]),
          e.progress !== void 0 ? (o(), i("div", ma, [
            n("div", va, [
              l[0] || (l[0] = n("span", null, "Progress", -1)),
              n("span", null, v(t.value), 1)
            ]),
            T(me, {
              class: "mt-2",
              value: e.progress
            }, null, 8, ["value"])
          ])) : p("", !0)
        ]),
        e.chartOption ? (o(), i("div", ha, [
          T(ve, {
            option: e.chartOption,
            height: e.chartHeight,
            tone: "muted"
          }, null, 8, ["option", "height"])
        ])) : p("", !0)
      ]),
      _: 1
    }));
  }
}), pa = { class: "group flex flex-col items-center gap-4 rounded-[calc(var(--radius-active)_-_10px)] border border-white/5 bg-[color:color-mix(in_srgb,var(--panel)_90%,transparent)]/85 p-5 text-center shadow-[var(--shadow-neo)] transition-transform duration-200 hover:-translate-y-0.5" }, ba = {
  class: "font-display font-semibold text-[color:var(--text)]",
  style: { "font-size": "calc(2.05rem * var(--font-scale))" }
}, ga = { class: "space-y-1" }, ya = { class: "text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]/80" }, xa = { class: "text-sm text-[color:var(--text)]/80" }, fs = /* @__PURE__ */ g({
  __name: "StatRing",
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: "stat-ring"
    }
  },
  setup(e) {
    const a = e, t = c(() => `${a.id}-gradient`);
    return (s, l) => (o(), i("div", pa, [
      T(k(fe), {
        value: e.value,
        "gradient-id": t.value
      }, {
        default: B((r) => [
          n("span", ba, v(r.value) + "% ", 1)
        ]),
        _: 1
      }, 8, ["value", "gradient-id"]),
      n("div", ga, [
        n("p", ya, v(e.label), 1),
        n("p", xa, v(e.description), 1)
      ])
    ]));
  }
}), wa = { class: "relative flex gap-2 rounded-[var(--radius-active)] bg-white/5 p-1 shadow-[var(--shadow-neo-inset)]" }, ka = ["onClick"], ms = /* @__PURE__ */ g({
  name: "AuraTabs",
  __name: "Tabs",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    placement: {
      type: String,
      default: "top"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = c(
      () => V("w-full", t.placement === "bottom" ? "pb-4" : "pt-4")
    ), r = c(() => t.items.findIndex((u) => u.value === t.modelValue)), d = c(() => ({
      width: `${t.items.length ? 100 / t.items.length : 0}%`
    })), h = (u) => V(
      "relative z-[1] flex-1 select-none items-center justify-center gap-2 rounded-[var(--radius-active)] px-4 py-2 text-sm font-medium transition",
      "inline-flex",
      u === t.modelValue ? "text-[color:var(--text)]" : "text-[color:var(--muted)]"
    ), m = (u) => {
      u !== t.modelValue && (s("update:modelValue", u), s("change", u));
    }, f = { type: "spring", stiffness: 250, damping: 20 };
    return (u, b) => (o(), i("div", {
      class: _(l.value)
    }, [
      n("div", wa, [
        r.value !== -1 ? (o(), C(k(N), {
          key: 0,
          tag: "span",
          class: "absolute inset-y-1 rounded-[var(--radius-active)] bg-[var(--gradient-accent-soft)] shadow-[var(--shadow-neo-accent)]",
          style: j(d.value),
          animate: { x: `${r.value * 100}%` },
          transition: f
        }, null, 8, ["style", "animate"])) : p("", !0),
        (o(!0), i(U, null, H(e.items, (y) => (o(), i("button", {
          key: y.value,
          type: "button",
          class: _(h(y.value)),
          onClick: ($) => m(y.value)
        }, [
          y.icon ? (o(), C(k(D), {
            key: 0,
            icon: y.icon,
            class: "h-4 w-4"
          }, null, 8, ["icon"])) : p("", !0),
          n("span", null, v(y.label), 1)
        ], 10, ka))), 128))
      ])
    ], 2));
  }
}), $a = /* @__PURE__ */ g({
  __name: "ToastOverlay",
  setup(e) {
    const a = I({ visible: !1, message: "", type: "info" });
    let t;
    const s = (r) => {
      a.value = { ...r, visible: !0 }, t && window.clearTimeout(t), t = window.setTimeout(() => {
        a.value.visible = !1;
      }, 2500);
    }, l = (r) => {
      var h;
      const d = r;
      (h = d.detail) != null && h.message && s(d.detail);
    };
    return ie(() => window.addEventListener("aura:toast", l)), G(() => window.removeEventListener("aura:toast", l)), (r, d) => (o(), C(ne, { name: "aura-toast" }, {
      default: B(() => [
        a.value.visible ? (o(), i("div", {
          key: 0,
          class: _([
            "fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 neo-surface neo-ring px-4 py-2 text-sm shadow-2xl",
            a.value.type === "success" ? "border border-emerald-500/40" : a.value.type === "error" ? "border border-red-500/40" : "border border-white/10"
          ]),
          role: "status",
          "aria-live": "polite"
        }, v(a.value.message), 3)) : p("", !0)
      ]),
      _: 1
    }));
  }
}), vs = /* @__PURE__ */ Z($a, [["__scopeId", "data-v-deb63172"]]), hs = /* @__PURE__ */ g({
  __name: "VirtualScroller",
  props: {
    items: {},
    itemHeight: {},
    overscan: { default: 6 },
    height: { default: "320px" },
    keyFor: {}
  },
  setup(e) {
    const a = e, t = I(null), s = I(0), l = I(0);
    let r = null;
    const d = c(() => a.items.length * a.itemHeight), h = c(() => {
      const $ = Math.floor(s.value / a.itemHeight) - a.overscan;
      return Math.max(0, $);
    }), m = c(() => {
      const $ = Math.ceil((s.value + l.value) / a.itemHeight) + a.overscan;
      return Math.min(a.items.length - 1, $);
    }), f = c(() => a.items.slice(h.value, m.value + 1)), u = c(() => h.value * a.itemHeight), b = ($) => {
      const M = $.target;
      s.value = M.scrollTop;
    };
    ie(() => {
      const $ = t.value;
      if (!$) return;
      const M = () => {
        l.value = $.clientHeight;
      };
      M(), r = new ResizeObserver(M), r.observe($);
    }), G(() => {
      r == null || r.disconnect(), r = null;
    });
    const y = ($, M) => {
      var O;
      return ((O = a.keyFor) == null ? void 0 : O.call(a, $, M)) ?? M;
    };
    return ($, M) => (o(), i("div", {
      ref_key: "scrollerRef",
      ref: t,
      class: "overflow-auto",
      style: j({ height: e.height }),
      onScroll: b
    }, [
      n("div", {
        class: "relative",
        style: j({ height: `${d.value}px` })
      }, [
        n("div", {
          class: "absolute left-0 right-0",
          style: j({ transform: `translateY(${u.value}px)` })
        }, [
          (o(!0), i(U, null, H(f.value, (O, x) => (o(), i("div", {
            key: y(O, h.value + x),
            style: j({ height: `${e.itemHeight}px` })
          }, [
            S($.$slots, "default", {
              item: O,
              index: h.value + x
            })
          ], 4))), 128))
        ], 4)
      ], 4)
    ], 36));
  }
}), Ca = '[data-modal-autofocus],a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])', ps = /* @__PURE__ */ g({
  name: "AuraBaseDialog",
  __name: "BaseDialog",
  props: {
    open: { type: Boolean },
    title: { default: "" },
    pretitle: { default: "" },
    subtitle: { default: "" },
    size: { default: "md" },
    showClose: { type: Boolean, default: !0 },
    closeAriaLabel: { default: "Close" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !0 },
    focusSelector: { default: "" },
    containerClass: { default: "" },
    overlayClass: { default: "" },
    panelClass: { default: "" },
    autoFocus: { type: Boolean, default: !0 }
  },
  emits: ["update:open", "close"],
  setup(e, { emit: a }) {
    const t = e, s = a, l = I(null), r = async () => {
      var u, b;
      await re();
      const h = l.value;
      if (!h) return;
      const m = ((u = t.focusSelector) == null ? void 0 : u.trim()) || Ca, f = h.querySelector(m);
      (b = f == null ? void 0 : f.focus) == null || b.call(f);
    };
    let d = null;
    return oe(
      () => t.open,
      (h) => {
        if (!h) {
          d && (window.clearTimeout(d), d = null);
          return;
        }
        d = window.setTimeout(() => {
          d = null, r();
        }, 0);
      }
    ), G(() => {
      d && (window.clearTimeout(d), d = null);
    }), (h, m) => (o(), C(he, {
      open: e.open,
      size: e.size,
      pretitle: e.pretitle,
      title: e.title,
      subtitle: e.subtitle,
      "show-close": e.showClose,
      "close-aria-label": e.closeAriaLabel,
      "auto-focus": e.autoFocus,
      "close-on-backdrop": e.closeOnBackdrop,
      "close-on-escape": e.closeOnEscape,
      "lock-scroll": e.lockScroll,
      "container-class": e.containerClass,
      "overlay-class": e.overlayClass,
      "panel-class": e.panelClass,
      "onUpdate:open": m[0] || (m[0] = (f) => s("update:open", f)),
      onClose: m[1] || (m[1] = (f) => s("close", f))
    }, ye({
      default: B(() => [
        n("div", {
          ref_key: "contentRef",
          ref: l
        }, [
          S(h.$slots, "default")
        ], 512)
      ]),
      _: 2
    }, [
      h.$slots.footer ? {
        name: "footer",
        fn: B(() => [
          S(h.$slots, "footer")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "size", "pretitle", "title", "subtitle", "show-close", "close-aria-label", "auto-focus", "close-on-backdrop", "close-on-escape", "lock-scroll", "container-class", "overlay-class", "panel-class"]));
  }
}), Sa = { class: "flex items-start justify-between gap-4" }, _a = { class: "min-w-0" }, Aa = { class: "flex items-center gap-3" }, Ba = { class: "text-sm font-semibold" }, Va = {
  key: 0,
  class: "mt-1 text-xs text-muted"
}, La = {
  key: 1,
  class: "mt-3 text-sm text-muted leading-relaxed"
}, Ta = {
  key: 0,
  class: "text-right"
}, Ma = { class: "text-xs text-muted" }, Ia = { class: "mt-1 text-lg font-semibold" }, ja = {
  key: 0,
  class: "mt-4"
}, za = {
  key: 1,
  class: "mt-4"
}, bs = /* @__PURE__ */ g({
  __name: "AnalyticsCard",
  props: {
    title: {},
    subtitle: { default: void 0 },
    description: { default: void 0 },
    tone: { default: "default" },
    stat: { default: void 0 },
    chart: { default: void 0 },
    segments: { default: void 0 }
  },
  emits: ["update:segment"],
  setup(e, { emit: a }) {
    var m;
    const t = e, s = a, l = I(((m = t.segments) == null ? void 0 : m.modelValue) ?? ""), r = c(() => t.tone === "muted" ? "muted" : t.tone === "strong" ? "strong" : "default"), d = c(() => {
      var u;
      const f = ((u = t.chart) == null ? void 0 : u.tone) ?? "default";
      return f === "success" ? "positive" : f === "danger" ? "negative" : f === "warning" ? "muted" : "neutral";
    }), h = (f) => {
      l.value = f, s("update:segment", f);
    };
    return (f, u) => (o(), C(X, {
      class: "p-6",
      tone: r.value
    }, {
      default: B(() => {
        var b;
        return [
          n("div", Sa, [
            n("div", _a, [
              n("div", Aa, [
                n("h3", Ba, v(e.title), 1),
                (b = e.stat) != null && b.badge ? (o(), C(Ve, {
                  key: 0,
                  tone: e.stat.badge.tone ?? "muted",
                  size: "sm"
                }, {
                  default: B(() => [
                    q(v(e.stat.badge.label), 1)
                  ]),
                  _: 1
                }, 8, ["tone"])) : p("", !0)
              ]),
              e.subtitle ? (o(), i("p", Va, v(e.subtitle), 1)) : p("", !0),
              e.description ? (o(), i("p", La, v(e.description), 1)) : p("", !0)
            ]),
            e.stat ? (o(), i("div", Ta, [
              n("p", Ma, v(e.stat.label), 1),
              n("p", Ia, v(e.stat.value), 1)
            ])) : p("", !0)
          ]),
          e.segments ? (o(), i("div", ja, [
            T(ct, {
              options: e.segments.options,
              "model-value": l.value,
              "onUpdate:modelValue": h
            }, null, 8, ["options", "model-value"])
          ])) : p("", !0),
          e.chart ? (o(), i("div", za, [
            T(ve, {
              option: e.chart.option,
              height: e.chart.height ?? "220px",
              tone: d.value,
              "aria-label": e.title
            }, null, 8, ["option", "height", "tone", "aria-label"])
          ])) : p("", !0)
        ];
      }),
      _: 1
    }, 8, ["tone"]));
  }
}), Oa = ["role", "aria-live"], Fa = {
  key: 0,
  class: "mb-1 text-xs font-semibold uppercase tracking-[0.18em] opacity-90",
  "data-test": "aura-alert-title"
}, Ea = {
  class: "leading-5",
  "data-test": "aura-alert-body"
}, gs = /* @__PURE__ */ g({
  __name: "AuraAlert",
  props: {
    tone: { default: "info" },
    title: {},
    role: { default: "alert" },
    ariaLive: { default: "" }
  },
  setup(e) {
    const a = e, t = c(() => {
      switch (a.tone) {
        case "success":
          return "border-emerald-500/35 bg-emerald-500/10 text-emerald-100";
        case "error":
          return "border-red-500/40 bg-red-500/10 text-red-200";
        case "info":
        default:
          return "border-white/10 bg-white/5 text-[color:var(--text)]";
      }
    }), s = c(() => a.title), l = c(() => a.role), r = c(() => a.ariaLive);
    return (d, h) => (o(), i("div", {
      class: _([
        "rounded-[calc(var(--radius-active)_-_12px)] border px-4 py-3 text-sm",
        t.value
      ]),
      role: l.value,
      "aria-live": r.value || void 0,
      "data-test": "aura-alert"
    }, [
      s.value ? (o(), i("p", Fa, v(s.value), 1)) : p("", !0),
      n("div", Ea, [
        S(d.$slots, "default")
      ])
    ], 10, Oa));
  }
});
export {
  Ce as AURA_TOKENS_VERSION,
  Se as AURA_UI_VERSION,
  os as AuraActionPill,
  gs as AuraAlert,
  bs as AuraAnalyticsCard,
  Ve as AuraBadge,
  ps as AuraBaseDialog,
  as as AuraBlockSkeleton,
  se as AuraButton,
  X as AuraCardSurface,
  ve as AuraChart,
  ns as AuraConfirmDialog,
  Oe as AuraDial,
  rs as AuraDialKnob,
  he as AuraDialog,
  is as AuraEmptyState,
  cs as AuraErrorView,
  Xa as AuraFileInput,
  ls as AuraFiltersPanel,
  ds as AuraFormCardLayout,
  Ga as AuraIconButton,
  st as AuraKpiNumber,
  us as AuraMetricCard,
  At as AuraModal,
  me as AuraProgressLinear,
  fe as AuraProgressRadial,
  Za as AuraRange,
  ct as AuraSegmentedControl,
  es as AuraSelectField,
  wt as AuraSkeleton,
  fs as AuraStatRing,
  Ya as AuraSurfaceButton,
  ms as AuraTabs,
  Ja as AuraTextArea,
  Qa as AuraTextAreaControl,
  Wa as AuraTextInput,
  vs as AuraToastOverlay,
  ts as AuraToggleSwitch,
  ss as AuraToolbar,
  hs as AuraVirtualScroller,
  ps as BaseDialog,
  as as BlockSkeleton,
  ns as ConfirmDialog,
  is as EmptyState,
  cs as ErrorView,
  ds as FormCardLayout,
  wt as Skeleton,
  vs as ToastOverlay,
  hs as VirtualScroller,
  de as applyAuraTheme,
  V as cn,
  Ha as getAuraVersions,
  _e as getChartPalette,
  Ae as getChartThemeBase,
  Ua as initAuraTheme,
  Ka as persistAuraTheme,
  $e as readPersistedAuraTheme,
  qa as toast,
  Be as useChart
};

System.register([], (function(t) {
        "use strict";
        return {
            execute: function() {
                t({
                    $: function() {
                        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    },
                    B: jr,
                    E: function(t) {
                        Ft.push(t)
                    },
                    G: function(t) {
                        Yr = t.target,
                            setTimeout((function() {
                                    t.defaultPrevented && (Yr = null)
                                }
                            ), 0)
                    },
                    H: function(t, e) {
                        var n;
                        const i = `${null !== (n = null == e ? void 0 : e.keyPrefix) && void 0 !== n ? n : "session-resume:"}${t}`;
                        let r;
                        try {
                            r = sessionStorage.getItem(i)
                        } catch (s) {}
                        if (!r)
                            return;
                        try {
                            sessionStorage.removeItem(i)
                        } catch (a) {}
                        const o = [];
                        for (const [c,l] of JSON.parse(r)) {
                            const t = new CustomEvent("session:resume",{
                                bubbles: !0,
                                cancelable: !0,
                                detail: {
                                    targetId: c,
                                    targetValue: l
                                }
                            });
                            if (document.dispatchEvent(t)) {
                                const t = document.getElementById(c);
                                t && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && t.value === t.defaultValue && (t.value = l,
                                    o.push(t))
                            }
                        }
                        setTimeout((function() {
                                for (const t of o)
                                    t.dispatchEvent(new CustomEvent("change",{
                                        bubbles: !0,
                                        cancelable: !0
                                    }))
                            }
                        ), 0)
                    },
                    J: function(t, e) {
                        var n, i;
                        const r = null !== (n = null == e ? void 0 : e.selector) && void 0 !== n ? n : ".js-session-resumable"
                            , o = `${null !== (i = null == e ? void 0 : e.keyPrefix) && void 0 !== i ? i : "session-resume:"}${t}`
                            , s = [];
                        for (const l of document.querySelectorAll(r))
                            (l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) && s.push(l);
                        const a = s.filter((t=>function(t) {
                            return t.id && t.value !== t.defaultValue && t.form !== Yr
                        }(t))).map((t=>[t.id, t.value]));
                        if (a.length)
                            try {
                                sessionStorage.setItem(o, JSON.stringify(a))
                            } catch (c) {}
                    },
                    N: function(t, e) {
                        t.renderInto(e)
                    },
                    O: function(t, ...e) {
                        return new TemplateResult$1(t,e,co)
                    },
                    S: M,
                    X: function(t) {
                        return t && t.default || t
                    }/**
                     * @license
                     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                    ,
                    Y: function(t, e) {
                        return t(e = {
                            exports: {}
                        }, e.exports),
                            e.exports
                    },
                    _: /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
                        function(t, e, n, i) {
                            var r, o = arguments.length, s = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, i);
                            else
                                for (var a = t.length - 1; a >= 0; a--)
                                    (r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
                            return o > 3 && s && Object.defineProperty(e, n, s),
                                s
                        },
                    a: function() {
                        var t;
                        return (t = Rt()).observe.apply(t, arguments)
                    },
                    a0: function(t) {
                        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                    },
                    a1: T,
                    a5: Zr,
                    c: function(t) {
                        (function(t, e, n) {
                                if (t[e]) {
                                    const i = t[e];
                                    t[e] = function(...t) {
                                        n.apply(this, t),
                                            i.apply(this, t)
                                    }
                                } else
                                    t[e] = n
                            }
                        )(t.prototype, "connectedCallback", (function() {
                                this.toggleAttribute("data-catalyst", !0),
                                    function(t) {
                                        for (const e of t.querySelectorAll("template[data-shadowroot]"))
                                            e.parentElement === t && t.attachShadow({
                                                mode: "closed" === e.getAttribute("data-shadowroot") ? "closed" : "open"
                                            }).appendChild(e.content.cloneNode(!0))
                                    }(this),
                                    function(t) {
                                        Wt.add(t.tagName.toLowerCase()),
                                        t.shadowRoot && (Vt(t.shadowRoot),
                                            jt(t.shadowRoot));
                                        Vt(t),
                                            jt(t.ownerDocument)
                                    }(this)
                            }
                        )),
                            function(t) {
                                const e = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
                                window.customElements.get(e) || (window[t.name] = t,
                                    window.customElements.define(e, t))
                            }(t)
                    },
                    d: L,
                    f: function(t, e, n) {
                        return t.dispatchEvent(new CustomEvent(e,{
                            bubbles: !0,
                            cancelable: !0,
                            detail: n
                        }))
                    }/**
                     * @license
                     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                    ,
                    g: function(t, e) {
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            get() {
                                return function(t, e) {
                                    const n = t.tagName.toLowerCase()
                                        , i = [];
                                    if (t.shadowRoot)
                                        for (const r of t.shadowRoot.querySelectorAll(`[data-targets~="${n}.${e}"]`))
                                            r.closest(n) || i.push(r);
                                    for (const r of t.querySelectorAll(`[data-targets~="${n}.${e}"]`))
                                        r.closest(n) === t && i.push(r);
                                    return i
                                }(this, e)
                            }
                        })
                    },
                    h: pr,
                    i: function(t=0, e={}) {
                        return (n,i,r)=>{
                            if (!r || "function" != typeof r.value)
                                throw new Error("debounce can only decorate functions");
                            const o = r.value;
                            r.value = L(o, t, e),
                                Object.defineProperty(n, i, r)
                        }
                    },
                    n: function(t) {
                        Ot.push(t)
                    },
                    o: function(t, e, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                            , r = !!i.capture
                            , o = r ? F : O
                            , s = o[t];
                        s || (s = new M,
                            o[t] = s,
                            document.addEventListener(t, z, r));
                        s.add(e, n)
                    },
                    q: function(t, e) {
                        0 === Object.keys(gr.children).length && document.addEventListener("keydown", yr);
                        const n = function(t) {
                            return t.split(",").map((t=>t.split(" ")))
                        }(e || t.getAttribute("data-hotkey") || "").map((e=>gr.insert(e).add(t)));
                        vr.set(t, n)
                    },
                    r: function(t, e) {
                        qt || (qt = new Map,
                            document.addEventListener("submit", Bt));
                        const n = qt.get(t) || [];
                        qt.set(t, [...n, e])
                    },
                    s: function(t) {
                        let e = !1
                            , n = null;
                        function i(t, e, n, i=!1) {
                            e instanceof HTMLInputElement && (e.indeterminate = i,
                            e.checked !== n && (e.checked = n,
                                setTimeout((()=>{
                                        const n = new CustomEvent("change",{
                                            bubbles: !0,
                                            cancelable: !1,
                                            detail: {
                                                relatedTarget: t
                                            }
                                        });
                                        e.dispatchEvent(n)
                                    }
                                ))))
                        }
                        function r(r) {
                            const o = r.target;
                            o instanceof Element && (o.hasAttribute("data-check-all") ? function(e) {
                                if (e instanceof CustomEvent && e.detail) {
                                    const {relatedTarget: t} = e.detail;
                                    if (t && t.hasAttribute("data-check-all-item"))
                                        return
                                }
                                const r = e.target;
                                if (!(r instanceof HTMLInputElement))
                                    return;
                                n = null;
                                for (const n of t.querySelectorAll("[data-check-all-item]"))
                                    i(r, n, r.checked);
                                r.indeterminate = !1,
                                    s()
                            }(r) : o.hasAttribute("data-check-all-item") && function(r) {
                                if (r instanceof CustomEvent && r.detail) {
                                    const {relatedTarget: t} = r.detail;
                                    if (t && (t.hasAttribute("data-check-all") || t.hasAttribute("data-check-all-item")))
                                        return
                                }
                                const o = r.target;
                                if (!(o instanceof HTMLInputElement))
                                    return;
                                const a = Array.from(t.querySelectorAll("[data-check-all-item]"));
                                if (e && n) {
                                    const [t,e] = [a.indexOf(n), a.indexOf(o)].sort();
                                    for (const n of a.slice(t, +e + 1 || 9e9))
                                        i(o, n, o.checked)
                                }
                                e = !1,
                                    n = o;
                                const c = t.querySelector("[data-check-all]");
                                if (c) {
                                    const t = a.length
                                        , e = a.filter((t=>t instanceof HTMLInputElement && t.checked)).length;
                                    i(o, c, e === t, t > e && e > 0)
                                }
                                s()
                            }(r))
                        }
                        function o(t) {
                            if (!(t.target instanceof Element))
                                return;
                            (t.target instanceof HTMLLabelElement && t.target.control || t.target).hasAttribute("data-check-all-item") && (e = t.shiftKey)
                        }
                        function s() {
                            const e = t.querySelector("[data-check-all-count]");
                            if (e) {
                                const n = t.querySelectorAll("[data-check-all-item]:checked").length;
                                e.textContent = n.toString()
                            }
                        }
                        return t.addEventListener("mousedown", o),
                            t.addEventListener("change", r),
                            {
                                unsubscribe: ()=>{
                                    t.removeEventListener("mousedown", o),
                                        t.removeEventListener("change", r)
                                }
                            }
                    },
                    t: function(t, e) {
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            get() {
                                return function(t, e) {
                                    const n = t.tagName.toLowerCase();
                                    if (t.shadowRoot)
                                        for (const i of t.shadowRoot.querySelectorAll(`[data-target~="${n}.${e}"]`))
                                            if (!i.closest(n))
                                                return i;
                                    for (const i of t.querySelectorAll(`[data-target~="${n}.${e}"]`))
                                        if (i.closest(n) === t)
                                            return i
                                }(this, e)
                            }
                        })
                    },
                    v: function(t) {
                        const e = vr.get(t);
                        if (e && e.length)
                            for (const n of e)
                                n && n.delete(t);
                        0 === Object.keys(gr.children).length && document.removeEventListener("keydown", yr)
                    },
                    w: function(t) {
                        return t.split("\n").reduce((function(t, e) {
                                var n = function(t) {
                                    var e = kr.exec(t);
                                    if (!e)
                                        return null;
                                    var n = e[2] && 0 === e[2].indexOf("native")
                                        , i = e[2] && 0 === e[2].indexOf("eval")
                                        , r = Ar.exec(e[2]);
                                    i && null != r && (e[2] = r[1],
                                        e[3] = r[2],
                                        e[4] = r[3]);
                                    return {
                                        file: n ? null : e[2],
                                        methodName: e[1] || xr,
                                        arguments: n ? [e[2]] : [],
                                        lineNumber: e[3] ? +e[3] : null,
                                        column: e[4] ? +e[4] : null
                                    }
                                }(e) || function(t) {
                                    var e = Tr.exec(t);
                                    if (!e)
                                        return null;
                                    return {
                                        file: e[2],
                                        methodName: e[1] || xr,
                                        arguments: [],
                                        lineNumber: +e[3],
                                        column: e[4] ? +e[4] : null
                                    }
                                }(e) || function(t) {
                                    var e = Lr.exec(t);
                                    if (!e)
                                        return null;
                                    var n = e[3] && e[3].indexOf(" > eval") > -1
                                        , i = Mr.exec(e[3]);
                                    n && null != i && (e[3] = i[1],
                                        e[4] = i[2],
                                        e[5] = null);
                                    return {
                                        file: e[3],
                                        methodName: e[1] || xr,
                                        arguments: e[2] ? e[2].split(",") : [],
                                        lineNumber: e[4] ? +e[4] : null,
                                        column: e[5] ? +e[5] : null
                                    }
                                }(e) || function(t) {
                                    var e = Cr.exec(t);
                                    if (!e)
                                        return null;
                                    return {
                                        file: e[2],
                                        methodName: e[1] || xr,
                                        arguments: [],
                                        lineNumber: +e[3],
                                        column: e[4] ? +e[4] : null
                                    }
                                }(e) || function(t) {
                                    var e = Sr.exec(t);
                                    if (!e)
                                        return null;
                                    return {
                                        file: e[3],
                                        methodName: e[1] || xr,
                                        arguments: [],
                                        lineNumber: +e[4],
                                        column: e[5] ? +e[5] : null
                                    }
                                }(e);
                                return n && t.push(n),
                                    t
                            }
                        ), [])
                    },
                    x: function(t, e) {
                        return Or(t, e),
                            {
                                unsubscribe: ()=>{
                                    !function(t) {
                                        const e = Rr.get(t);
                                        if (null == e)
                                            return;
                                        Rr.delete(t),
                                            _r -= 1,
                                        0 === _r && document.removeEventListener("keydown", $r);
                                        e.copyMarkdown && t.removeEventListener("copy", Fr)
                                    }(t)
                                }
                            }
                    },
                    y: Br,
                    z: Wr
                });
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                const e = new WeakMap
                    , n = t=>(...n)=>{
                    const i = t(...n);
                    return e.set(i, !0),
                        i
                }
                    , i = t=>"function" == typeof t && e.has(t)
                    , r = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
                    , o = (t,e,n=null)=>{
                    for (; e !== n; ) {
                        const n = e.nextSibling;
                        t.removeChild(e),
                            e = n
                    }
                }
                    , s = {}
                    , a = {}
                    , c = `{{lit-${String(Math.random()).slice(2)}}}`
                    , l = `\x3c!--${c}--\x3e`
                    , u = new RegExp(`${c}|${l}`)
                    , d = "$lit$";
                class Template {
                    constructor(t, e) {
                        this.parts = [],
                            this.element = e;
                        const n = []
                            , i = []
                            , r = document.createTreeWalker(e.content, 133, null, !1);
                        let o = 0
                            , s = -1
                            , a = 0;
                        const {strings: l, values: {length: m}} = t;
                        for (; a < m; ) {
                            const t = r.nextNode();
                            if (null !== t) {
                                if (s++,
                                1 === t.nodeType) {
                                    if (t.hasAttributes()) {
                                        const e = t.attributes
                                            , {length: n} = e;
                                        let i = 0;
                                        for (let t = 0; t < n; t++)
                                            h(e[t].name, d) && i++;
                                        for (; i-- > 0; ) {
                                            const e = l[a]
                                                , n = p.exec(e)[2]
                                                , i = n.toLowerCase() + d
                                                , r = t.getAttribute(i);
                                            t.removeAttribute(i);
                                            const o = r.split(u);
                                            this.parts.push({
                                                type: "attribute",
                                                index: s,
                                                name: n,
                                                strings: o
                                            }),
                                                a += o.length - 1
                                        }
                                    }
                                    "TEMPLATE" === t.tagName && (i.push(t),
                                        r.currentNode = t.content)
                                } else if (3 === t.nodeType) {
                                    const e = t.data;
                                    if (e.indexOf(c) >= 0) {
                                        const i = t.parentNode
                                            , r = e.split(u)
                                            , o = r.length - 1;
                                        for (let e = 0; e < o; e++) {
                                            let n, o = r[e];
                                            if ("" === o)
                                                n = f();
                                            else {
                                                const t = p.exec(o);
                                                null !== t && h(t[2], d) && (o = o.slice(0, t.index) + t[1] + t[2].slice(0, -d.length) + t[3]),
                                                    n = document.createTextNode(o)
                                            }
                                            i.insertBefore(n, t),
                                                this.parts.push({
                                                    type: "node",
                                                    index: ++s
                                                })
                                        }
                                        "" === r[o] ? (i.insertBefore(f(), t),
                                            n.push(t)) : t.data = r[o],
                                            a += o
                                    }
                                } else if (8 === t.nodeType)
                                    if (t.data === c) {
                                        const e = t.parentNode;
                                        null !== t.previousSibling && s !== o || (s++,
                                            e.insertBefore(f(), t)),
                                            o = s,
                                            this.parts.push({
                                                type: "node",
                                                index: s
                                            }),
                                            null === t.nextSibling ? t.data = "" : (n.push(t),
                                                s--),
                                            a++
                                    } else {
                                        let e = -1;
                                        for (; -1 !== (e = t.data.indexOf(c, e + 1)); )
                                            this.parts.push({
                                                type: "node",
                                                index: -1
                                            }),
                                                a++
                                    }
                            } else
                                r.currentNode = i.pop()
                        }
                        for (const c of n)
                            c.parentNode.removeChild(c)
                    }
                }
                const h = (t,e)=>{
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                }
                    , m = t=>-1 !== t.index
                    , f = ()=>document.createComment("")
                    , p = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                class TemplateInstance {
                    constructor(t, e, n) {
                        this.__parts = [],
                            this.template = t,
                            this.processor = e,
                            this.options = n
                    }
                    update(t) {
                        let e = 0;
                        for (const n of this.__parts)
                            void 0 !== n && n.setValue(t[e]),
                                e++;
                        for (const n of this.__parts)
                            void 0 !== n && n.commit()
                    }
                    _clone() {
                        const t = r ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
                            , e = []
                            , n = this.template.parts
                            , i = document.createTreeWalker(t, 133, null, !1);
                        let o, s = 0, a = 0, c = i.nextNode();
                        for (; s < n.length; )
                            if (o = n[s],
                                m(o)) {
                                for (; a < o.index; )
                                    a++,
                                    "TEMPLATE" === c.nodeName && (e.push(c),
                                        i.currentNode = c.content),
                                    null === (c = i.nextNode()) && (i.currentNode = e.pop(),
                                        c = i.nextNode());
                                if ("node" === o.type) {
                                    const t = this.processor.handleTextExpression(this.options);
                                    t.insertAfterNode(c.previousSibling),
                                        this.__parts.push(t)
                                } else
                                    this.__parts.push(...this.processor.handleAttributeExpressions(c, o.name, o.strings, this.options));
                                s++
                            } else
                                this.__parts.push(void 0),
                                    s++;
                        return r && (document.adoptNode(t),
                            customElements.upgrade(t)),
                            t
                    }
                }
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                const g = ` ${c} `;
                class TemplateResult {
                    constructor(t, e, n, i) {
                        this.strings = t,
                            this.values = e,
                            this.type = n,
                            this.processor = i
                    }
                    getHTML() {
                        const t = this.strings.length - 1;
                        let e = ""
                            , n = !1;
                        for (let i = 0; i < t; i++) {
                            const t = this.strings[i]
                                , r = t.lastIndexOf("\x3c!--");
                            n = (r > -1 || n) && -1 === t.indexOf("--\x3e", r + 1);
                            const o = p.exec(t);
                            e += null === o ? t + (n ? g : l) : t.substr(0, o.index) + o[1] + o[2] + d + o[3] + c
                        }
                        return e += this.strings[t],
                            e
                    }
                    getTemplateElement() {
                        const t = document.createElement("template");
                        return t.innerHTML = this.getHTML(),
                            t
                    }
                }
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                const v = t=>null === t || !("object" == typeof t || "function" == typeof t)
                    , b = t=>Array.isArray(t) || !(!t || !t[Symbol.iterator]);
                class AttributeCommitter {
                    constructor(t, e, n) {
                        this.dirty = !0,
                            this.element = t,
                            this.name = e,
                            this.strings = n,
                            this.parts = [];
                        for (let i = 0; i < n.length - 1; i++)
                            this.parts[i] = this._createPart()
                    }
                    _createPart() {
                        return new AttributePart(this)
                    }
                    _getValue() {
                        const t = this.strings
                            , e = t.length - 1;
                        let n = "";
                        for (let i = 0; i < e; i++) {
                            n += t[i];
                            const e = this.parts[i];
                            if (void 0 !== e) {
                                const t = e.value;
                                if (v(t) || !b(t))
                                    n += "string" == typeof t ? t : String(t);
                                else
                                    for (const e of t)
                                        n += "string" == typeof e ? e : String(e)
                            }
                        }
                        return n += t[e],
                            n
                    }
                    commit() {
                        this.dirty && (this.dirty = !1,
                            this.element.setAttribute(this.name, this._getValue()))
                    }
                }
                class AttributePart {
                    constructor(t) {
                        this.value = void 0,
                            this.committer = t
                    }
                    setValue(t) {
                        t === s || v(t) && t === this.value || (this.value = t,
                        i(t) || (this.committer.dirty = !0))
                    }
                    commit() {
                        for (; i(this.value); ) {
                            const t = this.value;
                            this.value = s,
                                t(this)
                        }
                        this.value !== s && this.committer.commit()
                    }
                }
                class NodePart {
                    constructor(t) {
                        this.value = void 0,
                            this.__pendingValue = void 0,
                            this.options = t
                    }
                    appendInto(t) {
                        this.startNode = t.appendChild(f()),
                            this.endNode = t.appendChild(f())
                    }
                    insertAfterNode(t) {
                        this.startNode = t,
                            this.endNode = t.nextSibling
                    }
                    appendIntoPart(t) {
                        t.__insert(this.startNode = f()),
                            t.__insert(this.endNode = f())
                    }
                    insertAfterPart(t) {
                        t.__insert(this.startNode = f()),
                            this.endNode = t.endNode,
                            t.endNode = this.startNode
                    }
                    setValue(t) {
                        this.__pendingValue = t
                    }
                    commit() {
                        for (; i(this.__pendingValue); ) {
                            const t = this.__pendingValue;
                            this.__pendingValue = s,
                                t(this)
                        }
                        const t = this.__pendingValue;
                        t !== s && (v(t) ? t !== this.value && this.__commitText(t) : t instanceof TemplateResult ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : b(t) ? this.__commitIterable(t) : t === a ? (this.value = a,
                            this.clear()) : this.__commitText(t))
                    }
                    __insert(t) {
                        this.endNode.parentNode.insertBefore(t, this.endNode)
                    }
                    __commitNode(t) {
                        this.value !== t && (this.clear(),
                            this.__insert(t),
                            this.value = t)
                    }
                    __commitText(t) {
                        const e = this.startNode.nextSibling
                            , n = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
                        e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)),
                            this.value = t
                    }
                    __commitTemplateResult(t) {
                        const e = this.options.templateFactory(t);
                        if (this.value instanceof TemplateInstance && this.value.template === e)
                            this.value.update(t.values);
                        else {
                            const n = new TemplateInstance(e,t.processor,this.options)
                                , i = n._clone();
                            n.update(t.values),
                                this.__commitNode(i),
                                this.value = n
                        }
                    }
                    __commitIterable(t) {
                        Array.isArray(this.value) || (this.value = [],
                            this.clear());
                        const e = this.value;
                        let n, i = 0;
                        for (const r of t)
                            n = e[i],
                            void 0 === n && (n = new NodePart(this.options),
                                e.push(n),
                                0 === i ? n.appendIntoPart(this) : n.insertAfterPart(e[i - 1])),
                                n.setValue(r),
                                n.commit(),
                                i++;
                        i < e.length && (e.length = i,
                            this.clear(n && n.endNode))
                    }
                    clear(t=this.startNode) {
                        o(this.startNode.parentNode, t.nextSibling, this.endNode)
                    }
                }
                class BooleanAttributePart {
                    constructor(t, e, n) {
                        if (this.value = void 0,
                            this.__pendingValue = void 0,
                        2 !== n.length || "" !== n[0] || "" !== n[1])
                            throw new Error("Boolean attributes can only contain a single expression");
                        this.element = t,
                            this.name = e,
                            this.strings = n
                    }
                    setValue(t) {
                        this.__pendingValue = t
                    }
                    commit() {
                        for (; i(this.__pendingValue); ) {
                            const t = this.__pendingValue;
                            this.__pendingValue = s,
                                t(this)
                        }
                        if (this.__pendingValue === s)
                            return;
                        const t = !!this.__pendingValue;
                        this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                            this.value = t),
                            this.__pendingValue = s
                    }
                }
                class PropertyCommitter extends AttributeCommitter {
                    constructor(t, e, n) {
                        super(t, e, n),
                            this.single = 2 === n.length && "" === n[0] && "" === n[1]
                    }
                    _createPart() {
                        return new PropertyPart(this)
                    }
                    _getValue() {
                        return this.single ? this.parts[0].value : super._getValue()
                    }
                    commit() {
                        this.dirty && (this.dirty = !1,
                            this.element[this.name] = this._getValue())
                    }
                }
                class PropertyPart extends AttributePart {
                }
                let E = !1;
                try {
                    const t = {
                        get capture() {
                            return E = !0,
                                !1
                        }
                    };
                    window.addEventListener("test", t, t),
                        window.removeEventListener("test", t, t)
                } catch (Oo) {}
                class EventPart {
                    constructor(t, e, n) {
                        this.value = void 0,
                            this.__pendingValue = void 0,
                            this.element = t,
                            this.eventName = e,
                            this.eventContext = n,
                            this.__boundHandleEvent = t=>this.handleEvent(t)
                    }
                    setValue(t) {
                        this.__pendingValue = t
                    }
                    commit() {
                        for (; i(this.__pendingValue); ) {
                            const t = this.__pendingValue;
                            this.__pendingValue = s,
                                t(this)
                        }
                        if (this.__pendingValue === s)
                            return;
                        const t = this.__pendingValue
                            , e = this.value
                            , n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
                            , r = null != t && (null == e || n);
                        n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
                        r && (this.__options = w(t),
                            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
                            this.value = t,
                            this.__pendingValue = s
                    }
                    handleEvent(t) {
                        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                    }
                }
                const w = t=>t && (E ? {
                        capture: t.capture,
                        passive: t.passive,
                        once: t.once
                    } : t.capture)/**
                     * @license
                     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                ;
                const y = new class DefaultTemplateProcessor {
                        handleAttributeExpressions(t, e, n, i) {
                            const r = e[0];
                            if ("." === r) {
                                return new PropertyCommitter(t,e.slice(1),n).parts
                            }
                            if ("@" === r)
                                return [new EventPart(t,e.slice(1),i.eventContext)];
                            if ("?" === r)
                                return [new BooleanAttributePart(t,e.slice(1),n)];
                            return new AttributeCommitter(t,e,n).parts
                        }
                        handleTextExpression(t) {
                            return new NodePart(t)
                        }
                    }
                ;
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                function x(t) {
                    let e = k.get(t.type);
                    void 0 === e && (e = {
                        stringsArray: new WeakMap,
                        keyString: new Map
                    },
                        k.set(t.type, e));
                    let n = e.stringsArray.get(t.strings);
                    if (void 0 !== n)
                        return n;
                    const i = t.strings.join(c);
                    return n = e.keyString.get(i),
                    void 0 === n && (n = new Template(t,t.getTemplateElement()),
                        e.keyString.set(i, n)),
                        e.stringsArray.set(t.strings, n),
                        n
                }
                const k = new Map
                    , A = new WeakMap;
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                t("b", ((t,e,n)=>{
                        let i = A.get(e);
                        void 0 === i && (o(e, e.firstChild),
                            A.set(e, i = new NodePart(Object.assign({
                                templateFactory: x
                            }, n))),
                            i.appendInto(e)),
                            i.setValue(t),
                            i.commit()
                    }
                ));
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
                t("e", ((t,...e)=>new TemplateResult(t,e,"html",y)));
                function T(t, e=0, {start: n=!0, middle: i=!0, once: r=!1}={}) {
                    let o, s = 0, a = !1;
                    function c(...l) {
                        if (a)
                            return;
                        const u = Date.now() - s;
                        s = Date.now(),
                            n ? (n = !1,
                                t.apply(this, l),
                            r && c.cancel()) : (i && u < e || !i) && (clearTimeout(o),
                                o = setTimeout((()=>{
                                        s = Date.now(),
                                            t.apply(this, l),
                                        r && c.cancel()
                                    }
                                ), i ? e - u : e))
                    }
                    return c.cancel = ()=>{
                        clearTimeout(o),
                            a = !0
                    }
                        ,
                        c
                }
                function L(t, e=0, {start: n=!1, middle: i=!1, once: r=!1}={}) {
                    return T(t, e, {
                        start: n,
                        middle: i,
                        once: r
                    })
                }
                function M() {
                    if (!(this instanceof M))
                        return new M;
                    this.size = 0,
                        this.uid = 0,
                        this.selectors = [],
                        this.indexes = Object.create(this.indexes),
                        this.activeIndexes = []
                }
                var S = window.document.documentElement
                    , C = S.matches || S.webkitMatchesSelector || S.mozMatchesSelector || S.oMatchesSelector || S.msMatchesSelector;
                M.prototype.matchesSelector = function(t, e) {
                    return C.call(t, e)
                }
                    ,
                    M.prototype.querySelectorAll = function(t, e) {
                        return e.querySelectorAll(t)
                    }
                    ,
                    M.prototype.indexes = [];
                var N = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                M.prototype.indexes.push({
                    name: "ID",
                    selector: function(t) {
                        var e;
                        if (e = t.match(N))
                            return e[0].slice(1)
                    },
                    element: function(t) {
                        if (t.id)
                            return [t.id]
                    }
                });
                var I = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                M.prototype.indexes.push({
                    name: "CLASS",
                    selector: function(t) {
                        var e;
                        if (e = t.match(I))
                            return e[0].slice(1)
                    },
                    element: function(t) {
                        var e = t.className;
                        if (e) {
                            if ("string" == typeof e)
                                return e.split(/\s/);
                            if ("object" == typeof e && "baseVal"in e)
                                return e.baseVal.split(/\s/)
                        }
                    }
                });
                var D, H = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                M.prototype.indexes.push({
                    name: "TAG",
                    selector: function(t) {
                        var e;
                        if (e = t.match(H))
                            return e[0].toUpperCase()
                    },
                    element: function(t) {
                        return [t.nodeName.toUpperCase()]
                    }
                }),
                    M.prototype.indexes.default = {
                        name: "UNIVERSAL",
                        selector: function() {
                            return !0
                        },
                        element: function() {
                            return [!0]
                        }
                    },
                    D = "function" == typeof window.Map ? window.Map : function() {
                        function t() {
                            this.map = {}
                        }
                        return t.prototype.get = function(t) {
                            return this.map[t + " "]
                        }
                            ,
                            t.prototype.set = function(t, e) {
                                this.map[t + " "] = e
                            }
                            ,
                            t
                    }();
                var P = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
                function R(t, e) {
                    var n, i, r, o, s, a, c = (t = t.slice(0).concat(t.default)).length, l = e, u = [];
                    do {
                        if (P.exec(""),
                        (r = P.exec(l)) && (l = r[3],
                        r[2] || !l))
                            for (n = 0; n < c; n++)
                                if (s = (a = t[n]).selector(r[1])) {
                                    for (i = u.length,
                                             o = !1; i--; )
                                        if (u[i].index === a && u[i].key === s) {
                                            o = !0;
                                            break
                                        }
                                    o || u.push({
                                        index: a,
                                        key: s
                                    });
                                    break
                                }
                    } while (r);return u
                }
                function _(t, e) {
                    var n, i, r;
                    for (n = 0,
                             i = t.length; n < i; n++)
                        if (r = t[n],
                            e.isPrototypeOf(r))
                            return r
                }
                function q(t, e) {
                    return t.id - e.id
                }
                M.prototype.logDefaultIndexUsed = function() {}
                    ,
                    M.prototype.add = function(t, e) {
                        var n, i, r, o, s, a, c, l, u = this.activeIndexes, d = this.selectors;
                        if ("string" == typeof t) {
                            for (n = {
                                id: this.uid++,
                                selector: t,
                                data: e
                            },
                                     c = R(this.indexes, t),
                                     i = 0; i < c.length; i++)
                                o = (l = c[i]).key,
                                (s = _(u, r = l.index)) || ((s = Object.create(r)).map = new D,
                                    u.push(s)),
                                r === this.indexes.default && this.logDefaultIndexUsed(n),
                                (a = s.map.get(o)) || (a = [],
                                    s.map.set(o, a)),
                                    a.push(n);
                            this.size++,
                                d.push(t)
                        }
                    }
                    ,
                    M.prototype.remove = function(t, e) {
                        if ("string" == typeof t) {
                            var n, i, r, o, s, a, c, l, u = this.activeIndexes, d = {}, h = 1 === arguments.length;
                            for (n = R(this.indexes, t),
                                     r = 0; r < n.length; r++)
                                for (i = n[r],
                                         o = u.length; o--; )
                                    if (a = u[o],
                                        i.index.isPrototypeOf(a)) {
                                        if (c = a.map.get(i.key))
                                            for (s = c.length; s--; )
                                                (l = c[s]).selector !== t || !h && l.data !== e || (c.splice(s, 1),
                                                    d[l.id] = !0);
                                        break
                                    }
                            this.size -= Object.keys(d).length
                        }
                    }
                    ,
                    M.prototype.queryAll = function(t) {
                        if (!this.selectors.length)
                            return [];
                        var e, n, i, r, o, s, a, c, l = {}, u = [], d = this.querySelectorAll(this.selectors.join(", "), t);
                        for (e = 0,
                                 i = d.length; e < i; e++)
                            for (o = d[e],
                                     n = 0,
                                     r = (s = this.matches(o)).length; n < r; n++)
                                l[(c = s[n]).id] ? a = l[c.id] : (a = {
                                    id: c.id,
                                    selector: c.selector,
                                    data: c.data,
                                    elements: []
                                },
                                    l[c.id] = a,
                                    u.push(a)),
                                    a.elements.push(o);
                        return u.sort(q)
                    }
                    ,
                    M.prototype.matches = function(t) {
                        if (!t)
                            return [];
                        var e, n, i, r, o, s, a, c, l, u, d, h = this.activeIndexes, m = {}, f = [];
                        for (e = 0,
                                 r = h.length; e < r; e++)
                            if (c = (a = h[e]).element(t))
                                for (n = 0,
                                         o = c.length; n < o; n++)
                                    if (l = a.map.get(c[n]))
                                        for (i = 0,
                                                 s = l.length; i < s; i++)
                                            !m[d = (u = l[i]).id] && this.matchesSelector(t, u.selector) && (m[d] = !0,
                                                f.push(u));
                        return f.sort(q)
                    }
                ;
                var O = {}
                    , F = {}
                    , B = new WeakMap
                    , W = new WeakMap
                    , $ = new WeakMap
                    , j = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
                function V(t, e, n) {
                    var i = t[e];
                    return t[e] = function() {
                        return n.apply(t, arguments),
                            i.apply(t, arguments)
                    }
                        ,
                        t
                }
                function U() {
                    B.set(this, !0)
                }
                function K() {
                    B.set(this, !0),
                        W.set(this, !0)
                }
                function Y() {
                    return $.get(this) || null
                }
                function X(t, e) {
                    j && Object.defineProperty(t, "currentTarget", {
                        configurable: !0,
                        enumerable: !0,
                        get: e || j.get
                    })
                }
                function z(t) {
                    if (function(t) {
                        try {
                            return t.eventPhase,
                                !0
                        } catch (e) {
                            return !1
                        }
                    }(t)) {
                        var e = (1 === t.eventPhase ? F : O)[t.type];
                        if (e) {
                            var n = function(t, e, n) {
                                var i = []
                                    , r = e;
                                do {
                                    if (1 !== r.nodeType)
                                        break;
                                    var o = t.matches(r);
                                    if (o.length) {
                                        var s = {
                                            node: r,
                                            observers: o
                                        };
                                        n ? i.unshift(s) : i.push(s)
                                    }
                                } while (r = r.parentElement);return i
                            }(e, t.target, 1 === t.eventPhase);
                            if (n.length) {
                                V(t, "stopPropagation", U),
                                    V(t, "stopImmediatePropagation", K),
                                    X(t, Y);
                                for (var i = 0, r = n.length; i < r && !B.get(t); i++) {
                                    var o = n[i];
                                    $.set(t, o.node);
                                    for (var s = 0, a = o.observers.length; s < a && !W.get(t); s++)
                                        o.observers[s].data.call(o.node, t)
                                }
                                $.delete(t),
                                    X(t)
                            }
                        }
                    }
                }
                const G = new WeakMap
                    , Q = 2147483647
                    , Z = (t("u", n(((...t)=>e=>{
                        let n = G.get(e);
                        void 0 === n && (n = {
                            lastRenderedIndex: Q,
                            values: []
                        },
                            G.set(e, n));
                        const i = n.values;
                        let r = i.length;
                        n.values = t;
                        for (let o = 0; o < t.length && !(o > n.lastRenderedIndex); o++) {
                            const s = t[o];
                            if (v(s) || "function" != typeof s.then) {
                                e.setValue(s),
                                    n.lastRenderedIndex = o;
                                break
                            }
                            o < r && s === i[o] || (n.lastRenderedIndex = Q,
                                r = 0,
                                Promise.resolve(s).then((t=>{
                                        const i = n.values.indexOf(s);
                                        i > -1 && i < n.lastRenderedIndex && (n.lastRenderedIndex = i,
                                            e.setValue(t),
                                            e.commit())
                                    }
                                )))
                        }
                    }
                ))),
                    !!navigator.userAgent.match(/Macintosh/));
                class Combobox {
                    constructor(t, e) {
                        this.input = t,
                            this.list = e,
                            this.isComposing = !1,
                        e.id || (e.id = "combobox-" + Math.random().toString().slice(2, 6)),
                            this.keyboardEventHandler = t=>function(t, e) {
                                if (t.shiftKey || t.metaKey || t.altKey)
                                    return;
                                if (!Z && t.ctrlKey)
                                    return;
                                if (e.isComposing)
                                    return;
                                switch (t.key) {
                                    case "Enter":
                                    case "Tab":
                                        (function(t, e) {
                                                const n = e.querySelector('[aria-selected="true"]');
                                                return !!n && ("true" === n.getAttribute("aria-disabled") || n.click(),
                                                    !0)
                                            }
                                        )(e.input, e.list) && t.preventDefault();
                                        break;
                                    case "Escape":
                                        e.clearSelection();
                                        break;
                                    case "ArrowDown":
                                        e.navigate(1),
                                            t.preventDefault();
                                        break;
                                    case "ArrowUp":
                                        e.navigate(-1),
                                            t.preventDefault();
                                        break;
                                    case "n":
                                        Z && t.ctrlKey && (e.navigate(1),
                                            t.preventDefault());
                                        break;
                                    case "p":
                                        Z && t.ctrlKey && (e.navigate(-1),
                                            t.preventDefault());
                                        break;
                                    default:
                                        if (t.ctrlKey)
                                            break;
                                        e.clearSelection()
                                }
                            }(t, this),
                            this.compositionEventHandler = t=>function(t, e) {
                                e.isComposing = "compositionstart" === t.type;
                                if (!document.getElementById(e.input.getAttribute("aria-controls") || ""))
                                    return;
                                e.clearSelection()
                            }(t, this),
                            this.inputHandler = this.clearSelection.bind(this),
                            t.setAttribute("role", "combobox"),
                            t.setAttribute("aria-controls", e.id),
                            t.setAttribute("aria-expanded", "false"),
                            t.setAttribute("aria-autocomplete", "list"),
                            t.setAttribute("aria-haspopup", "listbox")
                    }
                    destroy() {
                        this.clearSelection(),
                            this.stop(),
                            this.input.removeAttribute("role"),
                            this.input.removeAttribute("aria-controls"),
                            this.input.removeAttribute("aria-expanded"),
                            this.input.removeAttribute("aria-autocomplete"),
                            this.input.removeAttribute("aria-haspopup")
                    }
                    start() {
                        this.input.setAttribute("aria-expanded", "true"),
                            this.input.addEventListener("compositionstart", this.compositionEventHandler),
                            this.input.addEventListener("compositionend", this.compositionEventHandler),
                            this.input.addEventListener("input", this.inputHandler),
                            this.input.addEventListener("keydown", this.keyboardEventHandler),
                            this.list.addEventListener("click", J)
                    }
                    stop() {
                        this.clearSelection(),
                            this.input.setAttribute("aria-expanded", "false"),
                            this.input.removeEventListener("compositionstart", this.compositionEventHandler),
                            this.input.removeEventListener("compositionend", this.compositionEventHandler),
                            this.input.removeEventListener("input", this.inputHandler),
                            this.input.removeEventListener("keydown", this.keyboardEventHandler),
                            this.list.removeEventListener("click", J)
                    }
                    navigate(t=1) {
                        const e = Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(tt)[0]
                            , n = Array.from(this.list.querySelectorAll('[role="option"]')).filter(tt)
                            , i = n.indexOf(e);
                        if (i === n.length - 1 && 1 === t || 0 === i && -1 === t)
                            return this.clearSelection(),
                                void this.input.focus();
                        let r = 1 === t ? 0 : n.length - 1;
                        if (e && i >= 0) {
                            const e = i + t;
                            e >= 0 && e < n.length && (r = e)
                        }
                        const o = n[r];
                        if (o)
                            for (const s of n)
                                o === s ? (this.input.setAttribute("aria-activedescendant", o.id),
                                    o.setAttribute("aria-selected", "true"),
                                    et(this.list, o)) : s.setAttribute("aria-selected", "false")
                    }
                    clearSelection() {
                        this.input.removeAttribute("aria-activedescendant");
                        for (const t of this.list.querySelectorAll('[aria-selected="true"]'))
                            t.setAttribute("aria-selected", "false")
                    }
                }
                function J(t) {
                    if (!(t.target instanceof Element))
                        return;
                    const e = t.target.closest('[role="option"]');
                    e && "true" !== e.getAttribute("aria-disabled") && function(t) {
                        t.dispatchEvent(new CustomEvent("combobox-commit",{
                            bubbles: !0
                        }))
                    }(e)
                }
                function tt(t) {
                    return !t.hidden && !(t instanceof HTMLInputElement && "hidden" === t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
                }
                function et(t, e) {
                    (function(t, e) {
                            const n = t.scrollTop
                                , i = n + t.clientHeight
                                , r = e.offsetTop
                                , o = r + e.clientHeight;
                            return r >= n && o <= i
                        }
                    )(t, e) || (t.scrollTop = e.offsetTop)
                }
                t("C", Combobox);
                var nt = null
                    , it = null
                    , rt = [];
                function ot(t, e) {
                    var n = [];
                    function i() {
                        var t = n;
                        n = [],
                            e(t)
                    }
                    return function() {
                        for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
                            r[o] = arguments[o];
                        n.push(r),
                        1 === n.length && st(t, i)
                    }
                }
                function st(t, e) {
                    it || (it = new MutationObserver(at)),
                    nt || (nt = t.createElement("div"),
                        it.observe(nt, {
                            attributes: !0
                        })),
                        rt.push(e),
                        nt.setAttribute("data-twiddle", "" + Date.now())
                }
                function at() {
                    var t = rt;
                    rt = [];
                    for (var e = 0; e < t.length; e++)
                        try {
                            t[e]()
                        } catch (n) {
                            setTimeout((function() {
                                    throw n
                                }
                            ), 0)
                        }
                }
                var ct = new WeakMap
                    , lt = new WeakMap
                    , ut = new WeakMap
                    , dt = new WeakMap;
                function ht(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n]
                            , r = i[0]
                            , o = i[1]
                            , s = i[2];
                        r === Et ? (mt(s, o),
                            ft(s, o)) : r === wt ? pt(s, o) : r === yt && gt(t.observers, o)
                    }
                }
                function mt(t, e) {
                    if (e instanceof t.elementConstructor) {
                        var n = ct.get(e);
                        if (n || (n = [],
                            ct.set(e, n)),
                        -1 === n.indexOf(t.id)) {
                            var i = void 0;
                            if (t.initialize && (i = t.initialize.call(void 0, e)),
                                i) {
                                var r = lt.get(e);
                                r || (r = {},
                                    lt.set(e, r)),
                                    r["" + t.id] = i
                            }
                            n.push(t.id)
                        }
                    }
                }
                function ft(t, e) {
                    if (e instanceof t.elementConstructor) {
                        var n = dt.get(e);
                        if (n || (n = [],
                            dt.set(e, n)),
                        -1 === n.indexOf(t.id)) {
                            t.elements.push(e);
                            var i = lt.get(e)
                                , r = i ? i["" + t.id] : null;
                            if (r && r.add && r.add.call(void 0, e),
                                t.subscribe) {
                                var o = t.subscribe.call(void 0, e);
                                if (o) {
                                    var s = ut.get(e);
                                    s || (s = {},
                                        ut.set(e, s)),
                                        s["" + t.id] = o
                                }
                            }
                            t.add && t.add.call(void 0, e),
                                n.push(t.id)
                        }
                    }
                }
                function pt(t, e) {
                    if (e instanceof t.elementConstructor) {
                        var n = dt.get(e);
                        if (n) {
                            var i = t.elements.indexOf(e);
                            if (-1 !== i && t.elements.splice(i, 1),
                            -1 !== (i = n.indexOf(t.id))) {
                                var r = lt.get(e)
                                    , o = r ? r["" + t.id] : null;
                                if (o && o.remove && o.remove.call(void 0, e),
                                    t.subscribe) {
                                    var s = ut.get(e)
                                        , a = s ? s["" + t.id] : null;
                                    a && a.unsubscribe && a.unsubscribe()
                                }
                                t.remove && t.remove.call(void 0, e),
                                    n.splice(i, 1)
                            }
                            0 === n.length && dt.delete(e)
                        }
                    }
                }
                function gt(t, e) {
                    var n = dt.get(e);
                    if (n) {
                        for (var i = n.slice(0), r = 0; r < i.length; r++) {
                            var o = t[i[r]];
                            if (o) {
                                var s = o.elements.indexOf(e);
                                -1 !== s && o.elements.splice(s, 1);
                                var a = lt.get(e)
                                    , c = a ? a["" + o.id] : null;
                                c && c.remove && c.remove.call(void 0, e);
                                var l = ut.get(e)
                                    , u = l ? l["" + o.id] : null;
                                u && u.unsubscribe && u.unsubscribe(),
                                o.remove && o.remove.call(void 0, e)
                            }
                        }
                        dt.delete(e)
                    }
                }
                var vt = null;
                function bt(t) {
                    return "matches"in t || "webkitMatchesSelector"in t || "mozMatchesSelector"in t || "oMatchesSelector"in t || "msMatchesSelector"in t
                }
                var Et = 1
                    , wt = 2
                    , yt = 3;
                function xt(t, e, n) {
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        "childList" === r.type ? (kt(t, e, r.addedNodes),
                            At(t, e, r.removedNodes)) : "attributes" === r.type && Tt(t, e, r.target)
                    }
                    (function(t) {
                            if (null === vt) {
                                var e = t.createElement("div")
                                    , n = t.createElement("div")
                                    , i = t.createElement("div");
                                e.appendChild(n),
                                    n.appendChild(i),
                                    e.innerHTML = "",
                                    vt = i.parentNode !== n
                            }
                            return vt
                        }
                    )(t.ownerDocument) && function(t, e) {
                        for (var n = 0; n < t.observers.length; n++) {
                            var i = t.observers[n];
                            if (i)
                                for (var r = i.elements, o = 0; o < r.length; o++) {
                                    var s = r[o];
                                    s.parentNode || e.push([yt, s])
                                }
                        }
                    }(t, e)
                }
                function kt(t, e, n) {
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        if (bt(r))
                            for (var o = t.selectorSet.matches(r), s = 0; s < o.length; s++) {
                                var a = o[s].data;
                                e.push([Et, r, a])
                            }
                        if ("querySelectorAll"in r)
                            for (var c = t.selectorSet.queryAll(r), l = 0; l < c.length; l++)
                                for (var u = c[l], d = u.data, h = u.elements, m = 0; m < h.length; m++)
                                    e.push([Et, h[m], d])
                    }
                }
                function At(t, e, n) {
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        if ("querySelectorAll"in r) {
                            e.push([yt, r]);
                            for (var o = r.querySelectorAll("*"), s = 0; s < o.length; s++)
                                e.push([yt, o[s]])
                        }
                    }
                }
                function Tt(t, e, n) {
                    if (bt(n))
                        for (var i = t.selectorSet.matches(n), r = 0; r < i.length; r++) {
                            var o = i[r].data;
                            e.push([Et, n, o])
                        }
                    if ("querySelectorAll"in n) {
                        var s = dt.get(n);
                        if (s)
                            for (var a = 0; a < s.length; a++) {
                                var c = t.observers[s[a]];
                                c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([wt, n, c]))
                            }
                    }
                }
                var Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    , Mt = 0;
                function St(t) {
                    this.rootNode = 9 === t.nodeType ? t.documentElement : t,
                        this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument,
                        this.observers = [],
                        this.selectorSet = new M,
                        this.mutationObserver = new MutationObserver(It.bind(this, this)),
                        this._scheduleAddRootNodes = ot(this.ownerDocument, Nt.bind(this, this)),
                        this._handleThrottledChangedTargets = ot(this.ownerDocument, Ht.bind(this, this)),
                        this.rootNode.addEventListener("change", Dt.bind(this, this), !1),
                        function(t, e) {
                            var n = t.readyState;
                            "interactive" === n || "complete" === n ? st(t, e) : t.addEventListener("DOMContentLoaded", st(t, e))
                        }(this.ownerDocument, Ct.bind(this, this))
                }
                function Ct(t) {
                    t.mutationObserver.observe(t.rootNode, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    }),
                        t._scheduleAddRootNodes()
                }
                function Nt(t) {
                    var e = [];
                    kt(t, e, [t.rootNode]),
                        ht(t, e)
                }
                function It(t, e) {
                    var n = [];
                    xt(t, n, e),
                        ht(t, n)
                }
                function Dt(t, e) {
                    t._handleThrottledChangedTargets(e.target)
                }
                function Ht(t, e) {
                    var n = [];
                    !function(t, e, n) {
                        for (var i = 0; i < n.length; i++)
                            for (var r = n[i], o = r.form ? r.form.elements : t.rootNode.querySelectorAll("input"), s = 0; s < o.length; s++)
                                Tt(t, e, o[s])
                    }(t, n, e),
                        ht(t, n)
                }
                St.prototype.disconnect = function() {
                    this.mutationObserver.disconnect()
                }
                    ,
                    St.prototype.observe = function(t, e) {
                        var n = void 0;
                        "function" == typeof e ? n = {
                            selector: t,
                            initialize: e
                        } : "object" === (void 0 === e ? "undefined" : Lt(e)) ? (n = e).selector = t : n = t;
                        var i = this
                            , r = {
                            id: Mt++,
                            selector: n.selector,
                            initialize: n.initialize,
                            add: n.add,
                            remove: n.remove,
                            subscribe: n.subscribe,
                            elements: [],
                            elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                            abort: function() {
                                i._abortObserving(r)
                            }
                        };
                        return this.selectorSet.add(r.selector, r),
                            this.observers[r.id] = r,
                            this._scheduleAddRootNodes(),
                            r
                    }
                    ,
                    St.prototype._abortObserving = function(t) {
                        for (var e = t.elements, n = 0; n < e.length; n++)
                            pt(t, e[n]);
                        this.selectorSet.remove(t.selector, t),
                            delete this.observers[t.id]
                    }
                    ,
                    St.prototype.triggerObservers = function(t) {
                        var e = [];
                        !function(t, e, n) {
                            if ("querySelectorAll"in n) {
                                Tt(t, e, n);
                                for (var i = n.querySelectorAll("*"), r = 0; r < i.length; r++)
                                    Tt(t, e, i[r])
                            }
                        }(this, e, t),
                            ht(this, e)
                    }
                ;
                var Pt = void 0;
                function Rt() {
                    return Pt || (Pt = new St(window.document)),
                        Pt
                }
                class ErrorWithResponse extends Error {
                    constructor(t, e) {
                        super(t),
                            this.response = e
                    }
                }
                function _t() {
                    let t, e;
                    return [new Promise((function(n, i) {
                            t = n,
                                e = i
                        }
                    )), t, e]
                }
                let qt;
                const Ot = []
                    , Ft = [];
                function Bt(t) {
                    if (!(t.target instanceof HTMLFormElement))
                        return;
                    const e = t.target
                        , n = function(t) {
                        const e = [];
                        for (const n of qt.keys())
                            if (t.matches(n)) {
                                const t = qt.get(n) || [];
                                e.push(...t)
                            }
                        return e
                    }(e);
                    if (0 === n.length)
                        return;
                    const i = function(t) {
                        const e = {
                            method: t.method || "GET",
                            url: t.action,
                            headers: new Headers({
                                "X-Requested-With": "XMLHttpRequest"
                            }),
                            body: null
                        };
                        if ("GET" === e.method.toUpperCase()) {
                            const n = function(t) {
                                const e = new URLSearchParams
                                    , n = new FormData(t).entries();
                                for (const [i,r] of [...n])
                                    e.append(i, r.toString());
                                return e.toString()
                            }(t);
                            n && (e.url += (~e.url.indexOf("?") ? "&" : "?") + n)
                        } else
                            e.body = new FormData(t);
                        return e
                    }(e)
                        , [r,o,s] = _t();
                    t.preventDefault(),
                        async function(t, e, n, i) {
                            let r = !1;
                            for (const o of t) {
                                const [t,s] = _t()
                                    , a = ()=>(r = !0,
                                    s(),
                                    i)
                                    , c = {
                                    text: a,
                                    json: ()=>(n.headers.set("Accept", "application/json"),
                                        a()),
                                    html: ()=>(n.headers.set("Accept", "text/html"),
                                        a())
                                };
                                await Promise.race([t, o(e, c, n)])
                            }
                            return r
                        }(n, e, i, r).then((async t=>{
                                if (t) {
                                    for (const t of Ft)
                                        await t(e);
                                    (async function(t) {
                                            const e = await window.fetch(t.url, {
                                                method: t.method,
                                                body: null !== t.body ? t.body : void 0,
                                                headers: t.headers,
                                                credentials: "same-origin"
                                            })
                                                , n = {
                                                url: e.url,
                                                status: e.status,
                                                statusText: e.statusText,
                                                headers: e.headers,
                                                text: "",
                                                get json() {
                                                    const t = this
                                                        , e = JSON.parse(t.text);
                                                    return delete t.json,
                                                        t.json = e,
                                                        t.json
                                                },
                                                get html() {
                                                    const t = this;
                                                    return delete t.html,
                                                        t.html = function(t, e) {
                                                            const n = t.createElement("template");
                                                            return n.innerHTML = e,
                                                                t.importNode(n.content, !0)
                                                        }(document, t.text),
                                                        t.html
                                                }
                                            }
                                                , i = await e.text();
                                            if (n.text = i,
                                                e.ok)
                                                return n;
                                            throw new ErrorWithResponse("request failed",n)
                                        }
                                    )(i).then(o, s).catch((()=>{}
                                    )).then((()=>{
                                            for (const t of Ot)
                                                t(e)
                                        }
                                    ))
                                } else
                                    e.submit()
                            }
                        ), (t=>{
                                e.submit(),
                                    setTimeout((()=>{
                                            throw t
                                        }
                                    ))
                            }
                        ))
                }
                const Wt = new Set;
                const $t = new WeakMap;
                function jt(t=document) {
                    if ($t.has(t))
                        return $t.get(t);
                    let e = !1;
                    const n = new MutationObserver((t=>{
                            for (const e of t)
                                if ("attributes" === e.type && e.target instanceof Element)
                                    Yt(e.target);
                                else if ("childList" === e.type && e.addedNodes.length)
                                    for (const t of e.addedNodes)
                                        t instanceof Element && Vt(t)
                        }
                    ));
                    n.observe(t, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        attributeFilter: ["data-action"]
                    });
                    const i = {
                        get closed() {
                            return e
                        },
                        unsubscribe() {
                            e = !0,
                                $t.delete(t),
                                n.disconnect()
                        }
                    };
                    return $t.set(t, i),
                        i
                }
                function Vt(t) {
                    for (const e of t.querySelectorAll("[data-action]"))
                        Yt(e);
                    t instanceof Element && t.hasAttribute("data-action") && Yt(t)
                }
                function Ut(t) {
                    const e = t.currentTarget;
                    for (const n of Kt(e))
                        if (t.type === n.type && Wt.has(n.tag)) {
                            const i = e.closest(n.tag);
                            i && "function" == typeof i[n.method] && i[n.method](t);
                            const r = e.getRootNode();
                            if (r instanceof ShadowRoot && r.host.matches(n.tag)) {
                                const e = r.host;
                                "function" == typeof e[n.method] && e[n.method](t)
                            }
                        }
                }
                function *Kt(t) {
                    for (const e of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
                        const t = e.lastIndexOf(":")
                            , n = e.lastIndexOf("#")
                            , i = e.slice(0, t)
                            , r = e.slice(t + 1, n)
                            , o = e.slice(n + 1);
                        yield{
                            type: i,
                            tag: r,
                            method: o
                        }
                    }
                }
                function Yt(t) {
                    for (const e of Kt(t))
                        t.addEventListener(e.type, Ut)
                }
                const Xt = "data-close-dialog"
                    , zt = `[${Xt}]`;
                function Gt(t) {
                    let e = Array.from(t.querySelectorAll("[autofocus]")).filter(Zt)[0];
                    e || (e = t,
                        t.setAttribute("tabindex", "-1")),
                        e.focus()
                }
                function Qt(t) {
                    const e = t.currentTarget;
                    e instanceof Element && ("Escape" === t.key || "Esc" === t.key ? (ne(e, !1),
                        t.stopPropagation()) : "Tab" === t.key && function(t) {
                        if (!(t.currentTarget instanceof Element))
                            return;
                        const e = t.currentTarget.querySelector("details-dialog");
                        if (!e)
                            return;
                        t.preventDefault();
                        const n = Array.from(e.querySelectorAll("*")).filter(Zt);
                        if (0 === n.length)
                            return;
                        const i = t.shiftKey ? -1 : 1
                            , r = e.getRootNode()
                            , o = e.contains(r.activeElement) ? r.activeElement : null;
                        let s = -1 === i ? -1 : 0;
                        if (o instanceof HTMLElement) {
                            const t = n.indexOf(o);
                            -1 !== t && (s = t + i)
                        }
                        s < 0 ? s = n.length - 1 : s %= n.length;
                        n[s].focus()
                    }(t))
                }
                function Zt(t) {
                    return t.tabIndex >= 0 && !t.disabled && function(t) {
                        return !t.hidden && (!t.type || "hidden" !== t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
                    }(t)
                }
                function Jt(t) {
                    const e = t.querySelector("details-dialog");
                    return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close",{
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                function te(t) {
                    if (!(t.currentTarget instanceof Element))
                        return;
                    const e = t.currentTarget.closest("details");
                    e && e.hasAttribute("open") && (Jt(e) || (t.preventDefault(),
                        t.stopPropagation()))
                }
                function ee(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    const n = e.querySelector("details-dialog");
                    if (n instanceof DetailsDialogElement)
                        if (e.hasAttribute("open")) {
                            const t = "getRootNode"in n ? n.getRootNode() : document;
                            t.activeElement instanceof HTMLElement && se.set(n, {
                                details: e,
                                activeElement: t.activeElement
                            }),
                                Gt(n),
                                e.addEventListener("keydown", Qt)
                        } else {
                            for (const e of n.querySelectorAll("form"))
                                e.reset();
                            const t = function(t, e) {
                                const n = se.get(e);
                                return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector("summary")
                            }(e, n);
                            t && t.focus(),
                                e.removeEventListener("keydown", Qt)
                        }
                }
                function ne(t, e) {
                    e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : Jt(t) && t.removeAttribute("open"))
                }
                function ie(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    const n = e.querySelector("details-dialog");
                    if (!(n instanceof DetailsDialogElement))
                        return;
                    const i = n.querySelector("include-fragment:not([src])");
                    if (!i)
                        return;
                    const r = n.src;
                    null !== r && (i.addEventListener("loadend", (()=>{
                            e.hasAttribute("open") && Gt(n)
                        }
                    )),
                        i.setAttribute("src", r),
                        oe(e))
                }
                function re(t, e, n) {
                    oe(t),
                    e && t.addEventListener("toggle", ie, {
                        once: !0
                    }),
                    e && n && t.addEventListener("mouseover", ie, {
                        once: !0
                    })
                }
                function oe(t) {
                    t.removeEventListener("toggle", ie),
                        t.removeEventListener("mouseover", ie)
                }
                const se = new WeakMap;
                class DetailsDialogElement extends HTMLElement {
                    static get CLOSE_ATTR() {
                        return Xt
                    }
                    static get CLOSE_SELECTOR() {
                        return zt
                    }
                    constructor() {
                        super(),
                            se.set(this, {
                                details: null,
                                activeElement: null
                            }),
                            this.addEventListener("click", (function({target: t}) {
                                    if (!(t instanceof Element))
                                        return;
                                    const e = t.closest("details");
                                    e && t.closest(zt) && ne(e, !1)
                                }
                            ))
                    }
                    get src() {
                        return this.getAttribute("src")
                    }
                    set src(t) {
                        this.setAttribute("src", t || "")
                    }
                    get preload() {
                        return this.hasAttribute("preload")
                    }
                    set preload(t) {
                        t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                    }
                    connectedCallback() {
                        this.setAttribute("role", "dialog"),
                            this.setAttribute("aria-modal", "true");
                        const t = se.get(this);
                        if (!t)
                            return;
                        const e = this.parentElement;
                        if (!e)
                            return;
                        const n = e.querySelector("summary");
                        n && (n.hasAttribute("role") || n.setAttribute("role", "button"),
                            n.addEventListener("click", te, {
                                capture: !0
                            })),
                            e.addEventListener("toggle", ee),
                            t.details = e,
                            re(e, this.src, this.preload)
                    }
                    disconnectedCallback() {
                        const t = se.get(this);
                        if (!t)
                            return;
                        const {details: e} = t;
                        if (!e)
                            return;
                        e.removeEventListener("toggle", ee),
                            oe(e);
                        const n = e.querySelector("summary");
                        n && n.removeEventListener("click", te, {
                            capture: !0
                        }),
                            t.details = null
                    }
                    toggle(t) {
                        const e = se.get(this);
                        if (!e)
                            return;
                        const {details: n} = e;
                        n && ne(n, t)
                    }
                    static get observedAttributes() {
                        return ["src", "preload"]
                    }
                    attributeChangedCallback() {
                        const t = se.get(this);
                        if (!t)
                            return;
                        const {details: e} = t;
                        e && re(e, this.src, this.preload)
                    }
                }
                function ae(t, e=0, {start: n=!1, middle: i=!1, once: r=!1}={}) {
                    return function(t, e=0, {start: n=!0, middle: i=!0, once: r=!1}={}) {
                        var o, s = 0, a = !1, c = function c(...l) {
                            if (!a) {
                                var u = Date.now() - s;
                                s = Date.now(),
                                    n ? (n = !1,
                                        t(...l),
                                    r && c.cancel()) : (i && u < e || !i) && (clearTimeout(o),
                                        o = setTimeout((function() {
                                                s = Date.now(),
                                                    t(...l),
                                                r && c.cancel()
                                            }
                                        ), i ? e - u : e))
                            }
                        };
                        return c.cancel = function() {
                            clearTimeout(o),
                                a = !0
                        }
                            ,
                            c
                    }(t, e, {
                        start: n,
                        middle: i,
                        once: r
                    })
                }
                t("D", DetailsDialogElement),
                window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement,
                    window.customElements.define("details-dialog", DetailsDialogElement));
                const ce = new WeakMap;
                class AutoCheckElement extends HTMLElement {
                    connectedCallback() {
                        const t = this.input;
                        if (!t)
                            return;
                        const e = ae(ue.bind(null, this), 300)
                            , n = {
                            check: e,
                            controller: null
                        };
                        ce.set(this, n),
                            t.addEventListener("input", le),
                            t.addEventListener("input", e),
                            t.autocomplete = "off",
                            t.spellcheck = !1
                    }
                    disconnectedCallback() {
                        const t = this.input;
                        if (!t)
                            return;
                        const e = ce.get(this);
                        e && (ce.delete(this),
                            t.removeEventListener("input", le),
                            t.removeEventListener("input", e.check),
                            t.setCustomValidity(""))
                    }
                    attributeChangedCallback(t) {
                        if ("required" === t) {
                            const t = this.input;
                            if (!t)
                                return;
                            t.required = this.required
                        }
                    }
                    static get observedAttributes() {
                        return ["required"]
                    }
                    get input() {
                        return this.querySelector("input")
                    }
                    get src() {
                        const t = this.getAttribute("src");
                        if (!t)
                            return "";
                        const e = this.ownerDocument.createElement("a");
                        return e.href = t,
                            e.href
                    }
                    set src(t) {
                        this.setAttribute("src", t)
                    }
                    get csrf() {
                        const t = this.querySelector("[data-csrf]");
                        return this.getAttribute("csrf") || t instanceof HTMLInputElement && t.value || ""
                    }
                    set csrf(t) {
                        this.setAttribute("csrf", t)
                    }
                    get required() {
                        return this.hasAttribute("required")
                    }
                    set required(t) {
                        t ? this.setAttribute("required", "") : this.removeAttribute("required")
                    }
                }
                function le(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof HTMLInputElement))
                        return;
                    const n = e.closest("auto-check");
                    if (!(n instanceof AutoCheckElement))
                        return;
                    const i = n.src
                        , r = n.csrf
                        , o = ce.get(n);
                    if (!i || !r || !o)
                        return;
                    let s = "Verifying…";
                    e.dispatchEvent(new CustomEvent("auto-check-start",{
                        bubbles: !0,
                        detail: {
                            setValidity: t=>s = t
                        }
                    })),
                    n.required && e.setCustomValidity(s)
                }
                async function ue(t) {
                    const e = t.input;
                    if (!e)
                        return;
                    const n = t.src
                        , i = t.csrf
                        , r = ce.get(t);
                    if (!n || !i || !r)
                        return void (t.required && e.setCustomValidity(""));
                    if (!e.value.trim())
                        return void (t.required && e.setCustomValidity(""));
                    const o = new FormData;
                    o.append("authenticity_token", i),
                        o.append("value", e.value),
                        e.dispatchEvent(new CustomEvent("auto-check-send",{
                            bubbles: !0,
                            detail: {
                                body: o
                            }
                        })),
                        r.controller ? r.controller.abort() : t.dispatchEvent(new CustomEvent("loadstart")),
                        r.controller = "AbortController"in window ? new AbortController : {
                            signal: null,
                            abort() {}
                        };
                    try {
                        const i = await async function(t, e, n) {
                            try {
                                const i = await fetch(e, n);
                                return t.dispatchEvent(new CustomEvent("load")),
                                    t.dispatchEvent(new CustomEvent("loadend")),
                                    i
                            } catch (i) {
                                throw "AbortError" !== i.name && (t.dispatchEvent(new CustomEvent("error")),
                                    t.dispatchEvent(new CustomEvent("loadend"))),
                                    i
                            }
                        }(t, n, {
                            credentials: "same-origin",
                            signal: r.controller.signal,
                            method: "POST",
                            body: o
                        });
                        i.ok ? function(t, e, n) {
                            n && e.setCustomValidity("");
                            e.dispatchEvent(new CustomEvent("auto-check-success",{
                                bubbles: !0,
                                detail: {
                                    response: t.clone()
                                }
                            }))
                        }(i, e, t.required) : function(t, e, n) {
                            let i = "Validation failed";
                            const r = t=>i = t;
                            e.dispatchEvent(new CustomEvent("auto-check-error",{
                                bubbles: !0,
                                detail: {
                                    response: t.clone(),
                                    setValidity: r
                                }
                            })),
                            n && e.setCustomValidity(i)
                        }(i, e, t.required),
                            r.controller = null,
                            e.dispatchEvent(new CustomEvent("auto-check-complete",{
                                bubbles: !0
                            }))
                    } catch (s) {
                        "AbortError" !== s.name && (r.controller = null,
                            e.dispatchEvent(new CustomEvent("auto-check-complete",{
                                bubbles: !0
                            })))
                    }
                }
                window.customElements.get("auto-check") || (window.AutoCheckElement = AutoCheckElement,
                    window.customElements.define("auto-check", AutoCheckElement));
                class AutocompleteEvent extends CustomEvent {
                    constructor(t, e) {
                        super(t, e),
                            this.relatedTarget = e.relatedTarget
                    }
                }
                const de = new WeakMap;
                function he(t, e) {
                    const n = new XMLHttpRequest;
                    return n.open("GET", e, !0),
                        n.setRequestHeader("Accept", "text/fragment+html"),
                        function(t, e) {
                            const n = de.get(t);
                            n && n.abort();
                            de.set(t, e);
                            const i = ()=>de.delete(t)
                                , r = function(t) {
                                return new Promise(((e,n)=>{
                                        t.onload = function() {
                                            t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText))
                                        }
                                            ,
                                            t.onerror = n,
                                            t.send()
                                    }
                                ))
                            }(e);
                            return r.then(i, i),
                                r
                        }(t, n)
                }
                class Autocomplete {
                    constructor(t, e, n) {
                        this.container = t,
                            this.input = e,
                            this.results = n,
                            this.combobox = new Combobox(e,n),
                            this.results.hidden = !0,
                            this.input.setAttribute("autocomplete", "off"),
                            this.input.setAttribute("spellcheck", "false"),
                            this.interactingWithList = !1,
                            this.onInputChange = function(t, e) {
                                let n;
                                return function() {
                                    for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
                                        r[o] = arguments[o];
                                    clearTimeout(n),
                                        n = setTimeout((()=>{
                                                clearTimeout(n),
                                                    t(...r)
                                            }
                                        ), e)
                                }
                            }(this.onInputChange.bind(this), 300),
                            this.onResultsMouseDown = this.onResultsMouseDown.bind(this),
                            this.onInputBlur = this.onInputBlur.bind(this),
                            this.onInputFocus = this.onInputFocus.bind(this),
                            this.onKeydown = this.onKeydown.bind(this),
                            this.onCommit = this.onCommit.bind(this),
                            this.input.addEventListener("keydown", this.onKeydown),
                            this.input.addEventListener("focus", this.onInputFocus),
                            this.input.addEventListener("blur", this.onInputBlur),
                            this.input.addEventListener("input", this.onInputChange),
                            this.results.addEventListener("mousedown", this.onResultsMouseDown),
                            this.results.addEventListener("combobox-commit", this.onCommit)
                    }
                    destroy() {
                        this.input.removeEventListener("keydown", this.onKeydown),
                            this.input.removeEventListener("focus", this.onInputFocus),
                            this.input.removeEventListener("blur", this.onInputBlur),
                            this.input.removeEventListener("input", this.onInputChange),
                            this.results.removeEventListener("mousedown", this.onResultsMouseDown),
                            this.results.removeEventListener("combobox-commit", this.onCommit)
                    }
                    onKeydown(t) {
                        if ("Escape" === t.key && this.container.open)
                            this.container.open = !1,
                                t.stopPropagation(),
                                t.preventDefault();
                        else if (t.altKey && "ArrowUp" === t.key && this.container.open)
                            this.container.open = !1,
                                t.stopPropagation(),
                                t.preventDefault();
                        else if (t.altKey && "ArrowDown" === t.key && !this.container.open) {
                            if (!this.input.value.trim())
                                return;
                            this.container.open = !0,
                                t.stopPropagation(),
                                t.preventDefault()
                        }
                    }
                    onInputFocus() {
                        this.fetchResults()
                    }
                    onInputBlur() {
                        this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1
                    }
                    onCommit(t) {
                        let {target: e} = t;
                        const n = e;
                        if (!(n instanceof HTMLElement))
                            return;
                        if (this.container.open = !1,
                        n instanceof HTMLAnchorElement)
                            return;
                        const i = n.getAttribute("data-autocomplete-value") || n.textContent;
                        this.container.value = i
                    }
                    onResultsMouseDown() {
                        this.interactingWithList = !0
                    }
                    onInputChange() {
                        this.container.removeAttribute("value"),
                            this.fetchResults()
                    }
                    identifyOptions() {
                        let t = 0;
                        for (const e of this.results.querySelectorAll('[role="option"]:not([id])'))
                            e.id = "".concat(this.results.id, "-option-").concat(t++)
                    }
                    fetchResults() {
                        const t = this.input.value.trim();
                        if (!t)
                            return void (this.container.open = !1);
                        const e = this.container.src;
                        if (!e)
                            return;
                        const n = new URL(e,window.location.href)
                            , i = new URLSearchParams(n.search.slice(1));
                        i.append("q", t),
                            n.search = i.toString(),
                            this.container.dispatchEvent(new CustomEvent("loadstart")),
                            he(this.input, n.toString()).then((t=>{
                                    this.results.innerHTML = t,
                                        this.identifyOptions();
                                    const e = !!this.results.querySelector('[role="option"]');
                                    this.container.open = e,
                                        this.container.dispatchEvent(new CustomEvent("load")),
                                        this.container.dispatchEvent(new CustomEvent("loadend"))
                                }
                            )).catch((()=>{
                                    this.container.dispatchEvent(new CustomEvent("error")),
                                        this.container.dispatchEvent(new CustomEvent("loadend"))
                                }
                            ))
                    }
                    open() {
                        this.results.hidden && (this.combobox.start(),
                            this.results.hidden = !1)
                    }
                    close() {
                        this.results.hidden || (this.combobox.stop(),
                            this.results.hidden = !0)
                    }
                }
                const me = new WeakMap;
                class AutocompleteElement extends HTMLElement {
                    constructor() {
                        super()
                    }
                    connectedCallback() {
                        const t = this.getAttribute("for");
                        if (!t)
                            return;
                        const e = this.querySelector("input")
                            , n = document.getElementById(t);
                        e instanceof HTMLInputElement && n && (me.set(this, new Autocomplete(this,e,n)),
                            n.setAttribute("role", "listbox"))
                    }
                    disconnectedCallback() {
                        const t = me.get(this);
                        t && (t.destroy(),
                            me.delete(this))
                    }
                    get src() {
                        return this.getAttribute("src") || ""
                    }
                    set src(t) {
                        this.setAttribute("src", t)
                    }
                    get value() {
                        return this.getAttribute("value") || ""
                    }
                    set value(t) {
                        this.setAttribute("value", t)
                    }
                    get open() {
                        return this.hasAttribute("open")
                    }
                    set open(t) {
                        t ? this.setAttribute("open", "") : this.removeAttribute("open")
                    }
                    static get observedAttributes() {
                        return ["open", "value"]
                    }
                    attributeChangedCallback(t, e, n) {
                        if (e === n)
                            return;
                        const i = me.get(this);
                        if (i)
                            switch (t) {
                                case "open":
                                    null === n ? i.close() : i.open();
                                    break;
                                case "value":
                                    null !== n && (i.input.value = n),
                                        this.dispatchEvent(new AutocompleteEvent("auto-complete-change",{
                                            bubbles: !0,
                                            relatedTarget: i.input
                                        }))
                            }
                    }
                }
                function fe(t) {
                    if ("clipboard"in navigator)
                        return navigator.clipboard.writeText(t.textContent);
                    const e = getSelection();
                    if (null == e)
                        return Promise.reject(new Error);
                    e.removeAllRanges();
                    const n = document.createRange();
                    return n.selectNodeContents(t),
                        e.addRange(n),
                        document.execCommand("copy"),
                        e.removeAllRanges(),
                        Promise.resolve()
                }
                function pe(t) {
                    if ("clipboard"in navigator)
                        return navigator.clipboard.writeText(t);
                    const e = document.body;
                    if (!e)
                        return Promise.reject(new Error);
                    const n = function(t) {
                        const e = document.createElement("pre");
                        return e.style.width = "1px",
                            e.style.height = "1px",
                            e.style.position = "fixed",
                            e.style.top = "5px",
                            e.textContent = t,
                            e
                    }(t);
                    return e.appendChild(n),
                        fe(n),
                        e.removeChild(n),
                        Promise.resolve()
                }
                function ge(t) {
                    const e = t.getAttribute("for")
                        , n = t.getAttribute("value");
                    function i() {
                        t.dispatchEvent(new CustomEvent("clipboard-copy",{
                            bubbles: !0
                        }))
                    }
                    if (n)
                        pe(n).then(i);
                    else if (e) {
                        const n = "getRootNode"in Element.prototype ? t.getRootNode() : t.ownerDocument;
                        if (!(n instanceof Document || "ShadowRoot"in window && n instanceof ShadowRoot))
                            return;
                        const o = n.getElementById(e);
                        o && (r = o,
                            r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement ? pe(r.value) : r instanceof HTMLAnchorElement && r.hasAttribute("href") ? pe(r.href) : fe(r)).then(i)
                    }
                    var r
                }
                function ve(t) {
                    const e = t.currentTarget;
                    e instanceof HTMLElement && ge(e)
                }
                function be(t) {
                    if (" " === t.key || "Enter" === t.key) {
                        const e = t.currentTarget;
                        e instanceof HTMLElement && (t.preventDefault(),
                            ge(e))
                    }
                }
                function Ee(t) {
                    t.currentTarget.addEventListener("keydown", be)
                }
                function we(t) {
                    t.currentTarget.removeEventListener("keydown", be)
                }
                window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement,
                    window.customElements.define("auto-complete", AutocompleteElement)),
                    t("A", AutocompleteElement);
                class ClipboardCopyElement extends HTMLElement {
                    constructor() {
                        super(),
                            this.addEventListener("click", ve),
                            this.addEventListener("focus", Ee),
                            this.addEventListener("blur", we)
                    }
                    connectedCallback() {
                        this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"),
                        this.hasAttribute("role") || this.setAttribute("role", "button")
                    }
                    get value() {
                        return this.getAttribute("value") || ""
                    }
                    set value(t) {
                        this.setAttribute("value", t)
                    }
                }
                window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = ClipboardCopyElement,
                    window.customElements.define("clipboard-copy", ClipboardCopyElement)),
                    t("j", ClipboardCopyElement);
                class DetailsMenuElement extends HTMLElement {
                    constructor() {
                        super()
                    }
                    get preload() {
                        return this.hasAttribute("preload")
                    }
                    set preload(t) {
                        t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                    }
                    get src() {
                        return this.getAttribute("src") || ""
                    }
                    set src(t) {
                        this.setAttribute("src", t)
                    }
                    connectedCallback() {
                        this.hasAttribute("role") || this.setAttribute("role", "menu");
                        const t = this.parentElement;
                        if (!t)
                            return;
                        const e = t.querySelector("summary");
                        e && (e.setAttribute("aria-haspopup", "menu"),
                        e.hasAttribute("role") || e.setAttribute("role", "button"));
                        const n = [ke(t, "compositionstart", (t=>He(this, t))), ke(t, "compositionend", (t=>He(this, t))), ke(t, "click", (e=>Ce(t, this, e))), ke(t, "change", (e=>Ce(t, this, e))), ke(t, "keydown", (e=>function(t, e, n) {
                            if (!(n instanceof KeyboardEvent))
                                return;
                            if (t.querySelector("details[open]"))
                                return;
                            const i = ye.get(e);
                            if (!i || i.isComposing)
                                return;
                            const r = n.target instanceof Element && "SUMMARY" === n.target.tagName;
                            switch (n.key) {
                                case "Escape":
                                    t.hasAttribute("open") && (De(t),
                                        n.preventDefault(),
                                        n.stopPropagation());
                                    break;
                                case "ArrowDown":
                                {
                                    r && !t.hasAttribute("open") && t.setAttribute("open", "");
                                    const e = Me(t, !0);
                                    e && e.focus(),
                                        n.preventDefault()
                                }
                                    break;
                                case "ArrowUp":
                                {
                                    r && !t.hasAttribute("open") && t.setAttribute("open", "");
                                    const e = Me(t, !1);
                                    e && e.focus(),
                                        n.preventDefault()
                                }
                                    break;
                                case "n":
                                    if (Se && n.ctrlKey) {
                                        const e = Me(t, !0);
                                        e && e.focus(),
                                            n.preventDefault()
                                    }
                                    break;
                                case "p":
                                    if (Se && n.ctrlKey) {
                                        const e = Me(t, !1);
                                        e && e.focus(),
                                            n.preventDefault()
                                    }
                                    break;
                                case " ":
                                case "Enter":
                                {
                                    const e = document.activeElement;
                                    e instanceof HTMLElement && Ie(e) && e.closest("details") === t && (n.preventDefault(),
                                        n.stopPropagation(),
                                        e.click())
                                }
                            }
                        }(t, this, e))), ke(t, "toggle", (()=>Ae(t, this)), {
                            once: !0
                        }), ke(t, "toggle", (()=>function(t) {
                            if (!t.hasAttribute("open"))
                                return;
                            for (const e of document.querySelectorAll("details[open] > details-menu")) {
                                const n = e.closest("details");
                                n && n !== t && !n.contains(t) && n.removeAttribute("open")
                            }
                        }(t))), this.preload ? ke(t, "mouseover", (()=>Ae(t, this)), {
                            once: !0
                        }) : xe, ...Te(t)];
                        ye.set(this, {
                            subscriptions: n,
                            loaded: !1,
                            isComposing: !1
                        })
                    }
                    disconnectedCallback() {
                        const t = ye.get(this);
                        if (t) {
                            ye.delete(this);
                            for (const e of t.subscriptions)
                                e.unsubscribe()
                        }
                    }
                }
                const ye = new WeakMap
                    , xe = {
                    unsubscribe() {}
                };
                function ke(t, e, n, i=!1) {
                    return t.addEventListener(e, n, i),
                        {
                            unsubscribe: ()=>{
                                t.removeEventListener(e, n, i)
                            }
                        }
                }
                function Ae(t, e) {
                    const n = e.getAttribute("src");
                    if (!n)
                        return;
                    const i = ye.get(e);
                    if (!i)
                        return;
                    if (i.loaded)
                        return;
                    i.loaded = !0;
                    const r = e.querySelector("include-fragment");
                    r && !r.hasAttribute("src") && (r.addEventListener("loadend", (()=>Le(t))),
                        r.setAttribute("src", n))
                }
                function Te(t) {
                    let e = !1;
                    return [ke(t, "mousedown", (()=>e = !0)), ke(t, "keydown", (()=>e = !1)), ke(t, "toggle", (()=>{
                            t.hasAttribute("open") && (Le(t) || e || function(t) {
                                const e = document.activeElement;
                                if (e && Ie(e) && t.contains(e))
                                    return;
                                const n = Me(t, !0);
                                n && n.focus()
                            }(t))
                        }
                    ))]
                }
                function Le(t) {
                    if (!t.hasAttribute("open"))
                        return !1;
                    const e = t.querySelector("[autofocus]");
                    return !!e && (e.focus(),
                        !0)
                }
                function Me(t, e) {
                    const n = Array.from(t.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])'))
                        , i = document.activeElement
                        , r = i instanceof HTMLElement ? n.indexOf(i) : -1
                        , o = e ? n[r + 1] : n[r - 1]
                        , s = e ? n[0] : n[n.length - 1];
                    return o || s
                }
                const Se = navigator.userAgent.match(/Macintosh/);
                function Ce(t, e, n) {
                    const i = n.target;
                    if (i instanceof Element && i.closest("details") === t)
                        if ("click" === n.type) {
                            const e = i.closest('[role="menuitem"], [role="menuitemradio"]')
                                , n = e && "LABEL" === e.tagName && e.querySelector("input");
                            e && !n && Ne(e, t)
                        } else if ("change" === n.type) {
                            const e = i.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
                            e && Ne(e, t)
                        }
                }
                function Ne(t, e) {
                    if (t.hasAttribute("disabled") || "true" === t.getAttribute("aria-disabled"))
                        return;
                    const n = t.closest("details-menu");
                    if (!n)
                        return;
                    n.dispatchEvent(new CustomEvent("details-menu-select",{
                        cancelable: !0,
                        detail: {
                            relatedTarget: t
                        }
                    })) && (!function(t, e) {
                        const n = e.querySelector("[data-menu-button]");
                        if (!n)
                            return;
                        const i = function(t) {
                            if (!t)
                                return null;
                            const e = t.hasAttribute("data-menu-button-text") ? t : t.querySelector("[data-menu-button-text]");
                            return e ? e.getAttribute("data-menu-button-text") || e.textContent : null
                        }(t);
                        if (i)
                            n.textContent = i;
                        else {
                            const e = function(t) {
                                if (!t)
                                    return null;
                                const e = t.hasAttribute("data-menu-button-contents") ? t : t.querySelector("[data-menu-button-contents]");
                                return e ? e.innerHTML : null
                            }(t);
                            e && (n.innerHTML = e)
                        }
                    }(t, e),
                        function(t, e) {
                            for (const n of e.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                                const e = n.querySelector('input[type="radio"], input[type="checkbox"]');
                                let i = (n === t).toString();
                                e instanceof HTMLInputElement && (i = e.indeterminate ? "mixed" : e.checked.toString()),
                                    n.setAttribute("aria-checked", i)
                            }
                        }(t, e),
                    "menuitemcheckbox" !== t.getAttribute("role") && De(e),
                        n.dispatchEvent(new CustomEvent("details-menu-selected",{
                            detail: {
                                relatedTarget: t
                            }
                        })))
                }
                function Ie(t) {
                    const e = t.getAttribute("role");
                    return "menuitem" === e || "menuitemcheckbox" === e || "menuitemradio" === e
                }
                function De(t) {
                    if (!t.hasAttribute("open"))
                        return;
                    t.removeAttribute("open");
                    const e = t.querySelector("summary");
                    e && e.focus()
                }
                function He(t, e) {
                    const n = ye.get(t);
                    n && (n.isComposing = "compositionstart" === e.type)
                }
                window.customElements.get("details-menu") || (window.DetailsMenuElement = DetailsMenuElement,
                    window.customElements.define("details-menu", DetailsMenuElement));
                class Attachment {
                    constructor(t, e) {
                        this.file = t,
                            this.directory = e,
                            this.state = "pending",
                            this.id = null,
                            this.href = null,
                            this.name = null,
                            this.percent = 0
                    }
                    static traverse(t, e) {
                        return function(t, e) {
                            if (e && function(t) {
                                return t.items && Array.from(t.items).some((t=>{
                                        const e = t.webkitGetAsEntry && t.webkitGetAsEntry();
                                        return e && e.isDirectory
                                    }
                                ))
                            }(t))
                                return qe("", function(t) {
                                    return Array.from(t.items).map((t=>t.webkitGetAsEntry())).filter((t=>null != t))
                                }(t));
                            return Promise.resolve(Pe(Array.from(t.files || [])).map((t=>new Attachment(t))))
                        }(t, e)
                    }
                    static from(t) {
                        const e = [];
                        for (const n of t)
                            if (n instanceof File)
                                e.push(new Attachment(n));
                            else {
                                if (!(n instanceof Attachment))
                                    throw new Error("Unexpected type");
                                e.push(n)
                            }
                        return e
                    }
                    get fullPath() {
                        return this.directory ? `${this.directory}/${this.file.name}` : this.file.name
                    }
                    isImage() {
                        return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(this.file.type) > -1
                    }
                    saving(t) {
                        if ("pending" !== this.state && "saving" !== this.state)
                            throw new Error(`Unexpected transition from ${this.state} to saving`);
                        this.state = "saving",
                            this.percent = t
                    }
                    saved(t) {
                        var e, n, i;
                        if ("pending" !== this.state && "saving" !== this.state)
                            throw new Error(`Unexpected transition from ${this.state} to saved`);
                        this.state = "saved",
                            this.id = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : null,
                            this.href = null !== (n = null == t ? void 0 : t.href) && void 0 !== n ? n : null,
                            this.name = null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : null
                    }
                    isPending() {
                        return "pending" === this.state
                    }
                    isSaving() {
                        return "saving" === this.state
                    }
                    isSaved() {
                        return "saved" === this.state
                    }
                }
                function Pe(t) {
                    return Array.from(t).filter((t=>!function(t) {
                        return t.name.startsWith(".")
                    }(t)))
                }
                function Re(t) {
                    return new Promise((function(e, n) {
                            t.file(e, n)
                        }
                    ))
                }
                function _e(t) {
                    return new Promise((function(e, n) {
                            const i = []
                                , r = t.createReader()
                                , o = ()=>{
                                    r.readEntries((t=>{
                                            t.length > 0 ? (i.push(...t),
                                                o()) : e(i)
                                        }
                                    ), n)
                                }
                            ;
                            o()
                        }
                    ))
                }
                async function qe(t, e) {
                    const n = [];
                    for (const i of Pe(e))
                        if (i.isDirectory)
                            n.push(...await qe(i.fullPath, await _e(i)));
                        else {
                            const e = await Re(i);
                            n.push(new Attachment(e,t))
                        }
                    return n
                }
                t("a2", Attachment);
                class FileAttachmentElement extends HTMLElement {
                    constructor() {
                        super(),
                            this.addEventListener("dragenter", Be),
                            this.addEventListener("dragover", Be),
                            this.addEventListener("dragleave", We),
                            this.addEventListener("drop", $e),
                            this.addEventListener("paste", Ve),
                            this.addEventListener("change", Ue)
                    }
                    get directory() {
                        return this.hasAttribute("directory")
                    }
                    set directory(t) {
                        t ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                    }
                    async attach(t) {
                        const e = t instanceof DataTransfer ? await Attachment.traverse(t, this.directory) : Attachment.from(t);
                        this.dispatchEvent(new CustomEvent("file-attachment-accept",{
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                attachments: e
                            }
                        })) && e.length && this.dispatchEvent(new CustomEvent("file-attachment-accepted",{
                            bubbles: !0,
                            detail: {
                                attachments: e
                            }
                        }))
                    }
                }
                function Oe(t) {
                    return Array.from(t.types).indexOf("Files") >= 0
                }
                let Fe = null;
                function Be(t) {
                    const e = t.currentTarget;
                    Fe && clearTimeout(Fe),
                        Fe = window.setTimeout((()=>e.removeAttribute("hover")), 200);
                    const n = t.dataTransfer;
                    n && Oe(n) && (n.dropEffect = "copy",
                        e.setAttribute("hover", ""),
                        t.stopPropagation(),
                        t.preventDefault())
                }
                function We(t) {
                    t.dataTransfer && (t.dataTransfer.dropEffect = "none");
                    t.currentTarget.removeAttribute("hover"),
                        t.stopPropagation(),
                        t.preventDefault()
                }
                function $e(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof FileAttachmentElement))
                        return;
                    e.removeAttribute("hover");
                    const n = t.dataTransfer;
                    n && Oe(n) && (e.attach(n),
                        t.stopPropagation(),
                        t.preventDefault())
                }
                const je = /^image\/(gif|png|jpeg)$/;
                function Ve(t) {
                    if (!t.clipboardData)
                        return;
                    if (!t.clipboardData.items)
                        return;
                    const e = t.currentTarget;
                    if (!(e instanceof FileAttachmentElement))
                        return;
                    const n = function(t) {
                        for (const e of t)
                            if (je.test(e.type))
                                return e.getAsFile();
                        return null
                    }(t.clipboardData.items);
                    if (!n)
                        return;
                    const i = [n];
                    e.attach(i),
                        t.preventDefault()
                }
                function Ue(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof FileAttachmentElement))
                        return;
                    const n = t.target;
                    if (!(n instanceof HTMLInputElement))
                        return;
                    const i = e.getAttribute("input");
                    if (!i || n.id !== i)
                        return;
                    const r = n.files;
                    r && 0 !== r.length && (e.attach(r),
                        n.value = "")
                }
                window.customElements.get("file-attachment") || (window.FileAttachmentElement = FileAttachmentElement,
                    window.customElements.define("file-attachment", FileAttachmentElement));
                class FilterInputElement extends HTMLElement {
                    constructor() {
                        super(),
                            this.currentQuery = null,
                            this.filter = null,
                            this.debounceInputChange = function(t) {
                                let e;
                                return function() {
                                    clearTimeout(e),
                                        e = setTimeout((()=>{
                                                clearTimeout(e),
                                                    t()
                                            }
                                        ), 300)
                                }
                            }((()=>Ke(this, !0))),
                            this.boundFilterResults = ()=>{
                                Ke(this, !1)
                            }
                    }
                    static get observedAttributes() {
                        return ["aria-owns"]
                    }
                    attributeChangedCallback(t, e) {
                        e && "aria-owns" === t && Ke(this, !1)
                    }
                    connectedCallback() {
                        const t = this.input;
                        t && (t.setAttribute("autocomplete", "off"),
                            t.setAttribute("spellcheck", "false"),
                            t.addEventListener("focus", this.boundFilterResults),
                            t.addEventListener("change", this.boundFilterResults),
                            t.addEventListener("input", this.debounceInputChange))
                    }
                    disconnectedCallback() {
                        const t = this.input;
                        t && (t.removeEventListener("focus", this.boundFilterResults),
                            t.removeEventListener("change", this.boundFilterResults),
                            t.removeEventListener("input", this.debounceInputChange))
                    }
                    get input() {
                        const t = this.querySelector("input");
                        return t instanceof HTMLInputElement ? t : null
                    }
                    reset() {
                        const t = this.input;
                        t && (t.value = "",
                            t.dispatchEvent(new Event("change",{
                                bubbles: !0
                            })))
                    }
                }
                async function Ke(t, e=!1) {
                    const n = t.input;
                    if (!n)
                        return;
                    const i = n.value.trim()
                        , r = t.getAttribute("aria-owns");
                    if (!r)
                        return;
                    const o = document.getElementById(r);
                    if (!o)
                        return;
                    const s = o.hasAttribute("data-filter-list") ? o : o.querySelector("[data-filter-list]");
                    if (!s)
                        return;
                    if (t.dispatchEvent(new CustomEvent("filter-input-start",{
                        bubbles: !0
                    })),
                    e && t.currentQuery === i)
                        return;
                    t.currentQuery = i;
                    const a = t.filter || Ye
                        , c = s.childElementCount;
                    let l = 0
                        , u = !1;
                    for (const m of Array.from(s.children)) {
                        if (!(m instanceof HTMLElement))
                            continue;
                        const t = a(m, Xe(m), i);
                        !0 === t.hideNew && (u = t.hideNew),
                            m.hidden = !t.match,
                        t.match && l++
                    }
                    const d = o.querySelector("[data-filter-new-item]")
                        , h = !!d && i.length > 0 && !u;
                    d instanceof HTMLElement && (d.hidden = !h,
                    h && function(t, e) {
                        const n = t.querySelector("[data-filter-new-item-text]");
                        n && (n.textContent = e);
                        const i = t.querySelector("[data-filter-new-item-value]");
                        (i instanceof HTMLInputElement || i instanceof HTMLButtonElement) && (i.value = e)
                    }(d, i)),
                        function(t, e) {
                            const n = t.querySelector("[data-filter-empty-state]");
                            n instanceof HTMLElement && (n.hidden = e)
                        }(o, l > 0 || h),
                        t.dispatchEvent(new CustomEvent("filter-input-updated",{
                            bubbles: !0,
                            detail: {
                                count: l,
                                total: c
                            }
                        }))
                }
                function Ye(t, e, n) {
                    return {
                        match: -1 !== e.toLowerCase().indexOf(n.toLowerCase()),
                        hideNew: e === n
                    }
                }
                function Xe(t) {
                    return ((t.querySelector("[data-filter-item-text]") || t).textContent || "").trim()
                }
                t("F", FilterInputElement),
                window.customElements.get("filter-input") || (window.FilterInputElement = FilterInputElement,
                    window.customElements.define("filter-input", FilterInputElement));
                const ze = new Set(["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "🦻", "👃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👱‍♂️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👱‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🦲", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "👨‍🦯", "👩‍🦯", "👨‍🦼", "👩‍🦼", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🏇", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬"]);
                function Ge(t) {
                    return ze.has(t)
                }
                const Qe = "‍";
                function Ze(t) {
                    return [...t].filter((t=>!tn(t.codePointAt(0)))).join("")
                }
                function Je(t, e) {
                    const n = [...t].map((t=>t.codePointAt(0)));
                    return n[1] && (tn(n[1]) || 65039 === n[1]) ? n[1] = e : n.splice(1, 0, e),
                        String.fromCodePoint(...n)
                }
                function tn(t) {
                    return t >= 127995 && t <= 127999
                }
                function en(t) {
                    switch (t) {
                        case 1:
                            return 127995;
                        case 2:
                            return 127996;
                        case 3:
                            return 127997;
                        case 4:
                            return 127998;
                        case 5:
                            return 127999;
                        default:
                            return null
                    }
                }
                class GEmojiElement extends HTMLElement {
                    get image() {
                        return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                    }
                    get tone() {
                        return (this.getAttribute("tone") || "").split(" ").map((t=>{
                                const e = parseInt(t, 10);
                                return e >= 0 && e <= 5 ? e : 0
                            }
                        )).join(" ")
                    }
                    set tone(t) {
                        this.setAttribute("tone", t)
                    }
                    connectedCallback() {
                        if (null === this.image && !function() {
                            const t = /\bWindows NT 6.1\b/.test(navigator.userAgent)
                                , e = /\bWindows NT 6.2\b/.test(navigator.userAgent)
                                , n = /\bWindows NT 6.3\b/.test(navigator.userAgent)
                                , i = /\bFreeBSD\b/.test(navigator.userAgent)
                                , r = /\bLinux\b/.test(navigator.userAgent) && !/\bAndroid\b/.test(navigator.userAgent);
                            return !(t || e || n || r || i)
                        }()) {
                            const t = this.getAttribute("fallback-src");
                            if (t) {
                                this.textContent = "";
                                const e = function(t) {
                                    const e = document.createElement("img");
                                    return e.className = "emoji",
                                        e.alt = t.getAttribute("alias") || "",
                                        e.height = 20,
                                        e.width = 20,
                                        e
                                }(this);
                                e.src = t,
                                    this.appendChild(e)
                            }
                        }
                        this.hasAttribute("tone") && nn(this)
                    }
                    static get observedAttributes() {
                        return ["tone"]
                    }
                    attributeChangedCallback(t) {
                        switch (t) {
                            case "tone":
                                nn(this)
                        }
                    }
                }
                function nn(t) {
                    if (t.image)
                        return;
                    const e = t.tone.split(" ").map((t=>parseInt(t, 10)));
                    if (0 === e.length)
                        t.textContent = Ze(t.textContent || "");
                    else if (1 === e.length) {
                        const n = e[0];
                        t.textContent = 0 === n ? Ze(t.textContent || "") : function(t, e) {
                            const n = Ze(t);
                            if (!Ge(n))
                                return t;
                            const i = en(e);
                            return i ? n.split(Qe).map((t=>Ge(t) ? Je(t, i) : t)).join(Qe) : t
                        }(t.textContent || "", n)
                    } else
                        t.textContent = function(t, e) {
                            const n = Ze(t);
                            if (!Ge(n))
                                return t;
                            const i = e.map((t=>en(t)));
                            return n.split(Qe).map((t=>{
                                    if (!Ge(t))
                                        return t;
                                    const e = i.shift();
                                    return e ? Je(t, e) : t
                                }
                            )).join(Qe)
                        }(t.textContent || "", e)
                }
                window.customElements.get("g-emoji") || (window.GEmojiElement = GEmojiElement,
                    window.customElements.define("g-emoji", GEmojiElement));
                const rn = new WeakMap;
                function on(t, e) {
                    setTimeout((function() {
                            e.dispatchEvent(new Event(t))
                        }
                    ), 0)
                }
                async function sn(t) {
                    return an(t).then((function(e) {
                            const n = document.createElement("template");
                            n.innerHTML = e;
                            const i = document.importNode(n.content, !0);
                            !t.dispatchEvent(new CustomEvent("include-fragment-replace",{
                                cancelable: !0,
                                detail: {
                                    fragment: i
                                }
                            })) || (t.replaceWith(i),
                                t.dispatchEvent(new CustomEvent("include-fragment-replaced")))
                        }
                    ), (function() {
                            t.classList.add("is-error")
                        }
                    ))
                }
                function an(t) {
                    const e = t.src;
                    let n = rn.get(t);
                    return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")),
                        rn.set(t, {
                            src: e,
                            data: n
                        }),
                        n)
                }
                class IncludeFragmentElement extends HTMLElement {
                    constructor() {
                        super(),
                            this._attached = !1
                    }
                    static get observedAttributes() {
                        return ["src"]
                    }
                    get src() {
                        const t = this.getAttribute("src");
                        if (t) {
                            const e = this.ownerDocument.createElement("a");
                            return e.href = t,
                                e.href
                        }
                        return ""
                    }
                    set src(t) {
                        this.setAttribute("src", t)
                    }
                    get accept() {
                        return this.getAttribute("accept") || ""
                    }
                    set accept(t) {
                        this.setAttribute("accept", t)
                    }
                    get data() {
                        return an(this)
                    }
                    attributeChangedCallback(t) {
                        "src" === t && this._attached && sn(this)
                    }
                    connectedCallback() {
                        this._attached = !0,
                        this.src && sn(this)
                    }
                    disconnectedCallback() {
                        this._attached = !1
                    }
                    request() {
                        const t = this.src;
                        if (!t)
                            throw new Error("missing src");
                        return new Request(t,{
                            method: "GET",
                            credentials: "same-origin",
                            headers: {
                                Accept: this.accept || "text/html"
                            }
                        })
                    }
                    load() {
                        return Promise.resolve().then((()=>(on("loadstart", this),
                            this.fetch(this.request())))).then((t=>{
                                if (200 !== t.status)
                                    throw new Error("Failed to load resource: the server responded with a status of " + t.status);
                                const e = t.headers.get("Content-Type");
                                if (!(n = this.accept,
                                n && n.split(",").find((t=>t.match(/^\s*\*\/\*/))) || e && e.includes(this.accept ? this.accept : "text/html")))
                                    throw new Error(`Failed to load resource: expected ${this.accept || "text/html"} but was ${e}`);
                                var n;
                                return t
                            }
                        )).then((t=>t.text())).then((t=>(on("load", this),
                            on("loadend", this),
                            t)), (t=>{
                                throw on("error", this),
                                    on("loadend", this),
                                    t
                            }
                        ))
                    }
                    fetch(t) {
                        return fetch(t)
                    }
                }
                t("I", IncludeFragmentElement),
                window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement,
                    window.customElements.define("include-fragment", IncludeFragmentElement));
                const cn = document.createElement("template");
                cn.innerHTML = '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';
                const ln = new WeakMap
                    , un = new WeakMap
                    , dn = new WeakMap;
                function hn(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof ImageCropElement))
                        return;
                    const {box: n, image: i} = dn.get(e) || {};
                    if (!n || !i)
                        return;
                    let r = 0
                        , o = 0;
                    if (t instanceof KeyboardEvent)
                        "ArrowUp" === t.key ? o = -1 : "ArrowDown" === t.key ? o = 1 : "ArrowLeft" === t.key ? r = -1 : "ArrowRight" === t.key && (r = 1);
                    else if (un.has(e) && t instanceof MouseEvent) {
                        const n = un.get(e);
                        r = t.pageX - n.dragStartX,
                            o = t.pageY - n.dragStartY
                    } else if (un.has(e) && t instanceof TouchEvent) {
                        const {pageX: n, pageY: i} = t.changedTouches[0]
                            , {dragStartX: s, dragStartY: a} = un.get(e);
                        r = n - s,
                            o = i - a
                    }
                    if (0 !== r || 0 !== o) {
                        const t = Math.min(Math.max(0, n.offsetLeft + r), i.width - n.offsetWidth)
                            , s = Math.min(Math.max(0, n.offsetTop + o), i.height - n.offsetHeight);
                        n.style.left = t + "px",
                            n.style.top = s + "px",
                            En(e, {
                                x: t,
                                y: s,
                                width: n.offsetWidth,
                                height: n.offsetHeight
                            })
                    }
                    if (t instanceof MouseEvent)
                        un.set(e, {
                            dragStartX: t.pageX,
                            dragStartY: t.pageY
                        });
                    else if (t instanceof TouchEvent) {
                        const {pageX: n, pageY: i} = t.changedTouches[0];
                        un.set(e, {
                            dragStartX: n,
                            dragStartY: i
                        })
                    }
                }
                function mn(t) {
                    const e = t.target;
                    if (!(e instanceof HTMLElement))
                        return;
                    const n = e.closest("image-crop");
                    if (!(n instanceof ImageCropElement))
                        return;
                    const {box: i} = dn.get(n) || {};
                    if (!i)
                        return;
                    const r = n.getBoundingClientRect();
                    let o, s, a;
                    if (t instanceof KeyboardEvent) {
                        if ("Escape" === t.key)
                            return vn(n);
                        if ("-" === t.key && (a = -10),
                        "=" === t.key && (a = 10),
                            !a)
                            return;
                        o = i.offsetWidth + a,
                            s = i.offsetHeight + a,
                            ln.set(n, {
                                startX: i.offsetLeft,
                                startY: i.offsetTop
                            })
                    } else if (t instanceof MouseEvent) {
                        const e = ln.get(n);
                        if (!e)
                            return;
                        o = t.pageX - e.startX - r.left - window.pageXOffset,
                            s = t.pageY - e.startY - r.top - window.pageYOffset
                    } else if (t instanceof TouchEvent) {
                        const e = ln.get(n);
                        if (!e)
                            return;
                        o = t.changedTouches[0].pageX - e.startX - r.left - window.pageXOffset,
                            s = t.changedTouches[0].pageY - e.startY - r.top - window.pageYOffset
                    }
                    o && s && pn(n, o, s, !(t instanceof KeyboardEvent))
                }
                function fn(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof HTMLElement))
                        return;
                    const n = e.closest("image-crop");
                    if (!(n instanceof ImageCropElement))
                        return;
                    const {box: i} = dn.get(n) || {};
                    if (!i)
                        return;
                    const r = t.target;
                    if (r instanceof HTMLElement)
                        if (r.hasAttribute("data-direction")) {
                            const e = r.getAttribute("data-direction") || "";
                            n.addEventListener("mousemove", mn),
                                n.addEventListener("touchmove", mn),
                            ["nw", "se"].indexOf(e) >= 0 && n.classList.add("nwse"),
                            ["ne", "sw"].indexOf(e) >= 0 && n.classList.add("nesw"),
                                ln.set(n, {
                                    startX: i.offsetLeft + (["se", "ne"].indexOf(e) >= 0 ? 0 : i.offsetWidth),
                                    startY: i.offsetTop + (["se", "sw"].indexOf(e) >= 0 ? 0 : i.offsetHeight)
                                }),
                                mn(t)
                        } else
                            n.addEventListener("mousemove", hn),
                                n.addEventListener("touchmove", hn)
                }
                function pn(t, e, n, i=!0) {
                    let r = Math.max(Math.abs(e), Math.abs(n), 10);
                    const o = ln.get(t);
                    if (!o)
                        return;
                    const {box: s, image: a} = dn.get(t) || {};
                    if (!s || !a)
                        return;
                    r = Math.min(r, n > 0 ? a.height - o.startY : o.startY, e > 0 ? a.width - o.startX : o.startX);
                    const c = i ? Math.round(Math.max(0, e > 0 ? o.startX : o.startX - r)) : s.offsetLeft
                        , l = i ? Math.round(Math.max(0, n > 0 ? o.startY : o.startY - r)) : s.offsetTop;
                    s.style.left = c + "px",
                        s.style.top = l + "px",
                        s.style.width = r + "px",
                        s.style.height = r + "px",
                        En(t, {
                            x: c,
                            y: l,
                            width: r,
                            height: r
                        })
                }
                function gn(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof HTMLElement))
                        return;
                    const n = e.closest("image-crop");
                    n instanceof ImageCropElement && (n.loaded = !0,
                        vn(n))
                }
                function vn(t) {
                    const {image: e} = dn.get(t) || {};
                    if (!e)
                        return;
                    const n = Math.round(e.clientWidth > e.clientHeight ? e.clientHeight : e.clientWidth);
                    ln.set(t, {
                        startX: (e.clientWidth - n) / 2,
                        startY: (e.clientHeight - n) / 2
                    }),
                        pn(t, n, n)
                }
                function bn(t) {
                    const e = t.currentTarget;
                    e instanceof ImageCropElement && (un.delete(e),
                        e.classList.remove("nwse", "nesw"),
                        e.removeEventListener("mousemove", mn),
                        e.removeEventListener("mousemove", hn),
                        e.removeEventListener("touchmove", mn),
                        e.removeEventListener("touchmove", hn))
                }
                function En(t, e) {
                    const {image: n} = dn.get(t) || {};
                    if (!n)
                        return;
                    const i = n.naturalWidth / n.width;
                    for (const r in e) {
                        const n = Math.round(e[r] * i);
                        e[r] = n;
                        const o = t.querySelector(`[data-image-crop-input='${r}']`);
                        o instanceof HTMLInputElement && (o.value = n.toString())
                    }
                    t.dispatchEvent(new CustomEvent("image-crop-change",{
                        bubbles: !0,
                        detail: e
                    }))
                }
                class ImageCropElement extends HTMLElement {
                    connectedCallback() {
                        if (dn.has(this))
                            return;
                        this.appendChild(document.importNode(cn.content, !0));
                        const t = this.querySelector("[data-crop-box]");
                        if (!(t instanceof HTMLElement))
                            return;
                        const e = this.querySelector("img");
                        e instanceof HTMLImageElement && (dn.set(this, {
                            box: t,
                            image: e
                        }),
                            e.addEventListener("load", gn),
                            this.addEventListener("mouseleave", bn),
                            this.addEventListener("touchend", bn),
                            this.addEventListener("mouseup", bn),
                            t.addEventListener("mousedown", fn),
                            t.addEventListener("touchstart", fn),
                            this.addEventListener("keydown", hn),
                            this.addEventListener("keydown", mn),
                        this.src && (e.src = this.src))
                    }
                    static get observedAttributes() {
                        return ["src"]
                    }
                    get src() {
                        return this.getAttribute("src")
                    }
                    set src(t) {
                        t ? this.setAttribute("src", t) : this.removeAttribute("src")
                    }
                    get loaded() {
                        return this.hasAttribute("loaded")
                    }
                    set loaded(t) {
                        t ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                    }
                    attributeChangedCallback(t, e, n) {
                        const {image: i} = dn.get(this) || {};
                        "src" === t && (this.loaded = !1,
                        i && (i.src = n))
                    }
                }
                window.customElements.get("image-crop") || (window.ImageCropElement = ImageCropElement,
                    window.customElements.define("image-crop", ImageCropElement));
                const wn = ["[data-md-button]", "md-header", "md-bold", "md-italic", "md-quote", "md-code", "md-link", "md-image", "md-unordered-list", "md-ordered-list", "md-task-list", "md-mention", "md-ref"];
                function yn(t) {
                    const e = [];
                    for (const n of t.querySelectorAll(wn.join(", ")))
                        n.hidden || n.offsetWidth <= 0 && n.offsetHeight <= 0 || n.closest("markdown-toolbar") === t && e.push(n);
                    return e
                }
                const xn = new WeakMap;
                class MarkdownButtonElement extends HTMLElement {
                    constructor() {
                        super();
                        const t = ()=>{
                                const t = xn.get(this);
                                t && Pn(this, t)
                            }
                        ;
                        var e;
                        this.addEventListener("keydown", (e = t,
                                function(t) {
                                    " " !== t.key && "Enter" !== t.key || (t.preventDefault(),
                                        e(t))
                                }
                        )),
                            this.addEventListener("click", t)
                    }
                    connectedCallback() {
                        this.hasAttribute("role") || this.setAttribute("role", "button")
                    }
                    click() {
                        const t = xn.get(this);
                        t && Pn(this, t)
                    }
                }
                class MarkdownHeaderButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super();
                        const t = parseInt(this.getAttribute("level") || "3", 10);
                        if (t < 1 || t > 6)
                            return;
                        const e = "#".repeat(t) + " ";
                        xn.set(this, {
                            prefix: e
                        })
                    }
                }
                window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement,
                    window.customElements.define("md-header", MarkdownHeaderButtonElement));
                class MarkdownBoldButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "**",
                                suffix: "**",
                                trimFirst: !0
                            })
                    }
                    connectedCallback() {
                        super.connectedCallback(),
                            this.setAttribute("hotkey", "b")
                    }
                }
                window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement,
                    window.customElements.define("md-bold", MarkdownBoldButtonElement));
                class MarkdownItalicButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "_",
                                suffix: "_",
                                trimFirst: !0
                            })
                    }
                    connectedCallback() {
                        super.connectedCallback(),
                            this.setAttribute("hotkey", "i")
                    }
                }
                window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement,
                    window.customElements.define("md-italic", MarkdownItalicButtonElement));
                class MarkdownQuoteButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "> ",
                                multiline: !0,
                                surroundWithNewlines: !0
                            })
                    }
                }
                window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement,
                    window.customElements.define("md-quote", MarkdownQuoteButtonElement));
                class MarkdownCodeButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "`",
                                suffix: "`",
                                blockPrefix: "```",
                                blockSuffix: "```"
                            })
                    }
                }
                window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement,
                    window.customElements.define("md-code", MarkdownCodeButtonElement));
                class MarkdownLinkButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "[",
                                suffix: "](url)",
                                replaceNext: "url",
                                scanFor: "https?://"
                            })
                    }
                    connectedCallback() {
                        super.connectedCallback(),
                            this.setAttribute("hotkey", "k")
                    }
                }
                window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement,
                    window.customElements.define("md-link", MarkdownLinkButtonElement));
                class MarkdownImageButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "![",
                                suffix: "](url)",
                                replaceNext: "url",
                                scanFor: "https?://"
                            })
                    }
                }
                window.customElements.get("md-image") || (window.MarkdownImageButtonElement = MarkdownImageButtonElement,
                    window.customElements.define("md-image", MarkdownImageButtonElement));
                class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "- ",
                                multiline: !0,
                                surroundWithNewlines: !0
                            })
                    }
                }
                window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement,
                    window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement));
                class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "1. ",
                                multiline: !0,
                                orderedList: !0
                            })
                    }
                }
                window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement,
                    window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement));
                class MarkdownTaskListButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "- [ ] ",
                                multiline: !0,
                                surroundWithNewlines: !0
                            })
                    }
                    connectedCallback() {
                        super.connectedCallback(),
                            this.setAttribute("hotkey", "L")
                    }
                }
                window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement,
                    window.customElements.define("md-task-list", MarkdownTaskListButtonElement));
                class MarkdownMentionButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "@",
                                prefixSpace: !0
                            })
                    }
                }
                window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement,
                    window.customElements.define("md-mention", MarkdownMentionButtonElement));
                class MarkdownRefButtonElement extends MarkdownButtonElement {
                    constructor() {
                        super(),
                            xn.set(this, {
                                prefix: "#",
                                prefixSpace: !0
                            })
                    }
                }
                window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = MarkdownRefButtonElement,
                    window.customElements.define("md-ref", MarkdownRefButtonElement));
                const kn = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";
                class MarkdownToolbarElement extends HTMLElement {
                    constructor() {
                        super()
                    }
                    connectedCallback() {
                        this.hasAttribute("role") || this.setAttribute("role", "toolbar"),
                            this.addEventListener("keydown", Tn);
                        const t = Mn.bind(null, this);
                        this.field && (this.field.addEventListener("keydown", t),
                            Ln.set(this, t)),
                            this.setAttribute("tabindex", "0"),
                            this.addEventListener("focus", An, {
                                once: !0
                            })
                    }
                    disconnectedCallback() {
                        const t = Ln.get(this);
                        t && this.field && (this.field.removeEventListener("keydown", t),
                            Ln.delete(this)),
                            this.removeEventListener("keydown", Tn)
                    }
                    get field() {
                        const t = this.getAttribute("for");
                        if (!t)
                            return null;
                        const e = "getRootNode"in this ? this.getRootNode() : document;
                        let n;
                        return (e instanceof Document || e instanceof ShadowRoot) && (n = e.getElementById(t)),
                            n instanceof HTMLTextAreaElement ? n : null
                    }
                }
                function An({target: t}) {
                    if (!(t instanceof Element))
                        return;
                    t.removeAttribute("tabindex");
                    let e = "0";
                    for (const n of yn(t))
                        n.setAttribute("tabindex", e),
                        "0" === e && (n.focus(),
                            e = "-1")
                }
                function Tn(t) {
                    const e = t.key;
                    if ("ArrowRight" !== e && "ArrowLeft" !== e && "Home" !== e && "End" !== e)
                        return;
                    const n = t.currentTarget;
                    if (!(n instanceof HTMLElement))
                        return;
                    const i = yn(n)
                        , r = i.indexOf(t.target)
                        , o = i.length;
                    if (-1 === r)
                        return;
                    let s = 0;
                    "ArrowLeft" === e && (s = r - 1),
                    "ArrowRight" === e && (s = r + 1),
                    "End" === e && (s = o - 1),
                    s < 0 && (s = o - 1),
                    s > o - 1 && (s = 0);
                    for (let a = 0; a < o; a += 1)
                        i[a].setAttribute("tabindex", a === s ? "0" : "-1");
                    t.preventDefault(),
                        i[s].focus()
                }
                const Ln = new WeakMap;
                function Mn(t, e) {
                    if (e.metaKey && "Meta" === kn || e.ctrlKey && "Control" === kn) {
                        const n = function(t, e) {
                            for (const n of t.querySelectorAll("[hotkey]"))
                                if (n.getAttribute("hotkey") === e)
                                    return n;
                            return null
                        }(t, e.key);
                        n && (n.click(),
                            e.preventDefault())
                    }
                }
                function Sn(t) {
                    return t.trim().split("\n").length > 1
                }
                function Cn(t, e) {
                    return Array(e + 1).join(t)
                }
                function Nn(t, e, n) {
                    let i = e;
                    const r = n ? /\n/ : /\s/;
                    for (; t[i] && !t[i].match(r); )
                        i++;
                    return i
                }
                window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = MarkdownToolbarElement,
                    window.customElements.define("markdown-toolbar", MarkdownToolbarElement));
                let In = null;
                function Dn(t, e) {
                    const n = t.value.slice(t.selectionStart, t.selectionEnd);
                    let i;
                    i = e.orderedList ? function(t) {
                        const e = /^\d+\.\s+/
                            , n = t.selectionStart === t.selectionEnd;
                        let i, r, o, s, a = t.value.slice(t.selectionStart, t.selectionEnd), c = a, l = a.split("\n");
                        if (n) {
                            const e = t.value.slice(0, t.selectionStart).split(/\n/);
                            o = t.selectionStart - e[e.length - 1].length,
                                s = Nn(t.value, t.selectionStart, !0),
                                c = t.value.slice(o, s)
                        }
                        const u = c.split("\n");
                        if (u.every((t=>e.test(t)))) {
                            if (l = u.map((t=>t.replace(e, ""))),
                                a = l.join("\n"),
                            n && o && s) {
                                const e = u[0].length - l[0].length;
                                r = i = t.selectionStart - e,
                                    t.selectionStart = o,
                                    t.selectionEnd = s
                            }
                        } else {
                            l = function(t) {
                                let e, n, i;
                                const r = [];
                                for (i = e = 0,
                                         n = t.length; e < n; i = ++e) {
                                    const e = t[i];
                                    r.push(`${i + 1}. ${e}`)
                                }
                                return r
                            }(l),
                                a = l.join("\n");
                            const {newlinesToAppend: e, newlinesToPrepend: o} = Hn(t);
                            r = t.selectionStart + e.length,
                                i = r + a.length,
                            n && (r = i),
                                a = e + a + o
                        }
                        return {
                            text: a,
                            selectionStart: r,
                            selectionEnd: i
                        }
                    }(t) : e.multiline && Sn(n) ? function(t, e) {
                        const {prefix: n, suffix: i, surroundWithNewlines: r} = e;
                        let o = t.value.slice(t.selectionStart, t.selectionEnd)
                            , s = t.selectionStart
                            , a = t.selectionEnd;
                        const c = o.split("\n");
                        if (c.every((t=>t.startsWith(n) && t.endsWith(i))))
                            o = c.map((t=>t.slice(n.length, t.length - i.length))).join("\n"),
                                a = s + o.length;
                        else if (o = c.map((t=>n + t + i)).join("\n"),
                            r) {
                            const {newlinesToAppend: e, newlinesToPrepend: n} = Hn(t);
                            s += e.length,
                                a = s + o.length,
                                o = e + o + n
                        }
                        return {
                            text: o,
                            selectionStart: s,
                            selectionEnd: a
                        }
                    }(t, e) : function(t, e) {
                        let n, i;
                        const {prefix: r, suffix: o, blockPrefix: s, blockSuffix: a, replaceNext: c, prefixSpace: l, scanFor: u, surroundWithNewlines: d} = e
                            , h = t.selectionStart
                            , m = t.selectionEnd;
                        let f = t.value.slice(t.selectionStart, t.selectionEnd)
                            , p = Sn(f) && s.length > 0 ? s + "\n" : r
                            , g = Sn(f) && a.length > 0 ? "\n" + a : o;
                        if (l) {
                            const e = t.value[t.selectionStart - 1];
                            0 === t.selectionStart || null == e || e.match(/\s/) || (p = " " + p)
                        }
                        f = function(t, e, n, i=!1) {
                            if (t.selectionStart === t.selectionEnd)
                                t.selectionStart = function(t, e) {
                                    let n = e;
                                    for (; t[n] && null != t[n - 1] && !t[n - 1].match(/\s/); )
                                        n--;
                                    return n
                                }(t.value, t.selectionStart),
                                    t.selectionEnd = Nn(t.value, t.selectionEnd, i);
                            else {
                                const i = t.selectionStart - e.length
                                    , r = t.selectionEnd + n.length
                                    , o = t.value.slice(i, t.selectionStart) === e
                                    , s = t.value.slice(t.selectionEnd, r) === n;
                                o && s && (t.selectionStart = i,
                                    t.selectionEnd = r)
                            }
                            return t.value.slice(t.selectionStart, t.selectionEnd)
                        }(t, p, g, e.multiline);
                        let v = t.selectionStart
                            , b = t.selectionEnd;
                        const E = c.length > 0 && g.indexOf(c) > -1 && f.length > 0;
                        if (d) {
                            const e = Hn(t);
                            n = e.newlinesToAppend,
                                i = e.newlinesToPrepend,
                                p = n + r,
                                g += i
                        }
                        if (f.startsWith(p) && f.endsWith(g)) {
                            const t = f.slice(p.length, f.length - g.length);
                            if (h === m) {
                                let e = h - p.length;
                                e = Math.max(e, v),
                                    e = Math.min(e, v + t.length),
                                    v = b = e
                            } else
                                b = v + t.length;
                            return {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                        if (E) {
                            if (u.length > 0 && f.match(u)) {
                                g = g.replace(c, f);
                                const t = p + g;
                                return v = b = v + p.length,
                                    {
                                        text: t,
                                        selectionStart: v,
                                        selectionEnd: b
                                    }
                            }
                            {
                                const t = p + f + g;
                                return v = v + p.length + f.length + g.indexOf(c),
                                    b = v + c.length,
                                    {
                                        text: t,
                                        selectionStart: v,
                                        selectionEnd: b
                                    }
                            }
                        }
                        {
                            let t = p + f + g;
                            v = h + p.length,
                                b = m + p.length;
                            const n = f.match(/^\s*|\s*$/g);
                            if (e.trimFirst && n) {
                                const e = n[0] || ""
                                    , i = n[1] || "";
                                t = e + p + f.trim() + g + i,
                                    v += e.length,
                                    b -= i.length
                            }
                            return {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                    }(t, e),
                        function(t, {text: e, selectionStart: n, selectionEnd: i}) {
                            const r = t.selectionStart
                                , o = t.value.slice(0, r)
                                , s = t.value.slice(t.selectionEnd);
                            if (null === In || !0 === In) {
                                t.contentEditable = "true";
                                try {
                                    In = document.execCommand("insertText", !1, e)
                                } catch (a) {
                                    In = !1
                                }
                                t.contentEditable = "false"
                            }
                            if (In && !t.value.slice(0, t.selectionStart).endsWith(e) && (In = !1),
                                !In) {
                                try {
                                    document.execCommand("ms-beginUndoUnit")
                                } catch (uo) {}
                                t.value = o + e + s;
                                try {
                                    document.execCommand("ms-endUndoUnit")
                                } catch (uo) {}
                                t.dispatchEvent(new CustomEvent("input",{
                                    bubbles: !0,
                                    cancelable: !0
                                }))
                            }
                            null != n && null != i ? t.setSelectionRange(n, i) : t.setSelectionRange(r, t.selectionEnd)
                        }(t, i)
                }
                function Hn(t) {
                    const e = t.value.slice(0, t.selectionStart)
                        , n = t.value.slice(t.selectionEnd)
                        , i = e.match(/\n*$/)
                        , r = n.match(/^\n*/)
                        , o = i ? i[0].length : 0
                        , s = r ? r[0].length : 0;
                    let a, c;
                    return e.match(/\S/) && o < 2 && (a = Cn("\n", 2 - o)),
                    n.match(/\S/) && s < 2 && (c = Cn("\n", 2 - s)),
                    null == a && (a = ""),
                    null == c && (c = ""),
                        {
                            newlinesToAppend: a,
                            newlinesToPrepend: c
                        }
                }
                function Pn(t, e) {
                    const n = t.closest("markdown-toolbar");
                    if (!(n instanceof MarkdownToolbarElement))
                        return;
                    const i = Object.assign(Object.assign({}, {
                        prefix: "",
                        suffix: "",
                        blockPrefix: "",
                        blockSuffix: "",
                        multiline: !1,
                        replaceNext: "",
                        prefixSpace: !1,
                        scanFor: "",
                        surroundWithNewlines: !1,
                        orderedList: !1,
                        trimFirst: !1
                    }), e)
                        , r = n.field;
                    r && (r.focus(),
                        Dn(r, i))
                }
                const Rn = new WeakMap;
                class RemoteInputElement extends HTMLElement {
                    constructor() {
                        super();
                        const t = _n.bind(null, this, !0)
                            , e = {
                            currentQuery: null,
                            oninput: qn(t),
                            fetch: t,
                            controller: null
                        };
                        Rn.set(this, e)
                    }
                    static get observedAttributes() {
                        return ["src"]
                    }
                    attributeChangedCallback(t, e) {
                        e && "src" === t && _n(this, !1)
                    }
                    connectedCallback() {
                        const t = this.input;
                        if (!t)
                            return;
                        t.setAttribute("autocomplete", "off"),
                            t.setAttribute("spellcheck", "false");
                        const e = Rn.get(this);
                        e && (t.addEventListener("focus", e.fetch),
                            t.addEventListener("change", e.fetch),
                            t.addEventListener("input", e.oninput))
                    }
                    disconnectedCallback() {
                        const t = this.input;
                        if (!t)
                            return;
                        const e = Rn.get(this);
                        e && (t.removeEventListener("focus", e.fetch),
                            t.removeEventListener("change", e.fetch),
                            t.removeEventListener("input", e.oninput))
                    }
                    get input() {
                        const t = this.querySelector("input, textarea");
                        return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                    }
                    get src() {
                        return this.getAttribute("src") || ""
                    }
                    set src(t) {
                        this.setAttribute("src", t)
                    }
                }
                async function _n(t, e) {
                    const n = t.input;
                    if (!n)
                        return;
                    const i = Rn.get(t);
                    if (!i)
                        return;
                    const r = n.value;
                    if (e && i.currentQuery === r)
                        return;
                    i.currentQuery = r;
                    const o = t.src;
                    if (!o)
                        return;
                    const s = document.getElementById(t.getAttribute("aria-owns") || "");
                    if (!s)
                        return;
                    const a = new URL(o,window.location.href)
                        , c = new URLSearchParams(a.search);
                    let l;
                    c.append(t.getAttribute("param") || "q", r),
                        a.search = c.toString(),
                        i.controller ? i.controller.abort() : (t.dispatchEvent(new CustomEvent("loadstart")),
                            t.setAttribute("loading", "")),
                        i.controller = "AbortController"in window ? new AbortController : {
                            signal: null,
                            abort() {}
                        };
                    let u = "";
                    try {
                        l = await async function(t, e, n) {
                            try {
                                const i = await fetch(e, n);
                                return t.dispatchEvent(new CustomEvent("load")),
                                    t.dispatchEvent(new CustomEvent("loadend")),
                                    i
                            } catch (i) {
                                throw "AbortError" !== i.name && (t.dispatchEvent(new CustomEvent("error")),
                                    t.dispatchEvent(new CustomEvent("loadend"))),
                                    i
                            }
                        }(t, a.toString(), {
                            signal: i.controller.signal,
                            credentials: "same-origin",
                            headers: {
                                accept: "text/fragment+html"
                            }
                        }),
                            u = await l.text(),
                            t.removeAttribute("loading"),
                            i.controller = null
                    } catch (d) {
                        return void ("AbortError" !== d.name && (t.removeAttribute("loading"),
                            i.controller = null))
                    }
                    l && l.ok ? (s.innerHTML = u,
                        t.dispatchEvent(new CustomEvent("remote-input-success",{
                            bubbles: !0
                        }))) : t.dispatchEvent(new CustomEvent("remote-input-error",{
                        bubbles: !0
                    }))
                }
                function qn(t) {
                    let e;
                    return function() {
                        clearTimeout(e),
                            e = setTimeout((()=>{
                                    clearTimeout(e),
                                        t()
                                }
                            ), 300)
                    }
                }
                t("m", RemoteInputElement),
                window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement,
                    window.customElements.define("remote-input", RemoteInputElement));
                class TabContainerElement extends HTMLElement {
                    constructor() {
                        super(),
                            this.addEventListener("keydown", (t=>{
                                    const e = t.target;
                                    if (!(e instanceof HTMLElement))
                                        return;
                                    if ("tab" !== e.getAttribute("role") && !e.closest('[role="tablist"]'))
                                        return;
                                    const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'))
                                        , i = n.indexOf(n.find((t=>t.matches('[aria-selected="true"]'))));
                                    if ("ArrowRight" === t.code) {
                                        let t = i + 1;
                                        t >= n.length && (t = 0),
                                            On(this, t)
                                    } else if ("ArrowLeft" === t.code) {
                                        let t = i - 1;
                                        t < 0 && (t = n.length - 1),
                                            On(this, t)
                                    } else
                                        "Home" === t.code ? (On(this, 0),
                                            t.preventDefault()) : "End" === t.code && (On(this, n.length - 1),
                                            t.preventDefault())
                                }
                            )),
                            this.addEventListener("click", (t=>{
                                    const e = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));
                                    if (!(t.target instanceof Element))
                                        return;
                                    const n = t.target.closest('[role="tab"]');
                                    if (!n || !n.closest('[role="tablist"]'))
                                        return;
                                    On(this, e.indexOf(n))
                                }
                            ))
                    }
                    connectedCallback() {
                        for (const t of this.querySelectorAll('[role="tablist"] [role="tab"]'))
                            t.hasAttribute("aria-selected") || t.setAttribute("aria-selected", "false"),
                            t.hasAttribute("tabindex") || ("true" === t.getAttribute("aria-selected") ? t.setAttribute("tabindex", "0") : t.setAttribute("tabindex", "-1"))
                    }
                }
                function On(t, e) {
                    const n = t.querySelectorAll('[role="tablist"] [role="tab"]')
                        , i = t.querySelectorAll('[role="tabpanel"]')
                        , r = n[e]
                        , o = i[e];
                    if (!!t.dispatchEvent(new CustomEvent("tab-container-change",{
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            relatedTarget: o
                        }
                    }))) {
                        for (const t of n)
                            t.setAttribute("aria-selected", "false"),
                                t.setAttribute("tabindex", "-1");
                        for (const t of i)
                            t.hidden = !0,
                            t.hasAttribute("tabindex") || t.hasAttribute("data-tab-container-no-tabstop") || t.setAttribute("tabindex", "0");
                        r.setAttribute("aria-selected", "true"),
                            r.setAttribute("tabindex", "0"),
                            r.focus(),
                            o.hidden = !1,
                            t.dispatchEvent(new CustomEvent("tab-container-changed",{
                                bubbles: !0,
                                detail: {
                                    relatedTarget: o
                                }
                            }))
                    }
                }
                t("l", TabContainerElement),
                window.customElements.get("tab-container") || (window.TabContainerElement = TabContainerElement,
                    window.customElements.define("tab-container", TabContainerElement));
                const Fn = new WeakMap;
                let Bn = null;
                function Wn(t, e) {
                    return t.closest("task-lists") === e.closest("task-lists")
                }
                function $n(t) {
                    if (t.currentTarget !== t.target)
                        return;
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    const n = e.closest(".contains-task-list");
                    if (!n)
                        return;
                    if (e.classList.add("is-ghost"),
                    t.dataTransfer && t.dataTransfer.setData("text/plain", (e.textContent || "").trim()),
                        !e.parentElement)
                        return;
                    const i = Array.from(e.parentElement.children)
                        , r = i.indexOf(e)
                        , o = Fn.get(e);
                    o && o.sortStarted(n),
                        Bn = {
                            didDrop: !1,
                            dragging: e,
                            dropzone: e,
                            sourceList: n,
                            sourceSibling: i[r + 1] || null,
                            sourceIndex: r
                        }
                }
                function jn(t) {
                    if (!Bn)
                        return;
                    const e = t.currentTarget;
                    e instanceof Element && (Wn(Bn.dragging, e) ? (t.preventDefault(),
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
                    Bn.dropzone !== e && (Bn.dragging.classList.add("is-dragging"),
                        Bn.dropzone = e,
                        !function(t, e) {
                            if (t.parentNode === e.parentNode) {
                                let n = t;
                                for (; n; ) {
                                    if (n === e)
                                        return !0;
                                    n = n.previousElementSibling
                                }
                            }
                            return !1
                        }(Bn.dragging, e) ? e.after(Bn.dragging) : e.before(Bn.dragging))) : t.stopPropagation())
                }
                function Vn(t) {
                    if (!Bn)
                        return;
                    t.preventDefault(),
                        t.stopPropagation();
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    if (Bn.didDrop = !0,
                        !Bn.dragging.parentElement)
                        return;
                    let n = Array.from(Bn.dragging.parentElement.children).indexOf(Bn.dragging);
                    const i = e.closest(".contains-task-list");
                    if (!i)
                        return;
                    if (Bn.sourceIndex === n && Bn.sourceList === i)
                        return;
                    Bn.sourceList === i && Bn.sourceIndex < n && n++;
                    const r = {
                        list: Bn.sourceList,
                        index: Bn.sourceIndex
                    }
                        , o = {
                        list: i,
                        index: n
                    }
                        , s = Fn.get(Bn.dragging);
                    s && s.sortFinished({
                        src: r,
                        dst: o
                    })
                }
                function Un() {
                    Bn && (Bn.dragging.classList.remove("is-dragging"),
                        Bn.dragging.classList.remove("is-ghost"),
                    Bn.didDrop || Bn.sourceList.insertBefore(Bn.dragging, Bn.sourceSibling),
                        Bn = null)
                }
                function Kn(t) {
                    if (!Bn)
                        return;
                    const e = t.currentTarget;
                    e instanceof Element && (Wn(Bn.dragging, e) ? (t.preventDefault(),
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation())
                }
                const Yn = new WeakMap;
                class TaskListsElement extends HTMLElement {
                    constructor() {
                        super(),
                            this.addEventListener("change", (t=>{
                                    const e = t.target;
                                    e instanceof HTMLInputElement && e.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check",{
                                        bubbles: !0,
                                        detail: {
                                            position: Jn(e),
                                            checked: e.checked
                                        }
                                    }))
                                }
                            )),
                            Yn.set(this, new MutationObserver(ii.bind(null, this)))
                    }
                    connectedCallback() {
                        const t = Yn.get(this);
                        t && t.observe(this, {
                            childList: !0,
                            subtree: !0
                        }),
                            ii(this)
                    }
                    disconnectedCallback() {
                        const t = Yn.get(this);
                        t && t.disconnect()
                    }
                    get disabled() {
                        return this.hasAttribute("disabled")
                    }
                    set disabled(t) {
                        t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                    }
                    get sortable() {
                        return this.hasAttribute("sortable")
                    }
                    set sortable(t) {
                        t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                    }
                    static get observedAttributes() {
                        return ["disabled"]
                    }
                    attributeChangedCallback(t, e, n) {
                        if (e !== n)
                            switch (t) {
                                case "disabled":
                                    ri(this)
                            }
                    }
                }
                const Xn = document.createElement("template");
                Xn.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';
                const zn = new WeakMap;
                function Gn(t) {
                    if (zn.get(t))
                        return;
                    zn.set(t, !0);
                    const e = t.closest("task-lists");
                    if (!(e instanceof TaskListsElement))
                        return;
                    if (e.querySelectorAll(".task-list-item").length <= 1)
                        return;
                    const n = Xn.content.cloneNode(!0)
                        , i = n.querySelector(".handle");
                    if (t.prepend(n),
                        !i)
                        throw new Error("handle not found");
                    i.addEventListener("mouseenter", li),
                        i.addEventListener("mouseleave", ui),
                        function(t, e, n) {
                            Fn.set(t, {
                                sortStarted: e,
                                sortFinished: n
                            }),
                                t.addEventListener("dragstart", $n),
                                t.addEventListener("dragenter", jn),
                                t.addEventListener("dragend", Un),
                                t.addEventListener("drop", Vn),
                                t.addEventListener("dragover", Kn)
                        }(t, ai, ci),
                        t.addEventListener("mouseenter", Qn),
                        t.addEventListener("mouseleave", Zn)
                }
                function Qn(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    const n = e.closest("task-lists");
                    n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add("hovered")
                }
                function Zn(t) {
                    const e = t.currentTarget;
                    e instanceof Element && e.classList.remove("hovered")
                }
                function Jn(t) {
                    const e = ti(t);
                    if (!e)
                        throw new Error(".contains-task-list not found");
                    const n = t.closest(".task-list-item")
                        , i = n ? Array.from(e.children).indexOf(n) : -1;
                    return [oi(e), i]
                }
                function ti(t) {
                    const e = t.parentElement;
                    return e ? e.closest(".contains-task-list") : null
                }
                function ei(t) {
                    return ti(t) === ni(t)
                }
                function ni(t) {
                    const e = ti(t);
                    return e ? ni(e) || e : null
                }
                function ii(t) {
                    const e = t.querySelectorAll(".contains-task-list > .task-list-item");
                    for (const n of e)
                        ei(n) && Gn(n);
                    ri(t)
                }
                function ri(t) {
                    for (const e of t.querySelectorAll(".task-list-item"))
                        e.classList.toggle("enabled", !t.disabled);
                    for (const e of t.querySelectorAll(".task-list-item-checkbox"))
                        e instanceof HTMLInputElement && (e.disabled = t.disabled)
                }
                function oi(t) {
                    const e = t.closest("task-lists");
                    if (!e)
                        throw new Error("parent not found");
                    return Array.from(e.querySelectorAll("ol, ul")).indexOf(t)
                }
                const si = new WeakMap;
                function ai(t) {
                    const e = t.closest("task-lists");
                    if (!e)
                        throw new Error("parent not found");
                    si.set(e, Array.from(e.querySelectorAll("ol, ul")))
                }
                function ci({src: t, dst: e}) {
                    const n = t.list.closest("task-lists");
                    if (!n)
                        return;
                    const i = si.get(n);
                    i && (si.delete(n),
                        n.dispatchEvent(new CustomEvent("task-lists-move",{
                            bubbles: !0,
                            detail: {
                                src: [i.indexOf(t.list), t.index],
                                dst: [i.indexOf(e.list), e.index]
                            }
                        })))
                }
                function li(t) {
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    const n = e.closest(".task-list-item");
                    if (!n)
                        return;
                    const i = n.closest("task-lists");
                    i instanceof TaskListsElement && i.sortable && !i.disabled && n.setAttribute("draggable", "true")
                }
                function ui(t) {
                    if (Bn)
                        return;
                    const e = t.currentTarget;
                    if (!(e instanceof Element))
                        return;
                    const n = e.closest(".task-list-item");
                    n && n.setAttribute("draggable", "false")
                }
                window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement,
                    window.customElements.define("task-lists", TaskListsElement)),
                    t("T", TaskListsElement);
                const di = /\s|\(|\[/;
                function hi(t, e, n, {multiWord: i, lookBackIndex: r, lastMatchPosition: o}={
                    multiWord: !1,
                    lookBackIndex: 0,
                    lastMatchPosition: null
                }) {
                    let s = t.lastIndexOf(e, n - 1);
                    if (-1 === s)
                        return;
                    if (s < r)
                        return;
                    if (i) {
                        if (null != o) {
                            if (o === s)
                                return;
                            s = o - 1
                        }
                        if (" " === t[s + 1] && n >= s + 2)
                            return;
                        if (t.lastIndexOf("\n", n - 1) > s)
                            return;
                        if (t.lastIndexOf(".", n - 1) > s)
                            return
                    } else {
                        if (t.lastIndexOf(" ", n - 1) > s)
                            return
                    }
                    const a = t[s - 1];
                    if (a && !di.test(a))
                        return;
                    return {
                        text: t.substring(s + e.length, n),
                        position: s + e.length
                    }
                }
                const mi = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"]
                    , fi = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"]
                    , pi = new WeakMap;
                function gi(t, e=t.selectionEnd) {
                    const {mirror: n, marker: i} = function(t, e) {
                        const n = t.nodeName.toLowerCase();
                        if ("textarea" !== n && "input" !== n)
                            throw new Error("expected textField to a textarea or input");
                        let i = pi.get(t);
                        if (i && i.parentElement === t.parentElement)
                            i.innerHTML = "";
                        else {
                            i = document.createElement("div"),
                                pi.set(t, i);
                            const e = window.getComputedStyle(t)
                                , r = mi.slice(0);
                            "textarea" === n ? r.push("white-space:pre-wrap;") : r.push("white-space:nowrap;");
                            for (let t = 0, n = fi.length; t < n; t++) {
                                const n = fi[t];
                                r.push(`${n}:${e.getPropertyValue(n)};`)
                            }
                            i.style.cssText = r.join(" ")
                        }
                        const r = document.createElement("span");
                        let o, s;
                        if (r.style.cssText = "position: absolute;",
                            r.innerHTML = "&nbsp;",
                        "number" == typeof e) {
                            let n = t.value.substring(0, e);
                            n && (o = document.createTextNode(n)),
                                n = t.value.substring(e),
                            n && (s = document.createTextNode(n))
                        } else {
                            const e = t.value;
                            e && (o = document.createTextNode(e))
                        }
                        if (o && i.appendChild(o),
                            i.appendChild(r),
                        s && i.appendChild(s),
                            !i.parentElement) {
                            if (!t.parentElement)
                                throw new Error("textField must have a parentElement to mirror");
                            t.parentElement.insertBefore(i, t)
                        }
                        return i.scrollTop = t.scrollTop,
                            i.scrollLeft = t.scrollLeft,
                            {
                                mirror: i,
                                marker: r
                            }
                    }(t, e)
                        , r = n.getBoundingClientRect()
                        , o = i.getBoundingClientRect();
                    return setTimeout((()=>{
                            n.remove()
                        }
                    ), 5e3),
                        {
                            top: o.top - r.top,
                            left: o.left - r.left
                        }
                }
                const vi = new WeakMap;
                class TextExpander {
                    constructor(t, e) {
                        this.expander = t,
                            this.input = e,
                            this.combobox = null,
                            this.menu = null,
                            this.match = null,
                            this.justPasted = !1,
                            this.lookBackIndex = 0,
                            this.oninput = this.onInput.bind(this),
                            this.onpaste = this.onPaste.bind(this),
                            this.onkeydown = this.onKeydown.bind(this),
                            this.oncommit = this.onCommit.bind(this),
                            this.onmousedown = this.onMousedown.bind(this),
                            this.onblur = this.onBlur.bind(this),
                            this.interactingWithList = !1,
                            e.addEventListener("paste", this.onpaste),
                            e.addEventListener("input", this.oninput),
                            e.addEventListener("keydown", this.onkeydown),
                            e.addEventListener("blur", this.onblur)
                    }
                    destroy() {
                        this.input.removeEventListener("paste", this.onpaste),
                            this.input.removeEventListener("input", this.oninput),
                            this.input.removeEventListener("keydown", this.onkeydown),
                            this.input.removeEventListener("blur", this.onblur)
                    }
                    dismissMenu() {
                        this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex)
                    }
                    activate(t, e) {
                        if (this.input !== document.activeElement)
                            return;
                        this.deactivate(),
                            this.menu = e,
                        e.id || (e.id = "text-expander-" + Math.floor(1e5 * Math.random()).toString()),
                            this.expander.append(e),
                            this.combobox = new Combobox(this.input,e);
                        const {top: n, left: i} = gi(this.input, t.position);
                        e.style.top = n + "px",
                            e.style.left = i + "px",
                            this.combobox.start(),
                            e.addEventListener("combobox-commit", this.oncommit),
                            e.addEventListener("mousedown", this.onmousedown),
                            this.combobox.navigate(1)
                    }
                    deactivate() {
                        const t = this.menu;
                        return !(!t || !this.combobox) && (this.menu = null,
                            t.removeEventListener("combobox-commit", this.oncommit),
                            t.removeEventListener("mousedown", this.onmousedown),
                            this.combobox.destroy(),
                            this.combobox = null,
                            t.remove(),
                            !0)
                    }
                    onCommit({target: t}) {
                        const e = t;
                        if (!(e instanceof HTMLElement))
                            return;
                        if (!this.combobox)
                            return;
                        const n = this.match;
                        if (!n)
                            return;
                        const i = this.input.value.substring(0, n.position - n.key.length)
                            , r = this.input.value.substring(n.position + n.text.length)
                            , o = {
                            item: e,
                            key: n.key,
                            value: null
                        };
                        if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value",{
                            cancelable: !0,
                            detail: o
                        })))
                            return;
                        if (!o.value)
                            return;
                        const s = o.value + " ";
                        this.input.value = i + s + r;
                        const a = i.length + s.length;
                        this.deactivate(),
                            this.input.focus(),
                            this.input.selectionStart = a,
                            this.input.selectionEnd = a,
                            this.lookBackIndex = a,
                            this.match = null
                    }
                    onBlur() {
                        this.interactingWithList ? this.interactingWithList = !1 : this.deactivate()
                    }
                    onPaste() {
                        this.justPasted = !0
                    }
                    async onInput() {
                        if (this.justPasted)
                            return void (this.justPasted = !1);
                        const t = this.findMatch();
                        if (t) {
                            this.match = t;
                            const e = await this.notifyProviders(t);
                            if (!this.match)
                                return;
                            e ? this.activate(t, e) : this.deactivate()
                        } else
                            this.match = null,
                                this.deactivate()
                    }
                    findMatch() {
                        const t = this.input.selectionEnd || 0
                            , e = this.input.value;
                        t <= this.lookBackIndex && (this.lookBackIndex = t - 1);
                        for (const {key: n, multiWord: i} of this.expander.keys) {
                            const r = hi(e, n, t, {
                                multiWord: i,
                                lookBackIndex: this.lookBackIndex,
                                lastMatchPosition: this.match ? this.match.position : null
                            });
                            if (r)
                                return {
                                    text: r.text,
                                    key: n,
                                    position: r.position
                                }
                        }
                    }
                    async notifyProviders(t) {
                        const e = [];
                        if (!this.expander.dispatchEvent(new CustomEvent("text-expander-change",{
                            cancelable: !0,
                            detail: {
                                provide: t=>e.push(t),
                                text: t.text,
                                key: t.key
                            }
                        })))
                            return;
                        return (await Promise.all(e)).filter((t=>t.matched)).map((t=>t.fragment))[0]
                    }
                    onMousedown() {
                        this.interactingWithList = !0
                    }
                    onKeydown(t) {
                        "Escape" === t.key && (this.match = null,
                        this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex,
                            t.stopImmediatePropagation(),
                            t.preventDefault()))
                    }
                }
                class TextExpanderElement extends HTMLElement {
                    get keys() {
                        const t = this.getAttribute("keys")
                            , e = t ? t.split(" ") : []
                            , n = this.getAttribute("multiword")
                            , i = n ? n.split(" ") : []
                            , r = 0 === i.length && this.hasAttribute("multiword");
                        return e.map((t=>({
                            key: t,
                            multiWord: r || i.includes(t)
                        })))
                    }
                    connectedCallback() {
                        const t = this.querySelector('input[type="text"], textarea');
                        if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement))
                            return;
                        const e = new TextExpander(this,t);
                        vi.set(this, e)
                    }
                    disconnectedCallback() {
                        const t = vi.get(this);
                        t && (t.destroy(),
                            vi.delete(this))
                    }
                    dismiss() {
                        const t = vi.get(this);
                        t && t.dismissMenu()
                    }
                }
                window.customElements.get("text-expander") || (window.TextExpanderElement = TextExpanderElement,
                    window.customElements.define("text-expander", TextExpanderElement));
                const bi = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    , Ei = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                function wi(t) {
                    return "0".concat(t).slice(-2)
                }
                function yi(t, e) {
                    const n = t.getDay()
                        , i = t.getDate()
                        , r = t.getMonth()
                        , o = t.getFullYear()
                        , s = t.getHours()
                        , a = t.getMinutes()
                        , c = t.getSeconds();
                    return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, (function(e) {
                            let l;
                            switch (e[1]) {
                                case "%":
                                    return "%";
                                case "a":
                                    return bi[n].slice(0, 3);
                                case "A":
                                    return bi[n];
                                case "b":
                                    return Ei[r].slice(0, 3);
                                case "B":
                                    return Ei[r];
                                case "c":
                                    return t.toString();
                                case "d":
                                    return wi(i);
                                case "e":
                                    return String(i);
                                case "H":
                                    return wi(s);
                                case "I":
                                    return wi(yi(t, "%l"));
                                case "l":
                                    return String(0 === s || 12 === s ? 12 : (s + 12) % 12);
                                case "m":
                                    return wi(r + 1);
                                case "M":
                                    return wi(a);
                                case "p":
                                    return s > 11 ? "PM" : "AM";
                                case "P":
                                    return s > 11 ? "pm" : "am";
                                case "S":
                                    return wi(c);
                                case "w":
                                    return String(n);
                                case "y":
                                    return wi(o % 100);
                                case "Y":
                                    return String(o);
                                case "Z":
                                    return l = t.toString().match(/\((\w+)\)$/),
                                        l ? l[1] : "";
                                case "z":
                                    return l = t.toString().match(/\w([+-]\d\d\d\d) /),
                                        l ? l[1] : ""
                            }
                            return ""
                        }
                    ))
                }
                function xi(t) {
                    let e;
                    return function() {
                        if (e)
                            return e;
                        if ("Intl"in window)
                            try {
                                return e = new Intl.DateTimeFormat(void 0,t),
                                    e
                            } catch (uo) {
                                if (!(uo instanceof RangeError))
                                    throw uo
                            }
                    }
                }
                let ki = null;
                const Ai = xi({
                    day: "numeric",
                    month: "short"
                });
                function Ti() {
                    if (null !== ki)
                        return ki;
                    const t = Ai();
                    if (t) {
                        const e = t.format(new Date(0));
                        return ki = !!e.match(/^\d/),
                            ki
                    }
                    return !1
                }
                let Li = null;
                const Mi = xi({
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                });
                function Si(t) {
                    const e = t.closest("[lang]");
                    return e instanceof HTMLElement && e.lang ? e.lang : "default"
                }
                const Ci = new WeakMap;
                class ExtendedTimeElement extends HTMLElement {
                    static get observedAttributes() {
                        return ["datetime", "day", "format", "lang", "hour", "minute", "month", "second", "title", "weekday", "year"]
                    }
                    connectedCallback() {
                        const t = this.getFormattedTitle();
                        t && !this.hasAttribute("title") && this.setAttribute("title", t);
                        const e = this.getFormattedDate();
                        e && (this.textContent = e)
                    }
                    attributeChangedCallback(t, e, n) {
                        const i = this.getFormattedTitle();
                        if ("datetime" === t) {
                            const t = Date.parse(n);
                            isNaN(t) ? Ci.delete(this) : Ci.set(this, new Date(t))
                        }
                        const r = this.getFormattedTitle()
                            , o = this.getAttribute("title");
                        "title" === t || !r || o && o !== i || this.setAttribute("title", r);
                        const s = this.getFormattedDate();
                        s && (this.textContent = s)
                    }
                    get date() {
                        return Ci.get(this)
                    }
                    getFormattedTitle() {
                        const t = this.date;
                        if (!t)
                            return;
                        const e = Ni();
                        if (e)
                            return e.format(t);
                        try {
                            return t.toLocaleString()
                        } catch (uo) {
                            if (uo instanceof RangeError)
                                return t.toString();
                            throw uo
                        }
                    }
                    getFormattedDate() {}
                }
                const Ni = xi({
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                })
                    , Ii = new WeakMap;
                class LocalTimeElement extends ExtendedTimeElement {
                    attributeChangedCallback(t, e, n) {
                        "hour" !== t && "minute" !== t && "second" !== t && "time-zone-name" !== t || Ii.delete(this),
                            super.attributeChangedCallback(t, e, n)
                    }
                    getFormattedDate() {
                        const t = this.date;
                        if (!t)
                            return;
                        const e = function(t, e) {
                            const n = {
                                weekday: {
                                    short: "%a",
                                    long: "%A"
                                },
                                day: {
                                    numeric: "%e",
                                    "2-digit": "%d"
                                },
                                month: {
                                    short: "%b",
                                    long: "%B"
                                },
                                year: {
                                    numeric: "%Y",
                                    "2-digit": "%y"
                                }
                            };
                            let i = Ti() ? "weekday day month year" : "weekday month day, year";
                            for (const r in n) {
                                const e = n[r][t.getAttribute(r)];
                                i = i.replace(r, e || "")
                            }
                            return i = i.replace(/(\s,)|(,\s$)/, ""),
                                yi(e, i).replace(/\s+/, " ").trim()
                        }(this, t) || ""
                            , n = function(t, e) {
                            const n = {}
                                , i = t.getAttribute("hour");
                            "numeric" !== i && "2-digit" !== i || (n.hour = i);
                            const r = t.getAttribute("minute");
                            "numeric" !== r && "2-digit" !== r || (n.minute = r);
                            const o = t.getAttribute("second");
                            "numeric" !== o && "2-digit" !== o || (n.second = o);
                            const s = t.getAttribute("time-zone-name");
                            "short" !== s && "long" !== s || (n.timeZoneName = s);
                            if (0 === Object.keys(n).length)
                                return;
                            let a = Ii.get(t);
                            a || (a = xi(n),
                                Ii.set(t, a));
                            const c = a();
                            if (c)
                                return c.format(e);
                            return yi(e, n.second ? "%H:%M:%S" : "%H:%M")
                        }(this, t) || "";
                        return "".concat(e, " ").concat(n).trim()
                    }
                }
                window.customElements.get("local-time") || (window.LocalTimeElement = LocalTimeElement,
                    window.customElements.define("local-time", LocalTimeElement));
                class RelativeTime {
                    constructor(t, e) {
                        this.date = t,
                            this.locale = e
                    }
                    toString() {
                        const t = this.timeElapsed();
                        if (t)
                            return t;
                        {
                            const t = this.timeAhead();
                            return t || "on ".concat(this.formatDate())
                        }
                    }
                    timeElapsed() {
                        const t = (new Date).getTime() - this.date.getTime()
                            , e = Math.round(t / 1e3)
                            , n = Math.round(e / 60)
                            , i = Math.round(n / 60)
                            , r = Math.round(i / 24);
                        return t >= 0 && r < 30 ? this.timeAgoFromMs(t) : null
                    }
                    timeAhead() {
                        const t = this.date.getTime() - (new Date).getTime()
                            , e = Math.round(t / 1e3)
                            , n = Math.round(e / 60)
                            , i = Math.round(n / 60)
                            , r = Math.round(i / 24);
                        return t >= 0 && r < 30 ? this.timeUntil() : null
                    }
                    timeAgo() {
                        const t = (new Date).getTime() - this.date.getTime();
                        return this.timeAgoFromMs(t)
                    }
                    timeAgoFromMs(t) {
                        const e = Math.round(t / 1e3)
                            , n = Math.round(e / 60)
                            , i = Math.round(n / 60)
                            , r = Math.round(i / 24)
                            , o = Math.round(r / 30)
                            , s = Math.round(o / 12);
                        return t < 0 || e < 10 ? Di(this.locale, 0, "second") : e < 45 ? Di(this.locale, -e, "second") : e < 90 || n < 45 ? Di(this.locale, -n, "minute") : n < 90 || i < 24 ? Di(this.locale, -i, "hour") : i < 36 || r < 30 ? Di(this.locale, -r, "day") : o < 18 ? Di(this.locale, -o, "month") : Di(this.locale, -s, "year")
                    }
                    microTimeAgo() {
                        const t = (new Date).getTime() - this.date.getTime()
                            , e = Math.round(t / 1e3)
                            , n = Math.round(e / 60)
                            , i = Math.round(n / 60)
                            , r = Math.round(i / 24)
                            , o = Math.round(r / 30)
                            , s = Math.round(o / 12);
                        return n < 1 ? "1m" : n < 60 ? "".concat(n, "m") : i < 24 ? "".concat(i, "h") : r < 365 ? "".concat(r, "d") : "".concat(s, "y")
                    }
                    timeUntil() {
                        const t = this.date.getTime() - (new Date).getTime();
                        return this.timeUntilFromMs(t)
                    }
                    timeUntilFromMs(t) {
                        const e = Math.round(t / 1e3)
                            , n = Math.round(e / 60)
                            , i = Math.round(n / 60)
                            , r = Math.round(i / 24)
                            , o = Math.round(r / 30)
                            , s = Math.round(o / 12);
                        return o >= 18 || o >= 12 ? Di(this.locale, s, "year") : r >= 45 || r >= 30 ? Di(this.locale, o, "month") : i >= 36 || i >= 24 ? Di(this.locale, r, "day") : n >= 90 || n >= 45 ? Di(this.locale, i, "hour") : e >= 90 || e >= 45 ? Di(this.locale, n, "minute") : Di(this.locale, e >= 10 ? e : 0, "second")
                    }
                    microTimeUntil() {
                        const t = this.date.getTime() - (new Date).getTime()
                            , e = Math.round(t / 1e3)
                            , n = Math.round(e / 60)
                            , i = Math.round(n / 60)
                            , r = Math.round(i / 24)
                            , o = Math.round(r / 30)
                            , s = Math.round(o / 12);
                        return r >= 365 ? "".concat(s, "y") : i >= 24 ? "".concat(r, "d") : n >= 60 ? "".concat(i, "h") : n > 1 ? "".concat(n, "m") : "1m"
                    }
                    formatDate() {
                        let t = Ti() ? "%e %b" : "%b %e";
                        var e;
                        return e = this.date,
                        (new Date).getUTCFullYear() !== e.getUTCFullYear() && (t += function() {
                            if (null !== Li)
                                return Li;
                            const t = Mi();
                            if (t) {
                                const e = t.format(new Date(0));
                                return Li = !!e.match(/\d,/),
                                    Li
                            }
                            return !0
                        }() ? ", %Y" : " %Y"),
                            yi(this.date, t)
                    }
                    formatTime() {
                        const t = Hi();
                        return t ? t.format(this.date) : yi(this.date, "%l:%M%P")
                    }
                }
                function Di(t, e, n) {
                    const i = function(t, e) {
                        if ("Intl"in window && "RelativeTimeFormat"in window.Intl)
                            try {
                                return new Intl.RelativeTimeFormat(t,e)
                            } catch (uo) {
                                if (!(uo instanceof RangeError))
                                    throw uo
                            }
                    }(t, {
                        numeric: "auto"
                    });
                    return i ? i.format(e, n) : function(t, e) {
                        if (0 === t)
                            switch (e) {
                                case "year":
                                case "quarter":
                                case "month":
                                case "week":
                                    return "this ".concat(e);
                                case "day":
                                    return "today";
                                case "hour":
                                case "minute":
                                    return "in 0 ".concat(e, "s");
                                case "second":
                                    return "now"
                            }
                        else if (1 === t)
                            switch (e) {
                                case "year":
                                case "quarter":
                                case "month":
                                case "week":
                                    return "next ".concat(e);
                                case "day":
                                    return "tomorrow";
                                case "hour":
                                case "minute":
                                case "second":
                                    return "in 1 ".concat(e)
                            }
                        else if (-1 === t)
                            switch (e) {
                                case "year":
                                case "quarter":
                                case "month":
                                case "week":
                                    return "last ".concat(e);
                                case "day":
                                    return "yesterday";
                                case "hour":
                                case "minute":
                                case "second":
                                    return "1 ".concat(e, " ago")
                            }
                        else if (t > 1)
                            switch (e) {
                                case "year":
                                case "quarter":
                                case "month":
                                case "week":
                                case "day":
                                case "hour":
                                case "minute":
                                case "second":
                                    return "in ".concat(t, " ").concat(e, "s")
                            }
                        else if (t < -1)
                            switch (e) {
                                case "year":
                                case "quarter":
                                case "month":
                                case "week":
                                case "day":
                                case "hour":
                                case "minute":
                                case "second":
                                    return "".concat(-t, " ").concat(e, "s ago")
                            }
                        throw new RangeError("Invalid unit argument for format() '".concat(e, "'"))
                    }(e, n)
                }
                const Hi = xi({
                    hour: "numeric",
                    minute: "2-digit"
                });
                class RelativeTimeElement extends ExtendedTimeElement {
                    getFormattedDate() {
                        const t = this.date;
                        if (t)
                            return new RelativeTime(t,Si(this)).toString()
                    }
                    connectedCallback() {
                        Pi.push(this),
                        Ri || (_i(),
                            Ri = setInterval(_i, 6e4)),
                            super.connectedCallback()
                    }
                    disconnectedCallback() {
                        const t = Pi.indexOf(this);
                        -1 !== t && Pi.splice(t, 1),
                        Pi.length || Ri && (clearInterval(Ri),
                            Ri = null)
                    }
                }
                t("R", RelativeTimeElement);
                const Pi = [];
                let Ri;
                function _i() {
                    let t, e, n;
                    for (e = 0,
                             n = Pi.length; e < n; e++)
                        t = Pi[e],
                            t.textContent = t.getFormattedDate() || ""
                }
                window.customElements.get("relative-time") || (window.RelativeTimeElement = RelativeTimeElement,
                    window.customElements.define("relative-time", RelativeTimeElement));
                class TimeAgoElement extends RelativeTimeElement {
                    getFormattedDate() {
                        const t = this.getAttribute("format")
                            , e = this.date;
                        if (e)
                            return "micro" === t ? new RelativeTime(e,Si(this)).microTimeAgo() : new RelativeTime(e,Si(this)).timeAgo()
                    }
                }
                window.customElements.get("time-ago") || (window.TimeAgoElement = TimeAgoElement,
                    window.customElements.define("time-ago", TimeAgoElement));
                class TimeUntilElement extends RelativeTimeElement {
                    getFormattedDate() {
                        const t = this.getAttribute("format")
                            , e = this.date;
                        if (e)
                            return "micro" === t ? new RelativeTime(e,Si(this)).microTimeUntil() : new RelativeTime(e,Si(this)).timeUntil()
                    }
                }
                function qi(t, e) {
                    const n = t.value.substring(0, t.selectionStart || 0)
                        , i = t.value.substring(t.selectionEnd || 0)
                        , r = 0 === n.length || n.match(/\n$/) ? "" : "\n"
                        , o = n + r + e;
                    t.value = o + i,
                        t.selectionStart = o.length,
                        t.selectionEnd = t.selectionStart,
                        t.dispatchEvent(new CustomEvent("change",{
                            bubbles: !0,
                            cancelable: !1
                        })),
                        t.focus()
                }
                function Oi(t) {
                    const e = t.dataTransfer;
                    if (!e)
                        return;
                    if (function(t) {
                        return Array.from(t.types).indexOf("Files") >= 0
                    }(e))
                        return;
                    if (!$i(e))
                        return;
                    const n = ji(e);
                    if (!n.some(Ui))
                        return;
                    t.stopPropagation(),
                        t.preventDefault();
                    const i = t.currentTarget;
                    i instanceof HTMLTextAreaElement && qi(i, n.map(Wi).join(""))
                }
                function Fi(t) {
                    const e = t.dataTransfer;
                    e && (e.dropEffect = "link")
                }
                function Bi(t) {
                    const e = t.clipboardData;
                    if (!e || !$i(e))
                        return;
                    const n = ji(e);
                    if (!n.some(Ui))
                        return;
                    t.stopPropagation(),
                        t.preventDefault();
                    const i = t.currentTarget;
                    i instanceof HTMLTextAreaElement && qi(i, n.map(Wi).join(""))
                }
                function Wi(t) {
                    return Ui(t) ? `\n![](${t})\n` : t
                }
                function $i(t) {
                    return Array.from(t.types).indexOf("text/uri-list") >= 0
                }
                function ji(t) {
                    return (t.getData("text/uri-list") || "").split("\r\n")
                }
                window.customElements.get("time-until") || (window.TimeUntilElement = TimeUntilElement,
                    window.customElements.define("time-until", TimeUntilElement)),
                    window.IncludeFragmentElement.prototype.fetch = t=>(t.headers.append("X-Requested-With", "XMLHttpRequest"),
                        window.fetch(t));
                const Vi = /\.(gif|png|jpe?g)$/i;
                function Ui(t) {
                    return Vi.test(t)
                }
                function Ki(t) {
                    const e = t.dataTransfer;
                    if (!e)
                        return;
                    if (function(t) {
                        return Array.from(t.types).indexOf("Files") >= 0
                    }(e))
                        return;
                    const n = Qi(e);
                    if (!n)
                        return;
                    t.stopPropagation(),
                        t.preventDefault();
                    const i = t.currentTarget;
                    i instanceof HTMLTextAreaElement && qi(i, Gi(n))
                }
                function Yi(t) {
                    const e = t.dataTransfer;
                    e && (e.dropEffect = "copy")
                }
                function Xi(t) {
                    if (!t.clipboardData)
                        return;
                    const e = Qi(t.clipboardData);
                    if (!e)
                        return;
                    t.stopPropagation(),
                        t.preventDefault();
                    const n = t.currentTarget;
                    n instanceof HTMLTextAreaElement && qi(n, Gi(e))
                }
                function zi(t) {
                    return (t.textContent || "").trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
                }
                function Gi(t) {
                    const e = Array.from(t.querySelectorAll("tr"))
                        , n = e.shift();
                    if (!n)
                        return "";
                    const i = (r = n,
                        Array.from(r.querySelectorAll("td, th")).map(zi));
                    var r;
                    const o = i.map((()=>"--"));
                    return `\n${`${i.join(" | ")}\n${o.join(" | ")}\n`}${e.map((t=>Array.from(t.querySelectorAll("td")).map(zi).join(" | "))).join("\n")}\n\n`
                }
                function Qi(t) {
                    if (-1 === Array.from(t.types).indexOf("text/html"))
                        return null;
                    const e = t.getData("text/html");
                    if (!/<table/i.test(e))
                        return null;
                    const n = function(t) {
                        const e = document.createElement("div");
                        return e.innerHTML = t,
                            e.querySelector("table")
                    }(e);
                    return !n || n.closest("[data-paste-markdown-skip]") ? null : n
                }
                function Zi(t) {
                    const e = t.clipboardData;
                    if (!e || !function(t) {
                        return Array.from(t.types).indexOf("text/x-gfm") >= 0
                    }(e))
                        return;
                    const n = t.currentTarget;
                    if (!(n instanceof HTMLTextAreaElement))
                        return;
                    const i = e.getData("text/x-gfm");
                    i && (t.stopPropagation(),
                        t.preventDefault(),
                        qi(n, i))
                }
                function *Ji(t) {
                    let e = ""
                        , n = 0
                        , i = !1;
                    for (let r = 0; r < t.length; r += 1)
                        "{" !== t[r] || "{" !== t[r + 1] || "\\" === t[r - 1] || i ? "}" === t[r] && "}" === t[r + 1] && "\\" !== t[r - 1] && i && (i = !1,
                            yield{
                                type: "part",
                                start: n,
                                end: r + 2,
                                value: e.slice(2).trim()
                            },
                            e = "",
                            r += 2,
                            n = r) : (i = !0,
                        e && (yield{
                            type: "string",
                            start: n,
                            end: r,
                            value: e
                        }),
                            e = "{{",
                            n = r,
                            r += 2),
                            e += t[r] || "";
                    e && (yield{
                        type: "string",
                        start: n,
                        end: t.length,
                        value: e
                    })
                }
                t("k", (function(t) {
                        return function(t) {
                            t.addEventListener("dragover", Yi),
                                t.addEventListener("drop", Ki),
                                t.addEventListener("paste", Xi)
                        }(t),
                            function(t) {
                                t.addEventListener("dragover", Fi),
                                    t.addEventListener("drop", Oi),
                                    t.addEventListener("paste", Bi)
                            }(t),
                            function(t) {
                                t.addEventListener("paste", Zi)
                            }(t),
                            {
                                unsubscribe: ()=>{
                                    !function(t) {
                                        t.removeEventListener("dragover", Yi),
                                            t.removeEventListener("drop", Ki),
                                            t.removeEventListener("paste", Xi)
                                    }(t),
                                        function(t) {
                                            t.removeEventListener("dragover", Fi),
                                                t.removeEventListener("drop", Oi),
                                                t.removeEventListener("paste", Bi)
                                        }(t),
                                        function(t) {
                                            t.removeEventListener("paste", Zi)
                                        }(t)
                                }
                            }
                    }
                ));
                var tr, er, nr = function(t, e, n) {
                    if (!e.has(t))
                        throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n),
                        n
                }, ir = function(t, e) {
                    if (!e.has(t))
                        throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
                class AttributeTemplatePart {
                    constructor(t, e) {
                        this.expression = e,
                            tr.set(this, void 0),
                            er.set(this, ""),
                            nr(this, tr, t),
                            ir(this, tr).updateParent("")
                    }
                    get attributeName() {
                        return ir(this, tr).attr.name
                    }
                    get attributeNamespace() {
                        return ir(this, tr).attr.namespaceURI
                    }
                    get value() {
                        return ir(this, er)
                    }
                    set value(t) {
                        nr(this, er, t || ""),
                            ir(this, tr).updateParent(t)
                    }
                    get element() {
                        return ir(this, tr).element
                    }
                    get booleanValue() {
                        return ir(this, tr).booleanValue
                    }
                    set booleanValue(t) {
                        ir(this, tr).booleanValue = t
                    }
                }
                tr = new WeakMap,
                    er = new WeakMap;
                class AttributeValueSetter {
                    constructor(t, e) {
                        this.element = t,
                            this.attr = e,
                            this.partList = []
                    }
                    get booleanValue() {
                        return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name)
                    }
                    set booleanValue(t) {
                        if (1 !== this.partList.length)
                            throw new DOMException("Operation not supported","NotSupportedError");
                        this.partList[0].value = t ? "" : null
                    }
                    append(t) {
                        this.partList.push(t)
                    }
                    updateParent(t) {
                        if (1 === this.partList.length && null === t)
                            this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
                        else {
                            const t = this.partList.map((t=>"string" == typeof t ? t : t.value)).join("");
                            this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, t)
                        }
                    }
                }
                var rr, or = function(t, e, n) {
                    if (!e.has(t))
                        throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n),
                        n
                }, sr = function(t, e) {
                    if (!e.has(t))
                        throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
                class NodeTemplatePart {
                    constructor(t, e) {
                        this.expression = e,
                            rr.set(this, void 0),
                            or(this, rr, [t]),
                            t.textContent = ""
                    }
                    get value() {
                        return sr(this, rr).map((t=>t.textContent)).join("")
                    }
                    set value(t) {
                        this.replace(t)
                    }
                    get previousSibling() {
                        return sr(this, rr)[0].previousSibling
                    }
                    get nextSibling() {
                        return sr(this, rr)[sr(this, rr).length - 1].nextSibling
                    }
                    replace(...t) {
                        const e = t.map((t=>"string" == typeof t ? new Text(t) : t));
                        e.length || e.push(new Text("")),
                            sr(this, rr)[0].before(...e);
                        for (const n of sr(this, rr))
                            n.remove();
                        or(this, rr, e)
                    }
                }
                function ar(t) {
                    return {
                        createCallback(t, e, n) {
                            this.processCallback(t, e, n)
                        },
                        processCallback(e, n, i) {
                            var r;
                            if ("object" == typeof i && i)
                                for (const o of n)
                                    if (o.expression in i) {
                                        const e = null !== (r = i[o.expression]) && void 0 !== r ? r : "";
                                        t(o, e)
                                    }
                        }
                    }
                }
                function cr(t, e) {
                    t.value = String(e)
                }
                rr = new WeakMap;
                const lr = ar(cr);
                var ur, dr, hr = function(t, e, n) {
                    if (!e.has(t))
                        throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n),
                        n
                }, mr = function(t, e) {
                    if (!e.has(t))
                        throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
                class TemplateInstance$1 extends DocumentFragment {
                    constructor(t, e, n=lr) {
                        var i, r;
                        super(),
                            ur.set(this, void 0),
                            dr.set(this, void 0),
                        Object.getPrototypeOf(this !== TemplateInstance$1.prototype) && Object.setPrototypeOf(this, TemplateInstance$1.prototype),
                            this.appendChild(t.content.cloneNode(!0)),
                            hr(this, dr, Array.from(function*(t) {
                                const e = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, !1);
                                let n;
                                for (; n = e.nextNode(); )
                                    if (n instanceof Element && n.hasAttributes())
                                        for (let t = 0; t < n.attributes.length; t += 1) {
                                            const e = n.attributes.item(t);
                                            if (e && e.value.includes("{{")) {
                                                const t = new AttributeValueSetter(n,e);
                                                for (const n of Ji(e.value))
                                                    if ("string" === n.type)
                                                        t.append(n.value);
                                                    else {
                                                        const e = new AttributeTemplatePart(t,n.value);
                                                        t.append(e),
                                                            yield e
                                                    }
                                            }
                                        }
                                    else if (n instanceof Text && n.textContent && n.textContent.includes("{{"))
                                        for (const t of Ji(n.textContent)) {
                                            t.end < n.textContent.length && n.splitText(t.end),
                                            "part" === t.type && (yield new NodeTemplatePart(n,t.value));
                                            break
                                        }
                            }(this))),
                            hr(this, ur, n),
                        null === (r = (i = mr(this, ur)).createCallback) || void 0 === r || r.call(i, this, mr(this, dr), e)
                    }
                    update(t) {
                        mr(this, ur).processCallback(this, mr(this, dr), t)
                    }
                }
                t("p", TemplateInstance$1),
                    ur = new WeakMap,
                    dr = new WeakMap;
                class Leaf {
                    constructor(t) {
                        this.children = [],
                            this.parent = t
                    }
                    delete(t) {
                        const e = this.children.indexOf(t);
                        return -1 !== e && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)),
                        0 === this.children.length && this.parent.delete(this),
                            !0)
                    }
                    add(t) {
                        return this.children.push(t),
                            this
                    }
                }
                class RadixTrie {
                    constructor(t) {
                        this.parent = null,
                            this.children = {},
                            this.parent = t || null
                    }
                    get(t) {
                        return this.children[t]
                    }
                    insert(t) {
                        let e = this;
                        for (let n = 0; n < t.length; n += 1) {
                            const i = t[n];
                            let r = e.get(i);
                            if (n === t.length - 1)
                                return r instanceof RadixTrie && (e.delete(r),
                                    r = null),
                                r || (r = new Leaf(e),
                                    e.children[i] = r),
                                    r;
                            r instanceof Leaf && (r = null),
                            r || (r = new RadixTrie(e),
                                e.children[i] = r),
                                e = r
                        }
                        return e
                    }
                    delete(t) {
                        for (const e in this.children) {
                            if (this.children[e] === t) {
                                const t = delete this.children[e];
                                return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this),
                                    t
                            }
                        }
                        return !1
                    }
                }
                function fr(t) {
                    if (!(t instanceof HTMLElement))
                        return !1;
                    const e = t.nodeName.toLowerCase()
                        , n = (t.getAttribute("type") || "").toLowerCase();
                    return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || t.isContentEditable
                }
                function pr(t) {
                    return `${t.ctrlKey ? "Control+" : ""}${t.altKey ? "Alt+" : ""}${t.metaKey ? "Meta+" : ""}${t.shiftKey && t.key.toUpperCase() !== t.key ? "Shift+" : ""}${t.key}`
                }
                const gr = new RadixTrie
                    , vr = new WeakMap;
                let br = gr
                    , Er = null;
                function wr() {
                    Er = null,
                        br = gr
                }
                function yr(t) {
                    if (t.defaultPrevented)
                        return;
                    if (t.target instanceof Node && fr(t.target))
                        return;
                    null != Er && window.clearTimeout(Er),
                        Er = window.setTimeout(wr, 1500);
                    const e = br.get(pr(t));
                    if (e)
                        return br = e,
                            e instanceof Leaf ? (function(t) {
                                fr(t) ? t.focus() : t.click()
                            }(e.children[e.children.length - 1]),
                                t.preventDefault(),
                                void wr()) : void 0;
                    wr()
                }
                var xr = "<unknown>";
                var kr = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
                    , Ar = /\((\S*)(?::(\d+))(?::(\d+))\)/;
                var Tr = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
                var Lr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i
                    , Mr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
                var Sr = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
                var Cr = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
                function Nr(t) {
                    if (null === t.parentNode || !(t.parentNode instanceof HTMLElement))
                        throw new Error;
                    const e = t.parentNode.children;
                    for (let n = 0; n < e.length; ++n)
                        if (e[n] === t)
                            return n;
                    return 0
                }
                let Ir = 0;
                function Dr(t) {
                    return t.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                const Hr = {
                    INPUT: t=>t instanceof HTMLInputElement && t.checked ? "[x] " : "[ ] ",
                    CODE(t) {
                        const e = t.textContent || "";
                        return t.parentNode && "PRE" === t.parentNode.nodeName ? (t.textContent = `\`\`\`\n${e.replace(/\n+$/, "")}\n\`\`\`\n\n`,
                            t) : e.indexOf("`") >= 0 ? `\`\` ${e} \`\`` : `\`${e}\``
                    },
                    STRONG: t=>`**${t.textContent || ""}**`,
                    EM: t=>`_${t.textContent || ""}_`,
                    DEL: t=>`~${t.textContent || ""}~`,
                    BLOCKQUOTE(t) {
                        const e = (t.textContent || "").trim().replace(/^/gm, "> ")
                            , n = document.createElement("pre");
                        return n.textContent = e + "\n\n",
                            n
                    },
                    A(t) {
                        const e = t.textContent || ""
                            , n = t.getAttribute("href");
                        return /^https?:/.test(e) && e === n ? e : n ? `[${e}](${n})` : e
                    },
                    IMG(t) {
                        const e = t.getAttribute("alt") || ""
                            , n = t.getAttribute("src");
                        if (!n)
                            throw new Error;
                        const i = t.hasAttribute("width") ? ` width="${Dr(t.getAttribute("width") || "")}"` : ""
                            , r = t.hasAttribute("height") ? ` height="${Dr(t.getAttribute("height") || "")}"` : "";
                        return i || r ? `<img alt="${Dr(e)}"${i}${r} src="${Dr(n)}">` : `![${e}](${n})`
                    },
                    LI(t) {
                        const e = t.parentNode;
                        if (!e)
                            throw new Error;
                        let n = "";
                        if (!function(t) {
                            const e = t.childNodes[0]
                                , n = t.childNodes[1];
                            return !!(e && t.childNodes.length < 3) && !("OL" !== e.nodeName && "UL" !== e.nodeName || n && (n.nodeType !== Node.TEXT_NODE || (n.textContent || "").trim()))
                        }(t))
                            if ("OL" === e.nodeName)
                                if (Ir > 0 && !e.previousSibling) {
                                    n = Nr(t) + Ir + 1 + "\\. "
                                } else
                                    n = Nr(t) + 1 + ". ";
                            else
                                n = "* ";
                        const i = n.replace(/\S/g, " ")
                            , r = (t.textContent || "").trim().replace(/^/gm, i)
                            , o = document.createElement("pre");
                        return o.textContent = r.replace(i, n),
                            o
                    },
                    OL(t) {
                        const e = document.createElement("li");
                        return e.appendChild(document.createElement("br")),
                            t.append(e),
                            t
                    },
                    H1(t) {
                        const e = parseInt(t.nodeName.slice(1));
                        return t.prepend(Array(e + 1).join("#") + " "),
                            t
                    },
                    UL: t=>t
                };
                Hr.UL = Hr.OL;
                for (let t = 2; t <= 6; ++t)
                    Hr["H" + t] = Hr.H1;
                function Pr(t) {
                    const e = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, (function(t) {
                            return t.nodeName in Hr && !function(t) {
                                if (t instanceof HTMLAnchorElement && 1 === t.childNodes.length) {
                                    const e = t.childNodes[0];
                                    if (e instanceof HTMLImageElement)
                                        return e.src === t.href
                                }
                                return !1
                            }(t) && (function(t) {
                                return "IMG" === t.nodeName || null != t.firstChild
                            }(t) || function(t) {
                                return "INPUT" === t.nodeName && t instanceof HTMLInputElement && "checkbox" === t.type
                            }(t)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    ))
                        , n = [];
                    let i = e.nextNode();
                    for (; i; )
                        i instanceof HTMLElement && n.push(i),
                            i = e.nextNode();
                    n.reverse();
                    for (const r of n)
                        r.replaceWith(Hr[r.nodeName](r))
                }
                const Rr = new WeakMap;
                let _r = 0;
                const qr = /\bEdge\//.test(navigator.userAgent);
                function Or(t, e) {
                    const n = 0 === _r;
                    _r += Rr.has(t) ? 0 : 1;
                    const i = Object.assign({
                        quoteMarkdown: !1,
                        copyMarkdown: !1,
                        scopeSelector: ""
                    }, e);
                    Rr.set(t, i),
                    n && document.addEventListener("keydown", $r),
                    i.copyMarkdown && t.addEventListener("copy", Fr)
                }
                function Fr(t) {
                    const e = t.target;
                    if (!(e instanceof HTMLElement))
                        return;
                    if (Kr(e))
                        return;
                    const n = t.clipboardData;
                    if (!n)
                        return;
                    const i = window.getSelection();
                    if (!i)
                        return;
                    let r;
                    try {
                        r = i.getRangeAt(0)
                    } catch (a) {
                        return
                    }
                    const o = i.toString()
                        , s = Vr(o, r, !0);
                    s && (n.setData("text/plain", o),
                        n.setData("text/x-gfm", s.selectionText),
                        t.preventDefault(),
                        i.removeAllRanges(),
                        i.addRange(r))
                }
                function Br(t) {
                    let e = t;
                    for (; e = e.parentElement; )
                        if (Rr.has(e))
                            return e
                }
                function Wr(t) {
                    for (const e of t.querySelectorAll("textarea"))
                        if (e instanceof HTMLTextAreaElement && Ur(e))
                            return e
                }
                function $r(t) {
                    if (function(t) {
                        return t.defaultPrevented || "r" !== t.key || t.metaKey || t.altKey || t.shiftKey || t.ctrlKey || t.target instanceof HTMLElement && Kr(t.target)
                    }(t))
                        return;
                    const e = window.getSelection();
                    if (!e)
                        return;
                    let n;
                    try {
                        n = e.getRangeAt(0)
                    } catch (i) {
                        return
                    }
                    jr(e.toString(), n) && t.preventDefault()
                }
                function jr(t, e) {
                    const n = Vr(t, e, !1);
                    if (!n)
                        return !1;
                    const {container: i, selectionText: r} = n;
                    if (!i.dispatchEvent(new CustomEvent("quote-selection",{
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            range: e,
                            selectionText: r
                        }
                    })))
                        return !0;
                    const o = Wr(i);
                    return !!o && (function(t, e) {
                        let n = `> ${t.replace(/\n/g, "\n> ")}\n\n`;
                        e.value && (n = `${e.value}\n\n${n}`);
                        e.value = n,
                            e.dispatchEvent(new CustomEvent("change",{
                                bubbles: !0,
                                cancelable: !1
                            })),
                            e.focus(),
                            e.selectionStart = e.value.length,
                            e.scrollTop = e.scrollHeight
                    }(r, o),
                        !0)
                }
                function Vr(t, e, n) {
                    let i = t.trim();
                    if (!i)
                        return;
                    let r = e.startContainer;
                    if (!r)
                        return;
                    if (r.nodeType !== Node.ELEMENT_NODE && (r = r.parentNode),
                        !(r instanceof Element))
                        return;
                    const o = Br(r);
                    if (!o)
                        return;
                    const s = Rr.get(o);
                    if (s) {
                        if (s.quoteMarkdown && !qr)
                            try {
                                const t = function(t, e) {
                                    const n = t.startContainer;
                                    if (!(n && n.parentNode && n.parentNode instanceof HTMLElement))
                                        throw new Error("the range must start within an HTMLElement");
                                    const i = n.parentNode;
                                    let r = t.cloneContents();
                                    if (e) {
                                        const t = r.querySelector(e);
                                        t && (r = document.createDocumentFragment(),
                                            r.appendChild(t))
                                    }
                                    Ir = 0;
                                    const o = i.closest("li");
                                    if (i.closest("pre")) {
                                        const t = document.createElement("pre");
                                        t.appendChild(r),
                                            r = document.createDocumentFragment(),
                                            r.appendChild(t)
                                    } else if (o && o.parentNode && ("OL" === o.parentNode.nodeName && (Ir = Nr(o)),
                                        !r.querySelector("li"))) {
                                        const t = document.createElement("li");
                                        if (!o.parentNode)
                                            throw new Error;
                                        const e = document.createElement(o.parentNode.nodeName);
                                        t.appendChild(r),
                                            e.appendChild(t),
                                            r = document.createDocumentFragment(),
                                            r.appendChild(e)
                                    }
                                    return r
                                }(e, s.scopeSelector);
                                o.dispatchEvent(new CustomEvent("quote-selection-markdown",{
                                    bubbles: !0,
                                    cancelable: !1,
                                    detail: {
                                        fragment: t,
                                        range: e,
                                        unwrap: n
                                    }
                                })),
                                    Pr(t),
                                    i = function(t) {
                                        const e = document.body;
                                        if (!e)
                                            return "";
                                        const n = document.createElement("div");
                                        n.appendChild(t),
                                            n.style.cssText = "position:absolute;left:-9999px;",
                                            e.appendChild(n);
                                        let i = "";
                                        try {
                                            const t = window.getSelection();
                                            if (t) {
                                                const e = document.createRange();
                                                e.selectNodeContents(n),
                                                    t.removeAllRanges(),
                                                    t.addRange(e),
                                                    i = t.toString(),
                                                    t.removeAllRanges(),
                                                    e.detach()
                                            }
                                        } finally {
                                            e.removeChild(n)
                                        }
                                        return i
                                    }(t).replace(/^\n+/, "").replace(/\s+$/, "")
                            } catch (a) {
                                setTimeout((()=>{
                                        throw a
                                    }
                                ))
                            }
                        return {
                            selectionText: i,
                            container: o
                        }
                    }
                }
                function Ur(t) {
                    return !(t.offsetWidth <= 0 && t.offsetHeight <= 0)
                }
                function Kr(t) {
                    const e = t.nodeName.toLowerCase()
                        , n = (t.getAttribute("type") || "").toLowerCase();
                    return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
                }
                let Yr = null;
                t("K", (function(t) {
                        var e = null
                            , n = !1
                            , i = void 0
                            , r = void 0
                            , o = void 0;
                        function s(e) {
                            if (i !== e.clientX || r !== e.clientY) {
                                var a = t.style.height;
                                o && o !== a && (n = !0,
                                    t.style.maxHeight = "",
                                    t.removeEventListener("mousemove", s)),
                                    o = a
                            }
                            i = e.clientX,
                                r = e.clientY
                        }
                        var a = t.ownerDocument
                            , c = a.documentElement;
                        function l() {
                            if (!(n || t.value === e || t.offsetWidth <= 0 && t.offsetHeight <= 0)) {
                                var i = function() {
                                    for (var e = 0, n = t; n !== a.body && null !== n; )
                                        e += n.offsetTop || 0,
                                            n = n.offsetParent;
                                    var i = e - a.defaultView.pageYOffset;
                                    return {
                                        top: i,
                                        bottom: c.clientHeight - (i + t.offsetHeight)
                                    }
                                }()
                                    , r = i.top
                                    , s = i.bottom;
                                if (!(r < 0 || s < 0)) {
                                    var l = Number(getComputedStyle(t).height.replace(/px/, "")) + s;
                                    t.style.maxHeight = l - 100 + "px";
                                    var u = t.parentElement;
                                    if (u instanceof HTMLElement) {
                                        var d = u.style.height;
                                        u.style.height = getComputedStyle(u).height,
                                            t.style.height = "auto",
                                            t.style.height = t.scrollHeight + "px",
                                            u.style.height = d,
                                            o = t.style.height
                                    }
                                    e = t.value
                                }
                            }
                        }
                        function u() {
                            n = !1,
                                t.style.height = "",
                                t.style.maxHeight = ""
                        }
                        t.addEventListener("mousemove", s),
                            t.addEventListener("input", l),
                            t.addEventListener("change", l);
                        var d = t.form;
                        return d && d.addEventListener("reset", u),
                        t.value && l(),
                            {
                                unsubscribe: function() {
                                    t.removeEventListener("mousemove", s),
                                        t.removeEventListener("input", l),
                                        t.removeEventListener("change", l),
                                    d && d.removeEventListener("reset", u)
                                }
                            }
                    }
                ));
                class MultiMap {
                    constructor(t) {
                        if (this.map = new Map,
                            t)
                            for (const [e,n] of t)
                                this.set(e, n)
                    }
                    get(t) {
                        const e = this.map.get(t);
                        return e || new Set
                    }
                    set(t, e) {
                        let n = this.map.get(t);
                        return n || (n = new Set,
                            this.map.set(t, n)),
                            n.add(e),
                            this
                    }
                    has(t) {
                        return this.map.has(t)
                    }
                    delete(t, e) {
                        const n = this.map.get(t);
                        if (!n)
                            return !1;
                        if (!e)
                            return this.map.delete(t);
                        const i = n.delete(e);
                        return n.size || this.map.delete(t),
                            i
                    }
                    drain(t) {
                        const e = [];
                        for (const n of this.keys())
                            this.delete(n, t) && !this.has(n) && e.push(n);
                        return e
                    }
                    keys() {
                        return this.map.keys()
                    }
                    values() {
                        return this.map.values()
                    }
                    entries() {
                        return this.map.entries()
                    }
                    [Symbol.iterator]() {
                        return this.entries()
                    }
                    clear() {
                        this.map.clear()
                    }
                    get size() {
                        return this.map.size
                    }
                }
                async function Xr(t, e) {
                    let n;
                    const i = new Promise(((e,i)=>{
                            n = self.setTimeout((()=>i(new Error("timeout"))), t)
                        }
                    ));
                    if (!e)
                        return i;
                    try {
                        await Promise.race([i, Gr(e)])
                    } catch (uo) {
                        throw self.clearTimeout(n),
                            uo
                    }
                }
                async function zr(t, e) {
                    let n;
                    const i = new Promise((e=>{
                            n = self.setTimeout(e, t)
                        }
                    ));
                    if (!e)
                        return i;
                    try {
                        await Promise.race([i, Gr(e)])
                    } catch (uo) {
                        throw self.clearTimeout(n),
                            uo
                    }
                }
                function Gr(t) {
                    return new Promise(((e,n)=>{
                            const i = new Error("aborted");
                            i.name = "AbortError",
                                t.aborted ? n(i) : t.addEventListener("abort", (()=>n(i)))
                        }
                    ))
                }
                async function Qr(t, e, n) {
                    const i = new WebSocket(t)
                        , r = function(t) {
                        return new Promise(((e,n)=>{
                                t.readyState === WebSocket.OPEN ? e(t) : (t.onerror = ()=>{
                                        t.onerror = null,
                                            t.onopen = null,
                                            n(new Error("connect failed"))
                                    }
                                        ,
                                        t.onopen = ()=>{
                                            t.onerror = null,
                                                t.onopen = null,
                                                e(t)
                                        }
                                )
                            }
                        ))
                    }(i);
                    try {
                        return await Promise.race([r, Xr(e, n)]),
                            i
                    } catch (uo) {
                        throw async function(t) {
                            try {
                                (await t).close()
                            } catch (e) {}
                        }(r),
                            uo
                    }
                }
                function Zr(t, e) {
                    return async function(t, e, n=1 / 0, i) {
                        const r = i ? Gr(i) : null;
                        for (let s = 0; s < e; s++)
                            try {
                                const e = r ? Promise.race([t(), r]) : t();
                                return await e
                            } catch (uo) {
                                if ("AbortError" === uo.name)
                                    throw uo;
                                if (s === e - 1)
                                    throw uo;
                                const r = 1e3 * Math.pow(2, s)
                                    , a = (o = .1 * r,
                                    Math.floor(Math.random() * Math.floor(o)));
                                await zr(Math.min(n, r + a), i)
                            }
                        var o;
                        throw new Error("retry failed")
                    }((()=>Qr(t, e.timeout, e.signal)), e.attempts, e.maxDelay, e.signal)
                }
                t("M", MultiMap);
                t("L", class StableSocket {
                        constructor(t, e, n) {
                            this.socket = null,
                                this.opening = null,
                                this.url = t,
                                this.delegate = e,
                                this.policy = n
                        }
                        async open() {
                            if (this.opening || this.socket)
                                return;
                            this.opening = new AbortController;
                            const t = Object.assign(Object.assign({}, this.policy), {
                                signal: this.opening.signal
                            });
                            try {
                                this.socket = await Zr(this.url, t)
                            } catch (e) {
                                return void this.delegate.socketDidFinish(this)
                            } finally {
                                this.opening = null
                            }
                            this.socket.onclose = t=>{
                                var e, n, i;
                                this.socket = null,
                                    this.delegate.socketDidClose(this, t.code, t.reason),
                                    (i = t.code) === Jr || i === to ? this.delegate.socketDidFinish(this) : setTimeout((()=>this.open()), (e = 100,
                                        n = 150,
                                    Math.random() * (n - e) + e))
                            }
                                ,
                                this.socket.onmessage = t=>{
                                    this.delegate.socketDidReceiveMessage(this, t.data)
                                }
                                ,
                                this.delegate.socketDidOpen(this)
                        }
                        close(t, e) {
                            this.opening ? (this.opening.abort(),
                                this.opening = null) : this.socket && (this.socket.onclose = null,
                                this.socket.close(t, e),
                                this.socket = null,
                                this.delegate.socketDidClose(this, t, e),
                                this.delegate.socketDidFinish(this))
                        }
                        send(t) {
                            this.socket && this.socket.send(t)
                        }
                        isOpen() {
                            return !!this.socket
                        }
                    }
                );
                const Jr = 1008
                    , to = 1011
                    , eo = new WeakSet;
                function no(t, e) {
                    return n = e,
                    !!eo.has(n) && (e(t),
                        !0);
                    var n
                }
                const io = new WeakMap;
                class EventHandler {
                    constructor(t, e) {
                        this.element = t,
                            this.type = e,
                            this.element.addEventListener(this.type, this),
                            io.get(this.element).set(this.type, this)
                    }
                    set(t) {
                        "function" == typeof t ? this.handleEvent = t.bind(this.element) : "object" == typeof t && "function" == typeof t.handleEvent ? this.handleEvent = t.handleEvent.bind(t) : (this.element.removeEventListener(this.type, this),
                            io.get(this.element).delete(this.type))
                    }
                    static for(t) {
                        io.has(t.element) || io.set(t.element, new Map);
                        const e = t.attributeName.slice(2)
                            , n = io.get(t.element);
                        return n.has(e) ? n.get(e) : new EventHandler(t.element,e)
                    }
                }
                function ro(t, e) {
                    if (!function(t) {
                        return "object" == typeof t && Symbol.iterator in t
                    }(e))
                        return !1;
                    if (t instanceof NodeTemplatePart) {
                        const n = [];
                        for (const t of e)
                            if (t instanceof TemplateResult$1) {
                                const e = document.createDocumentFragment();
                                t.renderInto(e),
                                    n.push(...e.childNodes)
                            } else
                                t instanceof DocumentFragment ? n.push(...t.childNodes) : n.push(String(t));
                        return n.length && t.replace(...n),
                            !0
                    }
                    return t.value = Array.from(e).join(" "),
                        !0
                }
                const oo = new WeakMap
                    , so = new WeakMap
                    , ao = new WeakMap;
                class TemplateResult$1 {
                    constructor(t, e, n) {
                        this.strings = t,
                            this.values = e,
                            this.processor = n
                    }
                    get template() {
                        if (oo.has(this.strings))
                            return oo.get(this.strings);
                        {
                            const t = document.createElement("template")
                                , e = this.strings.length - 1;
                            return t.innerHTML = this.strings.reduce(((t,n,i)=>t + n + (i < e ? `{{ ${i} }}` : "")), ""),
                                oo.set(this.strings, t),
                                t
                        }
                    }
                    renderInto(t) {
                        const e = this.template;
                        if (so.get(t) !== e) {
                            so.set(t, e);
                            const n = new TemplateInstance$1(e,this.values,this.processor);
                            return ao.set(t, n),
                                void (t instanceof NodeTemplatePart ? t.replace(...n.children) : t.appendChild(n))
                        }
                        ao.get(t).update(this.values)
                    }
                }
                const co = ar((function(t, e) {
                        no(t, e) || function(t, e) {
                            return "boolean" == typeof e && t instanceof AttributeTemplatePart && "boolean" == typeof t.element[t.attributeName] && (t.booleanValue = e,
                                !0)
                        }(t, e) || function(t, e) {
                            return !!(t instanceof AttributeTemplatePart && t.attributeName.startsWith("on")) && (EventHandler.for(t).set(e),
                                t.element.removeAttributeNS(t.attributeNamespace, t.attributeName),
                                !0)
                        }(t, e) || function(t, e) {
                            return e instanceof TemplateResult$1 && t instanceof NodeTemplatePart && (e.renderInto(t),
                                !0)
                        }(t, e) || function(t, e) {
                            return e instanceof DocumentFragment && t instanceof NodeTemplatePart && (e.childNodes.length && t.replace(...e.childNodes),
                                !0)
                        }(t, e) || ro(t, e) || cr(t, e)
                    }
                ));
                var lo, uo, ho, mo, fo = function(t, e) {
                    return {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        delta: 0,
                        entries: [],
                        id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                    }
                }, po = function(t, e) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var n = new PerformanceObserver((function(t) {
                                    return t.getEntries().map(e)
                                }
                            ));
                            return n.observe({
                                type: t,
                                buffered: !0
                            }),
                                n
                        }
                    } catch (t) {}
                }, go = !1, vo = function(t, e) {
                    go || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", (function() {}
                    )),
                        go = !0),
                        addEventListener("visibilitychange", (function n(i) {
                                "hidden" === document.visibilityState && (t(i),
                                e && removeEventListener("visibilitychange", n, !0))
                            }
                        ), !0)
                }, bo = function(t) {
                    addEventListener("pageshow", (function(e) {
                            e.persisted && t(e)
                        }
                    ), !0)
                }, Eo = "function" == typeof WeakSet ? new WeakSet : new Set, wo = function(t, e, n) {
                    var i;
                    return function() {
                        e.value >= 0 && (n || Eo.has(e) || "hidden" === document.visibilityState) && (e.delta = e.value - (i || 0),
                        (e.delta || void 0 === i) && (i = e.value,
                            t(e)))
                    }
                }, yo = (t("P", (function(t, e) {
                        var n, i = fo("CLS", 0), r = function(t) {
                            t.hadRecentInput || (i.value += t.value,
                                i.entries.push(t),
                                n())
                        }, o = po("layout-shift", r);
                        o && (n = wo(t, i, e),
                            vo((function() {
                                    o.takeRecords().map(r),
                                        n()
                                }
                            )),
                            bo((function() {
                                    i = fo("CLS", 0),
                                        n = wo(t, i, e)
                                }
                            )))
                    }
                )),
                    -1), xo = function() {
                    return "hidden" === document.visibilityState ? 0 : 1 / 0
                }, ko = function() {
                    vo((function(t) {
                            var e = t.timeStamp;
                            yo = e
                        }
                    ), !0)
                }, Ao = function() {
                    return yo < 0 && (yo = xo(),
                        ko(),
                        bo((function() {
                                setTimeout((function() {
                                        yo = xo(),
                                            ko()
                                    }
                                ), 0)
                            }
                        ))),
                        {
                            get timeStamp() {
                                return yo
                            }
                        }
                }, To = (t("Q", (function(t, e) {
                        var n, i = Ao(), r = fo("FCP"), o = po("paint", (function(t) {
                                "first-contentful-paint" === t.name && (o && o.disconnect(),
                                t.startTime < i.timeStamp && (r.value = t.startTime,
                                    r.entries.push(t),
                                    Eo.add(r),
                                    n()))
                            }
                        ));
                        o && (n = wo(t, r, e),
                            bo((function(i) {
                                    r = fo("FCP"),
                                        n = wo(t, r, e),
                                        requestAnimationFrame((function() {
                                                requestAnimationFrame((function() {
                                                        r.value = performance.now() - i.timeStamp,
                                                            Eo.add(r),
                                                            n()
                                                    }
                                                ))
                                            }
                                        ))
                                }
                            )))
                    }
                )),
                    {
                        passive: !0,
                        capture: !0
                    }), Lo = new Date, Mo = function(t, e) {
                    lo || (lo = e,
                        uo = t,
                        ho = new Date,
                        No(removeEventListener),
                        So())
                }, So = function() {
                    if (uo >= 0 && uo < ho - Lo) {
                        var t = {
                            entryType: "first-input",
                            name: lo.type,
                            target: lo.target,
                            cancelable: lo.cancelable,
                            startTime: lo.timeStamp,
                            processingStart: lo.timeStamp + uo
                        };
                        mo.forEach((function(e) {
                                e(t)
                            }
                        )),
                            mo = []
                    }
                }, Co = function(t) {
                    if (t.cancelable) {
                        var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                        "pointerdown" == t.type ? function(t, e) {
                            var n = function() {
                                Mo(t, e),
                                    r()
                            }
                                , i = function() {
                                r()
                            }
                                , r = function() {
                                removeEventListener("pointerup", n, To),
                                    removeEventListener("pointercancel", i, To)
                            };
                            addEventListener("pointerup", n, To),
                                addEventListener("pointercancel", i, To)
                        }(e, t) : Mo(e, t)
                    }
                }, No = function(t) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                            return t(e, Co, To)
                        }
                    ))
                };
                t("U", (function(t, e) {
                        var n, i = Ao(), r = fo("FID"), o = function(t) {
                            t.startTime < i.timeStamp && (r.value = t.processingStart - t.startTime,
                                r.entries.push(t),
                                Eo.add(r),
                                n())
                        }, s = po("first-input", o);
                        n = wo(t, r, e),
                        s && vo((function() {
                                s.takeRecords().map(o),
                                    s.disconnect()
                            }
                        ), !0),
                        s && bo((function() {
                                var i;
                                r = fo("FID"),
                                    n = wo(t, r, e),
                                    mo = [],
                                    uo = -1,
                                    lo = null,
                                    No(addEventListener),
                                    i = o,
                                    mo.push(i),
                                    So()
                            }
                        ))
                    }
                )),
                    t("V", (function(t, e) {
                            var n, i = Ao(), r = fo("LCP"), o = function(t) {
                                var e = t.startTime;
                                e < i.timeStamp && (r.value = e,
                                    r.entries.push(t)),
                                    n()
                            }, s = po("largest-contentful-paint", o);
                            if (s) {
                                n = wo(t, r, e);
                                var a = function() {
                                    Eo.has(r) || (s.takeRecords().map(o),
                                        s.disconnect(),
                                        Eo.add(r),
                                        n())
                                };
                                ["keydown", "click"].forEach((function(t) {
                                        addEventListener(t, a, {
                                            once: !0,
                                            capture: !0
                                        })
                                    }
                                )),
                                    vo(a, !0),
                                    bo((function(i) {
                                            r = fo("LCP"),
                                                n = wo(t, r, e),
                                                requestAnimationFrame((function() {
                                                        requestAnimationFrame((function() {
                                                                r.value = performance.now() - i.timeStamp,
                                                                    Eo.add(r),
                                                                    n()
                                                            }
                                                        ))
                                                    }
                                                ))
                                        }
                                    ))
                            }
                        }
                    )),
                    t("W", (function(t) {
                            var e, n = fo("TTFB");
                            e = function() {
                                try {
                                    var e = performance.getEntriesByType("navigation")[0] || function() {
                                        var t = performance.timing
                                            , e = {
                                            entryType: "navigation",
                                            startTime: 0
                                        };
                                        for (var n in t)
                                            "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                                        return e
                                    }();
                                    n.value = n.delta = e.responseStart,
                                        n.entries = [e],
                                        t(n)
                                } catch (t) {}
                            }
                                ,
                                "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
                        }
                    )),
                    t("Z", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});
                t("a3", n((t=>e=>{
                        if (void 0 === t && e instanceof AttributePart) {
                            if (t !== e.value) {
                                const t = e.committer.name;
                                e.committer.element.removeAttribute(t)
                            }
                        } else
                            e.setValue(t)
                    }
                )));
                /**
                 * @license
                 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                 * This code may only be used under the BSD style license found at
                 * http://polymer.github.io/LICENSE.txt
                 * The complete set of authors may be found at
                 * http://polymer.github.io/AUTHORS.txt
                 * The complete set of contributors may be found at
                 * http://polymer.github.io/CONTRIBUTORS.txt
                 * Code distributed by Google as part of the polymer project is also
                 * subject to an additional IP rights grant found at
                 * http://polymer.github.io/PATENTS.txt
                 */
                const Io = (t,e)=>{
                    const n = t.startNode.parentNode
                        , i = void 0 === e ? t.endNode : e.startNode
                        , r = n.insertBefore(f(), i);
                    n.insertBefore(f(), i);
                    const o = new NodePart(t.options);
                    return o.insertAfterNode(r),
                        o
                }
                    , Do = (t,e)=>(t.setValue(e),
                    t.commit(),
                    t)
                    , Ho = (t,e,n)=>{
                    const i = t.startNode.parentNode
                        , r = n ? n.startNode : t.endNode
                        , o = e.endNode.nextSibling;
                    o !== r && ((t,e,n=null,i=null)=>{
                            for (; e !== n; ) {
                                const n = e.nextSibling;
                                t.insertBefore(e, i),
                                    e = n
                            }
                        }
                    )(i, e.startNode, o, r)
                }
                    , Po = t=>{
                    o(t.startNode.parentNode, t.startNode, t.endNode.nextSibling)
                }
                    , Ro = (t,e,n)=>{
                    const i = new Map;
                    for (let r = e; r <= n; r++)
                        i.set(t[r], r);
                    return i
                }
                    , _o = new WeakMap
                    , qo = new WeakMap;
                t("a4", n(((t,e,n)=>{
                        let i;
                        return void 0 === n ? n = e : void 0 !== e && (i = e),
                            e=>{
                                if (!(e instanceof NodePart))
                                    throw new Error("repeat can only be used in text bindings");
                                const r = _o.get(e) || []
                                    , o = qo.get(e) || []
                                    , s = []
                                    , a = []
                                    , c = [];
                                let l, u, d = 0;
                                for (const g of t)
                                    c[d] = i ? i(g, d) : d,
                                        a[d] = n(g, d),
                                        d++;
                                let h = 0
                                    , m = r.length - 1
                                    , f = 0
                                    , p = a.length - 1;
                                for (; h <= m && f <= p; )
                                    if (null === r[h])
                                        h++;
                                    else if (null === r[m])
                                        m--;
                                    else if (o[h] === c[f])
                                        s[f] = Do(r[h], a[f]),
                                            h++,
                                            f++;
                                    else if (o[m] === c[p])
                                        s[p] = Do(r[m], a[p]),
                                            m--,
                                            p--;
                                    else if (o[h] === c[p])
                                        s[p] = Do(r[h], a[p]),
                                            Ho(e, r[h], s[p + 1]),
                                            h++,
                                            p--;
                                    else if (o[m] === c[f])
                                        s[f] = Do(r[m], a[f]),
                                            Ho(e, r[m], r[h]),
                                            m--,
                                            f++;
                                    else if (void 0 === l && (l = Ro(c, f, p),
                                        u = Ro(o, h, m)),
                                        l.has(o[h]))
                                        if (l.has(o[m])) {
                                            const t = u.get(c[f])
                                                , n = void 0 !== t ? r[t] : null;
                                            if (null === n) {
                                                const t = Io(e, r[h]);
                                                Do(t, a[f]),
                                                    s[f] = t
                                            } else
                                                s[f] = Do(n, a[f]),
                                                    Ho(e, n, r[h]),
                                                    r[t] = null;
                                            f++
                                        } else
                                            Po(r[m]),
                                                m--;
                                    else
                                        Po(r[h]),
                                            h++;
                                for (; f <= p; ) {
                                    const t = Io(e, s[p + 1]);
                                    Do(t, a[f]),
                                        s[f++] = t
                                }
                                for (; h <= m; ) {
                                    const t = r[h++];
                                    null !== t && Po(t)
                                }
                                _o.set(e, s),
                                    qo.set(e, c)
                            }
                    }
                )))
            }
        }
    }
));
//# sourceMappingURL=chunk-vendor-0c169881.js.map

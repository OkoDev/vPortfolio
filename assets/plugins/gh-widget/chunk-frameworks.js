System.register(["./chunk-vendor.js"], (function(t) {
        "use strict";
        var e, n, o, i, s, r, c, a, l, u, f;
        return {
            setters: [function(t) {
                e = t.S,
                    n = t.f,
                    o = t.o,
                    i = t.D,
                    s = t.a,
                    r = t.r,
                    c = t.T,
                    a = t._,
                    l = t.t,
                    u = t.c,
                    f = t.h
            }
            ],
            execute: function() {
                function d(...t) {
                    return JSON.stringify(t, ((t,e)=>"object" == typeof e ? e : String(e)))
                }
                function m(t, e={}) {
                    const {hash: n=d, cache: o=new Map} = e;
                    return function(...e) {
                        const i = n.apply(this, e);
                        if (o.has(i))
                            return o.get(i);
                        let s = t.apply(this, e);
                        return s instanceof Promise && (s = s.catch((t=>{
                                throw o.delete(i),
                                    t
                            }
                        ))),
                            o.set(i, s),
                            s
                    }
                }
                t({
                    $: R,
                    A: function(t, e) {
                        e.appendChild(t.extractContents()),
                            t.insertNode(e)
                    },
                    C: ne,
                    D: function(t, e) {
                        const [n,o] = Te(t.start, !0, e)
                            , [i,s] = Te(t.end, !1, e);
                        if (!n || !i)
                            return;
                        let r = o
                            , c = s;
                        -1 === r && (r = 0);
                        -1 === c && (c = i.childNodes.length);
                        if (!n.ownerDocument)
                            throw new Error("DOMRange needs to be inside document");
                        const a = n.ownerDocument.createRange();
                        return a.setStart(n, r),
                            a.setEnd(i, c),
                            a
                    },
                    E: function() {
                        let t = "";
                        const e = Oe("_octo")
                            , n = [];
                        for (const o of e) {
                            const e = o.value.split(".");
                            if ("GH1" === e.shift() && e.length > 1) {
                                const o = (e.shift() || "").split("-");
                                1 === o.length && (o[1] = "1");
                                const i = [Number(o[0]), Number(o[1])];
                                t = e.join("."),
                                    n.push([i, t])
                            }
                        }
                        t = "",
                        n.length > 0 && (t = String(n.sort().reverse()[0][1]));
                        return t
                    },
                    F: function() {
                        const t = (new Date).getTime()
                            , e = `${Math.round(Math.random() * (Math.pow(2, 31) - 1))}.${Math.round(t / 1e3)}`
                            , n = "GH1.1." + e
                            , o = new Date(t + 31536e6).toUTCString();
                        return _e("_octo", n, o),
                            e
                    },
                    H: A,
                    I: async function(t, e, n=!1) {
                        const o = X.get(t);
                        null == o || o.abort();
                        const i = t.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                        !n && i && i === t && (z[i.getAttribute("data-url")] = e);
                        return W(t, e)
                    },
                    J: function(t, e) {
                        const n = t.selectionEnd || 0
                            , o = t.value.substring(0, n)
                            , i = t.value.substring(n)
                            , s = "" === t.value || o.match(/\n$/) ? "" : "\n";
                        t.value = o + s + e + i,
                            t.selectionStart = n + e.length,
                            t.selectionEnd = n + e.length,
                            t.dispatchEvent(new CustomEvent("change",{
                                bubbles: !0,
                                cancelable: !1
                            })),
                            t.focus()
                    },
                    K: function(t, e, n) {
                        let o = t.value.substring(0, t.selectionEnd || 0)
                            , i = t.value.substring(t.selectionEnd || 0);
                        o = o.replace(e, n),
                            i = i.replace(e, n),
                            t.value = o + i,
                            t.selectionStart = o.length,
                            t.selectionEnd = o.length,
                            t.dispatchEvent(new CustomEvent("change",{
                                bubbles: !0,
                                cancelable: !1
                            }))
                    },
                    L: b,
                    M: St,
                    N: function(t, e, n) {
                        return [...Pe(t, (t=>{
                                const n = e(t);
                                return null != n ? [t, n] : null
                            }
                        ))].sort(((t,e)=>n(t[1], e[1]))).map((([t])=>t))
                    },
                    O: function(t, e) {
                        return t.score > e.score ? -1 : t.score < e.score ? 1 : t.text < e.text ? -1 : t.text > e.text ? 1 : 0
                    },
                    P: async function() {
                        await async function() {
                            const t = document.querySelector("link[rel=sso-session]")
                                , e = document.querySelector("meta[name=sso-expires-around]");
                            if (!(t instanceof HTMLLinkElement))
                                return !0;
                            if (!function(t) {
                                if (!(t instanceof HTMLMetaElement))
                                    return !0;
                                const e = parseInt(t.content);
                                return (new Date).getTime() / 1e3 > e
                            }(e))
                                return !0;
                            const n = t.href
                                , o = await fetch(n, {
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            });
                            return await o.json()
                        }() || (Ve || (Ve = async function() {
                            const t = document.querySelector("link[rel=sso-modal]")
                                , e = await S({
                                content: y(document, t.href),
                                dialogClass: "sso-modal"
                            });
                            let n = null;
                            const o = window.external;
                            if (o.ssoComplete = function(t) {
                                t.error ? (n = !1,
                                    Ne(n)) : (n = !0,
                                    Ne(n),
                                    function(t) {
                                        const e = document.querySelector("meta[name=sso-expires-around]");
                                        e && e.setAttribute("content", t)
                                    }(t.expiresAround),
                                    window.focus()),
                                    o.ssoComplete = null
                            }
                                ,
                                await function(t) {
                                    return new Promise((e=>{
                                            t.addEventListener("dialog:remove", e, {
                                                once: !0
                                            })
                                        }
                                    ))
                                }(e),
                                !n)
                                throw new Error("sso prompt canceled")
                        }().then(Xe).catch(Xe)),
                            await Ve)
                    },
                    Q: function(t, e) {
                        t.removeEventListener("keydown", Vt),
                            t.removeEventListener("keyup", Xt),
                            t.removeEventListener("input", zt);
                        const n = Pt.get(t);
                        n && (null != n.timer && n.listener === e && clearTimeout(n.timer),
                            Pt.delete(t))
                    },
                    R: function(t, e) {
                        let n = Ie(t, e);
                        if (n && -1 === e.indexOf("/")) {
                            const o = t.substring(t.lastIndexOf("/") + 1);
                            n += Ie(o, e)
                        }
                        return n
                    },
                    S: an,
                    T: function(t) {
                        const e = Kt(t);
                        e && cn(e)
                    },
                    U: Oe,
                    V: function(t, e=!1) {
                        let n = document.domain;
                        if (null == n)
                            throw new Error("Unable to get document domain");
                        n.endsWith(".github.com") && (n = "github.com");
                        const o = (new Date).getTime()
                            , i = new Date(o - 1).toUTCString()
                            , s = "https:" === location.protocol ? "; secure" : ""
                            , r = "; expires=" + i;
                        !1 === e && (n = "." + n);
                        try {
                            document.cookie = `${t}=''; path=/; domain=${n}${r}${s}`
                        } catch (c) {}
                    },
                    X: $e,
                    Y: un,
                    Z: ln,
                    _: function(t) {
                        const e = t.match(pn);
                        if (e)
                            return void yn(vn(e[1], e[2]));
                        let n, o;
                        for (let i = 0, s = gn.length; i < s; i++) {
                            const [e,o] = gn[i];
                            if (n = t.match(o),
                                n) {
                                let t = null
                                    , o = null;
                                switch (e) {
                                    case "organization":
                                        t = n[1],
                                            o = n[2];
                                        break;
                                    case "repository":
                                        t = `${n[1]}/${n[2]}`,
                                            o = n[3]
                                }
                                return void (t && o && yn(wn(t, o)))
                            }
                        }
                        for (let i = 0, s = hn.length; i < s; i++)
                            if (o = t.match(hn[i]),
                                o)
                                return void yn(bn(o[1], o[2]))
                    },
                    a: y,
                    a$: xt,
                    a0: function() {
                        const t = kt[Ht() - 1];
                        if (t)
                            return t.url
                    },
                    a1: function() {
                        const t = kt[Ht() + 1];
                        if (t)
                            return t.url
                    },
                    a3: function(t, e) {
                        Qt.set(t, e),
                            n = e,
                            n.catch((()=>{}
                            ));
                        var n
                    },
                    a4: ae,
                    a5: function() {
                        return `${window.location.protocol}//${window.location.host}${function() {
                            const t = jn("meta[name=analytics-location]");
                            return t ? t.content : window.location.pathname
                        }() + function() {
                            const t = jn("meta[name=analytics-location-query-strip]");
                            let e = "";
                            t || (e = window.location.search);
                            const n = jn("meta[name=analytics-location-params]");
                            n && (e += (e ? "&" : "?") + n.content);
                            for (const o of document.querySelectorAll("meta[name=analytics-param-rename]")) {
                                const t = o.content.split(":", 2);
                                e = e.replace(new RegExp(`(^|[?&])${t[0]}($|=)`,"g"), `$1${t[1]}$2`)
                            }
                            return e
                        }()}`
                    },
                    a6: te,
                    a7: k,
                    a8: T,
                    a9: function(t) {
                        return Sn.get(t)
                    },
                    aA: Lo,
                    aB: Oo,
                    aC: _o,
                    aD: function(t, e) {
                        for (const n in e) {
                            const o = e[n]
                                , i = t.elements.namedItem(n);
                            (i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement) && (i.value = o)
                        }
                    },
                    aE: Mt,
                    aF: cn,
                    aG: $o,
                    aH: Io,
                    aI: Bo,
                    aJ: function() {
                        window.history.replaceState(null, "", "#"),
                            Qo()
                    },
                    aK: function() {
                        return No
                    },
                    aL: ct,
                    aM: Po,
                    aN: async function(t) {
                        return Sn.get(t) || kn(await function(t, e) {
                            return new Promise((n=>{
                                    t.addEventListener(e, n, {
                                        once: !0
                                    })
                                }
                            ))
                        }(t, "codeEditor:ready"))
                    },
                    aO: function(t, e) {
                        return async function n(o) {
                            const i = await self.fetch(g(t, e));
                            if (h(i, new ResponseError$1(i)),
                            200 === i.status)
                                return i;
                            if (202 === i.status)
                                return await new Promise((t=>setTimeout(t, o))),
                                    n(1.5 * o);
                            throw new ResponseError$1(i)
                        }(1e3)
                    },
                    aP: function(t) {
                        Lo(t),
                            jo(t);
                        const e = xo.pop();
                        e && Eo(e)
                    },
                    aQ: function(t) {
                        const e = Mo();
                        e && xo.push(e);
                        Eo(t)
                    },
                    aR: jo,
                    aS: Ot,
                    aT: function(t) {
                        const e = t.getBoundingClientRect();
                        return {
                            top: e.top + window.pageYOffset,
                            left: e.left + window.pageXOffset
                        }
                    },
                    aU: D,
                    aV: N,
                    aW: function(t, e) {
                        jo(t),
                            Ao(t, e)
                    },
                    aX: function(t) {
                        const e = t.getAttribute("data-hydro-click-payload") || ""
                            , n = t.getAttribute("data-hydro-click-hmac") || ""
                            , o = t.getAttribute("data-hydro-client-context") || "";
                        ln(e, n, o)
                    },
                    aY: function t(e, n) {
                        const o = e.nextElementSibling;
                        if (o instanceof HTMLElement)
                            return o.classList.contains(n) ? o : t(o, n);
                        return null
                    },
                    aZ: function() {
                        return new Promise(window.requestAnimationFrame)
                    },
                    a_: Jn,
                    aa: Mn,
                    ab: function(t) {
                        try {
                            sessionStorage.removeItem(t)
                        } catch (e) {}
                    },
                    ac: function(t) {
                        try {
                            return sessionStorage.getItem(t)
                        } catch (e) {
                            return null
                        }
                    },
                    ad: function(t, e) {
                        try {
                            sessionStorage.setItem(t, e)
                        } catch (n) {}
                    },
                    ae: function(t, e) {
                        const n = t.closest("[data-notification-id]");
                        e.hasAttribute("data-status") && function(t, e) {
                            t.classList.toggle("notification-archived", "archived" === e),
                                t.classList.toggle("notification-unread", "unread" === e),
                                t.classList.toggle("notification-read", "read" === e)
                        }(n, e.getAttribute("data-status"));
                        e.hasAttribute("data-subscription-status") && function(t, e) {
                            t.classList.toggle("notification-unsubscribed", "unsubscribed" === e)
                        }(n, e.getAttribute("data-subscription-status"));
                        e.hasAttribute("data-starred-status") && function(t, e) {
                            t.classList.toggle("notification-starred", "starred" === e)
                        }(n, e.getAttribute("data-starred-status"))
                    },
                    af: Kt,
                    ag: async function(t, e, n=1 / 0, o) {
                        const i = o ? It(o) : null;
                        for (let r = 0; r < e; r++)
                            try {
                                const e = i ? Promise.race([t(), i]) : t();
                                return await e
                            } catch (qn) {
                                if ("AbortError" === qn.name)
                                    throw qn;
                                if (r === e - 1)
                                    throw qn;
                                const i = 1e3 * Math.pow(2, r)
                                    , c = (s = .1 * i,
                                    Math.floor(Math.random() * Math.floor(s)));
                                await $t(Math.min(n, i + c), o)
                            }
                        var s;
                        throw new Error("retry failed")
                    },
                    ah: function*(t, e) {
                        for (let n = 0; n < t.length; n += e)
                            yield t.slice(n, n + e)
                    },
                    ai: function(t) {
                        const e = [];
                        return function(n) {
                            e.push(n),
                            1 === e.length && queueMicrotask((()=>{
                                    const n = [...e];
                                    e.length = 0,
                                        t(n)
                                }
                            ))
                        }
                    },
                    aj: async function() {
                        const t = await fetch("/sessions/in_sudo", {
                            headers: {
                                accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (t.ok) {
                            return "true" === await t.text() || Kn()
                        }
                        return Kn()
                    },
                    ak: V,
                    al: function(t) {
                        const e = t.getAttribute("data-details-container") || ".js-details-container"
                            , n = t.closest(e).classList;
                        return n.contains("Details--on") || n.contains("open")
                    },
                    am: st,
                    an: function() {
                        if ("Intl"in window)
                            try {
                                return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
                            } catch (t) {}
                    },
                    ao: _e,
                    ap: zn,
                    aq: async function(t) {
                        return function(t) {
                            const e = t;
                            return e.clientExtensionResults = t.getClientExtensionResults(),
                                Rn(Hn, Xn, e)
                        }(await navigator.credentials.get(function(t) {
                            return Rn(qn, Vn, t)
                        }(t)))
                    },
                    as: Yt,
                    at: Jt,
                    au: De,
                    av: function(t) {
                        const e = t.querySelectorAll(".js-characters-remaining-container");
                        for (const n of e) {
                            De(n.querySelector(".js-characters-remaining-field"))
                        }
                    },
                    aw: He,
                    ax: function(t) {
                        const e = Pt.get(t);
                        e && e.listener.call(null, t)
                    },
                    ay: Ao,
                    az: Eo,
                    b: O,
                    b0: Wn,
                    b1: async function() {
                        var t;
                        if (await (null === (t = window.PublicKeyCredential) || void 0 === t ? void 0 : t.isUserVerifyingPlatformAuthenticatorAvailable()))
                            return "supported";
                        return "unsupported"
                    },
                    b2: async function(t) {
                        return function(t) {
                            const e = t;
                            return e.clientExtensionResults = t.getClientExtensionResults(),
                                Rn(Hn, Nn, e)
                        }(await navigator.credentials.create(function(t) {
                            return Rn(qn, Pn, t)
                        }(t)))
                    },
                    b3: $t,
                    b4: An,
                    b5: vn,
                    b6: bn,
                    b7: wn,
                    b8: function(t, e, n) {
                        if (e) {
                            const o = t.innerHTML.trim().match(n || function(t) {
                                const e = t.toLowerCase().split("");
                                let n = "";
                                for (let o = 0; o < e.length; o++) {
                                    const t = e[o].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                                    n += 0 === o ? `(.*)(${t})` : `([^${t}]*?)(${t})`
                                }
                                return new RegExp(n + "(.*?)$","i")
                            }(e));
                            if (!o)
                                return;
                            let i = !1;
                            const s = [];
                            for (let t = 1; t < o.length; ++t) {
                                const e = o[t];
                                e && (t % 2 == 0 ? i || (s.push("<mark>"),
                                    i = !0) : i && (s.push("</mark>"),
                                    i = !1),
                                    s.push(e))
                            }
                            t.innerHTML = s.join("")
                        } else {
                            const e = t.innerHTML.trim()
                                , n = e.replace(/<\/?mark>/g, "");
                            e !== n && (t.innerHTML = n)
                        }
                    },
                    b9: mn,
                    ba: function(t) {
                        const e = Re(t)
                            , n = He(t.value);
                        return e - n < 0
                    },
                    c: M,
                    d: S,
                    e: function(t, e) {
                        if ("boolean" == typeof e) {
                            if (!(t instanceof HTMLInputElement))
                                throw new TypeError("only checkboxes can be set to boolean value");
                            t.checked = e
                        } else {
                            if ("checkbox" === t.type)
                                throw new TypeError("checkbox can't be set to string value");
                            t.value = e
                        }
                        q(t, "change", !1)
                    },
                    f: v,
                    g: function(t) {
                        St(function(t) {
                            return (t.getAttribute("aria-label") || t.innerText || "").trim()
                        }(t))
                    },
                    h: rt,
                    i: function(t) {
                        return new URLSearchParams(new FormData(t)).toString()
                    },
                    j: _t,
                    k: function() {
                        return Promise.resolve()
                    },
                    l: je,
                    m: m,
                    n: function(t, e, n={
                        wait: null
                    }) {
                        Pt.set(t, {
                            keypressed: !1,
                            inputed: !1,
                            timer: void 0,
                            listener: e,
                            wait: null != n.wait ? n.wait : 100
                        }),
                            t.addEventListener("keydown", Vt),
                            t.addEventListener("keyup", Xt),
                            t.addEventListener("input", zt)
                    },
                    o: x,
                    p: p,
                    q: function() {
                        return se
                    },
                    r: H,
                    s: C,
                    t: j,
                    u: async function(t) {
                        if (X.get(t))
                            return;
                        const e = t.hasAttribute("data-retain-focus")
                            , n = t.getAttribute("data-url")
                            , o = new AbortController;
                        X.set(t, o);
                        try {
                            const i = await fetch(n, {
                                signal: o.signal,
                                headers: {
                                    Accept: "text/html",
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            });
                            if (!i.ok)
                                return;
                            const s = await i.text();
                            return D(t, e) ? void console.warn("Failed to update content with interactions", t) : (z[n] = s,
                                W(t, s, e))
                        } catch (i) {} finally {
                            X.delete(t)
                        }
                    },
                    v: ft,
                    w: Y,
                    x: function(t) {
                        const e = Se(t)
                            , n = function(t) {
                            const e = t.match(/(file-.+?-)L\d+?/i);
                            return e ? e[1] : ""
                        }(t);
                        return {
                            blobRange: e,
                            anchorPrefix: n
                        }
                    },
                    y: Se,
                    z: function({anchorPrefix: t, blobRange: e}) {
                        return e ? `#${t}${function(t) {
                            const {start: e, end: n} = Me(t);
                            return null != e.column && null != n.column ? `L${e.line}C${e.column}-L${n.line}C${n.column}` : e.line === n.line ? "L" + e.line : `L${e.line}-L${n.line}`
                        }(e)}` : "#"
                    }
                });
                class ResponseError extends Error {
                    constructor(t, e) {
                        super(`${t} for HTTP ${e.status}`),
                            this.response = e
                    }
                }
                function p(t, e) {
                    const n = t.createElement("template");
                    return n.innerHTML = e,
                        t.importNode(n.content, !0)
                }
                class ResponseError$1 extends Error {
                    constructor(t) {
                        super(),
                            this.response = t,
                            this.framesToPop = 1
                    }
                }
                function h(t, e) {
                    if (t.status >= 200 && t.status < 300)
                        return t;
                    {
                        const n = t.statusText ? " " + t.statusText : "";
                        throw e.message = `HTTP ${t.status}${n}`,
                            e
                    }
                }
                function g(t, e) {
                    const n = e ? Object.assign({}, e) : {}
                        , o = new Request(t,n);
                    return o.headers.append("X-Requested-With", "XMLHttpRequest"),
                        o
                }
                async function y(t, e, n) {
                    const o = await self.fetch(g(e, n));
                    return h(o, new ResponseError$1(o)),
                        function(t, e) {
                            const n = e.headers.get("content-type") || "";
                            if (!n.startsWith("text/html"))
                                throw new ResponseError("expected response with text/html, but was " + n,e);
                            const o = e.headers.get("x-html-safe");
                            if (!o)
                                throw new ResponseError("missing X-HTML-Safe nonce",e);
                            if (!t.includes(o))
                                throw new ResponseError("response X-HTML-Safe nonce did not match",e)
                        }(function(t) {
                            const e = [...t.querySelectorAll("meta[name=html-safe-nonce]")].map((t=>t.content));
                            if (e.length < 1)
                                throw new Error("could not find html-safe-nonce on document");
                            return e
                        }(t), o),
                        p(t, await o.text())
                }
                class Subscription {
                    constructor(t) {
                        this.closed = !1,
                            this.unsubscribe = ()=>{
                                t(),
                                    this.closed = !0
                            }
                    }
                }
                function v(t, e, n, o={
                    capture: !1
                }) {
                    return t.addEventListener(e, n, o),
                        new Subscription((()=>{
                                t.removeEventListener(e, n, o)
                            }
                        ))
                }
                function b(...t) {
                    return new Subscription((()=>{
                            for (const e of t)
                                e.unsubscribe()
                        }
                    ))
                }
                let w = !1;
                const E = new e;
                function L(t) {
                    const e = t.target;
                    if (e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE)
                        for (const n of E.matches(e))
                            n.data.call(null, e)
                }
                function x(t, e) {
                    w || (w = !0,
                        document.addEventListener("focus", L, !0)),
                        E.add(t, e),
                    document.activeElement instanceof HTMLElement && document.activeElement.matches(t) && e(document.activeElement)
                }
                function A(t, e, n) {
                    function o(e) {
                        const i = e.currentTarget;
                        i && (i.removeEventListener(t, n),
                            i.removeEventListener("blur", o))
                    }
                    x(e, (function(e) {
                            e.addEventListener(t, n),
                                e.addEventListener("blur", o)
                        }
                    ))
                }
                function j(t, e) {
                    function n(t) {
                        const {currentTarget: o} = t;
                        o && (o.removeEventListener("input", e),
                            o.removeEventListener("blur", n))
                    }
                    x(t, (function(t) {
                            t.addEventListener("input", e),
                                t.addEventListener("blur", n)
                        }
                    ))
                }
                async function S(t) {
                    const e = document.querySelector("#site-details-dialog").content.cloneNode(!0)
                        , o = e.querySelector("details")
                        , i = o.querySelector("details-dialog")
                        , s = o.querySelector(".js-details-dialog-spinner");
                    t.detailsClass && o.classList.add(...t.detailsClass.split(" ")),
                    t.dialogClass && i.classList.add(...t.dialogClass.split(" ")),
                        document.body.append(e);
                    const r = await t.content;
                    return s.remove(),
                        i.prepend(r),
                        o.addEventListener("toggle", (()=>{
                                o.hasAttribute("open") || (n(i, "dialog:remove"),
                                    o.remove())
                            }
                        )),
                        i
                }
                function k(t) {
                    const e = t.closest("form");
                    if (!(e instanceof HTMLFormElement))
                        return;
                    let n = T(e);
                    if (t.name) {
                        const o = t.matches("input[type=submit]") ? "Submit" : ""
                            , i = t.value || o;
                        n || (n = document.createElement("input"),
                            n.type = "hidden",
                            n.classList.add("is-submit-button-value"),
                            e.prepend(n)),
                            n.name = t.name,
                            n.value = i
                    } else
                        n && n.remove()
                }
                function T(t) {
                    const e = t.querySelector("input.is-submit-button-value");
                    return e instanceof HTMLInputElement ? e : null
                }
                function C() {
                    const t = document.getElementById("ajax-error-message");
                    t && (t.hidden = !1)
                }
                function M() {
                    const t = document.getElementById("ajax-error-message");
                    t && (t.hidden = !0)
                }
                function q(t, e, n) {
                    return t.dispatchEvent(new CustomEvent(e,{
                        bubbles: !0,
                        cancelable: n
                    }))
                }
                function H(t, e) {
                    e && (!function(t, e) {
                        if (!(t instanceof HTMLFormElement))
                            throw new TypeError("The specified element is not of type HTMLFormElement.");
                        if (!(e instanceof HTMLElement))
                            throw new TypeError("The specified element is not of type HTMLElement.");
                        if ("submit" !== e.type)
                            throw new TypeError("The specified element is not a submit button.");
                        if (!t || t !== e.form)
                            throw new Error("The specified element is not owned by the form element.")
                    }(t, e),
                        k(e)),
                    q(t, "submit", !0) && t.submit()
                }
                function R(t) {
                    if (!(t instanceof HTMLElement))
                        return !1;
                    const e = t.nodeName.toLowerCase()
                        , n = (t.getAttribute("type") || "").toLowerCase();
                    return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
                }
                function D(t, e=!1) {
                    return O(t) || function(t, e) {
                        const n = function(t) {
                            if ($instanceof Element)
                            return $;
                            if (t && t.ownerDocument && t.ownerDocument.activeElement)
                                return t.ownerDocument.activeElement;
                            return null
                        }(t);
                        if (null === n)
                            return !1;
                        if (e && n === t)
                            return !1;
                        if (n === t && R(n))
                            return !0;
                        if (t.contains(n) && !function(t) {
                            if (t instanceof i)
                                return !0;
                            if (!(I instanceof Element))
                                return !1;
                            const e = t.closest(P);
                            if (!e)
                                return !1;
                            const n = I.closest(P);
                            return e === n
                        }(n))
                            return !0;
                        return I instanceof Element && t.contains(I) && !!I.closest("details[open] > summary")
                    }(t, e) || function(t) {
                        return t.matches(":active")
                    }(t) || function(t) {
                        return !(!t.closest(".is-dirty") && !t.querySelector(".is-dirty"))
                    }(t)
                }
                function O(t) {
                    for (const e of t.querySelectorAll("input, textarea"))
                        if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && _(e))
                            return !0;
                    return !1
                }
                function _(t) {
                    if (t instanceof HTMLInputElement && ("checkbox" === t.type || "radio" === t.type)) {
                        if (t.checked !== t.defaultChecked)
                            return !0
                    } else if (t.value !== t.defaultValue)
                        return !0;
                    return !1
                }
                let$, I;
                o("deprecatedAjaxError", "[data-remote]", (function(t) {
                        const e = t.detail
                            , {error: n, text: o} = e;
                        t.currentTarget === t.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (C(),
                            t.stopImmediatePropagation()) : setTimeout((function() {
                                t.defaultPrevented || C()
                            }
                        ), 0))
                    }
                )),
                    o("deprecatedAjaxSend", "[data-remote]", (function() {
                            M()
                        }
                    )),
                    o("click", ".js-ajax-error-dismiss", (function() {
                            M()
                        }
                    )),
                    o("click", ".js-remote-submit-button", (async function(t) {
                            const e = t.currentTarget.form;
                            let n;
                            t.preventDefault();
                            try {
                                n = await fetch(e.action, {
                                    method: e.method,
                                    body: new FormData(e),
                                    headers: {
                                        Accept: "application/json",
                                        "X-Requested-With": "XMLHttpRequest"
                                    }
                                })
                            } catch (o) {}
                            n && !n.ok && C()
                        }
                    )),
                    document.addEventListener("mouseup", (function(t) {
                            I = t.target
                        }
                    ));
                const P = "a[href], button";
                function N(t, e) {
                    return V(function(t) {
                        if (t.activeElement !== t.body)
                            return t.activeElement;
                        var e = t.querySelectorAll(":hover")
                            , n = e.length;
                        if (n)
                            return e[n - 1]
                    }(t), e)
                }
                function V(t, e) {
                    var n = t;
                    if (!n)
                        return Promise.resolve(e());
                    var o = n.ownerDocument.documentElement;
                    var i = function(t) {
                        for (var e = []; t; ) {
                            var n = t.getBoundingClientRect()
                                , o = n.top
                                , i = n.left;
                            e.push({
                                element: t,
                                top: o,
                                left: i
                            }),
                                t = t.parentElement
                        }
                        return e
                    }(n);
                    return Promise.resolve(e()).then((function(t) {
                            var e = function(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (o.contains(n.element))
                                        return n
                                }
                            }(i);
                            if (e) {
                                n = e.element;
                                var s = e.top
                                    , r = e.left
                                    , c = n.getBoundingClientRect()
                                    , a = c.top
                                    , l = c.left;
                                !function(t, e, n) {
                                    var o = t.ownerDocument
                                        , i = o.defaultView;
                                    function s(t) {
                                        return t.offsetParent ? {
                                            top: t.scrollTop,
                                            left: t.scrollLeft
                                        } : {
                                            top: i.pageYOffset,
                                            left: i.pageXOffset
                                        }
                                    }
                                    function r(t, e, n) {
                                        if (0 === e && 0 === n)
                                            return [0, 0];
                                        var r = s(t)
                                            , c = r.top + n
                                            , a = r.left + e;
                                        t === o || t === i || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(a, c) : (t.scrollTop = c,
                                            t.scrollLeft = a);
                                        var l = s(t);
                                        return [l.left - r.left, l.top - r.top]
                                    }
                                    function c(t) {
                                        var e = t;
                                        if (e.offsetParent && e !== o.body) {
                                            for (; e !== o.body; ) {
                                                if (!e.parentElement)
                                                    return;
                                                e = e.parentElement;
                                                var n = i.getComputedStyle(e)
                                                    , s = n.position
                                                    , r = n.overflowY
                                                    , c = n.overflowX;
                                                if ("fixed" === s || "auto" === r || "auto" === c || "scroll" === r || "scroll" === c)
                                                    break
                                            }
                                            return e
                                        }
                                    }
                                    var a = c(t)
                                        , l = 0
                                        , u = 0;
                                    for (; a; ) {
                                        var f = r(a, e - l, n - u);
                                        if (l += f[0],
                                            u += f[1],
                                        l === e && u === n)
                                            break;
                                        a = c(a)
                                    }
                                }(n, l - r, a - s)
                            }
                            return t
                        }
                    ))
                }
                const X = new WeakMap
                    , z = t("ar", {});
                function W(t, e, n=!1) {
                    return N(document, (()=>{
                            const o = p(document, e.trim())
                                , i = n && t.ownerDocument && t === t.ownerDocument.activeElement ? o.querySelector("*") : null
                                , s = Array.from(t.querySelectorAll("details[open][id]")).map((t=>t.id));
                            "DETAILS" === t.tagName && t.id && t.hasAttribute("open") && s.push(t.id);
                            for (const e of t.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                                const t = e.getAttribute("data-updatable-content-scroll-position-id");
                                B.set(t, e.scrollTop)
                            }
                            for (const t of s) {
                                const e = o.querySelector("#" + t);
                                e && e.setAttribute("open", "")
                            }
                            t.replaceWith(o),
                            i instanceof HTMLElement && i.focus()
                        }
                    ))
                }
                const B = new Map;
                s(".js-updatable-content-preserve-scroll-position", {
                    constructor: HTMLElement,
                    add(t) {
                        const e = t.getAttribute("data-updatable-content-scroll-position-id");
                        if (!e)
                            return;
                        const n = B.get(e);
                        null != n && (t.scrollTop = n)
                    }
                });
                const U = t("G", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise((t=>{
                        document.addEventListener("DOMContentLoaded", (()=>{
                                t()
                            }
                        ))
                    }
                )))
                    , F = t("B", "complete" === document.readyState ? Promise.resolve() : new Promise((t=>{
                        window.addEventListener("load", t)
                    }
                )))
                    , K = [];
                let J = 0;
                function Y(t) {
                    !async function() {
                        K.push(t),
                            await U,
                            function() {
                                const t = J;
                                J = K.length,
                                    G(K.slice(t), null, window.location.href)
                            }()
                    }()
                }
                function G(t, e, n) {
                    const o = window.location.hash.slice(1)
                        , i = {
                        oldURL: e,
                        newURL: n,
                        target: o ? document.getElementById(o) : null
                    };
                    for (const s of t)
                        s.call(null, i)
                }
                Y.clear = ()=>{
                    K.length = J = 0
                }
                ;
                let Z = window.location.href;
                window.addEventListener("popstate", (function() {
                        Z = window.location.href
                    }
                )),
                    window.addEventListener("hashchange", (function(t) {
                            const e = window.location.href;
                            try {
                                G(K, t.oldURL || Z, e)
                            } finally {
                                Z = e
                            }
                        }
                    ));
                let Q = null;
                document.addEventListener("pjax:start", (function() {
                        Q = window.location.href
                    }
                )),
                    document.addEventListener("pjax:end", (function() {
                            G(K, Q, window.location.href)
                        }
                    ));
                const tt = "ontransitionend"in window;
                function et(t) {
                    return "height" === getComputedStyle(t).transitionProperty
                }
                function nt(t, e) {
                    t.style.transition = "none",
                        e(),
                        t.offsetHeight,
                        t.style.transition = ""
                }
                function ot(t, e) {
                    const n = t.getAttribute("data-details-container-group");
                    return n ? (V(t, (()=>{
                            for (const o of function(t) {
                                return [...document.querySelectorAll(".js-details-container")].filter((e=>e.getAttribute("data-details-container-group") === t))
                            }(n))
                                o !== t && it(o, e)
                        }
                    )),
                        n) : null
                }
                function it(t, e) {
                    t.classList.toggle("open", e),
                        t.classList.toggle("Details--on", e);
                    for (const n of function(t) {
                        return [...t.querySelectorAll(".js-details-target")].filter((e=>e.closest(".js-details-container") === t))
                    }(t))
                        n.setAttribute("aria-expanded", e.toString())
                }
                function st(t, e) {
                    var n, o;
                    const i = t.getAttribute("data-details-container") || ".js-details-container"
                        , s = t.closest(i)
                        , r = null !== (n = null == e ? void 0 : e.force) && void 0 !== n ? n : !s.classList.contains("open")
                        , c = null !== (o = null == e ? void 0 : e.withGroup) && void 0 !== o && o;
                    !function(t, e) {
                        if (!tt)
                            return void e();
                        const n = Array.from(t.querySelectorAll(".js-transitionable"));
                        t.classList.contains("js-transitionable") && n.push(t);
                        for (const o of n) {
                            const t = et(o);
                            o instanceof HTMLElement && (o.addEventListener("transitionend", (()=>{
                                    o.style.display = "",
                                        o.style.visibility = "",
                                    t && nt(o, (function() {
                                            o.style.height = ""
                                        }
                                    ))
                                }
                            ), {
                                once: !0
                            }),
                                o.style.boxSizing = "content-box",
                                o.style.display = "block",
                                o.style.visibility = "visible",
                            t && nt(o, (function() {
                                    o.style.height = getComputedStyle(o).height
                                }
                            )),
                                o.offsetHeight)
                        }
                        e();
                        for (const o of n)
                            if (o instanceof HTMLElement && et(o)) {
                                const t = getComputedStyle(o).height;
                                o.style.boxSizing = "",
                                    o.style.height = "0px" === t ? o.scrollHeight + "px" : "0px"
                            }
                    }(s, (()=>{
                            it(s, r);
                            const e = c ? ot(s, r) : null;
                            Promise.resolve().then((()=>{
                                    !function(t) {
                                        const e = t.querySelectorAll("input[autofocus], textarea[autofocus]")
                                            , n = e[e.length - 1];
                                        n && document.activeElement !== n && n.focus()
                                    }(s),
                                        function(t) {
                                            t.classList.contains("tooltipped") && (t.classList.remove("tooltipped"),
                                                t.addEventListener("mouseleave", (()=>{
                                                        t.classList.add("tooltipped"),
                                                            t.blur()
                                                    }
                                                ), {
                                                    once: !0
                                                }))
                                        }(t),
                                        s.dispatchEvent(new CustomEvent("details:toggled",{
                                            bubbles: !0,
                                            cancelable: !1,
                                            detail: {
                                                open: r
                                            }
                                        })),
                                    e && s.dispatchEvent(new CustomEvent("details:toggled-group",{
                                        bubbles: !0,
                                        cancelable: !1,
                                        detail: {
                                            open: r,
                                            group: e
                                        }
                                    }))
                                }
                            ))
                        }
                    ))
                }
                function rt(t) {
                    const e = t.altKey;
                    st(t.currentTarget, {
                        withGroup: e
                    }),
                        t.preventDefault()
                }
                function ct(t) {
                    let e = !1
                        , n = t.parentElement;
                    for (; n; )
                        n.classList.contains("Details-content--shown") && (e = !0),
                        n.classList.contains("js-details-container") && (n.classList.toggle("open", !e),
                            n.classList.toggle("Details--on", !e),
                            e = !1),
                            n = n.parentElement
                }
                o("click", ".js-details-target", rt),
                    o("click", ".js-close-menu", (function(t) {
                            var e;
                            const n = t.target;
                            if (!(n instanceof HTMLElement))
                                return;
                            const o = n.getAttribute("data-details-container") || ".js-details-container";
                            null === (e = n.closest(o).querySelector(".js-open-menu")) || void 0 === e || e.focus()
                        }
                    )),
                    Y((function({target: t}) {
                            t && ct(t)
                        }
                    ));
                const at = ["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]", "input[data-required-value]", "textarea[data-required-value]"].join(",");
                function lt(t) {
                    const e = t.getAttribute("data-required-value")
                        , n = t.getAttribute("data-required-value-prefix");
                    if (t.value === e)
                        t.setCustomValidity("");
                    else {
                        let o = e;
                        n && (o = n + o),
                            t.setCustomValidity(o)
                    }
                }
                j("[data-required-value]", (function(t) {
                        lt(t.currentTarget)
                    }
                )),
                    o("change", "[data-required-value]", (function(t) {
                            const e = t.currentTarget;
                            lt(e),
                                ft(e.form)
                        }
                    )),
                    j("[data-required-trimmed]", (function(t) {
                            const e = t.currentTarget;
                            "" === e.value.trim() ? e.setCustomValidity(e.getAttribute("data-required-trimmed")) : e.setCustomValidity("")
                        }
                    )),
                    o("change", "[data-required-trimmed]", (function(t) {
                            const e = t.currentTarget;
                            "" === e.value.trim() ? e.setCustomValidity(e.getAttribute("data-required-trimmed")) : e.setCustomValidity(""),
                                ft(e.form)
                        }
                    )),
                    x(at, (t=>{
                            let e = t.checkValidity();
                            function n() {
                                const n = t.checkValidity();
                                n !== e && t.form && ft(t.form),
                                    e = n
                            }
                            t.addEventListener("input", n),
                                t.addEventListener("blur", (function e() {
                                        t.removeEventListener("input", n),
                                            t.removeEventListener("blur", e)
                                    }
                                ))
                        }
                    ));
                const ut = new WeakMap;
                function ft(t) {
                    const e = t.checkValidity();
                    for (const n of t.querySelectorAll("button[data-disable-invalid]"))
                        n.disabled = !e
                }
                s("button[data-disable-invalid]", {
                    constructor: HTMLButtonElement,
                    initialize(t) {
                        const e = t.form;
                        e && (!function(t) {
                            ut.get(t) || (t.addEventListener("change", (()=>ft(t))),
                                ut.set(t, !0))
                        }(e),
                            t.disabled = !e.checkValidity())
                    }
                }),
                    s("input[data-required-change], textarea[data-required-change]", (function(t) {
                            const e = t
                                , n = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;
                            function o(t) {
                                const o = e.form;
                                if (t && "radio" === e.type && o && n)
                                    for (const i of o.elements.namedItem(e.name))
                                        i instanceof HTMLInputElement && i.setCustomValidity(e.value === n ? "unchanged" : "");
                                else
                                    e.setCustomValidity(e.value === (n || e.defaultValue) ? "unchanged" : "")
                            }
                            e.addEventListener("input", o),
                                e.addEventListener("change", o),
                                o(),
                            e.form && ft(e.form)
                        }
                    )),
                    document.addEventListener("reset", (function(t) {
                            if (t.target instanceof HTMLFormElement) {
                                const e = t.target;
                                setTimeout((()=>ft(e)))
                            }
                        }
                    ));
                var dt = -1 / 0;
                function mt(t) {
                    return t.toLowerCase() === t
                }
                function pt(t) {
                    return t.toUpperCase() === t
                }
                function ht(t, e, n, o) {
                    for (var i = t.length, s = e.length, r = t.toLowerCase(), c = e.toLowerCase(), a = function(t) {
                        for (var e = t.length, n = new Array(e), o = "/", i = 0; i < e; i++) {
                            var s = t[i];
                            "/" === o ? n[i] = .9 : "-" === o || "_" === o || " " === o ? n[i] = .8 : "." === o ? n[i] = .6 : mt(o) && pt(s) ? n[i] = .7 : n[i] = 0,
                                o = s
                        }
                        return n
                    }(e), l = 0; l < i; l++) {
                        n[l] = new Array(s),
                            o[l] = new Array(s);
                        for (var u = dt, f = l === i - 1 ? -.005 : -.01, d = 0; d < s; d++)
                            if (r[l] === c[d]) {
                                var m = dt;
                                l ? d && (m = Math.max(o[l - 1][d - 1] + a[d], n[l - 1][d - 1] + 1)) : m = -.005 * d + a[d],
                                    n[l][d] = m,
                                    o[l][d] = u = Math.max(m, u + f)
                            } else
                                n[l][d] = dt,
                                    o[l][d] = u += f
                    }
                }
                function gt(t, e) {
                    t = t.toLowerCase(),
                        e = e.toLowerCase();
                    for (var n = t.length, o = 0, i = 0; o < n; o += 1)
                        if (0 === (i = e.indexOf(t[o], i) + 1))
                            return !1;
                    return !0
                }
                const yt = (t,e,n)=>{
                        if (!gt(t, e))
                            return -1 / 0;
                        const o = function(t, e) {
                            var n = t.length
                                , o = e.length;
                            if (!n || !o)
                                return dt;
                            if (n === o)
                                return 1 / 0;
                            if (o > 1024)
                                return dt;
                            var i = new Array(n)
                                , s = new Array(n);
                            return ht(t, e, i, s),
                                s[n - 1][o - 1]
                        }(t, e);
                        return o < n ? -1 / 0 : o
                    }
                    , vt = (t,e,n)=>{
                        t.innerHTML = "";
                        let o = 0;
                        for (const i of function(t, e) {
                            var n = t.length
                                , o = e.length
                                , i = new Array(n);
                            if (!n || !o)
                                return i;
                            if (n === o) {
                                for (var s = 0; s < n; s++)
                                    i[s] = s;
                                return i
                            }
                            if (o > 1024)
                                return i;
                            var r = new Array(n)
                                , c = new Array(n);
                            ht(t, e, r, c);
                            for (var a = !1, l = (s = n - 1,
                            o - 1); s >= 0; s--)
                                for (; l >= 0; l--)
                                    if (r[s][l] !== dt && (a || r[s][l] === c[s][l])) {
                                        a = s && l && c[s][l] === r[s - 1][l - 1] + 1,
                                            i[s] = l--;
                                        break
                                    }
                            return i
                        }(e, n)) {
                            "" !== n.slice(o, i) && t.appendChild(document.createTextNode(n.slice(o, i))),
                                o = i + 1;
                            const e = document.createElement("mark");
                            e.textContent = n[i],
                                t.appendChild(e)
                        }
                        t.appendChild(document.createTextNode(n.slice(o)))
                    }
                    , bt = new WeakMap
                    , wt = new WeakMap
                    , Et = new WeakMap
                    , Lt = t=>{
                        if (!Et.has(t) && t instanceof HTMLElement) {
                            const e = (t.getAttribute("data-value") || t.textContent || "").trim();
                            return Et.set(t, e),
                                e
                        }
                        return Et.get(t) || ""
                    }
                ;
                class FuzzyListElement extends HTMLElement {
                    connectedCallback() {
                        const t = this.querySelector("ul");
                        if (!t)
                            return;
                        const e = new Set(t.querySelectorAll("li"))
                            , n = this.querySelector("input");
                        n instanceof HTMLInputElement && n.addEventListener("input", (()=>{
                                this.value = n.value
                            }
                        ));
                        const o = new MutationObserver((t=>{
                                let n = !1;
                                for (const o of t)
                                    if ("childList" === o.type && o.addedNodes.length)
                                        for (const t of o.addedNodes)
                                            if (t instanceof HTMLLIElement && !e.has(t)) {
                                                const o = Lt(t);
                                                n = n || gt(this.value, o),
                                                    e.add(t)
                                            }
                                n && this.sort()
                            }
                        ));
                        o.observe(t, {
                            childList: !0
                        });
                        const i = {
                            handler: o,
                            items: e,
                            lazyItems: new Map,
                            timer: null
                        };
                        wt.set(this, i)
                    }
                    disconnectedCallback() {
                        const t = wt.get(this);
                        t && (t.handler.disconnect(),
                            wt.delete(this))
                    }
                    addLazyItems(t, e) {
                        const n = wt.get(this);
                        if (!n)
                            return;
                        const {lazyItems: o} = n
                            , {value: i} = this;
                        let s = !1;
                        for (const r of t)
                            o.set(r, e),
                                s = s || Boolean(i) && gt(i, r);
                        s && this.sort()
                    }
                    sort() {
                        const t = bt.get(this);
                        t && (t.aborted = !0);
                        const e = {
                            aborted: !1
                        };
                        bt.set(this, e);
                        const {minScore: n, markSelector: o, maxMatches: i, value: s} = this
                            , r = wt.get(this);
                        if (!r)
                            return;
                        if (!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{
                            cancelable: !0,
                            detail: s
                        })))
                            return;
                        const {items: c, lazyItems: a} = r
                            , l = this.hasAttribute("mark-selector")
                            , u = this.querySelector("ul");
                        if (!u)
                            return;
                        const f = [];
                        if (s) {
                            for (const t of c) {
                                const e = Lt(t)
                                    , o = yt(s, e, n);
                                o !== -1 / 0 && f.push({
                                    item: t,
                                    score: o
                                })
                            }
                            for (const [t,e] of a) {
                                const o = yt(s, t, n);
                                o !== -1 / 0 && f.push({
                                    text: t,
                                    render: e,
                                    score: o
                                })
                            }
                            f.sort(((t,e)=>e.score - t.score)).splice(i)
                        } else {
                            let t = f.length;
                            for (const e of c) {
                                if (t >= i)
                                    break;
                                f.push({
                                    item: e,
                                    score: 1
                                }),
                                    t += 1
                            }
                            for (const [e,n] of a) {
                                if (t >= i)
                                    break;
                                f.push({
                                    text: e,
                                    render: n,
                                    score: 1
                                }),
                                    t += 1
                            }
                        }
                        requestAnimationFrame((()=>{
                                if (e.aborted)
                                    return;
                                const t = u.querySelector('input[type="radio"]:checked');
                                u.innerHTML = "";
                                let n = 0;
                                const i = ()=>{
                                        if (e.aborted)
                                            return;
                                        const r = Math.min(f.length, n + 100)
                                            , d = document.createDocumentFragment();
                                        for (let t = n; t < r; t += 1) {
                                            const e = f[t];
                                            let n = null;
                                            if ("render"in e && "text"in e) {
                                                const {render: t, text: o} = e;
                                                n = t(o),
                                                    c.add(n),
                                                    Et.set(n, o),
                                                    a.delete(o)
                                            } else
                                                "item"in e && (n = e.item);
                                            n instanceof HTMLElement && (l && vt(o && n.querySelector(o) || n, l ? s : "", Lt(n)),
                                                d.appendChild(n))
                                        }
                                        n = r;
                                        let m = !1;
                                        if (t instanceof HTMLInputElement)
                                            for (const e of d.querySelectorAll('input[type="radio"]:checked'))
                                                e instanceof HTMLInputElement && e.value !== t.value && (e.checked = !1,
                                                    m = !0);
                                        if (u.appendChild(d),
                                        t && m && t.dispatchEvent(new Event("change",{
                                            bubbles: !0
                                        })),
                                        r < f.length)
                                            requestAnimationFrame(i);
                                        else {
                                            u.hidden = 0 === f.length;
                                            const t = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                            t && (t.hidden = f.length > 0),
                                                this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{
                                                    detail: f.length
                                                }))
                                        }
                                    }
                                ;
                                i()
                            }
                        ))
                    }
                    get value() {
                        return this.getAttribute("value") || ""
                    }
                    set value(t) {
                        this.setAttribute("value", t)
                    }
                    get markSelector() {
                        return this.getAttribute("mark-selector") || ""
                    }
                    set markSelector(t) {
                        t ? this.setAttribute("mark-selector", t) : this.removeAttribute("mark-selector")
                    }
                    get minScore() {
                        return Number(this.getAttribute("min-score") || 0)
                    }
                    set minScore(t) {
                        Number.isNaN(t) || this.setAttribute("min-score", String(t))
                    }
                    get maxMatches() {
                        return Number(this.getAttribute("max-matches") || 1 / 0)
                    }
                    set maxMatches(t) {
                        Number.isNaN(t) || this.setAttribute("max-matches", String(t))
                    }
                    static get observedAttributes() {
                        return ["value", "mark-selector", "min-score", "max-matches"]
                    }
                    attributeChangedCallback(t, e, n) {
                        if (e === n)
                            return;
                        const o = wt.get(this);
                        o && (o.timer && window.clearTimeout(o.timer),
                            o.timer = window.setTimeout((()=>this.sort()), 100))
                    }
                }
                function xt() {
                    return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
                }
                function At(t) {
                    const e = (t.getAttribute("data-platforms") || "").split(",")
                        , n = xt();
                    return Boolean(n && e.includes(n))
                }
                t("W", FuzzyListElement),
                window.customElements.get("fuzzy-list") || (window.FuzzyListElement = FuzzyListElement,
                    window.customElements.define("fuzzy-list", FuzzyListElement)),
                    s(".js-remove-unless-platform", (function(t) {
                            At(t) || t.remove()
                        }
                    )),
                    s(".js-show-for-platform", {
                        constructor: HTMLElement,
                        add(t) {
                            At(t) && (t.hidden = !1)
                        }
                    }),
                    s(".js-hide-for-platform", {
                        constructor: HTMLElement,
                        add(t) {
                            At(t) && (t.hidden = !0)
                        }
                    });
                let jt = null;
                function St(t) {
                    jt && (jt.textContent = "",
                        jt.textContent = t)
                }
                !async function() {
                    await U,
                        jt = document.createElement("div"),
                        jt.setAttribute("aria-live", "polite"),
                        jt.classList.add("sr-only"),
                        document.body.append(jt)
                }();
                const kt = [];
                let Tt, Ct = 0;
                function Mt() {
                    return Tt
                }
                function qt() {
                    try {
                        return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                    } catch (qn) {
                        return 0
                    }
                }
                function Ht() {
                    return qt() - 1 + Ct
                }
                function Rt(t) {
                    Tt = t;
                    const e = location.href;
                    kt[Ht()] = {
                        url: e,
                        state: Tt
                    },
                        kt.length = qt(),
                        window.dispatchEvent(new CustomEvent("statechange",{
                            bubbles: !1,
                            cancelable: !1
                        }))
                }
                function Dt() {
                    return (new Date).getTime()
                }
                function Ot(t, e, n) {
                    Ct = 0;
                    const o = Object.assign({}, {
                        _id: Dt()
                    }, t);
                    history.pushState(o, e, n),
                        Rt(o)
                }
                function _t(t, e, n) {
                    const o = Object.assign({}, {
                        _id: Mt()._id
                    }, t);
                    history.replaceState(o, e, n),
                        Rt(o)
                }
                async function $t(t, e) {
                    let n;
                    const o = new Promise((e=>{
                            n = self.setTimeout(e, t)
                        }
                    ));
                    if (!e)
                        return o;
                    try {
                        await Promise.race([o, It(e)])
                    } catch (qn) {
                        throw self.clearTimeout(n),
                            qn
                    }
                }
                function It(t) {
                    return new Promise(((e,n)=>{
                            const o = new Error("aborted");
                            o.name = "AbortError",
                                t.aborted ? n(o) : t.addEventListener("abort", (()=>n(o)))
                        }
                    ))
                }
                Tt = function() {
                    const t = {
                        _id: (new Date).getTime()
                    };
                    return Rt(t),
                        t
                }(),
                    window.addEventListener("popstate", (function(t) {
                            const e = t.state;
                            if (!e || !e._id)
                                return;
                            e._id < (Mt()._id || NaN) ? Ct-- : Ct++,
                                Rt(e)
                        }
                    ), !0),
                    window.addEventListener("hashchange", (function() {
                            if (qt() > kt.length) {
                                const t = {
                                    _id: Dt()
                                };
                                history.replaceState(t, "", location.href),
                                    Rt(t)
                            }
                        }
                    ), !0);
                const Pt = new WeakMap;
                function Nt(t) {
                    const e = Pt.get(t);
                    e && (null != e.timer && clearTimeout(e.timer),
                        e.timer = window.setTimeout((()=>{
                                null != e.timer && (e.timer = null),
                                    e.inputed = !1,
                                    e.listener.call(null, t)
                            }
                        ), e.wait))
                }
                function Vt(t) {
                    const e = t.currentTarget
                        , n = Pt.get(e);
                    n && (n.keypressed = !0,
                    null != n.timer && clearTimeout(n.timer))
                }
                function Xt(t) {
                    const e = t.currentTarget
                        , n = Pt.get(e);
                    n && (n.keypressed = !1,
                    n.inputed && Nt(e))
                }
                function zt(t) {
                    const e = t.currentTarget
                        , n = Pt.get(e);
                    n && (n.inputed = !0,
                    n.keypressed || Nt(e))
                }
                const Wt = {}
                    , Bt = {};
                function Ut() {
                    const t = Bt[document.location.pathname];
                    if (t)
                        for (const e of t) {
                            const t = document.querySelector("#" + e.id);
                            t && t.replaceWith(e)
                        }
                }
                function Ft() {
                    const t = Wt[document.location.pathname];
                    if (!t)
                        return;
                    const e = document.head;
                    for (const n of document.querySelectorAll("head [data-pjax-transient]"))
                        n.remove();
                    for (const n of t)
                        n.matches("title, script, link[rel=stylesheet]") ? n.matches("link[rel=stylesheet]") && e.append(n) : (n.setAttribute("data-pjax-transient", ""),
                            e.append(n))
                }
                function Kt(t, e=location.hash) {
                    return Jt(t, Yt(e))
                }
                function Jt(t, e) {
                    return "" === e ? null : t.getElementById(e) || t.getElementsByName(e)[0]
                }
                function Yt(t) {
                    try {
                        return decodeURIComponent(t.slice(1))
                    } catch (e) {
                        return ""
                    }
                }
                (async()=>{
                        await U,
                            Wt[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]")),
                            Bt[document.location.pathname] = Array.from(document.querySelectorAll("[data-pjax-replace]"))
                    }
                )(),
                    document.addEventListener("pjax:beforeReplace", (function(t) {
                            const e = t.detail.contents || [];
                            for (let n = 0; n < e.length; n++) {
                                const t = e[n];
                                t instanceof Element && ("pjax-head" === t.id ? (Wt[document.location.pathname] = Array.from(t.children),
                                    e[n] = null) : t.hasAttribute("data-pjax-replace") && (Bt[document.location.pathname] || (Bt[document.location.pathname] = []),
                                    Bt[document.location.pathname].push(t),
                                    e[n] = null))
                            }
                        }
                    ));
                const Gt = m((function() {
                        var t, e;
                        return ((null === (e = null === (t = document.head) || void 0 === t ? void 0 : t.querySelector('meta[name="enabled-features"]')) || void 0 === e ? void 0 : e.content) || "").split(",")
                    }
                ));
                const Zt = t("a2", m((function(t) {
                        return -1 !== Gt().indexOf(t)
                    }
                )));
                const Qt = new WeakMap;
                function te(t) {
                    var e, n;
                    const o = null === (n = null === (e = t.head) || void 0 === e ? void 0 : e.querySelector('meta[name="expected-hostname"]')) || void 0 === n ? void 0 : n.content;
                    if (!o)
                        return !1;
                    return o.replace(/\.$/, "").split(".").slice(-2).join(".") !== t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".")
                }
                let ee = [];
                function ne(t, e=!1) {
                    var n, o;
                    void 0 === t.timestamp && (t.timestamp = (new Date).getTime()),
                        t.loggedIn = !!(null === (o = null === (n = document.head) || void 0 === n ? void 0 : n.querySelector('meta[name="user-login"]')) || void 0 === o ? void 0 : o.content),
                        ee.push(t),
                        e ? ie() : async function() {
                            await F,
                            null == oe && (oe = window.requestIdleCallback(ie))
                        }()
                }
                let oe = null;
                function ie() {
                    var t, e;
                    if (oe = null,
                        te(document))
                        return;
                    const n = null === (e = null === (t = document.head) || void 0 === t ? void 0 : t.querySelector('meta[name="browser-stats-url"]')) || void 0 === e ? void 0 : e.content;
                    if (!n)
                        return;
                    const o = JSON.stringify({
                        stats: ee
                    });
                    navigator.sendBeacon && navigator.sendBeacon(n, o),
                        ee = []
                }
                let se, re = null;
                function ce(t, e, n) {
                    return t.dispatchEvent(new CustomEvent(e,{
                        bubbles: !0,
                        cancelable: !0,
                        detail: n
                    }))
                }
                async function ae(t) {
                    const e = Object.assign({
                        push: !0,
                        replace: !1,
                        type: "GET",
                        dataType: "html",
                        scrollTo: 0
                    }, t);
                    e.requestUrl = e.url;
                    const n = ge(e.url)
                        , o = n.hash
                        , i = e.container
                        , s = ye(i);
                    "GET" === e.type && (n.search += `${n.search ? "&" : ""}_pjax=${encodeURIComponent(s)}`,
                        e.url = n.toString()),
                    se || (se = {
                        id: me(),
                        url: window.location.href,
                        title: document.title,
                        container: s,
                        fragment: e.fragment
                    },
                        _t(se, se.title, se.url));
                    let r = Zt("JS_HTTP_CACHE_HEADERS") ? null : function(t, e) {
                        const n = function(t, e) {
                            const n = t.querySelectorAll("link[rel=pjax-prefetch]");
                            for (const o of n)
                                if (o.href === e)
                                    return o;
                            return null
                        }(t, e);
                        if (n) {
                            const t = Qt.get(n);
                            return n.remove(),
                                Qt.delete(n),
                            t || null
                        }
                        return null
                    }(i, e.requestUrl);
                    if (!r) {
                        null == re || re.abort();
                        const {signal: t} = re = new AbortController;
                        r = fetch(e.url, {
                            signal: t,
                            method: e.type,
                            body: e.data,
                            headers: {
                                Accept: "text/html",
                                "X-PJAX": "true",
                                "X-PJAX-Container": s,
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        })
                    }
                    var c, a;
                    !0 === e.push && !0 !== e.replace && (c = se.id,
                        a = pe(i),
                        Ee[c] = a,
                        xe.push(c),
                        Ae(Le, 0),
                        Ae(xe, 20),
                        Ot(null, "", e.requestUrl)),
                        ce(i, "pjax:start", {
                            url: e.url
                        }),
                        ce(i, "pjax:send");
                    const l = await r;
                    if (!l.ok) {
                        const t = ce(i, "pjax:error");
                        if ("GET" === e.type && t) {
                            const t = l.headers.get("X-PJAX-URL")
                                , n = t ? he(ge(t)) : e.requestUrl;
                            ne({
                                pjaxFailureReason: "response_error"
                            }),
                                le(n)
                        }
                        return ce(i, "pjax:complete"),
                            void ce(i, "pjax:end")
                    }
                    const u = se
                        , f = function() {
                        for (const t of document.getElementsByTagName("meta")) {
                            const e = t.getAttribute("http-equiv");
                            if (e && "X-PJAX-VERSION" === e.toUpperCase())
                                return t.content
                        }
                        return null
                    }()
                        , d = l.headers.get("X-PJAX-Version")
                        , m = function(t, e, n) {
                        const o = {
                            url: we(e, n.requestUrl),
                            title: ""
                        }
                            , i = /<html/i.test(t);
                        if ("text/html" !== (e.headers.get("Content-Type") || "").split(";", 1)[0].trim())
                            return o;
                        let s, r;
                        if (i) {
                            const e = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)
                                , n = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                            s = e ? Array.from(p(document, e[0]).childNodes) : [],
                                r = n ? Array.from(p(document, n[0]).childNodes) : []
                        } else
                            s = r = Array.from(p(document, t).childNodes);
                        if (0 === r.length)
                            return o;
                        const c = ve(s, "title", HTMLTitleElement);
                        let a;
                        if (o.title = c.length > 0 && c[c.length - 1].textContent || "",
                            n.fragment) {
                            if ("body" === n.fragment)
                                a = r;
                            else {
                                const t = ve(r, n.fragment, Element);
                                a = t.length > 0 ? [t[0]] : []
                            }
                            if (a.length && ("body" === n.fragment ? o.contents = a : o.contents = a.flatMap((t=>Array.from(t.childNodes))),
                                !o.title)) {
                                const t = a[0];
                                t instanceof Element && (o.title = t.getAttribute("title") || t.getAttribute("data-title") || "")
                            }
                        } else
                            i || (o.contents = r);
                        if (o.contents) {
                            o.contents = o.contents.filter((function(t) {
                                    return !(t instanceof Element) || !t.matches("title")
                                }
                            ));
                            for (const n of o.contents)
                                if (n instanceof Element)
                                    for (const t of n.querySelectorAll("title"))
                                        t.remove();
                            const t = ve(o.contents, "script[src]", HTMLScriptElement);
                            for (const n of t)
                                n.remove();
                            o.scripts = t,
                                o.contents = o.contents.filter((e=>-1 === t.indexOf(e)));
                            const e = ve(o.contents, "link[rel=stylesheet]", HTMLLinkElement);
                            for (const n of e)
                                n.remove();
                            o.stylesheets = e,
                                o.contents = o.contents.filter((t=>!e.includes(t)))
                        }
                        o.title && (o.title = o.title.trim());
                        return o
                    }(await l.text(), l, e)
                        , {contents: h} = m
                        , g = ge(m.url);
                    if (o && (g.hash = o,
                        m.url = g.href),
                    f && d && f !== d)
                        return ne({
                            pjaxFailureReason: "version_mismatch"
                        }),
                            void le(m.url);
                    if (!h)
                        return ne({
                            pjaxFailureReason: "missing_response_body"
                        }),
                            void le(m.url);
                    se = {
                        id: null != e.id ? e.id : me(),
                        url: m.url,
                        title: m.title,
                        container: s,
                        fragment: e.fragment
                    },
                    !0 !== e.push && !0 !== e.replace || _t(se, m.title, m.url);
                    const y = document.activeElement
                        , v = null != e.container && e.container.contains(y);
                    if (y instanceof HTMLElement && v)
                        try {
                            y.blur()
                        } catch (qn) {}
                    m.title && (document.title = m.title),
                        ce(i, "pjax:beforeReplace", {
                            contents: h,
                            state: se,
                            previousState: u
                        }),
                        be(i, h),
                        Ut(),
                        Ft();
                    const b = i.querySelector("input[autofocus], textarea[autofocus]");
                    b && document.activeElement !== b && b.focus(),
                    m.scripts && function(t) {
                        const e = document.querySelectorAll("script[src]");
                        for (const n of t) {
                            const {src: t} = n;
                            if (Array.from(e).some((e=>e.src === t)))
                                continue;
                            const o = document.createElement("script")
                                , i = n.getAttribute("type");
                            i && (o.type = i),
                                o.src = t,
                            document.head && document.head.appendChild(o)
                        }
                    }(m.scripts),
                    m.stylesheets && function(t) {
                        const e = document.querySelectorAll("link[rel=stylesheet]");
                        for (const n of t)
                            Array.from(e).some((t=>t.href === n.href)) || document.head && document.head.appendChild(n)
                    }(m.stylesheets);
                    let w = e.scrollTo;
                    if (o) {
                        const t = Kt(document, o);
                        if (t) {
                            w = t.getBoundingClientRect().top + window.pageYOffset
                        }
                    }
                    "number" == typeof w && window.scrollTo(window.pageXOffset, w),
                        ce(i, "pjax:success"),
                        ce(i, "pjax:complete"),
                        ce(i, "pjax:end")
                }
                function le(t) {
                    se && _t(null, "", se.url),
                        window.location.replace(t)
                }
                let ue = !0;
                const fe = window.location.href
                    , de = window.history.state;
                function me() {
                    return (new Date).getTime()
                }
                function pe(t) {
                    const e = t.cloneNode(!0);
                    return [ye(t), Array.from(e.childNodes), Date.now()]
                }
                function he(t) {
                    return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""),
                        t.href.replace(/\?($|#)/, "$1")
                }
                function ge(t) {
                    const e = document.createElement("a");
                    return e.href = t,
                        e
                }
                function ye(t) {
                    if (t.id)
                        return "#" + t.id;
                    throw new Error("pjax container has no id")
                }
                function ve(t, e, n) {
                    let o = [];
                    for (const i of t)
                        i instanceof Element && (i instanceof n && i.matches(e) && o.push(i),
                            o = o.concat(Array.from(i.querySelectorAll(e))));
                    return o
                }
                function be(t, e) {
                    t.innerHTML = "";
                    for (const n of e)
                        null != n && t.appendChild(n)
                }
                function we(t, e) {
                    const n = t.headers.get("X-PJAX-URL");
                    return n ? he(ge(n)) : e
                }
                de && de.container && (se = de),
                "state"in window.history && (ue = !1);
                const Ee = {}
                    , Le = []
                    , xe = [];
                function Ae(t, e) {
                    for (; t.length > e; ) {
                        const e = t.shift();
                        if (null == e)
                            return;
                        delete Ee[e]
                    }
                }
                function je(t) {
                    return !function(t) {
                        return t.offsetWidth <= 0 && t.offsetHeight <= 0
                    }(t)
                }
                function Se(t) {
                    const e = t.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                    if (e) {
                        if (1 === e.length) {
                            const t = ke(e[0]);
                            if (!t)
                                return;
                            return Object.freeze({
                                start: t,
                                end: t
                            })
                        }
                        if (2 === e.length) {
                            const t = ke(e[0])
                                , n = ke(e[1]);
                            if (!t || !n)
                                return;
                            return Me(Object.freeze({
                                start: t,
                                end: n
                            }))
                        }
                    } else
                        ;
                }
                function ke(t) {
                    const e = t.match(/L(\d+)/)
                        , n = t.match(/C(\d+)/);
                    return e ? Object.freeze({
                        line: parseInt(e[1]),
                        column: n ? parseInt(n[1]) : null
                    }) : null
                }
                function Te(t, e, n) {
                    const o = [null, 0]
                        , i = n(t.line);
                    if (!i)
                        return o;
                    if (null == t.column)
                        return [i, -1];
                    let s = t.column - 1;
                    const r = Ce(i);
                    for (let c = 0; c < r.length; c++) {
                        const t = r[c]
                            , n = s - (t.textContent || "").length;
                        if (0 === n) {
                            const n = r[c + 1];
                            return e && n ? [n, 0] : [t, s]
                        }
                        if (n < 0)
                            return [t, s];
                        s = n
                    }
                    return o
                }
                function Ce(t) {
                    if (t.nodeType === Node.TEXT_NODE)
                        return [t];
                    if (!t.childNodes || !t.childNodes.length)
                        return [];
                    let e = [];
                    for (const n of t.childNodes)
                        e = e.concat(Ce(n));
                    return e
                }
                function Me(t) {
                    const e = [t.start, t.end];
                    return e.sort(qe),
                        e[0] === t.start && e[1] === t.end ? t : Object.freeze({
                            start: e[0],
                            end: e[1]
                        })
                }
                function qe(t, e) {
                    return t.line === e.line && t.column === e.column ? 0 : t.line === e.line && "number" == typeof t.column && "number" == typeof e.column ? t.column - e.column : t.line - e.line
                }
                function He(t) {
                    const e = t.split("‍");
                    let n = 0;
                    for (const o of e) {
                        n += Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length
                    }
                    return n / e.length
                }
                function Re(t) {
                    return t.hasAttribute("data-maxlength") ? parseInt(t.getAttribute("data-maxlength") || "") : t.maxLength
                }
                function De(t) {
                    const e = Re(t);
                    !function(t, e, n) {
                        const o = n.closest(".js-characters-remaining-container");
                        if (!o)
                            return;
                        const i = o.querySelector(".js-characters-remaining")
                            , s = String(i.getAttribute("data-suffix"))
                            , r = e - He(t);
                        r <= 20 ? (i.textContent = `${r} ${s}`,
                            i.classList.toggle("text-red", r <= 5),
                            i.hidden = !1) : i.hidden = !0
                    }(t.value, e, t)
                }
                function Oe(t) {
                    const e = [];
                    for (const n of function() {
                        try {
                            return document.cookie.split(";")
                        } catch (t) {
                            return []
                        }
                    }()) {
                        const [o,i] = n.trim().split("=");
                        t === o && void 0 !== i && e.push({
                            key: o,
                            value: i
                        })
                    }
                    return e
                }
                function _e(t, e, n=null, o=!1, i="lax") {
                    let s = document.domain;
                    if (null == s)
                        throw new Error("Unable to get document domain");
                    s.endsWith(".github.com") && (s = "github.com");
                    const r = "https:" === location.protocol ? "; secure" : ""
                        , c = n ? "; expires=" + n : "";
                    !1 === o && (s = "." + s);
                    try {
                        document.cookie = `${t}=${e}; path=/; domain=${s}${c}${r}; samesite=${i}`
                    } catch (a) {}
                }
                function $e(t) {
                    if (!window._octo)
                        return;
                    const e = Math.floor((new Date).getTime() / 1e3);
                    t.timestamp = e;
                    const n = 'meta[name="octolytics-event-url"]';
                    if (document.head && document.head.querySelector(n)) {
                        const e = document.head.querySelector(n).content
                            , o = JSON.stringify(t);
                        navigator.sendBeacon && navigator.sendBeacon(e, o)
                    }
                }
                function Ie(t, e) {
                    let n = t;
                    if (n === e)
                        return 1;
                    const o = n.length;
                    let i = 0
                        , s = 0;
                    for (let l = 0; l < e.length; l++) {
                        const t = e[l]
                            , r = n.indexOf(t.toLowerCase())
                            , c = n.indexOf(t.toUpperCase())
                            , a = Math.min(r, c)
                            , u = a > -1 ? a : Math.max(r, c);
                        if (-1 === u)
                            return 0;
                        i += .1,
                        n[u] === t && (i += .1),
                        0 === u && (i += .8,
                        0 === l && (s = 1)),
                        " " === n.charAt(u - 1) && (i += .8),
                            n = n.substring(u + 1, o)
                    }
                    const r = e.length
                        , c = i / r;
                    let a = (c * (r / o) + c) / 2;
                    return s && a + .1 < 1 && (a += .1),
                        a
                }
                function *Pe(t, e) {
                    for (const n of t) {
                        const t = e(n);
                        null != t && (yield t)
                    }
                }
                function Ne(t) {
                    const e = document.querySelector(".sso-modal");
                    e && (e.classList.remove("success", "error"),
                        t ? e.classList.add("success") : e.classList.add("error"))
                }
                window.addEventListener("popstate", (function(t) {
                        ue || null == re || re.abort();
                        const e = se
                            , n = t.state;
                        let o = null;
                        if (n && n.container) {
                            if (ue && fe === n.url)
                                return;
                            if (e) {
                                if (e.id === n.id)
                                    return;
                                o = e.id < n.id ? "forward" : "back"
                            }
                            const [t,i,s] = Ee[n.id] || []
                                , r = document.querySelector(t || n.container);
                            if (r instanceof HTMLElement) {
                                e && function(t, e, n) {
                                    let o, i;
                                    Ee[e] = n,
                                        "forward" === t ? (o = xe,
                                            i = Le) : (o = Le,
                                            i = xe);
                                    o.push(e);
                                    const s = i.pop();
                                    s && delete Ee[s];
                                    Ae(o, 20)
                                }(o, e.id, pe(r)),
                                    ce(r, "pjax:popstate", {
                                        state: n,
                                        direction: o,
                                        cachedAt: s
                                    });
                                const t = {
                                    id: n.id,
                                    url: n.url,
                                    container: r,
                                    push: !1,
                                    fragment: n.fragment || "",
                                    scrollTo: !1
                                };
                                i ? (ce(r, "pjax:start"),
                                    se = n,
                                n.title && (document.title = n.title),
                                    ce(r, "pjax:beforeReplace", {
                                        contents: i,
                                        state: n,
                                        previousState: e
                                    }),
                                    be(r, i),
                                    Ut(),
                                    Ft(),
                                    ce(r, "pjax:end")) : ae(t),
                                    r.offsetHeight
                            } else
                                ne({
                                    pjaxFailureReason: "no_container"
                                }),
                                    le(location.href)
                        }
                        ue = !1
                    }
                )),
                    x(".js-characters-remaining-field", (function(t) {
                            function e() {
                                (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && De(t)
                            }
                            e(),
                                t.addEventListener("input", e),
                                t.addEventListener("blur", (()=>{
                                        t.removeEventListener("input", e)
                                    }
                                ), {
                                    once: !0
                                })
                        }
                    )),
                    o("click", "[data-octo-click]", (function(t) {
                            if (!window._octo)
                                return;
                            const e = t.currentTarget
                                , n = e instanceof HTMLElement && e.getAttribute("data-octo-click") || ""
                                , o = {};
                            o.event_type = n;
                            const i = {}
                                , s = {}
                                , r = {};
                            let c = [];
                            e instanceof HTMLElement && e.hasAttribute("data-octo-dimensions") && (c = (e.getAttribute("data-octo-dimensions") || "").split(","));
                            const a = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [];
                            for (const u of a)
                                if (u instanceof HTMLMetaElement)
                                    if (u.name.startsWith("octolytics-dimension-")) {
                                        i[u.name.replace(/^octolytics-dimension-/, "")] = u.content
                                    } else if (u.name.startsWith("octolytics-measure-")) {
                                        s[u.name.replace(/^octolytics-measure-/, "")] = u.content
                                    } else if (u.name.startsWith("octolytics-context-")) {
                                        r[u.name.replace(/^octolytics-context-/, "")] = u.content
                                    } else if (u.name.startsWith("octolytics-actor-")) {
                                        i[u.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = u.content
                                    } else if (u.name.startsWith("octolytics-")) {
                                        o[u.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = u.content
                                    }
                            const l = document.querySelector("meta[name=visitor-payload]");
                            if (l instanceof HTMLMetaElement) {
                                const t = JSON.parse(atob(l.content));
                                Object.assign(i, t)
                            }
                            if (e instanceof HTMLElement && e.hasAttribute("data-ga-click")) {
                                const t = (e.getAttribute("data-ga-click") || "").split(",").map((t=>t.trim()));
                                i.category = t[0],
                                    i.action = t[1]
                            }
                            for (const u of c) {
                                const t = u.split(":")
                                    , e = t.shift();
                                e && (i[e] = t.join(":"))
                            }
                            o.dimensions = i,
                                o.measures = s,
                                o.context = r,
                                $e(o)
                        }
                    )),
                    s(".js-sso-modal-complete", (function(t) {
                            if (window.opener && window.opener.external.ssoComplete) {
                                const e = t.getAttribute("data-error")
                                    , n = t.getAttribute("data-expires-around");
                                window.opener.external.ssoComplete({
                                    error: e,
                                    expiresAround: n
                                }),
                                    window.close()
                            } else {
                                const e = t.getAttribute("data-fallback-url");
                                e && (window.location.href = e)
                            }
                        }
                    ));
                let Ve = null;
                function Xe() {
                    Ve = null
                }
                let ze = !1
                    , We = 0;
                const Be = [];
                function Ue() {
                    Be.length ? ze || (window.addEventListener("resize", Ke),
                        document.addEventListener("scroll", Ke),
                        ze = !0) : (window.removeEventListener("resize", Ke),
                        document.removeEventListener("scroll", Ke),
                        ze = !1)
                }
                function Fe() {
                    Je(!0)
                }
                function Ke() {
                    Je()
                }
                function Je(t=!1) {
                    for (const e of Be)
                        if (e.element.offsetHeight > 0) {
                            const {element: n, placeholder: o, top: i} = e
                                , s = n.getBoundingClientRect();
                            if (o) {
                                const r = o.getBoundingClientRect();
                                n.classList.contains("is-stuck") ? r.top > sn(n, i) ? Ge(e) : Ze(e) : s.top <= sn(n, i) ? Ye(e) : t && Ze(e)
                            } else
                                s.top <= sn(n, i) ? Ye(e) : Ge(e)
                        }
                }
                function Ye({element: t, placeholder: e, top: n}) {
                    if (e) {
                        const o = t.getBoundingClientRect();
                        rn(t, sn(t, n)),
                            t.style.left = o.left + "px",
                            t.style.width = o.width + "px",
                            t.style.marginTop = "0",
                            t.style.position = "fixed",
                            e.style.display = "block"
                    }
                    t.classList.add("is-stuck")
                }
                function Ge({element: t, placeholder: e}) {
                    e && (t.style.position = "static",
                        t.style.marginTop = e.style.marginTop,
                        e.style.display = "none"),
                        t.classList.remove("is-stuck")
                }
                function Ze({element: t, placeholder: e, offsetParent: n, top: o}) {
                    if (e) {
                        const i = t.getBoundingClientRect()
                            , s = e.getBoundingClientRect();
                        if (rn(t, sn(t, o)),
                            t.style.left = s.left + "px",
                            t.style.width = s.width + "px",
                            n) {
                            const e = n.getBoundingClientRect();
                            e.bottom < i.height + parseInt(String(o)) && (t.style.top = e.bottom - i.height + "px")
                        }
                    }
                }
                function Qe(t) {
                    if (function(t) {
                        const {position: e} = window.getComputedStyle(t);
                        return /sticky/.test(e)
                    }(t))
                        return null;
                    const e = t.previousElementSibling;
                    if (e && e.classList.contains("is-placeholder"))
                        return e;
                    const n = document.createElement("div");
                    return n.style.visibility = "hidden",
                        n.style.display = "none",
                        n.style.height = window.getComputedStyle(t).height,
                        n.className = t.className,
                        n.classList.remove("js-sticky"),
                        n.classList.add("is-placeholder"),
                        t.parentNode.insertBefore(n, t)
                }
                async function tn(t) {
                    await F,
                        function(t) {
                            const e = Qe(t)
                                , n = window.getComputedStyle(t).position;
                            t.style.position = "static";
                            const o = t.offsetParent;
                            t.style.position = "fixed";
                            const i = on(t)
                                , s = {
                                element: t,
                                placeholder: e,
                                offsetParent: o,
                                top: "auto" === i ? 0 : parseInt(i || "0")
                            };
                            t.style.position = n,
                                Be.push(s)
                        }(t),
                        Je(),
                        Ue()
                }
                function en() {
                    for (const t of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))
                        nn(t)
                }
                function nn(t) {
                    if (t.classList.contains("js-notification-top-shelf"))
                        return;
                    rn(t, (parseInt(on(t)) || 0) + We)
                }
                function on(t) {
                    const e = t.getAttribute("data-original-top");
                    if (null != e)
                        return e;
                    const n = window.getComputedStyle(t).top;
                    return t.setAttribute("data-original-top", n),
                        n
                }
                function sn(t, e) {
                    return t.classList.contains("js-notification-top-shelf") ? e : e + We
                }
                function rn(t, e) {
                    t.style.setProperty("top", e + "px", "important")
                }
                function cn(t) {
                    const e = t.ownerDocument;
                    t.scrollIntoView(),
                        setTimeout((()=>{
                                e && e.defaultView && e.defaultView.scrollBy(0, -an(e))
                            }
                        ), 0)
                }
                function an(t) {
                    Fe();
                    const e = t.querySelectorAll(".js-sticky-offset-scroll")
                        , n = t.querySelectorAll(".js-position-sticky");
                    return Math.max(0, ...Array.from(e).map((t=>{
                            const {top: e, height: n} = t.getBoundingClientRect();
                            return 0 === e ? n : 0
                        }
                    ))) + Math.max(0, ...Array.from(n).map((t=>{
                            const {top: e, height: n} = t.getBoundingClientRect()
                                , o = parseInt(getComputedStyle(t).top);
                            if (!t.parentElement)
                                return 0;
                            const i = t.parentElement.getBoundingClientRect().top;
                            return e === o && i < 0 ? n : 0
                        }
                    )))
                }
                function ln(t, e, n) {
                    const o = {
                        hydroEventPayload: t,
                        hydroEventHmac: e,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: n
                    }
                        , i = document.querySelector("meta[name=visitor-payload]");
                    i instanceof HTMLMetaElement && (o.visitorPayload = i.content);
                    const s = document.querySelector("meta[name=visitor-hmac]") || "";
                    s instanceof HTMLMetaElement && (o.visitorHmac = s.content),
                        ne(o, !0)
                }
                function un(t) {
                    ln(t.getAttribute("data-hydro-view") || "", t.getAttribute("data-hydro-view-hmac") || "", t.getAttribute("data-hydro-client-context") || "")
                }
                s(".js-sticky", {
                    constructor: HTMLElement,
                    add(t) {
                        tn(t)
                    },
                    remove(t) {
                        !function(t) {
                            const e = Be.map((t=>t.element)).indexOf(t);
                            Be.splice(e, 1)
                        }(t),
                            Ue()
                    }
                }),
                    s(".js-notification-top-shelf", {
                        constructor: HTMLElement,
                        add(t) {
                            !async function(t) {
                                if (null === t.offsetParent)
                                    return;
                                await F;
                                const e = Math.floor(t.getBoundingClientRect().height);
                                e > 0 && (We = e,
                                    en(),
                                    Fe())
                            }(t)
                        },
                        remove() {
                            for (const t of document.querySelectorAll(".js-notification-top-shelf"))
                                t.remove();
                            We > 0 && (We = 0,
                                en(),
                                Fe())
                        }
                    }),
                    s(".js-notification-shelf-offset-top, .js-position-sticky", {
                        constructor: HTMLElement,
                        add: nn
                    });
                const fn = .6
                    , dn = .4;
                function mn(t) {
                    const e = function(t) {
                        const e = [...Object.values(t)].reduce(((t,e)=>t + e.visitCount), 0);
                        return new Map(Object.keys(t).map((n=>[n, t[n].visitCount / e])))
                    }(t)
                        , n = function(t) {
                        const e = (o = [...Object.keys(t)],
                            i = e=>t[e].lastVisitedAt,
                            o.sort(((t,e)=>i(t) - i(e))))
                            , n = e.length;
                        var o, i;
                        return new Map(e.map(((t,e)=>[t, (e + 1) / n])))
                    }(t);
                    return function(t) {
                        return o = e.get(t) || 0,
                            i = n.get(t) || 0,
                        o * fn + i * dn;
                        var o, i
                    }
                }
                const pn = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/
                    , hn = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/]
                    , gn = [["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/], ["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]];
                function yn(t) {
                    const e = An()
                        , n = Math.floor(Date.now() / 1e3)
                        , o = e[t] || {
                        lastVisitedAt: n,
                        visitCount: 0
                    };
                    o.visitCount += 1,
                        o.lastVisitedAt = n,
                        e[t] = o,
                        xn(function(t) {
                            const e = Object.keys(t);
                            if (e.length <= 100)
                                return t;
                            const n = mn(t)
                                , o = e.sort(((t,e)=>n(e) - n(t))).slice(0, 50);
                            return Object.fromEntries(o.map((e=>[e, t[e]])))
                        }(e))
                }
                function vn(t, e) {
                    return `team:${t}/${e}`
                }
                function bn(t, e) {
                    return `repository:${t}/${e}`
                }
                function wn(t, e) {
                    return `project:${t}/${e}`
                }
                const En = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/
                    , Ln = "jump_to:page_views";
                function xn(t) {
                    !function(t, e) {
                        try {
                            window.localStorage.setItem(t, e)
                        } catch (n) {}
                    }(Ln, JSON.stringify(t))
                }
                function An() {
                    const t = function(t) {
                        try {
                            return window.localStorage.getItem(t)
                        } catch (e) {
                            return null
                        }
                    }(Ln);
                    if (!t)
                        return {};
                    let e;
                    try {
                        e = JSON.parse(t)
                    } catch (o) {
                        return xn({}),
                            {}
                    }
                    const n = {};
                    for (const i in e)
                        i.match(En) && (n[i] = e[i]);
                    return n
                }
                function jn(t) {
                    const e = document.querySelectorAll(t);
                    if (e.length > 0)
                        return e[e.length - 1]
                }
                const Sn = new WeakMap;
                function kn(t) {
                    if (!(t instanceof CustomEvent))
                        throw new Error("assert: event is not a CustomEvent");
                    const e = t.detail.editor;
                    if (!t.target)
                        throw new Error("assert: event.target is null");
                    return Sn.set(t.target, e),
                        e
                }
                function Tn(t) {
                    let e = t;
                    const n = e.ownerDocument;
                    if (!n)
                        return;
                    if (!e.offsetParent)
                        return;
                    const o = n.defaultView.HTMLElement;
                    if (e !== n.body) {
                        for (; e !== n.body; ) {
                            if (!(e.parentElement instanceof o))
                                return;
                            e = e.parentElement;
                            const {position: t, overflowY: n, overflowX: i} = getComputedStyle(e);
                            if ("fixed" === t || "auto" === n || "auto" === i || "scroll" === n || "scroll" === i)
                                break
                        }
                        return e instanceof Document ? null : e
                    }
                }
                function Cn(t, e) {
                    let n = e;
                    const o = t.ownerDocument;
                    if (!o)
                        return;
                    const i = o.documentElement;
                    if (!i)
                        return;
                    if (t === i)
                        return;
                    const s = Mn(t, n);
                    if (!s)
                        return;
                    n = s._container;
                    const r = n === o.documentElement && o.defaultView ? {
                        top: o.defaultView.pageYOffset,
                        left: o.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    }
                        , c = s.top - r.top
                        , a = s.left - r.left
                        , l = n.clientHeight
                        , u = n.clientWidth;
                    return {
                        top: c,
                        left: a,
                        bottom: l - (c + t.offsetHeight),
                        right: u - (a + t.offsetWidth),
                        height: l,
                        width: u
                    }
                }
                function Mn(t, e) {
                    let n = t;
                    const o = n.ownerDocument;
                    if (!o)
                        return;
                    const i = o.documentElement;
                    if (!i)
                        return;
                    const s = o.defaultView.HTMLElement;
                    let r = 0
                        , c = 0;
                    const a = n.offsetHeight
                        , l = n.offsetWidth;
                    for (; n !== o.body && n !== e; ) {
                        if (r += n.offsetTop || 0,
                            c += n.offsetLeft || 0,
                            !(n.offsetParent instanceof s))
                            return;
                        n = n.offsetParent
                    }
                    let u, f, d;
                    if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) {
                        if (!(e instanceof s))
                            return;
                        d = e,
                            u = e.scrollHeight,
                            f = e.scrollWidth
                    } else
                        d = i,
                            u = function(t, e) {
                                return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight)
                            }(o.body, i),
                            f = function(t, e) {
                                return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth)
                            }(o.body, i);
                    return {
                        top: r,
                        left: c,
                        bottom: u - (r + a),
                        right: f - (c + l),
                        _container: d
                    }
                }
                function qn(t) {
                    const e = "==".slice(0, (4 - t.length % 4) % 4)
                        , n = t.replace(/-/g, "+").replace(/_/g, "/") + e
                        , o = atob(n)
                        , i = new ArrayBuffer(o.length)
                        , s = new Uint8Array(i);
                    for (let r = 0; r < o.length; r++)
                        s[r] = o.charCodeAt(r);
                    return i
                }
                function Hn(t) {
                    const e = new Uint8Array(t);
                    let n = "";
                    for (const o of e)
                        n += String.fromCharCode(o);
                    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
                }
                function Rn(t, e, n) {
                    if ("copy" === e)
                        return n;
                    if ("convert" === e)
                        return t(n);
                    if (e instanceof Array)
                        return n.map((n=>Rn(t, e[0], n)));
                    if (e instanceof Object) {
                        const o = {};
                        for (const [i,s] of Object.entries(e))
                            if (i in n)
                                null != n[i] ? o[i] = Rn(t, s.schema, n[i]) : o[i] = null;
                            else if (s.required)
                                throw new Error("Missing key: " + i);
                        return o
                    }
                }
                function Dn(t) {
                    return {
                        required: !0,
                        schema: t
                    }
                }
                function On(t) {
                    return {
                        required: !1,
                        schema: t
                    }
                }
                o("codeEditor:ready", ".js-code-editor", kn);
                const _n = {
                    type: Dn("copy"),
                    id: Dn("convert"),
                    transports: On("copy")
                }
                    , $n = {
                    appid: On("copy"),
                    appidExclude: On("copy"),
                    credProps: On("copy")
                }
                    , In = {
                    appid: On("copy"),
                    appidExclude: On("copy"),
                    credProps: On("copy")
                }
                    , Pn = {
                    publicKey: Dn({
                        rp: Dn("copy"),
                        user: Dn({
                            id: Dn("convert"),
                            name: Dn("copy"),
                            displayName: Dn("copy")
                        }),
                        challenge: Dn("convert"),
                        pubKeyCredParams: Dn("copy"),
                        timeout: On("copy"),
                        excludeCredentials: On([_n]),
                        authenticatorSelection: On("copy"),
                        attestation: On("copy"),
                        extensions: On($n)
                    }),
                    signal: On("copy")
                }
                    , Nn = {
                    type: Dn("copy"),
                    id: Dn("copy"),
                    rawId: Dn("convert"),
                    response: Dn({
                        clientDataJSON: Dn("convert"),
                        attestationObject: Dn("convert")
                    }),
                    clientExtensionResults: Dn(In)
                }
                    , Vn = {
                    mediation: On("copy"),
                    publicKey: Dn({
                        challenge: Dn("convert"),
                        timeout: On("copy"),
                        rpId: On("copy"),
                        allowCredentials: On([_n]),
                        userVerification: On("copy"),
                        extensions: On($n)
                    }),
                    signal: On("copy")
                }
                    , Xn = {
                    type: Dn("copy"),
                    id: Dn("copy"),
                    rawId: Dn("convert"),
                    response: Dn({
                        clientDataJSON: Dn("convert"),
                        authenticatorData: Dn("convert"),
                        signature: Dn("convert"),
                        userHandle: Dn("convert")
                    }),
                    clientExtensionResults: Dn(In)
                };
                function zn() {
                    return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
                }
                function Wn() {
                    return zn() ? "supported" : "unsupported"
                }
                let Bn = !1;
                async function Un() {
                    const t = document.querySelector("link[rel=sudo-modal]")
                        , e = document.querySelector(".js-sudo-prompt");
                    if (e instanceof HTMLTemplateElement)
                        return e;
                    if (t) {
                        const e = await y(document, function(t) {
                            const e = new URL(t,window.location.origin)
                                , n = new URLSearchParams(e.search.slice(1));
                            return n.set("webauthn-support", Wn()),
                                e.search = n.toString(),
                                e.toString()
                        }(t.href));
                        return document.body.appendChild(e),
                            document.querySelector(".js-sudo-prompt")
                    }
                    throw new Error("couldn't load sudo prompt")
                }
                let Fn = !1;
                async function Kn() {
                    if (Bn)
                        return !1;
                    Bn = !0,
                        Fn = !1;
                    const t = (await Un()).content.cloneNode(!0)
                        , e = await S({
                        content: t
                    });
                    return await new Promise((t=>{
                            e.addEventListener("dialog:remove", (function() {
                                    Bn = !1,
                                        t()
                                }
                            ), {
                                once: !0
                            })
                        }
                    )),
                        Fn
                }
                function Jn(t) {
                    if (t.querySelector(".js-task-list-field")) {
                        const e = t.querySelectorAll("task-lists");
                        for (const t of e)
                            t instanceof c && (t.disabled = !1)
                    }
                }
                function Yn(t, e, n) {
                    const o = t.querySelector(".js-comment-update");
                    !function(t) {
                        for (const e of t.querySelectorAll("task-lists"))
                            e instanceof c && (e.disabled = !0)
                    }(t),
                        co(t);
                    const i = o.elements.namedItem("task_list_track");
                    i instanceof Element && i.remove();
                    const s = o.elements.namedItem("task_list_operation");
                    s instanceof Element && s.remove();
                    const r = document.createElement("input");
                    r.setAttribute("type", "hidden"),
                        r.setAttribute("name", "task_list_track"),
                        r.setAttribute("value", e),
                        o.appendChild(r);
                    const a = document.createElement("input");
                    if (a.setAttribute("type", "hidden"),
                        a.setAttribute("name", "task_list_operation"),
                        a.setAttribute("value", JSON.stringify(n)),
                        o.appendChild(a),
                        !o.elements.namedItem("task_list_key")) {
                        const t = o.querySelector(".js-task-list-field").getAttribute("name").split("[")[0]
                            , e = document.createElement("input");
                        e.setAttribute("type", "hidden"),
                            e.setAttribute("name", "task_list_key"),
                            e.setAttribute("value", t),
                            o.appendChild(e)
                    }
                    t.classList.remove("is-comment-stale"),
                        H(o)
                }
                r(".js-sudo-form", (async function(t, e) {
                        try {
                            await e.text()
                        } catch (n) {
                            if (!n.response)
                                throw n;
                            let e;
                            switch (n.response.status) {
                                case 401:
                                    e = "Incorrect password.";
                                    break;
                                case 429:
                                    e = "Too many password attempts. Please wait and try again later.";
                                    break;
                                default:
                                    e = "Failed to receive a response. Please try again later."
                            }
                            return t.querySelector(".js-sudo-error").textContent = e,
                                t.querySelector(".js-sudo-error").hidden = !1,
                                void (t.querySelector(".js-sudo-password").value = "")
                        }
                        Fn = !0,
                            t.closest("details").removeAttribute("open")
                    }
                )),
                    s(".js-task-list-container .js-task-list-field", (function(t) {
                            const e = t.closest(".js-task-list-container");
                            Jn(e),
                                co(e)
                        }
                    )),
                    o("task-lists-move", "task-lists", (function(t) {
                            const {src: e, dst: n} = t.detail;
                            Yn(t.currentTarget.closest(".js-task-list-container"), "reordered", {
                                operation: "move",
                                src: e,
                                dst: n
                            })
                        }
                    )),
                    o("task-lists-check", "task-lists", (function(t) {
                            const {position: e, checked: n} = t.detail;
                            Yn(t.currentTarget.closest(".js-task-list-container"), "checked:" + (n ? 1 : 0), {
                                operation: "check",
                                position: e,
                                checked: n
                            })
                        }
                    )),
                    r(".js-task-list-container .js-comment-update", (async function(t, e) {
                            const n = t.closest(".js-task-list-container")
                                , o = t.elements.namedItem("task_list_track");
                            o instanceof Element && o.remove();
                            const i = t.elements.namedItem("task_list_operation");
                            let s;
                            i instanceof Element && i.remove();
                            try {
                                s = await e.json()
                            } catch (r) {
                                let t;
                                try {
                                    t = JSON.parse(r.response.text)
                                } catch (qn) {}
                                if (t && t.stale) {
                                    const t = n.querySelector(".js-task-list-field");
                                    t.classList.add("session-resumable-canceled"),
                                        t.classList.remove("js-session-resumable")
                                } else
                                    window.location.reload()
                            }
                            s && (i && s.json.source && (n.querySelector(".js-task-list-field").value = s.json.source),
                                Jn(n),
                                requestAnimationFrame((()=>co(n))))
                        }
                    ));
                let Gn = !1
                    , Zn = !1;
                function Qn(t) {
                    const e = "insertLineBreak" === t.inputType;
                    Gn = !!e
                }
                function to(t) {
                    const e = t;
                    if (!Gn) {
                        if (!("insertLineBreak" === e.inputType))
                            return
                    }
                    !function(t) {
                        const e = function(t, e) {
                            const n = e[0];
                            if (!n || !t)
                                return;
                            const o = t.substring(0, n).split("\n")
                                , i = o[o.length - 2]
                                , s = null == i ? void 0 : i.match(ro);
                            if (!s)
                                return;
                            const r = s[0]
                                , c = s[1]
                                , a = s[2]
                                , l = parseInt(s[3], 10)
                                , u = Boolean(s[4]);
                            let f = `${isNaN(l) ? a : l + 1 + "."} ${u ? "[ ] " : ""}`
                                , d = t.indexOf("\n", n);
                            d < 0 && (d = t.length);
                            const m = t.substring(n, d);
                            m.startsWith(f) && (f = "");
                            if (i.replace(r, "").trim().length > 0 || m.trim().length > 0) {
                                const e = `${c}${f}`;
                                return {
                                    text: t.substring(0, n) + e + t.substring(n),
                                    selection: [n + e.length, n + e.length]
                                }
                            }
                            {
                                const e = n - ("\n" + r).length;
                                return {
                                    text: t.substring(0, e) + t.substring(n),
                                    selection: [e, e]
                                }
                            }
                        }(t.value, [t.selectionStart, t.selectionEnd]);
                        if (void 0 === e)
                            return;
                        t.value = e.text,
                            t.selectionStart = e.selection[0],
                            t.selectionEnd = e.selection[1]
                    }(e.target),
                        Gn = !1
                }
                function eo(t) {
                    if (Zn)
                        return;
                    const e = t;
                    if ("Enter" === e.key && e.shiftKey) {
                        const t = e.target
                            , o = function(t, e) {
                            const n = e[0];
                            if (!n || !t)
                                return;
                            const o = t.substring(0, n).split("\n")
                                , i = o[o.length - 1]
                                , s = null == i ? void 0 : i.match(so);
                            if (!s)
                                return;
                            const r = "\n" + (s[1] || "");
                            return {
                                text: t.substring(0, n) + r + t.substring(n),
                                selection: [n + r.length, n + r.length]
                            }
                        }(t.value, [t.selectionStart, t.selectionEnd]);
                        if (void 0 === o)
                            return;
                        t.value = o.text,
                            t.selectionStart = o.selection[0],
                            t.selectionEnd = o.selection[1],
                            e.preventDefault(),
                            n(t, "change")
                    }
                }
                function no() {
                    Zn = !0
                }
                function oo() {
                    Zn = !1
                }
                function io(t) {
                    if (Zn)
                        return;
                    const e = t;
                    if ("Escape" === e.key)
                        return void function(t) {
                            const e = t.target;
                            "backward" === e.selectionDirection ? e.selectionEnd = e.selectionStart : e.selectionStart = e.selectionEnd
                        }(t);
                    if ("Tab" !== e.key)
                        return;
                    const n = e.target
                        , o = function(t, e, n) {
                        const o = e[0] || 0
                            , i = e[1] || o;
                        if (null === e[0] || o === i)
                            return;
                        const s = t.substring(0, o).lastIndexOf("\n") + 1
                            , r = t.indexOf("\n", i - 1)
                            , c = r > 0 ? r : t.length - 1
                            , a = t.substring(s, c).split("\n");
                        let l = !1
                            , u = 0
                            , f = 0;
                        const d = [];
                        for (const g of a) {
                            const t = g.match(/^\s*/);
                            if (t) {
                                let e = t[0];
                                const o = g.substring(e.length);
                                if (n) {
                                    const t = e.length;
                                    e = e.slice(0, -2),
                                        u = l ? u : e.length - t,
                                        l = !0,
                                        f += e.length - t
                                } else
                                    e += "  ",
                                        u = 2,
                                        f += 2;
                                d.push(e + o)
                            }
                        }
                        const m = d.join("\n")
                            , p = t.substring(0, s) + m + t.substring(c)
                            , h = [Math.max(s, o + u), i + f];
                        return {
                            text: p,
                            selection: h
                        }
                    }(n.value, [n.selectionStart, n.selectionEnd], e.shiftKey);
                    void 0 !== o && (e.preventDefault(),
                        n.value = o.text,
                        n.selectionStart = o.selection[0],
                        n.selectionEnd = o.selection[1])
                }
                Zt("TASK_LIST_AUTOCOMPLETE") && s(".js-task-list-field", {
                    subscribe: t=>b(v(t, "keydown", io), v(t, "keydown", eo), v(t, "beforeinput", Qn), v(t, "input", to), v(t, "compositionstart", no), v(t, "compositionend", oo))
                });
                const so = /^(\s*)?/;
                const ro = /^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;
                function co(t) {
                    if (!Zt("TASK_LISTS_UI"))
                        return;
                    if (t.closest(".js-timeline-item"))
                        return;
                    const e = t.querySelectorAll("[type=checkbox]")
                        , n = e.length
                        , o = Array.from(e).filter((t=>t.checked)).length
                        , i = document.querySelectorAll("subtasks-progress[data-type=checklist]");
                    for (const s of i)
                        s.setAttribute("data-completed", String(o)),
                            s.setAttribute("data-total", String(n))
                }
                let ao = class ActionsPolicyFormElement extends HTMLElement {
                        connectedCallback() {
                            this.submitButton.disabled = !0,
                                this.toggleSpecificOptions()
                        }
                        enableForm() {
                            this.submitButton.disabled = !1
                        }
                        toggleSpecificOptions() {
                            this.selectRadio.checked ? this.specificOptions.hidden = !1 : this.specificOptions.hidden = !0
                        }
                    }
                ;
                function lo(t, e) {
                    let n = t;
                    const o = t.ownerDocument;
                    n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o);
                    if (n instanceof o.defaultView.Document) {
                        const t = null != e.top ? e.top : o.defaultView.pageYOffset
                            , n = null != e.left ? e.left : o.defaultView.pageXOffset;
                        return void o.defaultView.scrollTo(n, t)
                    }
                    if (!(n instanceof o.defaultView.HTMLElement))
                        throw new Error("invariant");
                    n.scrollTop = e.top,
                    null != e.left && (n.scrollLeft = e.left)
                }
                a([l], ao.prototype, "specificOptions", void 0),
                    a([l], ao.prototype, "submitButton", void 0),
                    a([l], ao.prototype, "selectRadio", void 0),
                    ao = a([u], ao);
                const uo = navigator.userAgent.match(/Macintosh/)
                    , fo = uo ? "metaKey" : "ctrlKey"
                    , mo = uo ? "Meta" : "Control";
                let po = !1
                    , ho = {
                    x: 0,
                    y: 0
                };
                function go(t) {
                    t instanceof MouseEvent && (ho.x === t.clientX && ho.y === t.clientY || (po = !1),
                        ho = {
                            x: t.clientX,
                            y: t.clientY
                        })
                }
                function yo(t) {
                    if (po)
                        return;
                    const e = t.currentTarget
                        , {target: n} = t;
                    if (!(n instanceof Element && e instanceof HTMLElement && e.closest(".js-active-navigation-container")))
                        return;
                    const o = n.closest(".js-navigation-item");
                    o && Co(o, e)
                }
                s(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                    subscribe: t=>b(v(t, "mouseover", go), v(t, "mouseover", yo))
                });
                let vo = 0;
                function bo(t) {
                    if (t.target !== document.body && t.target instanceof HTMLElement && !t.target.classList.contains("js-navigation-enable"))
                        return;
                    po = !0;
                    const e = Mo();
                    let o = !1;
                    if (e) {
                        const i = e.querySelector(".js-navigation-item.navigation-focus") || e;
                        o = n(i, "navigation:keydown", {
                            hotkey: f(t),
                            originalEvent: t,
                            originalTarget: t.target
                        })
                    }
                    o || t.preventDefault()
                }
                function wo(t) {
                    const e = t.modifierKey || t.altKey || t.ctrlKey || t.metaKey;
                    n(t.currentTarget, "navigation:open", {
                        modifierKey: e,
                        shiftKey: t.shiftKey
                    }) || t.preventDefault()
                }
                function Eo(t) {
                    const e = Mo();
                    t !== e && (e && Lo(e),
                        t.classList.add("js-active-navigation-container"))
                }
                function Lo(t) {
                    t.classList.remove("js-active-navigation-container")
                }
                s(".js-active-navigation-container", {
                    add() {
                        vo++,
                        1 === vo && document.addEventListener("keydown", bo)
                    },
                    remove() {
                        vo--,
                        0 === vo && document.removeEventListener("keydown", bo)
                    }
                }),
                    o("navigation:keydown", ".js-active-navigation-container", (function(t) {
                            const e = t.currentTarget
                                , n = t.detail.originalTarget.matches("input, textarea")
                                , o = t.target;
                            if (o.classList.contains("js-navigation-item"))
                                if (n) {
                                    if (uo)
                                        switch (f(t.detail.originalEvent)) {
                                            case "Control+n":
                                                ko(o, e);
                                                break;
                                            case "Control+p":
                                                So(o, e)
                                        }
                                    switch (f(t.detail.originalEvent)) {
                                        case "ArrowUp":
                                            So(o, e);
                                            break;
                                        case "ArrowDown":
                                            ko(o, e);
                                            break;
                                        case "Enter":
                                        case mo + "+Enter":
                                            To(o, t.detail.originalEvent[fo])
                                    }
                                } else {
                                    if (uo)
                                        switch (f(t.detail.originalEvent)) {
                                            case "Control+n":
                                                ko(o, e);
                                                break;
                                            case "Control+p":
                                                So(o, e);
                                                break;
                                            case "Alt+v":
                                                !function(t, e) {
                                                    const n = qo(e);
                                                    let o = n.indexOf(t);
                                                    const i = Tn(t);
                                                    if (null == i)
                                                        return;
                                                    let s, r;
                                                    for (; (s = n[o - 1]) && (r = Cn(s, i)) && r.top >= 0; )
                                                        o--;
                                                    if (s) {
                                                        if (Co(s, e))
                                                            return;
                                                        Ro(i, s)
                                                    }
                                                }(o, e);
                                                break;
                                            case "Control+v":
                                                !function(t, e) {
                                                    const n = qo(e);
                                                    let o = n.indexOf(t);
                                                    const i = Tn(t);
                                                    if (null == i)
                                                        return;
                                                    let s, r;
                                                    for (; (s = n[o + 1]) && (r = Cn(s, i)) && r.bottom >= 0; )
                                                        o++;
                                                    if (s) {
                                                        if (Co(s, e))
                                                            return;
                                                        Ro(i, s)
                                                    }
                                                }(o, e)
                                        }
                                    switch (f(t.detail.originalEvent)) {
                                        case "j":
                                        case "J":
                                            ko(o, e);
                                            break;
                                        case "k":
                                        case "K":
                                            So(o, e);
                                            break;
                                        case "o":
                                        case "Enter":
                                        case mo + "+Enter":
                                            To(o, t.detail[fo])
                                    }
                                }
                            else {
                                const o = qo(e)[0];
                                if (o)
                                    if (n) {
                                        if (uo)
                                            switch (f(t.detail.originalEvent)) {
                                                case "Control+n":
                                                    Co(o, e)
                                            }
                                        switch (f(t.detail.originalEvent)) {
                                            case "ArrowDown":
                                                Co(o, e)
                                        }
                                    } else {
                                        if (uo)
                                            switch (f(t.detail.originalEvent)) {
                                                case "Control+n":
                                                case "Control+v":
                                                    Co(o, e)
                                            }
                                        switch (f(t.detail.originalEvent)) {
                                            case "j":
                                                Co(o, e)
                                        }
                                    }
                            }
                            if (n) {
                                if (uo)
                                    switch (f(t.detail.originalEvent)) {
                                        case "Control+n":
                                        case "Control+p":
                                            t.preventDefault()
                                    }
                                switch (f(t.detail.originalEvent)) {
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        t.preventDefault();
                                        break;
                                    case "Enter":
                                        t.preventDefault()
                                }
                            } else {
                                if (uo)
                                    switch (f(t.detail.originalEvent)) {
                                        case "Control+n":
                                        case "Control+p":
                                        case "Control+v":
                                        case "Alt+v":
                                            t.preventDefault()
                                    }
                                switch (f(t.detail.originalEvent)) {
                                    case "j":
                                    case "k":
                                        t.preventDefault();
                                        break;
                                    case "o":
                                    case "Enter":
                                    case fo + "+Enter":
                                        t.preventDefault()
                                }
                            }
                        }
                    )),
                    o("click", ".js-active-navigation-container .js-navigation-item", (function(t) {
                            wo(t)
                        }
                    )),
                    o("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", (function(t) {
                            const e = t.currentTarget.classList.contains("js-navigation-open") ? t.currentTarget : t.currentTarget.querySelector(".js-navigation-open");
                            if (e instanceof HTMLAnchorElement) {
                                if (t.detail.modifierKey)
                                    window.open(e.href, "_blank"),
                                        window.focus();
                                else {
                                    e.dispatchEvent(new MouseEvent("click",{
                                        bubbles: !0,
                                        cancelable: !0
                                    })) && e.click()
                                }
                                t.preventDefault()
                            } else
                                wo(t)
                        }
                    ));
                const xo = [];
                function Ao(t, e) {
                    const n = e || t
                        , o = qo(t)[0]
                        , i = n.closest(".js-navigation-item") || o;
                    if (Eo(t),
                    i instanceof HTMLElement) {
                        if (Co(i, t))
                            return;
                        Do(Tn(i), i)
                    }
                }
                function jo(t) {
                    const e = t.querySelectorAll(".js-navigation-item.navigation-focus");
                    for (const n of e)
                        n.classList.remove("navigation-focus")
                }
                function So(t, e) {
                    const n = qo(e)
                        , o = n.indexOf(t)
                        , i = n[o - 1];
                    if (i) {
                        if (Co(i, e))
                            return;
                        const t = Tn(i);
                        "page" === Ho(e) ? Ro(t, i) : Do(t, i)
                    }
                }
                function ko(t, e) {
                    const n = qo(e)
                        , o = n.indexOf(t)
                        , i = n[o + 1];
                    if (i) {
                        if (Co(i, e))
                            return;
                        const t = Tn(i);
                        "page" === Ho(e) ? Ro(t, i) : Do(t, i)
                    }
                }
                function To(t, e=!1) {
                    n(t, "navigation:keyopen", {
                        modifierKey: e
                    })
                }
                function Co(t, e) {
                    return !n(t, "navigation:focus") || (jo(e),
                        t.classList.add("navigation-focus"),
                        !1)
                }
                function Mo() {
                    return document.querySelector(".js-active-navigation-container")
                }
                function qo(t) {
                    const e = [];
                    for (const n of t.querySelectorAll(".js-navigation-item"))
                        n instanceof HTMLElement && je(n) && e.push(n);
                    return e
                }
                function Ho(t) {
                    return t.getAttribute("data-navigation-scroll") || "item"
                }
                function Ro(t, e, n="smooth") {
                    const o = Cn(e, t);
                    o && (o.bottom <= 0 ? e.scrollIntoView({
                        behavior: n,
                        block: "start"
                    }) : o.top <= 0 && e.scrollIntoView({
                        behavior: n,
                        block: "end"
                    }))
                }
                function Do(t, e) {
                    const n = Mn(e, t)
                        , o = Cn(e, t);
                    if (null != n && null != o)
                        if (o.bottom <= 0 && document.body) {
                            lo(t, {
                                top: (null != t.offsetParent ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
                            })
                        } else
                            o.top <= 0 && lo(t, {
                                top: n.top
                            })
                }
                async function Oo(t, e=!0) {
                    const n = t.querySelector('[name="codespace[location]"]');
                    if (!n || n.value)
                        return;
                    const o = t.querySelector("button[type=submit]");
                    o instanceof HTMLInputElement && (o.disabled = !0);
                    const i = t.getAttribute("data-codespace-locations-url");
                    if (!i)
                        return;
                    const s = await _o(i);
                    return e && s && (n.value = s.current),
                        s
                }
                async function _o(t) {
                    const e = await fetch(t, {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            Accept: "application/json"
                        }
                    });
                    if (!e.ok) {
                        const t = new Error
                            , n = e.statusText ? " " + e.statusText : "";
                        throw t.message = `HTTP ${e.status}${n}`,
                            t
                    }
                    return e.json()
                }
                function $o(t) {
                    var e;
                    const o = t.querySelector(".js-inline-comment-form-container");
                    o.classList.add("open"),
                    null === (e = o.querySelector(".js-write-tab")) || void 0 === e || e.click(),
                        o.querySelector(".js-comment-field").focus(),
                        n(o, "inlinecomment:focus")
                }
                function Io(t) {
                    t.reset();
                    const e = t.closest(".js-inline-comment-form-container");
                    e.classList.remove("open"),
                        n(e, "inlinecomment:collapse")
                }
                o("submit", ".js-prefetch-codespace-location", (async function(t) {
                        const e = t.currentTarget;
                        t.preventDefault(),
                            await Oo(e),
                            e.submit()
                    }
                )),
                    o("click", ".js-toggle-inline-comment-form", (function(t) {
                            $o(t.currentTarget.closest(".js-line-comments"))
                        }
                    )),
                    o("quote-selection", ".js-line-comments", (function(t) {
                            $o(t.currentTarget)
                        }
                    )),
                    A("keydown", ".js-inline-comment-form-container form .js-comment-field", (function(t) {
                            const e = t.target;
                            if (!e.classList.contains("js-navigation-enable") && "Escape" === t.key && 0 === e.value.length) {
                                Io(e.closest("form")),
                                    t.preventDefault()
                            }
                        }
                    )),
                    o("click", ".js-hide-inline-comment-form", (function(t) {
                            const e = t.currentTarget.closest("form")
                                , n = t.currentTarget.closest(".js-inline-comment-form-container").querySelector(".js-multi-line-preview");
                            n && (n.hidden = !0),
                                !O(e) || confirm(t.target.getAttribute("data-confirm-cancel-text")) ? Io(e) : t.preventDefault()
                        }
                    ));
                class DiffPosition {
                    constructor(t, e, n) {
                        this.diffId = t,
                            this.side = e,
                            this.lineNumber = n,
                            this.element = Jt(document, this.anchor())
                    }
                    sideForCommenting() {
                        return this.element && this.element.classList.contains("blob-num-context") ? "right" : {
                            R: "right",
                            L: "left"
                        }[this.side]
                    }
                    isContext() {
                        return !!this.element && this.element.classList.contains("blob-num-context")
                    }
                    anchor() {
                        return `${this.diffId}${this.anchorSuffix()}`
                    }
                    anchorSuffix() {
                        return `${this.side}${this.lineNumber}`
                    }
                    is(t) {
                        return this.diffId === t.diffId && this.side === t.side && this.lineNumber === t.lineNumber
                    }
                }
                class DiffRange {
                    constructor(t, e, n, o, i) {
                        this.elements = new Set,
                            this.isParsed = !1,
                            this.isSplit = !1,
                            this._rows = new Set,
                            this._isAcrossHunks = !1,
                            this._isContextOnly = !0,
                            this._includesExpandedLine = !1,
                            this.diffId = t,
                            this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor="${t}"]`),
                        this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")),
                            this.start = new DiffPosition(t,e,n),
                            this.end = new DiffPosition(t,o,i),
                            this.lineCount = 0,
                            this.parse()
                    }
                    anchor() {
                        const t = [];
                        return t.push(this.start.anchor()),
                        this.start.is(this.end) || t.push(this.end.anchorSuffix()),
                            t.join("-")
                    }
                    parse() {
                        if (!this.diffTable)
                            return;
                        let t = this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));
                        t = this.filterInRange(t),
                            this.lineCount = t.length,
                            this.elements = this.expandRelatedElements(t),
                            this.isParsed = !0
                    }
                    unify(t) {
                        if (!this.isSplit)
                            return Array.from(t);
                        const e = [];
                        let n = []
                            , o = [];
                        for (const i of t)
                            i.classList.contains("blob-num-addition") ? n.push(i) : i.classList.contains("blob-num-deletion") ? o.push(i) : (e.push(...o, ...n, i),
                                n = [],
                                o = []);
                        return e.push(...o, ...n),
                            e
                    }
                    filterInRange(t) {
                        if (!this.start.element || !this.end.element)
                            return [];
                        let e = t.indexOf(this.start.element)
                            , n = t.indexOf(this.end.element);
                        if (e > n) {
                            [e,n] = [n, e];
                            const [t,o] = [this.end, this.start];
                            this.start = t,
                                this.end = o
                        }
                        return t.slice(e, n + 1)
                    }
                    isContextOnly() {
                        return this.isParsed || this.parse(),
                            this._isContextOnly
                    }
                    isAcrossHunks() {
                        return this.isParsed || this.parse(),
                            this._isAcrossHunks
                    }
                    includesExpandedLine() {
                        return this.isParsed || this.parse(),
                            this._includesExpandedLine
                    }
                    rows() {
                        return this.isParsed || this.parse(),
                            this._rows
                    }
                    expandRelatedElements(t) {
                        const e = this.isSplit
                            , n = t[0]
                            , o = t[t.length - 1];
                        if (n && o) {
                            const t = n.closest("[data-hunk]")
                                , e = o.closest("[data-hunk]");
                            if (t && e) {
                                t.getAttribute("data-hunk") !== e.getAttribute("data-hunk") && (this._isAcrossHunks = !0)
                            }
                        }
                        return t.reduce(((t,n)=>{
                                !this._includesExpandedLine && n.closest(".blob-expanded") && (this._includesExpandedLine = !0);
                                const o = n.parentElement;
                                o instanceof HTMLElement && this._rows.add(o);
                                const i = n.classList.contains("blob-num-deletion") || n.classList.contains("blob-num-addition");
                                if (i && (this._isContextOnly = !1),
                                    !o)
                                    return t;
                                if (e && i) {
                                    return Array.from(o.children).indexOf(n) < 2 ? t.add(o.children[0]).add(o.children[1]) : t.add(o.children[2]).add(o.children[3])
                                }
                                for (const e of Array.from(o.children))
                                    t.add(e);
                                return t
                            }
                        ), new Set)
                    }
                }
                function Po(t) {
                    const e = t.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                    if (null != e && 6 === e.length)
                        return e;
                    const n = t.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                    return null != n && 6 === n.length ? n : null
                }
                let No = null
                    , Vo = null
                    , Xo = !1
                    , zo = null;
                function Wo(t) {
                    return !!t.closest(".js-multi-line-comments-enabled")
                }
                function Bo(t, e) {
                    if (!Wo(t))
                        return !1;
                    const {start: {lineNumber: n}, end: {lineNumber: o}} = e;
                    return (n !== o || !e.isContextOnly()) && (!e.isAcrossHunks() && !e.includesExpandedLine())
                }
                function Uo(t) {
                    return t.closest(".js-diff-table").classList.contains("is-selecting")
                }
                function Fo(t, e) {
                    let n = t.id;
                    if (e) {
                        const e = Po(n);
                        if (!e)
                            return;
                        const o = e[1]
                            , i = e[2]
                            , s = e[3];
                        if (No && No.diffId === o) {
                            if (i === No.start.side && s < No.start.lineNumber)
                                return;
                            const e = new DiffRange(o,No.start.side,No.start.lineNumber,i,+s);
                            n = e.anchor();
                            const r = t.closest(".js-file-content[data-hydro-view]");
                            if (r instanceof HTMLElement && function(t, e) {
                                const n = {
                                    starting_diff_position: e.start.side + e.start.lineNumber,
                                    ending_diff_position: e.end.side + e.end.lineNumber,
                                    line_count: e.lineCount
                                };
                                t.setAttribute("data-hydro-client-context", JSON.stringify(n)),
                                    un(t)
                            }(r, e),
                            Xo && Uo(t)) {
                                t.closest(".js-diff-table").classList.toggle("is-commenting", Bo(t, e))
                            }
                            Vo = function() {
                                if (Bo(t, e)) {
                                    const n = `.js-add-line-comment[data-side="${e.end.sideForCommenting()}"]`
                                        , o = t.closest("tr").querySelector(n);
                                    o && e && o.click()
                                }
                            }
                        }
                    }
                    window.history.replaceState(null, null, "#" + n),
                        Qo()
                }
                function Ko(t) {
                    if (!(t instanceof HTMLElement))
                        return null;
                    if (t.classList.contains("js-linkable-line-number"))
                        return t;
                    const e = t.previousElementSibling;
                    return e ? Ko(e) : null
                }
                function Jo(t) {
                    No && (t.target.closest(".js-diff-table") || (window.history.replaceState(null, null, "#"),
                        Qo()))
                }
                function Yo(t) {
                    const e = t.target;
                    if (!(e instanceof Element))
                        return;
                    zo && function() {
                        if (!zo)
                            return;
                        Fo(zo, !1);
                        const t = zo.closest(".js-diff-table");
                        zo = null,
                            t.classList.add("is-selecting"),
                            t.classList.add("is-commenting"),
                            document.addEventListener("mouseup", (function(e) {
                                    t.classList.remove("is-selecting"),
                                        t.classList.remove("is-selecting", "is-commenting"),
                                    Vo && Vo(),
                                        Vo = null,
                                        Zo(t),
                                        e.preventDefault()
                                }
                            ), {
                                once: !0
                            })
                    }();
                    const n = e.closest(".blob-code, .js-linkable-line-number");
                    var o;
                    return n ? n.classList.contains("blob-code") ? function(t) {
                        const e = Ko(t);
                        e && Uo(e) && Fo(e, !0)
                    }(n) : void (n.classList.contains("js-linkable-line-number") && Uo(o = n) && Fo(o, !0)) : void 0
                }
                function Go(t) {
                    t.addEventListener("mouseenter", Yo, {
                        capture: !0
                    })
                }
                function Zo(t) {
                    Xo = !1,
                        t.removeEventListener("mouseenter", Yo, {
                            capture: !0
                        }),
                        setTimeout((()=>{
                                document.addEventListener("click", Jo, {
                                    once: !0
                                })
                            }
                        ), 0)
                }
                function Qo() {
                    if (No) {
                        for (const t of No.elements)
                            t.classList.remove("selected-line", "selected-line-top", "selected-line-bottom", "selected-line-left", "selected-line-right");
                        No = null
                    }
                    const t = Po(window.location.hash);
                    if (!t)
                        return;
                    const e = t[1]
                        , n = t[2]
                        , o = t[3]
                        , i = t[4] || n
                        , s = t[5] || o;
                    No = new DiffRange(e,n,+o,i,+s);
                    const r = Array.from(No.elements)[0];
                    r && (r.closest(".js-diff-table").classList.contains("file-diff-split") ? function() {
                        if (!No)
                            return;
                        for (const s of No.elements)
                            s.classList.add("selected-line");
                        const t = []
                            , e = []
                            , n = []
                            , o = [];
                        for (const s of No.rows()) {
                            const [i,r,c,a] = s.children;
                            t.push(i),
                                e.push(r),
                                n.push(c),
                                o.push(a)
                        }
                        function i(t) {
                            for (const [e,n] of t.entries()) {
                                if (n.classList.contains("empty-cell"))
                                    continue;
                                const o = t[e - 1];
                                o && o.classList.contains("selected-line") || n.classList.add("selected-line-top");
                                const i = t[e + 1];
                                i && i.classList.contains("selected-line") || n.classList.add("selected-line-bottom")
                            }
                        }
                        i(t),
                            i(e),
                            i(n),
                            i(o);
                        for (const [s,r] of e.entries())
                            o[s].classList.contains("selected-line") || r.classList.add("selected-line-right");
                        for (const [s,r] of n.entries())
                            e[s].classList.contains("selected-line") || r.classList.add("selected-line-left")
                    }() : function() {
                        if (!No)
                            return;
                        for (const o of No.elements)
                            o.classList.add("selected-line");
                        const t = Array.from(No.rows())
                            , e = t[0];
                        for (const o of e.children)
                            o.classList.add("selected-line-top");
                        const n = t[t.length - 1];
                        for (const o of n.children)
                            o.classList.add("selected-line-bottom")
                    }())
                }
                o("mousedown", ".js-add-line-comment", (function(t) {
                        const e = t.target.parentElement;
                        if (!e)
                            return;
                        if (!Wo(t.target))
                            return;
                        const n = Ko(e);
                        if (!n)
                            return;
                        const o = t.target.closest(".js-diff-table");
                        Go(o),
                            zo = n,
                            Xo = !0,
                            t.target.addEventListener("mouseup", (function() {
                                    Zo(o),
                                        zo = null,
                                        Xo = !1
                                }
                            ), {
                                once: !0
                            }),
                        No && No.lineCount > 1 && t.preventDefault()
                    }
                )),
                    o("mousedown", ".js-linkable-line-number", (function(t) {
                            if (!(t instanceof MouseEvent))
                                return;
                            if (0 !== t.button)
                                return;
                            const e = t.target;
                            if (!(e instanceof Element))
                                return;
                            const n = e.closest(".js-diff-table");
                            n.classList.add("is-selecting"),
                                Go(n),
                                document.addEventListener("mouseup", (function() {
                                        e.closest(".js-diff-table").classList.remove("is-selecting"),
                                            Zo(n)
                                    }
                                ), {
                                    once: !0
                                }),
                                Fo(e, t instanceof MouseEvent && t.shiftKey),
                                t.preventDefault()
                        }
                    )),
                    Y(Qo),
                    s(".blob-expanded", Qo),
                    s(".js-diff-progressive-loader", (function(t) {
                            t.addEventListener("load", Qo)
                        }
                    )),
                    s(".js-diff-entry-loader", (function(t) {
                            t.addEventListener("load", Qo)
                        }
                    )),
                    o("click", ".js-rich-diff.collapsed .js-expandable", (function(t) {
                            if (!(t.target instanceof Element))
                                return;
                            t.preventDefault();
                            t.target.closest(".js-rich-diff").classList.remove("collapsed")
                        }
                    )),
                    o("click", ".js-show-rich-diff", (function(t) {
                            const e = t.currentTarget.closest(".js-warn-no-visible-changes");
                            if (!e)
                                return;
                            e.classList.add("d-none");
                            const n = e.parentElement.querySelector(".js-no-rich-changes");
                            n && n.classList.remove("d-none")
                        }
                    ))
            }
        }
    }
));
//# sourceMappingURL=chunk-frameworks-9628f029.js.map

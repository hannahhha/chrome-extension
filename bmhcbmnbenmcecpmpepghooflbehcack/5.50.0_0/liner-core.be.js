/*! LINER Core Script | (c) Made by Jin Woo Kim, CEO at LINER Inc. | (License) Not allowed to be used by anyone, except the maker(Jin Woo Kim, CEO at LINER Inc.) */
if ((window.injectLinerConfigJS || window.injectLinerCoreScript || window.top === window) && !window.isConfigJSInjected) {
    window.isConfigJSInjected = !0, window.linerCoreScriptVersion = "0.1.26";
    const e = "be";
    "be" == e ? (window.isProductionMode = !0, window.isLinerBrowserDesktopDebugMode = !1, window.isLinerBrowser = !1, window.isLinerAPIMode = !1) : "be_debug" == e ? (window.isProductionMode = !1, window.isLinerBrowserDesktopDebugMode = !1, window.isLinerBrowser = !1, window.isLinerAPIMode = !1) : "ocean" == e ? (window.isProductionMode = !0, window.isLinerBrowserDesktopDebugMode = !1, window.isLinerBrowser = !0, window.isLinerAPIMode = !1) : "ocean_debug" == e ? (window.isProductionMode = !1, window.isLinerBrowserDesktopDebugMode = !1, window.isLinerBrowser = !0, window.isLinerAPIMode = !1) : "ocean_debug_desktop" == e ? (window.isProductionMode = !1, window.isLinerBrowserDesktopDebugMode = !0, window.isLinerBrowser = !0, window.isLinerAPIMode = !1) : "api" == e ? (window.isProductionMode = !0, window.isLinerBrowserDesktopDebugMode = !1, window.isLinerBrowser = !1, window.isLinerAPIMode = !0) : "api_debug" == e && (window.isProductionMode = !1, window.isLinerBrowserDesktopDebugMode = !1, window.isLinerBrowser = !1, window.isLinerAPIMode = !0), window.isProductionMode && (window.isLinerBrowserDesktopDebugMode = !1)
}
if ((window.injectLinerJQuery || window.injectLinerCoreScript || window.top === window) && !window.isJqueryInjected) {
    window.isJqueryInjected = !0;
    const e = window.$,
        t = window.jQuery;
    ! function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";
        var n = [],
            i = Object.getPrototypeOf,
            o = n.slice,
            r = n.flat ? function(e) {
                return n.flat.call(e)
            } : function(e) {
                return n.concat.apply([], e)
            },
            a = n.push,
            l = n.indexOf,
            s = {},
            c = s.toString,
            p = s.hasOwnProperty,
            d = p.toString,
            g = d.call(Object),
            h = {},
            m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            u = function(e) {
                return null != e && e === e.window
            },
            f = e.document,
            A = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var i, o, r = (n = n || f).createElement("script");
            if (r.text = e, t)
                for (i in A)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }

        function b(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[c.call(e)] || "object" : typeof e
        }
        var v = function(e, t) {
            return new v.fn.init(e, t)
        };

        function x(e) {
            var t = !!e && "length" in e && e.length,
                n = b(e);
            return !m(e) && !u(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        v.fn = v.prototype = {
            jquery: "3.5.1",
            constructor: v,
            length: 0,
            toArray: function() {
                return o.call(this)
            },
            get: function(e) {
                return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = v.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return v.each(this, e)
            },
            map: function(e) {
                return this.pushStack(v.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(v.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(v.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: a,
            sort: n.sort,
            splice: n.splice
        }, v.extend = v.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                l = 1,
                s = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" == typeof a || m(a) || (a = {}), l === s && (a = this, l--); l < s; l++)
                if (null != (e = arguments[l]))
                    for (t in e) i = e[t], "__proto__" !== t && a !== i && (c && i && (v.isPlainObject(i) || (o = Array.isArray(i))) ? (n = a[t], r = o && !Array.isArray(n) ? [] : o || v.isPlainObject(n) ? n : {}, o = !1, a[t] = v.extend(c, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }, v.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && d.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                w(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, i = 0;
                if (x(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (x(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, a = 0,
                    l = [];
                if (x(e))
                    for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && l.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, n)) && l.push(o);
                return r(l)
            },
            guid: 1,
            support: h
        }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            s["[object " + t + "]"] = t.toLowerCase()
        });
        var y = function(e) {
            var t, n, i, o, r, a, l, s, c, p, d, g, h, m, u, f, A, w, b, v = "sizzle" + 1 * new Date,
                x = e.document,
                y = 0,
                E = 0,
                k = se(),
                S = se(),
                N = se(),
                C = se(),
                T = function(e, t) {
                    return e === t && (d = !0), 0
                },
                B = {}.hasOwnProperty,
                I = [],
                L = I.pop,
                D = I.push,
                R = I.push,
                H = I.slice,
                M = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                U = "\\[" + P + "*(" + F + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + P + "*\\]",
                V = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
                j = new RegExp(P + "+", "g"),
                G = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                J = new RegExp("^" + P + "*," + P + "*"),
                Y = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                Q = new RegExp(P + "|>"),
                X = new RegExp(V),
                q = new RegExp("^" + F + "$"),
                z = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F + "|[*])"),
                    ATTR: new RegExp("^" + U),
                    PSEUDO: new RegExp("^" + V),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                W = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                _ = /^[^{]+\{\s*\[native \w/,
                $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
                ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                oe = function(e, t) {
                    return t ? "\0" === e ? "???" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                re = function() {
                    g()
                },
                ae = ve(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                R.apply(I = H.call(x.childNodes), x.childNodes), I[x.childNodes.length].nodeType
            } catch (e) {
                R = {
                    apply: I.length ? function(e, t) {
                        D.apply(e, H.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }

            function le(e, t, i, o) {
                var r, l, c, p, d, m, A, w = t && t.ownerDocument,
                    x = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                if (!o && (g(t), t = t || h, u)) {
                    if (11 !== x && (d = $.exec(e)))
                        if (r = d[1]) {
                            if (9 === x) {
                                if (!(c = t.getElementById(r))) return i;
                                if (c.id === r) return i.push(c), i
                            } else if (w && (c = w.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                        } else {
                            if (d[2]) return R.apply(i, t.getElementsByTagName(e)), i;
                            if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(i, t.getElementsByClassName(r)), i
                        } if (n.qsa && !C[e + " "] && (!f || !f.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                        if (A = e, w = t, 1 === x && (Q.test(e) || Y.test(e))) {
                            for ((w = ee.test(e) && Ae(t.parentNode) || t) === t && n.scope || ((p = t.getAttribute("id")) ? p = p.replace(ie, oe) : t.setAttribute("id", p = v)), l = (m = a(e)).length; l--;) m[l] = (p ? "#" + p : ":scope") + " " + be(m[l]);
                            A = m.join(",")
                        }
                        try {
                            return R.apply(i, w.querySelectorAll(A)), i
                        } catch (t) {
                            C(e, !0)
                        } finally {
                            p === v && t.removeAttribute("id")
                        }
                    }
                }
                return s(e.replace(G, "$1"), t, i, o)
            }

            function se() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
                }
            }

            function ce(e) {
                return e[v] = !0, e
            }

            function pe(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function de(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
            }

            function ge(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function he(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function me(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ue(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function fe(e) {
                return ce(function(t) {
                    return t = +t, ce(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function Ae(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = le.support = {}, r = le.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !W.test(t || n && n.nodeName || "HTML")
                }, g = le.setDocument = function(e) {
                    var t, o, a = e ? e.ownerDocument || e : x;
                    return a != h && 9 === a.nodeType && a.documentElement ? (m = (h = a).documentElement, u = !r(h), x != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = pe(function(e) {
                        return m.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }), n.attributes = pe(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = pe(function(e) {
                        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = _.test(h.getElementsByClassName), n.getById = pe(function(e) {
                        return m.appendChild(e).id = v, !h.getElementsByName || !h.getElementsByName(v).length
                    }), n.getById ? (i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && u) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && u) {
                            var n, i, o, r = t.getElementById(e);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && u) return t.getElementsByClassName(e)
                    }, A = [], f = [], (n.qsa = _.test(h.querySelectorAll)) && (pe(function(e) {
                        var t;
                        m.appendChild(e).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || f.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + v + "-]").length || f.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || f.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || f.push(":checked"), e.querySelectorAll("a#" + v + "+*").length || f.push(".#.+[+~]"), e.querySelectorAll("\\\f"), f.push("[\\r\\n\\f]")
                    }), pe(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && f.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && f.push(":enabled", ":disabled"), m.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), f.push(",.*:")
                    })), (n.matchesSelector = _.test(w = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && pe(function(e) {
                        n.disconnectedMatch = w.call(e, "*"), w.call(e, "[s!='']:x"), A.push("!=", V)
                    }), f = f.length && new RegExp(f.join("|")), A = A.length && new RegExp(A.join("|")), t = _.test(m.compareDocumentPosition), b = t || _.test(m.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, T = t ? function(e, t) {
                        if (e === t) return d = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == x && b(x, e) ? -1 : t == h || t.ownerDocument == x && b(x, t) ? 1 : p ? M(p, e) - M(p, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return d = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            a = [e],
                            l = [t];
                        if (!o || !r) return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : p ? M(p, e) - M(p, t) : 0;
                        if (o === r) return ge(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? ge(a[i], l[i]) : a[i] == x ? -1 : l[i] == x ? 1 : 0
                    }, h) : h
                }, le.matches = function(e, t) {
                    return le(e, null, null, t)
                }, le.matchesSelector = function(e, t) {
                    if (g(e), n.matchesSelector && u && !C[t + " "] && (!A || !A.test(t)) && (!f || !f.test(t))) try {
                        var i = w.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {
                        C(t, !0)
                    }
                    return le(t, h, null, [e]).length > 0
                }, le.contains = function(e, t) {
                    return (e.ownerDocument || e) != h && g(e), b(e, t)
                }, le.attr = function(e, t) {
                    (e.ownerDocument || e) != h && g(e);
                    var o = i.attrHandle[t.toLowerCase()],
                        r = o && B.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !u) : void 0;
                    return void 0 !== r ? r : n.attributes || !u ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, le.escape = function(e) {
                    return (e + "").replace(ie, oe)
                }, le.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, le.uniqueSort = function(e) {
                    var t, i = [],
                        o = 0,
                        r = 0;
                    if (d = !n.detectDuplicates, p = !n.sortStable && e.slice(0), e.sort(T), d) {
                        for (; t = e[r++];) t === e[r] && (o = i.push(r));
                        for (; o--;) e.splice(i[o], 1)
                    }
                    return p = null, e
                }, o = le.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += o(t);
                    return n
                }, (i = le.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: z,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || le.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && le.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var o = le.attr(i, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(j, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                l = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, s) {
                                var c, p, d, g, h, m, u = r !== a ? "nextSibling" : "previousSibling",
                                    f = t.parentNode,
                                    A = l && t.nodeName.toLowerCase(),
                                    w = !s && !l,
                                    b = !1;
                                if (f) {
                                    if (r) {
                                        for (; u;) {
                                            for (g = t; g = g[u];)
                                                if (l ? g.nodeName.toLowerCase() === A : 1 === g.nodeType) return !1;
                                            m = u = "only" === e && !m && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (m = [a ? f.firstChild : f.lastChild], a && w) {
                                        for (b = (h = (c = (p = (d = (g = f)[v] || (g[v] = {}))[g.uniqueID] || (d[g.uniqueID] = {}))[e] || [])[0] === y && c[1]) && c[2], g = h && f.childNodes[h]; g = ++h && g && g[u] || (b = h = 0) || m.pop();)
                                            if (1 === g.nodeType && ++b && g === t) {
                                                p[e] = [y, h, b];
                                                break
                                            }
                                    } else if (w && (b = h = (c = (p = (d = (g = t)[v] || (g[v] = {}))[g.uniqueID] || (d[g.uniqueID] = {}))[e] || [])[0] === y && c[1]), !1 === b)
                                        for (;
                                            (g = ++h && g && g[u] || (b = h = 0) || m.pop()) && ((l ? g.nodeName.toLowerCase() !== A : 1 !== g.nodeType) || !++b || (w && ((p = (d = g[v] || (g[v] = {}))[g.uniqueID] || (d[g.uniqueID] = {}))[e] = [y, b]), g !== t)););
                                    return (b -= o) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || le.error("unsupported pseudo: " + e);
                            return o[v] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                                for (var i, r = o(e, t), a = r.length; a--;) e[i = M(e, r[a])] = !(n[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, n)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: ce(function(e) {
                            var t = [],
                                n = [],
                                i = l(e.replace(G, "$1"));
                            return i[v] ? ce(function(e, t, n, o) {
                                for (var r, a = i(e, null, o, []), l = e.length; l--;)(r = a[l]) && (e[l] = !(t[l] = r))
                            }) : function(e, o, r) {
                                return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: ce(function(e) {
                            return function(t) {
                                return le(e, t).length > 0
                            }
                        }),
                        contains: ce(function(e) {
                            return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || o(t)).indexOf(e) > -1
                                }
                        }),
                        lang: ce(function(e) {
                            return q.test(e || "") || le.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = u ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === m
                        },
                        focus: function(e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ue(!1),
                        disabled: ue(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Z.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: fe(function() {
                            return [0]
                        }),
                        last: fe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: fe(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: fe(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: fe(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: fe(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: fe(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = he(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = me(t);

            function we() {}

            function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function ve(e, t, n) {
                var i = t.dir,
                    o = t.next,
                    r = o || i,
                    a = n && "parentNode" === r,
                    l = E++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function(t, n, s) {
                    var c, p, d, g = [y, l];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a)
                                if (p = (d = t[v] || (t[v] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = p[r]) && c[0] === y && c[1] === l) return g[2] = c[2];
                                    if (p[r] = g, g[2] = e(t, n, s)) return !0
                                } return !1
                }
            }

            function xe(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function ye(e, t, n, i, o) {
                for (var r, a = [], l = 0, s = e.length, c = null != t; l < s; l++)(r = e[l]) && (n && !n(r, i, o) || (a.push(r), c && t.push(l)));
                return a
            }

            function Ee(e, t, n, i, o, r) {
                return i && !i[v] && (i = Ee(i)), o && !o[v] && (o = Ee(o, r)), ce(function(r, a, l, s) {
                    var c, p, d, g = [],
                        h = [],
                        m = a.length,
                        u = r || function(e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++) le(e, t[i], n);
                            return n
                        }(t || "*", l.nodeType ? [l] : l, []),
                        f = !e || !r && t ? u : ye(u, g, e, l, s),
                        A = n ? o || (r ? e : m || i) ? [] : a : f;
                    if (n && n(f, A, l, s), i)
                        for (c = ye(A, h), i(c, [], l, s), p = c.length; p--;)(d = c[p]) && (A[h[p]] = !(f[h[p]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], p = A.length; p--;)(d = A[p]) && c.push(f[p] = d);
                                o(null, A = [], c, s)
                            }
                            for (p = A.length; p--;)(d = A[p]) && (c = o ? M(r, d) : g[p]) > -1 && (r[c] = !(a[c] = d))
                        }
                    } else A = ye(A === a ? A.splice(m, A.length) : A), o ? o(null, a, A, s) : R.apply(a, A)
                })
            }

            function ke(e) {
                for (var t, n, o, r = e.length, a = i.relative[e[0].type], l = a || i.relative[" "], s = a ? 1 : 0, p = ve(function(e) {
                        return e === t
                    }, l, !0), d = ve(function(e) {
                        return M(t, e) > -1
                    }, l, !0), g = [function(e, n, i) {
                        var o = !a && (i || n !== c) || ((t = n).nodeType ? p(e, n, i) : d(e, n, i));
                        return t = null, o
                    }]; s < r; s++)
                    if (n = i.relative[e[s].type]) g = [ve(xe(g), n)];
                    else {
                        if ((n = i.filter[e[s].type].apply(null, e[s].matches))[v]) {
                            for (o = ++s; o < r && !i.relative[e[o].type]; o++);
                            return Ee(s > 1 && xe(g), s > 1 && be(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(G, "$1"), n, s < o && ke(e.slice(s, o)), o < r && ke(e = e.slice(o)), o < r && be(e))
                        }
                        g.push(n)
                    } return xe(g)
            }
            return we.prototype = i.filters = i.pseudos, i.setFilters = new we, a = le.tokenize = function(e, t) {
                var n, o, r, a, l, s, c, p = S[e + " "];
                if (p) return t ? 0 : p.slice(0);
                for (l = e, s = [], c = i.preFilter; l;) {
                    for (a in n && !(o = J.exec(l)) || (o && (l = l.slice(o[0].length) || l), s.push(r = [])), n = !1, (o = Y.exec(l)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(G, " ")
                        }), l = l.slice(n.length)), i.filter) !(o = z[a].exec(l)) || c[a] && !(o = c[a](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: a,
                        matches: o
                    }), l = l.slice(n.length));
                    if (!n) break
                }
                return t ? l.length : l ? le.error(e) : S(e, s).slice(0)
            }, l = le.compile = function(e, t) {
                var n, o = [],
                    r = [],
                    l = N[e + " "];
                if (!l) {
                    for (t || (t = a(e)), n = t.length; n--;)(l = ke(t[n]))[v] ? o.push(l) : r.push(l);
                    (l = N(e, function(e, t) {
                        var n = t.length > 0,
                            o = e.length > 0,
                            r = function(r, a, l, s, p) {
                                var d, m, f, A = 0,
                                    w = "0",
                                    b = r && [],
                                    v = [],
                                    x = c,
                                    E = r || o && i.find.TAG("*", p),
                                    k = y += null == x ? 1 : Math.random() || .1,
                                    S = E.length;
                                for (p && (c = a == h || a || p); w !== S && null != (d = E[w]); w++) {
                                    if (o && d) {
                                        for (m = 0, a || d.ownerDocument == h || (g(d), l = !u); f = e[m++];)
                                            if (f(d, a || h, l)) {
                                                s.push(d);
                                                break
                                            } p && (y = k)
                                    }
                                    n && ((d = !f && d) && A--, r && b.push(d))
                                }
                                if (A += w, n && w !== A) {
                                    for (m = 0; f = t[m++];) f(b, v, a, l);
                                    if (r) {
                                        if (A > 0)
                                            for (; w--;) b[w] || v[w] || (v[w] = L.call(s));
                                        v = ye(v)
                                    }
                                    R.apply(s, v), p && !r && v.length > 0 && A + t.length > 1 && le.uniqueSort(s)
                                }
                                return p && (y = k, c = x), b
                            };
                        return n ? ce(r) : r
                    }(r, o))).selector = e
                }
                return l
            }, s = le.select = function(e, t, n, o) {
                var r, s, c, p, d, g = "function" == typeof e && e,
                    h = !o && a(e = g.selector || e);
                if (n = n || [], 1 === h.length) {
                    if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = s[0]).type && 9 === t.nodeType && u && i.relative[s[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        g && (t = t.parentNode), e = e.slice(s.shift().value.length)
                    }
                    for (r = z.needsContext.test(e) ? 0 : s.length; r-- && (c = s[r], !i.relative[p = c.type]);)
                        if ((d = i.find[p]) && (o = d(c.matches[0].replace(te, ne), ee.test(s[0].type) && Ae(t.parentNode) || t))) {
                            if (s.splice(r, 1), !(e = o.length && be(s))) return R.apply(n, o), n;
                            break
                        }
                }
                return (g || l(e, h))(o, t, !u, n, !t || ee.test(e) && Ae(t.parentNode) || t), n
            }, n.sortStable = v.split("").sort(T).join("") === v, n.detectDuplicates = !!d, g(), n.sortDetached = pe(function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            }), pe(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || de("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && pe(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || de("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), pe(function(e) {
                return null == e.getAttribute("disabled")
            }) || de(O, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), le
        }(e);
        v.find = y, v.expr = y.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = y.uniqueSort, v.text = y.getText, v.isXMLDoc = y.isXML, v.contains = y.contains, v.escapeSelector = y.escape;
        var E = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && v(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            k = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            S = v.expr.match.needsContext;

        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function T(e, t, n) {
            return m(t) ? v.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? v.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? v.grep(e, function(e) {
                return l.call(t, e) > -1 !== n
            }) : v.filter(t, e, n)
        }
        v.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? v.find.matchesSelector(i, e) ? [i] : [] : v.find.matches(e, v.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, v.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(v(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (v.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) v.find(e, o[t], n);
                return i > 1 ? v.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(T(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(T(this, e || [], !0))
            },
            is: function(e) {
                return !!T(this, "string" == typeof e && S.test(e) ? v(e) : e || [], !1).length
            }
        });
        var B, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (v.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || B, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), C.test(i[1]) && v.isPlainObject(t))
                        for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (o = f.getElementById(i[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(v) : v.makeArray(e, this)
        }).prototype = v.fn, B = v(f);
        var L = /^(?:parents|prev(?:Until|All))/,
            D = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function R(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        v.fn.extend({
            has: function(e) {
                var t = v(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (v.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof e && v(e);
                if (!S.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            } return this.pushStack(r.length > 1 ? v.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(v.uniqueSort(v.merge(this.get(), v(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), v.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return E(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return E(e, "parentNode", n)
            },
            next: function(e) {
                return R(e, "nextSibling")
            },
            prev: function(e) {
                return R(e, "previousSibling")
            },
            nextAll: function(e) {
                return E(e, "nextSibling")
            },
            prevAll: function(e) {
                return E(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return E(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return E(e, "previousSibling", n)
            },
            siblings: function(e) {
                return k((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return k(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), v.merge([], e.childNodes))
            }
        }, function(e, t) {
            v.fn[e] = function(n, i) {
                var o = v.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = v.filter(i, o)), this.length > 1 && (D[e] || v.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var H = /[^\x20\t\r\n\f]+/g;

        function M(e) {
            return e
        }

        function O(e) {
            throw e
        }

        function P(e, t, n, i) {
            var o;
            try {
                e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        v.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return v.each(e.match(H) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : v.extend({}, e);
            var t, n, i, o, r = [],
                a = [],
                l = -1,
                s = function() {
                    for (o = o || e.once, i = t = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                c = {
                    add: function() {
                        return r && (n && !t && (l = r.length - 1, a.push(n)), function t(n) {
                            v.each(n, function(n, i) {
                                m(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i)
                            })
                        }(arguments), n && !t && s()), this
                    },
                    remove: function() {
                        return v.each(arguments, function(e, t) {
                            for (var n;
                                (n = v.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? v.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = a = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = a = [], n || t || (r = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, v.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                        ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return v.Deferred(function(t) {
                                v.each(n, function(n, i) {
                                    var o = m(e[i[4]]) && e[i[4]];
                                    r[i[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, i, o) {
                            var r = 0;

                            function a(t, n, i, o) {
                                return function() {
                                    var l = this,
                                        s = arguments,
                                        c = function() {
                                            var e, c;
                                            if (!(t < r)) {
                                                if ((e = i.apply(l, s)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                c = e && ("object" == typeof e || "function" == typeof e) && e.then, m(c) ? o ? c.call(e, a(r, n, M, o), a(r, n, O, o)) : (r++, c.call(e, a(r, n, M, o), a(r, n, O, o), a(r, n, M, n.notifyWith))) : (i !== M && (l = void 0, s = [e]), (o || n.resolveWith)(l, s))
                                            }
                                        },
                                        p = o ? c : function() {
                                            try {
                                                c()
                                            } catch (e) {
                                                v.Deferred.exceptionHook && v.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= r && (i !== O && (l = void 0, s = [e]), n.rejectWith(l, s))
                                            }
                                        };
                                    t ? p() : (v.Deferred.getStackHook && (p.stackTrace = v.Deferred.getStackHook()), e.setTimeout(p))
                                }
                            }
                            return v.Deferred(function(e) {
                                n[0][3].add(a(0, e, m(o) ? o : M, e.notifyWith)), n[1][3].add(a(0, e, m(t) ? t : M)), n[2][3].add(a(0, e, m(i) ? i : O))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? v.extend(e, o) : o
                        }
                    },
                    r = {};
                return v.each(n, function(e, t) {
                    var a = t[2],
                        l = t[5];
                    o[t[1]] = a.add, l && a.add(function() {
                        i = l
                    }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[t[0] + "With"] = a.fireWith
                }), o.promise(r), t && t.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = o.call(arguments),
                    a = v.Deferred(),
                    l = function(e) {
                        return function(n) {
                            i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(i, r)
                        }
                    };
                if (t <= 1 && (P(e, a.done(l(n)).resolve, a.reject, !t), "pending" === a.state() || m(r[n] && r[n].then))) return a.then();
                for (; n--;) P(r[n], l(n), a.reject);
                return a.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        v.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, v.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var U = v.Deferred();

        function V() {
            f.removeEventListener("DOMContentLoaded", V), e.removeEventListener("load", V), v.ready()
        }
        v.fn.ready = function(e) {
            return U.then(e).catch(function(e) {
                v.readyException(e)
            }), this
        }, v.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || U.resolveWith(f, [v]))
            }
        }), v.ready.then = U.then, "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? e.setTimeout(v.ready) : (f.addEventListener("DOMContentLoaded", V), e.addEventListener("load", V));
        var j = function(e, t, n, i, o, r, a) {
                var l = 0,
                    s = e.length,
                    c = null == n;
                if ("object" === b(n))
                    for (l in o = !0, n) j(e, t, l, n[l], !0, r, a);
                else if (void 0 !== i && (o = !0, m(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(v(e), n)
                    })), t))
                    for (; l < s; l++) t(e[l], n, a ? i : i.call(e[l], l, t(e[l], n)));
                return o ? e : c ? t.call(e) : s ? t(e[0], n) : r
            },
            G = /^-ms-/,
            J = /-([a-z])/g;

        function Y(e, t) {
            return t.toUpperCase()
        }

        function Q(e) {
            return e.replace(G, "ms-").replace(J, Y)
        }
        var X = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function q() {
            this.expando = v.expando + q.uid++
        }
        q.uid = 1, q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[Q(t)] = n;
                else
                    for (i in t) o[Q(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(H) || []).length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || v.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !v.isEmptyObject(t)
            }
        };
        var z = new q,
            W = new q,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;

        function _(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    W.set(e, t, n)
                } else n = void 0;
            return n
        }
        v.extend({
            hasData: function(e) {
                return W.hasData(e) || z.hasData(e)
            },
            data: function(e, t, n) {
                return W.access(e, t, n)
            },
            removeData: function(e, t) {
                W.remove(e, t)
            },
            _data: function(e, t, n) {
                return z.access(e, t, n)
            },
            _removeData: function(e, t) {
                z.remove(e, t)
            }
        }), v.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = W.get(r), 1 === r.nodeType && !z.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Q(i.slice(5)), _(r, i, o[i]));
                        z.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    W.set(this, e)
                }) : j(this, function(t) {
                    var n;
                    if (r && void 0 === t) return void 0 !== (n = W.get(r, e)) ? n : void 0 !== (n = _(r, e)) ? n : void 0;
                    this.each(function() {
                        W.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    W.remove(this, e)
                })
            }
        }), v.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = z.get(e, t), n && (!i || Array.isArray(n) ? i = z.access(e, t, v.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = v.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = v._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                    v.dequeue(e, t)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return z.get(e, n) || z.access(e, n, {
                    empty: v.Callbacks("once memory").add(function() {
                        z.remove(e, [t + "queue", n])
                    })
                })
            }
        }), v.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = v.queue(this, e, t);
                    v._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    v.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = v.Deferred(),
                    r = this,
                    a = this.length,
                    l = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = z.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(l));
                return l(), o.promise(t)
            }
        });
        var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ne = f.documentElement,
            ie = function(e) {
                return v.contains(e.ownerDocument, e)
            },
            oe = {
                composed: !0
            };
        ne.getRootNode && (ie = function(e) {
            return v.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        });
        var re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === v.css(e, "display")
        };

        function ae(e, t, n, i) {
            var o, r, a = 20,
                l = i ? function() {
                    return i.cur()
                } : function() {
                    return v.css(e, t, "")
                },
                s = l(),
                c = n && n[3] || (v.cssNumber[t] ? "" : "px"),
                p = e.nodeType && (v.cssNumber[t] || "px" !== c && +s) && ee.exec(v.css(e, t));
            if (p && p[3] !== c) {
                for (s /= 2, c = c || p[3], p = +s || 1; a--;) v.style(e, t, p + c), (1 - r) * (1 - (r = l() / s || .5)) <= 0 && (a = 0), p /= r;
                p *= 2, v.style(e, t, p + c), n = n || []
            }
            return n && (p = +p || +s || 0, o = n[1] ? p + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = p, i.end = o)), o
        }
        var le = {};

        function se(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = le[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = v.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[i] = o, o)
        }

        function ce(e, t) {
            for (var n, i, o = [], r = 0, a = e.length; r < a; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = z.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && re(i) && (o[r] = se(i))) : "none" !== n && (o[r] = "none", z.set(i, "display", n)));
            for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
            return e
        }
        v.fn.extend({
            show: function() {
                return ce(this, !0)
            },
            hide: function() {
                return ce(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    re(this) ? v(this).show() : v(this).hide()
                })
            }
        });
        var pe, de, ge = /^(?:checkbox|radio)$/i,
            he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
        pe = f.createDocumentFragment().appendChild(f.createElement("div")), (de = f.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), pe.appendChild(de), h.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", h.option = !!pe.lastChild;
        var ue = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function fe(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? v.merge([e], n) : n
        }

        function Ae(e, t) {
            for (var n = 0, i = e.length; n < i; n++) z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
        }
        ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td, h.option || (ue.optgroup = ue.option = [1, "<select multiple='multiple'>", "</select>"]);
        var we = /<|&#?\w+;/;

        function be(e, t, n, i, o) {
            for (var r, a, l, s, c, p, d = t.createDocumentFragment(), g = [], h = 0, m = e.length; h < m; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === b(r)) v.merge(g, r.nodeType ? [r] : r);
                    else if (we.test(r)) {
                for (a = a || d.appendChild(t.createElement("div")), l = (he.exec(r) || ["", ""])[1].toLowerCase(), s = ue[l] || ue._default, a.innerHTML = s[1] + v.htmlPrefilter(r) + s[2], p = s[0]; p--;) a = a.lastChild;
                v.merge(g, a.childNodes), (a = d.firstChild).textContent = ""
            } else g.push(t.createTextNode(r));
            for (d.textContent = "", h = 0; r = g[h++];)
                if (i && v.inArray(r, i) > -1) o && o.push(r);
                else if (c = ie(r), a = fe(d.appendChild(r), "script"), c && Ae(a), n)
                for (p = 0; r = a[p++];) me.test(r.type || "") && n.push(r);
            return d
        }
        var ve = /^key/,
            xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ye = /^([^.]*)(?:\.(.+)|)/;

        function Ee() {
            return !0
        }

        function ke() {
            return !1
        }

        function Se(e, t) {
            return e === function() {
                try {
                    return f.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Ne(e, t, n, i, o, r) {
            var a, l;
            if ("object" == typeof t) {
                for (l in "string" != typeof n && (i = i || n, n = void 0), t) Ne(e, l, n, i, t[l], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ke;
            else if (!o) return e;
            return 1 === r && (a = o, (o = function(e) {
                return v().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = v.guid++)), e.each(function() {
                v.event.add(this, t, o, i, n)
            })
        }

        function Ce(e, t, n) {
            n ? (z.set(e, t, !1), v.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var i, r, a = z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (a.length)(v.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (a = o.call(arguments), z.set(this, t, a), i = n(this, t), this[t](), a !== (r = z.get(this, t)) || i ? z.set(this, t, !1) : r = {}, a !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                    } else a.length && (z.set(this, t, {
                        value: v.event.trigger(v.extend(a[0], v.Event.prototype), a.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === z.get(e, t) && v.event.add(e, t, Ee)
        }
        v.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, l, s, c, p, d, g, h, m, u, f = z.get(e);
                if (X(e))
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && v.find.matchesSelector(ne, o), n.guid || (n.guid = v.guid++), (s = f.events) || (s = f.events = Object.create(null)), (a = f.handle) || (a = f.handle = function(t) {
                            return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(H) || [""]).length; c--;) h = u = (l = ye.exec(t[c]) || [])[1], m = (l[2] || "").split(".").sort(), h && (d = v.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = v.event.special[h] || {}, p = v.extend({
                        type: h,
                        origType: u,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && v.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, r), (g = s[h]) || ((g = s[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, m, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), v.event.global[h] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, a, l, s, c, p, d, g, h, m, u, f = z.hasData(e) && z.get(e);
                if (f && (s = f.events)) {
                    for (c = (t = (t || "").match(H) || [""]).length; c--;)
                        if (h = u = (l = ye.exec(t[c]) || [])[1], m = (l[2] || "").split(".").sort(), h) {
                            for (d = v.event.special[h] || {}, g = s[h = (i ? d.delegateType : d.bindType) || h] || [], l = l[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = g.length; r--;) p = g[r], !o && u !== p.origType || n && n.guid !== p.guid || l && !l.test(p.namespace) || i && i !== p.selector && ("**" !== i || !p.selector) || (g.splice(r, 1), p.selector && g.delegateCount--, d.remove && d.remove.call(e, p));
                            a && !g.length && (d.teardown && !1 !== d.teardown.call(e, m, f.handle) || v.removeEvent(e, h, f.handle), delete s[h])
                        } else
                            for (h in s) v.event.remove(e, h + t[c], n, i, !0);
                    v.isEmptyObject(s) && z.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, a, l = new Array(arguments.length),
                    s = v.event.fix(e),
                    c = (z.get(this, "events") || Object.create(null))[s.type] || [],
                    p = v.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, s)) {
                    for (a = v.event.handlers.call(this, s, c), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== r.namespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((v.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return p.postDispatch && p.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a, l = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], a = {}, n = 0; n < s; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? v(o, this).index(c) > -1 : v.find(o, this, null, [c]).length), a[o] && r.push(i);
                            r.length && l.push({
                                elem: c,
                                handlers: r
                            })
                        } return c = this, s < t.length && l.push({
                    elem: c,
                    handlers: t.slice(s)
                }), l
            },
            addProp: function(e, t) {
                Object.defineProperty(v.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[v.expando] ? e : new v.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && N(t, "input") && Ce(t, "click", Ee), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && N(t, "input") && Ce(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && N(t, "input") && z.get(t, "click") || N(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, v.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, v.Event = function(e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            constructor: v.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, v.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, v.event.addProp), v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            v.event.special[e] = {
                setup: function() {
                    return Ce(this, e, Se), !1
                },
                trigger: function() {
                    return Ce(this, e), !0
                },
                delegateType: t
            }
        }), v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === this || v.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), v.fn.extend({
            on: function(e, t, n, i) {
                return Ne(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return Ne(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                    v.event.remove(this, e, n, t)
                })
            }
        });
        var Te = /<script|<style|<link/i,
            Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Le(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && v(e).children("tbody")[0] || e
        }

        function De(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Re(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function He(e, t) {
            var n, i, o, r, a, l;
            if (1 === t.nodeType) {
                if (z.hasData(e) && (l = z.get(e).events))
                    for (o in z.remove(t, "handle events"), l)
                        for (n = 0, i = l[o].length; n < i; n++) v.event.add(t, o, l[o][n]);
                W.hasData(e) && (r = W.access(e), a = v.extend({}, r), W.set(t, a))
            }
        }

        function Me(e, t, n, i) {
            t = r(t);
            var o, a, l, s, c, p, d = 0,
                g = e.length,
                u = g - 1,
                f = t[0],
                A = m(f);
            if (A || g > 1 && "string" == typeof f && !h.checkClone && Be.test(f)) return e.each(function(o) {
                var r = e.eq(o);
                A && (t[0] = f.call(this, o, r.html())), Me(r, t, n, i)
            });
            if (g && (a = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
                for (s = (l = v.map(fe(o, "script"), De)).length; d < g; d++) c = o, d !== u && (c = v.clone(c, !0, !0), s && v.merge(l, fe(c, "script"))), n.call(e[d], c, d);
                if (s)
                    for (p = l[l.length - 1].ownerDocument, v.map(l, Re), d = 0; d < s; d++) c = l[d], me.test(c.type || "") && !z.access(c, "globalEval") && v.contains(p, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? v._evalUrl && !c.noModule && v._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, p) : w(c.textContent.replace(Ie, ""), c, p))
            }
            return e
        }

        function Oe(e, t, n) {
            for (var i, o = t ? v.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || v.cleanData(fe(i)), i.parentNode && (n && ie(i) && Ae(fe(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        v.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var i, o, r, a, l, s, c, p = e.cloneNode(!0),
                    d = ie(e);
                if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                    for (a = fe(p), i = 0, o = (r = fe(e)).length; i < o; i++) l = r[i], s = a[i], c = void 0, "input" === (c = s.nodeName.toLowerCase()) && ge.test(l.type) ? s.checked = l.checked : "input" !== c && "textarea" !== c || (s.defaultValue = l.defaultValue);
                if (t)
                    if (n)
                        for (r = r || fe(e), a = a || fe(p), i = 0, o = r.length; i < o; i++) He(r[i], a[i]);
                    else He(e, p);
                return (a = fe(p, "script")).length > 0 && Ae(a, !d && fe(e, "script")), p
            },
            cleanData: function(e) {
                for (var t, n, i, o = v.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (X(n)) {
                        if (t = n[z.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? v.event.remove(n, i) : v.removeEvent(n, i, t.handle);
                            n[z.expando] = void 0
                        }
                        n[W.expando] && (n[W.expando] = void 0)
                    }
            }
        }), v.fn.extend({
            detach: function(e) {
                return Oe(this, e, !0)
            },
            remove: function(e) {
                return Oe(this, e)
            },
            text: function(e) {
                return j(this, function(e) {
                    return void 0 === e ? v.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Me(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Me(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Me(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(fe(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return v.clone(this, e, t)
                })
            },
            html: function(e) {
                return j(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Te.test(e) && !ue[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = v.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(fe(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Me(this, arguments, function(t) {
                    var n = this.parentNode;
                    v.inArray(this, e) < 0 && (v.cleanData(fe(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            v.fn[e] = function(e) {
                for (var n, i = [], o = v(e), r = o.length - 1, l = 0; l <= r; l++) n = l === r ? this : this.clone(!0), v(o[l])[t](n), a.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Pe = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
            Fe = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            },
            Ue = function(e, t, n) {
                var i, o, r = {};
                for (o in t) r[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.call(e), t) e.style[o] = r[o];
                return i
            },
            Ve = new RegExp(te.join("|"), "i");

        function je(e, t, n) {
            var i, o, r, a, l = e.style;
            return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = v.style(e, t)), !h.pixelBoxStyles() && Pe.test(a) && Ve.test(t) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function Ge(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (p) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", p.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(c).appendChild(p);
                    var t = e.getComputedStyle(p);
                    i = "1%" !== t.top, s = 12 === n(t.marginLeft), p.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), p.style.position = "absolute", r = 12 === n(p.offsetWidth / 3), ne.removeChild(c), p = null
                }
            }

            function n(e) {
                return Math.round(parseFloat(e))
            }
            var i, o, r, a, l, s, c = f.createElement("div"),
                p = f.createElement("div");
            p.style && (p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === p.style.backgroundClip, v.extend(h, {
                boxSizingReliable: function() {
                    return t(), o
                },
                pixelBoxStyles: function() {
                    return t(), a
                },
                pixelPosition: function() {
                    return t(), i
                },
                reliableMarginLeft: function() {
                    return t(), s
                },
                scrollboxSize: function() {
                    return t(), r
                },
                reliableTrDimensions: function() {
                    var t, n, i, o;
                    return null == l && (t = f.createElement("table"), n = f.createElement("tr"), i = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", ne.appendChild(t).appendChild(n).appendChild(i), o = e.getComputedStyle(n), l = parseInt(o.height) > 3, ne.removeChild(t)), l
                }
            }))
        }();
        var Je = ["Webkit", "Moz", "ms"],
            Ye = f.createElement("div").style,
            Qe = {};

        function Xe(e) {
            var t = v.cssProps[e] || Qe[e];
            return t || (e in Ye ? e : Qe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                    if ((e = Je[n] + t) in Ye) return e
            }(e) || e)
        }
        var qe = /^(none|table(?!-c[ea]).+)/,
            ze = /^--/,
            We = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Ze(e, t, n) {
            var i = ee.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function _e(e, t, n, i, o, r) {
            var a = "width" === t ? 1 : 0,
                l = 0,
                s = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (s += v.css(e, n + te[a], !0, o)), i ? ("content" === n && (s -= v.css(e, "padding" + te[a], !0, o)), "margin" !== n && (s -= v.css(e, "border" + te[a] + "Width", !0, o))) : (s += v.css(e, "padding" + te[a], !0, o), "padding" !== n ? s += v.css(e, "border" + te[a] + "Width", !0, o) : l += v.css(e, "border" + te[a] + "Width", !0, o));
            return !i && r >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - s - l - .5)) || 0), s
        }

        function $e(e, t, n) {
            var i = Fe(e),
                o = (!h.boxSizingReliable() || n) && "border-box" === v.css(e, "boxSizing", !1, i),
                r = o,
                a = je(e, t, i),
                l = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Pe.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && N(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === v.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === v.css(e, "boxSizing", !1, i), (r = l in e) && (a = e[l])), (a = parseFloat(a) || 0) + _e(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
        }

        function et(e, t, n, i, o) {
            return new et.prototype.init(e, t, n, i, o)
        }
        v.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = je(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, l = Q(t),
                        s = ze.test(t),
                        c = e.style;
                    if (s || (t = Xe(l)), a = v.cssHooks[t] || v.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) && (o = ee.exec(n)) && o[1] && (n = ae(e, t, o), r = "number"), null != n && n == n && ("number" !== r || s || (n += o && o[3] || (v.cssNumber[l] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (s ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, l = Q(t);
                return ze.test(t) || (t = Xe(l)), (a = v.cssHooks[t] || v.cssHooks[l]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = je(e, t, i)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), v.each(["height", "width"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return !qe.test(v.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $e(e, t, i) : Ue(e, We, function() {
                        return $e(e, t, i)
                    })
                },
                set: function(e, n, i) {
                    var o, r = Fe(e),
                        a = !h.scrollboxSize() && "absolute" === r.position,
                        l = (a || i) && "border-box" === v.css(e, "boxSizing", !1, r),
                        s = i ? _e(e, t, i, l, r) : 0;
                    return l && a && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - _e(e, t, "border", !1, r) - .5)), s && (o = ee.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = v.css(e, t)), Ze(0, n, s)
                }
            }
        }), v.cssHooks.marginLeft = Ge(h.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(je(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), v.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            v.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + te[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, "margin" !== e && (v.cssHooks[e + t].set = Ze)
        }), v.fn.extend({
            css: function(e, t) {
                return j(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (i = Fe(e), o = t.length; a < o; a++) r[t[a]] = v.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), v.Tween = et, et.prototype = {
            constructor: et,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || v.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (v.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
            }
        }, et.prototype.init.prototype = et.prototype, et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    v.fx.step[e.prop] ? v.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !v.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : v.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, v.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, v.fx = et.prototype.init, v.fx.step = {};
        var tt, nt, it = /^(?:toggle|show|hide)$/,
            ot = /queueHooks$/;

        function rt() {
            nt && (!1 === f.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, v.fx.interval), v.fx.tick())
        }

        function at() {
            return e.setTimeout(function() {
                tt = void 0
            }), tt = Date.now()
        }

        function lt(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = te[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function st(e, t, n) {
            for (var i, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function ct(e, t, n) {
            var i, o, r = 0,
                a = ct.prefilters.length,
                l = v.Deferred().always(function() {
                    delete s.elem
                }),
                s = function() {
                    if (o) return !1;
                    for (var t = tt || at(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(i);
                    return l.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || l.notifyWith(e, [c, 1, 0]), l.resolveWith(e, [c]), !1)
                },
                c = l.promise({
                    elem: e,
                    props: v.extend({}, t),
                    opts: v.extend(!0, {
                        specialEasing: {},
                        easing: v.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: tt || at(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = v.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (l.notifyWith(e, [c, 1, 0]), l.resolveWith(e, [c, t])) : l.rejectWith(e, [c, t]), this
                    }
                }),
                p = c.props;
            for (! function(e, t) {
                    var n, i, o, r, a;
                    for (n in e)
                        if (o = t[i = Q(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = v.cssHooks[i]) && "expand" in a)
                            for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                        else t[i] = o
                }(p, c.opts.specialEasing); r < a; r++)
                if (i = ct.prefilters[r].call(c, e, p, c.opts)) return m(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return v.map(p, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), v.fx.timer(v.extend(s, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        v.Animation = v.extend(ct, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ae(n.elem, e, ee.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    m(e) ? (t = e, e = ["*"]) : e = e.match(H);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var i, o, r, a, l, s, c, p, d = "width" in t || "height" in t,
                        g = this,
                        h = {},
                        m = e.style,
                        u = e.nodeType && re(e),
                        f = z.get(e, "fxshow");
                    for (i in n.queue || (null == (a = v._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || l()
                        }), a.unqueued++, g.always(function() {
                            g.always(function() {
                                a.unqueued--, v.queue(e, "fx").length || a.empty.fire()
                            })
                        })), t)
                        if (o = t[i], it.test(o)) {
                            if (delete t[i], r = r || "toggle" === o, o === (u ? "hide" : "show")) {
                                if ("show" !== o || !f || void 0 === f[i]) continue;
                                u = !0
                            }
                            h[i] = f && f[i] || v.style(e, i)
                        } if ((s = !v.isEmptyObject(t)) || !v.isEmptyObject(h))
                        for (i in d && 1 === e.nodeType && (n.overflow = [m.overflow, m.overflowX, m.overflowY], null == (c = f && f.display) && (c = z.get(e, "display")), "none" === (p = v.css(e, "display")) && (c ? p = c : (ce([e], !0), c = e.style.display || c, p = v.css(e, "display"), ce([e]))), ("inline" === p || "inline-block" === p && null != c) && "none" === v.css(e, "float") && (s || (g.done(function() {
                                m.display = c
                            }), null == c && (p = m.display, c = "none" === p ? "" : p)), m.display = "inline-block")), n.overflow && (m.overflow = "hidden", g.always(function() {
                                m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]
                            })), s = !1, h) s || (f ? "hidden" in f && (u = f.hidden) : f = z.access(e, "fxshow", {
                            display: c
                        }), r && (f.hidden = !u), u && ce([e], !0), g.done(function() {
                            for (i in u || ce([e]), z.remove(e, "fxshow"), h) v.style(e, i, h[i])
                        })), s = st(u ? f[i] : 0, i, g), i in f || (f[i] = s.start, u && (s.end = s.start, s.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
                }
            }), v.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? v.extend({}, e) : {
                    complete: n || !n && t || m(e) && e,
                    duration: e,
                    easing: n && t || t && !m(t) && t
                };
                return v.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in v.fx.speeds ? i.duration = v.fx.speeds[i.duration] : i.duration = v.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    m(i.old) && i.old.call(this), i.queue && v.dequeue(this, i.queue)
                }, i
            }, v.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(re).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = v.isEmptyObject(e),
                        r = v.speed(t, n, i),
                        a = function() {
                            var t = ct(this, v.extend({}, e), r);
                            (o || z.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = v.timers,
                            a = z.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && ot.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || v.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = z.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = v.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, v.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), v.each(["toggle", "show", "hide"], function(e, t) {
                var n = v.fn[t];
                v.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, i, o)
                }
            }), v.each({
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                v.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), v.timers = [], v.fx.tick = function() {
                var e, t = 0,
                    n = v.timers;
                for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || v.fx.stop(), tt = void 0
            }, v.fx.timer = function(e) {
                v.timers.push(e), v.fx.start()
            }, v.fx.interval = 13, v.fx.start = function() {
                nt || (nt = !0, rt())
            }, v.fx.stop = function() {
                nt = null
            }, v.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, v.fn.delay = function(t, n) {
                return t = v.fx && v.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = f.createElement("input"),
                    t = f.createElement("select").appendChild(f.createElement("option"));
                e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = f.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
            }();
        var pt, dt = v.expr.attrHandle;
        v.fn.extend({
            attr: function(e, t) {
                return j(this, v.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    v.removeAttr(this, e)
                })
            }
        }), v.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === r && v.isXMLDoc(e) || (o = v.attrHooks[t.toLowerCase()] || (v.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void v.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = v.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(H);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), pt = {
            set: function(e, t, n) {
                return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, v.each(v.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || v.find.attr;
            dt[t] = function(e, t, i) {
                var o, r, a = t.toLowerCase();
                return i || (r = dt[a], dt[a] = o, o = null != n(e, t, i) ? a : null, dt[a] = r), o
            }
        });
        var gt = /^(?:input|select|textarea|button)$/i,
            ht = /^(?:a|area)$/i;

        function mt(e) {
            return (e.match(H) || []).join(" ")
        }

        function ut(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function ft(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
        }
        v.fn.extend({
            prop: function(e, t) {
                return j(this, v.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[v.propFix[e] || e]
                })
            }
        }), v.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && v.isXMLDoc(e) || (t = v.propFix[t] || t, o = v.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = v.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), h.optSelected || (v.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            v.propFix[this.toLowerCase()] = this
        }), v.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, l, s = 0;
                if (m(e)) return this.each(function(t) {
                    v(this).addClass(e.call(this, t, ut(this)))
                });
                if ((t = ft(e)).length)
                    for (; n = this[s++];)
                        if (o = ut(n), i = 1 === n.nodeType && " " + mt(o) + " ") {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (l = mt(i)) && n.setAttribute("class", l)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, l, s = 0;
                if (m(e)) return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, ut(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = ft(e)).length)
                    for (; n = this[s++];)
                        if (o = ut(n), i = 1 === n.nodeType && " " + mt(o) + " ") {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (l = mt(i)) && n.setAttribute("class", l)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) {
                    v(this).toggleClass(e.call(this, n, ut(this), t), t)
                }) : this.each(function() {
                    var t, o, r, a;
                    if (i)
                        for (o = 0, r = v(this), a = ft(e); t = a[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = ut(this)) && z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : z.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + mt(ut(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var At = /\r/g;
        v.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = m(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, v(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = v.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(At, "") : null == n ? "" : n : void 0
            }
        }), v.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = v.find.attr(e, "value");
                        return null != t ? t : mt(v.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            a = "select-one" === e.type,
                            l = a ? null : [],
                            s = a ? r + 1 : o.length;
                        for (i = r < 0 ? s : a ? r : 0; i < s; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = v(n).val(), a) return t;
                                l.push(t)
                            } return l
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = v.makeArray(t), a = o.length; a--;)((i = o[a]).selected = v.inArray(v.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = v.inArray(v(e).val(), t) > -1
                }
            }, h.checkOn || (v.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), h.focusin = "onfocusin" in e;
        var wt = /^(?:focusinfocus|focusoutblur)$/,
            bt = function(e) {
                e.stopPropagation()
            };
        v.extend(v.event, {
            trigger: function(t, n, i, o) {
                var r, a, l, s, c, d, g, h, A = [i || f],
                    w = p.call(t, "type") ? t.type : t,
                    b = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = h = l = i = i || f, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(w + v.event.triggered) && (w.indexOf(".") > -1 && (b = w.split("."), w = b.shift(), b.sort()), c = w.indexOf(":") < 0 && "on" + w, (t = t[v.expando] ? t : new v.Event(w, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : v.makeArray(n, [t]), g = v.event.special[w] || {}, o || !g.trigger || !1 !== g.trigger.apply(i, n))) {
                    if (!o && !g.noBubble && !u(i)) {
                        for (s = g.delegateType || w, wt.test(s + w) || (a = a.parentNode); a; a = a.parentNode) A.push(a), l = a;
                        l === (i.ownerDocument || f) && A.push(l.defaultView || l.parentWindow || e)
                    }
                    for (r = 0;
                        (a = A[r++]) && !t.isPropagationStopped();) h = a, t.type = r > 1 ? s : g.bindType || w, (d = (z.get(a, "events") || Object.create(null))[t.type] && z.get(a, "handle")) && d.apply(a, n), (d = c && a[c]) && d.apply && X(a) && (t.result = d.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = w, o || t.isDefaultPrevented() || g._default && !1 !== g._default.apply(A.pop(), n) || !X(i) || c && m(i[w]) && !u(i) && ((l = i[c]) && (i[c] = null), v.event.triggered = w, t.isPropagationStopped() && h.addEventListener(w, bt), i[w](), t.isPropagationStopped() && h.removeEventListener(w, bt), v.event.triggered = void 0, l && (i[c] = l)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                v.event.trigger(i, null, t)
            }
        }), v.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return v.event.trigger(e, t, n, !0)
            }
        }), h.focusin || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                v.event.simulate(t, e.target, v.event.fix(e))
            };
            v.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = z.access(i, t);
                    o || i.addEventListener(e, n, !0), z.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = z.access(i, t) - 1;
                    o ? z.access(i, t, o) : (i.removeEventListener(e, n, !0), z.remove(i, t))
                }
            }
        });
        var vt = e.location,
            xt = {
                guid: Date.now()
            },
            yt = /\?/;
        v.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t), n
        };
        var Et = /\[\]$/,
            kt = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;

        function Ct(e, t, n, i) {
            var o;
            if (Array.isArray(t)) v.each(t, function(t, o) {
                n || Et.test(e) ? i(e, o) : Ct(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== b(t)) i(e, t);
            else
                for (o in t) Ct(e + "[" + o + "]", t[o], n, i)
        }
        v.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    var n = m(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Ct(n, e[n], t, o);
            return i.join("&")
        }, v.fn.extend({
            serialize: function() {
                return v.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = v.prop(this, "elements");
                    return e ? v.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !v(this).is(":disabled") && Nt.test(this.nodeName) && !St.test(e) && (this.checked || !ge.test(e))
                }).map(function(e, t) {
                    var n = v(this).val();
                    return null == n ? null : Array.isArray(n) ? v.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        });
        var Tt = /%20/g,
            Bt = /#.*$/,
            It = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Dt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Ht = {},
            Mt = {},
            Ot = "*/".concat("*"),
            Pt = f.createElement("a");

        function Ft(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(H) || [];
                if (m(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Ut(e, t, n, i) {
            var o = {},
                r = e === Mt;

            function a(l) {
                var s;
                return o[l] = !0, v.each(e[l] || [], function(e, l) {
                    var c = l(t, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(s = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                }), s
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function Vt(e, t) {
            var n, i, o = v.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && v.extend(!0, e, i), e
        }
        Pt.href = vt.href, v.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ot,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": v.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Vt(Vt(e, v.ajaxSettings), t) : Vt(v.ajaxSettings, e)
            },
            ajaxPrefilter: Ft(Ht),
            ajaxTransport: Ft(Mt),
            ajax: function(t, n) {
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var i, o, r, a, l, s, c, p, d, g, h = v.ajaxSetup({}, n),
                    m = h.context || h,
                    u = h.context && (m.nodeType || m.jquery) ? v(m) : v.event,
                    A = v.Deferred(),
                    w = v.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    y = {},
                    E = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!a)
                                    for (a = {}; t = Lt.exec(r);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = y[e.toLowerCase()] = y[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) k.always(e[k.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || E;
                            return i && i.abort(t), S(0, t), this
                        }
                    };
                if (A.promise(k), h.url = ((t || h.url || vt.href) + "").replace(Rt, vt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) {
                    s = f.createElement("a");
                    try {
                        s.href = h.url, s.href = s.href, h.crossDomain = Pt.protocol + "//" + Pt.host != s.protocol + "//" + s.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = v.param(h.data, h.traditional)), Ut(Ht, h, n, k), c) return k;
                for (d in (p = v.event && h.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Dt.test(h.type), o = h.url.replace(Bt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Tt, "+")) : (g = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (yt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(It, "$1"), g = (yt.test(o) ? "&" : "?") + "_=" + xt.guid++ + g), h.url = o + g), h.ifModified && (v.lastModified[o] && k.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && k.setRequestHeader("If-None-Match", v.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || c)) return k.abort();
                if (E = "abort", w.add(h.complete), k.done(h.success), k.fail(h.error), i = Ut(Mt, h, n, k)) {
                    if (k.readyState = 1, p && u.trigger("ajaxSend", [k, h]), c) return k;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1, i.send(x, S)
                    } catch (e) {
                        if (c) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(t, n, a, s) {
                    var d, g, f, x, y, E = n;
                    c || (c = !0, l && e.clearTimeout(l), i = void 0, r = s || "", k.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, a && (x = function(e, t, n) {
                        for (var i, o, r, a, l = e.contents, s = e.dataTypes;
                            "*" === s[0];) s.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in l)
                                if (l[o] && l[o].test(i)) {
                                    s.unshift(o);
                                    break
                                } if (s[0] in n) r = s[0];
                        else {
                            for (o in n) {
                                if (!s[0] || e.converters[o + " " + s[0]]) {
                                    r = o;
                                    break
                                }
                                a || (a = o)
                            }
                            r = r || a
                        }
                        if (r) return r !== s[0] && s.unshift(r), n[r]
                    }(h, k, a)), !d && v.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}), x = function(e, t, n, i) {
                        var o, r, a, l, s, c = {},
                            p = e.dataTypes.slice();
                        if (p[1])
                            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                        for (r = p.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = r, r = p.shift())
                                if ("*" === r) r = s;
                                else if ("*" !== s && s !== r) {
                            if (!(a = c[s + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((l = o.split(" "))[1] === r && (a = c[s + " " + l[0]] || c["* " + l[0]])) {
                                        !0 === a ? a = c[o] : !0 !== c[o] && (r = l[0], p.unshift(l[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + s + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, x, k, d), d ? (h.ifModified && ((y = k.getResponseHeader("Last-Modified")) && (v.lastModified[o] = y), (y = k.getResponseHeader("etag")) && (v.etag[o] = y)), 204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, g = x.data, d = !(f = x.error))) : (f = E, !t && E || (E = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || E) + "", d ? A.resolveWith(m, [g, E, k]) : A.rejectWith(m, [k, E, f]), k.statusCode(b), b = void 0, p && u.trigger(d ? "ajaxSuccess" : "ajaxError", [k, h, d ? g : f]), w.fireWith(m, [k, E]), p && (u.trigger("ajaxComplete", [k, h]), --v.active || v.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return v.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return v.get(e, void 0, t, "script")
            }
        }), v.each(["get", "post"], function(e, t) {
            v[t] = function(e, n, i, o) {
                return m(n) && (o = o || i, i = n, n = void 0), v.ajax(v.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, v.isPlainObject(e) && e))
            }
        }), v.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), v._evalUrl = function(e, t, n) {
            return v.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    v.globalEval(e, t, n)
                }
            })
        }, v.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])), t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return m(e) ? this.each(function(t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = m(e);
                return this.each(function(n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    v(this).replaceWith(this.childNodes)
                }), this
            }
        }), v.expr.pseudos.hidden = function(e) {
            return !v.expr.pseudos.visible(e)
        }, v.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, v.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var jt = {
                0: 200,
                1223: 204
            },
            Gt = v.ajaxSettings.xhr();
        h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, v.ajaxTransport(function(t) {
            var n, i;
            if (h.cors || Gt && !t.crossDomain) return {
                send: function(o, r) {
                    var a, l = t.xhr();
                    if (l.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) l[a] = t.xhrFields[a];
                    for (a in t.mimeType && l.overrideMimeType && l.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) l.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === e ? l.abort() : "error" === e ? "number" != typeof l.status ? r(0, "error") : r(l.status, l.statusText) : r(jt[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                                binary: l.response
                            } : {
                                text: l.responseText
                            }, l.getAllResponseHeaders()))
                        }
                    }, l.onload = n(), i = l.onerror = l.ontimeout = n("error"), void 0 !== l.onabort ? l.onabort = i : l.onreadystatechange = function() {
                        4 === l.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        l.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), v.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), v.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return v.globalEval(e), e
                }
            }
        }), v.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), v.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(i, o) {
                    t = v("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), f.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Jt, Yt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
        v.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yt.pop() || v.expando + "_" + xt.guid++;
                return this[e] = !0, e
            }
        }), v.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, a, l = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (l || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(Qt, "$1" + o) : !1 !== t.jsonp && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || v.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === r ? v(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Yt.push(o)), a && m(r) && r(a[0]), a = r = void 0
            }), "script"
        }), h.createHTMLDocument = ((Jt = f.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), v.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(i)) : t = f), r = !n && [], (o = C.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, r), r && r.length && v(r).remove(), v.merge([], o.childNodes)));
            var i, o, r
        }, v.fn.load = function(e, t, n) {
            var i, o, r, a = this,
                l = e.indexOf(" ");
            return l > -1 && (i = mt(e.slice(l)), e = e.slice(0, l)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && v.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, v.expr.pseudos.animated = function(e) {
            return v.grep(v.timers, function(t) {
                return e === t.elem
            }).length
        }, v.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, l, s, c = v.css(e, "position"),
                    p = v(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), l = p.offset(), r = v.css(e, "top"), s = v.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + s).indexOf("auto") > -1 ? (a = (i = p.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(s) || 0), m(t) && (t = t.call(e, n, v.extend({}, l))), null != t.top && (d.top = t.top - l.top + a), null != t.left && (d.left = t.left - l.left + o), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), p.css(d))
            }
        }, v.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    v.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === v.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === v.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = v(e).offset()).top += v.css(e, "borderTopWidth", !0), o.left += v.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - v.css(i, "marginTop", !0),
                        left: t.left - o.left - v.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === v.css(e, "position");) e = e.offsetParent;
                    return e || ne
                })
            }
        }), v.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            v.fn[e] = function(i) {
                return j(this, function(e, i, o) {
                    var r;
                    if (u(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }), v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = Ge(h.pixelPosition, function(e, n) {
                if (n) return n = je(e, t), Pe.test(n) ? v(e).position()[t] + "px" : n
            })
        }), v.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            v.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                v.fn[i] = function(o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        l = n || (!0 === o || !0 === r ? "margin" : "border");
                    return j(this, function(t, n, o) {
                        var r;
                        return u(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? v.css(t, n, l) : v.style(t, n, o, l)
                    }, t, a ? o : void 0, a)
                }
            })
        }), v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            v.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), v.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            v.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        v.proxy = function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = o.call(arguments, 2), (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || v.guid++, r
        }, v.holdReady = function(e) {
            e ? v.readyWait++ : v.ready(!0)
        }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = N, v.isFunction = m, v.isWindow = u, v.camelCase = Q, v.type = b, v.now = Date.now, v.isNumeric = function(e) {
            var t = v.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, v.trim = function(e) {
            return null == e ? "" : (e + "").replace(Xt, "")
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return v
        });
        var qt = e.jQuery,
            zt = e.$;
        return v.noConflict = function(t) {
            return e.$ === v && (e.$ = zt), t && e.jQuery === v && (e.jQuery = qt), v
        }, void 0 === t && (e.jQuery = e.$ = v), v
    }), window.linerJQuery = window.$, window.isLinerBrowser && (window.$ = e, window.jQuery = t)
}
if ((window.injectLinerCoreCSS || window.injectLinerCoreScript || window.top === window) && !window.isLinerCoreCSSInjected) {
    window.isLinerCoreCSSInjected = !0, (0, window.linerJQuery)(document).ready(function() {
        const e = document.createElement("style");
        e.type = "text/css", e.textContent = "\n            :root {\n                --primary-900: #004c4a;\n                --primary-300: #4cd0cd;\n                --primary-400: #33cac6;\n                --primary-600: #00a7a0;\n                --primary-200: #7fdedb;\n                --primary-500: #00bdb8;\n                --primary-700: #008683;\n                --primary-800: #006a67;\n                --primary-100: #b2ebe9;\n                --primary-50: #e5f8f7;\n                --secondary-900: #9d1300;\n                --secondary-800: #cb240d;\n                --secondary-600: #f85842;\n                --secondary-700: #f3442c;\n                --secondary-500: #ff7b69;\n                --secondary-400: #ff9587;\n                --secondary-300: #ffa296;\n                --secondary-200: #ffbdb4;\n                --secondary-50: #fff1f0;\n                --secondary-100: #ffd7d2;\n                --grayscale1-700: #52565d;\n                --grayscale1-800: #33373d;\n                --grayscale1-900: #272b31;\n                --grayscale1-400: #b0b4bd;\n                --grayscale-600: #787d86;\n                --grayscale1-500: #969aa2;\n                --grayscale1-300: #c6cbd3;\n                --grayscale1-200: #dde1e7;\n                --grayscale1-100: #eef1f4;\n                --grayscale2-900: #222222;\n                --grayscale1-50: #f6f8fa;\n                --grayscale2-800: #333333;\n                --grayscale2-700: #555555;\n                --grayscale2-600: #777777;\n                --grayscale2-500: #999999;\n                --grayscale2-400: #acacac;\n                --grayscale2-300: #bfbfbf;\n                --grayscale2-100: #e7e7e7;\n                --grayscale2-200: #d9d9d9;\n                --grayscale2-50: #f1f1f1;\n                --negative: #f35750;\n                --success: #31cb84;\n                --disabled: #bababa;\n                --white: #ffffff;\n                --darkprimary-900: #21c9c5;\n                --darkprimary-800: #02d5d0;\n                --darkprimary-700: #0de4e0;\n                --darkprimary-600: #15f4ef;\n                --darkprimary-500: #40fffb;\n                --darkprimary-400: #6ffffc;\n                --darkprimary-300: #92fffd;\n                --darkprimary-200: #a8fffd;\n                --darkprimary-100: #b8fffe;\n            }\n\n            a { \n                -webkit-touch-callout: none;\n                -webkit-user-select: none;\n            }\n\n            html body p,span {\n                -webkit-user-select: text !important;\n                -khtml-user-select: text !important;\n                -moz-user-select: text !important;\n                -ms-user-select: text !important;\n                user-select: text !important;\n            }\n            \n            lighter {\n                font-family: inherit !important;\n                font-size: inherit !important;\n                color: inherit !important;\n                font-weight: inherit !important;\n                cursor: pointer !important;\n            }\n            \n            .ab-iam-root {\n                position: relative !important;\n                z-index: 9999999999999999999 !important;\n            }\n    \n            .PSPDFKit-Popover-Text-Markup-Toolbar {\n                display: none;\n            }\n            \n            .liner-mini-button {\n                display: none;\n                position: absolute !important;\n                width: auto !important;\n                height: 30px !important;\n                z-index: 9999999999999999999 !important;\n            }\n            \n            .liner-mini-button .liner-mb {\n                display: inline-block !important;\n                cursor: pointer !important;\n                width: 30px !important;\n                height: 30px !important;\n                position: absolute !important;\n                left: 0 !important;\n                top: 0 !important;\n                opacity: 1 !important;\n                border: none !important;\n                -webkit-box-shadow: 0px 2px 7px 0px rgba(39,43,49,0.2) !important;\n                -moz-box-shadow: 0px 2px 7px 0px rgba(39,43,49,0.2) !important;\n                box-shadow: 0px 2px 7px 0px rgba(39,43,49,0.2) !important;\n                background-color: transparent;\n                border-radius: 40px !important;\n                background-size: cover !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-mini-button .liner-mb.liner-mobile {\n                width: 40px !important;\n                height: 40px !important;\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-mini-tooltip {\n                display: none;\n                position: absolute !important;\n                width: 186px !important;\n                height: 30px !important;\n                padding: 6px 2px 6px 35px !important;\n                box-sizing: border-box !important;\n                border-radius: 30px !important;\n                box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2) !important;\n                background-color: var(--white) !important;\n                z-index: 9999999999999999999 !important;\n            }\n            \n            .liner-mini-color-circle {\n                width: 18px !important;\n                height: 18px !important;\n                margin: 0 3px !important;\n                float: left !important;\n                border-radius: 50% !important;\n                cursor: pointer !important;\n            }\n            \n            .liner-tooltip-wrap {\n                display: none;\n                position: absolute !important;\n                width: 160px !important;\n                height: 30px !important;\n                z-index: 9999999999999999999 !important;\n            }\n            \n            .liner-tooltip-wrap.liner-mobile {\n                width: 240px !important;\n                height: 40px !important;\n            }\n            \n            .liner-tooltip-wrap .liner-tooltip-menu {\n                position: relative;\n                display: block;\n                width: 100% !important;\n                height: 30px !important;\n                box-sizing: border-box !important;\n                border-radius: 15px !important;\n                -webkit-backdrop-filter: blur(10.5px) !important;\n                backdrop-filter: blur(10.5px) !important;\n                -webkit-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                -moz-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                background-color: var(--white) !important;\n            }\n            \n            .liner-tooltip-wrap .liner-tooltip-menu.liner-mobile {\n                border-radius: 20px !important;\n                height: 40px !important;\n                -webkit-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.2) !important;\n                -moz-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.2) !important;\n                box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.2) !important;\n            }\n            \n            .liner-tooltip-icon, .liner-color-circle {\n                cursor: pointer;\n            }\n\n            .liner-tooltip-icon:hover {\n                background-color: #f6f8fa !important;\n                border-radius: 30px !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color {\n                position: absolute !important;\n                top: 3px !important;\n                left: 14px !important;\n                display: inline-block !important;\n                width: 24px !important;\n                height: 24px !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-size: 24px 24px !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color {\n                top: 0px !important;\n                left: 18px !important;\n                width: 40px !important;\n                height: 40px !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-size: 40px 40px !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color.yellow {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.yellow {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color.green {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.green {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color.orange {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.orange {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color.violet {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.violet {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color.blue {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.blue {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-color.pink {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-color.pink {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-comment {\n                display: inline-block !important;\n                position: absolute !important;\n                top: 3px !important;\n                left: 53px !important;\n                width: 24px !important;\n                height: 24px !important;\n                cursor: pointer !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAACR1JREFUeAHtW31sFMcVn5k947ONAylpEFAFkaZtnFKqpE3TilJBZaJK+SDBH2CwjUPAaZBoSSu1aqVGVqP+QVQ1QpaSigRjzrGNudoJRO0fQD/UtGmr4CKCGyMVCYESHCUBTGyMfeed6e/tedZbczY7e3e2I+1Kp3k7H++9+e2brzfvGAufEIEQgRCBEIEQgRCBEIEQgRCBEIEQgRCB6UaAT7dAklfxzDMFrO/yWluxNUzJu6HEXYrxWzlTxVQOegD0FcXYWcbFGYuzP7NFnzkWf+GF61Q+nc+0AbRp09O3Dsvr67iy1ynFHwQMhWYd5UOcq6OKW4ejouBwW9tLV8zaB6udc4Dq6+sLP+4f+REA+Ql+joUEU9Xbig8wxp+/bX7+b/bu3TvkLck2nTOAKg4dsmTX759UUjZA6UUTFeeMn2acH1FcvSuYuGgpeVEumHuR6olLg4ttLhZLJhdzxe9hSj2qmPrKRB547+NCNIj1D+2LV1baacozzsoJQBW1tUvkCHtdKfV1r4YECoZJE5+Tfzje8so5b9nN6IqabctUYoSG59aJYHHOT4h89lg8Fnv/ZnxMy7MOUNnGJx5QcvQ1KOJaDYC5gE78YnnJslcbGhqkqZLe+mgvenrPVQP85wDUHZ4yWFPk8c6D+//lycuYzCpAZVW11Uyyl6F8lDQD8wQX/Nm5UbGnubl5OGNtPQzq6uqig8Pyh0qqX2K1m+PI43yYCba9sz32qqdqRmTWACJwlK1atDawmo+ExdbH22N/03m5SCuqar8tbdYFa/qs5s8tXpMtkLICEA0rpuy/uJbD+TvKynu0q23fea10LtP1m55cyu3kEchfQXIwnIcZt1ZnY7hlDBBNyPaweht6OXMOlHtHLJi7Mv7ii4O5BGUi74odO+bKS4N/1yChvM+K8vsznbjFREEm785SjtUKbVLgYFiR5Uw3OKQzySTZNLTH+rCIVlLScew9UJJR4xKrcDu+2FMkGaaYEBZ/qLO9+XQgTbLQqPf0yavLV3z1HzirVIMd9W0xO3P2/d6eU91B2QcGiHbIQ9eTXRA8tjsWP+/siLUHVSRb7d7tOXWh5Mv3JrBrX+vwxF5s1cpvvtTd3Z0MIiPwEEsdH9yhdWHJwlv2BFEgF21IF9p7jfFeNKZrIFGBJmnn4Dl6DStU6mwluNjyu44DsUAa5KhR+YYttVLJAyn2fCAaKVoa5IAbyILoVK7BwZc6TTvkHPUzMFvSiXRLMVDFKZ3N2QUCiFwWWhSdrTI9Pmhe2UxJJ9JN8/TqrPP8pMYAkbMr5c9JsaeDpx9BM1HHqxvp7DjqDBUxBog8gRhejrOLNoWmp3JD/TKqTrqRjikm0NnR3YylMUBSqe9qETDhI5qevSl/Q+vmuHj1i8/UGCBsDL+keUvGezU9W1NyyLm6wf/t0j6JiM96bjXsC+BgTz3kCXQLJiHKKuseYVzWY3c7FOHW7o6O/f9OV9XZOthDz8JZv5zDSc/vvvPX8YYGbPhufPzypJako2QpZyPpfiO3qXPMLQi3D5oluUk1nS4t31i3WjH7MKzuYbgjKpM48W/evO1z6eqO2INduOHYhbqlUqpf2b3ndqerZ8KT2nt1pJuTdDynyjMGSF/NEFPtQ55MgJJ2Ocrw4fSjikdGE9/Tbzqtqqq/TSm2Wr9TypWq8L5r2i9PXb+oKNKnaa/uOu9mqTFA+Ap6hLGioaHRKQVw5iqn62FVuSGvuJhdBST/fzuRpq3DI01+Op5aXqapMUAwh0+00NHROVOabDQyvxHKn9T1Mbd0Hmpv/oN+1ymubpJcsJ2oO3ag5P3Yt/xYl3tTvzx1m2vXRl3fOF1I6ny/qTFAGDD9mvmISk4JUGtr4ycL5kUfECKyEr7p+zo7WsoBgmuBmg+lnQdjTdHInDuFEKVWcd7nuw4d+Ku3XNMmPKkNXR/ptnRbq2m/qfEqBsZn8fsCCZBJWYJkfBmlzAkPWQey3pqQnfa1tfWV91BAvykfE550t6aZ4cuQ7kaPuQUx1qMlcCG/punZmjoXj1o53PNr0m9qDpAYn1Ow8nzLr6AZq4dbWS3bCYLQLz5TY4CK8tRRzCOpyz/FVtXUfP92n7KmvZpzG+teWWOVRISIqRLGAMVisUuwHOf2EmPaGkpcLzMVOl31ZTL5mJaFteFokPAZY4BIIFakVi0YgQVPY/fr2Qy6JTNKwB8kmFRPaCUobEbTJmkggOYVWjHA5OwpKJCgsmqL+6VMhOeyrnN/Pz68BiimKIi8QAA1NTVRBNh+LVAqtkvTsyHduXNnPqz6uXFd+PNB/NHUPhBAjmARadMKYC5apunZkPZ9dHWXJ/KjjwKtguoVHCBl3+8KVeyES88wQcEMFPGh1aAAq0yi0AIDhJUsdTEHTbDsGy+fugPZTCmIIRXp4YbDnKDos0xkBAIIK0QEy+ZqV7DFj7v0DBEUvOBEeIyHwfQ5UWcZhuYFAqjnzPlvwIJuISxwQj/f2db83xnCxRHrWI4nsgMWPUzRZplGdhDzQABJabvDCzxm1HpozuGjybexaq1w0Er1ans2YoNSrFyuRkSprq2mmH9oA1ldXe/6Y3SbbKQUgle+sfan0lZ/1NFljuVkMbqM9DTeAW/durW4fzB5GW3JVaLyrYLb29v3fkzM6EFA1R0ywUoRq0gglpLydAWMOashfjD2GjqBXUHwh3bIszqIs3xD7cO4G3uDuojOnhTzomtkf2INXFOlsKa1OHp8cdLuc3aKc/FyYV5BvKXltx9OWi9NwacmDLissmYPTOAH1AeYH4XZFeDdKM4I7Ww0fhMc/skUP4HWZwqs/MuRSOLKtcLCiDeQXDBVoiRfR0eaNLjNvkByAPQfAHJPGmXHsug/FexNWNdxS1nH4EL9ICETOIqoHXrlm7yt35Lp+ysCzSNGDxzfC9FZtw2AwFFMdQvOjkvJjy1ZOO+txsbGEbdCivgZJtXdA8NqM3a5FQBwFSZwwxX0U/JnlvUbazdgmt0BiHrhoTvOivL+FN+3jyZt309V1baFSTnyHYB9Hxrdi99SYD4fw24+5jBBtw/kYIeMGf87lO9OhRVDBEIEQgRCBEIEQgRCBEIEQgRCBEIEQgSyhsD/AKRgmoba99YBAAAAAElFTkSuQmCC) !important;\n                background-size: 24px 24px !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-comment {\n                top: 0px !important;\n                left: 74px !important;\n                width: 40px !important;\n                height: 40px !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-size: 40px 40px !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-share {\n                display: inline-block !important;\n                position: absolute !important;\n                top: 3px !important;\n                right: 47px !important;\n                width: 24px !important;\n                height: 24px !important;\n                cursor: pointer;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABnNJREFUeAHtmm2IVFUYx8+5d9R9SVLEEiXwLRChhRJD6EORiUWC4c7uTpvjTluuQS0IiYSgLmkFQV9CJVF3Z2dSZ2d2NiNBEvvQhyQjCaxWwVxJSMxUdlcZ252Ze/o/O3Nn764zu3d27osT58DuebnnnOd5fuec55xz7zAmgyQgCUgCkoAkIAlIApKAJCAJSAKSgNMEuNMCi5FX2+DfhfpbmeBHurs6t3PORTHtrairWNGJbX0I9oEQbLZgYpvXt+mQEMLxAX2oAWG6VOrwAeotNyA91IB0OHrsBqSyAkSgnIZUNoA44+1uzKSyAYRd7G03IJUNINri3YBUNoBoebkBqawAuQGp7AA5DaksATkJqWwBOQXJQ4IeluD3v/NYIjm0SLD0QlxLF+DuNalq5Ljb2to2/9rbx3Bna6YG2cMkYrG51Auu45c/3eJAIFBxN5F+EVvTOljyvGB8IUyr0p+Pj3ui4Ql1pYust6HpsA6J2nPOjnRHQiVBcnQGYaQ9v1282iiY5h1MaKthQxUNdybocTZriEDmD0M2b9KumTThqOTVZAqFAKNcuHTlDbzX2Q0gSwp1gZPyNcwAwOADWDkDFGNi3FKneyKxL49MCon6JVlYboesmkm2A6rzbfJqgu3BElg2HgxG/Qcsq1OKop5nFfx8rKPjn/F1ppK3EpJtgFpbW2dcv9m/nxym0UjMkr+4IkJCUTvix4KXjc+sTFvlk2wB5PO9+cSwSMWxrazUjYbDHGRc2alseHV/rL4+rZfbGVsxkywH5PUFXhCaFoUPmJsznrOjaqW6LRYM3siVOZQoFZKlgLy+ptWY2ifxV0H2o/P7jKmN8WjwhEM88orJB0lR2CfdkfCOvA0MhZadpBsaAquE0L4ehcPvcMXzkttwyFYA0hTvuhYMWG4n1ARvMnAomLQEkM/XPD/J0ifgkKtJEvzNn0xVnuuOdJwtKNnBB+Swtfg3B3HSWqqLBayQnp4oLhlQXVvb9KxDfpwEYZcaYKq6Jn48eGkiwU49IziZryGjuym9meyOdE66vEjHkgFpF6/uwuFvVdZgDJLit3P7LgZsQTj0+tbkR8iSnHRdY9OKdEr7EUpnryx8T080RF9DXQ9WwCEjpjyDaGfQ0uIQ+hiBgxE5XbN8cRt16nawCg7ZMeXLKi6dTVDkaeoEcJJwyu/RbkF5MwF1Pb/39c1nKTaPaXweTo5zuRCV6KsCu+EMxNM0Dbc3zoY8jMe6ujqvmOnXSjgkb0qAWlpaqm4N/Ls3p7AQ+ybzO7WNzYuZln6FaWIlPHnNhd6+5biHzcj0kbnJ038YOFI0GjMwFHRdeTJTt/B/q+GQpCkBuj04tAWWzM+oym/PrFI+zKc2XTmSQtsCs2tFKjl6Wc0wyNckbxmqL837wFBoBxzqvmhAtK1rvX3v67pxhe8OBoP9ep5ict7wTzuSWmo9jFONzwxp/FSD3xJcXEd8HfVuYIkl8HwYi3YYecRip6F+waRdcEhg0YC0S30bcc9aQI1h2LWnli06GKcMQl0gMC99X/sYO1sA2XE7JE9gZz2N4nNYRedmPeL5ub29/S61KxQ21PsnBWQnHNKraEBQ6F3dIID6HM42Rfna1zdtTCe0Axj1mfpzxHCy/DuADPM51T2xAwfuGZ6VnLQbDilYFKDsuecZaojpcU+ZVXnY799WnRj+e59IiwCV6wFgzqDS9ngk9IteZmXsBBzStyhAWlpryRnJWZc6mKpOiJunsGRq9HKAuQwH3hrvCn2rl1kdOwWH9DZ9UMTWPg3XmvqcsZyfTYrkWShrhNP1aLVnRTwa/l/AIVtNz6Db/ffXoP4saoRZgt2bfYrkHMqjZAivUbdiOX2Rydvz38mZo1tgGhD8SR1eoY4EKDoNCR1OAv5ofTwSPqN3akfsBhyyw9QSq4tG6Syz/kHD+V1FUV6OR0O2wiG5eV9ZFHErf1B3cyXmZtBXJ5+FI549tkver3rY2tix4E9jy+3JQX7u6wiODe0jP6Yy+cqiFI1MAYJya41CsKSGFVW8FjsWdgTOWNnOwSG5ppYYPvyNBcSV5tjx8PdGxZ1IOzlzdHtMAcIvLZboDcB0J6b30dG8fSnMVHwVyQQ34JBkU4Cwee2Hgnc4Vz7qiXbuzepse4SLMI4SvF/hymdO+RzbjZICJAFJQBKQBCQBSUASkAQkAUlAEpAEJAFJQBJwl8B/K8B1I/x3y7kAAAAASUVORK5CYII=) !important;\n                background-size: 24px 24px !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-share {\n                top: 0px !important;\n                right: 70px !important;\n                width: 40px !important;\n                height: 40px !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-size: 40px 40px !important;\n            }\n            \n            .liner-tooltip-menu .liner-tooltip-undo {\n                display: inline-block !important;\n                position: absolute !important;\n                top: 3px !important;\n                right: 13px !important;\n                width: 24px !important;\n                height: 24px !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-size: 24px 24px !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n            }\n            \n            .liner-tooltip-menu.liner-mobile .liner-tooltip-undo {\n                top: 0px !important;\n                right: 16px !important;\n                width: 40px !important;\n                height: 40px !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-size: 40px 40px !important;\n            }\n            \n            .liner-tooltip-wrap .liner-color-picker {\n                display: none;\n                width: 100% !important;\n                height: 30px !important;\n                box-sizing: border-box !important;\n                padding: 6px 0px !important;\n                border-radius: 15px !important;\n                -webkit-backdrop-filter: blur(10.5px) !important;\n                backdrop-filter: blur(10.5px) !important;\n                -webkit-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                -moz-box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                background-color: var(--white) !important;\n            }\n            \n            .liner-tooltip-wrap .liner-color-picker.liner-mobile {\n                width: 100% !important;\n                height: 40px !important;\n                padding: 7px 0px !important;\n                border-radius: 20px !important;\n                -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;\n                -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;\n                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;\n            }\n            \n            .liner-color-picker .liner-color-circle {\n                float: left !important;\n                width: 18px !important;\n                height: 18px !important;\n                margin: 0 3px !important;\n                border-radius: 50% !important;\n            }\n            \n            .liner-color-picker.liner-mobile .liner-color-circle {\n                width: 26px !important;\n                height: 26px !important;\n                margin: 0 6px !important;\n                border-radius: 50% !important;\n            }\n            \n            .liner-color-lock {\n                background-size: 6px 8px !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAAAXNSR0IArs4c6QAAAkpJREFUSA3tVj1oFEEUft/sXm6FIJgItgFjbMQiloIihqDYJAgHSrSLWJ0KEe9Wz4yR7F4lBEsrxVpBEFEIIikigo2VPym08Qd/GpFL8Paeby7Zu93lNneRNAeZ5v1973s7b5aZB1pnaf3cXqFXYxQEJwkYJuIBZvwF8VcmLBLo0fC+3Q9yuVyQRoO0QEH7o6jRbWYeSsMYP4AlkDrvzVyZb4WzWjnd6/4lYr7HTDtbxRO+PgJPHDo88nvhxfzLRIxU0uHq8uka8y0hX4uhogBfwRpxrMyu/u2ZXtvCUSjy5Pv/mHyDNTkmN8kXa1HR8/q5gg+SssMAZfuLqidzavba1KdkorG19gdWanxfChw0NkC/yKEh33V/Gtus2A54GedCckF/RnbbeBq5Sda6+JGc3nH5yi/GlkJ9VFGTRg9XrID8HWONgMJl7+rFb6GdJn03/51glRpxNDmML1ZA7MEQ2EP2s1BvK1Ww0MTwnqaeKFDf4lpU66kfUeB6uq/d92E8ymF8yR2EuE2T3V8AhZLHm9aPFkTd3yI7uqvyTTd2dURjG9Gjbe/+Fm3toO3Zb7WofYvkHV0OUeZNDvX/lVEOw61kkHrXIEu8pw3/RpQ4x1sUS15ertO5VQ4EUJgj2HeydGBJ6yPVTrhXJ8DXg8TVSa7xBXn+6/OWgspDJjcUp8uPZSQ43glZxxjgiX+jcEJmKjAcPiNjysOOk9sBhctR2Yk6dxQr8+gxmUfPysO9X+ruFRm7baPYqC6HWTVnKfINCHe9mcLTMP4PC7C4CQYvfhkAAAAASUVORK5CYII=) !important;\n            }\n            \n            .liner-color-yellow {\n                background-color: #ffe47c !important;\n            }\n            \n            .liner-color-picker .liner-color-circle.liner-color-yellow {\n                margin-left: 12px !important;\n            }\n            \n            .liner-color-picker.liner-mobile .liner-color-circle.liner-color-yellow {\n                margin-left: 12px !important;\n            }\n            \n            .liner-color-green {\n                background-color: #6fe2d5 !important;\n            }\n            \n            .liner-color-orange {\n                background-color: #ffbea9 !important;\n            }\n            \n            .liner-color-violet {\n                background-color: #c8a6ff !important;\n            }\n            \n            .liner-color-blue {\n                background-color: #9bdcfc !important;\n            }\n            \n            .liner-color-pink {\n                background-color: #fec1de !important;\n            }\n            \n            .liner-tooltip-wrap .liner-tooltip-arrow {\n                position: relative !important;\n                width: 100% !important;\n                height: 6px !important;\n                top: -1px !important;\n            }\n    \n            .liner-tooltip-wrap.liner-mobile .liner-tooltip-arrow {\n                height: 9px !important;\n            }\n            \n            .liner-tooltip-arrow.liner-share-opened {\n                top: 30px !important;\n                position: relative !important;\n            }\n            \n            .liner-tooltip-arrow .liner-arrow-down {\n                display: block !important;\n                margin: 0 auto !important;\n                position: relative !important;\n                width: 16px !important;\n                height: 6px !important;\n                background-size: contain !important;\n                background-position: center !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAbCAYAAAA0wHIdAAAAAXNSR0IArs4c6QAAAY5JREFUWAnlmbtKxEAUhjNgqeI2gjZiIbb2iyAiiIWgT+Az6Kv4EpbbqI03sNEXsFAQxCuCrYqI8TtFQLIu7GROsnNmD3w7ZEhm8n/kMmRdnuejWZZNwxTMwCqsQQuGtV4Jvg9HcA9P8Oz46SoEjtC5CNuw3rVDmh05sfZgFy6dcz/eMRHXhnNIuQ4Jt+Atp9cBDLYD34kZ+yTPVq/M5f5/b8PyTsU2A8vzTC7ViaLPcPvCuW9yu130m8FLlgyKsHmaE5CXgtW64cSXEfXgE8BblgyOsDmaM7AoTEQtIUrecF5VSZbMYFRYZVGSubIsg8KCRAXLMiQsWJSKLAPCVESpyYpYmJooVVkRClMVpS4rImHqoiRbLSXLCniEQdQ1k9pa/3HCgxBmT1RxuTYszK6ohoXZF9WQsHRE1SwsPVE1CUtXlLKw9EUpCRseUSVhd56r1itzC84icGhL8Ek4hX6qw07joXOaPx4JG3AMX/C3Ptg4gJUYQgZ9KdUOgJQxxpwF+Tf8DW75Vv5OG0X9AqxYEeJqEucsAAAAAElFTkSuQmCC) !important;\n            }\n            \n            .liner-tooltip-arrow.liner-mobile .liner-arrow-down {\n                width: 25px !important;\n                height: 9px !important;\n            }\n            \n            .liner-share-menu {\n                display: none;\n                position: absolute !important;\n                bottom: 0 !important;\n                width: 150px !important;\n                height: auto !important;\n                padding: 4px 0px !important;\n                -webkit-backdrop-filter: blur(10.5px) !important;\n                backdrop-filter: blur(10.5px) !important;\n                box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3) !important;\n                background-color: var(--white) !important;\n                border-radius: 8px !important;\n                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;                \n            }\n            \n            .liner-share-menu .liner-share-method {\n                position: relative !important;\n                display: block;\n                cursor: pointer !important;\n                background-color: var(--white) !important;\n                width: 100% !important;\n                height: 30px !important;\n            }\n            \n            .liner-share-menu .liner-share-method:hover {\n                background-color: #f6f8fa !important;\n            }\n            \n            .liner-share-menu .liner-share-method-icon {\n                position: absolute !important;\n                top: 4px !important;\n                left: 16px !important;\n                width: 22px !important;\n                height: 22px !important;\n                background-size: contain !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n            }\n            \n            .liner-share-menu .liner-share-method-label {\n                position: absolute !important;\n                top: 10px !important;\n                left: 54px !important;\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 11px !important;\n                font-weight: 400 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 100% !important;\n                letter-spacing: -0.25px !important;\n                color: #52565d !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-facebook .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-twitter .liner-share-method-icon {\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAACG1JREFUeAHtXGtsFFUUPndmdreP3UILBrQPIaWUt6JGDY9EK4LiC6L4KoUEYkysr0SJaKLpL0UjMSj8MAIJ0IaoMYIxDRrAAMbwCx9IS2mrUFoiQqp02+12X9dzZrvt7GN2d6Z32u7iTTZz9859nO+be88998zZZTAKaUa9pyQQCi4JAczG4SrxUwGcF3EGLgbMRSJw4G7GwQ2MdePXVvy0SADNiiT/2LY2r5PqWJmYFZ3XcS7tbui7F4J8DQKswjEqRjhOKxJ2FGT25Ybq/B/qGENOxSahRJTv95T6faFazng1PvESsaIO9sZYJ+OswWaXdrQ/k3dR1BhCiCjf553hD/nfQKHW4wywiRIuWT84Q/x4f49Nsr3fXpPTlqxuOvdGRMTcL7izx+uuA2Cv4AxQ0hlQeB3GAqhhthXkuOrOPMl6zfZvmohp+3pWBUNsOwpRbHZwse1YlyzxF8/XFBww069hImY0csfA1d6tOANqzQxoeRvGdjgmO19rW8kGjIxliAhVGfqDBzjntxkZZLTrMsZO2WzyKiPKNG0iyurdc3gIvrNsNxDNFu0uEqzoWOtqSqdrtFlSp+kNnjt5kJ/IGBIIEm7fJDPJnhohqvtUldSZQCQAFKWqO07vdzOZLU01M5LOCNIJ6nLIXBLo2RQRBsKS7EHpEkG7gx8VY0YtBz2kuEwIC2HSq6JLBG2R43130AOVqJywqNt+optYllBHhI0l+FqnTUYXyxKsTmR0xRGhms39vWfHj8UomnfWVZDrnBVrjsctjfDZYbyYzaJJoP54cRhjdN9RM4JOkT7ub0YFOTYHqGjZrPuGBzU7s83WnlqjZoSPBzZnPQlELz5oFauG6qEZEXaqBNtHy5+gkWFMsuTPsNnl8sh5ZGhGqJ6lUXKqjAnymEHpgRPmSLFKRB36GFX3WqT0OrkSZsJOcNWlUVbfex8Phg6PNX4Zpdkw2wb33KRAxUQJfbUAp64E4WhXEPa3kmduOBU6GEywA5x38+FCEzkmS8s61jqPhHcH9Dab6COuyfJSBS64Q9Dyr3En87wiCT5anAOVhXJUvyvK8CxdZoNHpinw5kkvTHdJsAzHWVaiwP3f9EXVNfUljD1MBK6XKlOdxDSqqbTBfAT01Pf9hsgoyWdQvywXinKGVFZMzwBLblTgxGqnWh7iHF7/yQvu6EkS1yadggh2iV6+YIORvncAG2JYMlVWwXy+PBfmFOqDihXw7TscSUnQ1g+EOGw/7cPxGLx3t0NdHtr7JvIVxIFEb6BMNI5r4sfVIKNwlOjJHlyZBy/Nt4MSLoqrHymYkstw6qdvvyk4xssLHPAOktdwzg/XfJGezF+JA2nwNZz5XjQte/3DisuBmm7TQgc0PpwHCyfrz465uJQkloItzRiU/csTgscPeeD3buO6KKYr9StxQBLSu0ghqfECvmKISbNQ+R1cmQ/fPpQHpENI02uTy26MBGq7CfVD0z9iSBiUpZLm5Ij1w2BnsKvZB2vKFXyPGw9uwSQZ6EP64NerQWi7FoJ2/OTb4utG+tO7ujUzT6+OwfIKBe1uIb5IUpatuG2+dXIA3kUllogMEi4Hl8xdUxT8GBRVU/1K//AS1BSbzyIHaFGC+lrefC/hljm4/Z98Ih/mTZLgtKC1qyfT34KJIA5QqTMX7qV6Y6ZdTnt6AJdt9cwYJZB2D+lVvNQXgoFgenXTrUUc6KvzdHvR1PvqDwEWjqa/RNnjl+IVcqJ6RssknA1uo4306u9AQ+cybm1WpmOXBE8HFJY4kNRwHUGSe/BhPY3mdQeeN6xIHtwtTlgwI4gDaTBmSZjc7T0heLTRg2bwgPDZUY+WZI8Vqw/jtkhHtApjYbCjV2+xozUpq8pTVN8DQQ6fNQmwpxML1EpEtCS+Z770SGcAFuNpsdgpThfvOeuHy4K3TQ3CFglFbdYUCMmSQvv4N0NxGknHbeoOwgc/i+svdjDiQKI4xtgbIr5/+IsPrUwvXO0fmeLsD3CoPe4F38i6SQqJOFAN/dI9PeewprAzh3bUXDzNLMVlQh6mx6YbC7jzol544Vg/HO4Uv2VqZGy9uL5gprqI0bI6qrkhNIt+FJg5QYIHDPgcSAA60q87bDkJ6LQNYw97RDCiFaNknxfFADldF+CZg3yYz1bYoTDH2AnzPG7Btcf7LT+zqHgJOyZVQnJp79rXewFPoiVmyHDggau6wqY+9UkIujhfgjwTx2sv6oNP0Dr99IzPUp0whBHjrDbWOG+mkGZ1aVCGwnqHKhjM0CFoN25vW1CzN6PDhLYiI4kOUmQjVB3sU4mwUjFq5SLMhJ3KhuasyFd+LtSJVehuv/0GGW5Fw2pqHoOJ+B6CJskVL0eLk6vutj97OBy66Md3FxZuCVrkmjzqhqhXfkNEUJ3Svb07gYc2aupnbRaJ2Nmx3vVcBGDUJLYzZQuePaw550ZGHA9XxEjB7FpRoogIxwvwbdoK2Znn27SxEYQxiggqoCh3VB1dlM/OhKFDKsZodHFEUGwRRblHV8ueb4QtNn6K0MURQYVq1BlGuVM+qxJiShRRRxgTEkE3KNSfotwpnw2JsBAmPSy6RNDvHSjUH3eRTr3GGVOOGAhLst9w6BJBICm+iEL9MUs/QczU1E0YIrFSeiCSEkGNKKpdUZQHMZuJZHST7Kki8wlnlGVJBXrp/x+uDDJDrNpt8qJMUKAkI8mazkyIPPiUSyNSka60zuyTnYtQgY7frRVlIxlT6QQtLsqnvTRiG2bbzx0NzQgtGWSYUJQ7Url1TA9qdEhEGUgWPWNJK7de3vSM0HYYDmYPbGacr8P3iOiNsD6RP4EztpdOzLEHKDOjCyEiMnDYuXMd/0g+QkTkSj7Q6/pvEyJExF4z4Y80/gNh/COiuKFi6gAAAABJRU5ErkJggg==) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-linkedin .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-messenger .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-line .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-kakaotalk .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-mail .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-copy .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-copied .liner-share-method-icon {\n                background-image: url(data:image/png;base64,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) !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-copied {\n                display: none;\n                cursor: auto !important;\n            }\n            \n            .liner-share-menu .liner-share-method.liner-share-copied .liner-share-method-label {\n                font-weight: bold !important;\n            }\n            \n            .liner-comment-box {\n                display: none;\n                position: absolute !important;\n                width: 220px !important;\n                height: 140px !important;\n                padding: 0 !important;\n                box-shadow: 0 2px 4px 0 rgba(39, 43, 49, 0.2) !important;\n                background-color: var(--white) !important;\n                z-index: 9999999999999999999 !important;\n                border-radius: 4px !important;\n            }\n            \n            .liner-comment-box .liner-comment-line {\n                display: block !important;\n                width: 100% !important;\n                height: 8px !important;\n                background-color: var(--primary-500) !important;\n                border-top-left-radius: 4px !important;\n                border-top-right-radius: 4px !important;\n            }\n            \n            .liner-comment-box .liner-comment-area {\n                display: block;\n                width: 100% !important;\n                height: 132px !important;\n                background-color: var(--white) !important;\n                border-radius: 4px !important;\n            }\n            \n            .liner-comment-area .liner-comment-input {\n                display: block;\n                width: 100% !important;\n                height: 132px !important;\n                max-height: 132px !important;\n                min-height: 132px !important;\n                padding: 12px 16px !important;\n                outline: none !important;\n                border: none !important;\n                resize: none !important;\n                box-sizing: border-box !important;\n                font-family: 'Roboto', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 12px !important;\n                font-weight: normal !important;\n                font-style: normal !important;\n                font-stretch: normal !important;\n                line-height: 1.5 !important;\n                letter-spacing: normal !important;\n                color: var(--grayscale2-800) !important;\n                -moz-user-select: auto !important;\n                -khtml-user-select: auto !important;\n                -webkit-user-select: auto !important;\n                user-select: auto !important;\n                background-color: var(--white) !important;\n                margin: 0 !important;\n                box-shadow: none !important;\n                border-bottom-right-radius: 4px !important;\n                border-bottom-left-radius: 4px !important;\n            }\n            \n            .liner-comment-area .liner-comment-input:focus {\n                outline: none !important;\n            }\n            \n            .liner-comment-icon {\n                vertical-align: middle !important;\n                cursor: initial !important;\n                display: inline-block;\n                width: 23px !important;\n                height: 23px !important;\n                margin: 0 !important;\n                padding: 0 !important;\n                background-size: contain !important;\n                line-height: 0 !important;\n            }\n            \n            .liner-comment-icon .liner-comment-bubble {\n                display: inline-block !important;\n                width: 23px !important;\n                height: 23px !important;\n                margin: 0 !important;\n                padding: 0 !important;\n                border: none !important;\n                cursor: pointer !important;\n                box-shadow: none !important;\n                pointer-events: auto !important;\n            }\n    \n            .liner-upgrade-highlight-box {\n                display: none;\n                position: absolute !important;\n                width: 230px !important;\n                height: auto !important;\n                padding: 0 !important;\n                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;\n                background-color: var(--white) !important;\n                z-index: 9999999999999999999 !important;\n                text-align: center !important;\n                user-select: none !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-header-border {\n                position: absolute !important;\n                top: 0 !important;\n                left: 0 !important;\n                width: 100% !important;\n                height: 6px !important;\n                background-color: var(--primary-500) !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-title-label {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 18px !important;\n                font-weight: bold !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 1.22 !important;\n                letter-spacing: -0.42px !important;\n                color: var(--grayscale2-800) !important;\n                margin-left: 16px !important;\n                margin-top: 23px !important;\n                margin-bottom: 24px !important;\n                text-align: left !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-desc-label {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 12px !important;\n                font-weight: 400 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 150% !important;\n                letter-spacing: -0.28px !important;\n                color: var(--grayscale2-700) !important;\n                margin-left: 16px !important;\n                margin-bottom: 23px !important;\n                margin-right: 16px !important;\n                text-align: left !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-upgrade {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 12px !important;\n                font-weight: 700 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 100% !important;\n                letter-spacing: normal !important;\n                color: var(--white) !important;\n                border-radius: 30px !important;\n                background-color: var(--primary-500) !important;\n                opacity: 1.0 !important;\n                text-decoration: none !important;\n                padding: 7px 16px !important;\n                display: inline-block !important;\n                margin-bottom: 16px !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-upgrade:hover {\n                opacity: 0.8 !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-close {\n                position: absolute !important;\n                top: 7px !important;\n                right: 5px !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAnhJREFUeAHt2r1uE0EQB/BZm6A8QAokKtLwCqSjiKBEqQhljEFK2lDYDnLOUYhd5QXyQW2qUPIIvARK0kSioQ0SuWHH8ensyHC2s7Nzxf8Ke2Xrdmd/t7uaXZsIFwQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAqUQcFpRtJJuLb2hle5e471zjrXaaSTdF5TS1mLl0XqSbFyHbqcSukKpb4hzTMT1Zrt3zMwqD0JwXMpfifnV7/TqLEk+L4bujwoQp/zM4wxRuKaBlOEw0wCFyT0l+rkUGkjlycqIae12j3zwb/OA3amfbvUQ0+0uDjl3Xn248PzTxw8XeXthSipAEpoWUkwc6YcakAZSbBx1oJBIFjhRgEIgWeFEA7oPkiVOVKB5kKxxogPNglQGHBOgaZDKgmMG9D8kqlJftg9ZhqyZBEocRZdqHlTU+KRk0jn643EeDO5VzJCLYsu+NwWSICYhDYIrAY7EobJZHXRwyhfZm3HFfZGRM3qLf3Lf93e2L0c/syibA7XavZfDNed2Wg0V/Mh6rXEKMCuyKZDgMKVnowuyH1H9vBM6RyV5/cUlM6BJOHJkcdBpvPHT7SQP3RbJZJH+F052njN54Q53npTjF5eiAxXhZCGXBSkq0LQ4ZUKKBjQrTlmQogDNi1MGJHWg++JYI6kChcKxRFIDCo1jhaQCpIVjgaSSSafEm6Pbh9A/6skG96DTfDeecdNas9N7kiGGelcBkj8S+OC/aR52jSO5X5VqdbWXNH+EglGvR/5IsLN/+Fi7Icm4/RHtsnY7qB8CEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgoC3wFysUMYDmkPbCAAAAAElFTkSuQmCC) !important;\n                opacity: 1.0 !important;\n                width: 35px !important;\n                height: 35px !important;\n                background-size: 24px 24px !important;\n                background-repeat: no-repeat !important;\n                background-position: center !important;\n                cursor: pointer !important;\n            }\n            \n            .liner-upgrade-highlight-box .liner-upgrade-highlight-close:hover {\n                opacity: 0.8 !important;\n            }\n            \n            .liner-upgrade-comment-box {\n                display: none;\n                position: absolute !important;\n                width: 230px !important;\n                height: auto !important;\n                padding: 0 !important;\n                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2) !important;\n                background-color: var(--white) !important;\n                z-index: 9999999999999999999 !important;\n                text-align: center !important;\n                user-select: none !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-header-border {\n                position: absolute !important;\n                top: 0 !important;\n                left: 0 !important;\n                width: 100% !important;\n                height: 6px !important;\n                background-color: var(--primary-500) !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-title-label {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 18px !important;\n                font-weight: bold !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 1.22 !important;\n                letter-spacing: -0.42px !important;\n                color: var(--grayscale2-800) !important;\n                margin-left: 16px !important;\n                margin-top: 23px !important;\n                margin-bottom: 24px !important;\n                text-align: left !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-desc-label {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 12px !important;\n                font-weight: 400 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 150% !important;\n                letter-spacing: -0.28px !important;\n                color: var(--grayscale2-700) !important;\n                margin-left: 16px !important;\n                margin-bottom: 23px !important;\n                margin-right: 16px !important;\n                text-align: left !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-upgrade {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif !important;\n                font-size: 12px !important;\n                font-weight: 700 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 100% !important;\n                letter-spacing: normal !important;\n                color: var(--white) !important;\n                border-radius: 30px !important;\n                background-color: var(--primary-500) !important;\n                opacity: 1.0 !important;\n                text-decoration: none !important;\n                padding: 7px 16px !important;\n                display: inline-block !important;\n                margin-bottom: 16px !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-upgrade:hover {\n                opacity: 0.8 !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-close {\n                position: absolute !important;\n                top: 7px !important;\n                right: 5px !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAnhJREFUeAHt2r1uE0EQB/BZm6A8QAokKtLwCqSjiKBEqQhljEFK2lDYDnLOUYhd5QXyQW2qUPIIvARK0kSioQ0SuWHH8ensyHC2s7Nzxf8Ke2Xrdmd/t7uaXZsIFwQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAqUQcFpRtJJuLb2hle5e471zjrXaaSTdF5TS1mLl0XqSbFyHbqcSukKpb4hzTMT1Zrt3zMwqD0JwXMpfifnV7/TqLEk+L4bujwoQp/zM4wxRuKaBlOEw0wCFyT0l+rkUGkjlycqIae12j3zwb/OA3amfbvUQ0+0uDjl3Xn248PzTxw8XeXthSipAEpoWUkwc6YcakAZSbBx1oJBIFjhRgEIgWeFEA7oPkiVOVKB5kKxxogPNglQGHBOgaZDKgmMG9D8kqlJftg9ZhqyZBEocRZdqHlTU+KRk0jn643EeDO5VzJCLYsu+NwWSICYhDYIrAY7EobJZHXRwyhfZm3HFfZGRM3qLf3Lf93e2L0c/syibA7XavZfDNed2Wg0V/Mh6rXEKMCuyKZDgMKVnowuyH1H9vBM6RyV5/cUlM6BJOHJkcdBpvPHT7SQP3RbJZJH+F052njN54Q53npTjF5eiAxXhZCGXBSkq0LQ4ZUKKBjQrTlmQogDNi1MGJHWg++JYI6kChcKxRFIDCo1jhaQCpIVjgaSSSafEm6Pbh9A/6skG96DTfDeecdNas9N7kiGGelcBkj8S+OC/aR52jSO5X5VqdbWXNH+EglGvR/5IsLN/+Fi7Icm4/RHtsnY7qB8CEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgoC3wFysUMYDmkPbCAAAAAElFTkSuQmCC) !important;\n                opacity: 1.0 !important;\n                width: 35px !important;\n                height: 35px !important;\n                background-size: 24px 24px !important;\n                background-repeat: no-repeat !important;\n                background-position: center !important;\n                cursor: pointer !important;\n            }\n            \n            .liner-upgrade-comment-box .liner-upgrade-comment-close:hover {\n                opacity: 0.8 !important;\n            }\n            \n            .liner-mobile-comment-box {\n                display: none !important;\n                position: fixed !important;\n                top: 110%;\n                left: 0 !important;\n                right: 0 !important;\n                flex-flow: column !important;\n                width: 100% !important;\n                height: 100% !important;\n                background-color: var(--white) !important;\n                z-index: 9999999999999999999 !important;\n                -webkit-transition: top 0.2s, -webkit-transform 0.2s;\n                transition: top 0.2s, transform 0.2s;\n            }\n            \n            .liner-mobile-comment-box.liner-show-comment-box {\n                display: flex !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-header {\n                flex: 0 1 78px !important;\n                width: 100% !important;\n                height: 78px !important;\n                display: flex !important;\n                align-items: center !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-header > .liner-comment-header-label {\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 32px !important;\n                letter-spacing: 0.35px !important;\n                font-weight: bold !important;\n                margin-left: 20px !important;\n                color: rgba(34, 34, 34) !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-header > .liner-comment-save {\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                color: rgb(0, 189, 184) !important;\n                float: right !important;\n                position: absolute !important;\n                right: 15px !important;\n                align-items: center !important;\n                font-weight: 500 !important;\n                text-decoration: none !important;\n                cursor: pointer !important;\n                padding: 5px !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-highlight-container {\n                margin: 12px 20px 0 20px !important;\n                flex: 0 1 auto !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-highlight-container> .liner-comment-highlight {\n                display: flex !important;\n                margin-bottom: 16px !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-highlight-container > .liner-comment-highlight > .liner-comment-highlight-index {\n                min-width: 4px !important;\n                background-color: rgb(255, 255, 131);\n                margin-right: 16px !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-highlight-container > .liner-comment-highlight > .liner-comment-highlight-content {\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                letter-spacing: -0.32px !important;\n                line-height: 24px !important;\n                font-weight: 400 !important;\n                color: rgb(51, 51, 51) !important;\n                display: flex !important;\n                align-items: center !important;\n                font-style: normal !important;\n                word-wrap: break-word !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-highlight-container > .liner-comment-line {\n                border-bottom: solid 1px #eef1f4 !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container {\n                margin: 15px 20px 15px 32px !important;\n                display: flex !important;\n                flex: 1 1 auto !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea {\n                outline: none !important;\n                resize: none !important;\n                overflow: auto !important;\n                border: none !important;\n                width: 100% !important;\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                color: rgb(85, 85, 85) !important;\n                font-style: italic !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                padding: 0 !important;\n                background-color: var(--white) !important;\n                box-shadow: none !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                color: rgba(85, 85, 85, 0.3) !important;\n                font-style: italic !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                color: rgba(85, 85, 85, 0.3) !important;\n                font-style: italic !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::-moz-placeholder { /* Mozilla Firefox 19+ */\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                color: rgba(85, 85, 85, 0.3) !important;\n                font-style: italic !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                color: rgba(85, 85, 85, 0.3) !important;\n                font-style: italic !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::-ms-input-placeholder { /* Microsoft Edge */\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                color: rgba(85, 85, 85, 0.3) !important;\n                font-style: italic !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea::placeholder { /* Most modern browsers support this now. */\n                font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 16px !important;\n                line-height: 24px !important;\n                letter-spacing: -0.3px !important;\n                color: rgba(85, 85, 85, 0.3) !important;\n                font-style: italic !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container .liner-comment-textarea,\n            [contenteditable] {\n                caret-color: rgb(0, 189, 184) !important;\n            }\n            \n            .liner-mobile-comment-box .liner-comment-comment-container > .liner-comment-comment-icon {\n                width: 16px !important;\n                height: 16px !important;\n                margin-right: 8px !important;\n                margin-top: 1px !important;\n                background-size: contain !important;\n                background-position: center !important;\n                background-repeat: no-repeat !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAspJREFUaAXtWL+LE0EUfrNJyAkKis2BniAipLJR5MQj4o8il+QMVtddcVhY2VjYXOH9A7Y2YmNnobn1skHQzCFWcpWNhShoY6soh2Jun28WNszORm+y2eeusNvsvLdv3nzfezNvZlZ0N18gaI8QsN5pXb6jqXLddHKNzgJcQcAiSKwmRQZYw2vhvMiARZBYTYoMsIbXwnmRAYsgsZoUGWANr4XzIgMWQWI1KTLAGl4L55lmoNeTs643WEdEYYF1rEl5rPYfKBX4IaIk8DW3J4/S+7oQInK9tYERzwCKuM7G0wQ2I/CANdUNAVeJxP0kmSCw4os+NiXzsC5ztIeAawQ6AB/6T0rCEYAfQifqTfJxXeZoV8TcLfr70Td9JyGhpkuEAKBYkFKyro1m8+TPijh2LQ0SDjgw0CNBUTjwbQdbuo6jnRYJp+pUuubq9xFvJ1lQkxJNg4TTaNQ/Ux14bgx+zu0Pbhg6FnFaEkHJdEqVtRg6FHe7m/JKTM+gmIZEQGCpUX9N0+iRjo2m0Axlxt3oyVxnYrSFU+U5+HUHtwHxhE5EtYncNtXXe2WsvGo2F96TvGvapCV73rvqL/z0BBEWTZ8CxIOrrYuRHXtEQBlv9F+egt3hFlWiQ2bnvMgmiWAKheA6i/U3JSidp5B/DHV5e5ubXYSAAttuX3i7r1w9SyQemuU1N2QErLje1mmFJzKFTICuJ+dpMd+k+bhEC3q/+T0LmYJKRylY7rQvPVbj/5VACJAW+Mz3HzCPvj/nAxyhTlSh+B4EUaNismyOYIJX360ImI445afPZM0fBveEWX2cceDV91wRmBR8rggkAZ8bAknB54LANOAzJzAt+EwJpAE+MwJpgVcEYkcJpeR+qM6v0g5vVef3wpLJPqCuq8F/IPofpAD+aZPaC3zQ18aIwyYkQVvpin624RiLzaciQTe+M2wD/A+OfwNHZpAwrXjSIgAAAABJRU5ErkJggg==) !important;\n            }\n            \n            .liner-banner {\n                width: 270px !important;\n                box-shadow: 0 8px 20px 0 rgba(39, 43, 49, 0.2) !important;\n                background-color: #00bdb8 !important;\n                border-radius: 16px 16px 4px 16px;\n                position: fixed !important;\n                bottom: 40px;\n                right: 40px;\n                z-index: 9999999999999999999 !important;\n            }\n\n            .liner-banner.liner-banner-folder {\n                border-radius: 4px 16px 16px 16px;\n                left: 55px;\n                top: 100%;\n                bottom: auto;\n                right: auto;\n            }\n            \n            .liner-banner > .liner-banner-title {\n                margin-left: 24px !important;\n                display: flex !important;\n                align-items: center !important;\n                margin: 16px 20px !important; \n            }\n            \n            .liner-banner > .liner-banner-title > .liner-logo {\n                background: url(data:image/png;base64,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) !important;\n                background-size: 20px !important;\n                width: 20px !important;\n                height: 20px !important;\n                margin-right: 16px !important;\n            }\n            \n            .liner-banner > .liner-banner-contents {\n                margin: 0 20px !important;\n            }\n\n            .liner-banner.liner-banner-folder > .liner-banner-contents {\n                margin-bottom: 16px !important;\n            }\n\n            .liner-banner > .liner-banner-contents strong {\n                font-weight: bold;\n            }\n            \n            .liner-banner > .liner-banner-contents > .liner-banner-steps {\n                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 14px !important;\n                font-weight: 500 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 1.71 !important;\n                letter-spacing: -0.35px !important;\n                color: white !important;\n            }\n            \n            .liner-banner > .liner-banner-contents > .liner-banner-steps > .liner-banner-step {\n                font-weight: bold !important;\n                margin-right: 10px !important;\n            }\n\n            .liner-banner > .liner-banner-close {\n                float: right !important;\n                right: 24px !important;\n                position: relative !important;\n                margin: 20px 0 16px 0 !important;\n            }\n            \n            .liner-banner > .liner-banner-close > .liner-banner-close-btn {\n                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 12px !important;\n                font-weight: 500 !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: normal !important;\n                letter-spacing: normal !important;\n                color: white !important;\n                background-color: transparent;\n                border: none;\n                cursor: pointer;\n                margin-top: 8px;\n                margin-right: 16px;\n            }\n        \n            .liner-banner > .liner-banner-close > .liner-banner-close-btn:hover {\n                opacity: 0.9;\n            }\n\n            .liner-banner > .liner-banner-title > .liner-text {\n                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', sans-serif !important;\n                font-size: 18px !important;\n                font-weight: bold !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: normal !important;\n                letter-spacing: -0.45px !important;\n                color: white !important;\n            }\n            \n            .liner-banner > .liner-banner-button-box {\n                float: right !important;\n                right: 24px !important;\n                position: relative !important;\n                margin: 20px 0 16px 0 !important;\n            }\n            \n            .liner-banner > .liner-banner-button-box > .liner-learn-more-btn {\n                padding-left: 8px !important;\n                padding-right: 8px !important;\n                height: 32px !important;\n                border: none !important;\n                border-radius: 30px !important;\n                background-color: #ffffff !important;\n                font-family: 'Montserrat', 'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC',  sans-serif !important;\n                font-size: 12px !important;\n                font-weight: bold !important;\n                letter-spacing: -0.3px !important;\n                color: #00bdb8 !important;\n                cursor: pointer !important;\n                text-decoration: none !important;\n                display: flex !important;\n                justify-content: center !important;\n                align-items: center !important;\n                line-height: 1.1em !important;\n            }\n\n            .liner-banner > .liner-banner-button-box > .liner-learn-more-btn:hover {\n                opacity: 0.9;\n            }\n\n            .liner-upload-pdf-btn {\n                position: fixed;\n                right: 17px;\n                top: 61px;\n                width: 40px;\n                height: 40px;\n                background-image: url(data:image/png;base64,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);\n                background-size: contain;\n                border-radius: 20px;\n                cursor: pointer;\n                -webkit-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);\n                -moz-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);\n                box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);\n                z-index: 9999999999999999999 !important;\n            }\n\n            .liner-upload-pdf-btn.disabled {\n                opacity: 0.5;\n                cursor: auto;\n                -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n                -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n                cursor: progress;\n            }\n\n            .liner-upload-pdf-tooltip {\n                position: fixed;\n                display: none;\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;\n                right: 10px;\n                top: 105px;\n                padding: 4px;\n                border-radius: 3px;\n                background-color: #323639;\n                font-size: 10px;\n                font-weight: normal;\n                font-stretch: normal;\n                font-style: normal;\n                line-height: normal;\n                letter-spacing: normal;\n                text-align: center;\n                color: var(--white);\n                z-index: 9999999999999999999 !important;\n            }\n\n            .liner-upload-pdf-banner {\n                display: none;\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;\n                position: fixed;\n                top: 117px;\n                right: 16px;\n                background-color: var(--primary-500);\n                color: var(--white);\n                -webkit-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);\n                -moz-box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);\n                box-shadow: 0 2px 8px 0 rgba(39, 43, 49, 0.3);\n                padding: 14px 12px;\n                font-size: 16px;\n                font-weight: bold;\n                font-stretch: normal;\n                font-style: normal;\n                line-height: normal;\n                letter-spacing: -0.4px;\n                border-radius: 16px 4px 16px 16px;\n                z-index: 9999999999999999999 !important;\n            }\n\n            .liner-upload-pdf-progress-bar {\n                background-color: var(--primary-500) !important;\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 0%;\n                height: 4px;\n                z-index: 9999999999999999999 !important;\n            }\n\n            .liner-picked-search-result-bar {\n                position: absolute !important;\n                left: -20px !important;\n                background-color: #7fdedb !important;\n                width: 4px !important;\n            }\n\n            .liner-picked-search-result-link {\n                display: none !important;\n                /* display: inline-block !important; */\n                color: #00bdb8 !important;\n                margin-top: 4px !important;\n                text-decoration: none !important;       \n            }\n\n            .liner-picked-search-result-link.liner-picked-search-result-link-scholar {\n                margin-top: 8px !important;\n            }\n\n            .liner-picked-search-result-link:hover {\n                color: #00a7a0 !important;\n            }\n\n            .liner-picked-search-result-link .liner-picked-search-result-arrow {\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAGAAAAADV9pCbAAAAt0lEQVQ4Ec2UzQ3CMAxGHdQ1OgwXBqm6Bx0E2KNIwDAM4uZrRKLI+bE5IHxp6vq9xI0Sov+Ix7rQc70Ss9MsaIhFAInPxD7zuvshz+Qc3qpxiF8cjXHMPHnBpbeCBB9PmOlmEeS9odcw4xQlEAaxaCGHQRgEEjYIyrBSUIcVgjbcEaStQqEx2jN3/nwd7oBYZBlWgGVYCUrYAOawEUzwFyDgsM849ExvJPZonKRPiXwaryEp+FVmA0eInXoUq2t+AAAAAElFTkSuQmCC) !important;\n                width: 5px !important;\n                height: 8px !important;\n                display: inline-block !important;\n                background-size: contain !important;\n                vertical-align: text-top !important;\n                margin-left: 4px !important;\n                margin-top: 4px !important;\n            }\n\n            .liner-picked-search-result-description {\n                display: none;\n                z-index: 9999999999999999999 !important;\n                width: 247px !important;\n                padding: 16px 20px !important;\n                position: absolute !important;\n                left: initial !important;\n                border-radius: 8px !important;\n                box-shadow: 0 10px 20px 0 rgba(39, 43, 49, 0.15) !important;\n                border: solid 1px #eef1f4 !important;\n                background-color: #ffffff !important;\n            }\n\n            .liner-picked-search-result-description .liner-picked-search-result-description-title {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;\n                font-size: 14px !important;\n                font-weight: bold !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: normal !important;\n                color: #969aa2 !important;\n                margin: 0 !important;\n                margin-bottom: 8px !important;\n            }\n\n            .liner-picked-search-result-description .liner-picked-search-result-description-content {\n                font-family: 'Montserrat', 'Noto Sans JP', 'Noto Sans KR', sans-serif;\n                font-size: 14px !important;\n                font-weight: normal !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: 1.43 !important;\n                color: #52565d !important;\n                margin: 0 !important;\n            }\n\n            .liner-picked-search-result-information {\n                display: inline-block !important;\n                margin-top: 4px !important;\n                font-size: 12px !important;\n                font-weight: normal !important;\n                font-stretch: normal !important;\n                font-style: normal !important;\n                line-height: normal !important;\n                color: #969aa2 !important;\n                cursor: pointer !important;\n            }\n\n            .liner-picked-search-result-information.liner-picked-search-result-information-scholar {\n                margin-top: 6px !important;\n                position: relative !important;\n            }\n\n            .liner-picked-search-result-information .liner-picked-search-result-information-icon {\n                position: relative !important;\n                top: 3px !important;\n                display: inline-block !important;\n                margin-right: 8px !important;\n                width: 14px !important;\n                height: 14px !important;\n                background-size: contain !important;\n                background-repeat: no-repeat !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAADUGqULAAAFMklEQVRYCdWZT4hbRRzHfzNJmhxEdqEKDbKioLCCevLSrYdF60VZ0UMU2S24GrcetIJgvajVnhQ8LB7sGl2hu4jmYOniH7DKHmx78aSCBQWlq0TwDw22YLKb98bfd978Xt57m6xJttnXPkjm//w+mZk385tvFG3jWXh/+Xa/RVNE/m1EqmjIFMmoou1SmZoiVSMy/NE/6CytzD0+/f2g5lS/DQFnWv6sT+pBMuamvtor9Ysmc1Jl9WK/0D2DLhyvjnnN5lGGm2Y43Rfg5sr8O9VyJp9/ae5AaW1z8eac/wWtVqu7/vqn+Rr55jluno93oS6Qok+Z+pQhWsuYXG1kRNcuXswrz/t3j6c2imxgzCfaT4bu52UwGm2vFDWMUvO7r82/XCqV1qNlyfiWoIuL1esarcbH3GhftKFS6oTW+q1bby5+PTk52YqWdYuvrq5mf/y5drfv+88YYx5K1DtdyBYenp0t/ZnID5NdQSuVD+7YIG+Fp/pGqc2AZzIZeuGp2ZmzkjdI+M7i0l7PozcYeCJsr9T5HGWmyuXHvgvzIpGOoBbSeGd4qq5BXQb0eJqeP/jkzHyk7bajx95dOmQMvcnAmaAzdSmnMhOdYDeB2un2mt+EI6morkmVDpZnTm2brEMHC+8t3+f5/ke8hkdsMY9sIZO/K7kMYm8vXhy7JmW6GTJHu/YOCxJgc09MfwEb/FLWLSjbBgNYbNp9ZaOJv+vrRzltXxw73USlcvnRc9E63eKyOyifDqCO0XS8l7cZdWGDR/YR3zefuWWwz+40RC+iHE84otgnSfnPBtlYl7wm+5hut4Ud5tNpDz68nR12xqTLLUOMLGxKJWXMIcvkMkJQbOa8sAvIx9vd74sjIymGbD9udKN5W8VhE7ZRByz2gHENLCiORXfi2GxsQa58x4OYbT4FLRtTWFCc3RLnX3RikH0SazL5qzrlJesk07ANBpevHVsAah0MKeETJ9m4lzReHNLqdfaYfscHcZvXS+NEHZx6kiVsKtjcW98GBerC+C03XN/rsSidXe4Qx+25n377Q3yDnMreqTdMi/3J4FFkPkkbEiRgAIvDIjBq3hLGJYN0ZiinT9h/HxFep19KdTDyhg+PnJ00PMb/NYgM9v12ZekV3rCPoDUbOvJ0eebVwXqyRGvttqqo7fXB5cCfbBemG4uygJFvBu6Ow1xwetPFa1uPsTCj3UelGJ65xNMOkyzsweGWGDy4Pkg87TDGwow6uNI6UL7jpA0o9nHfkjgYeerbI8rzPiaFaYdxFh5R9lJCf5O3lnvTBhT79uYqCQgYmZw+KWlD6gEcX5JOK7QM9nodEEBl0VaxYAUjyDKjuNKmBSh2AwanATAbGO32BJlFKuHeLfG0wiiDsFlQaEEMxcuCXy0WB3DvTgsStsHg7PuOLfBH3fQvCxzEAYnvdBizzfqUiGnhyQTBiqGaAONfNAFxYKchA0EiUE/YY2o4JosRgkJVU6TnBQ4KxrHK0n5JDzuELdgUOxDPokpf7Gy3d/N64yuuHIhiToDo9W4vRvoNK5UPxzdo/WyolhCd3j1SuCeq8IUjis5RAFWNncnz1hjLLOhgmCOLvmOQkHSYIQoJlhgoMqD5QFVj1/cS0viV7FZ/Pow1a9ck990eSRbJ2HZSdwJGbOqRIc9VITsK7FUh5AqsiF/dpHF7W8SlkO9bIo2jbb3uF0Uah7MDP4LX0aj0ixBb0GWRxqOdXvF/NkRhEb/i/75JAiPtVJapQBvo/ocYfF5WO1Y6Sd6d+u2U9x+vMIlu8mXhagAAAABJRU5ErkJggg==) !important;\n            }\n\n            .liner-pdf-highlight-badge {\n                cursor: pointer !important;\n                background-color: #ffffff !important;\n                border: 1px solid #ebebeb !important;\n                border-radius: 2px !important;\n                padding: 0 11px 0 20px !important;\n                display: inline-block !important;\n                height: 14px !important;\n                line-height: 16px !important;\n                text-align: center !important;\n                font-weight: normal !important;\n                color: #4d5156 !important;\n                font-size: 10px !important;\n                letter-spacing: 0.75px !important;\n                position: relative !important;\n                top: -1px !important;\n                margin-left: 5px !important;\n            }\n\n            .liner-pdf-highlight-badge.liner-pdf-highlight-badge-scholoar {\n                position: absolute !important;\n                top: 3px !important;\n            }\n\n            .liner-pdf-highlight-badge .liner-pdf-highlight-badge-icon {\n                display: inline-block !important;\n                background-image: url(data:image/png;base64,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) !important;\n                background-repeat: no-repeat !important;\n                background-size: contain !important;\n                width: 14px !important;\n                height: 14px !important;\n                position: absolute !important;\n                left: 0 !important;\n            }\n\n            .liner-pdf-highlight-badge .liner-pdf-highlight-badge-arrow {\n                display: inline-block !important;\n                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAVCAYAAACZm7S3AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAFQAAAAAtZlQqAAAA8klEQVQ4EWNgGBTALyiiwS8ofM7///8ZiXEQC0wRSOP////qQXz/4AgGoAGpjIyM/2Hy2GgmuOD/f7IwNlBjsj8RLoBr3rhuZQrQrfPgBjAwJBEyAMVvIL+CNQA1wgwBGQg2GIsXUDSDNJBiAIZmUgzAqplYA+ABBtKADEDRxM4SksbIyHAHJg6MtyT/kKg4GB+nZpDff/5ZM+v/fwYVmGJw4K1ZtgiJD2MiaGIDDcPPxGoEWYWimRSNKJpJ1QjXTI5GkGZwaINzDyPTY5AACIBDFZTWsSRJiAoIyQzj3Lx+5YCGli4wWv/fw5WWYWoHngYAORedhCuO5fQAAAAASUVORK5CYII=) !important;\n                background-repeat: no-repeat !important;\n                background-size: 5px 7px !important;\n                background-position: center;\n                width: 11px !important;\n                height: 14px !important;\n                position: absolute !important;\n                right: 0 !important;\n            }\n\n            #snippet-pdf-button, #snippet_popover_container, #snippet_screenshot_edit, #snippet_screenshot, #snippet_sidebar_container, .snippet-img-button, \n            #diigo-video-capture, #diigo-video-capture-wrapper, #diigolet-notice, #diigolet-dlg-sticky, #diigolet-csm, #diigo-chrome-installed, #diigo-pdf, #diigolet-chrome-css {\n                display: none !important;\n            }\n        ", (document.head || document.documentElement).appendChild(e)
    })
}
if ((window.injectLinerLongPressEventJS || window.injectLinerCoreScript || window.top === window) && !window.isLongPressEventJSInjected) {
    window.isLongPressEventJSInjected = !0;
    window.linerJQuery;
    ! function(e, t) {
        "use strict";
        var n = null,
            i = "ontouchstart" in e || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            o = i ? "touchstart" : "mousedown",
            r = i ? "touchend" : "mouseup",
            a = i ? "touchmove" : "mousemove",
            l = 0,
            s = 0,
            c = 10,
            p = 10;

        function d(o) {
            g(o);
            var a = o.target,
                l = parseInt(a.getAttribute("data-long-press-delay") || "800", 10);
            n = function(t, n) {
                if (!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame && e.mozCancelRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame)) return e.setTimeout(t, n);
                var i = (new Date).getTime(),
                    o = {},
                    r = function() {
                        (new Date).getTime() - i >= n ? t.call() : o.value = requestAnimFrame(r)
                    };
                return o.value = requestAnimFrame(r), o
            }(function(n) {
                g();
                const o = i ? n.touches[0].clientX : n.clientX,
                    a = i ? n.touches[0].clientY : n.clientY;
                1 != e.didMouseUp && this.dispatchEvent(new CustomEvent("long-press", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        clientX: o,
                        clientY: a
                    }
                })) && t.addEventListener(r, function e(n) {
                    t.removeEventListener(r, e, !0),
                        function(e) {
                            try {
                                e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation()
                            } catch (e) {}
                        }(n)
                }, !0)
            }.bind(a, o), l)
        }

        function g(t) {
            var i;
            (i = n) && (e.cancelAnimationFrame ? e.cancelAnimationFrame(i.value) : e.webkitCancelAnimationFrame ? e.webkitCancelAnimationFrame(i.value) : e.webkitCancelRequestAnimationFrame ? e.webkitCancelRequestAnimationFrame(i.value) : e.mozCancelRequestAnimationFrame ? e.mozCancelRequestAnimationFrame(i.value) : e.oCancelRequestAnimationFrame ? e.oCancelRequestAnimationFrame(i.value) : e.msCancelRequestAnimationFrame ? e.msCancelRequestAnimationFrame(i.value) : clearTimeout(i)), n = null
        }
        "function" != typeof e.CustomEvent && (e.CustomEvent = function(e, n) {
            n = n || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = t.createEvent("CustomEvent");
            return i.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), i
        }, e.CustomEvent.prototype = e.Event.prototype), e.requestAnimFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            e.setTimeout(t, 1e3 / 60)
        }, t.addEventListener(r, g, !0), t.addEventListener(a, function(e) {
            const t = i ? e.touches[0].clientX : e.clientX,
                n = i ? e.touches[0].clientY : e.clientY;
            var o = Math.abs(l - t),
                r = Math.abs(s - n);
            (o >= c || r >= p) && g()
        }, !0), t.addEventListener("wheel", g, !0), t.addEventListener("scroll", g, !0), t.addEventListener(o, function(e) {
            const t = i ? e.touches[0].clientX : e.clientX,
                n = i ? e.touches[0].clientY : e.clientY;
            l = t, s = n, d(e)
        }, !0)
    }(window, document)
}
if ((window.injectLinerLocalizeJS || window.injectLinerCoreScript || window.top === window) && !window.isLocalizeJSInjected) {
    window.isLocalizeJSInjected = !0;
    window.linerJQuery;

    function getLanguage() {
        var e = "en";
        try {
            e = navigator.language.split("-")[0].toLowerCase().trim();
            if (-1 != navigator.language.indexOf("zh") && (e = "zhs", navigator.language.split("-").length > 1)) {
                var t = navigator.language.split("-")[1].toLowerCase(); - 1 == t.indexOf("tw") && -1 == t.indexOf("hk") || (e = "zht")
            }
            e && "" != e || (e = "en")
        } catch (e) {}
        return e
    }

    function localize(e) {
        try {
            var t = getLanguage();
            if (localizable[t][e]) return localizable[t][e].replace(/\n/gi, "<br />").trim()
        } catch (e) {}
        return e
    }
    var localizable = {
        en: {
            "Manage Highlights": "Manage Highlights",
            "Share Highlighted Page": "Share Highlighted Page",
            Share: "Share",
            Facebook: "Facebook",
            Twitter: "Twitter",
            LinkedIn: "LinkedIn",
            Messenger: "Messenger",
            LINE: "LINE",
            KakaoTalk: "KakaoTalk",
            Mail: "Mail",
            Copy: "Copy",
            Copied: "Copied",
            "Copy Link": "Copy Link",
            "Delete All Highlights": "Delete All Highlights",
            "Link copied to clipboard": "Link copied to clipboard",
            Delete: "Delete",
            Cancel: "Cancel",
            "Delete all highlights?": "Delete all highlights?",
            LINER: "LINER",
            "LINER for Safari": "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it.": "Drag any sentence and click\nLINER icon to highlight it.",
            "Sign Up": "Sign Up",
            "Sign up to save highlights": "Sign up to save highlights",
            "Sign up to save comments": "Sign up to save comments",
            "Log In": "Log In",
            "Log in to save highlights": "Log in to save highlights",
            "Log in to save comments": "Log in to save comments",
            "LINER is blocked on this website": "LINER is blocked on this website",
            "No network connection. Changes were not saved.": "No network connection. Changes were not saved.",
            "Write a comment": "Write a comment",
            Upgrade: "Upgrade",
            "You've reached<br>the limit - comment": "You've reached<br>the limit",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.": "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.",
            UPGRADE: "UPGRADE",
            "You've reached<br>the limit - highlight": "You've reached<br>the limit",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.": "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.",
            "Step Requirements": "Step Requirements",
            "Step 3.": "Step 3.",
            "Create a folder": "Create a folder",
            Comment: "Comment",
            Done: "Done",
            "Welcome Package": "Welcome Package",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s).": "Your <strong>72% Discount</strong> offer<br>ends in N day(s).",
            "Redeem Offer": "Redeem Offer",
            Close: "Close",
            "Start highlighting on this PDF ????": "Start highlighting on this PDF ????",
            "Highlight on this PDF": "Highlight on this PDF",
            "Upgrade to LINER Premium to unlock this feature.": "Upgrade to LINER Premium to unlock this feature.",
            "Basic Plan: 3MB file upload limit": "Basic Plan: 3MB file upload limit",
            "Can't open LINER pop-up on the PDF file.": "Can't open LINER pop-up on the PDF file.",
            "My Tags": "My Tags",
            Suggestions: "Suggestions",
            "Create #tagname": "Create #tagname",
            "Search tags": "Search tags",
            "+ Add tags": "+ Add tags",
            "n tag": "n tag",
            "n tags": "n tags",
            "Already tagged": "Already tagged",
            "Relevant Pages": "Relevant Pages",
            "View in LINER": "View in LINER",
            "Picked by LINER": "Picked by LINER",
            "Advanced Google Search by LINER": "Advanced Google Search by LINER",
            "Based on your recent highlights, this page is likely to have what you need.": "Based on your recent highlights, this page is likely to have what you need.",
            "Premium Feature": "Premium Feature",
            "Get recommendations based on your last highlight.": "Get recommendations based on your last highlight.",
            Highlight: "Highlight"
        },
        ja: {
            "Manage Highlights": "????????????????????????",
            "Share Highlighted Page": "??????????????????????????????????????????",
            Share: "??????",
            Facebook: "?????????????????????",
            Twitter: "???????????????",
            LinkedIn: "??????????????????",
            Messenger: "?????????????????????",
            LINE: "LINE",
            KakaoTalk: "??????????????????",
            Mail: "?????????",
            Copy: "?????????",
            Copied: "?????????????????????",
            "Copy Link": "?????????????????????",
            "Delete All Highlights": "????????????????????????????????????",
            "Link copied to clipboard": "????????????????????????????????????",
            Delete: "??????",
            Cancel: "??????",
            "Delete all highlights?": "???????????????????????????????????????????????????",
            LINER: "LINER",
            "LINER for Safari": "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it.": "?????????????????????????????????LINER????????????\n??????????????????????????????????????????",
            "Sign Up": "??????????????????",
            "Sign up to save highlights": "???????????????????????????????????????????????????",
            "Sign up to save comments": "???????????????????????????????????????????????????",
            "Log In": "????????????",
            "Log in to save highlights": "??????????????????????????????????????????????????????????????????",
            "Log in to save comments": "???????????????????????????????????????????????????????????????",
            "LINER is blocked on this website": "LINER???????????????????????????????????????????????????",
            "No network connection. Changes were not saved.": "?????????????????????????????????????????????????????????????????????????????????????????????",
            "Write a comment": "?????????????????????",
            Upgrade: "?????????????????????",
            "You've reached<br>the limit - comment": "???????????????????????????<br>???????????????",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.": "????????????????????????????????????????????????3???????????????????????????????????????????????????<br>???????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            UPGRADE: "?????????????????????",
            "You've reached<br>the limit - highlight": "??????????????????????????????<br>???????????????",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.": "????????????????????????????????????????????????<span class='liner-upgrade-highlight-limit'>7</span>???????????????????????????????????????????????????<br>???????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Step Requirements": "??????????????????",
            "Step 3.": "????????????3???",
            "Create a folder": "??????????????????????????????",
            Comment: "????????????",
            Done: "??????",
            "Welcome Package": "??????????????????????????????",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s).": "????????????<strong>72?????????</strong>?????????<br>N????????????????????????",
            "Redeem Offer": "??????????????????",
            Close: "?????????",
            "Start highlighting on this PDF ????": "??????PDF????????????????????????????????????????????? ????",
            "Highlight on this PDF": "??????PDF????????????????????????",
            "Upgrade to LINER Premium to unlock this feature.": "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Basic Plan: 3MB file upload limit": "Basic Plan???3MB???????????????????????????????????????",
            "Can't open LINER pop-up on the PDF file.": "PDF???????????????????????????????????????????????????????????????????????????",
            "My Tags": "????????????",
            Suggestions: "??????",
            "Create #tagname": "#tagname ?????????",
            "Search tags": "???????????????",
            "+ Add tags": "+ ???????????????",
            "n tag": "n ??????",
            "n tags": "n ??????",
            "Already tagged": "??????????????????????????????",
            "Relevant Pages": "???????????????",
            "View in LINER": "?????????????????????",
            "Picked by LINER": "?????????????????????",
            "Advanced Google Search by LINER": "???????????????Google???????????????????????????",
            "Based on your recent highlights, this page is likely to have what you need.": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
            "Premium Feature": "?????????????????????",
            "Get recommendations based on your last highlight.": "????????????????????????????????????????????????????????????????????????????????????",
            Highlight: "?????????????????????"
        },
        ko: {
            "Manage Highlights": "??????????????? ??????",
            "Share Highlighted Page": "?????????????????? ????????? ????????????",
            Share: "??????",
            Facebook: "????????????",
            Twitter: "?????????",
            LinkedIn: "????????????",
            Messenger: "???????????? ?????????",
            LINE: "??????",
            KakaoTalk: "????????????",
            Mail: "??????",
            Copy: "??????",
            Copied: "?????????",
            "Copy Link": "?????? ??????",
            "Delete All Highlights": "?????? ??????????????? ??????",
            "Link copied to clipboard": "????????? ??????????????? ??????????????????",
            Delete: "??????",
            Cancel: "??????",
            "Delete all highlights?": "?????? ?????????????????? ???????????????",
            LINER: "LINER",
            "LINER for Safari": "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it.": "????????? ???????????? ???????????????\n????????? ???????????? ?????? ????????????????????????.",
            "Sign Up": "????????????",
            "Sign up to save highlights": "?????????????????? ??????????????? ?????????????????????",
            "Sign up to save comments": "???????????? ??????????????? ?????????????????????",
            "Log In": "?????????",
            "Log in to save highlights": "?????????????????? ??????????????? ??????????????????",
            "Log in to save comments": "???????????? ??????????????? ??????????????????",
            "LINER is blocked on this website": "???????????? ??? ?????????????????? ?????????????????????",
            "No network connection. Changes were not saved.": "??????????????? ?????????????????? ?????? ??????????????? ???????????? ???????????????.",
            "Write a comment": "???????????? ???????????????",
            Upgrade: "???????????????",
            "You've reached<br>the limit - comment": "????????? ?????? ?????????<br>?????????????????????",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.": "????????? ????????? ?????? ??? ????????? ?????????<br>3?????? ???????????????.<br>????????? ?????????????????? ?????????????????????<br>???????????? ??????????????? ???????????????.",
            UPGRADE: "???????????????",
            "You've reached<br>the limit - highlight": "??????????????? ?????? ?????????<br>?????????????????????",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.": "????????? ????????? ?????? ??? ??????????????? ????????? <span class='liner-upgrade-highlight-limit'>7</span>?????? ???????????????.<br>????????? ?????????????????? ????????????????????? ?????????????????? ??????????????? ???????????????.",
            "Step Requirements": "?????? ?????? ??????",
            "Step 3.": "3??????.",
            "Create a folder": "?????? ?????????",
            Comment: "?????????",
            Done: "??????",
            "Welcome Package": "?????? ?????????",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s).": "???????????? <strong>72% ??????</strong> ?????????<br>N??? ?????? ???????????????.",
            "Redeem Offer": "?????? ??????",
            Close: "??????",
            "Start highlighting on this PDF ????": "??? PDF??? ?????????????????? ??????????????? ????",
            "Highlight on this PDF": "??? PDF??? ?????????????????????",
            "Upgrade to LINER Premium to unlock this feature.": "???????????? ?????????????????? ????????? ???????????????.",
            "Basic Plan: 3MB file upload limit": "????????? ??????: 3MB ?????? PDF ?????? ????????? ??????",
            "Can't open LINER pop-up on the PDF file.": "PDF ??????????????? ????????? ????????? ??? ??? ????????????.",
            "My Tags": "??? ??????",
            Suggestions: "??????",
            "Create #tagname": "#tagname ??????",
            "Search tags": "?????? ??????",
            "+ Add tags": "+ ?????? ??????",
            "n tag": "n ??????",
            "n tags": "n ??????",
            "Already tagged": "?????? ?????????????????????",
            "Relevant Pages": "?????? ?????????",
            "View in LINER": "??????????????? ??????",
            "Picked by LINER": "???????????? ??????",
            "Advanced Google Search by LINER": "???????????? ?????? ???????????? ?????? ??????",
            "Based on your recent highlights, this page is likely to have what you need.": "?????? ??????????????? ????????? ????????? ??? ???????????? ????????? ????????? ????????? ?????? ????????? ????????????.",
            "Premium Feature": "???????????? ??????",
            "Get recommendations based on your last highlight.": "?????????????????? ???????????? ??? ?????? ???????????? ???????????????.",
            Highlight: "?????????????????????"
        },
        zhs: {
            "Manage Highlights": "??????Highlights",
            "Share Highlighted Page": "???????????????????????????",
            Share: "??????",
            Facebook: "?????????",
            Twitter: "??????",
            LinkedIn: "??????",
            Messenger: "Messenger",
            LINE: "LINE",
            KakaoTalk: "KakaoTalk",
            Mail: "??????",
            Copy: "??????",
            Copied: "?????????",
            "Copy Link": "????????????",
            "Delete All Highlights": "??????????????????",
            "Link copied to clipboard": "???????????????????????????",
            Delete: "??????",
            Cancel: "??????",
            "Delete all highlights?": "?????????????????????",
            LINER: "LINER",
            "LINER for Safari": "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it.": "?????????????????????????????????\nLINER????????????????????????",
            "Sign Up": "??????",
            "Sign up to save highlights": "???????????????Highlight",
            "Sign up to save comments": "?????????????????????",
            "Log In": "??????",
            "Log in to save highlights": "?????????????????????",
            "Log in to save comments": "?????????????????????",
            "LINER is blocked on this website": "LINER?????????????????????",
            "No network connection. Changes were not saved.": "??????????????????????????????????????????????????????",
            "Write a comment": "?????????",
            Upgrade: "??????",
            "You've reached<br>the limit - comment": "????????????????????????",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.": "????????????????????????????????????3????????????<br>?????????LINER Premium????????????????????????????????????",
            UPGRADE: "??????",
            "You've reached<br>the limit - highlight": "????????????????????????",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.": "????????????????????????????????????<span class='liner-upgrade-highlight-limit'>7</span>????????????<br>?????????LINER Premium???????????????????????????",
            "Step Requirements": "????????????",
            "Step 3.": "??????3???",
            "Create a folder": "???????????????",
            Comment: "??????",
            Done: "??????",
            "Welcome Package": "????????????",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s).": "??????<strong>72?????????</strong>?????????<br>???N???????????????",
            "Redeem Offer": "????????????",
            Close: "??????",
            "Start highlighting on this PDF ????": "????????????PDF??????????????? ????",
            "Highlight on this PDF": "??????PDF???????????????",
            "Upgrade to LINER Premium to unlock this feature.": "?????????LINER Premium????????????????????????",
            "Basic Plan: 3MB file upload limit": "Basic Plan????????????????????????3MB",
            "Can't open LINER pop-up on the PDF file.": "????????????PDF????????????LINER???????????????",
            "My Tags": "????????????",
            Suggestions: "??????",
            "Create #tagname": "?????? #tagname",
            "Search tags": "????????????",
            "+ Add tags": "+ ????????????",
            "n tag": "n ??????",
            "n tags": "n ??????",
            "Already tagged": "?????????????????????",
            "Relevant Pages": "????????????",
            "View in LINER": "???LINER?????????",
            "Picked by LINER": "LINER??????",
            "Advanced Google Search by LINER": "LINER????????????",
            "Based on your recent highlights, this page is likely to have what you need.": "????????????????????????Highlight?????????????????????????????????????????????",
            "Premium Feature": "????????????",
            "Get recommendations based on your last highlight.": "??????????????????Highlight????????????????????????????????????",
            Highlight: "Highlight"
        },
        zht: {
            "Manage Highlights": "??????Highlights",
            "Share Highlighted Page": "???????????????????????????",
            Share: "??????",
            Facebook: "?????????",
            Twitter: "??????",
            LinkedIn: "??????",
            Messenger: "Messenger",
            LINE: "LINE",
            KakaoTalk: "KakaoTalk",
            Mail: "??????",
            Copy: "??????",
            Copied: "?????????",
            "Copy Link": "????????????",
            "Delete All Highlights": "??????????????????",
            "Link copied to clipboard": "???????????????????????????",
            Delete: "??????",
            Cancel: "??????",
            "Delete all highlights?": "?????????????????????",
            LINER: "LINER",
            "LINER for Safari": "LINER for Safari",
            "Drag any sentence and click\nLINER icon to highlight it.": "?????????????????????????????????\nLINER????????????????????????",
            "Sign Up": "??????",
            "Sign up to save highlights": "???????????????Highlight",
            "Sign up to save comments": "?????????????????????",
            "Log In": "??????",
            "Log in to save highlights": "?????????????????????",
            "Log in to save comments": "?????????????????????",
            "LINER is blocked on this website": "LINER?????????????????????",
            "No network connection. Changes were not saved.": "??????????????????????????????????????????????????????",
            "Write a comment": "?????????",
            Upgrade: "??????",
            "You've reached<br>the limit - comment": "????????????????????????",
            "Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.": "????????????????????????????????????3????????????<br>?????????LINER Premium????????????????????????????????????",
            UPGRADE: "??????",
            "You've reached<br>the limit - highlight": "????????????????????????",
            "Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.": "????????????????????????????????????<span class='liner-upgrade-highlight-limit'>7</span>????????????<br>?????????LINER Premium???????????????????????????",
            "Step Requirements": "????????????",
            "Step 3.": "??????3???",
            "Create a folder": "???????????????",
            Comment: "??????",
            Done: "??????",
            "Welcome Package": "????????????",
            "Your <strong>72% Discount</strong> offer<br>ends in N day(s).": "??????<strong>72?????????</strong>?????????<br>???N???????????????",
            "Redeem Offer": "????????????",
            Close: "??????",
            "Start highlighting on this PDF ????": "????????????PDF??????????????? ????",
            "Highlight on this PDF": "??????PDF???????????????",
            "Upgrade to LINER Premium to unlock this feature.": "?????????LINER Premium????????????????????????",
            "Basic Plan: 3MB file upload limit": "Basic Plan????????????????????????3MB",
            "Can't open LINER pop-up on the PDF file.": "????????????PDF????????????LINER???????????????",
            "My Tags": "????????????",
            Suggestions: "??????",
            "Create #tagname": "?????? #tagname",
            "Search tags": "????????????",
            "+ Add tags": "+ ????????????",
            "n tag": "n ????????????",
            "n tags": "n ????????????",
            "Already tagged": "?????????????????????",
            "Relevant Pages": "????????????",
            "View in LINER": "???LINER?????????",
            "Picked by LINER": "LINER??????",
            "Advanced Google Search by LINER": "LINER????????????",
            "Based on your recent highlights, this page is likely to have what you need.": "????????????????????????Highlight?????????????????????????????????????????????",
            "Premium Feature": "????????????",
            "Get recommendations based on your last highlight.": "??????????????????Highlight????????????????????????????????????",
            Highlight: "Highlight"
        }
    }
}
if ((window.injectLinerEtcJS || window.injectLinerCoreScript || window.top === window) && !window.isEtcJSInjected) {
    window.isEtcJSInjected = !0;
    const e = window.linerJQuery;
    var onboardingFolderBannerInterval, folderLength = 0;

    function isLinerPSPDFKit() {
        return (-1 != window.location.host.indexOf("getliner.com") || "localhost:3000" == window.location.host) && e("#pdfViewer .PSPDFKit-Container").length > 0
    }

    function isGoogleScholarSERP() {
        return -1 !== window.location.host.indexOf("scholar.google.") && "/scholar" === window.location.pathname
    }

    function isGoogleSERP() {
        return -1 !== window.location.host.indexOf("google.") && "/search" === window.location.pathname
    }

    function showPickedByLINERInSERP() {
        if (!1 === (-1 !== navigator.language.indexOf("ar"))) return !0;
        const e = ["ae", "jo", "com.my", "my", "com.tn", "tn", "com.eg", "com.qa", "qa", "com.ps", "ps", "com.sa", "iq", "com.iq", "com.kw", "com.om", "com.bh", "com.lb", "dz", "com.ly", "co.ma", "dj", "rw", "td", "ml", "sn", "cm"];
        for (let t = 0; t < e.length; t++)
            if (-1 !== window.location.host.indexOf(`google.${e[t]}`)) return !1;
        return !0
    }

    function isWebPDFFile() {
        if ("file:" == window.location.protocol) return !1;
        try {
            if (e("body").children().length > 0) {
                if (window.PDFViewerApplication) return !0;
                if ("embed" == e("body").children()[0].tagName.toLowerCase() && "application/pdf" == e("body").children()[0].type.toLowerCase() && "100%" == e("body").children()[0].width && "100%" == e("body").children()[0].height) return !0
            }
        } catch (e) {}
        return !1
    }

    function enableSelection() {
        try {
            if (-1 == window.location.host.indexOf("atlassian.net") || -1 != window.location.host.indexOf("atlassian.net") && "www" == window.location.host.split(".")[0]) {
                evaluateScript("if (document.oncontextmenu != null && !document.oncontextmenu()) {\n                    document.onmousedown = function () {\n                        javascript:void(document.oncontextmenu=null);\n                        javascript:void(document.onmousedown=null);\n                        javascript:void(document.onselectstart=null);\n                        javascript:void(document.body.onselectstart=null);\n                    }\n                }"), e("body *").css("-webkit-user-select", "auto")
            }
        } catch (e) {}
    }

    function evaluateScript(e) {
        try {
            var t = document.createElement("script");
            t.textContent = e, (document.head || document.documentElement).appendChild(t), t.remove()
        } catch (e) {}
    }

    function initOngoingOnboarding() {
        if (evaluateScript("\n            function linerBrazeChangeUser() {\n                if (window.appboy && window.userId) {\n                    window.appboy.changeUser(window.userId);\n                    return;\n                }    \n                setTimeout(function() {\n                    linerBrazeChangeUser();\n                }, 50);\n            }\n\n            function linerOnboardingEvent(name) {\n                if (window.appboy) {\n                    window.appboy.logCustomEvent(name);\n                    return;\n                }          \n                setTimeout(function() {\n                    linerOnboardingEvent(name);\n                }, 50);      \n            }\n\n            linerBrazeChangeUser();\n        "), isLINERGuidePage()) {
            evaluateScript("linerOnboardingEvent('web_init_guide_welcome');");
            try {
                window.safari && !window.safari.id && e.get("https://getliner.com/auth/cookie", function(e) {
                    messageToNative("LOGIN", {
                        cookie: e.cookie
                    })
                }).fail(function() {}), getUsersMe(function(t) {
                    (1 == t.premium || getFinishedOngoingOnboardings().length >= 3) && e(".liner-banner").remove()
                })
            } catch (e) {}
        } else if (isLINERDashboard()) {
            setTimeout(function() {
                evaluateScript("linerOnboardingEvent('web_init_guide_folder');")
            }, 400);
            var t = setInterval(function() {
                0 != (folderLength = getFolderCount()) && (clearInterval(t), getUsersMe(function(e) {
                    try {
                        0 == e.premium && (folderLength > 1 ? handleFolderCreation() : addOnboardingFolderGuide())
                    } catch (e) {}
                }))
            }, 50)
        }
    }

    function addOnboardingFolderGuide() {
        -1 == getFinishedOngoingOnboardings().indexOf("web_finish_guide_folder") && (showOnboardingFolderBanner(), e("#add-folder").keypress(function(e) {
            0 != folderLength && 13 == e.which && setTimeout(function() {
                isFolderCreated() && (folderLength = getFolderCount(), handleFolderCreation())
            }, 600)
        }), e(".folders-new .icon").click(function(e) {
            try {
                e.stopPropagation()
            } catch (e) {}
            0 != folderLength && setTimeout(function() {
                isFolderCreated() && (folderLength = getFolderCount(), handleFolderCreation())
            }, 600)
        }), e("#add-folder").blur(e => {
            0 != folderLength && setTimeout(function() {
                isFolderCreated() && (folderLength = getFolderCount(), handleFolderCreation())
            }, 600)
        }))
    }

    function showOnboardingFinishBanner(t) {
        e(".liner-banner").remove();
        var n = `<div class="liner-banner liner-banner-offer">\n                        <div class="liner-banner-title">\n                            <span class="liner-logo"></span>\n                            <div class="liner-text">${localize("Welcome Package")}</div>\n                        </div>\n                        <div class="liner-banner-contents">\n                            <div class="liner-banner-steps">${localize("Your <strong>72% Discount</strong> offer<br>ends in N day(s).").replace("N",t).replace("day(s)",1==t?"day":"days")}</div>\n                        </div>\n                        <div class="liner-banner-button-box">\n                            <button class="liner-learn-more-btn">${localize("Redeem Offer")}</button>\n                        </div>\n                        <div class="liner-banner-close"><button class="liner-banner-close-btn">${localize("Close")}</button></div>\n                    </div>`;
        e(".ab-iam-root").length > 0 ? e(".ab-iam-root").before(n) : e("body").append(n), e(".liner-banner.liner-banner-offer .liner-banner-close-btn").click(function() {
            e(".liner-banner.liner-banner-offer").remove()
        }), e(".liner-banner.liner-banner-offer .liner-learn-more-btn").click(function() {
            messageToNative("NEW_TAB", {
                url: "https://dynamic-link.getliner.com/72EF32"
            })
        })
    }

    function showOnboardingFolderBanner() {
        e(".liner-banner").remove();
        var t = `<div class="liner-banner liner-banner-folder" style="top: ${e("#top-container").offset().top+e("#top-container").height()+194}px">\n                        <div class="liner-banner-title">\n                            <span class="liner-logo"></span>\n                            <div class="liner-text">${localize("Step Requirements")}</div>\n                        </div>\n                        <div class="liner-banner-contents">\n                            <div class="liner-banner-steps"><span class="liner-banner-step">${localize("Step 3.")}</span>${localize("Create a folder")}</div>\n                        </div>\n                    </div>`;
        e(".ab-iam-root").length > 0 ? e(".ab-iam-root").before(t) : e("body").append(t), setInterval(function() {
            e(".liner-banner-folder").css("top", `${e("#top-container").offset().top+e("#top-container").height()+194}px`)
        }, 100)
    }

    function handleFolderCreation() {
        saveFinishedOngoingOnboardings("web_finish_guide_highlight"), saveFinishedOngoingOnboardings("web_finish_guide_comment"), saveFinishedOngoingOnboardings("web_finish_guide_folder"), e(".liner-banner.liner-banner-folder").remove(), clearInterval(onboardingFolderBannerInterval), evaluateScript("linerOnboardingEvent('web_finish_guide_folder');")
    }

    function isFolderCreated() {
        return getFolderCount() > folderLength
    }

    function getFolderCount() {
        return e(".folders").children().length
    }

    function isLINERDashboard() {
        try {
            if ("getliner.com" == window.location.host && -1 != window.location.pathname.indexOf("/c/")) return !0
        } catch (e) {}
        return !1
    }

    function isLINERGuidePage() {
        try {
            if (-1 != window.location.pathname.indexOf("/guide/browser-extension")) return !0
        } catch (e) {}
        return !1
    }

    function isLINERMobileGuidePage() {
        try {
            if (-1 != window.location.pathname.indexOf("/guide/mobile")) return !0
        } catch (e) {}
        return !1
    }

    function saveFinishedOngoingOnboardings(e) {
        var t = getFinishedOngoingOnboardings(); - 1 == t.indexOf(e) && (t.push(e), localStorage.setItem("finished_ongoing_onboardings", JSON.stringify(t))), getFinishedOngoingOnboardings().length >= 2 && (messageToNative("SET_ELIGIBLE_FOR_ONBOARDING_EC", {}), localStorage.setItem("onboarding_finish_time", (new Date).getTime()))
    }

    function getFinishedOngoingOnboardings() {
        var e = [];
        try {
            e = localStorage.getItem("finished_ongoing_onboardings") ? JSON.parse(localStorage.getItem("finished_ongoing_onboardings")) : []
        } catch (e) {}
        return e
    }

    function disableTargetBlank() {
        e("a").click(function(t) {
            try {
                if (e(this).attr("target") && -1 != e(this).attr("target").toLowerCase().indexOf("blank")) {
                    if (t.preventDefault(), 1 == window.disableSecondTargetBlank) return;
                    window.disableSecondTargetBlank = !0, messageToNative("NEW_TAB", {
                        url: e(this).prop("href").trim()
                    }), setTimeout(function() {
                        window.disableSecondTargetBlank = !1
                    }, 100)
                }
            } catch (e) {}
        })
    }

    function initMobileOngoingOnboarding() {
        evaluateScript("\n            function linerBrazeChangeUser() {\n                if (window.appboy && window.userId) {\n                    window.appboy.changeUser(window.userId);\n\n                    setTimeout(function() {\n                        linerOnboardingEvent('mob_onb_welcome');\n                    }, 1500);\n                    return;\n                }    \n                setTimeout(function() {\n                    linerBrazeChangeUser();\n                }, 50);\n            }\n\n            function linerOnboardingEvent(name) {\n                if (window.appboy) {\n                    window.appboy.logCustomEvent(name);\n                    return;\n                }          \n                setTimeout(function() {\n                    linerOnboardingEvent(name);\n                }, 50);      \n            }\n\n            linerBrazeChangeUser();\n        ")
    }
    window.disableSecondTargetBlank = !1, e(document).ready(function() {
        window.isLinerBrowser ? isLINERMobileGuidePage() && initMobileOngoingOnboarding() : (folderLength = getFolderCount(), initOngoingOnboarding()), document.addEventListener("scroll", function(e) {
            window.didMouseUp = !0
        }, !1), window.addEventListener("touchstart", function(e) {
            window.didMouseUp = !1, isDisabledSite() || enableSelection(), window.isLinerBrowser && disableTargetBlank()
        }), window.addEventListener("touchend", function(e) {
            window.didMouseUp = !0, isDisabledSite() || enableSelection()
        }), window.addEventListener("mousedown", function(e) {
            window.didMouseUp = !1, isDisabledSite() || enableSelection(), window.isLinerBrowser && disableTargetBlank()
        }), window.addEventListener("mouseup", function(e) {
            window.didMouseUp = !0, isDisabledSite() || enableSelection()
        })
    })
}
if ((window.injectLinerLighterJS || window.injectLinerCoreScript || window.top === window) && !window.isLighterJSInjected) {
    window.isLighterJSInjected = !0;
    window.linerJQuery;
    ! function(e) {
        if (void 0 === e.Lighter) {
            var t, n = "lighter",
                i = "lgt",
                o = 5,
                r = {
                    OK: 0,
                    REMOVED: 1
                },
                a = e.getSelection();
            var l = {
                items: []
            };

            function s(e) {
                return e[e.length - 1]
            }

            function c(e) {
                return e.replace(/\s/g, "")
            }

            function p() {
                return c(document.body.textContent)
            }

            function d(e) {
                for (var t = 0, n = 0;
                    (n = p().indexOf(c(e), n)) >= 0;) t++, n++;
                return t
            }

            function g(e) {
                var t = {
                        prev: "",
                        next: ""
                    },
                    n = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, !1),
                    i = a.getRangeAt(0),
                    o = i.startOffset,
                    r = i.endOffset;
                for ((n.currentNode = i.startContainer).nodeType != Node.TEXT_NODE && (n.currentNode = i.startContainer.childNodes[o] || i.endContainer.childNodes[0], n.previousNode(), o = n.currentNode.textContent.length), t.prev = n.currentNode.textContent.substring(0, o); c(t.prev).length < e && null != n.currentNode;) t.prev = n.previousNode().textContent + t.prev;
                for ((n.currentNode = i.endContainer).nodeType != Node.TEXT_NODE && (n.currentNode = i.endContainer.childNodes[r] || i.endContainer.childNodes[0], n.previousNode(), n.nextNode(), r = 0), t.next = n.currentNode.textContent.substring(r, n.currentNode.textContent.length); c(t.next).length < e && null != n.currentNode;) t.next = t.next + n.nextNode().textContent;
                return t.prev = t.prev.trimLeft(), t.next = t.next.trimRight(), t.prev.length >= e && (t.prev = t.prev.substring(t.prev.length - e, t.prev.length)), t.next.length >= e && (t.next = t.next.substring(0, e)), t
            }

            function h(e, t, o, r, a) {
                if (null == e || "object" != typeof e || !e.nodeType || e.nodeType != Node.TEXT_NODE || null == r || "object" != typeof r) return null;
                var l = document.createDocumentFragment(),
                    s = document.createElement(n);
                for (var p in s.dataset.id = i + a, r) s.style[p] = r[p];
                return t > 0 && l.appendChild(document.createTextNode(e.textContent.substring(0, t))), s.innerText = e.textContent.substring(t, o), l.appendChild(s), o > 0 && l.appendChild(document.createTextNode(e.textContent.substring(o, e.textContent.length))), c(s.textContent).length > 0 && "" != s.textContent.trim() && e.parentNode.replaceChild(l, e), s.textContent.length
            }

            function m(t) {
                try {
                    var n = s(t.status).code;
                    if (n == r.OK && (x = t.prev + t.core + t.next, p().indexOf(c(x)) >= 0)) {
                        for (var i = t.prev + t.core + t.next, o = function() {
                                for (var e = [], t = [], n = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, !1); n.nextNode();) e.push(n.currentNode), t.push(n.currentNode.textContent);
                                return {
                                    textNodeList: e,
                                    textList: t
                                }
                            }(), a = p().indexOf(c(i)), l = -1, d = 0; d <= a;) l++, d += c(o.textList[l]).length;
                        e.totalTextList = o;
                        var g = [],
                            m = [],
                            u = c(i);
                        do {
                            g.push(o.textNodeList[l]), m.push(o.textList[l]), l++
                        } while (c(m.join("")).indexOf(u) < 0);
                        e.item = t, e.targetTextNodeList = g, e.targetTextList = m;
                        var f = t.core.length,
                            A = "";
                        m.forEach(e => {
                            A += e
                        });
                        for (var w = function(e, t) {
                                for (var n = 0, i = 0; n < e.length && i + e[n].length < t;) i += e[n++].length;
                                return {
                                    index: n,
                                    offset: t - i
                                }
                            }(m, A.indexOf(t.core)); f > 0 && w.index < g.length;) {
                            var b = 0,
                                v = (a = w.offset, 0);
                            a + f < g[w.index].length ? (v = a + f, b = f) : (b = g[w.index].length - a, v = g[w.index].length), h(g[w.index], a, v, t.styleOptions, t.id), w.index++, f -= b, w.offset = 0
                        }
                        return !0
                    }
                    return n == r.REMOVED
                } catch (e) {}
                var x;
                return !1
            }
            l.getUniqueId = function() {
                var e;
                do {
                    e = Math.random().toString().split(".")[1]
                } while (this.items.map(function(e) {
                        return e.id
                    }).indexOf(e) >= 0);
                return e
            }, l.generateStatusItem = function(e) {
                return {
                    code: e,
                    regTime: new Date
                }
            }, l.addItem = function(e, t) {
                t && (e.isApplied = m(e)), this.items.push(e)
            }, l.updateItem = function(e, t) {
                for (var n = this.items.length - 1; n >= 0; n--)
                    if (this.items[n].id == e) {
                        this.items[n] = t, m(t);
                        break
                    }
            }, l.reset = function() {
                this.items = []
            }, l.import = function(e, t) {
                var n, i = JSON.parse((n = e, decodeURIComponent(escape(window.atob(n)))));
                for (var o in i) this.addItem(i[o], t)
            }, l.export = function() {
                var e, t = this.items.map(function(e) {
                    return {
                        id: e.id,
                        core: e.core,
                        prev: e.prev,
                        next: e.next,
                        styleOptions: e.styleOptions,
                        status: e.status
                    }
                });
                return e = JSON.stringify(t), window.btoa(unescape(encodeURIComponent(e)))
            };
            var u = {
                StyleList: {
                    items: l.items
                }
            };
            u.doHighlight = function(e, p, h) {
                var m = function() {
                        var e, t = "",
                            n = "",
                            i = a.getRangeAt(0).toString(),
                            r = o,
                            l = 0;
                        do {
                            "" == t && "" == n ? (t = (e = g(r)).prev, n = e.next) : t.length <= n.length ? t = (e = g(++r)).prev : n = (e = g(r)).next, l++
                        } while (1 != d(t + i + n) || c(t).length < o || c(n).length < o || c(t[0]).length <= 0 && l < 200 || c(s(n)).length <= 0 && l < 200);
                        return {
                            core: i,
                            prev: t.trimLeft(),
                            next: n.trimRight()
                        }
                    }(),
                    f = l.getUniqueId();
                return null != h && (t = document.body.querySelector(n + '[data-id*="' + i + h + '"]'), u.doRemoveStyle()), m.id = f, m.styleOptions = {
                    backgroundColor: e
                }, m.status = [l.generateStatusItem(r.OK)], m.isApplied = !1, 1 == p ? l.updateItem(h, m) : l.addItem(m, !0), a.removeAllRanges(), f
            }, u.detectSpanColor = u.detectStyleElementColor = function(e) {
                var i = e.target || e.srcElement;
                for (t = null; null != i;) {
                    if (i.tagName.toLowerCase() == n.toLowerCase()) return t = i, i.style.backgroundColor;
                    i = i.parentElement
                }
                return !1
            }, u.doRemoveStyle = function() {
                for (var e = t.dataset.id, o = document.body.querySelectorAll(n + '[data-id*="' + e + '"]'), a = 0; a < o.length; a++) o[a].parentNode.replaceChild(document.createTextNode(o[a].textContent), o[a]);
                var s = e.split(i)[1];
                for (var a in l.items)
                    if (l.items[a].id == s) return void l.items[a].status.push(l.generateStatusItem(r.REMOVED))
            }, u.doChangeStyle = function(e, o) {
                var r;
                r = o ? i + o : t.dataset.id;
                for (var a = document.body.querySelectorAll(n + '[data-id="' + r + '"]'), s = 0; s < a.length; s++)
                    for (var c in e) a[s].style[c] = e[c];
                var p = r.split(i)[1];
                for (var s in l.items)
                    if (l.items[s].id == p) return void(l.items[s].styleOptions = e)
            }, u.import = function(e) {
                l.reset(), l.import(e, !0)
            }, u.export = function() {
                return l.export()
            }, u.getStyleList = function() {
                return l.items
            }, e.Lighter = u
        }
    }(window)
}
if ((window.injectLinerDisableJS || window.injectLinerCoreScript || window.top === window) && !window.isDisableJSInjected) {
    window.isDisableJSInjected = !0;
    window.linerJQuery;

    function isDisabledSite() {
        if (window.injectLinerCoreScript) return !1;
        if ("file:" == window.location.protocol) return !0;
        if (isWebPDFFile()) return !0;
        if (isLINERMobileGuidePage()) return !1;
        for (var e = ["m.map.naver.com", "m.map.kakao.com", "app.redash.io", "reportingitc2.apple.com", "console.cloud.google.com", "console.aws.amazon.com", "console.firebase.google.com", "bitbucket.org", "dashboard.stripe.com", "app.zeplin.io", "www.naver.com", "www.nate.com", "www.daum.net", "www.baidu.com", "www.bing.com", "www.yahoo.com", "duckduckgo.com", "zum.com", "www.msn.com", "m.naver.com", "m.daum.net", "m.nate.com", "m.daidu.com", "m.zum.com", "appstoreconnect.apple.com", "www.notion.so", "store.whale.naver.com", "twitter.com", "www.linkedin.com", "map.naver.com", "vidiq.com", "app.baremetrics.com", "app.chartmogul.com", "www.paypal.com"], t = 0; t < e.length; t++)
            if (window.location.host == e[t]) return !0;
        var n = ["www.facebook.com", "scholar.google.", "chrome.google.com", "addons.mozilla.org", "partner.microsoft.com", "atlassian.net", "accounts.google", "mail.", "outlook.live.com", "search.", "translate.google.", "feedly.com", "highly.co", "dropbox.com", "cloud.naver.com", "classroom.google.com", "drive.google.com", "inbox.google.com", "classroom.google.com", "analytics.google.com", "docs.google.com", "myaccount.google.com", "trello.com", "agit.io", "slack.com", "notion.so", "onedrive.live.com", "localhost", ":", "liner.link", "getliner.com", "lnr.li", "cafe.naver.com", "cafe.daum.net", "blog.daum.net", "blog.naver.com", "blog.me", "braze.com", "www.pinterest"];
        for (t = 0; t < n.length; t++)
            if (-1 != window.location.host.indexOf(n[t])) {
                if (-1 != window.location.href.indexOf("/guide/browser-extension") || -1 != window.location.href.indexOf("getliner.com/webpdf") || -1 != window.location.href.indexOf("getliner.com/sample")) return !1;
                if (-1 != window.location.host.indexOf("atlassian.net")) {
                    if ("www" == window.location.host.split(".")[0]) return !1
                } else {
                    if ("braze.com" == n[t] && -1 == window.location.host.indexOf("dashboard")) return !1;
                    if ("partner.microsoft.com" == n[t] && -1 == window.location.href.indexOf("/dashboard/")) return !1;
                    if ("addons.mozilla.org" == n[t] && -1 == window.location.href.indexOf("/developers/addons")) return !1;
                    if ("chrome.google.com" == n[t] && -1 == window.location.href.indexOf("/webstore")) return !1;
                    if ("www.facebook.com" == n[t] && (-1 != window.location.pathname.indexOf("/facebookmedia") || -1 != window.location.pathname.indexOf("/business"))) return !1
                }
                return !0
            } var i, o = ["play.google.com/apps/publish", "facebook.com/dialog", "facebook.com/sharer/sharer.php", "api.twitter.com/oauth", "twitter.com/intent/tweet", "www.evernote.com/client", "www.evernote.com/shard", "www.onenote.com/authredir", "wanted.co.kr/dashboard"];
        for (t = 0; t < o.length; t++)
            if (-1 != window.location.href.indexOf(o[t])) return !0;
        if (-1 != window.location.host.indexOf("www.google") && (-1 != window.location.href.indexOf("/search") || -1 != window.location.href.indexOf("/maps"))) return !0;
        if (i = window.location.host, r = RegExp("^http[s]?://((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])"), r.test(i)) return !0;
        return !1
    }
}
if ((window.injectLinerResourceJS || window.injectLinerCoreScript || window.top === window) && !window.isResourceJSInjected) {
    window.isResourceJSInjected = !0;
    window.linerJQuery;

    function getLinerMiniBtn() {
        return `\n        <div class="liner-mini-tooltip liner-maintain-selection ${window.isLinerBrowser?"liner-mobile":"liner-desktop"}">\n            <span class="liner-color-yellow liner-mini-color-circle liner-save-button"></span>\n            <span class="liner-color-green liner-mini-color-circle liner-save-button"></span>\n            <span class="liner-color-orange liner-mini-color-circle liner-save-button"></span>\n            <span class="liner-color-violet liner-mini-color-circle liner-save-button"></span>\n            <span class="liner-color-blue liner-mini-color-circle liner-save-button"></span>\n            <span class="liner-color-pink liner-mini-color-circle liner-save-button"></span>\n        </div>        \n        <div class="liner-mini-button">\n            <a class="liner-mb liner-save-button ${window.isLinerBrowser?"liner-mobile":"liner-desktop"} ${window.isWhaleBrowser?"liner-whale":""}"></a>\n        </div>`
    }

    function getLinerTooltip() {
        return `\n        <div class="liner-tooltip-wrap ${window.isLinerBrowser?"liner-mobile":"liner-desktop"}">\n            <div class="liner-tooltip-menu ${window.isLinerBrowser?"liner-mobile":"liner-desktop"}">\n                <span class="liner-tooltip-color liner-tooltip-icon"></span>\n                <span class="liner-tooltip-comment liner-tooltip-icon"></span>\n                <span class="liner-tooltip-share liner-tooltip-icon"></span>\n                <span class="liner-tooltip-undo liner-tooltip-icon"></span>\n            </div>\n            <div class="liner-color-picker ${window.isLinerBrowser?"liner-mobile":"liner-desktop"}">\n                <span class="liner-color-yellow liner-color-circle"></span>\n                <span class="liner-color-green liner-color-circle"></span>\n                <span class="liner-color-orange liner-color-circle"></span>\n                <span class="liner-color-violet liner-color-circle"></span>\n                <span class="liner-color-blue liner-color-circle"></span>\n                <span class="liner-color-pink liner-color-circle"></span>\n            </div>\n            ${getShareMethodHtml()}\n            <div class="liner-tooltip-arrow ${window.isLinerBrowser?"liner-mobile":"liner-desktop"}">\n                <span class="liner-arrow-down"></span>\n            </div>\n        </div>`
    }

    function getShareMethodHtml() {
        return `\n        <div class="liner-share-menu '${window.isLinerBrowser?"liner-mobile":"liner-desktop"}">\n            <a class="liner-share-method liner-share-facebook" target="_blank">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("Facebook")}</span>\n            </a>\n            <a class="liner-share-method liner-share-twitter" target="_blank">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("Twitter")}</span>\n            </a>\n            <a class="liner-share-method liner-share-linkedin" target="_blank">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("LinkedIn")}</span>\n            </a>\n            <a class="liner-share-method liner-share-messenger" target="_blank">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("Messenger")}</span>\n            </a>\n            <a class="liner-share-method liner-share-line" target="_blank">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("LINE")}</span>\n            </a>\n            <a class="liner-share-method liner-share-kakaotalk">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("KakaoTalk")}</span>\n            </a>\n            <a class="liner-share-method liner-share-mail" target="_blank">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("Mail")}</span>\n            </a>\n            <a class="liner-share-method liner-share-copy">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("Copy")}</span>\n            </a>\n            <div class="liner-share-method liner-share-copied">\n                <div class="liner-share-method-icon"></div>\n                <span class="liner-share-method-label">${localize("Copied")}</span>\n            </div>\n        </div>`
    }

    function getCommentBoxHtml() {
        return `\n        <div class="liner-comment-box">\n            <div class="liner-comment-line"></div>\n            <div class="liner-comment-area">\n                <textarea class="liner-comment-input" placeholder="${localize("Write a comment")}"></textarea>\n            </div>\n        </div>`
    }

    function getMobileCommentBoxHtml() {
        return `\n        <div class="liner-mobile-comment-box">\n            <div class="liner-comment-header">\n                <div class="liner-comment-header-label">${localize("Comment")}</div>\n                <a class="liner-comment-save">${localize("Done")}</a>\n            </div>\n            <div class="liner-comment-highlight-container">\n                <div class="liner-comment-highlight">\n                    <div class="liner-comment-highlight-index"></div>\n                        <div class="liner-comment-highlight-content"></div>\n                    </div>\n                <div class="liner-comment-line"></div>\n            </div>\n            <div class="liner-comment-comment-container">\n                <div class="liner-comment-comment-icon"></div>\n                <textarea class="liner-comment-textarea" placeholder="${localize("Write a comment")}"></textarea>\n            </div>\n        </div>`
    }

    function getCommentIconHTMLWithDataId(e) {
        return `\n        <div class="liner-comment-icon" data-id="${e}" id="lgt${e}">\n            <img class="liner-comment-bubble" data-id="${e}" src="data:image/png;base64,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"/>\n        </div>`
    }

    function getUpgradeToHighlightHTML() {
        return `\n        <div class="liner-upgrade-highlight-box liner-maintain-selection">\n            <div class="liner-upgrade-highlight-header-border liner-maintain-selection"></div>\n            <div class="liner-upgrade-highlight-close"></div>\n            <div class="liner-upgrade-highlight-title-label liner-maintain-selection">${localize("You've reached<br>the limit - highlight")}</div>\n            <div class="liner-upgrade-highlight-desc-label liner-maintain-selection">${localize("Basic users are limited to <span class='liner-upgrade-highlight-limit'>7</span> highlights per document.<br>Upgrade to LINER Premium and make unlimited highlights.")}</div>\n            <a class="liner-upgrade-highlight-upgrade liner-maintain-selection" href="https://getliner.com/upgrade" target="_blank">${localize("UPGRADE")}</a>\n        </div>`
    }

    function getUpgradeToCommentHTML() {
        return `\n        <div class="liner-upgrade-comment-box">\n            <div class="liner-upgrade-comment-header-border"></div>\n            <div class="liner-upgrade-comment-close"></div>\n            <div class="liner-upgrade-comment-title-label">${localize("You've reached<br>the limit - comment")}</div>\n            <div class="liner-upgrade-comment-desc-label">${localize("Basic users are limited to 3 comments per document.<br>Upgrade to LINER Premium and write unlimited comments.")}</div>\n            <a class="liner-upgrade-comment-upgrade liner-maintain-selection" href="https://getliner.com/upgrade" target="_blank">${localize("UPGRADE")}</a>\n        </div>`
    }

    function getUploadPDFBtn() {
        return `\n        <div class="liner-upload-pdf-btn"></div>\n        <div class="liner-upload-pdf-tooltip">${localize("Highlight on this PDF")}</div>\n        <div class="liner-upload-pdf-banner">${localize("Start highlighting on this PDF ????")}</div>\n        <div class="liner-upload-pdf-progress-bar"></div>\n        `
    }
}
if ((window.injectLinerAPIJS || window.injectLinerCoreScript || window.top === window) && !window.isAPIJSInjected) {
    window.isAPIJSInjected = !0;
    window.linerJQuery;

    function saveHighlightVarToStorage() {
        highlightVar.style_items = Lighter.export(), localStorage.setItem("liner_highlight_var", JSON.stringify(highlightVar))
    }

    function getHighlightVarFromStorage() {
        try {
            return localStorage.getItem("liner_highlight_var") ? JSON.parse(localStorage.getItem("liner_highlight_var")) : null
        } catch (e) {}
        return null
    }
}
if ((window.injectLinerMessageReceiverJS || window.injectLinerCoreScript || window.top === window) && !window.isMessageReceiverJSInjected) {
    window.isMessageReceiverJSInjected = !0;
    const e = window.linerJQuery;
    var browser = getBrowser();

    function getBrowser() {
        try {
            return window.safari && !window.safari.id ? window.safari : window.whale ? window.whale : chrome
        } catch (e) {}
        return null
    }
    var browserPort = getBrowserPort();

    function getBrowserPort() {
        try {
            return browser.runtime.connect()
        } catch (e) {}
        return null
    }
    try {
        window.isLinerBrowser ? window.isLinerBrowserDesktopDebugMode ? window.safari && !window.safari.id ? safari.self.addEventListener("message", function(e) {
            logger("message from safari native"), logger(e), handleMessage(e)
        }) : browser.runtime.onMessage.addListener(function(e, t, n) {
            logger("message from react native"), logger(e), handleMessage(e)
        }) : document.addEventListener("message", function(e) {
            logger("message from react native"), logger(JSON.parse(e.data)), handleMessage(JSON.parse(e.data))
        }) : window.safari && !window.safari.id ? (safari.self.addEventListener("message", function(t) {
            logger("message from safari native"), logger(t), handleMessage(t), e("iframe.liner-popover").length > 0 && e("iframe.liner-popover")[0].contentWindow.postMessage(JSON.stringify(t), "*"), e("iframe.liner-popover-tag").length > 0 && e("iframe.liner-popover-tag")[0].contentWindow.postMessage(JSON.stringify(t), "*"), e("iframe.liner-popover-recommendation").length > 0 && e("iframe.liner-popover-recommendation")[0].contentWindow.postMessage(JSON.stringify(t), "*"), e("iframe.liner-iam").length > 0 && e("iframe.liner-iam")[0].contentWindow.postMessage(JSON.stringify(t), "*")
        }), window.addEventListener("message", function(e) {
            "https://gcpstorage.getliner.com" === e.origin && (logger("message from iframe, relaying it to native"), logger(JSON.parse(e.data)), messageToNative(JSON.parse(e.data).name, JSON.parse(e.data).message))
        }, !1)) : browser.runtime.onMessage.addListener(function(e, t, n) {
            logger("message from extension background"), logger(e), handleMessage(e)
        })
    } catch (e) {}

    function handleMessage(t) {
        if ("GET_FAVICON" != t.name) {
            if (isWebPDFFile()) {
                if ("INIT_PDF_UPLOAD_BTN" == t.name) return window.didSeePDFBanner = t.message.did_see_pdf_banner, void initPDFUploadBtn();
                "UPLOAD_PDF_COMPLETE" == t.name && (e(".liner-upload-pdf-progress-bar").animate({
                    width: "100%"
                }, 200, function() {
                    e(".liner-upload-pdf-progress-bar").css("width", "0%")
                }), t.message.pdf_url ? window.location.replace(t.message.pdf_url) : t.message.show_upgrade && window.alert("Upgrade to Highlight"), setTimeout(function() {
                    e(".liner-upload-pdf-btn").removeClass("disabled")
                }, 600))
            }
            if ("LKS_GET_DOCUMENTS" === t.name) {
                t.message.documents.forEach(t => {
                    const {
                        document_id: n,
                        url: i
                    } = t, o = window.searchResultElements[i];
                    if (isGoogleSERP()) {
                        if (void 0 !== o) {
                            const t = e(o).children("div")[1];
                            e(t).after(`\n                            <a class="liner-picked-search-result-link" href="https://getliner.com/home/pages/${n}" target="_blank">${localize("View in LINER")}<span class="liner-picked-search-result-arrow"></span></a>\n                            <div class="liner-picked-search-result-description">\n                                <p class="liner-picked-search-result-description-title">${localize("Advanced Google Search by LINER")}</p>\n                                <p class="liner-picked-search-result-description-content">${localize("Based on your recent highlights, this page is likely to have what you need.")}</p>\n                            </div>\n                            <div class="liner-picked-search-result-information"><span class="liner-picked-search-result-information-icon"></span>${localize("Picked by LINER")}</div>\n                        `);
                            const i = e(o).height();
                            e(o).css("position", "relative !important"), e(o).prepend(`\n                            <div class="liner-picked-search-result-bar" style="height: ${i}px !important;"></div>\n                        `), e(o).children(".liner-picked-search-result-description").css("top", `${i+9}px`)
                        }
                    } else if (isGoogleScholarSERP()) {
                        e(o).append(`\n                        <a class="liner-picked-search-result-link liner-picked-search-result-link-scholar" href="https://getliner.com/home/pages/${n}" target="_blank">${localize("View in LINER")}<span class="liner-picked-search-result-arrow"></span></a>\n                        <div class="liner-picked-search-result-description liner-picked-search-result-description-scholar">\n                            <p class="liner-picked-search-result-description-title">${localize("Advanced Google Search by LINER")}</p>\n                            <p class="liner-picked-search-result-description-content">${localize("Based on your recent highlights, this page is likely to have what you need.")}</p>\n                        </div>\n                        <div class="liner-picked-search-result-information liner-picked-search-result-information-scholar"><span class="liner-picked-search-result-information-icon"></span>${localize("Picked by LINER")}</div>\n                    `);
                        const t = e(o).height();
                        e(o).css("position", "relative !important"), e(o).prepend(`\n                        <div class="liner-picked-search-result-bar" style="height: ${t}px !important;"></div>\n                    `), e(o).children(".liner-picked-search-result-description").css("top", `${t+20}px`)
                    }
                }), e(".liner-picked-search-result-link").off().click(function(e) {
                    messageToNative("GA_EVENT_RECOMMENDATION", {
                        category: "extension",
                        action: "click_recommendation_by_picked_by_liner",
                        label: ""
                    }), messageToNative("LKS_EVENT", {
                        type: "click_recommendation_by_picked_by_liner",
                        url: window.location.href
                    })
                }), e(".liner-picked-search-result-information").off().click(function(t) {
                    t.stopPropagation(), !0 === e(this).hasClass("isOpened") ? (e(this).removeClass("isOpened"), e(this).prev().hide()) : (e(this).addClass("isOpened"), e(this).prev().show())
                }), e("body").click(function(t) {
                    e(".liner-picked-search-result-information").removeClass("isOpened"), e(".liner-picked-search-result-description").hide()
                })
            }
            if (!isDisabledSite() || (messageToNative("CHANGE_TOOLBAR_ITEM", {
                    type: "disabled",
                    is_web_pdf: isWebPDFFile() || isLinerPSPDFKit()
                }), isLinerShareDialog()))
                if ("SHOW_TAG" == t.name) e("iframe.liner-popover.liner-popover-tag").css("top", `${t.message.top}px`), setTimeout(function() {
                    e("iframe.liner-popover.liner-popover-tag").show()
                }, 100);
                else if ("HIDE_TAG" == t.name) setTimeout(function() {
                e("iframe.liner-popover.liner-popover-tag").hide()
            }, 100);
            else if ("LKS_READ" == t.name) lksReadEvent();
            else if ("LKS_UPDATE_DURATION" == t.name) lksReadDuration = new Date;
            else if ("SHOW_RECOMMENDATION_POPOVER_SPINNER" === t.name) window.isRecommendationShowing = !0;
            else if ("CHECK_DISABLED" == t.name) {
                if (window.isLinerBrowser && -1 != window.location.href.indexOf("/amp/") && e('link[rel="canonical"]').length > 0 && e('link[rel="canonical"]')[0].href && 1 != window.isRelocatingToCanonicalUrl) return window.isRelocatingToCanonicalUrl = !0, void window.location.replace(e('link[rel="canonical"]')[0].href);
                linerVar.lastUrl != window.location.href && (linerVar.lastUrl = window.location.href, linerVar.highlightIDs = [], linerVar.selectedHighlight = null, highlightVar = {
                    comments: [],
                    new_highlights: []
                }, Lighter.import("W10="), messageToNative("CLOSE_POPOVER", {}), messageToNative("DOCUMENT_READY", {}), window.isLinerBrowser && (e("video").attr("webkit-playsinline", ""), e("video").attr("playsinline", "")))
            } else if ("INJECT_POPOVER" == t.name) {
                e(`.${t.message.class.replace(" ",".")}`).remove(), e("body").append(`<iframe class="${t.message.class}" src="${t.message.src}" style="${t.message.style}"></iframe>`), !0 === window.doNotShowPopover && e(".liner-popover.liner-popover-recommendation").hide();
                const n = e(".liner-popover.liner-popover-main").height();
                let i = e(".liner-popover.liner-popover-recommendation").height() + 2;
                !e(".liner-popover.liner-popover-recommendation").is(":visible") && (i = 0);
                const o = 8;
                e("iframe.liner-iam").css("top", `${20+n+2*o+i}px`)
            } else if ("ANIMATE_POPOVER_SHOW" == t.name) {
                var n = ".liner-popover-" + t.message.type;
                t.message.type || (n = ""), e(`iframe.liner-popover${n}`).animate({
                    opacity: 1,
                    top: "22px"
                }, 200, function() {
                    e(`iframe.liner-popover${n}`).animate({
                        top: "20px"
                    }, 50, function() {})
                }), window.isPopoverOpened = !0
            } else if ("ANIMATE_POPOVER_REMOVE" == t.name) e("iframe.liner-popover").animate({
                opacity: 0,
                top: "-20px"
            }, 200, function() {
                window.isPopoverOpened = !1, e("iframe.liner-popover").remove(), window.isRecommendationShowing = !1
            });
            else if ("TOGGLE_RELEVANT_PAGES" === t.name) {
                e("iframe.liner-popover-recommendation")[0].style = t.message.style;
                const n = e(".liner-popover.liner-popover-main").height();
                let i = e(".liner-popover.liner-popover-recommendation").height() + 2;
                !e(".liner-popover.liner-popover-recommendation").is(":visible") && (i = 0);
                const o = 8;
                e(".liner-popover.liner-popover-recommendation").css("top", 20 + n + o), e("iframe.liner-iam").css("top", `${20+n+2*o+i}px`)
            } else if ("RELOAD_RECOMMENDATION_POPOVER" === t.name) {
                if (!0 === window.doNotShowPopover) return;
                e("iframe.liner-popover-recommendation")[0].style = t.message.style, e("iframe.liner-popover-recommendation").show()
            } else if ("HIDE_RECOMMENDATIONS_BY_HIGHLIGHT" === t.name) e("iframe.liner-popover-recommendation").hide(), window.isRecommendationShowing = !1;
            else if ("SHOW_IAM" == t.name) e("iframe.liner-iam").css("display", "block"), e("iframe.liner-iam").animate({
                opacity: 1
            }, 200, function() {});
            else if ("HIDE_IAM" == t.name) e("iframe.liner-iam").animate({
                opacity: 0
            }, 200, function() {
                e("iframe.liner-iam").css("display", "none")
            });
            else if ("REMOVE_IAM" == t.name) e("iframe.liner-iam").remove();
            else if ("REMOVE_ALL_POPOVERS" == t.name) e("iframe.liner-popover").remove(), e("iframe.liner-iam").remove();
            else if ("DO_NOT_SHOW_POPOVER" === t.name) window.doNotShowPopover = !0;
            else if ("TOGGLE_POPOVER" == t.name) window.doNotShowPopover = !1, window.isPopoverOpened ? messageToNative("CLOSE_POPOVER", {}) : (messageToNative("SHOW_POPOVER", {}), messageToNative("LKS_GET_RECOMMENDATIONS_BY_HIGHLIGHT", {
                url: window.location.href,
                title: e("title").text().trim().substring(0, 100),
                phrase: e("title").text().trim().substring(0, 1e3),
                is_recommendations_showing: !!window.isRecommendationShowing
            }));
            else if ("CHANGE_POPOVER_HEIGHT" == t.name) {
                const n = t.message.popover_class ? `.${t.message.popover_class}` : "";
                e(`.liner-popover${n}`).css("height", `${t.message.height}px`);
                const i = e(".liner-popover.liner-popover-main").height();
                let o = e(".liner-popover.liner-popover-recommendation").height() + 2;
                !e(".liner-popover.liner-popover-recommendation").is(":visible") && (o = 0);
                const r = 8;
                e(".liner-popover.liner-popover-recommendation").css("top", 20 + i + r), e("iframe.liner-iam").css("top", `${20+i+2*r+o}px`)
            } else if ("USER_INFO" == t.name) linerVar.user = t.message, isNaN(parseInt(linerVar.user.highlight_limit)) || e(".liner-upgrade-highlight-limit").text(parseInt(linerVar.user.highlight_limit)), (isLINERMobileGuidePage() || isLINERGuidePage()) && evaluateScript(`\n                    window.userEmail = '${""==linerVar.user.email?"":linerVar.user.email}';\n                    window.userId = ${linerVar.user.id};\n                `);
            else if ("PAGE_INFO_WITHOUT_HIGHLIGHT_IMPORT" == t.name) {
                var i = highlightVar.comments,
                    o = highlightVar.new_highlights;
                (highlightVar = t.message).comments = i, highlightVar.new_highlights = o, messageToNative("CACHE_SHARE_PAGE", {
                    share_id: highlightVar.share_id
                })
            } else if ("PAGE_INFO" == t.name) {
                if (highlightVar = t.message, lksReadStatus = 2, highlightVar.new_highlights || (highlightVar.new_highlights = []), messageToNative("CACHE_SHARE_PAGE", {
                        share_id: highlightVar.share_id
                    }), Lighter.import(highlightVar.style_items), setLighterEvents(), resetAllComments(), -1 != window.location.href.indexOf("getliner.com/webpdf")) try {
                    setInterval(function() {
                        if (highlightVar.pdfPageNumber != e("#pageNumber").val()) {
                            highlightVar.pdfPageNumber = e("#pageNumber").val();
                            var t = 0,
                                n = setInterval(function() {
                                    Lighter.import(Lighter.export()), setLighterEvents(), resetAllComments(), (t += 1) >= 5 && clearInterval(n)
                                }, 300)
                        }
                    }, 1e3)
                } catch (e) {}
            } else if ("SAVE_PAGE" == t.name) {
                if (highlightVar.page_id ? logger("this page is already saved") : messageToNative("UPDATE_STYLE", {
                        style_items: Lighter.export(),
                        image_url: getPageImage(),
                        doc: doc
                    }), 2 != lksReadStatus) {
                    lksReadStatus = 1;
                    for (var r = 0; r < lksCopyEvents.length; r++) messageToNative("LKS_EVENT", lksCopyEvents[r]);
                    lksCopyEvents = []
                }
            } else if ("DELETE_ALL_HIGHLIGHTS" == t.name) {
                var a = JSON.parse(window.atob(Lighter.export()));
                for (r = 0; r < a.length; r++) {
                    var l = a[r].id,
                        s = e('lighter[data-id="lgt' + l + '"]');
                    s.target = s[0], s.target && (Lighter.detectSpanColor(s), Lighter.doRemoveStyle())
                }
                setLighterEvents(), resetAllComments(), e(".liner-comment-icon").remove(), linerVar.highlightIDs = [], linerVar.selectedHighlight = null, highlightVar = {
                    comments: [],
                    new_highlights: []
                }, window.isLinerAPIMode && saveHighlightVarToStorage()
            } else if ("LOGIN" == t.name)
                if ("getliner.com" == window.location.host) e.get("https://getliner.com/auth/cookie", function(e) {
                    messageToNative("LOGIN", {
                        cookie: e.cookie
                    })
                }).fail(function() {});
                else {
                    if (linerVar.didSeeLoginMessage[t.message.type]) return;
                    linerVar.didSeeLoginMessage[t.message.type] = !0, messageToNative("LOGIN", {
                        type: t.message.type
                    })
                }
            else if ("ALERT" == t.name) alert(t.message.message);
            else if ("GUIDE_STEP_3" == t.name) window.location.hash = "#step3", messageToNative("NEW_TAB", {
                url: "https://getliner.com/guide/browser-extension"
            });
            else if ("GET_SHARING_CONTENT" == t.name) var c = setInterval(function() {
                if (isLinerFBDialog())(e(".mentionsTextarea").length > 0 || e("#feedform_user_message").length > 0) && (clearInterval(c), e(".mentionsTextarea").val(t.message.content), e("#feedform_user_message").val(t.message.content));
                else if (isLinerLinkedInDialog()) {
                    if ((e(".mentions-texteditor__content").length > 0 || e("#msg-inshare-textarea").length > 0) && (clearInterval(c), e(".mentions-texteditor__content").text(t.message.content), e("#msg-inshare-textarea").val(t.message.content), isLinerLinkedInDialog())) var n = setInterval(function() {
                        e(".inshare-content__list").length > 0 && (clearInterval(n), messageToNative("GET_SHARING_CONTENT", {}))
                    }, 1e3)
                } else if (isLinerLineDialog()) {
                    for (var i = 0; i < e("textarea").length; i++)
                        if (!e(e("textarea")[i]).hasClass("liner-comment-input")) {
                            clearInterval(c), setTimeout(function() {
                                e(e("textarea")[i]).val(t.message.content);
                                var n = t.message.content,
                                    o = setInterval(function() {
                                        n != e(e("textarea")[i]).val() && e(e("textarea")[i]).val(t.message.content), e(e("textarea")[i]).keydown(function(e) {
                                            try {
                                                e.stopPropagation()
                                            } catch (e) {}
                                            clearInterval(o)
                                        })
                                    }, 50)
                            }, 300);
                            break
                        }
                } else clearInterval(c)
            }, 300);
            else if ("SET_DO_SHOW_KAKAOTALK" == t.name) doShowKakaoTalk = t.message.do_show_kakaotalk;
            else if ("EXECUTE_SCRIPT" == t.name) try {
                var p = document.createElement("script");
                p.textContent = t.message.code, (document.head || document.documentElement).appendChild(p), p.remove()
            } catch (e) {}
        } else messageToNative("FAVICON", {
            url: getFavicon()
        })
    }
    e(document).ready(function() {
        window.handleMessage = handleMessage
    })
}
if ((window.injectLinerLksJS || window.injectLinerCoreScript || window.top === window) && !window.isLksJSInjected) {
    window.isLksJSInjected = !0;
    const e = window.linerJQuery;

    function getSimplifiedDocument() {
        try {
            return document.documentElement.outerHTML.replace(/<body\b[^<]*(?:(?!<\/body>)<[^<]*)*<\/body>/gi, "<body></body>").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
        } catch (e) {}
        return ""
    }

    function getPhrase() {
        if ("" == document.getSelection().toString().trim()) return "";
        return document.getSelection().anchorNode.parentElement.textContent.trim()
    }

    function getLighterPhrase(t) {
        try {
            return e(`lighter[data-id="lgt${t}"]`)[0].parentElement.textContent.trim()
        } catch (e) {}
        return ""
    }

    function lksReadEvent() {
        if (new Date - lksReadDuration < 6e3) return;
        let t = [];
        for (var n = 0; n < e('meta[name="keywords"]').text().split(",").length; n++) try {
            const i = e('meta[name="keywords"]').text().split(",")[n].trim();
            "" != i.trim() && t.push(i)
        } catch (e) {}
        1 == lksReadStatus ? (messageToNative("LKS_EVENT", {
            type: "read_doc",
            url: window.location.href,
            keywords: t,
            scroll_down_ratio: document.body.scrollHeight > 0 ? window.scrollY / document.body.scrollHeight : 0,
            read_duration: new Date - lksReadDuration
        }), lksReadStatus = 2) : 2 == lksReadStatus && messageToNative("LKS_EVENT", {
            type: "re_read_doc",
            url: window.location.href,
            keywords: t,
            scroll_down_ratio: document.body.scrollHeight > 0 ? window.scrollY / document.body.scrollHeight : 0,
            read_duration: new Date - lksReadDuration
        })
    }
    window.addEventListener("pagehide", function(e) {
        lksReadEvent()
    });
    var lksCopiedText = "";
    document.addEventListener("copy", t => {
        var n = document.getSelection().getRangeAt(0).toString().trim();
        if ("" != n && lksCopiedText != n) {
            lksCopiedText = n;
            try {
                const t = getPhrase(),
                    i = document.getSelection(),
                    o = i.getRangeAt(0).getClientRects()[0],
                    r = parseInt(window.getComputedStyle(i.anchorNode.parentElement).fontSize),
                    a = window.getComputedStyle(i.anchorNode.parentElement).fontWeight,
                    l = window.getComputedStyle(i.anchorNode.parentElement).fontStyle;
                let s = -1;
                document.body.scrollHeight > 0 && (s = (window.scrollY + o.top) / document.body.scrollHeight), 0 == lksReadStatus ? lksCopyEvents.push({
                    type: "copy_phrase",
                    url: window.location.href,
                    title: e("title").text().trim(),
                    phrase: t,
                    copied_text: n,
                    rel_height: s || -1,
                    font_size: r,
                    font_weight: a,
                    font_style: l
                }) : messageToNative("LKS_EVENT", {
                    type: "copy_phrase",
                    url: window.location.href,
                    title: e("title").text().trim(),
                    phrase: t,
                    copied_text: n,
                    rel_height: s || -1,
                    font_size: r,
                    font_weight: a,
                    font_style: l
                })
            } catch (e) {}
        }
    })
}
if ((window.injectLinerShareJS || window.injectLinerCoreScript || window.top === window) && !window.isShareJSInjected) {
    window.isShareJSInjected = !0;
    window.linerJQuery;
    var shareHost = "https://share.getliner.com",
        linerFBAppId = 808110669244168,
        linerKakaoKey = "254ec0f46cb79078e6a18e674220f0bd",
        doShowKakaoTalk = !1;

    function fbShareDialogUrl(e) {
        return "https://www.facebook.com/dialog/share?app_id=" + linerFBAppId + "&display=popup&href=" + encodeURIComponent(e) + "&redirect_uri=" + encodeURIComponent(e)
    }

    function fbSendDialogUrl(e) {
        return "https://www.facebook.com/dialog/send?app_id=" + linerFBAppId + "&link=" + encodeURIComponent(e) + "&redirect_uri=" + encodeURIComponent(e)
    }

    function twitterShareDialogUrl(e, t) {
        return "https://twitter.com/share?text=" + encodeURIComponent(t.substring(0, 1e3)) + "&url=" + encodeURIComponent(e)
    }

    function linkedInShareDialogUrl(e) {
        return "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(e)
    }

    function lineShareDialogUrl(e) {
        return "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(e)
    }

    function kakaoShareDialogUrl(e, t) {
        return "https://sharer.kakao.com/talk/friends/picker/easylink?app_key=" + linerKakaoKey + "&ka=sdk%2F1.35.2%20os%2Fjavascript%20lang%2F" + navigator.language + "%20device%2F" + navigator.platform + "%20origin%2Fhttps%253A%252F%252Fshare.getliner.com&validation_action=default&validation_params=%7B%22link_ver%22%3A%224.0%22%2C%22template_object%22%3A%7B%22object_type%22%3A%22text%22%2C%22button_title%22%3A%22%EC%A0%84%EC%B2%B4%20%EA%B8%80%20%EB%B3%B4%EA%B8%B0%22%2C%22text%22%3A%22%5B%EB%9D%BC%EC%9D%B4%EB%84%88%20%ED%95%98%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8%5D%5Cn%5Cn" + encodeURIComponent(t) + "%5Cn%22%2C%22link%22%3A%7B%22web_url%22%3A%22" + e + "%22%2C%22mobile_web_url%22%3A%22" + e + "%22%7D%7D%7D"
    }

    function getDoShowKakaoTalk() {
        messageToNative("GET_DO_SHOW_KAKAOTALK", {})
    }

    function mailDialogUrl(e, t, n) {
        var i = n.substring(0, 1e3);
        return "" != i && (i += "\n\n"), "mailto:?body=" + encodeURIComponent(t.substring(0, 600) + "\n\n" + i + "\n" + e)
    }
}
if ((window.injectLinerEndpointJS || window.injectLinerCoreScript || window.top === window) && !window.isEndpointJSInjected) {
    window.isEndpointJSInjected = !0;
    const e = window.linerJQuery;
    var server = "https://getliner.com";

    function http(t, n, i, o, r) {
        e.ajax({
            type: i.toUpperCase(),
            url: t + n,
            data: o,
            success: function(e) {
                r(e)
            },
            error: function(e, t, n) {
                r(e.responseJSON)
            }
        })
    }

    function getUsersMe(e) {
        http(server, "/users/me", "GET", {}, function(t) {
            e(t)
        })
    }
}
if ((window.injectLinerMainJS || window.injectLinerCoreScript || window.top === window) && !window.isMainJSInjected) {
    window.isMainJSInjected = !0;
    const e = window.linerJQuery;

    function messageToNative(e, t) {
        if (window.isLinerBrowser) {
            logger("message to react native - " + e), logger(t);
            try {
                window.isLinerBrowserDesktopDebugMode ? window.safari && !window.safari.id ? (logger("message to safari native - " + e), logger(t)) : browserPort.postMessage({
                    name: e,
                    message: t
                }) : window.ReactNativeWebView.postMessage(JSON.stringify({
                    name: e,
                    message: t
                }))
            } catch (e) {
                logger(e)
            }
        } else if (window.safari && !window.safari.id) {
            logger("message to safari native - " + e), logger(t);
            try {
                safari.extension.dispatchMessage(e, t)
            } catch (e) {
                logger(e)
            }
        } else try {
            "https://gcpstorage.getliner.com" === window.location.origin ? (logger("message to content script for relaying - " + e), logger(t), parent.postMessage(JSON.stringify({
                name: e,
                message: t
            }), "*")) : (logger("message to extension background - " + e), logger(t), browserPort.postMessage({
                name: e,
                message: t
            }))
        } catch (e) {
            logger(e)
        }
    }

    function getFavicon() {
        for (var e = document.getElementsByTagName("link"), t = [], n = 0; n < e.length; n++) {
            var i = e[n],
                o = i.getAttribute("rel"),
                r = i.getAttribute("sizes");
            if (o && o.toLowerCase().indexOf("icon") > -1) {
                var a = i.getAttribute("href");
                if (a)
                    if (-1 == a.toLowerCase().indexOf("https:") && -1 == a.toLowerCase().indexOf("http:") && 0 != a.indexOf("//")) {
                        var l = window.location.protocol + "//" + window.location.host;
                        if (window.location.port && (l += ":" + window.location.port), 0 == a.indexOf("/")) l += a;
                        else {
                            var s = window.location.pathname.split("/");
                            s.pop(), l += s.join("/") + "/" + a
                        }
                        t.push({
                            rel: o,
                            sizes: r,
                            href: l
                        })
                    } else if (0 == a.indexOf("//")) {
                    var c = window.location.protocol + a;
                    t.push({
                        rel: o,
                        sizes: r,
                        href: c
                    })
                } else t.push({
                    rel: o,
                    sizes: r,
                    href: a
                })
            }
        }
        if (0 == t.length) return "";
        var p = {};
        for (n = 0; n < t.length; n++) - 1 == t[n].rel.toLowerCase().indexOf("apple-touch-icon") || isNaN(parseInt(t[n].sizes)) || (p.sizes ? parseInt(p.sizes) < parseInt(t[n].sizes) && (p = t[n]) : p = t[n]);
        if (p.href) return p.href;
        for (n = 0; n < t.length; n++) - 1 != t[n].rel.toLowerCase().indexOf("apple-touch-icon") && (p = t[n]);
        if (p.href) return p.href;
        var d = {};
        for (n = 0; n < t.length; n++) isNaN(parseInt(t[n].sizes)) || (d.sizes ? parseInt(d.sizes) < parseInt(t[n].sizes) && (d = t[n]) : d = t[n]);
        return d.href ? d.href : t[0].href
    }

    function getUid() {
        var e = localStorage.getItem("uid") ? localStorage.getItem("uid") : createDeviceID();
        return localStorage.setItem("uid", e), e
    }

    function createDeviceID() {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
        })
    }

    function logger(e) {
        window.isProductionMode || console.log("LINER - ", e)
    }

    function setExtensionInstalledFlag() {
        e(document).ready(function() {
            if (-1 != window.location.host.indexOf("getliner.com") || "localhost:3000" == window.location.host) {
                var e = document.createElement("script");
                e.textContent = "var installedExtension = true;", (document.head || document.documentElement).appendChild(e), e.parentNode.removeChild(e)
            }
        })
    }

    function isLinerFBDialog() {
        return "www.facebook.com" == window.location.host && -1 != window.location.href.indexOf("app_id=" + linerFBAppId)
    }

    function isLinerLinkedInDialog() {
        return "www.linkedin.com" == window.location.host && -1 != window.location.href.indexOf("share.getliner.com")
    }

    function isLinerLineDialog() {
        return "social-plugins.line.me" == window.location.host && -1 != window.location.href.indexOf("share.getliner.com")
    }

    function isLinerShareDialog() {
        return !!(isLinerFBDialog() || isLinerLinkedInDialog() || isLinerLineDialog())
    }

    function removeConflictingElements() {
        ["snippet-pdf-button", "snippet_popover_container", "snippet_screenshot_edit", "snippet_screenshot", "snippet_sidebar_container", "diigo-video-capture", "diigo-video-capture-wrapper", "diigolet-notice", "diigolet-dlg-sticky", "diigolet-csm", "diigo-chrome-installed", "diigo-pdf", "diigolet-chrome-css"].forEach(e => {
            const t = document.getElementById(e),
                n = document.getElementsByClassName(e);
            t && t.remove();
            for (var i = 0; i < n.length; i++) n[i].remove()
        })
    }

    function initPDFUploadBtn() {
        0 == e("body .liner-upload-pdf-btn").length && messageToNative("GA_EVENT", {
            category: "extension",
            action: "upload_pdf_btn_shown",
            label: window.location.href
        }), e(".liner-upload-pdf-btn").remove(), e(".liner-upload-pdf-tooltip").remove(), e(".liner-upload-pdf-banner").remove(), e(".liner-upload-pdf-progress-bar").remove(), e("body").append(getUploadPDFBtn()), e(".liner-upload-pdf-btn").off().hover(function() {
            window.didSeePDFBanner && e(".liner-upload-pdf-tooltip").show(), messageToNative("GA_EVENT", {
                category: "extension",
                action: "upload_pdf_btn_hover",
                label: window.location.href
            })
        }, function() {
            window.didSeePDFBanner && e(".liner-upload-pdf-tooltip").hide()
        }).click(function() {
            if (e(this).hasClass("disabled")) return;
            e(this).addClass("disabled"), e(".liner-upload-pdf-progress-bar").animate({
                width: "80%"
            }, 3e3, function() {});
            let t = window.location.href;
            void 0 !== t && -1 !== t.indexOf("arxiv.org") && -1 === t.indexOf(".pdf") && (t += ".pdf"), fetch(t).then(e => e.blob()).then(e => {
                messageToNative("UPLOAD_PDF", {
                    pdf_blob_url: window.URL.createObjectURL(e),
                    url: t
                })
            }).catch(() => {
                messageToNative("UPLOAD_PDF_WITH_URL", {
                    url: t
                })
            }), messageToNative("GA_EVENT", {
                category: "extension",
                action: "upload_pdf_btn_click",
                label: window.location.href
            })
        }), window.didSeePDFBanner || e(".liner-upload-pdf-banner").show();
        const t = new URLSearchParams(window.location.search);
        if (!0 === (!0 === JSON.parse(t.get("uploadToLiner")))) {
            e(".liner-upload-pdf-btn").hide(), e("embed").hide(), e(".liner-upload-pdf-progress-bar").animate({
                width: "80%"
            }, 3e3, function() {});
            let t = window.location.href;
            void 0 !== t && -1 !== t.indexOf("arxiv.org") && -1 === t.indexOf(".pdf") && (t += ".pdf"), fetch(t).then(e => e.blob()).then(e => {
                messageToNative("UPLOAD_PDF", {
                    pdf_blob_url: window.URL.createObjectURL(e),
                    url: t
                })
            }).catch(() => {
                messageToNative("UPLOAD_PDF_WITH_URL", {
                    url: t
                })
            })
        }
    }
    if (isLinerShareDialog() && messageToNative("GET_SHARING_CONTENT", {}), removeConflictingElements(), e(document).ready(function() {
            removeConflictingElements()
        }), window.addEventListener("load", function(e) {
            removeConflictingElements(), setTimeout(function() {
                removeConflictingElements()
            }, 300)
        }), e(document).ready(function() {
            if (messageToNative("LINER_CORE_VERSION", {
                    version: window.linerCoreScriptVersion
                }), messageToNative("TAB_INFO", {
                    title: e("title").text().trim(),
                    url: window.location.href,
                    favicon: getFavicon()
                }), window.isLinerBrowser && (e("video").attr("webkit-playsinline", ""), e("video").attr("playsinline", "")), getDoShowKakaoTalk(), window.addEventListener("long-press", function(t) {
                    logger("long press"), logger(t);
                    try {
                        function n(t) {
                            return !("a" != t.tagName.toLowerCase() || !e(t).prop("href") || 0 != e(t).prop("href").trim().indexOf("http"))
                        }

                        function i(e) {
                            return !("img" != e.tagName.toLowerCase() || !e.src || "" == e.src.trim() || 0 != e.src.indexOf("http"))
                        }

                        function o(t) {
                            return -1 != e(t).css("background-image").indexOf('("') ? e(t).css("background-image").split('("')[1].split('")')[0].trim() : ""
                        }
                        let l = null;
                        if (n(t.target)) return void messageToNative("LONG_PRESS_LINK", {
                            url: e(t.target).prop("href").trim()
                        });
                        i(t.target) ? l = t.target.src.trim() : 0 == o(t.target).indexOf("http") && (l = o(t.target).trim());
                        const s = e(t.target).parents();
                        for (var r = 0; r < s.length; r++)
                            if (n(s[r])) return void messageToNative("LONG_PRESS_LINK", {
                                url: e(s[r]).prop("href").trim(),
                                image_url: l
                            });
                        var a = ["m.map.naver.com", "m.map.kakao.com"];
                        for (r = 0; r < a.length; r++)
                            if (window.location.host == a[r]) return;
                        if (i(t.target)) return void messageToNative("LONG_PRESS_IMAGE", {
                            image_url: t.target.src.trim()
                        });
                        if (0 == o(t.target).indexOf("http")) return void messageToNative("LONG_PRESS_IMAGE", {
                            image_url: l
                        })
                    } catch (e) {}
                }), isWebPDFFile() && (messageToNative("UPDATE_USER_INFO_IN_BACKGROUND", {}), messageToNative("INIT_PDF_UPLOAD_BTN", {})), window.searchResultElements = {}, window.searchResultLinks = [], isGoogleSERP()) {
                const t = e(".g .rc div>div>div>span");
                try {
                    for (let n = 0; n < t.length; n++) {
                        const i = e(t[n]);
                        if ("pdf" === i.text().toLowerCase()) {
                            let e = i.parent().parent().parent().children("a")[0].href;
                            void 0 !== e && -1 !== e.indexOf("arxiv.org") && -1 === e.indexOf(".pdf") && (e += ".pdf"), void 0 !== e && -1 !== e.indexOf(".pdf") && i.after(`\n                                <div class="liner-pdf-highlight-badge" data-url="${e}">\n                                    <div class="liner-pdf-highlight-badge-icon"></div>\n                                    <span>${localize("Highlight")}<span>\n                                    <div class="liner-pdf-highlight-badge-arrow"></div>\n                                </div>`)
                        }
                    }
                    e(".liner-pdf-highlight-badge").off().click(function(t) {
                        t.stopPropagation();
                        const n = e(this)[0].dataset.url;
                        window.open(`${n}?uploadToLiner=true`)
                    })
                } catch (e) {}
                if (showPickedByLINERInSERP()) {
                    const t = e(".g .rc div>div>span");
                    try {
                        for (let n = 0; n < t.length; n++) {
                            const i = e(t[n]);
                            if (i.height() > 0) {
                                const e = i.parent().parent().parent();
                                if (void 0 !== e.children("div").children("a")[0]) {
                                    const t = e.children("div").children("a")[0].href;
                                    void 0 !== t && (window.searchResultElements[t] = e, window.searchResultLinks.push(t))
                                }
                            }
                        }
                    } catch (e) {}
                    window.searchResultLinks.length > 0 && messageToNative("LKS_GET_DOCUMENTS", {
                        urls: window.searchResultLinks
                    })
                }
            } else if (isGoogleScholarSERP()) {
                const t = e(".gs_or .gs_ggs a");
                try {
                    for (let n = 0; n < t.length; n++) {
                        const i = e(t[n]);
                        let o = e(t[n])[0].href;
                        void 0 !== o && -1 !== o.indexOf("arxiv.org") && -1 === o.indexOf(".pdf") && (o += ".pdf"), i.css("display", "inline");
                        const r = i.width() + 5;
                        if (i.css("display", "block"), void 0 !== o && -1 !== o.indexOf(".pdf") && (i.after(`\n                            <div class="liner-pdf-highlight-badge liner-pdf-highlight-badge-scholoar" data-url="${o}" style="left: ${r}px;">\n                                <div class="liner-pdf-highlight-badge-icon"></div>\n                                <span>${localize("Highlight")}<span>\n                                <div class="liner-pdf-highlight-badge-arrow"></div>\n                            </div>`), showPickedByLINERInSERP())) {
                            const e = i.parent().parent().parent().parent().children(".gs_ri");
                            window.searchResultElements[o] = e, window.searchResultLinks.push(o)
                        }
                    }
                    e(".liner-pdf-highlight-badge").off().click(function(t) {
                        t.stopPropagation();
                        const n = e(this)[0].dataset.url;
                        window.open(`${n}?uploadToLiner=true`)
                    }), window.searchResultLinks.length > 0 && messageToNative("LKS_GET_DOCUMENTS", {
                        urls: window.searchResultLinks
                    })
                } catch (e) {}
            }
        }), setExtensionInstalledFlag(), messageToNative("GA_PAGEVIEW", {}), isDisabledSite()) messageToNative("CHANGE_TOOLBAR_ITEM", {
        type: "disabled",
        is_web_pdf: isWebPDFFile() || isLinerPSPDFKit()
    }), "getliner.com" == window.location.host && e.get("https://getliner.com/auth/cookie", function(e) {
        messageToNative("LOGIN", {
            cookie: e.cookie
        })
    }).fail(function() {}), -1 != window.location.href.indexOf("/guide/safari") && e(document).ready(function() {
        window.location.hash = "#step3", messageToNative("NEW_TAB", {
            url: "https://getliner.com/guide/browser-extension"
        })
    });
    else {
        messageToNative("CHANGE_TOOLBAR_ITEM", {
            type: "enabled"
        });
        var doc, linerVar = {
                user: {},
                colors: [{
                    name: "yellow",
                    rgb: "rgb(255, 255, 141)",
                    rgb2: "rgb(255, 238, 141)",
                    rgb3: "rgb(255,253,131)",
                    hex: "#ffff8d",
                    hex2: "#ffe78d"
                }, {
                    name: "green",
                    rgb: "rgb(165, 242, 233)",
                    rgb2: "rgb(127, 230, 218)",
                    rgb3: "rgb(166,255,234)",
                    hex: "#a5f2e9",
                    hex2: "#7fe5da"
                }, {
                    name: "orange",
                    rgb: "rgb(255, 213, 200)",
                    rgb2: "rgb(255, 198, 180)",
                    rgb3: "rgb(255,199,186)",
                    hex: "#ffd5c8",
                    hex2: "#ffc6b4"
                }, {
                    name: "violet",
                    rgb: "rgb(217, 195, 255)",
                    rgb2: "rgb(206, 177, 255)",
                    rgb3: "rgb(217,195,255)",
                    hex: "#d9c3ff",
                    hex2: "#ceb1ff"
                }, {
                    name: "blue",
                    rgb: "rgb(167, 225, 251)",
                    rgb2: "rgb(141, 213, 247)",
                    rgb3: "rgb(184,220,255)",
                    hex: "#a7e1fb",
                    hex2: "#8bd5f6"
                }, {
                    name: "pink",
                    rgb: "rgb(254, 202, 227)",
                    rgb2: "rgb(255, 183, 218)",
                    rgb3: "rgb(255,208,239)",
                    hex: "#fecae3",
                    hex2: "#ffb7da"
                }],
                colorIndex: 0,
                highlightIDs: [],
                showMiniTooltip: null,
                hideMiniTooltip: null,
                selectedHighlight: null,
                tooltipTimer: null,
                commentTimer: null,
                commentingHighlightId: null,
                didSeeLoginMessage: {},
                selectionChangeTimer: null,
                lastUrl: null
            },
            initialComment = "",
            lksReadStatus = 0,
            lksReadDuration = new Date,
            lksCopyEvents = [],
            highlightVar = {
                comments: [],
                new_highlights: []
            };

        function injectUIComponents() {
            var t = document.createElement("link");
            t.href = "https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Noto+Sans+JP:400,500,700|Noto+Sans+KR:400,500,700|Roboto:400,500,700&display=swap", t.rel = "stylesheet", (document.body || document.documentElement).appendChild(t), e(".liner-mini-button").remove(), e(".liner-mini-tooltip").remove(), e(".liner-tooltip-wrap").remove(), e(".liner-comment-box").remove(), e(".liner-comment-icon").remove(), e(".liner-upgrade-comment-box").remove(), e(".liner-upgrade-highlight-box").remove(), e(".liner-mobile-comment-box").remove(), doc = getSimplifiedDocument(), e("html").append(getLinerMiniBtn()), e("html").append(getLinerTooltip()), e("html").append(getCommentBoxHtml()), e("html").append(getUpgradeToCommentHTML()), e("html").append(getUpgradeToHighlightHTML()), e("html").append(getMobileCommentBoxHtml()), window.isLinerAPIMode && e(".liner-tooltip-share").css("opacity", "0.4").css("cursor", "auto")
        }

        function getPageImage() {
            return e("meta[property='og:image']").length > 0 && e("meta[property='og:image']")[0].content ? e("meta[property='og:image']")[0].content : e("meta[property='twitter:image']").length > 0 && e("meta[property='twitter:image']")[0].content ? e("meta[property='twitter:image']")[0].content : ""
        }

        function touchStartAction(e) {
            mouseDownAction(e)
        }

        function mouseDownAction(t) {
            const n = t.target;
            if (!e(".liner-comment-box").is(":visible") || e(n).hasClass("liner-comment-input") || e(n).hasClass("liner-comment-icon") || e(n).hasClass("liner-comment-bubble") || (hideCommentBox(), e(".liner-upgrade-comment-box").fadeOut(100)), e(".liner-upgrade-highlight-box").is(":visible") && (e(n).hasClass("liner-upgrade-highlight-box") || e(n).hasClass("liner-upgrade-highlight-header-border") || e(n).hasClass("liner-upgrade-highlight-title-label") || e(n).hasClass("liner-upgrade-highlight-desc-label") || e(".liner-upgrade-highlight-box").fadeOut(100)), e(".liner-upgrade-comment-box").is(":visible") && (e(n).hasClass("liner-upgrade-comment-box") || e(n).hasClass("liner-upgrade-comment-header-border") || e(n).hasClass("liner-upgrade-comment-title-label") || e(n).hasClass("liner-upgrade-comment-desc-label") || e(".liner-upgrade-comment-box").fadeOut(100)), e(n).hasClass("liner-save-button")) {
                if (e(".liner-mini-button").hide(), e(".liner-mini-tooltip").hide(), isNetworkConnected() || (logger("network is not connected"), showNetworkErrorAlert()), e(n).hasClass("liner-mini-color-circle")) {
                    // if (e(n).hasClass("liner-color-lock")) {
                    //     window.isLinerBrowser ? messageToNative("SHOW_UPGRADE", {
                    //         type: "color_limit"
                    //     }) : messageToNative("NEW_TAB", {
                    //         url: "https://getliner.com/upgrade"
                    //     });
                    //     var o = e(n).attr("class").toString();
                    //     for (i = 0; i < linerVar.colors.length; i++)
                    //         if (-1 != o.indexOf(linerVar.colors[i].name)) {
                    //             messageToNative("GA_EVENT", {
                    //                 category: window.isLinerBrowser ? "browser" : "extension",
                    //                 action: "upgrade_to_change_color_shown",
                    //                 label: ""
                    //             }), messageToNative("BRAZE_EVENT", {
                    //                 name: "upgrade_to_change_color_shown"
                    //             });
                    //             break
                    //         } return void messageToNative("AMPLITUDE_EVENT", {
                    //         event_name: "trigger_basic_plan_limit",
                    //         properties: {
                    //             context: "highlight_color"
                    //         }
                    //     })
                    // }
                    o = e(n).attr("class").toString();
                    for (i = 0; i < linerVar.colors.length; i++)
                        if (-1 != o.indexOf(linerVar.colors[i].name)) {
                            linerVar.colorIndex = i;
                            break
                        }
                } else e(n).hasClass("liner-mb") && (linerVar.colorIndex = 0);
                if (clearTimeout(linerVar.showMiniTooltip), 0 == linerVar.user.premium && !isNaN(parseInt(linerVar.user.highlight_limit)) && getDistinctLighterIds().length >= parseInt(linerVar.user.highlight_limit)) return void(window.isLinerBrowser ? messageToNative("SHOW_UPGRADE", {
                    type: "highlight_count_limit"
                }) : showUpgradeToHighlight(t));
                processHighlight(), 0 != e(".liner-popover").length || isLINERGuidePage() || !0 === window.doNotShowPopover || messageToNative("SHOW_POPOVER", {})
            }
            if (e(".liner-mini-button").is(":visible")) return e(".liner-mini-button").hide(), void e(".liner-mini-tooltip").hide()
        }

        function selectionChangeAction(t) {
            e(".liner-upgrade-highlight-box").is(":visible") || setTimeout(function() {
                if (document.getSelection().rangeCount > 0 && isTextSelected() && !isEditableElement(t.target)) {
                    try {
                        var e = document.getSelection().anchorNode;
                        if (null != e && "liner-comment-area" == e.className) return
                    } catch (e) {}
                    showMiniButton()
                }
            }, 5)
        }

        function setLinerUIEvents() {
            function t(t) {
                1 != window.ignoreClickEvent ? (e(".liner-tooltip-wrap").is(":visible") && (e(".liner-tooltip-wrap").hide(), e(".liner-tooltip-menu").show(), e(".liner-tooltip-arrow").removeClass("liner-share-opened"), e(".liner-share-menu").hide()), e("iframe.liner-popover.liner-popover-tag").hide()) : window.ignoreClickEvent = !1
            }
            e("#component-wrapper").click(function(e) {
                logger("document click for Twitter"), selectionChangeAction(e), t(e)
            }), e(document).click(function(e) {
                logger("document click"), selectionChangeAction(e), t(e)
            }), e(".liner-tooltip-color").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-tooltip-menu").hide(), e(".liner-color-picker").show(), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "edit_tooltip_change_color",
                    label: ""
                })
            }), e(".liner-color-circle").off().click(function(t) {
                t.preventDefault(), isNetworkConnected() || showNetworkErrorAlert();
                var n = e(t.target).attr("class").toString();
                for (o = 0; o < linerVar.colors.length; o++)
                    if (-1 != n.indexOf(linerVar.colors[o].name)) {
                        var i = linerVar.colors[o].name;
                        if (e(t.target).hasClass("liner-color-lock")) return window.isLinerBrowser ? messageToNative("SHOW_UPGRADE", {
                            type: "color_limit"
                        }) : messageToNative("NEW_TAB", {
                            url: "https://getliner.com/upgrade"
                        }), void messageToNative("GA_EVENT", {
                            category: window.isLinerBrowser ? "browser" : "extension",
                            action: "highlight_" + i + "_locked",
                            label: ""
                        });
                        linerVar.colorIndex = o, removeColorClassFromTooltipBtn(), e(".liner-tooltip-color").addClass(i);
                        break
                    } Lighter.detectSpanColor(linerVar.selectedHighlight), Lighter.doChangeStyle({
                    backgroundColor: linerVar.colors[linerVar.colorIndex].hex
                });
                for (var o = 0; o < highlightVar.comments.length; o++)
                    if (highlightVar.comments[o].styleItemId == getDataIdFromSelectedHighlight()) {
                        highlightVar.comments[o].styleItemColor = linerVar.colors[linerVar.colorIndex].hex;
                        break
                    } messageToNative("UPDATE_HIGHLIGHT", {
                    highlight_id: getDataIdFromSelectedHighlight(),
                    color: linerVar.colors[linerVar.colorIndex].hex
                }), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "highlight_" + linerVar.colors[linerVar.colorIndex].name,
                    label: ""
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "change_color_of_highlight",
                    properties: {
                        theme_type: "basic",
                        color: linerVar.colors[linerVar.colorIndex].hex,
                        label: "",
                        text_length: currentHighlightString().length
                    }
                }), hideTooltip(t), window.isLinerAPIMode && saveHighlightVarToStorage()
            }), e(".liner-tooltip-comment").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-tooltip-wrap").is(":visible") && e(".liner-tooltip-wrap").hide(), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "edit_tooltip_comment",
                    label: ""
                });
                var n = 1 == linerVar.user.premium;
                if (!n) {
                    for (var i = 0, o = 0; o < highlightVar.comments.length; o++)
                        if ("" != highlightVar.comments[o].annotation.content && (i += 1), getDataIdFromSelectedHighlight() == highlightVar.comments[o].styleItemId && "" != highlightVar.comments[o].annotation.content) {
                            n = !0;
                            break
                        } i < 3 && (n = !0)
                }
                n ? showCommentBox(t) : window.isLinerBrowser ? messageToNative("SHOW_UPGRADE", {
                    type: "comment_count_limit"
                }) : showUpgradeToCommentBox(t)
            }), e(".liner-tooltip-share").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                window.isLinerAPIMode || (window.isLinerBrowser ? (e(".liner-tooltip-wrap").is(":visible") && e(".liner-tooltip-wrap").hide(), messageToNative("SHARE_HIGHLIGHT", {
                    highlight: currentHighlightString(),
                    url: shareHost + "/" + highlightVar.share_id
                })) : (e(".liner-tooltip-menu").hide(), e(".liner-tooltip-arrow").addClass("liner-share-opened"), e(".liner-share-menu").show(), setShareMethods()), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "share_highlight_open",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_open"
                }))
            }), e(".liner-tooltip-undo").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                isNetworkConnected() || showNetworkErrorAlert(), Lighter.detectSpanColor(linerVar.selectedHighlight), Lighter.doRemoveStyle(), e("#lgt" + getDataIdFromSelectedHighlight()).remove(), messageToNative("UPDATE_STYLE", {
                    style_items: Lighter.export(),
                    image_url: getPageImage(),
                    doc: doc
                }), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "edit_tooltip_delete_highlight",
                    label: ""
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "delete_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length
                    }
                });
                for (var n = [], i = 0; i < linerVar.highlightIDs.length; i++) getDataIdFromSelectedHighlight() != linerVar.highlightIDs[i] && n.push(linerVar.highlightIDs[i]);
                linerVar.highlightIDs = n, hideTooltip(t), resetAllComments();
                for (i = 0; i < highlightVar.comments.length; i++)
                    if (highlightVar.comments[i].styleItemId == getDataIdFromSelectedHighlight()) {
                        highlightVar.comments.splice(i, 1);
                        break
                    } window.isLinerAPIMode && saveHighlightVarToStorage()
            }), e(".liner-comment-input").on("input", function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                updateCommentByDataId(linerVar.commentingHighlightId, e(".liner-comment-input").val().trim()), resetAllComments(), clearTimeout(linerVar.commentTimer), linerVar.commentTimer = setTimeout(function() {
                    updateComment("desktop")
                }, 3e3), window.isLinerAPIMode && saveHighlightVarToStorage()
            }), e(".liner-mobile-comment-box .liner-comment-save").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                updateCommentByDataId(linerVar.commentingHighlightId, e(".liner-mobile-comment-box .liner-comment-textarea").val().trim()), resetAllComments(), updateComment("mobile"), e(".liner-mobile-comment-box").css("top", "110%"), e(".liner-comment-textarea").css("max-height", ""), setTimeout(function() {
                    e(".liner-mobile-comment-box").removeClass("liner-show-comment-box"), e(".liner-comment-textarea").height(e(".liner-comment-textarea").attr("full-height")), e(".liner-comment-textarea").removeAttr("full-height")
                }, 210), window.isLinerAPIMode && saveHighlightVarToStorage()
            }), e(".liner-comment-comment-container").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-comment-textarea").focus()
            }), e(".liner-upgrade-comment-box .liner-upgrade-comment-close").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-upgrade-comment-box").fadeOut(100)
            }), e(".liner-upgrade-comment-box .liner-upgrade-comment-upgrade").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_upgrade_flow_entry",
                    properties: {
                        wording: "Upgrade",
                        entry: "be"
                    }
                })
            }), e(".liner-upgrade-highlight-box .liner-upgrade-highlight-close").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-upgrade-highlight-box").fadeOut(100)
            }), e(".liner-upgrade-highlight-box .liner-upgrade-highlight-upgrade").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("AMPLITUDE_EVENT", {
                    event_name: "click_upgrade_flow_entry",
                    properties: {
                        wording: "Upgrade",
                        entry: "be"
                    }
                })
            })
        }

        function setShareMethods() {
            messageToNative("SAVE_SHARING_CONTENT", {
                content: currentHighlightString()
            }), e(".liner-share-facebook").attr("href", fbShareDialogUrl(shareHost + "/" + highlightVar.share_id)), e(".liner-share-messenger").attr("href", fbSendDialogUrl(shareHost + "/" + highlightVar.share_id)), e(".liner-share-twitter").attr("href", twitterShareDialogUrl(shareHost + "/" + highlightVar.share_id, currentHighlightString())), e(".liner-share-linkedin").attr("href", linkedInShareDialogUrl(shareHost + "/" + highlightVar.share_id)), e(".liner-share-line").attr("href", lineShareDialogUrl(shareHost + "/" + highlightVar.share_id)), e(".liner-share-mail").attr("href", mailDialogUrl(shareHost + "/" + highlightVar.share_id, currentHighlightString(), getCommentByDataId(getDataIdFromSelectedHighlight()))), e(".liner-share-facebook").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_facebook",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_facebook"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "facebook"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "facebook"
                    }
                })
            }), e(".liner-share-messenger").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_messenger",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_messenger"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "messenger"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "facebook_messenger"
                    }
                })
            }), e(".liner-share-twitter").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_twitter",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_twitter"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "twitter"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "twitter"
                    }
                })
            }), e(".liner-share-linkedin").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_linkedin",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_linkedin"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "linkedin"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "linkedin"
                    }
                })
            }), e(".liner-share-line").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_line",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_line"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "line"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "line"
                    }
                })
            }), e(".liner-share-kakaotalk").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                window.open(kakaoShareDialogUrl(shareHost + "/" + highlightVar.share_id, currentHighlightString()), "PopupWin", "width=460,height=660"), messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_kakaotalk",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_kakaotalk"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "kakaotalk"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "kakaotalk"
                    }
                })
            }), e(".liner-share-mail").off().click(function(e) {
                try {
                    e.stopPropagation()
                } catch (e) {}
                messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_mail",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_mail"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "mail"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "mail"
                    }
                })
            }), doShowKakaoTalk || e(".liner-share-kakaotalk").remove(), e(".liner-share-menu .liner-share-method.liner-share-copy").off().click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                messageToNative("COPY_TO_CLIPBOARD", {
                    content: currentHighlightString() + "\n\n" + shareHost + "/" + highlightVar.share_id
                }), e(".liner-share-menu .liner-share-method.liner-share-copy").fadeOut(200, function() {
                    e(".liner-share-menu .liner-share-method.liner-share-copied").fadeIn(200, function() {
                        setTimeout(function() {
                            e(".liner-share-menu .liner-share-method.liner-share-copied").fadeOut(200, function() {
                                e(".liner-share-menu .liner-share-method.liner-share-copy").fadeIn(200)
                            })
                        }, 3e3)
                    })
                }), messageToNative("GA_EVENT", {
                    category: "extension",
                    action: "share_highlight_copy",
                    label: ""
                }), messageToNative("BRAZE_EVENT", {
                    name: "share_highlight_copy"
                }), messageToNative("LKS_EVENT", {
                    type: "highlight_share",
                    url: window.location.href,
                    phrase: getLighterPhrase(getDataIdFromSelectedHighlight()),
                    share_type: "copy"
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "share_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "complete_share_my_highlight",
                    properties: {
                        theme_type: "basic",
                        color: currentHighlightColor(),
                        label: "",
                        text_length: currentHighlightString().length,
                        share_type: "copy"
                    }
                })
            })
        }

        function getHighlightColorByName(e, t) {
            for (var n = 0; n < linerVar.colors.length; n++)
                if (linerVar.colors[n].name == e) return linerVar.colors[n][t] ? linerVar.colors[n][t] : linerVar.colors[n].hex;
            return linerVar.colors[linerVar.colorIndex].hex
        }

        function getSelectedHighlightColorName() {
            for (var e = 0; e < highlightVar.comments.length; e++)
                if (getDataIdFromSelectedHighlight() == highlightVar.comments[e].styleItemId)
                    for (var t = 0; t < linerVar.colors.length; t++)
                        if (highlightVar.comments[e].styleItemColor == linerVar.colors[t].hex) return linerVar.colors[t].name;
            return linerVar.colors[linerVar.colorIndex].name
        }

        function currentHighlightObject(e) {
            for (var t = 0; t < highlightVar.comments.length; t++)
                if (void 0 !== e) {
                    if (e == highlightVar.comments[t].styleItemId) return highlightVar.comments[t]
                } else if (getDataIdFromSelectedHighlight() == highlightVar.comments[t].styleItemId) return highlightVar.comments[t];
            return {}
        }

        function currentHighlightColor(e) {
            const t = currentHighlightObject(e).styleItemColor;
            return void 0 !== t ? t : "#ffff8d"
        }

        function currentHighlightString(e) {
            const t = currentHighlightObject(e).content;
            return void 0 !== t ? t : ""
        }

        function getLighterElement(t) {
            var n = t;
            try {
                "SPAN" == e(t).parent().context.tagName && (n = e(t).parent()[0])
            } catch (e) {
                n = t
            }
            return n
        }

        function getDistinctLighterIds() {
            let t = [];
            // for (var n = 0; n < e("lighter").length; n++) try {
            //     const i = e(e("lighter")[n]).attr("data-id").split("lgt")[1]; - 1 == t.indexOf(i) && t.push(i)
            // } catch (e) {}
            // console.log(t)
            return t
        }

        function setLighterEvents() {
            e("lighter").length > 0 && (logger("lighter exists"), e("lighter").off(), e("lighter").mouseenter(function(e) {
                linerVar.selectedHighlight = e, changeSelectedHighlightColorToHoverColor()
            }).mouseleave(function(e) {
                changeAllHighlightsToNormalHighlightColor()
            }), e("lighter").click(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-comment-box").is(":visible") ? hideCommentBox() : e(".liner-mini-tooltip").is(":visible") || e(".liner-mini-button").is(":visible") ? (logger("hide mini tooltip and mini button"), e(".liner-mini-tooltip").hide(), e(".liner-mini-button").hide()) : e(".liner-color-picker").is(":visible") ? (logger("hide color change tooltip"), e(".liner-color-picker").hide(), e(".liner-tootip-arrow").hide()) : e(".liner-upgrade-comment-box").is(":visible") ? (logger("hide upgrade to comment box"), e(".liner-upgrade-comment-box").fadeOut(100)) : e(".liner-upgrade-highlight-box").is(":visible") && (logger("hide upgrade to highlight box"), e(".liner-upgrade-highlight-box").fadeOut(100)), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "click_highlight",
                    label: ""
                }), setTooltipColor(e(getLighterElement(t.target)).css("background-color").toString()), showTooltip(t.pageX - e(".liner-tooltip-wrap").width() / 2, t.pageY - (e(".liner-tooltip-wrap").height() + 8))
            }))
        }

        function showTooltip(t, n) {
            if (clearTimeout(linerVar.tooltipTimer), t < 10 ? t = 10 : t + e(".liner-tooltip-wrap").width() > window.innerWidth - 10 && (t = window.innerWidth - 10 - e(".liner-tooltip-wrap").width()), e(".liner-tooltip-wrap").css("left", t), e(".liner-tooltip-wrap").css("top", n), 0 == linerVar.user.premium)
                for (var i = linerVar.user.color_limit; i < linerVar.colors.length; i++) {
                    var o = linerVar.colors[i].name;
                    e(".liner-color-" + o).addClass("liner-color-lock")
                }
            e(".liner-tooltip-menu").is(":visible") || e(".liner-tooltip-menu").show(), e(".liner-tooltip-arrow").removeClass("liner-share-opened"), e(".liner-share-menu").hide(), e(".liner-tooltip-wrap").fadeIn(100), e(".liner-color-picker").is(":visible") && (e(".liner-color-picker").hide(), e(".liner-tootip-arrow").hide()), messageToNative("GA_EVENT", {
                category: window.isLinerBrowser ? "browser" : "extension",
                action: "edit_tooltip_shown",
                label: ""
            })
        }

        function processHighlight() {
            if (window.isLinerBrowser || window.isLinerAPIMode || !(!window.safari || window.safari && window.safari.id) || !browser || browser.runtime.id) {
                var t = document.getSelection().getRangeAt(0).toString().trim();
                try {
                    const n = getPhrase(),
                        i = document.getSelection(),
                        o = i.getRangeAt(0).getClientRects()[0],
                        r = parseInt(window.getComputedStyle(i.anchorNode.parentElement).fontSize),
                        a = window.getComputedStyle(i.anchorNode.parentElement).fontWeight,
                        l = window.getComputedStyle(i.anchorNode.parentElement).fontStyle;
                    let s = -1;
                    document.body.scrollHeight > 0 && (s = (window.scrollY + o.top) / document.body.scrollHeight), messageToNative("LKS_EVENT", {
                        type: "highlight_create",
                        url: window.location.href,
                        title: e("title").text().trim(),
                        phrase: n,
                        highlight: t,
                        color: linerVar.colors[linerVar.colorIndex].hex,
                        rel_height: s || -1,
                        font_size: r,
                        font_weight: a,
                        font_style: l
                    }), window.isLinerBrowser || isLINERGuidePage() || messageToNative("LKS_GET_RECOMMENDATIONS_BY_HIGHLIGHT", {
                        url: window.location.href,
                        title: e("title").text().trim().substring(0, 100),
                        phrase: t.substring(0, 1e3),
                        is_recommendations_showing: !!window.isRecommendationShowing
                    })
                } catch (e) {}
                var n = Lighter.doHighlight(linerVar.colors[linerVar.colorIndex].hex);
                if (linerVar.highlightIDs.push(n), messageToNative("UPDATE_STYLE", {
                        style_items: Lighter.export(),
                        image_url: getPageImage(),
                        doc: doc
                    }), 2 != lksReadStatus) {
                    lksReadStatus = 1;
                    for (var i = 0; i < lksCopyEvents.length; i++) messageToNative("LKS_EVENT", lksCopyEvents[i]);
                    lksCopyEvents = []
                }
                var o = {
                    styleItemId: n,
                    styleItemColor: linerVar.colors[linerVar.colorIndex].hex,
                    content: t,
                    annotation: {
                        content: "",
                        lastUpdatedTime: null
                    },
                    name: linerVar.user.name,
                    photo_url: linerVar.user.image
                };
                highlightVar.comments.push(o), highlightVar.new_highlights.push(o), setLighterEvents(), messageToNative("BRAZE_EVENT", {
                    name: window.isLinerBrowser ? "lb_highlight" : "web_highlight"
                }), messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "highlight_" + linerVar.colors[linerVar.colorIndex].name,
                    label: ""
                }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                    type: "add",
                    property: "highlight_count",
                    value: 1
                }), messageToNative("AMPLITUDE_EVENT", {
                    event_name: "make_highlight",
                    properties: {
                        theme_type: "basic",
                        color: linerVar.colors[linerVar.colorIndex].hex,
                        label: "",
                        text_length: t.length
                    }
                }), window.isLinerBrowser ? 1 == highlightVar.new_highlights.length && isLINERMobileGuidePage() && (evaluateScript("linerOnboardingEvent('mob_finish_onb_highlight');"), evaluateScript("linerOnboardingEvent('mob_onb_comment');"), e(".liner-mobile.liner-highlight-guide").remove(), e(".liner-mobile.liner-comment-guide").show()) : 1 == highlightVar.new_highlights.length && (isLINERGuidePage() ? (evaluateScript("linerOnboardingEvent('web_finish_guide_highlight');"), evaluateScript("linerOnboardingEvent('web_init_guide_comment');")) : messageToNative("BRAZE_EVENT", {
                    name: "web_finish_guide_highlight"
                }), saveFinishedOngoingOnboardings("web_finish_guide_highlight")), window.isLinerAPIMode && saveHighlightVarToStorage()
            }
        }

        function updateCommentByDataId(e, t) {
            logger("update " + e + ' comment with new comment "' + t + '"');
            for (var n = 0; n < highlightVar.comments.length; n++)
                if (highlightVar.comments[n].styleItemId == e) {
                    highlightVar.comments[n].annotation.content = t;
                    break
                }
        }

        function hideTooltip(t) {
            logger("hide tool tip"), clearTimeout(linerVar.tooltipTimer), e(".liner-tooltip-wrap").is(":visible") && (linerVar.tooltipTimer = setTimeout(function() {
                e(".liner-tooltip-wrap").fadeOut(100), e(".liner-color-picker").is(":visible") && (e(".liner-color-picker").hide(), e(".liner-tootip-arrow").hide())
            }, 100))
        }

        function changeSelectedHighlightColorToHoverColor() {
            logger("change selected highlight color to hover color");
            for (var t = e("lighter"), n = 0; n < t.length; n++)
                if (e(t[n]).attr("data-id") == "lgt" + getDataIdFromSelectedHighlight())
                    for (var i = 0; i < linerVar.colors.length; i++) e(t[n]).css("background-color") == linerVar.colors[i].rgb && e(t[n]).css("background-color", linerVar.colors[i].rgb2)
        }

        function changeAllHighlightsToNormalHighlightColor() {
            logger("change all highlight colors to normal color");
            for (var t = e("lighter"), n = 0; n < t.length; n++)
                for (var i = 0; i < linerVar.colors.length; i++) e(t[n]).css("background-color") == linerVar.colors[i].rgb2 && e(t[n]).css("background-color", linerVar.colors[i].rgb)
        }

        function setTooltipColor(t) {
            for (i = 0; i < linerVar.colors.length; i++)
                if (-1 != t.indexOf(linerVar.colors[i].rgb2) || -1 != t.indexOf(linerVar.colors[i].rgb)) {
                    removeColorClassFromTooltipBtn(), e(".liner-tooltip-color").addClass(linerVar.colors[i].name);
                    break
                }
        }

        function removeColorClassFromTooltipBtn() {
            for (var t = 0; t < linerVar.colors.length; t++) e(".liner-tooltip-color").removeClass(linerVar.colors[t].name)
        }

        function getDataIdFromSelectedHighlight() {
            try {
                return e(linerVar.selectedHighlight.target).attr("data-id").split("lgt")[1]
            } catch (e) {
                logger(e)
            }
            return ""
        }

        function showMiniButton() {
            logger("show mini button");
            var t = document.getSelection(),
                n = t.getRangeAt(0).getClientRects(),
                i = n[0],
                o = n[n.length - 1],
                r = o.x + o.width + 5,
                a = parseInt(window.scrollY + o.y + 21.5);
            window.isLinerBrowser ? (r = o.x + o.width + 15, a = window.scrollY + o.y + o.height + 15, r + e(".liner-mini-button .liner-save-button").width() > window.innerWidth - 10 && (r = window.innerWidth - 10 - e(".liner-mini-button .liner-save-button").width(), a += 15)) : window.isWhaleBrowser && (r += 35);
            try {
                var l = t.anchorNode.compareDocumentPosition(t.focusNode);
                (!l && t.anchorOffset > t.focusOffset || l === Node.DOCUMENT_POSITION_PRECEDING) && (window.isLinerBrowser || (r = i.x - e(".liner-mini-button .liner-mb").width() - 5, a = window.scrollY + i.y - e(".liner-mini-button .liner-mb").height() - 5), window.isLinerBrowser || window.isWhaleBrowser && (r += 45, a -= 2))
            } catch (e) {}
            logger("position x - " + r), logger("position y - " + a), e(".liner-mini-button").css("left", r), e(".liner-mini-button").css("top", a), e(".liner-mini-button").show(), e(".liner-mini-button").off().hover(function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-mini-tooltip").css("left", r), e(".liner-mini-tooltip").css("top", a), linerVar.hideMiniTooltip && clearTimeout(linerVar.hideMiniTooltip), e(".liner-mini-tooltp").is(":visible") ? clearTimeout(linerVar.hideMiniTooltip) : linerVar.showMiniTooltip = setTimeout(function() {
                    if (0 == linerVar.user.premium)
                        for (var t = linerVar.user.color_limit; t < linerVar.colors.length; t++) {
                            var n = linerVar.colors[t].name;
                            e(".liner-color-" + n).addClass("liner-color-lock")
                        }
                    messageToNative("GA_EVENT", {
                        category: window.isLinerBrowser ? "browser" : "extension",
                        action: "highlight_tooltip_shown",
                        label: ""
                    }), e(".liner-mini-tooltip.liner-desktop").fadeIn(100)
                }, 300)
            }, function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
                e(".liner-mini-tooltip").off().hover(function(e) {
                    try {
                        e.stopPropagation()
                    } catch (e) {}
                    linerVar.hideMiniTooltip && clearTimeout(linerVar.hideMiniTooltip)
                }, function(t) {
                    try {
                        t.stopPropagation()
                    } catch (t) {}
                    e(".liner-mini-tooltp").is(":visible") ? clearTimeout(linerVar.hideMiniTooltip) : linerVar.hideMiniTooltip = setTimeout(function() {
                        e(".liner-mini-tooltip").fadeOut(100)
                    }, 100)
                }), linerVar.hideMiniTooltip = setTimeout(function() {
                    e(".liner-mini-tooltip").fadeOut(100)
                }, 300)
            })
        }

        function appendCommentIconToLighterTag(t, n, i) {
            if (0 == i) {
                if (0 == e("#lgt" + n).length) {
                    e(t).after(getCommentIconHTMLWithDataId(n));
                    try {
                        var o = e(t).html();
                        if ("" == o.split("<br")[o.split("<br").length - 1].split(">")[1].trim()) {
                            for (var r = "", a = 0; a < o.split("<br").length - 1; a++) r += o.split("<br")[a];
                            e(t).html(r), e("#lgt" + n).after("<br>")
                        }
                    } catch (e) {
                        logger(e)
                    }
                }
                e("#lgt" + n).show(), e("#lgt" + n).off().click(function(t) {
                    try {
                        t.stopPropagation()
                    } catch (t) {}
                    e(".liner-tooltip-wrap").is(":visible") && (logger("hide tooltip"), e(".liner-tooltip-wrap").hide()), showCommentBox(t)
                })
            } else e("#lgt" + n).hide()
        }

        function resetAllComments() {
            logger("reset all comments");
            for (var t = 0; t < highlightVar.comments.length; t++) {
                var n = e('lighter[data-id="lgt' + highlightVar.comments[t].styleItemId + '"]'),
                    i = n[0];
                try {
                    for (var o = 0; o < n.length; o++) "lighter" != n[o].parentNode.tagName.toLowerCase() && (i = n[o])
                } catch (e) {}
                "" != highlightVar.comments[t].annotation.content ? appendCommentIconToLighterTag(i, highlightVar.comments[t].styleItemId, 0) : appendCommentIconToLighterTag(i, highlightVar.comments[t].styleItemId, 1)
            }
        }

        function getCommentByDataId(e) {
            for (var t = 0; t < highlightVar.comments.length; t++)
                if (highlightVar.comments[t].styleItemId == e) return unescape(highlightVar.comments[t].annotation.content).trim();
            return ""
        }

        function showUpgradeToHighlight(t) {
            var n = t.pageX,
                i = t.pageY;
            e(".liner-upgrade-highlight-box").css("left", n), e(".liner-upgrade-highlight-box").css("top", i), e(".liner-upgrade-highlight-box").show(), messageToNative("GA_EVENT", {
                category: window.isLinerBrowser ? "browser" : "extension",
                action: "upgrade_to_highlight_box_shown",
                label: ""
            }), messageToNative("BRAZE_EVENT", {
                name: "upgrade_to_highlight_box_shown"
            }), messageToNative("AMPLITUDE_EVENT", {
                event_name: "trigger_basic_plan_limit",
                properties: {
                    context: "highlight_count"
                }
            })
        }

        function showUpgradeToCommentBox(t) {
            var n = t.pageX,
                i = t.pageY;
            e(".liner-upgrade-comment-box").css("left", n), e(".liner-upgrade-comment-box").css("top", i), e(".liner-upgrade-comment-box").show(), messageToNative("GA_EVENT", {
                category: window.isLinerBrowser ? "browser" : "extension",
                action: "upgrade_to_comment_box_shown",
                label: ""
            }), messageToNative("BRAZE_EVENT", {
                name: "upgrade_to_comment_box_shown"
            }), messageToNative("AMPLITUDE_EVENT", {
                event_name: "trigger_basic_plan_limit",
                properties: {
                    context: "comment_count"
                }
            })
        }

        function showCommentBox(t) {
            try {
                t.stopPropagation()
            } catch (t) {}
            messageToNative("SHOW_COMMENT_BOX", {});
            var n = null;
            if (null != (n = "liner-comment-bubble" == t.target.className ? e(t.target).attr("data-id") : getDataIdFromSelectedHighlight())) {
                logger("show comment box for data id - " + n), linerVar.commentingHighlightId = n;
                var i = getCommentByDataId(n);
                if (initialComment = i, window.isLinerBrowser && window.innerWidth < 600) e("body").append(e(".liner-mobile-comment-box")), e(".liner-mobile-comment-box .liner-comment-highlight-content").text(currentHighlightString(n)), e(".liner-mobile-comment-box .liner-comment-textarea").val(getCommentByDataId(n)), e(".liner-mobile-comment-box .liner-comment-highlight-index").css("background-color", getHighlightColorByName(getSelectedHighlightColorName(), "rgb3")), e(".liner-mobile-comment-box").addClass("liner-show-comment-box"), setTimeout(function() {
                    e(".liner-mobile-comment-box").css("top", "0"), setTimeout(function() {
                        e(".liner-comment-textarea").focus()
                    }, 210)
                }, 10);
                else {
                    var o = t.pageX,
                        r = t.pageY;
                    e(".liner-comment-box").css("left", o), e(".liner-comment-box").css("top", r), e(".liner-comment-box").show(), e(".liner-comment-input").val(i).putCursorAtEnd(), e(".liner-comment-input").focus()
                }
                messageToNative("GA_EVENT", {
                    category: window.isLinerBrowser ? "browser" : "extension",
                    action: "comment_box_shown",
                    label: ""
                })
            } else logger("target data id is null")
        }

        function updateComment(t) {
            var n = e(".liner-comment-input").val().trim();
            "mobile" == t && (n = e(".liner-mobile-comment-box .liner-comment-textarea").val().trim()), messageToNative("UPDATE_COMMENT", {
                highlight_id: linerVar.commentingHighlightId,
                comment: n
            });
            let i = "comment_create";
            "" != initialComment.trim() && (i = "comment_modify"), initialComment != n && messageToNative("LKS_EVENT", {
                type: i,
                url: window.location.href,
                phrase: getLighterPhrase(linerVar.commentingHighlightId),
                highlight: currentHighlightString(linerVar.commentingHighlightId),
                comment: n
            }), initialComment = n, "" != n && (window.isLinerBrowser ? isLINERMobileGuidePage() && (evaluateScript("linerOnboardingEvent('mob_finish_onb_comment');"), evaluateScript("linerOnboardingEvent('mob_onb_others');")) : (isLINERGuidePage() ? setTimeout(function() {
                evaluateScript("linerOnboardingEvent('web_finish_guide_comment');"), evaluateScript("linerOnboardingEvent('web_init_guide_share');")
            }, 300) : messageToNative("BRAZE_EVENT", {
                name: "web_finish_guide_comment"
            }), saveFinishedOngoingOnboardings("web_finish_guide_comment"))), messageToNative("GA_EVENT", {
                category: window.isLinerBrowser ? "browser" : "extension",
                action: "comment",
                label: ""
            }), messageToNative("AMPLITUDE_USER_PROPERTY", {
                type: "add",
                property: "annotation_count",
                value: 1
            }), messageToNative("AMPLITUDE_EVENT", {
                event_name: "write_comment",
                properties: {
                    length: n.length
                }
            })
        }

        function hideCommentBox() {
            logger("hide comment box"), e(".liner-comment-box").fadeOut(100), clearTimeout(linerVar.commentTimer), updateComment("desktop")
        }

        function showNetworkErrorAlert() {
            messageToNative("ALERT_NETWORK_ERROR", {})
        }

        function isNetworkConnected() {
            return !0
        }

        function isEditableElement(t) {
            return "INPUT" == e(t)[0].tagName || "TEXTAREA" == e(t)[0].tagName || e(t).get(0).isContentEditable || "WHALE-QUICKSEARCH" == e(t)[0].tagName ? (logger("is editable element"), !0) : (logger("is not editable element - " + e(t)[0].tagName), !1)
        }

        function isTextSelected() {
            return "" != document.getSelection().toString().trim() ? (logger("is text selected"), !0) : (logger("is not text selected"), !1)
        }
        logger("injected main.js"), e(window).resize(function() {
            e(".liner-mini-button").hide(), e(".liner-mini-tooltip").hide()
        }), e(document).ready(function() {
            logger("document ready"), injectUIComponents(), setLinerUIEvents(), linerVar.lastUrl = window.location.href, window.isLinerAPIMode ? getHighlightVarFromStorage() && ((highlightVar = getHighlightVarFromStorage()).new_highlights = [], Lighter.import(highlightVar.style_items ? highlightVar.style_items : "W10="), setLighterEvents(), setTimeout(function() {
                resetAllComments()
            }, 100)) : messageToNative("DOCUMENT_READY", {}), window.isWhaleBrowser = !(!browser || browser !== window.whale), window.addEventListener("touchstart", function(e) {
                logger("touch start"), touchStartAction(e.touches[0]), document.addEventListener("selectionchange", () => {
                    clearTimeout(linerVar.selectionChangeTimer), linerVar.selectionChangeTimer = setTimeout(function() {
                        selectionChangeAction(e.touches[0])
                    }, 300)
                })
            }, !1), window.addEventListener("mousedown", function(t) {
                if (logger("mouse down"), e(t.target).hasClass("liner-maintain-selection")) return logger("mouse down at liner mini tooltip"), void t.preventDefault();
                mouseDownAction(t)
            }, !1), window.onpageshow = function(e) {
                e.persisted && window.location.reload()
            }
        }), e.fn.putCursorAtEnd = function() {
            return this.each(function() {
                var t = e(this),
                    n = this;
                if (t.is(":focus") || t.focus(), n.setSelectionRange) {
                    var i = 2 * t.val().length;
                    setTimeout(function() {
                        n.setSelectionRange(i, i)
                    }, 1)
                } else t.val(t.val());
                this.scrollTop = 999999
            })
        }
    }
}
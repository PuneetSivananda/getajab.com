module.exports = (function(t) {
  var e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var o = (e[r] = { i: r, l: !1, exports: {} })
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e]
            }.bind(null, o),
          )
      return r
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = '/'),
    n((n.s = 'qVkA'))
  )
})({
  HteQ: function(t, e) {
    t.exports = require('preact')
  },
  Y3FI: function(t, e, n) {
    'use strict'
    n.r(e),
      n.d(e, 'subscribers', function() {
        return h
      }),
      n.d(e, 'getCurrentUrl', function() {
        return b
      }),
      n.d(e, 'route', function() {
        return m
      }),
      n.d(e, 'Router', function() {
        return x
      }),
      n.d(e, 'Route', function() {
        return k
      }),
      n.d(e, 'Link', function() {
        return C
      }),
      n.d(e, 'exec', function() {
        return a
      })
    var r = n('HteQ'),
      o = {}
    function i(t, e) {
      for (var n in e) t[n] = e[n]
      return t
    }
    function a(t, e, n) {
      var r,
        i = /(?:\?([^#]*))?(#.*)?$/,
        a = t.match(i),
        c = {}
      if (a && a[1])
        for (var u = a[1].split('&'), l = 0; l < u.length; l++) {
          var p = u[l].split('=')
          c[decodeURIComponent(p[0])] = decodeURIComponent(p.slice(1).join('='))
        }
      ;(t = s(t.replace(i, ''))), (e = s(e || ''))
      for (var f = Math.max(t.length, e.length), h = 0; h < f; h++)
        if (e[h] && ':' === e[h].charAt(0)) {
          var d = e[h].replace(/(^:|[+*?]+$)/g, ''),
            b = (e[h].match(/[+*?]+$/) || o)[0] || '',
            m = ~b.indexOf('+'),
            O = ~b.indexOf('*'),
            v = t[h] || ''
          if (!v && !O && (b.indexOf('?') < 0 || m)) {
            r = !1
            break
          }
          if (((c[d] = decodeURIComponent(v)), m || O)) {
            c[d] = t
              .slice(h)
              .map(decodeURIComponent)
              .join('/')
            break
          }
        } else if (e[h] !== t[h]) {
          r = !1
          break
        }
      return (!0 === n.default || !1 !== r) && c
    }
    function c(t, e) {
      return t.rank < e.rank ? 1 : t.rank > e.rank ? -1 : t.index - e.index
    }
    function u(t, e) {
      return (
        (t.index = e),
        (t.rank = (function(t) {
          return t.props.default
            ? 0
            : ((e = t.props.path),
              s(e)
                .map(l)
                .join(''))
          var e
        })(t)),
        t.props
      )
    }
    function s(t) {
      return t.replace(/(^\/+|\/+$)/g, '').split('/')
    }
    function l(t) {
      return ':' == t.charAt(0) ? 1 + '*+?'.indexOf(t.charAt(t.length - 1)) || 4 : 5
    }
    var p = null,
      f = [],
      h = [],
      d = {}
    function b() {
      var t
      return (
        '' +
        ((t =
          p && p.location
            ? p.location
            : p && p.getCurrentLocation
            ? p.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : d).pathname || '') +
        (t.search || '')
      )
    }
    function m(t, e) {
      return (
        void 0 === e && (e = !1),
        'string' != typeof t && t.url && ((e = t.replace), (t = t.url)),
        (function(t) {
          for (var e = f.length; e--; ) if (f[e].canRoute(t)) return !0
          return !1
        })(t) &&
          (function(t, e) {
            void 0 === e && (e = 'push'),
              p && p[e]
                ? p[e](t)
                : 'undefined' != typeof history &&
                  history[e + 'State'] &&
                  history[e + 'State'](null, null, t)
          })(t, e ? 'replace' : 'push'),
        O(t)
      )
    }
    function O(t) {
      for (var e = !1, n = 0; n < f.length; n++) !0 === f[n].routeTo(t) && (e = !0)
      for (var r = h.length; r--; ) h[r](t)
      return e
    }
    function v(t) {
      if (t && t.getAttribute) {
        var e = t.getAttribute('href'),
          n = t.getAttribute('target')
        if (e && e.match(/^\//g) && (!n || n.match(/^_?self$/i))) return m(e)
      }
    }
    function g(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button))
        return v(t.currentTarget || t.target || this), y(t)
    }
    function y(t) {
      return (
        t &&
          (t.stopImmediatePropagation && t.stopImmediatePropagation(),
          t.stopPropagation && t.stopPropagation(),
          t.preventDefault()),
        !1
      )
    }
    function j(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button)) {
        var e = t.target
        do {
          if ('A' === String(e.nodeName).toUpperCase() && e.getAttribute('href')) {
            if (e.hasAttribute('native')) return
            if (v(e)) return y(t)
          }
        } while ((e = e.parentNode))
      }
    }
    var _ = !1
    var x = (function(t) {
        function e(e) {
          t.call(this, e),
            e.history && (p = e.history),
            (this.state = { url: e.url || b() }),
            _ ||
              ('function' == typeof addEventListener &&
                (p ||
                  addEventListener('popstate', function() {
                    O(b())
                  }),
                addEventListener('click', j)),
              (_ = !0))
        }
        return (
          t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.shouldComponentUpdate = function(t) {
            return (
              !0 !== t.static || t.url !== this.props.url || t.onChange !== this.props.onChange
            )
          }),
          (e.prototype.canRoute = function(t) {
            var e = Object(r.toChildArray)(this.props.children)
            return this.getMatchingChildren(e, t, !1).length > 0
          }),
          (e.prototype.routeTo = function(t) {
            this.setState({ url: t })
            var e = this.canRoute(t)
            return this.updating || this.forceUpdate(), e
          }),
          (e.prototype.componentWillMount = function() {
            f.push(this), (this.updating = !0)
          }),
          (e.prototype.componentDidMount = function() {
            var t = this
            p &&
              (this.unlisten = p.listen(function(e) {
                t.routeTo('' + (e.pathname || '') + (e.search || ''))
              })),
              (this.updating = !1)
          }),
          (e.prototype.componentWillUnmount = function() {
            'function' == typeof this.unlisten && this.unlisten(), f.splice(f.indexOf(this), 1)
          }),
          (e.prototype.componentWillUpdate = function() {
            this.updating = !0
          }),
          (e.prototype.componentDidUpdate = function() {
            this.updating = !1
          }),
          (e.prototype.getMatchingChildren = function(t, e, n) {
            return t
              .filter(u)
              .sort(c)
              .map(function(t) {
                var o = a(e, t.props.path, t.props)
                if (o) {
                  if (!1 !== n) {
                    var c = { url: e, matches: o }
                    return i(c, o), delete c.ref, delete c.key, Object(r.cloneElement)(t, c)
                  }
                  return t
                }
              })
              .filter(Boolean)
          }),
          (e.prototype.render = function(t, e) {
            var n = t.children,
              o = t.onChange,
              i = e.url,
              a = this.getMatchingChildren(Object(r.toChildArray)(n), i, !0),
              c = a[0] || null,
              u = this.previousUrl
            return (
              i !== u &&
                ((this.previousUrl = i),
                'function' == typeof o &&
                  o({ router: this, url: i, previous: u, active: a, current: c })),
              c
            )
          }),
          e
        )
      })(r.Component),
      C = function(t) {
        return Object(r.createElement)('a', i({ onClick: g }, t))
      },
      k = function(t) {
        return Object(r.createElement)(t.component, t)
      }
    ;(x.subscribers = h),
      (x.getCurrentUrl = b),
      (x.route = m),
      (x.Router = x),
      (x.Route = k),
      (x.Link = C),
      (x.exec = a),
      (e.default = x)
  },
  'ox/y': function(t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.Link = e.Match = void 0)
    var r =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        },
      o = n('HteQ'),
      i = n('Y3FI')
    function a(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function c(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
    }
    var u = (e.Match = (function(t) {
        function e() {
          var n, r
          a(this, e)
          for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u]
          return (
            (n = r = c(this, t.call.apply(t, [this].concat(i)))),
            (r.update = function(t) {
              ;(r.nextUrl = t), r.setState({})
            }),
            c(r, n)
          )
        }
        return (
          (function(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e,
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
          })(e, t),
          (e.prototype.componentDidMount = function() {
            i.subscribers.push(this.update)
          }),
          (e.prototype.componentWillUnmount = function() {
            i.subscribers.splice(i.subscribers.indexOf(this.update) >>> 0, 1)
          }),
          (e.prototype.render = function(t) {
            var e = this.nextUrl || (0, i.getCurrentUrl)(),
              n = e.replace(/\?.+$/, '')
            return (
              (this.nextUrl = null),
              t.children({ url: e, path: n, matches: !1 !== (0, i.exec)(n, t.path, {}) })
            )
          }),
          e
        )
      })(o.Component)),
      s = function(t) {
        var e = t.activeClassName,
          n = t.path,
          a = (function(t, e) {
            var n = {}
            for (var r in t)
              e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]))
            return n
          })(t, ['activeClassName', 'path'])
        return (0, o.h)(u, { path: n || a.href }, function(t) {
          var n = t.matches
          return (0,
          o.h)(i.Link, r({}, a, { class: [a.class || a.className, n && e].filter(Boolean).join(' ') }))
        })
      }
    ;(e.Link = s), (e.default = u), (u.Link = s)
  },
  qVkA: function(t, e, n) {
    'use strict'
    n.r(e)
    var r = n('HteQ'),
      o = n('Y3FI'),
      i = {
        centered: 'centered__2PQ3f',
        masthead: 'masthead__3ss1u',
        'site-title': 'site-title__25vzD',
        card: 'card__2wDN6',
        cardContent: 'cardContent__2VZX-',
        cards: 'cards__2f-4l',
      },
      a = function() {
        return Object(r.h)(
          'main',
          { class: 'main-area' },
          Object(r.h)(
            'div',
            { class: i.centered },
            Object(r.h)(
              'section',
              { class: i.cards },
              Object(r.h)(
                'article',
                { class: i.card },
                Object(r.h)(
                  'a',
                  { href: '#' },
                  Object(r.h)(
                    'figure',
                    { class: 'thumbnail' },
                    Object(r.h)('img', { src: 'http://placekitten.com/810/610', alt: 'meow' }),
                  ),
                  Object(r.h)(
                    'div',
                    { class: i.cardContent },
                    Object(r.h)('h2', null, 'Whiskey'),
                    Object(r.h)(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam.',
                    ),
                  ),
                ),
              ),
              Object(r.h)(
                'article',
                { class: i.card },
                Object(r.h)(
                  'a',
                  { href: '#' },
                  Object(r.h)(
                    'figure',
                    { class: i.thumbnail },
                    Object(r.h)('img', { src: 'http://placekitten.com/800/610', alt: 'meow' }),
                  ),
                  Object(r.h)(
                    'div',
                    { class: i.cardContent },
                    Object(r.h)('h2', null, 'Fluffy'),
                    Object(r.h)(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?',
                    ),
                  ),
                ),
              ),
              Object(r.h)(
                'article',
                { class: i.card },
                Object(r.h)(
                  'a',
                  { href: '#' },
                  Object(r.h)(
                    'figure',
                    { class: i.thumbnail },
                    Object(r.h)('img', { src: 'http://placekitten.com/816/610', alt: 'meow' }),
                  ),
                  Object(r.h)(
                    'div',
                    { class: i.cardContent },
                    Object(r.h)('h2', null, 'Kitty'),
                    Object(r.h)(
                      'p',
                      null,
                      ' ',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et, laborum dignissimos error sequi non? Recusandae, aut alias.',
                    ),
                  ),
                ),
              ),
              Object(r.h)(
                'article',
                { class: i.card },
                Object(r.h)(
                  'a',
                  { href: '#' },
                  Object(r.h)(
                    'figure',
                    { class: i.thumbnail },
                    Object(r.h)('img', { src: 'http://placekitten.com/816/600', alt: 'meow' }),
                  ),
                  Object(r.h)(
                    'div',
                    { class: i.cardContent },
                    Object(r.h)('h2', null, 'Patches'),
                    Object(r.h)(
                      'p',
                      null,
                      ' ',
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et, laborum dignissimos error sequi non? Recusandae, aut alias.',
                    ),
                  ),
                ),
              ),
            ),
          ),
        )
      },
      c = n('ox/y'),
      u = 'notfound__25Mra',
      s = function() {
        return Object(r.h)(
          'div',
          { class: u },
          Object(r.h)('h1', null, 'Error 404'),
          Object(r.h)('p', null, "That page doesn't exist."),
          Object(r.h)(c.Link, { href: '/' }, Object(r.h)('h4', null, 'Back to Home')),
        )
      },
      l = 'header__3ax1h',
      p = 'active__2XB2z',
      f = function() {
        return Object(r.h)(
          'header',
          { class: l },
          Object(r.h)('h1', null, 'Covid Portal - Bengaluru'),
          Object(r.h)('nav', null, Object(r.h)(c.Link, { activeClassName: p, href: '/' }, 'Home')),
        )
      },
      h = function() {
        return Object(r.h)(
          'div',
          { id: 'preact_root' },
          Object(r.h)(f, null),
          Object(r.h)(
            o.Router,
            null,
            Object(r.h)(o.Route, { path: '/', component: a }),
            Object(r.h)(s, { default: !0 }),
          ),
        )
      }
    e.default = h
  },
})
//# sourceMappingURL=ssr-bundle.js.map

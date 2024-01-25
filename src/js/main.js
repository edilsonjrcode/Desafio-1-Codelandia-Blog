"use strict";
function _createForOfIteratorHelper(r, e) {
  var t,
    n,
    a,
    o,
    c = ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (c)
    return (
      (n = !(t = !0)),
      {
        s: function () {
          c = c.call(r);
        },
        n: function () {
          var r = c.next();
          return (t = r.done), r;
        },
        e: function (r) {
          (n = !0), (a = r);
        },
        f: function () {
          try {
            t || null == c.return || c.return();
          } finally {
            if (n) throw a;
          }
        },
      }
    );
  if (
    Array.isArray(r) ||
    (c = _unsupportedIterableToArray(r)) ||
    (e && r && "number" == typeof r.length)
  )
    return (
      c && (r = c),
      (o = 0),
      {
        s: (e = function () {}),
        n: function () {
          return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
        },
        e: function (r) {
          throw r;
        },
        f: e,
      }
    );
  throw new TypeError(
    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, e) {
  var t;
  if (r)
    return "string" == typeof r
      ? _arrayLikeToArray(r, e)
      : "Map" ===
          (t =
            "Object" === (t = Object.prototype.toString.call(r).slice(8, -1)) &&
            r.constructor
              ? r.constructor.name
              : t) || "Set" === t
      ? Array.from(r)
      : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      ? _arrayLikeToArray(r, e)
      : void 0;
}
function _arrayLikeToArray(r, e) {
  (null == e || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
  return n;
}
var icon_heart_active = "src/assets/icon-heart-active.svg",
  icon_heart = "src/assets/icon-heart.svg",
  hearts = document.querySelectorAll(".icon-heart"),
  searchBar =
    (hearts.forEach(function (r) {
      r.addEventListener("click", function () {
        "src/assets/icon-heart.svg" == r.getAttribute("src")
          ? r.setAttribute("src", icon_heart_active)
          : r.setAttribute("src", icon_heart);
      });
    }),
    document.querySelector("#search-bar")),
  cards = document.querySelectorAll(".card-information"),
  search = function () {
    var r,
      e = _createForOfIteratorHelper(cards);
    try {
      for (e.s(); !(r = e.n()).done; ) {
        var t = r.value,
          n = t.querySelector(".informations"),
          a = (console.log(n), n.querySelector("h2").textContent.toLowerCase());
        if ("" != searchBar.value)
          a.includes(searchBar.value.toLowerCase())
            ? (t.style.display = "flex")
            : (t.style.display = "none");
        else {
          var o,
            c = _createForOfIteratorHelper(cards);
          try {
            for (c.s(); !(o = c.n()).done; ) o.value.style.display = "flex";
          } catch (r) {
            c.e(r);
          } finally {
            c.f();
          }
        }
      }
    } catch (r) {
      e.e(r);
    } finally {
      e.f();
    }
  };

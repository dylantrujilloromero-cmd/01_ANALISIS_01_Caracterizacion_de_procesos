(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["intro"],
  {
    // Módulo de estilos (probablemente vacío o importación de CSS)
    "0b16": function(t, e, a) {
      "use strict";
      a("8b10");
    },

    // Módulo principal del componente "Introducción"
    5167: function(t, e, a) {
      "use strict";
      a.r(e);

      // Función de Renderizado (Estructura de la vista)
      var i = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "curso-main-container introduccion" },
          [a("BannerInterno"), t._m(0)],
          1
        );
      };

      // Funciones Estáticas (El contenido HTML del video e introducción)
      var n = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "container tarjeta tarjeta--blanca p-4 p-md-5 mb-5" },
            [
              a(
                "div",
                {
                  staticClass: "titulo-principal",
                  attrs: { "data-aos": "flip-up" }
                },
                [
                  a("div", { staticClass: "titulo-principal__numero" }, [
                    a("span", [a("i", { staticClass: "fas fa-info" })])
                  ]),
                  a("h1", [t._v("Introducción")])
                ]
              ),
              a("p", { staticClass: "mb-5" }, [
                t._v(
                  "A continuación, se presentará el video que hará una breve introducción del presente componente formativo:"
                )
              ]),
              a("figure", [
                a("div", { staticClass: "video" }, [
                  a("iframe", {
                    attrs: {
                      width: "560",
                      height: "315",
                      src: "https://www.youtube.com/embed/h5U98IQxP4E",
                      title: "YouTube video player",
                      frameborder: "0",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: ""
                    }
                  })
                ])
              ])
            ]
          );
        }
      ];

      // Definición del componente Vue
      var r = {
          name: "Introduccion",
          data: function() {
            return {};
          }
        },
        c = r,
        o = (a("0b16"), a("2877")),
        s = Object(o["a"])(c, i, n, !1, null, "14b78173", null);

      e["default"] = s.exports;
    },

    // Módulo de estilos vacío
    "8b10": function(t, e, a) {}
  }
]);

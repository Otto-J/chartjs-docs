(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{503:function(n,t,e){"use strict";e.r(t);var s=e(3),i=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"line-segment-styling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#line-segment-styling"}},[this._v("#")]),this._v(" Line Segment Styling")]),this._v(" "),t("chart-editor",{attrs:{code:"\n// <block:segmentUtils:1>\nconst skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;\nconst down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;\n// </block:segmentUtils>\n\n// <block:genericOptions:2>\nconst genericOptions = {\n  fill: false,\n  interaction: {\n    intersect: false\n  },\n  radius: 0,\n};\n// </block:genericOptions>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: {\n    labels: Utils.months({count: 7}),\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, NaN, 48, 56, 57, 40],\n      borderColor: 'rgb(75, 192, 192)',\n      segment: {\n        borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),\n        borderDash: ctx => skipped(ctx, [6, 6]),\n      }\n    }]\n  },\n  options: genericOptions\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);
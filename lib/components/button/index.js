"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button = require("./src/button.vue.js");
require("vue");
const install = require("../../utils/vue/install.js");
const WButton = install.withInstall(button.default);
exports.WButton = WButton;
exports.default = WButton;

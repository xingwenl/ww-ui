"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const runtime = require("../../../utils/vue/props/runtime.js");
require("vue");
const inputProps = runtime.buildProps({
  /**
   * @description placeholder
   */
  placeholder: {
    type: String
  }
});
exports.inputProps = inputProps;

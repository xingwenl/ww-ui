"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function isFunction(val) {
  return typeof val === "function";
}
function getSlot(slots, slot = "default", data) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn)
    return null;
  return slotFn(data);
}
exports.getSlot = getSlot;
exports.isFunction = isFunction;

"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function useFormValues({
  props,
  formModel
}) {
  function initDefault() {
    var _a;
    (_a = props.schemas) == null ? void 0 : _a.forEach((item) => {
      const { defaultValue } = item;
      if (typeof defaultValue != void 0 && typeof defaultValue != null) {
        formModel[item.field] = defaultValue;
      }
    });
  }
  return {
    initDefault
  };
}
exports.useFormValues = useFormValues;

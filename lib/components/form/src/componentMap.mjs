import { ElInput, ElInputNumber, ElSelect, ElDatePicker, ElSwitch, ElCheckbox } from "element-plus";
const componentMap = /* @__PURE__ */ new Map();
componentMap.set("Input", { component: ElInput, options: { eventKey: "onInput" } });
componentMap.set("InputNumber", { component: ElInputNumber });
componentMap.set("Select", { component: ElSelect });
componentMap.set("DatePicker", { component: ElDatePicker });
componentMap.set("Switch", { component: ElSwitch });
componentMap.set("Checkbox", { component: ElCheckbox });
export {
  componentMap
};

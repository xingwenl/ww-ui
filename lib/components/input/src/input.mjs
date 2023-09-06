import { buildProps } from "../../../utils/vue/props/runtime.mjs";
import "vue";
const inputProps = buildProps({
  /**
   * @description placeholder
   */
  placeholder: {
    type: String
  }
});
export {
  inputProps
};

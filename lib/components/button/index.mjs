import Button from "./src/button.vue.mjs";
import "vue";
import { withInstall } from "../../utils/vue/install.mjs";
const WButton = withInstall(Button);
export {
  WButton,
  WButton as default
};

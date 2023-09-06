import { buildProps } from "../../../utils";
import { ExtractPropTypes } from "vue";
import type Input from './input.vue'

export const inputProps = buildProps({
  /**
   * @description placeholder
   */
  placeholder: {
    type: String,
  },
});

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputInstance = InstanceType<typeof Input>

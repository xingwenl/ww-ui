import Input from './src/input.vue'
import { withInstall } from '../../utils'

export const WInput = withInstall(Input)
export default WInput

export * from './src/input'

export type InputInstance = InstanceType<typeof Input>

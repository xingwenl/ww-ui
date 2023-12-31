import Form from './src/form.vue';
import type { FormSchema, FormProps } from './src/types/form';
import { withInstall } from '../../utils';
export * from './src/hooks/useForm';

export const WForm = withInstall(Form);
export default WForm;
export { FormSchema, FormProps };

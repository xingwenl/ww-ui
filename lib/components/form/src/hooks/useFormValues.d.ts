import { FormProps } from './../types/form';
export declare function useFormValues({ props, formModel }: {
    props: FormProps;
    formModel: Record<string, any>;
}): {
    initDefault: () => void;
};

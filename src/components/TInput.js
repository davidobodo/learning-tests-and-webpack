export type props = {
    type: string;
    name: string;
    placeholder: string;
    value: string | number;
    handleOnChange: (e) => void;
    handleOnBlur: (e) => void;
    hasError: boolean;
    errorMessage: string;
    title: string;
    focus?: boolean;
}
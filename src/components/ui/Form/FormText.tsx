import React from 'react';

interface FormTextControlProps {
    name: string
    inputClassName?: string
    labelClassName?: string
    props?: HTMLInputElement
}

const FormInput = ({name, inputClassName, labelClassName, ...props}: FormTextControlProps) => {
    return (
        <input type="text" name={name} className='w-full h-[32px] placeholder:text-[16px] border-b border-b-gray_bold' {...props} />
    );
};

export default FormInput;
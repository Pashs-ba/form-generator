import React from "react";

export type CheckboxProps = {}

type _CheckboxProps = CheckboxProps & {
    onChange: (e: string) => void;
    defaultValue?: string;
    required?: boolean
}

export default function Checkbox({onChange, defaultValue, required}: Readonly<_CheckboxProps>){
    const [value, setValue] = React.useState<string>(defaultValue ?? "")
    return (
        <input
            className={"form-check-input"}
            type={"checkbox"}
            required={required}
            checked={value === "true"}
            onChange={(e: React.FormEvent<HTMLInputElement>) => { 
                onChange(e.currentTarget.checked ? "true" : "false") 
                setValue(e.currentTarget.checked ? "true" : "false")
            }}
        />
)}
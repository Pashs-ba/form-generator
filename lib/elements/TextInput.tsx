import React from "react"

export type TextInputProps = {
    type?: string,
}
type _TextInputProps = TextInputProps & {
    onChange: (data: string) => void
    defaultValue?: string
    required?: boolean
    min?: number
    max?: number
}
export default function TextInput({ onChange, type, defaultValue, required, min, max }: Readonly<_TextInputProps>) {
    const [value, setValue] = React.useState<string>(defaultValue ?? "")
    return (
        <input
            type={type}
            required={required}
            className={"form-control"}
            min={min}
            max={max}
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) => { 
                onChange(e.currentTarget.value) 
                setValue(e.currentTarget.value)
            }}
        />
    )
}
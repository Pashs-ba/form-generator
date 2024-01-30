import React from "react"

export type TextInputProps = {
    type?: string
}
type _TextInputProps = TextInputProps & {
    onChange: (data: string) => void
}
export default function TextInput({ onChange, type }: Readonly<_TextInputProps>) {
    const [value, setValue] = React.useState<string>("")
    return (
        <input
            type={type}
            className={"form-control"}
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) => { 
                onChange(e.currentTarget.value) 
                setValue(e.currentTarget.value)
            }}
        />
    )
}
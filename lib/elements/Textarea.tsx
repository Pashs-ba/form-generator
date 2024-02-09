import { useState } from "react";

export type TextareaProps = {
    rows?: number;
    cols?: number;
}

type _TextareaProps = TextareaProps & {
    onChange: (e: string) => void;
    defaultValue?: string;
    required?: boolean
}

export default function Textarea({ onChange, defaultValue, rows, cols, required }: Readonly<_TextareaProps>) {
    const [value, setValue] = useState<string | undefined>(defaultValue);
    return (
        <textarea
            className="form-control"
            rows={rows}
            cols={cols}
            required={required}
            onChange={(e) => {
                onChange(e.target.value)
                setValue(e.target.value)
            }}
            value={value}
        />
    )
}
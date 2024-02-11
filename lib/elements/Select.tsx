import React from "react"

type Option = { value: string, label: string }
export type SelectProps = {
    options: Option[],
    multiple?: boolean,

}
type _SelectProps = SelectProps & {
    onChange: (data: string | string[]) => void,
    defaultValue?: string | string[]
    required?: boolean
}

function calulate_default(options: Option[], multiple?: boolean, defaultValue?: string | string[],): string | string[] {
    if (defaultValue) return defaultValue
    if (multiple) return []
    return options[0].value
}

export default function Select({ onChange, options, multiple, defaultValue, required }: Readonly<_SelectProps>) {
    const [value, setValue] = React.useState<string | string[]>(calulate_default(options, multiple, defaultValue))
    return (
        <select
            className="form-select"
            value={value}
            required={required}
            multiple={multiple}
            onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                if (multiple) {
                    setValue([...e.currentTarget.selectedOptions].map((option) => {
                        return option.value
                    }))
                    onChange([...e.currentTarget.selectedOptions].map((option) => {
                        return option.value
                    }))
                } else {
                    setValue(e.currentTarget.value)
                    onChange(e.currentTarget.value)
                }

            }}>
            {options.map((option) => {
                return (
                    <option
                        value={option.value}
                        key={option.value}>
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
}
import React from "react"

type Option = { value: string, label: string }
export type SelectProps = {
    options: Option[],
    multiple?: boolean
}
type _SelectProps = SelectProps & {
    onChange: (data: string|string[]) => void,
}

export default function Select({ onChange, options, multiple }: Readonly<_SelectProps>) {
    const [value, setValue] = React.useState<string|string[]>(multiple? []: options[0].value)
    return (
        <select
            className="form-select"
            value={value}
            multiple={multiple}
            onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                if (multiple){
                    setValue([...e.currentTarget.selectedOptions].map((option) => {
                        return option.value
                    }))
                    onChange([...e.currentTarget.selectedOptions].map((option) => {
                        return option.value
                    }))
                }else{
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
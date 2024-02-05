import { useState } from "react";
export type RadioProps = {
    options: string[]
}

type _RadioProps = RadioProps & {
    onChange: (e: string) => void;
    defaultValue?: string;
    name: string
}

export default function Radio({ onChange, defaultValue, options, name }: Readonly<_RadioProps>) {
    const [value, setValue] = useState(defaultValue);
    return (
        <>
            {options.map((option) => (
                <div
                    className="mb-3 form-check"
                    key={option}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        checked={value === option}
                        aria-labelledby={"id_" + option}
                        onChange={() => {
                            setValue(option);
                            onChange(option);
                        }}
                    />
                    <label
                        className="form-check-label"
                        id={"id_" + option}
                    >
                        {option}
                    </label>
                </div>
            ))}
        </>
    )
}


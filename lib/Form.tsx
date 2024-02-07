import React, { useEffect } from "react";
import { ElementType } from "./ElementType.ts";
import TextInput, { TextInputProps } from "./elements/TextInput.tsx";
import Select, { SelectProps } from "./elements/Select.tsx";
import Checkbox, { CheckboxProps } from "./elements/Checkbox.tsx";
import Radio, { RadioProps } from "./elements/Radio.tsx";
import Textarea, { TextareaProps } from "./elements/Textarea.tsx";
//TODO fix string checkbox?
type Element = {
    label: string,
    name: string,
    type: ElementType,
    properties: SelectProps | TextInputProps | CheckboxProps | RadioProps | TextareaProps,
    defaultValue?: string | string[]

}
export type FormProps = {
    title: string,
    elements: Element[]
    onButtonClick: (data: any) => void
}

function get_element_by_type(element: Element, data: any, setData: React.Dispatch<any>): React.ReactNode {
    switch (element.type) {
        case ElementType.TEXT_INPUT:
            return (
                <TextInput
                    {...element.properties as TextInputProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }}
                    defaultValue={element.defaultValue as string | undefined} />
            )
        case ElementType.SELECT:
            return (
                <Select
                    {...element.properties as SelectProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }}
                    defaultValue={element.defaultValue} />
            )
        case ElementType.CHECKBOX:
            return (
                <Checkbox
                    {...element.properties as CheckboxProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }}
                    defaultValue={element.defaultValue as string | undefined} />
            )
        case ElementType.RADIO:
            return (
                <Radio
                    {...element.properties as RadioProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }}
                    defaultValue={element.defaultValue as string | undefined}
                    name={element.name} />
            )
        case ElementType.TEXTAREA:
            return (
                <Textarea
                    {...element.properties as TextareaProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }}
                    defaultValue={element.defaultValue as string | undefined} />
            )
    }
}

function make_element(element: Element, data: any, setData: React.Dispatch<any>): React.ReactNode {
    switch (element.type) {
        case ElementType.TEXT_INPUT:
        case ElementType.SELECT:
        case ElementType.TEXTAREA:
            return (
                <div
                    className="mb-3"
                    key={element.label}
                >
                    <label className="form-label">{element.label}</label>
                    {get_element_by_type(element, data, setData)}
                </div>
            )
        case ElementType.CHECKBOX:
            return (
                <div
                    className="form-check"
                    key={element.label}
                >
                    {get_element_by_type(element, data, setData)}
                    <label className="form-check-label">{element.label}</label>
                </div>
            )
        case ElementType.RADIO:
            return (
                <div
                    key={element.label}>
                    <label className="form-label">{element.label}</label>
                    {get_element_by_type(element, data, setData)}
                </div>
            )

    }

}


function init_data(elements: Element[]): any {
    let data = {} as any
    elements.forEach((element) => {
        if (element.type === ElementType.SELECT) {
            data[element.name] = (element.properties as SelectProps).multiple ?
                [] : (element.properties as SelectProps).options[0].value
        }
        if (element.type === ElementType.CHECKBOX) {
            data[element.name] = "false"
        }
        if (element.defaultValue) {
            data[element.name] = element.defaultValue
        }
    })
    return data
}


export function Form({ title, elements, onButtonClick }: Readonly<FormProps>) {
    const [data, setData] = React.useState<any>({})
    useEffect(() => {
        setData(init_data(elements))
    }, [])
    return (
        <>
            <h1>{title}</h1>
            {elements.map((element) => {
                return make_element(element, data, setData)
            })}
            <button
                className="btn btn-primary"
                onClick={() => { onButtonClick(data) }}>Submit</button>
        </>
    )
}
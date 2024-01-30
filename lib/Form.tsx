import React, { useEffect } from "react";
import { ElementType } from "./ElementType.ts";
import TextInput, { TextInputProps } from "./elements/TextInput.tsx";
import Select, { SelectProps } from "./elements/Select.tsx";

type Element = {
    label: string,
    name: string,
    type: ElementType,
    properties: SelectProps | TextInputProps,

}
export type FormProps = {
    title: string,
    elements: Element[]
}

function get_element_by_type(element: Element, data: any, setData: React.Dispatch<any>): React.ReactNode {
    switch (element.type) {
        case ElementType.TEXT_INPUT:
            return (
                <TextInput
                    {...element.properties as TextInputProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }} />
            )
        case ElementType.SELECT:
            return (
                <Select
                    {...element.properties as SelectProps}
                    onChange={(changed) => { setData({ ...data, [element.name]: changed }) }} />
            )
        default:
            throw new Error("Unknown element type")
    }
}

function make_element(element: Element, data: any, setData: React.Dispatch<any>): React.ReactNode {
    return (
        <div
            className="mb-3"
            key={element.label}
        >
            <label className="form-label">{element.label}</label>
            {get_element_by_type(element, data, setData)}
        </div>
    )
}


function init_data(elements: Element[]): any {
    let data = {} as any
    elements.forEach((element) => {
        if (element.type === ElementType.SELECT) {
            data[element.name] = (element.properties as SelectProps).multiple ? [] : (element.properties as SelectProps).options[0].value
        }
    })
    return data
}


export function Form({ title, elements }: Readonly<FormProps>) {
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
                onClick={() => { console.log(data) }}>Submit</button>
        </>
    )
}
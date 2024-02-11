import React, { useEffect } from "react";
import { Element } from "../types.ts";
import {Manager} from "./Manager.ts";
//TODO fix string checkbox?
export type FormProps = {
    title?: string,
    elements: Element[],
    onButtonClick: (data: any) => void,
    buttonText?: string
    defaultInvalidText?: string
}

function make_element(
    element: Element,
    data: any,
    setData: React.Dispatch<any>,
    defaultInvalidText: string | undefined): React.ReactNode {

    return Manager.getInstance()
        .getElementByName(element.type)
        ?.createElement(
            element,
            (changed) => { setData({ ...data, [element.name]: changed }) },
            defaultInvalidText
        )
}


function init_data(elements: Element[]): any {
    let data = {} as any
    elements.forEach((element) => {
        let value = Manager.getInstance()
            .getElementByName(element.type)
            ?.getDefaultValue(element)
        if (value !== undefined) {
            data[element.name] = value
        }
    })
    return data
}


export function Form({ title, elements, onButtonClick, buttonText, defaultInvalidText }: Readonly<FormProps>) {
    const [data, setData] = React.useState<any>({})
    const [formClasses, setFormClasses] = React.useState<string>("")
    useEffect(() => {
        setData(init_data(elements))
    }, [])
    return (
        <>
            <h1>{title}</h1>
            <form
                noValidate
                className={formClasses}
                onSubmit={(FormEvent) => {
                    FormEvent.preventDefault()
                    FormEvent.stopPropagation()
                    if (!FormEvent.currentTarget.checkValidity()) {
                        setFormClasses("was-validated")
                    } else {
                        onButtonClick(data)
                    }
                }}>
                {elements.map((element) => {
                    return (
                        <div key={element.label}>
                            {make_element(element, data, setData, defaultInvalidText)}
                        </div>)
                })}
                <button
                    type="submit"
                    className="btn btn-primary"
                >{buttonText ?? "Submit"}</button>
            </form>
        </>
    )
}

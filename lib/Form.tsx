import {ElementType} from "./ElementType.ts";

type Element = {
    label: string,
    type: ElementType
}
export type FormProps = {
    title: string,
    elements: Element[]
}

export function Form({title, elements}: FormProps) {
    return (
        <>
            <h1>{title}</h1>
            {elements.map((element, index) => {
                return (<p key={index}>{element.label}</p>)
            })}
        </>
    )
}
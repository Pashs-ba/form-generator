import { ReactNode } from "react";
import IElementMaker from "../base/IElementMaker";
import { Element } from "../types";
import Select from "../elements/Select";

export default class SelectMaker implements IElementMaker {
    createElement(element: Element, setData: (data: any) => void, defaultInvalidText: string | undefined): ReactNode {
        return (
            <div className="mb-3">
                <label className="form-label">{element.label}</label>
                <Select
                    onChange={setData}
                    required={element.required}
                    defaultValue={element.defaultValue}
                    {...element.properties}
                />
                <div className="invalid-feedback">
                    {element.invalidText ?? defaultInvalidText ?? "Please fill this field"}
                </div>
            </div>
        )
    }
    getDefaultValue(element: Element) {
        if (element.defaultValue) {
            return element.defaultValue
        }
        return element.properties.multiple ? [] : element.properties.options[0].value
    }

}
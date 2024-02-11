import { ReactNode } from "react";
import IElementMaker from "../base/IElementMaker";
import { Element } from "../types";
import Checkbox from "../elements/Checkbox";
//TODO fix defalut checkbox
export default class CheckboxMaker implements IElementMaker {
    createElement(element: Element, setData: (data: any) => void, defaultInvalidText: string | undefined): ReactNode {
        return (
            <div className="mb-3 form-check">
                <Checkbox
                    required={element.required}
                    onChange={setData}
                    defaultValue={element.defaultValue}
                    {...element.properties} />
                <label className="form-check-label">{element.label}</label>
                <div className="invalid-feedback">
                    {element.invalidText ?? defaultInvalidText ?? "This field is required"}
                </div>
            </div>
        )
    }
    getDefaultValue(element: Element) {
        return element.defaultValue ?? "false"
    }

}
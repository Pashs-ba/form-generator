import { ReactNode } from "react";
import IElementMaker from "../base/IElementMaker";
import { Element } from "../types";
import Textarea from "../elements/Textarea";

export default class TextareaMaker implements IElementMaker {
    createElement(element: Element, setData: (data: any) => void, defaultInvalidText: string | undefined): ReactNode {
        return (
            <div className="mb-3">
                <label className="form-label">{element.label}</label>
                <Textarea
                    required={element.required}
                    defaultValue={element.defaultValue}
                    onChange={setData}
                    {...element.properties} />
                <div className="invalid-feedback">
                    {element.invalidText ?? defaultInvalidText ?? "This field is required"}
                </div>
            </div>
        )
    }
    getDefaultValue(element: Element) {
        return element.defaultValue
    }

}
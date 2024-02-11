import { ReactNode } from "react";
import IElementMaker from "../base/IElementMaker";
import { Element } from "../types";
import TextInput from "../elements/TextInput";

export default class InputMaker implements IElementMaker {
    createElement(element: Element, setData: (data: any) => void, defaultInvalidText: string | undefined): ReactNode {
        return (
            <>
                <div className={"mb-3"}>
                    <label className="form-label">{element.label}</label>
                    <TextInput
                        onChange={setData}
                        required={element.required}
                        defaultValue={element.defaultValue}
                        {...element.properties}
                    />
                    <div className="invalid-feedback">
                        {element.invalidText ?? defaultInvalidText ?? "This field is required"}
                    </div>
                </div>

            </>
        )
    }
    getDefaultValue(element: Element) {
        return element.defaultValue
    }

}
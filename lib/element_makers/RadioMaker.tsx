import { ReactNode } from "react";
import IElementMaker from "../base/IElementMaker";
import { Element } from "../types";
import Radio from "../elements/Radio";

export default class RadioMaker implements IElementMaker {
    createElement(element: Element, setData: (data: any) => void, defaultInvalidText: string | undefined): ReactNode {

        return (
            <div className="mb-3">
                <label className="form-label">{element.label}</label>
                <Radio
                    onChange={setData}
                    required={element.required}
                    invalidText={element.invalidText ?? defaultInvalidText ?? "This field is required"}
                    defaultValue={element.defaultValue}
                    name={element.name}
                    {...element.properties} />
            </div>
        )
    }

    getDefaultValue(element: Element) {
        return element.defaultValue
    }

}
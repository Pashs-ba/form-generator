import { Element } from "../types";

export default interface IElementMaker {
    createElement(element: Element, setData: (data: any) => void, defaultInvalidText: string | undefined): React.ReactNode;
    getDefaultValue(element: Element): any;
}
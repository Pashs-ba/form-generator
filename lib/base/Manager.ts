import CheckboxMaker from "../element_makers/CheckboxMaker";
import InputMaker from "../element_makers/InputMaker";
import RadioMaker from "../element_makers/RadioMaker";
import SelectMaker from "../element_makers/SelectMaker";
import TextareaMaker from "../element_makers/TextareaMaker";
import IElementMaker from "./IElementMaker";
import ElementBase from "./IElementMaker";

export class Manager {
    private static _instance: Manager;
    private _elements: Map<string, IElementMaker> = new Map([
        ["input", new InputMaker()],
        ["checkbox", new CheckboxMaker()],
        ["radio", new RadioMaker()],
        ["select", new SelectMaker()],
        ["textarea", new TextareaMaker()]
    ]);

    public static getInstance(): Manager {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }

    public addElement(name: string, element: ElementBase): void {
        this._elements.set(name, element);
    }

    public getElementByName(name: string): ElementBase | undefined {
        return this._elements.get(name);
    }
}
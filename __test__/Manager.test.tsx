import IElementMaker from "../lib/base/IElementMaker";
import { Manager } from "../lib/base/Manager";

describe("Manager", () => {
    test('Manager test', () => {
        const manager = Manager.getInstance()
        expect(manager.getElementByName('input')).toBeDefined()
        expect(manager.getElementByName('checkbox')).toBeDefined()
        expect(manager.getElementByName('radio')).toBeDefined()
        expect(manager.getElementByName('select')).toBeDefined()
        expect(manager.getElementByName('textarea')).toBeDefined()
    })
    test('Manager get element test', () => {
        const manager = Manager.getInstance()
        expect(manager.getElementByName('test')).toBeUndefined()
    })
    test('Manager add element test', () => {
        const manager = Manager.getInstance()
        manager.addElement('test', {} as IElementMaker)
        expect(manager.getElementByName('test')).toBeDefined()
    })

});
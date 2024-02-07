import { fireEvent, render } from "@testing-library/react"
import { Form } from "../lib/Form"
import React from "react"
import { ElementType } from "../lib/ElementType"

describe('Textarea', () => {
    test('Textarea test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.TEXTAREA,
                        label: 'textarea',
                        name: 'textarea',
                        properties: {}
                    }
                ]} />) 
            fireEvent.click(container.getByRole('button'))
            expect(mock.mock.calls[0][0]).toEqual({})
    })
    test('Textarea choose test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.TEXTAREA,
                        label: 'textarea',
                        name: 'textarea',
                        properties: {}
                    }
                ]} />) 
            fireEvent.change(container.getByRole('textbox'), { target: { value: 'test' } })
            fireEvent.click(container.getByRole('button'))
            expect(mock.mock.calls[0][0]).toEqual({ "textarea": "test" })
    })
    test('Textarea default test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.TEXTAREA,
                        label: 'textarea',
                        name: 'textarea',
                        defaultValue: 'default',
                        properties: {}
                    }
                ]} />) 
            fireEvent.click(container.getByRole('button'))
            expect(mock.mock.calls[0][0]).toEqual({ "textarea": "default" })
    })
})
import { fireEvent, render } from "@testing-library/react"
import React from "react"
import '@testing-library/jest-dom'
import { Form } from "../lib/base/Form"


describe('Textarea', () => {
    test('Textarea test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'textarea',
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
                        type: 'textarea',
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
                        type: 'textarea',
                        label: 'textarea',
                        name: 'textarea',
                        defaultValue: 'default',
                        properties: {}
                    }
                ]} />) 
            fireEvent.click(container.getByRole('button'))
            expect(mock.mock.calls[0][0]).toEqual({ "textarea": "default" })
    })
    test('Textarea required test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'textarea',
                        label: 'textarea',
                        name: 'textarea',
                        invalidText: 'invalid',
                        required: true,
                        properties: {}
                    }
                ]} />) 
            fireEvent.click(container.getByRole('button'))
            expect(container.getByText('invalid')).toBeInTheDocument()
    })
})
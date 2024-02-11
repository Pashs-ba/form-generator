import { fireEvent, render } from "@testing-library/react"
import React from "react"
import '@testing-library/jest-dom'
import { Form } from "../lib/base/Form"


describe("Checkbox", () => {
    test('Checkbox no choose test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'checkbox',
                        label: 'checkbox',
                        name: 'checkbox',
                        properties: {}
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "checkbox": "false" })
    })
    test('Checkbox element test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'checkbox',
                        label: 'checkbox',
                        name: 'checkbox',
                        properties: {}
                    }
                ]} />)
        fireEvent.click(container.getByRole('checkbox'))
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "checkbox": "true" })
    })
    test('Checkbox element second click test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'checkbox',
                        label: 'checkbox',
                        name: 'checkbox',
                        properties: {}
                    }
                ]} />)
        fireEvent.click(container.getByRole('checkbox'))
        fireEvent.click(container.getByRole('checkbox'))
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "checkbox": "false" })
    })
    test('Checkbox default value test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'checkbox',
                        label: 'checkbox',
                        name: 'checkbox',
                        defaultValue: "true",
                        properties: {}
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "checkbox": "true" })
    })
    test('Checkbox required test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'checkbox',
                        label: 'checkbox',
                        name: 'checkbox',
                        invalidText: "invalid",
                        required: true,
                        properties: {}
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock).not.toHaveBeenCalled()
        expect(container.getByText('invalid')).toBeInTheDocument()
    })
})
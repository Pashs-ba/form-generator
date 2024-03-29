import { fireEvent, render } from "@testing-library/react"
import React from "react"
import '@testing-library/jest-dom'
import { Form } from "../lib/base/Form"


describe('Input', () => {
    test('Button click test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'input',
                        label: 'input',
                        name: 'input',
                        properties: {}
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls.length).toBe(1)
        expect(mock.mock.calls[0][0]).toEqual({})
    })
    test('Input enter data test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'input',
                        label: 'input',
                        name: 'input',
                        properties: {}
                    }
                ]} />)

        fireEvent.change(container.getByRole('textbox'), { target: { value: 'some' } })
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "input": "some" })
    })
    test('Input default value test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'input',
                        label: 'input',
                        name: 'input',
                        defaultValue: 'default',
                        properties: {}
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "input": "default" })
    })

    test('Input default value change test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'input',
                        label: 'input',
                        name: 'input',
                        defaultValue: 'default',
                        properties: {}
                    }
                ]} />)

        fireEvent.change(container.getByRole('textbox'), { target: { value: 'some' } })
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "input": "some" })
    })
    test('Input required test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: 'input',
                        label: 'input',
                        name: 'input',
                        invalidText: 'invalid',
                        required: true,
                        properties: {}
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock).not.toHaveBeenCalled()
        expect(container.getByText('invalid')).toBeInTheDocument()
    })
})
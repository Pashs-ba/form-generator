import { fireEvent, render } from "@testing-library/react"
import { Form } from "../lib/Form"
import React from "react"
import { ElementType } from "../lib/ElementType"
import '@testing-library/jest-dom'


describe('Radio', () => {
    test('Radio test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.RADIO,
                        label: 'radio',
                        name: 'radio',
                        properties: {
                            options: [
                                "one",
                                "two",
                                "three"
                            ]
                        }
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({})
    })
    test('Radio choose test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.RADIO,
                        label: 'radio',
                        name: 'radio',
                        properties: {
                            options: [
                                "one",
                                "two",
                                "three"
                            ]
                        }
                    }
                ]} />)

        fireEvent.click(container.getByLabelText('two'))
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "radio": "two" })
    })

    test('Radio default test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.RADIO,
                        label: 'radio',
                        name: 'radio',
                        defaultValue: "two",
                        properties: {
                            options: [
                                "one",
                                "two",
                                "three"
                            ]
                        }
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "radio": "two" })
    })
    test('Radio reqired test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.RADIO,
                        label: 'radio',
                        name: 'radio',
                        required: true,
                        invalidText: 'invalid',
                        properties: {
                            options: [
                                "one",
                                "two",
                                "three"
                            ]
                        }
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))
        expect(mock).not.toHaveBeenCalled()
        expect(container.getByText('invalid')).toBeInTheDocument()
    })
})
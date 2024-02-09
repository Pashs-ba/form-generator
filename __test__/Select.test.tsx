import { fireEvent, render } from "@testing-library/react"
import { Form } from "../lib/Form"
import { ElementType } from "../lib/ElementType"
import React from "react"
import '@testing-library/jest-dom'


describe("Select", () => {
    test('Select no choose test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        properties: {
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)

        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "select": "one" })
    })
    test('Select element test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        properties: {
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)
        fireEvent.change(container.getByRole('combobox'), { target: { value: 'three' } })
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "select": "three" })
    })

    test('Select multiple no choose test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        properties: {
                            multiple: true,
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)
        fireEvent.click(container.getByRole('button'))
        expect(mock.mock.calls[0][0]).toEqual({ "select": [] })
    })

    test('Select multiple element test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        properties: {
                            multiple: true,
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)
        fireEvent.change(container.getByRole('listbox'), { target: { value: 'three' } })
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "select": ["three"] })
    })

    test('Select default value test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        defaultValue: "two",
                        properties: {
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "select": "two" })
    })

    test('Select multiple default value test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        defaultValue: ["two", "three"],
                        properties: {
                            multiple: true,
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)
        fireEvent.click(container.getByRole('button'))

        expect(mock.mock.calls[0][0]).toEqual({ "select": ["two", "three"] })
    })
    test('Select reqired test', () => {
        const mock = jest.fn()
        const container = render(
            <Form
                title='test'
                onButtonClick={mock}
                elements={[
                    {
                        type: ElementType.SELECT,
                        label: 'select',
                        name: 'select',
                        required: true,
                        invalidText: 'invalid',
                        properties: {
                            multiple: true,
                            options: [
                                { value: "one", label: "one" },
                                { value: "two", label: "two" },
                                { value: "three", label: "three" }
                            ]
                        }
                    }
                ]} />)
        fireEvent.click(container.getByRole('button'))
        expect(mock).not.toHaveBeenCalled()
        expect(container.getByText('invalid')).toBeInTheDocument()
    })

})
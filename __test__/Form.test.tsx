import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe } from 'node:test'
import { Form } from "../lib/Form"
import React from 'react'
import { ElementType } from '../lib/ElementType'
describe('Form', () => {
  test('Title test', () => {
    const container = render(
      <Form
        title='some'
        onButtonClick={() => { }}
        elements={[]} />)
    container.findByText('some').then((el) => {
      expect(el.nodeName).toEqual('H1')
    })
  })
  
  test('Elements test', () => {
    const container = render(
      <Form
        title='test'
        onButtonClick={() => { }}
        elements={[
          {
            type: ElementType.TEXT_INPUT,
            label: 'input',
            name: 'input',
            properties: {}
          }
        ]} />)
    expect(container.getByRole('textbox')).toBeInTheDocument()
  })

  test('Button test', () => {
    const container = render(
      <Form
        title='test'
        onButtonClick={() => { }}
        elements={[]} />)
    expect(container.getByRole('button')).toBeInTheDocument()
  })

  test('Custom Name', () => {
    const container = render(
      <Form
        title='test'
        onButtonClick={() => { }}
        buttonText='custom'
        elements={[]} />)
    expect(container.getByText('custom')).toBeInTheDocument()

  })
  test('Reqired default error text test', ()=>{
    const mock = jest.fn()
    const container = render(
      <Form
        title='test'
        onButtonClick={mock}
        defaultInvalidText='invalid'
        elements={[
          {
            type: ElementType.TEXT_INPUT,
            label: 'input',
            name: 'input',
            required: true,
            properties: {}
          }
        ]} />)
    const button = container.getByRole('button')
    button.click()
    expect(mock).not.toHaveBeenCalled()
    expect(container.getByText('invalid')).toBeInTheDocument()
  })

})
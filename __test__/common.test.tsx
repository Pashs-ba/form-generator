import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe } from 'node:test'
import { Form } from "../lib/Form"
import React from 'react'
import { ElementType } from '../lib/ElementType'
describe('Common', () => {
  test('Title test', () => {
    const container = render(
      <Form
        title='some'
        elements={[]} />)
    container.findByText('some').then((el) => {
      expect(el.nodeName).toEqual('H1')
    })
  })
  test('Elements test', () => {
    const container = render(
      <Form
        title='test'
        elements={[
          {
            type: ElementType.TEXT_INPUT,
            label: 'input',
            name: 'input',
            properties : {}
          }
        ]} />)
    expect(container.getByRole('textbox')).toBeInTheDocument()
  })
})

import { ElementType, Form } from "../lib/main.ts";

function App() {

  return (
    <Form
      onButtonClick={(data) => { console.log(data) }}
      buttonText="Отправить"
      elements={[
        {
          label: "one",
          name: "one",
          type: ElementType.TEXT_INPUT,
          properties: {
            type: "text"
          }
        },
        {
          label: "two",
          name: "two",
          type: ElementType.TEXT_INPUT,
          properties: {
            type: "text"
          }
        },
        {
          label: "select",
          name: "select",
          type: ElementType.SELECT,
          
          properties: {
            multiple: true,
            options: [
              { value: "one", label: "one" },
              { value: "two", label: "two" },
              { value: "three", label: "three" },
            ]
          }
        },
        {
          label: "checkbox",
          name: "checkbox",
          type: ElementType.CHECKBOX,
          properties: {}
        },
        {
          label: "radio",
          name: "radio",
          required: true,
          type: ElementType.RADIO,
          invalidText: "Please select one",
          properties: {
            options: [
              "one",
              "two",
              "three",
            ]
          }
        },
      ]}
    />
  )
}

export default App
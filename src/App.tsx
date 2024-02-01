
import {ElementType, Form} from "../lib/main.ts";

function App() {

  return (
        <Form
            title={"Form test"}
            elements={[
            {
                label: "one",
                name: "one",
                type: ElementType.TEXT_INPUT,
                defaultValue: "default",
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
              defaultValue: ["two", "three"],
              properties: {
                multiple: true,
                options: [
                  {value: "one", label: "one"},
                  {value: "two", label: "two"},
                  {value: "three", label: "three"},
                ]
              }
            },
            {
              label: "checkbox",
              name: "checkbox",
              type: ElementType.CHECKBOX,
              properties: {}
            }
          ]}
        />
  )
}

export default App
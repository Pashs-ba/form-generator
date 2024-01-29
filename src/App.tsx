import {ElementType, Form} from "../lib/main.ts";

function App() {

  return (
    <>
        <Form
            title={"Form test"}
            elements={[
            {
                label: "one",
                type: ElementType.TEXT_INPUT
            },
            {
                label: "two",
                type: ElementType.TEXT_INPUT
            }]}
        />
    </>
  )
}

export default App

import { Form } from "../lib/main.ts";

function App() {

  return (
    <div
      style={{ height: "100vh" }}
      className={"d-flex justify-content-center align-items-center"} >
      <div className="col-5">
        <div className="card ">
          <div className="card-body">
            <Form
              buttonText="Зарегистрироваться"
              defaultInvalidText="Пожалуйста заполните поле"
              onButtonClick={(data) => {
                console.log(data)
              }}
              elements={[
                {
                  label: "test",
                  name: "test",
                  type: "input",
                  required: true,
                  properties: {}
                },
                {
                  label: "test2",
                  name: "test2",
                  type: "checkbox",
                  required: true,
                  defaultValue: "true",
                  properties: {}
                },
                {
                  label: "test3",
                  name: "test3",
                  type: "radio",
                  required: true,
                  properties: {
                    options: [
                      "option1",
                      "option2",
                      "option3"
                    ]
                  }
                },
                {
                  label: "test4",
                  name: "test4",
                  type: "select",
                  required: true,
                  properties: {
                    options: [
                      { value: "option1", label: "option1" },
                      { value: "option2", label: "option2" },
                      { value: "option3", label: "option3" }
                    ]
                  }
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
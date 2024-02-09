
import { ElementType, Form } from "../lib/main.ts";

function App() {

  return (
    <div
      style={{ height: "100vh" }}
      className={"d-flex justify-content-center align-items-center"} >
      <div className="col-5">
        <div className="card ">
          <div className="card-body">
            <Form
              title="Регистрация"
              buttonText="Зарегистрироваться"
              defaultInvalidText="Пожалуйста заполните поле"
              onButtonClick={(data) => {
                console.log(data)
              }}
              elements={[
                {
                  type: ElementType.TEXT_INPUT,
                  label: "Имя",
                  name: "name",
                  required: true,
                  properties: {
                  },
                },
                {
                  type: ElementType.TEXT_INPUT,
                  label: "Фамилия",
                  name: "surname",
                  required: true,
                  properties: {
                  },
                },
                {
                  type: ElementType.TEXT_INPUT,
                  label: "Электропочта",
                  name: "email",
                  required: true,
                  properties: {
                    type: "email",
                  },
                },
                {
                  type: ElementType.TEXT_INPUT,
                  label: "Пароль",
                  name: "password",
                  required: true,
                  properties: {
                    type: "password",
                  },
                },
                {
                  type: ElementType.TEXT_INPUT,
                  label: "Повторите пароль",
                  name: "password2",
                  required: true,
                  properties: {
                    type: "password",
                  },
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
import "./App.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import copy from "./assets/copy.svg";
import { generator } from "./utils/generator";
import { useState } from "react";
import Navbar from "./components/navbar";
import Doc from "./components/doc";
import Footer from "./components/footer";

function App() {
  const [result, setResult] = useState<string>(generator(15));

  const initialValues = {
    passwordLength: "15",
  };

  const validation = yup.object().shape({
    passwordLength: yup
      .number()
      .min(10, "password should be atleast 10 character")
      .max(100, "password is too large")
      .required("password length is required"),
  });

  const submit = (values: { passwordLength: string }) => {
    const newPassword: string = generator(Number(values.passwordLength));
    console.log(newPassword.length);

    setResult(newPassword);
  };

  const copyToClipboard = async () => {
    let copyText: any = document.querySelector("#password")?.innerHTML;
    await navigator.clipboard.writeText(copyText);
    console.log(copyText);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main_container">
        <h1 className="heading">password generator</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validationSchema={validation}
        >
          {({ values, handleBlur, handleChange, errors }) => (
            <>
              <Form className="form">
                <input
                  type="text"
                  value={values.passwordLength}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="passwordLength"
                  className="input"
                />

                <button className="btn" type="submit">
                  generate
                </button>
              </Form>
              {errors.passwordLength && (
                <p className="error">{errors.passwordLength}</p>
              )}
            </>
          )}
        </Formik>

        <div className="result">
          <p id="password">{result}</p>
          <button onClick={copyToClipboard}>
            <img src={copy} alt="copy to clipboard" className="clipboard" />
            Copy to Clipboard
          </button>
        </div>
      </div>
      <Doc />
      <Footer />
    </div>
  );
}

export default App;

import emailjs from "@emailjs/browser";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";
import { LanguageContextContact } from "../context/LanguageContextContact";

export default function ContactoForm() {
  const { language, translations, setLanguage } = useContext(
    LanguageContextContact
  );

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      emailjs
        .sendForm(
          "service_k4nhz6e",
          "template_ygrqcak",
          e.target,
          "wnYR1p8-ORmvwBjic"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Form
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
        className="mx-auto  mb-5 p-2 "
      >
        <div>
          <div className="card-body">
            <Row className="mb-2">
              <Form.Group
                className=""
                as={Col}
                md="12"
                controlId="validationCustom03"
              >
                <Form.Label
                  className="montserrat-bold"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  {getTranslation("nombreContacto")}*
                </Form.Label>
                <Form.Control type="text" required name="name" />
                <Form.Control.Feedback type="invalid">
                  {getTranslation("avisoNombreContacto")}*
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label
                  className="montserrat-bold"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  {getTranslation("celContacto")}*
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  type="number"
                  required
                  name="cel"
                />
                <Form.Control.Feedback type="invalid">
                  {getTranslation("avisocelContacto")}*
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label
                  className="montserrat-bold"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  Email*
                </Form.Label>
                <Form.Control type="email" required name="email" />
                <Form.Control.Feedback type="invalid">
                  {getTranslation("avisoEmailContacto")}*
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label
                  className="montserrat-bold"
                  style={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  {getTranslation("consultaContacto")}*
                </Form.Label>
                <InputGroup>
                  <Form.Control className="mb-2" as="textarea" name="msj" />
                </InputGroup>
              </Form.Group>
            </Row>
          </div>
        </div>
        <span className="mt-1  text-light tamaño-medio ">
          * Campos obligatorios
        </span>
        <div className="d-flex justify-content-center ">
          <Button
            className="w-25  border-0 text-white color-btn-fondo"
            size="sm"
            type="submit"
            value="Send"
          >
            <span className="montserrat-bold"> ENVIAR</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}

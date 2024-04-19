import emailjs from "@emailjs/browser";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function ContactoForm() {
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
          "service_t1121d9",
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
                md="6"
                controlId="validationCustom03"
              >
                <Form.Label
                  className="tamaño-medio"
                  style={{ fontWeight: "bold" }}
                >
                  Nombre*
                </Form.Label>
                <Form.Control type="text" required name="name" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label
                  className="tamaño-medio"
                  style={{ fontWeight: "bold" }}
                >
                  Whatsapp*
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  type="number"
                  required
                  name="cel"
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su número de whatsapp completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label
                  className="tamaño-medio mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Email*
                </Form.Label>
                <Form.Control type="email" required name="email" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su Email por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label
                  className="tamaño-medio mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Consulta
                </Form.Label>
                <InputGroup>
                  <Form.Control className="mb-2" as="textarea" name="msj" />
                </InputGroup>
              </Form.Group>
            </Row>
          </div>
        </div>
        <span className="mt-1 text-black-50 tamaño-medio ">
          * Campos obligatorios
        </span>
        <div className="d-flex justify-content-center pt-5">
          <Button
            className="w-25 p-2 border-0 text-white color-btn-fondo"
            size="sm"
            type="submit"
            value="Send"
          >
            <span className=""> ENVIAR</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}

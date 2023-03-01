import React, { useState } from "react";
import { X } from "phosphor-react";
import GithubLogo from "../../images/GitHub-Mark.png";
import Linkedin from "../../images/Linkedin.png";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import {
  ContactForm,
  Input,
  TextArea,
  Button,
  LogoGitHub,
  LogoLinkedin,
} from "./styles";

function ContactDialog() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3333/sendMail", {
      name,
      email,
      subject,
      message,
    });
    if (response.status === 200) {
      alert("Email enviado com sucesso!");
    } else {
      alert("Erro ao enviar email!");
    }
    // sendMail(email, name, subject, message);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="border border-white bg-white text-background py-2 px-4 rounded-lg text-base cursor-pointer transition duration-300 ease-in-out hover:border-white-300 hover:bg-background  hover:text-white"
      >
        Contato
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/25 fixed inset-0" />

        <Dialog.Content
          className="absolute p-10 bg-background border rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            position: "fixed",
            margin: "auto",
            transition: "transform 300ms ease",
          }}
        >
          <Dialog.Close className="absolute right-6 top-6 border border-red-700 text-red-700 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900">
            <X size={24} aria-label="Fechar" />
          </Dialog.Close>
          <Dialog.Title className="text-3xl leading-tight font-extrabold text-primary py-4">
            Formulário para contato
          </Dialog.Title>
          <ContactForm>
            <Input
              type="text"
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Assunto"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextArea
              placeholder="Mensagem"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" onClick={handleSendMail}>
              Enviar
            </Button>
          </ContactForm>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "2rem",
            }}
          >
            <a
              href="https://www.linkedin.com/in/victorhugobp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin src={Linkedin} />
            </a>
            <a
              href="https://github.com/victorbeppler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGitHub src={GithubLogo} />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ContactDialog;

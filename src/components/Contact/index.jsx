import React, { useRef, useState } from "react";
import { X } from "phosphor-react";
import GithubLogo from "../../images/GitHub-Mark.png";
import Linkedin from "../../images/Linkedin.png";
import * as Dialog from "@radix-ui/react-dialog";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  ContactForm,
  Input,
  TextArea,
  Button,
  LogoGitHub,
  LogoLinkedin,
} from "./styles";

function ContactDialog() {

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
          className="absolute p-10 bg-zinc-600 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            position: "fixed",
            margin: "auto",
            transition: "transform 300ms ease",
          }}
        >
          <Dialog.Close className="absolute right-6 top-6 text-red-600 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900">
            <X size={24} aria-label="Fechar" />
          </Dialog.Close>
          <Dialog.Title className="text-3xl leading-tight font-extrabold text-primary py-4">
            Formulário para contato
          </Dialog.Title>
          <ContactForm>
            <Input type="text" placeholder="Nome" required />
            <Input type="email" placeholder="Email" required />
            <TextArea placeholder="Mensagem" required />
            <Button type="submit">Enviar</Button>
          </ContactForm>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
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

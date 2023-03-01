import { transporter } from "./smtp-email-config.js";

export class SmtpEnviarEmail {
  async executar(nome, email, assunto, descricao) {
    await transporter.sendMail({
      from: "victorhugobeppler@gmail.com",
      to: "victorhugobeppler@gmail.com",
      subject: `${assunto}`,
      text: `Nome: ${nome}  --- E-mail: ${email}
      
      Descrição: ${descricao}`,
    });
  }
}

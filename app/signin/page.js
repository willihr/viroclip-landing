import { redirect } from "next/navigation";
import BackToTop from "../backToTop";
import SigninPage from "./index";

export const metadata = {
  title: "Acesse sua Conta | ViroClip",
  description:
    "Acesse sua conta ViroClip para gerenciar seus projetos e continuar criando cortes virais para suas redes sociais.",
};

const SigninLayout = () => {
  redirect("https://app.viroclip.com/login");

  return (
    <>
      <SigninPage />
      <BackToTop />
    </>
  );
};

export default SigninLayout;

import { IErrorProps } from "@/@types/globals";
import ErrorMessage from "../ErrorMessage";

const ErrorPage = ({ reset }: IErrorProps) => {
  return (
    <div className="px-4">
      <ErrorMessage
        firstMessage={"Ops! Parece que algo não está funcionando."}
      />
      <p className="mt-4 text-center">
        Não se preocupe, nosso aplicativo ainda tem muito a oferecer. Continue
        explorando nossos produtos e aproveite sua experiência de compras!
      </p>
      <p className="mt-2 text-center">ou</p>
      <div className="flex justify-center text-center">
        <button onClick={reset}>Tente novamente</button>
      </div>
    </div>
  );
};

export default ErrorPage;

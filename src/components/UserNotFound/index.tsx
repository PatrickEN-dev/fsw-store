import React from "react";

interface IUserNotFoundProps {
  message?: string;
}

const UserNotFound = ({ message }: IUserNotFoundProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
      <h2 className="font-bold">Acesso Negado!</h2>
      {message && <p className="text-sm opacity-60">{message}</p>}
    </div>
  );
};

export default UserNotFound;

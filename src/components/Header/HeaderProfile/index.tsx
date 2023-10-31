"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function HeaderProfile({ data }: any) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 py-4">
        <Avatar>
          <AvatarFallback>{data?.user.name?.[0].toUpperCase()}</AvatarFallback>

          {data?.user.image && <AvatarImage src={data?.user.image} />}
        </Avatar>

        <div className="flex flex-col">
          <p className="font-medium">{data?.user.name}</p>
          <p className="text-sm opacity-75">Boas compras!</p>
        </div>
      </div>
      <Separator />
    </div>
  );
}

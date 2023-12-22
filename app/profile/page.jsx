"use client";

import { ICircleIcon, PencilSquareIcon } from "@/components/icons/svgr";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MyProfilePage = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="lg:p-6 xl:p-10">
      <div className="text-center">
        <Avatar className="h-40 w-40 mb-5 mx-auto">
          <AvatarImage src="/images/profile/avatar.png" />
          <AvatarFallback>IH</AvatarFallback>
        </Avatar>
        <h1 className="text-t-800 text-2xl lg:text-[2rem] font-semibold mb-2.5">
          Irfanul Haque
        </h1>
        <p className="text-base lg:text-lg text-t-600 mb-5">
          mdirfanulhaque2020@gmail.com
        </p>
        {!edit && (
          <Button size="sm" onCLick={() => setEdit(true)}>
            Edit Profile
            <PencilSquareIcon />
          </Button>
        )}
        <div className="flex justify-center gap-x-1 text-base lg:text-lg text-t-600 leading-relaxed mt-8 mb-10">
          <span className="text-primary">
            <ICircleIcon />
          </span>
          Enter details exactly as they appear on your passport
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;

"use client";

import { ICircleIcon, PencilSquareIcon } from "@/components/icons/svgr";
import ProfileForm from "@/components/profile/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const MyProfilePage = () => {
  const [edit, setEdit] = useState(false);

  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-10">
        <div className="flex flex-col items-center">
          <Avatar className="h-40 w-40 mb-5 mx-auto">
            <AvatarImage src="/images/profile/avatar.png" />
            <AvatarFallback className="text-4xl">I.H</AvatarFallback>
          </Avatar>
          <h1 className="text-t-800 text-2xl lg:text-[2rem] font-semibold mb-2.5">
            Irfanul Haque
          </h1>
          <p className="text-base lg:text-lg text-t-600">
            mdirfanulhaque2020@gmail.com
          </p>
          {!edit && (
            <div className="mt-5">
              <Button size="sm" onClick={() => setEdit(true)}>
                Edit Profile
                <PencilSquareIcon />
              </Button>
            </div>
          )}
          <div className="flex items-start justify-center gap-x-2 text-base lg:text-lg text-t-600 leading-relaxed mt-8">
            <span className="text-primary inline-flex items-center justify-center">
              <ICircleIcon />
            </span>
            Enter details exactly as they appear on your passport
          </div>
        </div>
        <ProfileForm edit={edit} setEdit={setEdit} />
      </CardContent>
    </Card>
  );
};

export default MyProfilePage;

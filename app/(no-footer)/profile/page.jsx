"use client";
import { auth } from "@/auth";
import ProfileForm from "@/components/profile/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { generateImage } from "@/lib/utils";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import updateProfile from "@/actions/profile/update";
import moment from "moment";

const MyProfilePage = () => {
  const [edit, setEdit] = useState(false);
  const { data, update } = useSession();
  const [profileData, setProfileData] = useState();
  const user = data?.user;
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileData(file)

  };

  const onSubmit = async (data) => {
    data.dob = moment(data.dob).format("YYYY-MM-DD");
    data.avatar = profileData;
    try {
      setLoading(true);
      // Filter out empty values
      const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
        if (value !== "" && value !== undefined && value !== null) {
          acc[key] = value;
        }
        return acc;
      }, {});

      // Prepare FormData
      const formData = new FormData();
      Object.keys(filteredData).forEach((key) => {
        formData.append(key, filteredData[key]);
      });

      const response = await updateProfile(formData);
      update({ ...response?.customer })
      await withReactContent(Swal).fire({
        title: "Success",
        text: response.message,
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#3ad965",
        allowOutsideClick: false,
      });
      if (typeof window != undefined) {
        window.location.reload();
      }
    } catch (error) {
      await withReactContent(Swal).fire({
        title: "Error",
        text: error?.message || "An error occurred. Please try again",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ff0f2f",
        allowOutsideClick: false,
      });
    } finally {
      setLoading(false);
    }
  };
  console.log();
  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-10">
        <div className="flex flex-col items-center">
          {/* Wrap avatar with a label to make it clickable */}
          <label htmlFor="avatar" className="cursor-pointer">
            <Avatar className="h-40 w-40 mb-5 mx-auto relative ">
              {
                profileData instanceof File && <AvatarImage src={URL.createObjectURL(profileData)} alt={user?.name} />
              }
              {
                user?.avatar && !(profileData instanceof File )? (
                  <AvatarImage src={generateImage(user?.avatar)} alt={user?.name} />
                ) : (
                  <AvatarFallback>
                    {user?.name?.charAt(0)}
                  </AvatarFallback>
                )
              }
              <input
                id="avatar"
                name="avatar"
                type="file"
                disabled={!edit}
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Avatar>
          </label>
          <h1 className="text-t-800 text-2xl lg:text-[28px] font-semibold mb-5">
            {user?.name}
          </h1>
          <Link href={`mailto:${user?.email}`} className="text-lg text-t-800">
            {user?.email}
          </Link>
        </div>
        <ProfileForm user={user} onSubmit={onSubmit} loading={loading} edit={edit} setEdit={setEdit} />
      </CardContent>
    </Card>
  );
};

export default MyProfilePage;

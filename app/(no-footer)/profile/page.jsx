import { auth } from "@/auth";
import ProfileForm from "@/components/profile/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { generateImage } from "@/lib/utils";
import Link from "next/link";

const MyProfilePage = async () => {
  const { user } = (await auth()) || {};

  return (
    <Card className="border-transparent mb-8">
      <CardContent className="lg:p-10 space-y-10">
        <div className="flex flex-col items-center">
          <Avatar className="h-40 w-40 mb-5 mx-auto">
            {user?.avatar ? (
              <AvatarImage src={generateImage(user.avatar)} />
            ) : (
              <AvatarFallback className="text-4xl bg-p-300 text-primary">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
          <h1 className="text-t-800 text-2xl lg:text-[28px] font-semibold mb-5">
            {user?.name}
          </h1>
          <Link href={`mailto:${user?.email}`} className="text-lg text-t-800">
            {user?.email}
          </Link>
        </div>
        <ProfileForm user={user} />
      </CardContent>
    </Card>
  );
};

export default MyProfilePage;

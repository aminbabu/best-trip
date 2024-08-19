import authenticateUser from "@/lib/db/auth/authenticate-user";
import NextAuth from "next-auth";
import Creadentials from "next-auth/providers/credentials";

const providers = [
  Creadentials({
    credentials: {
      email: {
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
      },
      password: {
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
      },
    },
    async authorize(credentials) {
      try {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const { user, token, error } = await authenticateUser(credentials);

        if (error) {
          throw new Error(error?.message);
        }

        return {
          ...user,
          accessToken: token,
        };
      } catch (error) {
        throw new Error(
          error?.message ||
            "An error occured. Please check your credentials and try again."
        );
      }
    },
  }),
];

export const callbacks = {
  jwt: ({ token, user }) => {
    if (user) {
      token.user = user;
    }

    return token;
  },
  session: ({ session, token }) => {
    return { ...session, ...token };
  },
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: Number(process.env.JWT_EXPIRY),
  },
  providers,
  callbacks,
});

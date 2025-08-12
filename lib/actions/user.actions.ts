"use server";

import { signInFormSchema, signUpFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { formatError } from "../utils";

// sign in with credential
export async function signInWithCredential(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid email or password" };
  }
}

// sign user out

export async function signOutUser() {
  await signOut();
}

// signup user
export async function signUpUser(prevState: unknown, formData: FormData) {

  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainPassword = formData.get('password')
    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });
    return {
        success: true,
        message: "user registered successfully"
    }
  } catch (error) {
    // console.error( 'name', error.name)
    // console.error('code', error.code)
    // console.error( 'errors', error.errors)
    formatError(error)
    if(isRedirectError(error)) {
        throw error
    }
    return{
        success: false, message: formatError(error)
    }
  }
}

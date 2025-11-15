"use server";

import { cookies } from "next/headers";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    const cookieStore = await cookies();
    cookieStore.set({
      name: "idToken",
      value: idToken,
      httpOnly: true,
      secure: true,
      path: "/",
    });

    redirect("/dashboard");

  } catch (error) {
    redirect("/login?error=1");
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("idToken");

  await signOut(auth);

  redirect("/login");
}

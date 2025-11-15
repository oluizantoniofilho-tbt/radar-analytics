"use server";

import { cookies } from "next/headers";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    // NOVO PADRÃO NEXT.JS 15/16
    const cookieStore = await cookies();
    cookieStore.set({
      name: "idToken",
      value: idToken,
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function logout() {
  try {
    // limpa cookies no Next.js 16
    const cookieStore = await cookies();
    cookieStore.delete("idToken");

    await signOut(auth);

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

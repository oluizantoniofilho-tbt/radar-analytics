"use server";

import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    cookies().set('idToken', idToken, { secure: true, httpOnly: true });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function logout() {
  cookies().delete('idToken');
}

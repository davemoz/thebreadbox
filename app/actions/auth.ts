"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase.server";

export async function loginAction(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
  if (error) {
    redirect("/account/login?error=" + encodeURIComponent(error.message));
  }
  redirect("/recipes");
}

export async function signupAction(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
  if (error) {
    redirect("/account/signup?error=" + encodeURIComponent(error.message));
  }
  redirect("/recipes");
}

export async function signoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

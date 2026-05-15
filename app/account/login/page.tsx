import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase.server";
import Sidebar from "@/components/Sidebar";
import LoginForm from "@/components/LoginForm";
import "@/styles/Account.css";

export const runtime = "edge";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/recipes");
  }

  const { error } = await searchParams;

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <h1>Log in!</h1>
        <LoginForm error={error} />
      </div>
    </div>
  );
}

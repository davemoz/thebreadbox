import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase.server";
import Sidebar from "@/components/Sidebar";
import SignupForm from "@/components/SignupForm";
import "@/styles/Account.css";

export const runtime = "edge";

export default async function SignupPage({
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
        <h1>Create an account!</h1>
        <SignupForm error={error} />
      </div>
    </div>
  );
}

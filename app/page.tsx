import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase.server";
import Sidebar from "@/components/Sidebar";
import "./styles/Homepage.css";

export const runtime = "edge";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/recipes");
  }

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <h1>Welcome to The Bread Box!</h1>
        <Link href="/account/login">Log in</Link>
        {" · "}
        <Link href="/account/signup">Create an account</Link>
      </div>
    </div>
  );
}

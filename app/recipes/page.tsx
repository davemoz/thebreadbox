import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase.server";
import Sidebar from "@/components/Sidebar";
import "@/styles/RecipesPage.css";

export const runtime = "edge";

export default async function RecipesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account/login");
  }

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <div>My Recipes</div>
      </div>
    </div>
  );
}

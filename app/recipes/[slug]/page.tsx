import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase.server";
import Sidebar from "@/components/Sidebar";

export const runtime = "edge";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/account/login");
  }

  const { slug } = await params;

  const recipe = {
    name: "My Recipe",
    image: "https://placekitten.com/g/200/200",
    notes: "Some notes",
    favorite: true,
    slug,
  };

  return (
    <div className="main">
      <Sidebar />
      <div id="recipe">
        <div>
          <img alt={recipe.name} src={recipe.image} />
        </div>
        <div>
          <h1>{recipe.name || <i>No Name</i>}</h1>
          {recipe.notes && <p>{recipe.notes}</p>}
        </div>
      </div>
    </div>
  );
}

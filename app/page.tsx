import Hero from "@/components/hero";
import ThemeSwitcher from "@/components/theme-switcher";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default function Home() {
  // const supabase = await createClient();
  // const { data } = await supabase.auth.getClaims();
  // if (data?.claims) redirect("/task");
  return (
    <main>
      <Hero />
      <ThemeSwitcher />
    </main>
  );
}

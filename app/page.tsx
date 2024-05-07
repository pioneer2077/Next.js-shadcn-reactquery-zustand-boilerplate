import { Button } from "@/components/ui/button";
import { supabaseServer } from "@/lib/supabase/server";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <Button>hello world</Button>
    </div>
  );
}

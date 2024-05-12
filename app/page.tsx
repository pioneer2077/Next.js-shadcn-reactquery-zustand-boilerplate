import { Button } from "@/components/ui/button";
import { supabaseServer } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/profile">profile</Link>
    </div>
  );
}

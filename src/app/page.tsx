import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/data/dictionaries";

export default function RootRedirectPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}

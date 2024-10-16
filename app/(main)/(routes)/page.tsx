import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <div className="flex items-center justify-between">
      <UserButton />
      <ModeToggle />
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <Image
        src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        alt="Discord Clone Logo"
        width={200}
        height={300}
        className="mb-4"
      />
      <h1 className="text-2xl font-bold text-center">
        Welcome to Discord Clone
      </h1>
    </div>
  );
}

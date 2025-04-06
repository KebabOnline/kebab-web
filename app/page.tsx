import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebab.ws",
  description: "🐸",
}

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Kebab.ws</h1>
        <img className="w-50 h-auto m-4" src="https://i.pinimg.com/736x/9c/09/cc/9c09cc83a8b2fe8d8a857958632c00c2.jpg"/>
        <p className="text-lg">under construction</p>
      </div>
    </main>
  );
}

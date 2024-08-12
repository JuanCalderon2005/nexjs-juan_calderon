import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-20 flex-col ">
      <h1 className="text-4xl font-bold">My Homepage</h1>
      <a href="/page1" className="text-blue-500">aqui page 1</a>
      <a href="/page2" className="text-blue-500">aqui page 2</a>
    </div>
  );
}

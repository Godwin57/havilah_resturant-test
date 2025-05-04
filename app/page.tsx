import Image from "next/image";
import plate_0 from "@/assets/home.png";

export default function Home() {
  return (
    <main>
      <header className="mt-20">
        <div>
          <h1 className="text-[36px] text-[#069C54] font-semibold">
            Tasty food
          </h1>
          <p>Try the best food of the week</p>
        </div>
        <Image
          src={plate_0}
          alt="Picture of a plate of food"
          width={300}
          height={300}
        />
      </header>
    </main>
  );
}

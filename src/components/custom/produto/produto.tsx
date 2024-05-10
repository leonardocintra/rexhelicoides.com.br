import Image from "next/image";

export default function Produto() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center pb-8 px-2">
      <div>
        <Image
          src={
            "https://res.cloudinary.com/rexhelicoides/image/upload/v1712935701/vvfynthunrenmqxfim6m.jpg"
          }
          width={400}
          height={400}
          alt="Helicoide perfeito"
          className="rounded-full"
        />
      </div>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/rexhelicoides/image/upload/v1712935701/dkijdr6auyanqd6isb5g.jpg"
          }
          width={400}
          height={400}
          alt="Helicoide perfeito"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

import Logo from "@/components/custom/logo";
import HomeCard from "@/components/custom/home/home-card";
import Produto from "@/components/custom/produto/produto";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-1 pt-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <div className="flex sm:text-4xl text-3xl font-medium title-font mb-2 bg-luqinha text-white p-5 rounded-md sm:max-w-sm items-center space-x-2">
              <Logo />
            </div>
            <div className="h-1 w-48 bg-blue-500 rounded"></div>
            <div className="max-w-md text-center sm:text-right my-4">
              <div className="font-semibold font-leagueSpartan pt-4 text-5xl italic">
                Roscas Helicoidais
              </div>
              <div
                className={`uppercase font-blackOpsOne text-orange-700 text-3xl`}
              >
                Sob Medida
              </div>
            </div>
          </div>
          <p className="flex lg:w-1/2 leading-relaxed text-black bg-orange-700 p-4 rounded-full shadow-md shadow-amber-600 text-xl sm:text-4xl text-center italic font-semibold items-center justify-center">
            Fabricamos helicoides sob medida, em chapas de até 1/2 polegada
          </p>
        </div>
      </div>

      <div className="bg-luqinha">
        <div className="my-8 text-slate-50 rounded-sm py-8 text-center text-lg sm:text-3xl">
          Podemos trabalhar com estoque, de acordo com a sua demanda!
        </div>

        <div className="rounded-3xl text-center">
          <div className="text-orange-600 p-4">
            <h1 className="text-7xl font-bebasNeue">Roscas Helicoidais</h1>
            <h2 className="text-4xl text-orange-500 font-blackOpsOne uppercase">
              Sob Medida
            </h2>
          </div>
          <h4 className="text-white py-2 pb-6 text-4xl">
            Fabricamos na medida que você precisar!
          </h4>
        </div>

        <Produto />
      </div>

      <div className="bg-orange-700 py-8 flex items-center justify-center">
        <Link href={"/video"}>
          <h2 className="text-white font-leagueSpartan text-center text-3xl sm:text-5xl border max-w-lg rounded-lg px-2 py-3 bg-orange-600 transition-colors hover:bg-orange-800 shadow-lg">
            Clique aqui e veja funcionamento
          </h2>
        </Link>
      </div>
    </section>
  );
}

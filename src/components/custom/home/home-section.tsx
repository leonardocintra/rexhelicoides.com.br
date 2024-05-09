import Logo from "@/components/custom/logo";
import HomeCard from "./home-card";
import Roscas from "../produto/roscas";

export default function HomeSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
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
              <div className={`uppercase font-blackOpsOne text-orange-700 text-3xl`}>
                Sob Medida
              </div>
            </div>
          </div>
          <p className="flex lg:w-1/2 leading-relaxed text-black bg-orange-700 p-4 rounded-full shadow-md shadow-amber-600 text-xl sm:text-4xl text-center italic font-semibold items-center justify-center">
            Fabricamos helicoides sob medida, em chapas de até 1/2 polegada
          </p>
        </div>

        <div className="my-8 bg-luqinha text-slate-50 rounded-sm py-8 text-center text-lg sm:text-3xl">
          Podemos trabalhar com estoque, de acordo com a sua demanda!
        </div>

        <Roscas />

        <div className="text-center">
          <h2 className="text-4xl mb-8">Nossos produtos</h2>
        </div>

        <div className="flex flex-wrap -m-4">
          <HomeCard
            imagem={
              "https://res.cloudinary.com/rexhelicoides/image/upload/v1712935701/vvfynthunrenmqxfim6m.jpg"
            }
            titulo="QUALIDADE"
            subTitulo="Trabalho final"
            descricaoo="Qualidade na finalização do produto"
          />
          <HomeCard
            imagem={
              "https://res.cloudinary.com/rexhelicoides/image/upload/v1712936563/photo_2023-03-15_20-22-16_z6hfzy.jpg"
            }
            titulo="TESTADO"
            subTitulo="Testado em campo"
            descricaoo="Também somos consumidores dos nossos helicoides"
          />
          <HomeCard
            imagem={
              "https://res.cloudinary.com/rexhelicoides/image/upload/v1712935701/tiq9x6f9frd9wsuihmh7.jpg"
            }
            titulo="PERFEITO"
            subTitulo="Excelencia"
            descricaoo="Feito para ter o melhor desempenho"
          />
          <HomeCard
            imagem={
              "https://res.cloudinary.com/rexhelicoides/image/upload/v1712940564/sydugntbvx7pyfgxizo5.jpg"
            }
            titulo="NA CARRETA"
            subTitulo="Todos os formatos"
            descricaoo="Trabalhamos sob medida"
          />
        </div>
      </div>
    </section>
  );
}

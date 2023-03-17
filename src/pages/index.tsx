import Image from "next/image";
import Opinioes from "../components/home/opinioes";
import Produto from "../components/produto/produto";
import RootLayout from "./layout";
import fotoMarquito from "../../public/img/equipe/comarca.jpeg";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Rex - Helicoides
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Somos uma empresa de helicoides especializada na fabricação e
              fornecimento de componentes de transmissão de energia, incluindo
              engrenagens helicoidais. Com equipes de design e engenharia, eles
              criam soluções personalizadas para atender às necessidades
              específicas dos clientes. Oferecem serviços de reparo e
              manutenção, além de outros produtos relacionados, para fornecer
              soluções completas de transmissão de energia.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={fotoMarquito}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  Helocoide X
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Brutão de carreta
                </h2>
                <p className="leading-relaxed text-base">
                  Para você acoplar na sua carreta e esparrar o esterco no chão
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={fotoMarquito}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={fotoMarquito}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={fotoMarquito}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Produto />
      <Opinioes />
    </RootLayout>
  );
}

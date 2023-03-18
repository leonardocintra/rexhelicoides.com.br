import Image from "next/image";
import Produto from "../components/produto/produto";
import RootLayout from "./layout";
import imagemHelicoideNaCarreta from "../../public/img/helicoides/helicoide-na-carreta.jpeg";
import imagemHelicodeVertical21 from "../../public/img/helicoides/horizontal/helicoide-21.jpeg";
import imagemHelicodeVertical22 from "../../public/img/helicoides/horizontal/helicoide-22.jpeg";
import imagemHelicodeVertical23 from "../../public/img/helicoides/horizontal/helicoide-23.jpeg";
import Logo from "../components/home/Logo";
import Opinioes from "../components/home/Opinioes";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <div className="flex sm:text-4xl text-3xl font-medium title-font mb-2 bg-luqinha text-white p-5 rounded-md sm:max-w-sm items-center space-x-2">
                <Logo />
              </div>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Somos uma empresa de helicoides especializada na fabricação e
              fornecimento de componentes de transmissão de energia, incluindo
              engrenagens helicoidais. Com equipes de design e engenharia, que
              criam soluções personalizadas para atender às necessidades
              específicas dos clientes. Também oferecemos serviços de reparo e
              manutenção, além de outros produtos relacionados, para fornecer
              soluções completas de transmissão de energia.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <video
                  autoPlay
                  loop
                  muted
                  className="h-40 rounded w-full object-cover object-center mb-6"
                >
                  <source src="/video/helicoide.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  QUALIDADE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Trabalho final
                </h2>
                <p className="leading-relaxed text-base">
                  Qualidade na finalização do produto
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={imagemHelicoideNaCarreta}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  TESTADO
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Testado em campo
                </h2>
                <p className="leading-relaxed text-base">
                  Também somos consumidores dos nossos helicoides
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={imagemHelicodeVertical22}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  PERFEITO
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Excelencia
                </h2>
                <p className="leading-relaxed text-base">
                  Feito para ter o melhor desempenho
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={imagemHelicodeVertical23}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                  NA CARRETA
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Todos os formatos
                </h2>
                <p className="leading-relaxed text-base">
                  Trabalhamos sob medida
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

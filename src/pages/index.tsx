import Produto from "../components/produto/produto";
import RootLayout from "./layout";
import imagemHelicoideNaCarreta from "../../public/img/helicoides/helicoide-na-carreta.jpeg";
import imagemHelicodeVertical22 from "../../public/img/helicoides/horizontal/helicoide-22.jpeg";
import imagemHelicodeVertical23 from "../../public/img/helicoides/horizontal/helicoide-23.jpeg";
import Logo from "../components/home/Logo";
import Opinioes from "../components/home/Opinioes";
import Card from "../components/home/Card";

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
            <Card
              imagem={imagemHelicoideNaCarreta}
              titulo="QUALIDADE"
              subTitulo="Trabalho final"
              descricaoo="Qualidade na finalização do produto"
            />
            <Card
              imagem={imagemHelicoideNaCarreta}
              titulo="TESTADO"
              subTitulo="Testado em campo"
              descricaoo="Também somos consumidores dos nossos helicoides"
            />
            <Card
              imagem={imagemHelicodeVertical22}
              titulo="PERFEITO"
              subTitulo="Excelencia"
              descricaoo="Feito para ter o melhor desempenho"
            />
            <Card
              imagem={imagemHelicodeVertical23}
              titulo="NA CARRETA"
              subTitulo="Todos os formatos"
              descricaoo="Trabalhamos sob medida"
            />
          </div>
        </div>
      </section>
      <Produto />
      <Opinioes />
    </RootLayout>
  );
}

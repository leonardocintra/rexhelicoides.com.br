import Logo from "@/components/custom/logo";
import HomeCard from "./home-card";

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
            <div className="font-semibold font-leagueSpartan pt-4 text-2xl">
              Fabricamamos helicóides sob medida
            </div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-700 bg-gray-200 px-7 py-5 rounded-lg shadow-lg">
            Somos uma empresa de helicóides especializada na fabricação e
            fornecimento de componentes de transmissão de energia, incluindo
            engrenagens helicoidais. Com equipes de design e engenharia, que
            criam soluções personalizadas para atender às necessidades
            específicas pra vocês.
            <br /> <br />
            Fique tranquilo, oferecemos serviços de reparo e manutenção, além de
            outros produtos relacionados, para fornecer soluções completas de
            transmissão de energia.
          </p>
        </div>

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
            imagem={"https://res.cloudinary.com/rexhelicoides/image/upload/v1712940564/sydugntbvx7pyfgxizo5.jpg"}
            titulo="NA CARRETA"
            subTitulo="Todos os formatos"
            descricaoo="Trabalhamos sob medida"
          />
        </div>
      </div>
    </section>
  );
}

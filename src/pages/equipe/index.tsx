import ContatoCard from "../../components/contato/ContatoCard";
import FotosEquipe from "../../components/utils/fotos-path";
import RootLayout from "../layout";

export default function Equipe() {
  return (
    <RootLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Nossa equipe
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Somos uma equipe responsável pela fabricação de helicoides
              composta por profissionais altamente capacitados e experientes,
              que possuem um profundo conhecimento técnico sobre o assunto.
            </p>
            <p>
              somos especializados em diferentes áreas, como engenharia
              mecânica, agricultura, soldagem, dentre outras, e trabalhamos em
              conjunto para produzir helicoides de alta qualidade. Com uma
              abordagem colaborativa e multidisciplinar, nossa a equipe de
              fabricação de helicoides busca constantemente aperfeiçoar seus
              processos e técnicas, visando sempre à excelência e à satisfação
              do cliente.
            </p>

            <p>
              Somos profissionais! Além disso, estamos sempre em busca de
              inovações e tendências do mercado, a fim de oferecer soluções
              personalizadas e atualizadas para cada projeto. Com um compromisso
              inabalável com a qualidade, a precisão e a eficiência, nossa
              equipe de fabricação de helicoides é altamente dedicada e
              comprometida com o sucesso de cada projeto, garantindo sempre o
              melhor resultado para seus clientes.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <ContatoCard
              fotoSrc={FotosEquipe.fotoJoaoMarcos}
              nome="João Marcos Cintra"
              cargo="co-fundador / CEO"
              descricao="Formado em Engenharia Mecanica, tratorista, bolsonarista firme viu..."
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoLuquinha}
              nome="Lucas Carrijo"
              cargo="co-fundador / CEO"
              descricao="Formado em Engenharia Mecanica, tratorista, bolsonarista firme viu..."
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoMarilia}
              nome="Marilia Cintra"
              cargo="Diretora Comunicação"
              descricao="Noiva do CEO Lucas e manja de Instagram, Reels, Stories e tudo paara atender o cliente com rapidez e seriedade"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoLeonardo}
              nome="Leonardo Cintra"
              cargo="Gerente de TI"
              descricao="Formado em Sistemas de Informação e desenvolvedor desse site e gerencia toda a parte de TI da empresa"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoPedro}
              nome="Pedro José Cintra"
              cargo="Gerente Agrônomo"
              descricao="Formado em Engenharia Agronoma, vai casar com a Stela e esta ai pra dar todas as orientações para agricultura"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoDaniel}
              nome="Daniel Cintra"
              cargo="Investidor"
              descricao="Tentou várias faculdades e não foi pra frente, mas tem grana e esta financiando essa empresa, pesquisa. O cabra é bom."
            />
          </div>
        </div>
      </section>
    </RootLayout>
  );
}

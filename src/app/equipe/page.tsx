import ContatoCard from "@/components/custom/contato/contato-card";
import FotosEquipe from "@/utils/foto-equipe";

export default function Equipe() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Conheça nosso time
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              Somos uma equipe responsável pela fabricação de helicoides
              composta por profissionais altamente capacitados e experientes,
              que possuem um profundo conhecimento técnico sobre o assunto.
              <br />
              <br />
              Empresa com profissionais especializados em diferentes áreas, como
              engenharia mecânica, agricultura, soldagem, dentre outras, e
              trabalhamos em conjunto para produzir helicoides de alta
              qualidade. Com uma abordagem colaborativa e multidisciplinar,
              nossa a equipe de fabricação de helicoides busca constantemente
              aperfeiçoar seus processos e técnicas, visando sempre à excelência
              e à satisfação do cliente.
              <br />
              <br />
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
              descricao="Engenheiro Mecânico, agricultor e produtor de café"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoLuquinha}
              nome="Lucas Carrijo"
              cargo="co-fundador / CEO"
              descricao="Engenheiro Mecânico, agricultor e produtor de café"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoMarilia}
              nome="Marilia Cintra"
              cargo="Diretora Comunicação"
              descricao="Comunicação em geral, piscicologa e recursos humanos"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoLeonardo}
              nome="Leonardo Cintra"
              cargo="Gerente de TI"
              descricao="Formado em Sistemas de informação. Gerencia toda a parte de infomação, tecnologia e redes sociais."
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoPedro}
              nome="Pedro José Cintra"
              cargo="Gerente Agrônomo"
              descricao="Engenheiro agrônomo responsavel por orientação e pesquisa em conjunto com os engenheiros mecânicos para desenvolvimento maquina-campo quando necessário"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoDaniel}
              nome="Daniel Cintra"
              cargo="Gerente de qualidade"
              descricao="Testa e avalia qualidade"
            />
            <ContatoCard
              fotoSrc={FotosEquipe.fotoPaulo}
              nome="Paulo Carrijo"
              cargo="Gerente Financeiro"
              descricao="Formado em Administração. Responsavel Tesouraria, Fisco e Contabilidade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

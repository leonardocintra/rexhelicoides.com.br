import Image from "next/image";
import FotosEquipe from "../utils/fotos-path";

export default function Opinioes() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={FotosEquipe.fotoJoaoMarcos}
              />
              <p className="leading-relaxed">
                Me sinto motivado pelo desafio de projetar helicoides que sejam
                resistentes, duráveis e capazes de lidar com as demandas e
                condições extremas do trabalho agrícola. Estou orgulhoso de
                poder contribuir para a produção de café e outros alimentos e
                para o desenvolvimento da economia.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                JOÃO MARCOS CINTRA
              </h2>
              <p className="text-gray-500">co-fundador / CEO</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={FotosEquipe.fotoLuquinha}
              />
              <p className="leading-relaxed">
                Tenho me atualizado com as últimas tecnologias e
                inovações da minha área, e em aprimorar continuamente nossos
                métodos e processos de fabricação de helicoides para garantir
                que atendam às necessidades dos nossos clientes.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                LUCAS CARRIJO
              </h2>
              <p className="text-gray-500">co-fundador / CEO</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={FotosEquipe.fotoLeonardo}
              />
              <p className="leading-relaxed">
                Quando fiquei sabendo do projeto, resolvi contribuir com
                esse site e gerenciar toda informação da internet. Para que
                mais pessoas conhecam o projeto e possam usa - las em suas
                fazendas para melhorar a produtividade. E claro também a
                compartilhar conhecimento de forma mais ampla.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                LEONARDO CINTRA
              </h2>
              <p className="text-gray-500">Gerente de TI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

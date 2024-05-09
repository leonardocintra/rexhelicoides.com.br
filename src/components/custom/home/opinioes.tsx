import FotosEquipe from "@/utils/foto-equipe";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const opinioes = [
  {
    id: 1,
    nome: "Lucas Carrijo",
    whastapp: "(35) 9 9991-0614",
    fotoSrc: FotosEquipe.fotoLuquinha,
    opiniao:
      " Tenho me atualizado com as últimas tecnologias e inovações da minha área, e em aprimorar continuamente nossos métodos e processos de fabricação de helicoides para garantir que atendam às necessidades dos nossos clientes.",
  },
  {
    id: 2,
    nome: "João Marcos",
    whastapp: "(35) 9 9671-9409",
    fotoSrc: FotosEquipe.fotoJoaoMarcos,
    opiniao:
      "Me sinto motivado pelo desafio de projetar helicoides que sejam resistentes, duráveis e capazes de lidar com as demandas e condições extremas do trabalho agrícola. Estou orgulhoso de poder contribuir para a produção de café e outros alimentos e para o desenvolvimento da economia.",
  },
];

export default function Opinioes() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {opinioes.map((o) => (
            <div key={o.id} className="lg:w-1/2 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center flex flex-col items-center">
                <Image
                  width={500}
                  height={500}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={o.fotoSrc}
                />
                <p className="leading-relaxed">{o.opiniao}</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  {o.nome}
                </h2>
                <p className="text-gray-500">co-fundador / CEO</p>

                <div className="mt-3 flex justify-center items-center space-x-2 bg-green-700 hover:bg-green-800 text-white max-w-56 px-4 py-3 rounded-lg">
                  <FaWhatsapp className="text-3xl" />
                  <span className="font-semibold font-leagueSpartan text-xl">
                    {o.whastapp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

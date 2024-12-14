import FotosEquipe from "@/utils/foto-equipe";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const opinioes = [
  {
    id: 1,
    nome: "Lucas Carrijo",
    whastapp: "(35) 99991-0614",
    fotoSrc: FotosEquipe.fotoLuquinha,
    opiniao: "Representante da Rex Helicoides",
  },
  {
    id: 2,
    nome: "João Marcos",
    whastapp: "(35) 99671-9409",
    fotoSrc: FotosEquipe.fotoJoaoMarcos,
    opiniao: "Representante da Rex Helicoides",
  },
];

export default function Opinioes() {
  function handleWhastapp(numero: string) {
    return numero
      .replace(" ", "")
      .replace("(", "")
      .replace(")", "")
      .replace("-", "")
      .trim();
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {opinioes.map((o) => (
            <div key={o.id} className="p-10 border rounded-lg border-luqinha shadow-lg">
              <div className="text-center flex flex-col items-center">
                <Image
                  width={600}
                  height={600}
                  alt="testimonial"
                  className="h-48 w-48 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={o.fotoSrc}
                />
                <p className="leading-relaxed">{o.opiniao}</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  {o.nome}
                </h2>
                <p className="text-gray-500">co-fundador / CEO</p>

                <Link
                  target="_blank"
                  href={`https://wa.me/55${handleWhastapp(
                    o.whastapp
                  )}?text=Ola, ${
                    o.nome
                  }! Vim do site rexhelicoides.com.br e gostaria de mais informações. `}
                >
                  <div className="flex justify-center items-center mt-3 space-x-2 bg-green-700 hover:bg-green-800 text-white max-w-56 px-4 py-3 rounded-lg">
                    <FaWhatsapp className="text-3xl" />
                    <span className="font-semibold font-leagueSpartan text-xl">
                      {o.whastapp}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

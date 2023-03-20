import Image from "next/image";
import { useState } from "react";
import imagemHelicoide1 from "../../../public/img/helicoides/vertical/helicoide-1.jpeg";
import imagemHelicoide2 from "../../../public/img/helicoides/vertical/helicoide-2.jpeg";
import imagemHelicoide3 from "../../../public/img/helicoides/vertical/helicoide-3.jpeg";
import imagemHelicoide4 from "../../../public/img/helicoides/vertical/helicoide-4.jpeg";
import imagemHelicoide5 from "../../../public/img/helicoides/vertical/helicoide-5.jpeg";
import imagemHelicoide6 from "../../../public/img/helicoides/vertical/helicoide-6.jpeg";
import imagemHelicoide7 from "../../../public/img/helicoides/vertical/helicoide-7.jpeg";
import imagemHelicoide8 from "../../../public/img/helicoides/vertical/helicoide-8.jpeg";
import imagemHelicoide9 from "../../../public/img/helicoides/vertical/helicoide-9.jpeg";
import imagemHelicoide10 from "../../../public/img/helicoides/vertical/helicoide-10.jpeg";
import imagemHelicoide11 from "../../../public/img/helicoides/vertical/helicoide-11.jpeg";
import imagemHelicoide12 from "../../../public/img/helicoides/vertical/helicoide-12.jpeg";
import imagemHelicoide13 from "../../../public/img/helicoides/vertical/helicoide-13.jpeg";
import imagemHelicoide14 from "../../../public/img/helicoides/vertical/helicoide-14.jpeg";
import imagemHelicoide15 from "../../../public/img/helicoides/vertical/helicoide-15.jpeg";
import imagemHelicoide16 from "../../../public/img/helicoides/vertical/helicoide-16.jpeg";
import imagemHelicoide17 from "../../../public/img/helicoides/vertical/helicoide-17.jpeg";
import imagemHelicoide18 from "../../../public/img/helicoides/vertical/helicoide-18.jpeg";
import imagemHelicoide19 from "../../../public/img/helicoides/vertical/helicoide-19.jpeg";
import imagemHelicoide20 from "../../../public/img/helicoides/vertical/helicoide-20.jpeg";

const images = [
  imagemHelicoide1,
  imagemHelicoide2,
  imagemHelicoide3,
  imagemHelicoide4,
  imagemHelicoide5,
  imagemHelicoide6,
  imagemHelicoide7,
  imagemHelicoide8,
  imagemHelicoide9,
  imagemHelicoide10,
  imagemHelicoide11,
  imagemHelicoide12,
  imagemHelicoide13,
  imagemHelicoide14,
  imagemHelicoide15,
  imagemHelicoide16,
  imagemHelicoide17,
  imagemHelicoide18,
  imagemHelicoide19,
  imagemHelicoide20,
];

export default function Produto() {
  const [currentImage, setCurrentImage] = useState(0);

  function setNextImage() {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={images[currentImage]}
            onClick={setNextImage}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Resistente
              </h2>
              <p className="leading-relaxed text-base">
                Trabalha bruto no campo, pode vim esterco, palha de café, grãos
                que o bixo ta firme
              </p>
              <a className="mt-3 text-blue-500 inline-flex items-center">
                Mais detalhes
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Não trava
              </h2>
              <p className="leading-relaxed text-base">
                Trabalha sem parar, por isso preciso de mais detalhes do que
                escrever aqui
              </p>
              <a className="mt-3 text-blue-500 inline-flex items-center">
                Mais detalhes
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Feito por quem entende
              </h2>
              <p className="leading-relaxed text-base">
                Equipe de engenharia e agronomia trabalham juntos para terem o
                melhor resultado
              </p>
              <a className="mt-3 text-blue-500 inline-flex items-center">
                Mais detalhes
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

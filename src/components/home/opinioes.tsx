import Image from "next/image";

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
                src="https://dummyimage.com/302x302"
              />
              <p className="leading-relaxed">
                Eu trabalhava muito e nao dava certo. Entao comecei a fazer
                roscas para jogar o esterco pra mim
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
                src="https://dummyimage.com/300x300"
              />
              <p className="leading-relaxed">
                Opinião é igual bunda, vou dar a minha: eu trabalhava muito e
                nao dava certo. Entao comecei a fazer roscas para jogar o
                esterco pra mim e terminar o mais rapido possivel para eu ir
                namorar em Franca/Claraval
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
                src="https://dummyimage.com/305x305"
              />
              <p className="leading-relaxed">
                Quando fiquei sabendo do projeto resolvi fazer o site e toda
                informação de redes sociais para que mais pessoas podem ter
                acesso a essa maravilha da engenharia e facilitar o trabalho no
                campo
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                LEONARDO CINTRA
              </h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

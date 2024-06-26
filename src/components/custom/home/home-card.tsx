import Image from "next/image";

interface CardProps {
  imagem: string;
  titulo: string;
  subTitulo: string;
  descricaoo: string;
}

export default function HomeCard(props: CardProps) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
      <div className="bg-gray-100 p-6 rounded-lg">
        <Image
          className="h-auto rounded w-full object-cover object-center mb-6"
          src={props.imagem}
          width={1200}
          height={1300}
          alt="content"
        />
        <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
          {props.titulo}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {props.subTitulo}
        </h2>
        <p className="leading-relaxed text-base">{props.descricaoo}</p>
      </div>
    </div>
  );
}

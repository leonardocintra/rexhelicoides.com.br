import Link from "next/link";

interface MenuHeaderLinkProps {
  href: string;
  descricao: string;
  icone: JSX.Element;
}

export default function MenuHeaderLink(props: MenuHeaderLinkProps) {
  return (
    <div className="">
      <Link
        href={props.href}
        className="block px-5 py-4  text-white text-2xl font-semibold rounded hover:bg-gray-700 duration-200"
      >
        <div className="flex items-center gap-2">
          {props.icone}
          {props.descricao}
        </div>
      </Link>
    </div>
  );
}

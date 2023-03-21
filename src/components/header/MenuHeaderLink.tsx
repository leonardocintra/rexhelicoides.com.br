import Link from "next/link";

interface MenuHeaderLinkProps {
  href: string;
  descricao: string;
}

export default function MenuHeaderLink(props: MenuHeaderLinkProps) {
  return (
    <div>
      <Link
        href={props.href}
        className="block px-5 py-4 text-white text-2xl font-semibold rounded hover:bg-gray-700 duration-200"
      >
        {props.descricao}
      </Link>
    </div>
  );
}

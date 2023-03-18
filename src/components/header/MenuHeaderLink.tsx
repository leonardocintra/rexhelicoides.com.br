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
        className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700"
      >
        {props.descricao}
      </Link>
    </div>
  );
}

import Link from "next/link";
import { FiInstagram, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import { contactInfo, navigation, socialLinks, whatsappQuoteUrl } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200/80 bg-white/70">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
            Rex Helicoides
          </p>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Fabricacao sob medida de helicoides e transportadores helicoidais,
            com atendimento comercial direto e estrutura pensada para gerar
            orcamentos com menos friccao.
          </p>
          <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
            Falar com a equipe
          </CtaLink>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Navegacao
          </p>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Contato
          </p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p className="flex gap-3">
              <FiPhone className="mt-1 h-4 w-4 flex-none text-ember" />
              <span>{contactInfo.primaryPhone}</span>
            </p>
            <p className="flex gap-3">
              <FiMail className="mt-1 h-4 w-4 flex-none text-ember" />
              <span>{contactInfo.email}</span>
            </p>
            <p className="flex gap-3">
              <FiMapPin className="mt-1 h-4 w-4 flex-none text-ember" />
              <span>
                {contactInfo.address.street}, {contactInfo.address.city} - {contactInfo.address.state}
              </span>
            </p>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
              href={socialLinks.instagram}
              rel="noreferrer"
              target="_blank"
            >
              <FiInstagram className="h-4 w-4 text-ember" />
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80 py-4">
        <div className="container-shell flex flex-col gap-2 text-xs uppercase tracking-[0.16em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rex Helicoides. Todos os direitos reservados.</p>
          <p>Desenvolvido por Leonardo Cintra</p>
        </div>
      </div>
    </footer>
  );
}
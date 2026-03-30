import type { Metadata } from "next";
import { FiArrowUpRight, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import SectionHeading from "@/components/site/section-heading";
import { contactInfo, faqItems, whatsappQuoteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato e orcamentos",
  description:
    "Entre em contato com a Rex Helicoides para solicitar orcamento via WhatsApp, telefone ou email.",
};

export default function Contato() {
  return (
    <main className="section-shell">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Contato"
          title="Escolha o canal mais rapido para abrir seu orcamento"
          description="Como a meta principal do novo site e gerar conversa comercial, esta pagina concentra os canais certos e explica o que enviar para acelerar a resposta."
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <article className="glass-panel p-6">
            <FiMessageCircle className="h-6 w-6 text-ember" />
            <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-ink">
              WhatsApp comercial
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Canal principal para cotacoes, envio de medidas e alinhamento inicial.
            </p>
            <div className="mt-6">
              <CtaLink href={whatsappQuoteUrl} external icon={<FiArrowUpRight />}>
                Abrir WhatsApp
              </CtaLink>
            </div>
          </article>

          <article className="glass-panel p-6">
            <FiPhone className="h-6 w-6 text-ember" />
            <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-ink">
              Telefone principal
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {contactInfo.primaryPhone}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Apoio adicional: {contactInfo.secondaryPhone}
            </p>
          </article>

          <article className="glass-panel p-6">
            <FiMail className="h-6 w-6 text-ember" />
            <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-ink">
              Email
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {contactInfo.email}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Curriculos: {contactInfo.careersEmail}
            </p>
          </article>

          <article className="glass-panel p-6">
            <FiMapPin className="h-6 w-6 text-ember" />
            <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-ink">
              Localizacao
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {contactInfo.address.street}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {contactInfo.address.city} - {contactInfo.address.state}, CEP {contactInfo.address.postalCode}
            </p>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="dark-panel p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
              O que enviar no primeiro contato
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200 sm:text-base">
              <li>1. Tipo de peca ou equipamento que voce precisa.</li>
              <li>2. Medidas, espessura da chapa, material e quantidade estimada.</li>
              <li>3. Aplicacao do conjunto e prazo desejado.</li>
              <li>4. Fotos, desenhos ou referencias do projeto quando houver.</li>
            </ul>
            <div className="mt-8">
              <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
                Enviar dados para orcamento
              </CtaLink>
            </div>
          </section>

          <section className="glass-panel p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
              Duvidas comuns
            </p>
            <div className="mt-6 space-y-5">
              {faqItems.slice(0, 3).map((item) => (
                <article key={item.question}>
                  <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-ink">
                    {item.question}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

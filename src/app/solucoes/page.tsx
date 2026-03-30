import type { Metadata } from "next";
import { FiArrowRight, FiCheck, FiMessageCircle } from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import SectionHeading from "@/components/site/section-heading";
import {
  marketSegments,
  processSteps,
  services,
  whatsappQuoteUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Solucoes",
  description:
    "Veja as solucoes da Rex Helicoides em helicoides sob medida, transportadores helicoidais e linhas complementares.",
};

export default function SolucoesPage() {
  return (
    <main className="section-shell">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Solucoes"
          title="Oferta organizada para quem precisa comprar com criterio tecnico"
          description="A pagina de solucoes existe para transformar interesse em pedido concreto. Ela explica a oferta, mostra aplicacoes e reforca a facilidade de abrir o orcamento com a equipe."
        />

        <section className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel flex flex-col p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
                {service.kicker}
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.08em] text-ink">
                {service.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                <FiCheck className="h-4 w-4 text-ember" />
                Projeto avaliado conforme a aplicacao.
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="dark-panel p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
              Mercados e aplicacoes
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
              Solucoes aplicadas onde o material precisa fluir com confianca.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {marketSegments.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
              Passos para fechar o pedido
            </p>
            <div className="mt-6 space-y-5">
              {processSteps.map((step, index) => (
                <div key={step.title} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Etapa {index + 1}
                  </p>
                  <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-panel grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
              Proximo passo
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
              Se a aplicacao esta definida, o canal certo agora e o WhatsApp.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
              Pedir orcamento
            </CtaLink>
            <CtaLink href="/contato" variant="secondary" icon={<FiArrowRight />}>
              Ver contatos
            </CtaLink>
          </div>
        </section>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiPlay,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import SectionHeading from "@/components/site/section-heading";
import {
  companyMotto,
  contactInfo,
  differentiators,
  faqItems,
  processSteps,
  services,
  stats,
  whatsappQuoteUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Helicoides sob medida para o seu projeto",
  description:
    "Fabricacao de helicoides e transportadores helicoidais sob medida, com encaixe preciso, envio para todo o Brasil e atendimento comercial rapido.",
};

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero pb-16 pt-10 sm:pt-14 lg:pb-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8 text-white">
            <span className="eyebrow border-white/15 bg-white/10 text-orange-200">
              Fabricacao sob medida para linhas industriais e agricolas
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl uppercase leading-none tracking-[0.06em] text-balance sm:text-6xl lg:text-7xl">
                Helicoides sob medida para o seu projeto, em chapas de 2.7 ate
                25.4 mm.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Dobras de helicoides e fabricacao de transportadores
                helicoidais com foco em encaixe preciso, soldabilidade,
                robustez e entrega consultiva para quem precisa comprar certo na
                primeira cotacao.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
                Solicitar orcamento no WhatsApp
              </CtaLink>
              <CtaLink href="/solucoes" variant="secondary" icon={<FiArrowRight />}>
                Ver solucoes e capacidades
              </CtaLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur"
                >
                  <p className="font-display text-3xl uppercase tracking-[0.08em] text-orange-100">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="dark-panel relative overflow-hidden p-6 sm:p-8">
            <div className="mb-5 flex justify-start lg:justify-end">
              <span className="inline-flex max-w-full rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                Prova visual de fabricacao
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/30 shadow-glow">
                <video
                  autoPlay
                  className="aspect-[4/5] h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  src="/video/helicoide.mp4"
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex items-center gap-3 text-orange-200">
                    <FiPlay className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                      Atendimento comercial direto
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-200">
                    Envie medidas, aplicacao e quantidade. Nossa equipe retorna
                    com orientacao comercial e tecnica para reduzir retrabalho.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex gap-3">
                      <FiCheck className="mt-1 h-4 w-4 flex-none text-orange-200" />
                      Encaixe excelente entre helices para melhor soldabilidade.
                    </li>
                    <li className="flex gap-3">
                      <FiTruck className="mt-1 h-4 w-4 flex-none text-orange-200" />
                      Envio compacto para todo o Brasil com frete otimizado.
                    </li>
                    <li className="flex gap-3">
                      <FiClock className="mt-1 h-4 w-4 flex-none text-orange-200" />
                      Processo comercial rapido para orcamentos sob medida.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Quem somos"
            title="Especialistas em dobras de helicoides e transportadores helicoidais"
            description={companyMotto}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass-panel p-7 sm:p-9">
              <p className="text-lg leading-8 text-slate-700">
                Trabalhamos com fabricacao personalizada para atender projetos
                industriais, agricolas e operacoes que precisam de componentes
                confiaveis, encaixe consistente e suporte comercial objetivo.
                O foco do site novo e simples: facilitar o pedido de orcamento e
                deixar claro porque a Rex consegue entregar melhor.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-slate-950 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.22em] text-orange-200">
                    Capacidade tecnica
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    Solucoes sob medida em chapas de 2.7 mm ate 25.4 mm de
                    espessura, com foco em aplicacao real e desempenho de campo.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                    Operacao nacional
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Atendimento comercial por WhatsApp, telefone e email para
                    clientes de todo o Brasil.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => {
                const Icon = item.icon === "shield" ? FiShield : item.icon === "truck" ? FiTruck : FiCheck;

                return (
                  <article key={item.title} className="glass-panel p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl uppercase tracking-[0.08em] text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/60">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Solucoes"
            title="O que a Rex entrega hoje para acelerar sua operacao"
            description="A nova arquitetura do site separa a oferta em blocos claros, para o comprador entender rapidamente onde a Rex entra e qual pedido faz sentido abrir agora."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <article key={service.title} className="glass-panel flex h-full flex-col p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
                  {service.kicker}
                </p>
                <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] text-ink">
                  {service.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <FiCheck className="h-4 w-4 text-ember" />
                  Sob medida para cada aplicacao
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CtaLink href="/solucoes" variant="secondary" icon={<FiArrowRight />}>
              Ver pagina completa de solucoes
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="dark-panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="Como funciona"
              title="Processo comercial simples para aprovar mais rapido"
              description="A jornada foi desenhada para reduzir friccao. O cliente entende o que enviar, recebe retorno agil e consegue avancar para producao com mais seguranca."
              invert
            />
            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                    Etapa {index + 1}
                  </p>
                  <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.08em] text-white">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-panel overflow-hidden p-3 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-slate-950">
                <video
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  src="/video/helicoide.mp4"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel p-6">
                <div className="flex items-center gap-3 text-ember">
                  <FiMapPin className="h-5 w-5" />
                  <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                    Base operacional
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {contactInfo.address.street}, {contactInfo.address.city} - {contactInfo.address.state}.
                </p>
              </div>
              <div className="glass-panel p-6">
                <Image
                  alt="Logo da Rex Helicoides"
                  className="h-auto w-40"
                  height={72}
                  priority
                  src="/logo-transparent.png"
                  width={180}
                />
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Marca reconstruida em uma base moderna, rapida e preparada
                  para SEO tecnico no App Router.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="As duvidas que mais travam um pedido de orcamento"
            description="Essa camada de conteudo ajuda tanto na conversao quanto na indexacao organica, sem perder objetividade comercial."
            invert
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-white">
                  {item.question}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="dark-panel grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                Orcamentos e informacoes
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl">
                Fale com a Rex e receba uma proposta sob medida.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                WhatsApp: {contactInfo.primaryPhone} | Email: {contactInfo.email}
              </p>
            </div>
            <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
              Abrir conversa comercial
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}

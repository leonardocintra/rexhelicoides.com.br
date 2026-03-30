import type { Metadata } from "next";
import Image from "next/image";
import { FiCheck, FiMapPin, FiMessageCircle } from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import SectionHeading from "@/components/site/section-heading";
import {
  companyMotto,
  contactInfo,
  teamMembers,
  whatsappQuoteUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheca a Rex Helicoides, sua estrutura institucional e a equipe que apoia os projetos sob medida.",
};

export default function EmpresaPage() {
  return (
    <main className="section-shell">
      <div className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Empresa"
          title="Uma operacao especializada em qualidade, personalizacao e resposta comercial"
          description={companyMotto}
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="glass-panel p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
              Como a Rex se posiciona
            </p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                O site original ja comunicava dois pilares fortes: dobras de
                helicoides e fabricacao de transportadores helicoidais. O rebuild
                reorganiza essa mensagem para mostrar capacidade tecnica de forma
                mais objetiva e acelerar o contato comercial.
              </p>
              <p>
                A proposta institucional nao e parecer uma empresa genérica de
                metalurgia, mas sim destacar especializacao, flexibilidade de
                projeto e foco em resultado pratico para o cliente que depende de
                transporte confiavel de material.
              </p>
            </div>
          </section>

          <section className="dark-panel p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
              Estrutura comercial resumida
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200 sm:text-base">
              <p className="flex gap-3">
                <FiCheck className="mt-1 h-4 w-4 flex-none text-orange-200" />
                Atendimento consultivo para entender aplicacao antes do orcamento.
              </p>
              <p className="flex gap-3">
                <FiCheck className="mt-1 h-4 w-4 flex-none text-orange-200" />
                Processo pensado para projetos sob medida, nao apenas tabela padrao.
              </p>
              <p className="flex gap-3">
                <FiMapPin className="mt-1 h-4 w-4 flex-none text-orange-200" />
                Base em {contactInfo.address.city} - {contactInfo.address.state}, com envio para todo o Brasil.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
                Conversar com a equipe
              </CtaLink>
            </div>
          </section>
        </div>

        <section className="glass-panel p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] bg-slate-950">
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
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember">
                O que o cliente precisa sentir ao entrar aqui
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-ink sm:text-5xl">
                Confianca para enviar o projeto e avancar para proposta.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Essa pagina institucional serve para apoiar a decisao de compra.
                Em vez de excesso de texto, ela reforca estrutura, pessoas,
                localizacao e especializacao. Isso aumenta a credibilidade sem
                competir com a home na funcao de vender.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Equipe"
            title="Pessoas que sustentam a operacao comercial e institucional"
            description="As fotos locais da pasta public foram reaproveitadas para dar rosto a empresa sem depender de ativos externos."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="glass-panel overflow-hidden">
                <div className="relative aspect-[4/4.5] bg-slate-200">
                  <Image
                    alt={member.name}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 640px) 45vw, 100vw"
                    src={member.image}
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-ink">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ember">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
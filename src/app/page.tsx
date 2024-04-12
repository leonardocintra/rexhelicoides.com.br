import HomeSection from "@/components/custom/home/home-section";
import Opinioes from "@/components/custom/home/opinioes";
import Produto from "@/components/custom/produto/produto";

export default function Home() {
  return (
    <main>
      <HomeSection />

      <Produto />

      <Opinioes />
    </main>
  );
}

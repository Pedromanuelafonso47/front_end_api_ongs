"use client";
import Header from "../components/Header";
import Hero from "../components/Hero"; // ajuste o caminho se estiver em outra pasta
import Filter from '../components/Filter';
import FeaturedOngs from '@/components/FeaturedOngs'


export default function Home() {
  return (
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Header />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
 <Hero />
  <Filter />
  <FeaturedOngs />
{/* comentários
   Aqui e para acolocar os conponentes do filtro de destaque
    e o de mostrar por cidade 
      <filter />
        <bootomfilter/>:bootomfilter=> esse e um filho do primeiro filtrer
         que no caso e o pai que vai ser o botão
        de ocultar e visualizar

        <destaques/>

        <cidades/>


   */}

</main>
    </section>
  );
}

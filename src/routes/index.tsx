import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { NossaHistoria } from "@/components/site/NossaHistoria";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { Diferenciais } from "@/components/site/Diferenciais";
import { MaisVendidos } from "@/components/site/MaisVendidos";
import { Parceiros } from "@/components/site/Parceiros";
import { Depoimentos } from "@/components/site/Depoimentos";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MenuDrawer } from "@/components/site/MenuDrawer";
import { useCart } from "@/hooks/use-cart";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nutri4Kids — Lancheiras saudáveis em Uberlândia" },
      {
        name: "description",
        content:
          "Lancheiras saudáveis, práticas e nutritivas para crianças e adultos em Uberlândia (MG). Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Nutri4Kids — Nutrindo o futuro" },
      {
        property: "og:description",
        content:
          "Lancheiras saudáveis, práticas e nutritivas em Uberlândia (MG). Peça pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cart = useCart();
  const openMenu = () => setDrawerOpen(true);

  return (
    <div className="min-h-screen flex flex-col" id="top">
      <SiteHeader onOpenMenu={openMenu} cartCount={cart.totalCount} />
      <main className="flex-1">
        <MaisVendidos onOpenMenu={openMenu} cart={cart} />
        <ComoFunciona />
        <NossaHistoria />
        <Diferenciais />
        <Parceiros />
        <Depoimentos />
      </main>
      <SiteFooter />
      <MenuDrawer open={drawerOpen} onOpenChange={setDrawerOpen} cart={cart} />
      <Toaster richColors position="top-center" />
    </div>
  );
}

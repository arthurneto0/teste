import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CARDAPIO } from "@/lib/menu-data";
import { Plus } from "lucide-react";
import type { useCart } from "@/hooks/use-cart";

interface Props {
  onOpenMenu: () => void;
  cart: ReturnType<typeof useCart>;
}

export function MaisVendidos({ onOpenMenu, cart }: Props) {
  const itens = CARDAPIO.filter((i) => i.maisVendido);

  const adicionar = (id: string) => {
    cart.inc(id);
    onOpenMenu();
  };

  return (
    <section id="mais-vendidos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-md mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">
            Os queridinhos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Os queridinhos da galera.
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-3">
            {itens.map((it) => (
              <CarouselItem
                key={it.id}
                className="pl-3 basis-[78%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm h-full flex flex-col">
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-brand-purple text-white text-[10px] font-extrabold uppercase tracking-wider shadow">
                    Os queridinhos
                  </span>
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={it.imagem}
                      alt={it.nome}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg">{it.nome}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {it.descricao}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold text-brand-orange text-lg">
                        R$ {it.preco.toFixed(2).replace(".", ",")}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => adicionar(it.id)}
                        className="rounded-full bg-brand-green text-white hover:opacity-90 gap-1.5 font-bold"
                      >
                        <Plus className="size-4" /> Adicionar
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-2" />
          <CarouselNext className="hidden sm:flex -right-2" />
        </Carousel>
      </div>
    </section>
  );
}

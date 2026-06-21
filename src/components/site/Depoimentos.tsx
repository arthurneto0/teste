import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DEPOIMENTOS } from "@/lib/menu-data";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            O que os pais andam dizendo.
          </h2>
        </div>

        <Carousel opts={{ loop: true, align: "start" }}>
          <CarouselContent className="-ml-3">
            {DEPOIMENTOS.map((d) => (
              <CarouselItem
                key={d.nome}
                className="pl-3 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full rounded-3xl bg-card border border-border p-6 shadow-sm flex flex-col">
                  <div className="flex gap-0.5 text-brand-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${i < d.estrelas ? "fill-current" : "opacity-30"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground/85 italic flex-1">"{d.texto}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-brand-orange/20 text-brand-orange font-bold flex items-center justify-center shrink-0">
                      {d.nome[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold leading-tight">{d.nome}</div>
                      {d.cargo && (
                        <div className="text-xs text-muted-foreground leading-tight">
                          {d.cargo}
                        </div>
                      )}
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

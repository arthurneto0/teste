import { Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    titulo: "Acompanhamento nutricional",
    texto: "Receitas pensadas com critério, equilíbrio e respeito a cada faixa etária.",
  },
  {
    icon: Leaf,
    titulo: "Ingredientes frescos",
    texto: "Comprados com curadoria, preparados no dia. Nada de congelado por semanas.",
  },
  {
    icon: Sparkles,
    titulo: "Sem ultraprocessados",
    texto: "Sem corantes artificiais, sem conservantes ocultos. Comida que se reconhece.",
  },
  {
    icon: Heart,
    titulo: "Feito com afeto",
    texto: "Cada lancheira sai como se fosse para a nossa própria família.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Por que famílias confiam na Nutri4Kids.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.titulo}
              className="rounded-3xl bg-card border border-border p-6 text-center shadow-sm"
            >
              <div className="size-12 mx-auto rounded-2xl bg-brand-purple/15 text-brand-purple flex items-center justify-center">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{it.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

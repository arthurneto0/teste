import { MessageCircle, Salad, Truck } from "lucide-react";

const passos = [
  {
    icon: Salad,
    titulo: "Escolher",
    texto: "Monte sua lancheira no cardápio com filtros para cada restrição alimentar.",
    cor: "bg-brand-yellow/40 text-brand-orange",
  },
  {
    icon: MessageCircle,
    titulo: "Pedir",
    texto: "Finalize pelo WhatsApp em um clique — combinamos pagamento e entrega ali mesmo.",
    cor: "bg-brand-green/20 text-brand-green",
  },
  {
    icon: Truck,
    titulo: "Receber",
    texto: "Entregamos no seu bairro em Uberlândia, prontinho para a lancheira sair.",
    cor: "bg-brand-red/20 text-brand-red",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Em 3 passos a lancheira chega quentinha de cuidado.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {passos.map((p, i) => (
            <div
              key={p.titulo}
              className="relative rounded-3xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition"
            >
              <div className={`size-14 rounded-2xl flex items-center justify-center ${p.cor}`}>
                <p.icon className="size-7" />
              </div>
              <div className="absolute top-6 right-6 text-5xl font-bold text-muted/70 font-display">
                0{i + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

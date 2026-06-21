import founder from "@/assets/foto-fundadora-luciana.jpeg";

export function NossaHistoria() {
  return (
    <section id="historia" className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[auto_1fr] items-center">
        <div className="mx-auto lg:mx-0 relative">
          <div className="absolute -inset-3 rounded-full bg-brand-orange/30 blur-xl" />
          <img
            src={founder}
            alt="Luciana, fundadora da Nutri4Kids"
            className="relative size-56 sm:size-72 rounded-full object-cover border-4 border-card shadow-xl"
            width={288}
            height={288}
          />
        </div>
        <div className="space-y-5 max-w-xl">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-green">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Tudo começou com o lanche de uma filha.
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            A <strong>Nutri4Kids</strong> nasceu do desejo da Luciana de oferecer
            à própria filha uma alimentação mais saudável, em um mundo onde a
            correria do dia a dia empurra famílias inteiras para escolhas
            ultraprocessadas. Foi desse cuidado que veio a vontade de cuidar de
            mais crianças — e também dos adultos.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Hoje, montamos lancheiras equilibradas, práticas e gostosas para a
            rotina escolar e profissional, com receitas pensadas por quem
            entende de nutrição e ama o que faz. Cada item é preparado com
            ingredientes frescos e a certeza de que comer bem pode (e deve!)
            ser leve.
          </p>
          <blockquote className="border-l-4 border-brand-orange pl-4 italic text-foreground/90">
            "Alimentar bem é um ato de afeto. Quero que cada lancheira chegue
            como um abraço da minha cozinha para a sua casa."
            <footer className="mt-2 text-sm not-italic font-semibold text-brand-orange">
              — Luciana, fundadora
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

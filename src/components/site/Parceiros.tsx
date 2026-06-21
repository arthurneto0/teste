import { useEffect, useState } from "react";
import { PARCEIROS } from "@/lib/menu-data";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";

// NOTA: substituir o ícone GraduationCap pelo logo real de cada parceiro quando disponível.
const PER_PAGE = 4;

export function Parceiros() {
  const totalPages = Math.ceil(PARCEIROS.length / PER_PAGE);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 4500);
    return () => clearInterval(id);
  }, [totalPages]);

  const visiveis = PARCEIROS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="parceiros" className="py-14 sm:py-20 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">
            Parceiros
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Escolas e espaços que confiam na gente.
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 min-h-[180px]">
            {visiveis.map((p) => (
              <div
                key={p.nome}
                className="rounded-2xl bg-card border border-border p-5 text-center flex flex-col items-center justify-center gap-2 shadow-sm min-h-[140px]"
              >
                <GraduationCap className="size-8 text-brand-purple" />
                <span className="text-sm font-semibold leading-tight">{p.nome}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              aria-label="Anterior"
              className="size-9 inline-flex items-center justify-center rounded-full border border-border bg-card hover:bg-secondary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Ir para grupo ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-brand-purple" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              aria-label="Próximo"
              className="size-9 inline-flex items-center justify-center rounded-full border border-border bg-card hover:bg-secondary"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Menu, Moon, ShoppingCart, Sun, X } from "lucide-react";
import logo from "@/assets/logo-nutri4kids.png.asset.json";
import { useTheme } from "@/hooks/use-theme";

interface Props {
  onOpenMenu: () => void;
  cartCount: number;
}

const links = [
  { href: "#mais-vendidos", label: "Os queridinhos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#historia", label: "Nossa História" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function SiteHeader({ onOpenMenu, cartCount }: Props) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={logo.url}
            alt="Nutri4Kids"
            className="h-9 sm:h-11 w-auto"
            width={160}
            height={48}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-secondary transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex-1" />

        <button
          onClick={onOpenMenu}
          aria-label="Abrir cardápio"
          className="relative size-11 inline-flex items-center justify-center rounded-full bg-brand-green text-white shadow-md hover:opacity-90 transition"
        >
          <ShoppingCart className="size-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-brand-red text-white text-xs font-extrabold border-2 border-background">
              {cartCount}
            </span>
          )}
        </button>

        <button
          onClick={toggle}
          aria-label="Alternar tema"
          className="size-10 inline-flex items-center justify-center rounded-full border border-border hover:bg-secondary transition"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden size-10 inline-flex items-center justify-center rounded-full border border-border"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/85 font-semibold border-b border-border/60 last:border-b-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

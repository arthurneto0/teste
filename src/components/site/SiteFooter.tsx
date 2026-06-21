import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-nutri4kids.png.asset.json";
import { INSTAGRAM_URL, WHATSAPP_NUMERO } from "@/lib/menu-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3 items-start">
        <div>
          <img src={logo.url} alt="Nutri4Kids" className="h-12 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Nutrindo o futuro com lancheiras saudáveis, práticas e cheias de
            sabor.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMERO}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-green transition"
              >
                <MessageCircle className="size-4 text-brand-green" />
                (34) 9 9334-0676
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-purple transition"
              >
                <Instagram className="size-4 text-brand-purple" />
                @nutri4kidslancheiras
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-brand-red" />
              Uberlândia - MG
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Atendimento</h4>
          <p className="text-sm text-muted-foreground">
            Pedidos pelo WhatsApp, de segunda a sábado. Pagamento combinado na
            conversa (Pix, Cartão ou Dinheiro).
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nutri4Kids — Nutrindo o futuro.
      </div>
    </footer>
  );
}

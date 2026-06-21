import { useMemo, useState } from "react";
import { Minus, Plus, Trash2, Send, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BAIRROS,
  CARDAPIO,
  RESTRICOES,
  Restricao,
  WHATSAPP_NUMERO,
} from "@/lib/menu-data";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  cart: ReturnType<typeof useCart>;
}

type Pagamento = "Pix" | "Cartão" | "Dinheiro";

const fmt = (n: number) => `R$ ${n.toFixed(2).replace(".", ",")}`;

export function MenuDrawer({ open, onOpenChange, cart }: Props) {
  const [filtros, setFiltros] = useState<Restricao[]>([]);
  const [bairro, setBairro] = useState<string>("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pagamento, setPagamento] = useState<Pagamento>("Pix");

  const itensFiltrados = useMemo(() => {
    if (filtros.length === 0) return CARDAPIO;
    return CARDAPIO.filter((it) =>
      filtros.every((f) => (it as unknown as Record<string, unknown>)[f]),
    );
  }, [filtros]);

  const subtotal = cart.items.reduce((s, ci) => {
    const it = CARDAPIO.find((c) => c.id === ci.id);
    return s + (it ? it.preco * ci.quantidade : 0);
  }, 0);

  const bairroSel = BAIRROS.find((b) => b.nome === bairro);
  const taxa = bairroSel?.taxa ?? 0;
  const total = subtotal + taxa;
  const temItens = cart.items.length > 0;

  const toggleFiltro = (r: Restricao) =>
    setFiltros((prev) =>
      prev.includes(r) ? prev.filter((p) => p !== r) : [...prev, r],
    );

  const finalizar = () => {
    if (!temItens) {
      toast.error("Adicione pelo menos um item ao carrinho.");
      return;
    }
    if (!bairro) {
      toast.error("Selecione o bairro de entrega.");
      return;
    }
    if (!rua.trim() || !numero.trim()) {
      toast.error("Preencha rua e número.");
      return;
    }

    const linhasItens = cart.items
      .map((ci) => {
        const it = CARDAPIO.find((c) => c.id === ci.id);
        if (!it) return null;
        const valor = it.preco * ci.quantidade;
        return `${ci.quantidade}x ${it.nome}   ${fmt(valor)}`;
      })
      .filter(Boolean)
      .join("\n");

    const endereco = [rua.trim(), numero.trim(), complemento.trim()]
      .filter(Boolean)
      .join(", ");

    const msg = [
      "NOVO PEDIDO - Nutri4kids",
      "-----------------------------",
      linhasItens,
      "-----------------------------",
      `Subtotal: ${fmt(subtotal)}`,
      `Taxa (${bairro}): ${fmt(taxa)}`,
      `TOTAL: ${fmt(total)}`,
      `Endereco: ${endereco}`,
      `Pagamento: ${pagamento}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col bg-background"
      >
        <SheetHeader className="px-5 py-4 border-b border-border">
          <SheetTitle className="text-2xl font-bold">Monte sua lancheira</SheetTitle>
          <p className="text-sm text-muted-foreground">
            Escolha os itens, o bairro e finalize no WhatsApp.
          </p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          {/* 1. Filtros */}
          <div>
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Restrições alimentares
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {RESTRICOES.map((r) => {
                const ativo = filtros.includes(r.id);
                return (
                  <button
                    key={r.id}
                    onClick={() => toggleFiltro(r.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition ${
                      ativo
                        ? "bg-brand-green text-white border-brand-green"
                        : "bg-card text-foreground/80 border-border hover:border-brand-green"
                    }`}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Cardápio */}
          <div className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Cardápio ({itensFiltrados.length})
            </Label>
            {itensFiltrados.length === 0 && (
              <p className="text-sm text-muted-foreground py-6 text-center">
                Nenhum item com todos esses filtros.
              </p>
            )}
            {itensFiltrados.map((it) => {
              const qty = cart.getQty(it.id);
              return (
                <div
                  key={it.id}
                  className="flex gap-3 p-3 rounded-2xl border border-border bg-card"
                >
                  <img
                    src={it.imagem}
                    alt={it.nome}
                    loading="lazy"
                    className="size-20 rounded-xl object-cover bg-secondary shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold leading-tight">{it.nome}</h4>
                      <span className="font-bold text-brand-orange whitespace-nowrap">
                        {fmt(it.preco)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {it.descricao}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border bg-background">
                        <button
                          onClick={() => cart.dec(it.id)}
                          aria-label="Diminuir"
                          className="size-8 inline-flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-40"
                          disabled={qty === 0}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold">{qty}</span>
                        <button
                          onClick={() => cart.inc(it.id)}
                          aria-label="Aumentar"
                          className="size-8 inline-flex items-center justify-center text-brand-green hover:bg-brand-green/10 rounded-r-full"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      {qty > 0 && (
                        <span className="text-xs font-semibold text-foreground/70">
                          Subtotal: {fmt(qty * it.preco)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3+4. Separador e resumo — apenas com itens */}
          {temItens && (
            <>
              <div className="border-t-2 border-dashed border-border" />

              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Seu pedido
                </Label>
                <ul className="space-y-2">
                  {cart.items.map((ci) => {
                    const it = CARDAPIO.find((c) => c.id === ci.id);
                    if (!it) return null;
                    return (
                      <li
                        key={ci.id}
                        className="flex items-center gap-2 text-sm bg-card border border-border rounded-xl px-3 py-2"
                      >
                        <span className="font-bold text-brand-orange w-7 shrink-0">
                          {ci.quantidade}x
                        </span>
                        <span className="flex-1 truncate">{it.nome}</span>
                        <span className="font-semibold">
                          {fmt(it.preco * ci.quantidade)}
                        </span>
                        <button
                          onClick={() => cart.setQty(ci.id, 0)}
                          aria-label={`Remover ${it.nome}`}
                          className="size-7 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Entrega
                </Label>
                <Select value={bairro} onValueChange={setBairro}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Selecione o bairro" />
                  </SelectTrigger>
                  <SelectContent>
                    {BAIRROS.map((b) => (
                      <SelectItem key={b.nome} value={b.nome}>
                        {b.nome} — {fmt(b.taxa)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <Input
                      placeholder="Rua / Avenida"
                      value={rua}
                      onChange={(e) => setRua(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                  <Input
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
                <Input
                  placeholder="Complemento (opcional)"
                  value={complemento}
                  onChange={(e) => setComplemento(e.target.value)}
                  className="rounded-xl"
                />
              </div>

              <div>
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Forma de pagamento
                </Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {(["Pix", "Cartão", "Dinheiro"] as Pagamento[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPagamento(p)}
                      className={`py-2 rounded-xl text-sm font-bold border-2 transition ${
                        pagamento === p
                          ? "bg-brand-orange text-white border-brand-orange"
                          : "bg-card text-foreground/80 border-border"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">
                  O pagamento é combinado na conversa do WhatsApp.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Rodapé — apenas com itens */}
        {temItens && (
          <div className="border-t border-border p-5 space-y-3 bg-card/80 backdrop-blur">
            <div className="text-sm space-y-1">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Taxa {bairro && `(${bairro})`}</span>
                <span>{fmt(taxa)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-brand-orange">{fmt(total)}</span>
              </div>
            </div>

            {/* Penúltimo: Limpar carrinho */}
            <Button
              onClick={() => cart.clear()}
              variant="outline"
              className="w-full rounded-full font-bold gap-2 border-2"
            >
              <X className="size-4" /> Limpar carrinho
            </Button>

            {/* Último: Finalizar pelo WhatsApp */}
            <Button
              onClick={finalizar}
              size="lg"
              className="w-full rounded-full font-bold bg-brand-green text-white hover:opacity-90 gap-2"
            >
              <Send className="size-4" />
              Finalizar pedido pelo WhatsApp
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

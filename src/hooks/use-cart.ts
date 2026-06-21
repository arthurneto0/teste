import { useEffect, useState } from "react";

const STORAGE_KEY = "nutri4kids_cart_v1";

export interface CartItem {
  id: string;
  quantidade: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const getQty = (id: string) => items.find((i) => i.id === id)?.quantidade ?? 0;

  const setQty = (id: string, qty: number) => {
    setItems((prev) => {
      const filtered = prev.filter((i) => i.id !== id);
      if (qty <= 0) return filtered;
      return [...filtered, { id, quantidade: qty }];
    });
  };

  const inc = (id: string) => setQty(id, getQty(id) + 1);
  const dec = (id: string) => setQty(id, Math.max(0, getQty(id) - 1));
  const clear = () => setItems([]);
  const totalCount = items.reduce((s, i) => s + i.quantidade, 0);

  return { items, getQty, setQty, inc, dec, clear, totalCount };
}

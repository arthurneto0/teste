import placeholder from "@/assets/placeholder.jpg";
import miniPizza from "@/assets/mini-pizza.png";
import biscoito from "@/assets/biscoito-de-aveia.png";
import pastel from "@/assets/pastel-de-abobora.png";
import cupcake from "@/assets/cupcake.jpeg";

export type Restricao =
  | "semGluten"
  | "tracosGluten"
  | "semLactose"
  | "vegano"
  | "semAcucar";

export const RESTRICOES: { id: Restricao; label: string }[] = [
  { id: "semGluten", label: "Sem glúten" },
  { id: "tracosGluten", label: "Contém traços de glúten" },
  { id: "semLactose", label: "Sem lactose" },
  { id: "vegano", label: "Vegano" },
  { id: "semAcucar", label: "Sem açúcar" },
];

export interface ItemCardapio {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  maisVendido?: boolean;
  semGluten?: boolean;
  tracosGluten?: boolean;
  semLactose?: boolean;
  vegano?: boolean;
  semAcucar?: boolean;
}

const PLACEHOLDER = placeholder;

// NOTA: preços fictícios — confirmar com a Luciana antes da publicação final.
export const CARDAPIO: ItemCardapio[] = [
  // Lanches e salgados
  {
    id: "pizzinha",
    nome: "Pizzinha",
    descricao: "Mini pizza artesanal com molho de tomate fresco e queijo derretido.",
    preco: 9.5,
    imagem: miniPizza,
    maisVendido: true,
    tracosGluten: true,
  },
  {
    id: "cupcake-beterraba",
    nome: "Cupcake de Chocolate",
    descricao: "Cupcake fofinho à base de beterraba, com cobertura de chocolate sem açúcar refinado.",
    preco: 8.0,
    imagem: cupcake,
    maisVendido: true,
    semAcucar: true,
  },
  {
    id: "biscoito-aveia",
    nome: "Biscoito de Aveia",
    descricao: "Biscoitinho macio de aveia, adoçado naturalmente. Perfeito para o lanche escolar.",
    preco: 6.5,
    imagem: biscoito,
    maisVendido: true,
    semLactose: true,
    semAcucar: true,
  },
  {
    id: "pastel-abobora",
    nome: "Pastel de Abóbora",
    descricao: "Pastel assado de massa amarelinha de abóbora com recheio caseiro.",
    preco: 7.5,
    imagem: pastel,
    maisVendido: true,
    vegano: true,
    semLactose: true,
  },
  {
    id: "waffle-mel",
    nome: "Waffle com Mel",
    descricao: "Waffle fofinho regado com mel puro. Doçura natural para a tarde.",
    preco: 9.0,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },
  {
    id: "pao-de-queijo",
    nome: "Pão de Queijo",
    descricao: "Pão de queijo mineiro assado na hora, crocante por fora e macio por dentro.",
    preco: 6.0,
    imagem: PLACEHOLDER,
    semGluten: true,
  },
  {
    id: "pao-carne-moida",
    nome: "Pão com Carne Moída",
    descricao: "Pãozinho artesanal recheado com carne moída temperada caseira.",
    preco: 10.5,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },
  {
    id: "pao-batata-pate-frango",
    nome: "Pão de Batata com Patê de Frango",
    descricao: "Pão de batata macio recheado com patê de frango cremoso.",
    preco: 10.0,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },
  {
    id: "bolo-ninho",
    nome: "Bolo de Ninho",
    descricao: "Fatia de bolo fofinho com sabor marcante de leite Ninho.",
    preco: 8.5,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },
  {
    id: "bolacha-trackinas-saudavel",
    nome: "Bolacha Trackinas Saudável",
    descricao: "Versão saudável da bolacha recheada favorita das crianças, sem açúcar refinado.",
    preco: 7.5,
    imagem: PLACEHOLDER,
    tracosGluten: true,
    semAcucar: true,
  },
  {
    id: "sanduiche-natural",
    nome: "Sanduíche Natural",
    descricao: "Pão integral com recheio fresco de frango, cenoura e cream cheese.",
    preco: 11.0,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },
  {
    id: "empada-frango",
    nome: "Empada de Frango",
    descricao: "Empadinha de massa amanteigada com recheio cremoso de frango desfiado.",
    preco: 8.0,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },
  {
    id: "brownie",
    nome: "Brownie",
    descricao: "Brownie de chocolate intenso, denso e levemente úmido.",
    preco: 8.5,
    imagem: PLACEHOLDER,
    tracosGluten: true,
  },

  // Frutas
  {
    id: "melancia",
    nome: "Melancia",
    descricao: "Fatias de melancia fresquinha, doce e refrescante.",
    preco: 6.0,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "banana",
    nome: "Banana",
    descricao: "Banana selecionada, prática e energética para o lanche.",
    preco: 4.0,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "maca",
    nome: "Maçã",
    descricao: "Maçã fresquinha higienizada, pronta para o lanche.",
    preco: 4.5,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "manga",
    nome: "Manga",
    descricao: "Pedaços de manga madura, doce e suculenta.",
    preco: 6.0,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "mexerica",
    nome: "Mexerica",
    descricao: "Mexerica fresquinha, fácil de descascar e cheia de vitamina C.",
    preco: 4.5,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "salada-frutas",
    nome: "Salada de Fruta",
    descricao: "Mix de frutas da estação, naturais e refrescantes.",
    preco: 9.0,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },

  // Sucos
  {
    id: "suco-maracuja",
    nome: "Suco de Maracujá",
    descricao: "Suco natural de maracujá, batido na hora.",
    preco: 8.0,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "suco-uva",
    nome: "Suco de Uva",
    descricao: "Suco de uva integral, sem adição de açúcar.",
    preco: 8.5,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "suco-laranja",
    nome: "Suco de Laranja",
    descricao: "Suco da fruta espremido na hora, sem adição de açúcar.",
    preco: 8.0,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
  {
    id: "suco-morango",
    nome: "Suco de Morango",
    descricao: "Suco natural de morango, docinho e refrescante.",
    preco: 8.5,
    imagem: PLACEHOLDER,
    semGluten: true,
    semLactose: true,
    vegano: true,
    semAcucar: true,
  },
];

// NOTA: taxas fictícias — confirmar com a Luciana antes da publicação final.
export const BAIRROS: { nome: string; taxa: number }[] = [
  { nome: "Santa Mônica", taxa: 7.0 },
  { nome: "Tibery", taxa: 8.0 },
  { nome: "Patrimônio", taxa: 6.0 },
  { nome: "Saraiva", taxa: 7.5 },
  { nome: "Brasil", taxa: 6.5 },
  { nome: "Daniel Fonseca", taxa: 9.0 },
  { nome: "Custódio Pereira", taxa: 10.0 },
  { nome: "Martins", taxa: 6.0 },
];

export interface Depoimento {
  nome: string;
  cargo?: string;
  texto: string;
  estrelas: number;
  real: boolean;
}

export const DEPOIMENTOS: Depoimento[] = [
  // REAL — fornecido pela cliente, não editar o texto.
  {
    nome: "Danielle",
    cargo: "Diretora TECHERS",
    texto:
      "Aqui na TECHERS temos uma lanchonete e os produtos da Nutri4kids são nossas opções saudáveis e ao mesmo tempo muito gostosas. Os alunos amam!",
    estrelas: 5,
    real: true,
  },
  // REAL — fornecido pela cliente, não editar o texto.
  {
    nome: "Ana Carolina",
    cargo: "Mãe do Gabriel",
    texto:
      "Como mãe do Gabriel, sou muito grata por todo o cuidado com a alimentação dele. Além de receber refeições saudáveis, variadas e preparadas com muito carinho, ele adora a comida e os lanchinhos. Percebi também uma melhora significativa no funcionamento do intestino dele depois que passou a consumir os lanches da manhã e da tarde, o que era uma dificuldade que enfrentávamos. Saber que ele está sendo bem alimentado e recebendo uma nutrição de qualidade me traz muita tranquilidade. Esse trabalho faz toda a diferença na saúde, no desenvolvimento e no bem-estar das nossas crianças.",
    estrelas: 5,
    real: true,
  },
  // FICTÍCIO — criado para compor o carrossel.
  {
    nome: "Mariana A.",
    cargo: "Mãe da Helena",
    texto:
      "Minha filha ama as pizzinhas! Eu fico tranquila sabendo que está comendo algo natural na escola.",
    estrelas: 5,
    real: false,
  },
  // FICTÍCIO — criado para compor o carrossel.
  {
    nome: "Rafael S.",
    cargo: "Pai do Theo",
    texto:
      "Praticidade que salva minha rotina. Peço pelo WhatsApp e chega certinho no horário do recreio.",
    estrelas: 5,
    real: false,
  },
];

// NOTA: substituir o ícone placeholder pelo logo real de cada parceiro quando disponível.
export const PARCEIROS: { nome: string }[] = [
  { nome: "Maple Bear" },
  { nome: "Teches" },
  { nome: "Colégio Nacional" },
  { nome: "Navegantes" },
  { nome: "Bem Me a Quer" },
  { nome: "Legado" },
  { nome: "Florescer" },
  { nome: "Logosófico" },
  { nome: "Espaço Letrado" },
  { nome: "Instituto Fernando Mota" },
  { nome: "Sankhya" },
  { nome: "COT" },
  { nome: "ACIUB" },
  { nome: "Maqnelson" },
];

export const WHATSAPP_NUMERO = "5534993340676";
export const INSTAGRAM_URL = "https://www.instagram.com/nutri4kidslancheiras";

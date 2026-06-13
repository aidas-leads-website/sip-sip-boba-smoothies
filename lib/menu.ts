/**
 * ============================================================================
 *  MENU DATA — transcribed from Sip Sip's in-store menu board.
 *  Each category has a base `price`; individual flavors only set `price` when
 *  they differ (e.g. Brown Sugar milk tea). Add `tag: "Popular"` to highlight a
 *  flavor, or `note` for a small descriptor. Edit freely — the Menu section
 *  renders from this file.
 * ============================================================================
 */

// Choose-your-base teas (shown as a note in the Menu section).
export const teaBases: { name: string; note: string }[] = [
  { name: "Assam Black Tea", note: "Robust, brisk" },
  { name: "Jasmine Green Tea", note: "Fresh, floral" },
  { name: "Roasted Oolong Tea", note: "Fruity, floral" },
];

export type MenuFlavor = {
  name: string;
  price?: string; // only when it differs from the category base price
  note?: string;
  tag?: "Popular" | "New";
};

export type MenuCategory = {
  id: string;
  name: string;
  blurb: string;
  emoji: string;
  price: string; // base price for the category
  // Tailwind gradient classes used for the category card accent.
  accent: string;
  items: MenuFlavor[];
};

export const menu: MenuCategory[] = [
  {
    id: "milk-tea",
    name: "Milk Tea",
    blurb: "Creamy classics with your choice of tea base & toppings.",
    emoji: "🧋",
    price: "$5.95",
    accent: "from-taro to-taro-dark",
    items: [
      { name: "Brown Sugar", price: "$6.95", tag: "Popular" },
      { name: "Taro", tag: "Popular" },
      { name: "Banana" },
      { name: "Banana Strawberry" },
      { name: "Coconut" },
      { name: "Chocolate" },
      { name: "Honeydew" },
      { name: "Mango" },
      { name: "Matcha" },
      { name: "Kiwi" },
      { name: "Lavender" },
      { name: "Peach" },
      { name: "Pineapple" },
      { name: "Pineapple Coconut" },
      { name: "Strawberry" },
      { name: "Thai Tea" },
      { name: "Wintermelon" },
    ],
  },
  {
    id: "fruit-tea",
    name: "Fruit Tea",
    blurb: "Bright, refreshing & caffeine-light fruit infusions.",
    emoji: "🍓",
    price: "$5.95",
    accent: "from-berry to-peach-dark",
    items: [
      { name: "Strawberry", tag: "Popular" },
      { name: "Lychee" },
      { name: "Blueberry" },
      { name: "Coconut" },
      { name: "Cranberry" },
      { name: "Dragon Fruit" },
      { name: "Dragon Mango" },
      { name: "Logan Honey" },
      { name: "Lychee Logan Honey" },
      { name: "Lychee Strawberry" },
      { name: "Mango" },
      { name: "Passion Fruit" },
      { name: "Pomegranate" },
      { name: "Peach" },
      { name: "Tropical" },
      { name: "Watermelon" },
      { name: "Wintermelon" },
    ],
  },
  {
    id: "fruit-yakult",
    name: "Fruit Yakult",
    blurb: "Fruity drinks with a tangy probiotic yakult twist.",
    emoji: "🥛",
    price: "$6.50",
    accent: "from-peach to-berry",
    items: [
      { name: "Strawberry", tag: "Popular" },
      { name: "Mango" },
      { name: "Dragon Fruit" },
      { name: "Peach" },
      { name: "Pomegranate" },
      { name: "Passion Fruit" },
      { name: "Tropical" },
    ],
  },
  {
    id: "smoothies",
    name: "Smoothies",
    blurb: "Thick, frosty & blended fresh. Add boba!",
    emoji: "🥤",
    price: "$7.99",
    accent: "from-matcha to-matcha-dark",
    items: [
      { name: "Signature", tag: "Popular" },
      { name: "Taro" },
      { name: "Cookies & Cream" },
      { name: "Chocolate" },
      { name: "Mango" },
      { name: "Mangonada" },
      { name: "Peach" },
      { name: "Piña Colada" },
      { name: "Strawberry" },
      { name: "Strawberrynada" },
    ],
  },
  {
    id: "specials",
    name: "Specials",
    blurb: "Signature sips you won't find anywhere else.",
    emoji: "✨",
    price: "$7.99",
    accent: "from-taro-light to-berry",
    items: [
      { name: "The Pink Drink", note: "Strawberry popping boba", tag: "Popular" },
      { name: "Andes Mint Magic", note: "Brown sugar boba" },
      { name: "Brown Sugar Crumble", note: "Brown sugar boba" },
      { name: "Golden Matcha Cloud" },
      { name: "Thai Tea Coca", note: "Coffee jelly" },
      { name: "Strawberry Matchaholic" },
    ],
  },
  {
    id: "coffee",
    name: "Coffee",
    blurb: "Served with coffee jelly for a little buzz.",
    emoji: "☕",
    price: "$6.50",
    accent: "from-[#C8A27C] to-[#8A5A36]",
    items: [
      { name: "Dalgona", tag: "Popular" },
      { name: "Coconut" },
      { name: "Hazelnut" },
    ],
  },
];

// Add-ons — $0.99 each unless noted.
export const toppingsPrice = "$0.99";
export const toppings: string[] = [
  "Brown Sugar Boba",
  "Brown Sugar Crystal Boba",
  "Crystal Boba",
  "Taro Crystal Boba",
  "Coffee Jelly",
  "Mango Jelly",
  "Passion Fruit Jelly",
  "Pineapple Jelly",
  "Rainbow Jelly",
  "Cherry Popping Boba",
  "Lychee Popping Boba",
  "Mango Popping Boba",
  "Passion Fruit Popping Boba",
  "Peach Popping Boba",
  "Pomegranate Popping Boba",
  "Strawberry Popping Boba",
  "Yogurt Popping Boba",
  "Egg Pudding",
];

// Snacks.
export const snacks: { name: string; price: string }[] = [
  { name: "Cream Cheese Garlic Bread", price: "$3.50" },
];

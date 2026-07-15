export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  price: number;
  description: string;
  longDescription: string;
  materials: string;
  dimensions?: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
}

export const collections: Collection[] = [
  {
    id: "acar",
    name: "Acar",
    slug: "acar",
    description: "",
    image: `${import.meta.env.BASE_URL}products/acar/acar.png`,
    heroImage: `${import.meta.env.BASE_URL}products/acar/acar.png`,
  },
  {
    id: "bawang-mentah",
    name: "Bawang Mentah",
    slug: "bawang-mentah",
    description:
      "Black garlic segar hasil fermentasi alami, tersedia dalam berbagai ukuran kemasan",
    image: `${import.meta.env.BASE_URL}products/BMentah/bawang.png`,
    heroImage: `${import.meta.env.BASE_URL}products/BMentah/bawang.png`,
  },
  {
    id: "madu-bawang",
    name: "Madu Bawang",
    slug: "madu-bawang",
    description:
      "Bahan dapur herbal pilihan untuk melengkapi masakan sehat sehari-hari",
    image: `${import.meta.env.BASE_URL}products/MBawang/MaduB.png`,
    heroImage: `${import.meta.env.BASE_URL}products/MBawang/MaduB.jpeg`,
  },
  {
    id: "madu-bawang-hitam",
    name: "Madu Bawang Hitam",
    slug: "madu-bawang-hitam",
    description:
      "Minuman herbal menyegarkan berbahan dasar black garlic dan madu murni",
    image: `${import.meta.env.BASE_URL}products/MBawangH/madu.png`,
    heroImage: `${import.meta.env.BASE_URL}products/MBawangH/madu.png`,
  },
];

export const products: Product[] = [
  // Acar
  {
    id: "acar-bawang-putih-tunggal-100g",
    name: "Acar Bawang Putih Tunggal 100g",
    slug: "acar-bawang-putih-tunggal-100g",
    collection: "acar",
    price: 40000,
    description: "Acar bawang putih tunggal segar sebagai pelengkap masakan",
    longDescription:
      "Acar Bawang Putih Tunggal hadir dalam kemasan botol yang higienis, cocok sebagai pelengkap masakan maupun camilan sehat sehari-hari. Dibuat dari bawang putih tunggal pilihan dengan proses pengolahan alami.",
    materials: "Kemasan botol",
    dimensions: "Kemasan botol",
    images: [`${import.meta.env.BASE_URL}products/acar/Acar100g.jpg`],
    featured: true,
  },

  // Bawang Mentah
  {
    id: "black-garlic-kotak-1kg",
    name: "Black Garlic Kotak 1 Kg",
    slug: "black-garlic-kotak-1kg",
    collection: "bawang-mentah",
    price: 40000,
    description: "Kemasan besar untuk kebutuhan konsumsi keluarga atau usaha",
    longDescription:
      "Black Garlic Kotak 1 Kg cocok untuk kebutuhan konsumsi keluarga dalam jumlah besar maupun untuk pelaku usaha yang ingin mengolah kembali black garlic menjadi produk lain. Diproses dengan standar higienis dan fermentasi alami tanpa bahan pengawet.",
    materials: "Kemasan kotak",
    dimensions: "1 kg",
    images: [`${import.meta.env.BASE_URL}products/BMentah/B1kg.png`],
  },
  {
    id: "black-garlic-kotak-500gr-fresh",
    name: "Black Garlic Kotak 500 Gram",
    slug: "black-garlic-kotak-500-gram",
    collection: "bawang-mentah",
    price: 40000,
    description: "Kemasan kotak praktis untuk kebutuhan sebulan",
    longDescription:
      "Black Garlic Kotak 500 Gram hadir dalam kemasan kotak yang praktis dan mudah disimpan. Diolah dari bawang lanang pilihan yang difermentasi secara alami sehingga menghasilkan cita rasa manis legit dan tekstur kenyal khas black garlic premium.",
    materials: "Kemasan kotak",
    dimensions: "500 gram",
    images: [`${import.meta.env.BASE_URL}products/BMentah/B500g.jpg`],
  },
  {
    id: "black-garlic-250gr-fresh",
    name: "Black Garlic Kemasan 250 Gram",
    slug: "black-garlic-kemasan-250-gram",
    collection: "bawang-mentah",
    price: 40000,
    description: "Kemasan ekonomis untuk konsumsi harian",
    longDescription:
      "Black Garlic Kemasan 250 Gram adalah pilihan tepat untuk konsumsi harian. Diproses dengan fermentasi alami tanpa bahan pengawet, menjaga kandungan antioksidan tetap terjaga untuk mendukung daya tahan tubuh keluarga Anda.",
    materials: "Kemasan pouch",
    dimensions: "250 gram",
    images: [`${import.meta.env.BASE_URL}products/BMentah/B250g.jpg`],
  },
  {
    id: "black-garlic-100gr-suplemen",
    name: "Black Garlic Kemasan 100 Gram",
    slug: "black-garlic-suplemen-kemasan-100-gram",
    collection: "bawang-mentah",
    price: 40000,
    description: "Suplemen herbal alami kaya antioksidan untuk konsumsi rutin",
    longDescription:
      "Black Garlic Kemasan 100 Gram sebagai suplemen herbal harian membantu menjaga daya tahan tubuh dan kesehatan jantung. Dibuat dari bawang lanang pilihan yang difermentasi secara alami tanpa bahan kimia tambahan.",
    materials: "Kemasan pouch",
    dimensions: "100 gram",
    images: [`${import.meta.env.BASE_URL}products/BMentah/B100g.jpg`],
    featured: true,
  },
  {
    id: "black-garlic-botol-100gr",
    name: "Black Garlic Botol 100 Gram",
    slug: "black-garlic-botol-100-gram",
    collection: "bawang-mentah",
    price: 40000,
    description: "Kemasan botol praktis, mudah dibawa ke mana saja",
    longDescription:
      "Black Garlic Botol 100 Gram dikemas dalam botol praktis yang menjaga kesegaran produk dan mudah dibawa bepergian. Pilihan tepat untuk suplemen herbal harian di tengah aktivitas yang padat.",
    materials: "Kemasan botol",
    dimensions: "100 gram",
    images: [`${import.meta.env.BASE_URL}products/BMentah/BB100g.jpg`],
    new: true,
  },
  // Madu Bawang
  {
    id: "madu-bawang-lanang-130gr",
    name: "Madu Bawang Lanang Tunggal 130 Gram",
    slug: "madu-bawang-lanang-tunggal-130-gram",
    collection: "menu-sarapan",
    price: 40000,
    description: "Madu bawang lanang, teman sarapan sehat penuh nutrisi",
    longDescription:
      "Madu Bawang Lanang Tunggal 130 Gram merupakan perpaduan madu murni dan bawang lanang tunggal yang diproses secara alami. Nikmati sebagai menu sarapan sehat untuk memulai hari dengan energi dan daya tahan tubuh yang optimal.",
    materials: "Kemasan botol",
    dimensions: "130 gram",
    images: [`${import.meta.env.BASE_URL}products/MBawang/MaduB130g.jpg`],
    featured: true,
  },
  // Madu Bawang Hitam
  {
    id: "madu-bawang-hitam-100gr",
    name: "Madu Bawang Hitam 100 Gram",
    slug: "madu-bawang-hitam-100-gram",
    collection: "madu-bawang-hitam",
    price: 40000,
    description: "Madu bawang lanang, teman sarapan sehat penuh nutrisi",
    longDescription:
      "Madu Bawang Lanang Tunggal 330 Gram merupakan perpaduan madu murni dan bawang lanang tunggal yang diproses secara alami. Nikmati sebagai menu sarapan sehat untuk memulai hari dengan energi dan daya tahan tubuh yang optimal.",
    materials: "Kemasan botol",
    dimensions: "330 gram",
    images: [`${import.meta.env.BASE_URL}products/MBawangH/MaduH100g.jpg`],
    new: true,
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((product) => product.collection === collectionSlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((collection) => collection.slug === slug);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];

  return products
    .filter((p) => p.collection === product.collection && p.id !== productId)
    .slice(0, limit);
};

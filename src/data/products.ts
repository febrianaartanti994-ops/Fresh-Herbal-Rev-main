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

const placeholderImage = `${import.meta.env.BASE_URL}placeholder.svg`;

export const collections: Collection[] = [
  {
    id: "makanan-segar-beku",
    name: "Makanan Segar & Beku",
    slug: "makanan-segar-dan-beku",
    description: "Black garlic segar hasil fermentasi alami, tersedia dalam berbagai ukuran kemasan",
    image: placeholderImage,
    heroImage: placeholderImage,
  },
  {
    id: "suplemen-vitamin",
    name: "Suplemen Makanan & Vitamin",
    slug: "suplemen-makanan-dan-vitamin",
    description: "Pilihan suplemen herbal berbahan dasar black garlic untuk menjaga daya tahan tubuh",
    image: placeholderImage,
    heroImage: placeholderImage,
  },
  {
    id: "bahan-pokok",
    name: "Bahan Pokok",
    slug: "bahan-pokok",
    description: "Bahan dapur herbal pilihan untuk melengkapi masakan sehat sehari-hari",
    image: placeholderImage,
    heroImage: placeholderImage,
  },
  {
    id: "minuman",
    name: "Minuman",
    slug: "minuman",
    description: "Minuman herbal menyegarkan berbahan dasar black garlic dan madu murni",
    image: placeholderImage,
    heroImage: placeholderImage,
  },
  {
    id: "menu-sarapan",
    name: "Menu Sarapan",
    slug: "menu-sarapan",
    description: "Teman sarapan sehat, madu bawang lanang kaya manfaat untuk memulai hari",
    image: placeholderImage,
    heroImage: placeholderImage,
  },
];

export const products: Product[] = [
  // Makanan Segar & Beku
  {
    id: "bawang-hitam-tunggal-lanang-100gr",
    name: "Bawang Hitam Black Garlic Tunggal Lanang 100 Gram",
    slug: "bawang-hitam-black-garlic-tunggal-lanang-100-gram",
    collection: "makanan-segar-beku",
    price: 40000,
    description: "Black garlic tunggal lanang asli hasil fermentasi alami 40 hari",
    longDescription: "Bawang Hitam Black Garlic Tunggal Lanang dibuat dari bawang lanang pilihan yang difermentasi secara alami selama 40 hari dengan presisi suhu dan kelembapan, hingga menghasilkan black garlic dengan rasa manis legit tanpa bau menyengat. Kaya akan antioksidan dan cocok dikonsumsi langsung sebagai camilan sehat maupun pelengkap masakan.",
    materials: "Kemasan pouch",
    dimensions: "100 gram",
    images: [placeholderImage],
    featured: true,
  },
  {
    id: "black-garlic-kotak-1kg",
    name: "Black Garlic Kotak 1 Kg",
    slug: "black-garlic-kotak-1kg",
    collection: "makanan-segar-beku",
    price: 40000,
    description: "Kemasan besar untuk kebutuhan konsumsi keluarga atau usaha",
    longDescription: "Black Garlic Kotak 1 Kg cocok untuk kebutuhan konsumsi keluarga dalam jumlah besar maupun untuk pelaku usaha yang ingin mengolah kembali black garlic menjadi produk lain. Diproses dengan standar higienis dan fermentasi alami tanpa bahan pengawet.",
    materials: "Kemasan kotak",
    dimensions: "1 kg",
    images: [placeholderImage],
  },
  {
    id: "black-garlic-kotak-500gr-fresh",
    name: "Black Garlic Kotak 500 Gram",
    slug: "black-garlic-kotak-500-gram",
    collection: "makanan-segar-beku",
    price: 40000,
    description: "Kemasan kotak praktis untuk kebutuhan sebulan",
    longDescription: "Black Garlic Kotak 500 Gram hadir dalam kemasan kotak yang praktis dan mudah disimpan. Diolah dari bawang lanang pilihan yang difermentasi secara alami sehingga menghasilkan cita rasa manis legit dan tekstur kenyal khas black garlic premium.",
    materials: "Kemasan kotak",
    dimensions: "500 gram",
    images: [placeholderImage],
  },
  {
    id: "black-garlic-250gr-fresh",
    name: "Black Garlic Kemasan 250 Gram",
    slug: "black-garlic-kemasan-250-gram",
    collection: "makanan-segar-beku",
    price: 40000,
    description: "Kemasan ekonomis untuk konsumsi harian",
    longDescription: "Black Garlic Kemasan 250 Gram adalah pilihan tepat untuk konsumsi harian. Diproses dengan fermentasi alami tanpa bahan pengawet, menjaga kandungan antioksidan tetap terjaga untuk mendukung daya tahan tubuh keluarga Anda.",
    materials: "Kemasan pouch",
    dimensions: "250 gram",
    images: [placeholderImage],
  },
  // Suplemen Makanan & Vitamin
  {
    id: "black-garlic-250gr-suplemen",
    name: "Black Garlic Kemasan 250 Gram",
    slug: "black-garlic-suplemen-kemasan-250-gram",
    collection: "suplemen-vitamin",
    price: 40000,
    description: "Suplemen herbal alami kaya antioksidan untuk konsumsi rutin",
    longDescription: "Black Garlic Kemasan 250 Gram sebagai suplemen herbal harian membantu menjaga daya tahan tubuh dan kesehatan jantung. Dibuat dari bawang lanang pilihan yang difermentasi secara alami tanpa bahan kimia tambahan.",
    materials: "Kemasan pouch",
    dimensions: "250 gram",
    images: [placeholderImage],
    featured: true,
  },
  {
    id: "black-garlic-500gr-suplemen",
    name: "Black Garlic Kotak 500 Gram",
    slug: "black-garlic-suplemen-kotak-500-gram",
    collection: "suplemen-vitamin",
    price: 40000,
    description: "Stok suplemen herbal untuk konsumsi jangka panjang",
    longDescription: "Black Garlic Kotak 500 Gram cocok dikonsumsi rutin sebagai suplemen alami untuk mendukung sistem imun. Kemasan kotak menjaga kualitas dan kesegaran produk lebih lama.",
    materials: "Kemasan kotak",
    dimensions: "500 gram",
    images: [placeholderImage],
  },
  {
    id: "black-garlic-botol-100gr",
    name: "Black Garlic Botol 100 Gram",
    slug: "black-garlic-botol-100-gram",
    collection: "suplemen-vitamin",
    price: 40000,
    description: "Kemasan botol praktis, mudah dibawa ke mana saja",
    longDescription: "Black Garlic Botol 100 Gram dikemas dalam botol praktis yang menjaga kesegaran produk dan mudah dibawa bepergian. Pilihan tepat untuk suplemen herbal harian di tengah aktivitas yang padat.",
    materials: "Kemasan botol",
    dimensions: "100 gram",
    images: [placeholderImage],
    new: true,
  },
  // Bahan Pokok
  {
    id: "acar-bawang-putih-tunggal",
    name: "Acar Bawang Putih Tunggal Kemasan Botol",
    slug: "acar-bawang-putih-tunggal-kemasan-botol",
    collection: "bahan-pokok",
    price: 40000,
    description: "Acar bawang putih tunggal segar sebagai pelengkap masakan",
    longDescription: "Acar Bawang Putih Tunggal hadir dalam kemasan botol yang higienis, cocok sebagai pelengkap masakan maupun camilan sehat sehari-hari. Dibuat dari bawang putih tunggal pilihan dengan proses pengolahan alami.",
    materials: "Kemasan botol",
    dimensions: "Kemasan botol",
    images: [placeholderImage],
  },
  // Minuman
  {
    id: "black-garlic-madu-murni-125ml",
    name: "Black Garlic Kupas plus Madu Murni Kemasan Botol 125ml",
    slug: "black-garlic-kupas-plus-madu-murni-125ml",
    collection: "minuman",
    price: 40000,
    description: "Perpaduan black garlic kupas dan madu murni dalam kemasan botol",
    longDescription: "Black Garlic Kupas plus Madu Murni memadukan khasiat black garlic dan madu murni dalam satu kemasan botol praktis 125ml. Minuman herbal ini cocok dikonsumsi setiap hari untuk menjaga stamina dan daya tahan tubuh.",
    materials: "Kemasan botol",
    dimensions: "125 ml",
    images: [placeholderImage],
    featured: true,
  },
  // Menu Sarapan
  {
    id: "madu-bawang-lanang-330gr",
    name: "Madu Bawang Lanang Tunggal 330 Gram",
    slug: "madu-bawang-lanang-tunggal-330-gram",
    collection: "menu-sarapan",
    price: 40000,
    description: "Madu bawang lanang, teman sarapan sehat penuh nutrisi",
    longDescription: "Madu Bawang Lanang Tunggal 330 Gram merupakan perpaduan madu murni dan bawang lanang tunggal yang diproses secara alami. Nikmati sebagai menu sarapan sehat untuk memulai hari dengan energi dan daya tahan tubuh yang optimal.",
    materials: "Kemasan botol",
    dimensions: "330 gram",
    images: [placeholderImage],
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

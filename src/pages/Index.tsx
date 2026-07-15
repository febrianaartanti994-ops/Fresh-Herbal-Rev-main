import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, Instagram } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionCard } from "@/components/CollectionCard";
import { collections, getNewProducts, products } from "@/data/products";
import { Button } from "@/components/ui/button";

const Index = () => {
  const newProducts = getNewProducts();
  const latestProducts = products.slice(0, 4);
  const displayedCollections = collections.slice(0, 6);
  const featuredCollection = collections[0]; // Lighting
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // riview
  const reviewImages = [
    `${import.meta.env.BASE_URL}rivew/ul1.jpg`,
    `${import.meta.env.BASE_URL}rivew/ul2.jpg`,
    `${import.meta.env.BASE_URL}rivew/ul3.jpg`,
    `${import.meta.env.BASE_URL}rivew/ul4.jpg`,
    `${import.meta.env.BASE_URL}rivew/ul5.jpg`,
    `${import.meta.env.BASE_URL}rivew/ul6.jpg`,
  ];

  return (
    <Layout>
      {/* Hero Section — Full Viewport */}
      <section
        ref={heroRef}
        className="relative h-[100svh] -mt-16 md:-mt-20 overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src={`${import.meta.env.BASE_URL}banner4.png`}
            alt="Hidup Sehat Bersama Fresh Herbal"
            className="w-full h-[120%] object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/50" />
        </motion.div>

        <motion.div
          className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28 pt-16 md:pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-6"
            >
              Hidup Sehat Bersama Fresh Herbal
            </motion.p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9] tracking-tight">
              Black Garlic
              <br />
              <span className="italic font-normal">Premium</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
              Fresh Herbal menghadirkan Black Garlic premium hasil fermentasi
              alami yang kaya antioksidan untuk membantu menjaga daya tahan
              tubuh, kesehatan jantung, dan kualitas hidup keluarga Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
              >
                <Link to="/products">
                  Lihat Produk
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-white/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={featuredCollection.heroImage || featuredCollection.image}
                alt={featuredCollection.name}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="md:py-12"
            >
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                Produk Terbaru
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.95]">
                {featuredCollection.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                {featuredCollection.description}. Black Garlic premium hasil
                fermentasi selama 40 hari dengan rasa lebih lembut tanpa bau
                menyengat.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
              >
                <Link to={`/products?collection=${featuredCollection.slug}`}>
                  Lihat Produk {featuredCollection.name}
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 md:py-28 bg-linen">
        <div className="container-full">
          <div className="flex items-end justify-between mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                Produk Unggulan
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                Produk Fresh Herbal
              </h2>
            </motion.div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {latestProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-14 text-center md:hidden">
            <Button
              asChild
              variant="outline"
              className="rounded-none px-8 py-5 text-sm tracking-[0.15em] uppercase"
            >
              <Link to="/products">Lihat Semua Produk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 md:py-32">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Kategori
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Kategori Produk
            </h2>
          </motion.div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCollections.map((collection, index) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                index={index}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-6">
              Tentang Kami
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.3] mb-8">
              Kegelapan yang menyembuhkan.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Bawang lanang pilihan, difermentasi 40 hari dengan presisi suhu
              dan kelembapan, hingga berubah manis, legit, dan kaya antioksidan.
              Warisan pengobatan leluhur, disempurnakan dengan sains masa kini.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase"
            >
              <Link to="/about">
                Selengkapnya
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Riview Section*/}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Rivew Pelanggan
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Dipercaya Ribuan Pelanggan
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Lihat pengalaman nyata pelanggan Fresh Herbal yang telah merasakan
              manfaat Black Garlic Premium.
            </p>
          </motion.div>

          {/* Rivew */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[9/16] overflow-hidden  group">
                <video
                  controls
                  poster={`${import.meta.env.BASE_URL}rivew/tmb.png`}
                  className="w-full h-full object-cover"
                >
                  <source
                    src={`${import.meta.env.BASE_URL}rivew/rivew.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            {/* Review Images */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {reviewImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Review ${index + 1}`}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

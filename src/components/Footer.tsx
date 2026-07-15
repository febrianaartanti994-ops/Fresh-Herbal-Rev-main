import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/products";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Top bar */}
      <div className="border-b border-background/10">
        <div className="container-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-8">
            <div className="text-center">
              <Link
                to="/"
                className="font-serif text-3xl md:text-4xl tracking-tight text-background"
              >
                Fresh Herbal
              </Link>
              <p className="mt-3 text-sm text-background/50 leading-relaxed max-w-lg mx-auto">
                Black garlic premium dan produk herbal alami untuk mendukung
                gaya hidup sehat keluarga Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Collections */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Kategori
            </h4>
            <ul className="space-y-3">
              {collections.slice(0, 6).map((collection) => (
                <li key={collection.id}>
                  <Link
                    to={`/products?collection=${collection.slug}`}
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Jelajahi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Belanja Semua
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Cerita Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Keranjang Belanja
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Bantuan
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6285222031212?text=Halo,%20saya%20ingin%20bertanya%20tentang%20FAQ."
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Pengiriman & Pengembalian
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285222031212?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Pengiriman%20%26%20Pengembalian."
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  Panduan Penyimpanan
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285222031212?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Panduan%20Penyimpanan."
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:freshherbalblackgarlic@gmail.com"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  freshherbalblackgarlic@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <p className="text-sm text-background/40 leading-relaxed">
                  Senin–Sabtu, 08.00–17.00 WIB
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-full py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Fresh Herbal. Hak cipta dilindungi.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-xs text-background/30 hover:text-background/60 transition-colors duration-300"
            >
              Kebijakan Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

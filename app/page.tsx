"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Droplets, Heart, Star, ChevronDown, Menu, X } from "lucide-react";

// ─── DATA ───────────────────────────────────────────────
const products = [
  {
    name: "Lifebuoy Total 10",
    desc: "Melindungi dari 10 kuman berbahaya dalam sekali cuci.",
    color: "from-red-700 to-red-500",
    emoji: "🛡️",
    tag: "Best Seller",
  },
  {
    name: "Lifebuoy Mild Care",
    desc: "Lembut di kulit, kuat melawan kuman. Cocok untuk kulit sensitif.",
    color: "from-blue-600 to-cyan-400",
    emoji: "🫧",
    tag: "Terlembut",
  },
  {
    name: "Lifebuoy Hijab",
    desc: "Diformulasikan khusus untuk kesegaran sepanjang hari.",
    color: "from-green-700 to-emerald-400",
    emoji: "🌿",
    tag: "Eksklusif",
  },
  {
    name: "Lifebuoy Kids",
    desc: "Formula lembut yang disukai anak-anak, aman dan efektif.",
    color: "from-yellow-500 to-orange-400",
    emoji: "⭐",
    tag: "Untuk Si Kecil",
  },
];

const stats = [
  { value: "100+", label: "Tahun Perlindungan" },
  { value: "10x", label: "Lebih Efektif" },
  { value: "50M+", label: "Keluarga Indonesia" },
  { value: "99.9%", label: "Kuman Terbunuh" },
];

const benefits = [
  {
    icon: Shield,
    title: "Perlindungan Maksimal",
    desc: "Formula aktif ThymolD™ membunuh 99.9% kuman berbahaya penyebab penyakit.",
  },
  {
    icon: Droplets,
    title: "Kulit Tetap Lembap",
    desc: "Moisturizer alami menjaga kulit tidak kering setelah setiap pemakaian.",
  },
  {
    icon: Heart,
    title: "Aman untuk Keluarga",
    desc: "Teruji dermatologis, aman untuk bayi, anak-anak, hingga lansia.",
  },
  {
    icon: Star,
    title: "Kepercayaan #1 Indonesia",
    desc: "Dipercaya jutaan keluarga Indonesia selama lebih dari satu abad.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className={`font-display text-3xl tracking-widest ${
            scrolled ? "text-lifebuoy-red" : "text-white"
          }`}
        >
          LIFEBUOY
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {["Produk", "Manfaat", "Tentang", "Kontak"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-body font-medium transition hover:text-lifebuoy-red ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#produk"
          className="hidden md:block bg-lifebuoy-red text-white font-body font-semibold px-6 py-2 rounded-full hover:bg-lifebuoy-dark transition"
        >
          Coba Sekarang
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4">
          {["Produk", "Manfaat", "Tentang", "Kontak"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-lifebuoy-red clip-diagonal overflow-hidden flex items-center">
      {/* Background circles */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-lifebuoy-dark opacity-30 animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-lifebuoy-light opacity-20 animate-float-delay" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full border-4 border-white opacity-10 animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-48 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/70 font-body uppercase tracking-[0.3em] text-sm mb-4">
            Sejak 1894 · Terpercaya #1
          </p>
          <h1 className="font-display text-7xl md:text-9xl text-white leading-none mb-6">
            HIDUP
            <br />
            <span className="text-stroke text-white">SEHAT</span>
            <br />
            MULAI
            <br />
            SINI
          </h1>
          <p className="text-white/80 font-body text-lg mb-10 max-w-md">
            Perlindungan keluarga dari 10 kuman berbahaya dengan formula
            ThymolD™ eksklusif Lifebuoy. Karena kesehatan keluargamu, prioritas kami.
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.a
              href="#produk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-lifebuoy-red font-body font-bold px-8 py-4 rounded-full text-lg hover:bg-lifebuoy-cream transition shadow-xl"
            >
              Lihat Produk
            </motion.a>
            <motion.a
              href="#manfaat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-body font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition"
            >
              Pelajari Lebih
            </motion.a>
          </div>
        </motion.div>

        {/* Hero visual: big soap bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex justify-center relative"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 animate-float flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-white text-6xl">99.9%</div>
                <div className="font-body text-white/90 text-lg">Kuman Terbunuh</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10 border-2 border-white/30 animate-float-delay" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-white/10 border border-white/30 animate-float" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl text-lifebuoy-red">{s.value}</div>
            <div className="font-body text-gray-400 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="produk" className="py-24 bg-lifebuoy-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-lifebuoy-red font-semibold uppercase tracking-widest mb-3">
            Pilihan Produk
          </p>
          <h2 className="font-display text-6xl md:text-7xl text-gray-900">
            TEMUKAN <span className="text-lifebuoy-red">PRODUKMU</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${p.color} p-10 flex items-center justify-center`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {p.emoji}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block bg-lifebuoy-red/10 text-lifebuoy-red text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {p.tag}
                </span>
                <h3 className="font-display text-2xl text-gray-900 mb-2">{p.name}</h3>
                <p className="font-body text-gray-500 text-sm mb-4">{p.desc}</p>
                <button className="w-full bg-gray-900 text-white font-body font-semibold py-3 rounded-2xl hover:bg-lifebuoy-red transition-colors duration-300">
                  Beli Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="manfaat" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: big text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-lifebuoy-red font-semibold uppercase tracking-widest mb-3">
            Mengapa Lifebuoy?
          </p>
          <h2 className="font-display text-6xl md:text-7xl text-gray-900 leading-none mb-6">
            LEBIH
            <br />
            <span className="text-lifebuoy-red">DARI</span>
            <br />
            SEKEDAR
            <br />
            SABUN
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Setiap tetes Lifebuoy membawa teknologi perlindungan terdepan
            yang menjaga keluargamu tetap sehat dan aktif setiap hari.
          </p>
        </motion.div>

        {/* Right: benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border-2 border-gray-100 hover:border-lifebuoy-red hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-lifebuoy-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-lifebuoy-red transition-colors duration-300">
                <b.icon
                  size={24}
                  className="text-lifebuoy-red group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-2">{b.title}</h3>
              <p className="font-body text-gray-500 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      name: "Siti Rahayu",
      role: "Ibu Rumah Tangga, Jakarta",
      text: "Sejak pakai Lifebuoy, anak-anak jarang sakit. Sabunnya wangi dan bikin kulit tetap lembut!",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Dokter Umum, Surabaya",
      text: "Saya rekomendasikan Lifebuoy ke pasien. Formula ThymolD-nya terbukti efektif secara klinis.",
      rating: 5,
    },
    {
      name: "Dewi Permata",
      role: "Guru SD, Bandung",
      text: "Murid-murid saya sekarang rajin cuci tangan karena suka harum Lifebuoy Kids. Luar biasa!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-900 clip-diagonal-reverse">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-lifebuoy-red font-semibold uppercase tracking-widest mb-3">
            Testimoni
          </p>
          <h2 className="font-display text-6xl text-white">
            KATA <span className="text-lifebuoy-red">MEREKA</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-lifebuoy-gold fill-lifebuoy-gold" />
                ))}
              </div>
              <p className="font-body text-gray-300 mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-display text-xl text-white">{t.name}</div>
                <div className="font-body text-gray-500 text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-lifebuoy-red relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="font-display text-[20rem] text-white leading-none select-none">LB</div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto px-6"
      >
        <h2 className="font-display text-7xl text-white mb-6">
          MULAI HIDUP LEBIH SEHAT HARI INI
        </h2>
        <p className="font-body text-white/80 text-xl mb-10">
          Dapatkan penawaran spesial untuk pembelian pertama. Gratis ongkir ke seluruh Indonesia.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-lifebuoy-red font-body font-bold px-10 py-4 rounded-full text-lg shadow-2xl hover:bg-lifebuoy-cream transition"
          >
            Beli Sekarang — Diskon 20%
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-3xl text-lifebuoy-red tracking-widest">LIFEBUOY</span>
        <p className="font-body text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Lifebuoy Indonesia. Semua hak cipta dilindungi.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Kontak"].map((link) => (
            <a key={link} href="#" className="font-body text-gray-500 hover:text-white text-sm transition">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
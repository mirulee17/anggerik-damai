'use client';

import { useState, useEffect } from 'react';

interface Homestay {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

interface Facility {
  icon: string;
  name: string;
}

export default function Home() {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [prevBgImageIndex, setPrevBgImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedHomestay, setSelectedHomestay] = useState<Homestay | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Perlis Attraction Background Images
  const perlisBgImages = [
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/gps-cs-s/APNQkAGE6ExBUAnUHU3G7OoMoXwRlUYk7WPpkL_QK_ujKN5XhzriJvBaMuu7HIXLUVrCwGKPV9MYQ9R9TzOXdRVHYDSstbyGa4OYvlsBzeuwoi7uSkRIkTw6Sk1MsN-amCz6kHaR6qTdrMWBMMc=w810-h468-n-k-no")',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/gps-cs-s/APNQkAE4N0PpIQGO3JMn3fcJD2XPydUVRV2C8gvdXeSDRcx9wzp3ph-HGWTpfr1W90OYVDD_ut1B5et-mz2wEgC6VGT2d8ziVV7ipFwa_CKBVJ0KV3ww882QZngCvEPD1mx1kT8obTkvsjcfohc=w810-h468-n-k-no")',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/gps-cs-s/APNQkAGxy7SfcoLDVfZlgaEL6ae_E_BSzjn7zKSWq3UsZ_TqhHr2Fi9HAqCdB9P4MbiMPmoZvQLqT-EJDOnV0N0YVdeBFq15-WtIzmCTXAomfKeXoou7OED6OC-wZ3g_PRDyN9a8OeuA=w810-h468-n-k-no")',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/gps-cs-s/APNQkAErCGSMGRI3ONpSxFhyWAaqbCHrkYKKBGYC2bBgmlEJiZ-n6tzL3NpMMfRRtArG1ZvCubo2RIzsrcuhPrjHdby6yV46WE9IPemhZbGNIvV8uAFuEdG2dC0emDMeJvWIRS4lwVP-Bg=w810-h468-n-k-no")',
    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/gps-cs-s/APNQkAEE-HNAuUYMxFYod7XFvL5b3s7bCwZFKqgBlTHRm8S0yIQVHR8wJQLCHrQ4sm3fxkM3oxIZvrVFrPMIMp26j-gNKcwSrqz6pX2E894fHNLAm7aVLyYDuXeV4nJndDnuB-lLcer_=w810-h468-n-k-no")'
  ];

  // Auto-rotate background images with a smooth fade
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % perlisBgImages.length;
        setPrevBgImageIndex(prevIndex);
        setIsFading(true);
        window.setTimeout(() => setIsFading(false), 1900);
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [perlisBgImages.length]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 112; // Height of the fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const homestays: Homestay[] = [
    {
      id: 1,
      name: "Pintu masuk homestay...hijau mendamaikan",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay1.jpg",
      description: "Pintu masuk homestay...hijau mendamaikan"
    },
    {
      id: 2,
      name: "Ruang santai bersama mini library",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay2.jpg",
      description: "Ruang santai bersama mini library"
    },
    {
      id: 3,
      name: "Bilik pertama....Single bed untuk si bujang",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay3.jpg",
      description: "Bilik pertama....Single bed untuk si bujang"
    },
    {
      id: 4,
      name: "Bilik Kedua....Tempat letak pakaian pun ada",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay4.jpg",
      description: "Bilik Kedua....Tempat letak pakaian pun ada"
    },
    {
      id: 5,
      name: "Bilik Ketiga...sesuai untuk keluarga yang ramai",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay5.jpg",
      description: "Bilik Ketiga...sesuai untuk keluarga yang ramai"
    },
    {
      id: 6,
      name: "Kamar mandi yang selesa",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay6.jpg",
      description: "Kamar mandi yang selesa"
    },
    {
      id: 7,
      name: "Bahagian dapur...boleh masak untuk keluarga atau kawan-kawan",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay7.jpg",
      description: "Bahagian dapur...boleh masak untuk keluarga atau kawan-kawan"
    },
    {
      id: 8,
      name: "Freezer pun ada..mana tau nak simpan makanan",
      location: "Kangar, Perlis, Malaysia",
      price: 200,
      image: "/homestay8.jpg",
      description: "Freezer pun ada..mana tau nak simpan makanan"
    },
    {
      id: 9,
      name: "Ruang belakang homestay...siap ada buaian untuk bersantai",
      location: "Kuala Lumpur, Malaysia",
      price: 200,
      image: "/homestay9.jpg",
      description: "Ruang belakang homestay...siap ada buaian untuk bersantai"
    }
  ];

  const facilities: Facility[] = [
    { icon: "🪑", name: "Berperabot Lengkap" },
    { icon: "🛏️", name: "Bilik Selesa" },
    { icon: "🍽️", name: "Kawasan Makan" },
    { icon: "📚", name: "Mini Library" },
    { icon: "🎯", name: "Kawasan Aktiviti dan Bersantai" },
    { icon: "🚗", name: "Tempat Letak Kereta" },
    { icon: "🍳", name: "Kemudahan Memasak" },
    { icon: "⛰️", name: "Lokasi Strategik" }
  ];

  const attractions = [
    { name: "Jeti Kuala Perlis", description: "Jarak 15km ke jeti Kuala Perlis" },
    { name: "Padang Besar / Wang Kelian", description: "Hanya 20 minit ke Padang Besar / Wang Kelian (mesti pergi ni...)" },
    { name: "Gua Kelam dan Air terjun", description: "Hanya 20 minit dari Gua Kelam dan Air terjun" },
    { name: "Ladang Anggur / Ladang Harumanis", description: "Hanya 15 minit ke ladang anggur / ladang harumanis" },
    { name: "ILP Kangar dan IPG Perlis", description: "Hanya 5 minit dari ILP Kangar dan IPG Perlis" },
    { name: "Pasaraya Giant", description: "Hanya 5 minit dari pasaraya Giant" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-700 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen bg-black/20 pt-28">
        {/* Header */}
        <header className="bg-white/95 shadow-lg fixed inset-x-0 top-0 z-50 backdrop-blur-sm" role="banner">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
              <div>
                <img
                  src="/Anggerik_Damai_homestay_logo.png"
                  alt="Homestay Anggerik Damai Logo - Penginapan Selesa di Perlis"
                  className="h-18 w-auto object-contain"
                />
              </div>
              <nav aria-label="Main navigation">
                <div className="hidden md:flex space-x-1">
                  {[
                    { id: 'home', label: 'Utama' },
                    { id: 'about', label: 'Tentang Kami' },
                    { id: 'facilities', label: 'Kemudahan' },
                    { id: 'gallery', label: 'Galeri' },
                    { id: 'attractions', label: 'Tarikan' },
                    { id: 'contact', label: 'Hubungi / Tempahan' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="px-4 py-2 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <nav className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200" aria-label="Mobile navigation">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {[
                    { id: 'home', label: 'Utama' },
                    { id: 'about', label: 'Tentang Kami' },
                    { id: 'facilities', label: 'Kemudahan' },
                    { id: 'gallery', label: 'Galeri' },
                    { id: 'attractions', label: 'Tarikan' },
                    { id: 'contact', label: 'Hubungi / Tempahan' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </header>

{/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-gray-700">Utama</a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Home Section */}
          <>
            {/* Rotating Background for Home Section */}
            <div className="relative">
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundImage: perlisBgImages[prevBgImageIndex] }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-2000 opacity-100"
                style={{ backgroundImage: perlisBgImages[bgImageIndex] }}
                aria-hidden="true"
              />
              {/* Hero Banner */}
              <section id="home" className="relative bg-black/30 text-white py-20" aria-labelledby="hero-heading">
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 drop-shadow-lg">
                    HOMESTAY ANGGERIK DAMAI
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg">
                    Nikmati penginapan yang selesa, lengkap dengan kemudahan dan suasana yang tenang seperti di rumah sendiri!
                  </p>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-lg">
                    Sesuai untuk family gathering, cuti santai, atau healing trip di Kangar, Perlis.
                  </p>
                  <p className="text-xl md:text-2xl mb-18 max-w-3xl mx-auto drop-shadow-lg">
                    Rasai pengalaman terbaik dan cipta kenangan yang tidak dapat dilupakan bersama keluarga dan rakan-rakan.
                  </p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                    aria-label="Tempah penginapan sekarang"
                  >
                    TEMPAH SEKARANG!
                  </button>
                </div>
              </section>
            </div>
          </>

        {/* About Section */}
        <section id="about" className="py-16 relative" style={{
          backgroundImage: 'url("/bgreen.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }} aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold mb-8 text-white drop-shadow-lg">TENTANG ANGGERIK DAMAI</h2>
            <div className="bg-white/90 rounded-lg shadow-lg p-8 backdrop-blur-sm">
              <p className="text-lg text-gray-700 mb-6">
                Assalamualaikum WBT
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Mai cek mai… jangan malu jangan segan 😄
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Sapa yang mai Kangaq, jom singgah homestay kami! Lokasi memang strategik; dekat dengan tempat makan, kedai, dan tempat menarik. Rumah pun fully furnished, lengkap semua… masuk je terus rasa macam rumah sendiri 🏡✨
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Sesuai untuk family, kawan-kawan, atau yang nak short getaway santai-santai kat Perlis. Suasana tenang, selesa, memang ngam untuk rehat hilang penat.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Harga? Jangan bimbang… memang berpatutan serendah RM 200 untuk 1 hari 1 malam.
                Yang penting, puas hati dan selesa!
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Harga boleh dirunding untuk tempahan 3 hari atau lebih. Jom la mai, kami tunggu!
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 relative" style={{
          backgroundImage: 'url("/bgreen.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }} aria-labelledby="facilities-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="facilities-heading" className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">KEMUDAHAN TERSEDIA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" role="list">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white/90 rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow backdrop-blur-sm" role="listitem">
                  <div className="text-5xl mb-3" aria-hidden="true">{facility.icon}</div>
                  <p className="font-semibold text-gray-900">{facility.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 relative" style={{
          backgroundImage: 'url("/bgreen.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }} aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">GALERI FOTO</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {homestays.map((homestay) => (
                <div
                  key={homestay.id}
                  onClick={() => {
                    setSelectedHomestay(homestay);
                    setIsModalOpen(true);
                  }}
                  className="overflow-hidden rounded-3xl shadow-lg group cursor-pointer bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedHomestay(homestay);
                      setIsModalOpen(true);
                    }
                  }}
                  aria-label={`View details for ${homestay.name} - ${homestay.location}`}
                >
                  <div className="overflow-hidden w-full aspect-[4/3]">
                    <img
                      src={homestay.image}
                      alt={`${homestay.name} - Penginapan selesa di ${homestay.location}, Perlis`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-lg text-gray-700 mb-6">{homestay.name}</p>
                    <p className="text-sm text-gray-600">{homestay.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section id="attractions" className="py-16 sm:py-20 relative" style={{
          backgroundImage: 'url("/bgreen.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }} aria-labelledby="attractions-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="attractions-heading" className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">LOKASI TARIKAN TERDEKAT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {attractions.map((attraction, index) => (
                <article key={index} className="bg-white/90 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow backdrop-blur-sm" role="listitem">
                  <h3 className="text-2xl font-bold text-green-700 mb-3">{attraction.name}</h3>
                  <p className="text-gray-700">{attraction.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 relative" style={{
          backgroundImage: 'url("/bgreen.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }} aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">HUBUNGI / TEMPAHAN</h2>
            <div className="mx-auto max-w-2xl">
              <div className="bg-white/95 rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/30">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-green-700">Hubungi Kami</h3>
                <address className="space-y-6 text-center not-italic">
                  <div>
                    <p className="font-semibold text-green-700 mb-2">Telefon</p>
                    <p className="text-lg text-gray-700">
                      Encik Izan
                    </p>
                    <a href="tel:+60172068666" className="text-xl font-medium text-gray-900 hover:text-green-700 underline focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2">
                      +60 17-206 8666
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-2">WhatsApp</p>
                    <p className="text-lg text-gray-700">
                      Encik Izan
                    </p>
                    <a
                      href="https://wa.me/60172068666"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-gray-900 hover:text-green-700 underline focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                      aria-label="Hubungi melalui WhatsApp"
                    >
                      +60 17-206 8666
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 mb-2">Alamat</p>
                    <p className="text-gray-700">Kangar, Perlis, Malaysia</p>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </section>
      {/* Footer */}
      <footer className="bg-gray-900/95 text-white py-12 backdrop-blur-sm" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Anggerik Damai</h4>
              <p className="text-gray-400">Pintu gerbang untuk pengalaman menginap Malaysia yang terbaik.</p>
            </div>
            <nav aria-label="Footer navigation - Quick links">
              <h5 className="font-bold mb-4">Pautan Pantas</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Utama</a></li>
                <li><a href="#about" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Tentang Kami</a></li>
                <li><a href="#facilities" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Kemudahan</a></li>
              </ul>
            </nav>
            <nav aria-label="Footer navigation - Explore">
              <h5 className="font-bold mb-4">Layari</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#gallery" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Galeri</a></li>
                <li><a href="#attractions" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Tarikan</a></li>
                <li><a href="#contact" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Tempahan</a></li>
              </ul>
            </nav>
            <nav aria-label="Footer navigation - Contact">
              <h5 className="font-bold mb-4">Hubungi</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:+60172068666" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">Telefon</a></li>
                <li><a href="https://wa.me/60172068666" target="_blank" rel="noopener noreferrer" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Hubungi melalui WhatsApp">WhatsApp</a></li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Anggerik Damai. All Right Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && selectedHomestay && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-t-3xl">
                <img
                  src={selectedHomestay.image}
                  alt={`${selectedHomestay.name} - Penginapan selesa di ${selectedHomestay.location}, Perlis`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                aria-label="Tutup modal"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h2 id="modal-title" className="text-3xl font-bold text-gray-900 mb-2">{selectedHomestay.name}</h2>
              <p className="text-gray-600 mb-6">{selectedHomestay.location}</p>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <p className="text-gray-600 text-sm">Harga per 1 hari 1 malam (*harga boleh dirunding untuk 3 hari atau lebih)</p>
                <p className="text-4xl font-bold text-green-700">RM {selectedHomestay.price}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Penerangan</h3>
                <p id="modal-description" className="text-gray-700 leading-relaxed">{selectedHomestay.description}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    scrollToSection('contact');
                  }}
                  className="w-full sm:flex-1 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                  aria-label="Tempah penginapan sekarang"
                >
                  Tempah Sekarang
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                  aria-label="Tutup modal"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </main>
    </div>
    </div>
  );
}
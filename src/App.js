import React, { useState, useEffect } from 'react';
import { ChevronDown, BarChart3, TrendingUp, Shield, Zap, Mail, Phone, MapPin, Send, Menu, X, ArrowRight } from 'lucide-react';

const UsDuzeyLandingRed = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Lütfen zorunlu alanları doldurun!');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi!');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const scrollToContact = () => {
    setIsMenuOpen(false); // Mobil menüyü kapat
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Gelişmiş Analitik",
      description: "Kapsamlı veri analizi ve görselleştirme araçları ile işletmenizin performansını detaylı şekilde izleyin."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Gerçek Zamanlı Veri",
      description: "Anlık veri akışı ve real-time dashboard'lar ile her zaman güncel bilgilere erişin."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenli Altyapı",
      description: "Kurumsal düzeyde güvenlik protokolleri ile verilerinizi maksimum koruma altında tutun."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Yüksek Performans",
      description: "Optimize edilmiş altyapı ile büyük veri setlerini hızlı ve verimli şekilde işleyin."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">ÜD</span>
              </div>
              <span className="text-2xl font-bold">Üs Düzey</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-red-400 transition-colors">Ana Sayfa</a>
              <a href="#features" className="hover:text-red-400 transition-colors">Özellikler</a>
              <a href="#contact" className="hover:text-red-400 transition-colors">İletişim</a>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-full hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Demo Talep Et
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block hover:text-red-400 transition-colors">Ana Sayfa</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block hover:text-red-400 transition-colors">Özellikler</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-red-400 transition-colors">İletişim</a>
              <button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-full hover:from-red-700 hover:to-orange-600 transition-all duration-300"
              >
                Demo Talep Et
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
              Üs Düzey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Gelişmiş Veri Terminali ile İşletmenizin Gücünü Keşfedin
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
              Düzey 3+ veriler, kapsamlı ışı haritaları, detaylı hacim profilleri, hassas emir baloncukları ve gelişmiş emir akışı görselleştirmeleriyle entegre edilerek, piyasa analizlerinde üstün doğruluk ve derinlik sağlar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
              >
                Hemen Başlayın
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Özelliklerimiz
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesyonel veri analizi için ihtiyacınız olan tüm araçlar tek platformda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
          _BİTTİ_

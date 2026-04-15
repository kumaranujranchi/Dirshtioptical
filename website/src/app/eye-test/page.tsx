import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import BookingForm from '@/components/eye-test/BookingForm';

const steps = [
  {
    step: '01',
    icon: 'calendar_today',
    title: 'Precision Scheduling',
    desc: 'Select your preferred time slot in under 60 seconds through our digital concierge.',
  },
  {
    step: '02',
    icon: 'clinical_notes',
    title: 'Consultation',
    desc: 'Meet our senior optometrists to discuss your vision history and lifestyle needs.',
  },
  {
    step: '03',
    icon: 'biotech',
    title: 'Advanced Diagnostic',
    desc: 'Experience Ranchi\'s most advanced 12-point ocular health examination.',
  },
  {
    step: '04',
    icon: 'verified',
    title: 'Optimal Fitting',
    desc: 'Walk away with a precise prescription and personalized lens recommendation.',
  },
];

const services = [
  {
    icon: 'visibility',
    title: 'Digital Refraction',
    desc: 'Computerized assessment for pinpoint accuracy in your prescription.',
  },
  {
    icon: 'contactless',
    title: 'Retinal Scanning',
    desc: 'Deep-tissue scanning to ensure the long-term health of your optical nerves.',
  },
  {
    icon: 'health_and_safety',
    title: 'Pediatric Care',
    desc: 'Child-friendly environment with gentle diagnostic techniques for early detection.',
  },
  {
    icon: 'fitbit',
    title: 'Digital Strain Check',
    desc: 'Specialized evaluation for computer users and blue-light sensitivity.',
  },
];

export default function EyeTestPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-32">
        {/* Deep Header */}
        <section className="relative h-[550px] flex items-center overflow-hidden mb-24">
          <div className="absolute inset-0 z-0 scale-105 animate-subtle-zoom">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQIt49ImTD8-pM4LJhStVhkEpTMPvRfwSqbCG9IaX4cIzWHhiCpqgD3EKgrHMpEdkZMxxEbQxWDGxIEyDeMEftuu_n8OpBV0yN8nvMJUrb3S0JK1o1SrSq_C93lC7W3VIAMQd8WzyKAXx4oxascJT8HJqR-o2V0wEnboRqw8QI68LW-H-uCXzTjZSDAxI4B82pjCzT_NFVHpA6fUYrxNVqyCDJlUGcEGZoxmo6sskxqFwN-R5R-BXuv85ljSLvntwrgwyBdizsCc"
              alt="Eye Test Clinic"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-teal-100 text-teal-700 rounded-full mb-8 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest">Clinic & Diagnostics</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-primary leading-[0.9] mb-8 animate-fade-in-up delay-100">
                Vision Health <br /> 
                <span className="text-teal-600">Perfected.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-on-surface-variant/80 mb-12 leading-relaxed font-medium max-w-xl animate-fade-in-up delay-200">
                Experience Ranchi&apos;s most comprehensive eye examination. Advanced technology meets professional care.
              </p>
              
              <div className="flex flex-wrap gap-6 animate-fade-in-up delay-300">
                <a href="#book">
                  <Button size="lg" className="rounded-full px-10">Schedule Free Test</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* How It Works Grid */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-teal-600 text-[10px] font-black tracking-widest uppercase mb-3 block">Seamless Journey</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">Your Experience</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((item) => (
                <div key={item.step} className="group relative p-10 bg-surface-container-low rounded-[2.5rem] overflow-hidden border border-outline-variant/10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/5">
                  <span className="absolute -right-4 -top-4 text-9xl font-black text-primary/5 group-hover:text-primary/[0.08] transition-colors">{item.step}</span>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/5 border border-outline-variant/10">
                    <span className="material-symbols-outlined text-teal-600">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-sm font-medium text-on-surface-variant leading-relaxed opacity-70 italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <section id="book" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
            <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary mb-6">
                  Ready for <br /> Perfect Vision?
                </h2>
                <p className="text-lg font-medium text-on-surface-variant leading-relaxed opacity-80">
                  Fill in your preferred slot. Our patient coordination team in Ranchi will verify and confirm your appointment via phone/WhatsApp within 60 minutes.
                </p>
              </div>

              <div className="space-y-8">
                {services.map((service) => (
                  <div key={service.title} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-teal-600">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">{service.title}</h4>
                      <p className="text-sm font-medium text-on-surface-variant opacity-70 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-[2rem] bg-primary text-on-primary">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-teal-300">emergency_home</span>
                  <h4 className="font-bold">Home Eye Test?</h4>
                </div>
                <p className="text-xs opacity-70 mb-6 leading-relaxed">Can&apos;t visit the clinic? We offer specialized mobile ocular units that bring Ranchi&apos;s best eye test technology directly to your doorstep.</p>
                <Button variant="secondary" size="sm" className="rounded-xl w-full">Request Home Visit</Button>
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7">
              <BookingForm />
            </div>
          </section>

          {/* Testimonial Quote */}
          <section className="relative py-24 rounded-[3rem] overflow-hidden bg-surface-container-low border border-outline-variant/10 text-center">
            <div className="relative z-10 max-w-3xl mx-auto px-6">
              <span className="material-symbols-outlined text-6xl text-teal-500/20 mb-8">format_quote</span>
              <p className="text-2xl md:text-3xl font-medium text-primary leading-tight tracking-tight mb-12">
                &ldquo;Drishti Optical provided the most thorough eye exam I&apos;ve experienced in Jharkhand. The doctor was patient and the digital imaging was fascinating.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-outline-variant/30" />
                <div className="text-left">
                  <h4 className="font-bold text-primary">Ananya Singh</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline">Verified Patient, Ranchi</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

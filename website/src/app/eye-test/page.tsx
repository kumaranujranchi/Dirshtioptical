import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    icon: 'calendar_today',
    title: 'Book Your Slot',
    desc: 'Choose a date and time that suits you — online in under 2 minutes.',
  },
  {
    step: '02',
    icon: 'person_check',
    title: 'Meet Your Optometrist',
    desc: 'Our certified optometrists greet you and understand your vision history.',
  },
  {
    step: '03',
    icon: 'visibility',
    title: 'Comprehensive Eye Exam',
    desc: 'Advanced digital refraction, retinal imaging, and pressure checks.',
  },
  {
    step: '04',
    icon: 'receipt_long',
    title: 'Get Your Prescription',
    desc: 'Receive a detailed prescription and personalised lens recommendations.',
  },
];

const services = [
  {
    icon: 'biotech',
    title: 'Digital Refraction Test',
    desc: 'Precise computerised assessment of your refractive error — no guesswork.',
  },
  {
    icon: 'manage_search',
    title: 'Retinal Imaging',
    desc: 'High-resolution scan of the retina to detect early signs of eye disease.',
  },
  {
    icon: 'monitor_heart',
    title: 'Glaucoma Screening',
    desc: 'Intraocular pressure check to screen for glaucoma risk.',
  },
  {
    icon: 'devices',
    title: 'Screen-Time Assessment',
    desc: 'Specialist evaluation for digital eye strain and blue-light sensitivity.',
  },
  {
    icon: 'colorize',
    title: 'Colour Vision Test',
    desc: 'Ishihara-based assessment for colour blindness and deficiency.',
  },
  {
    icon: 'child_care',
    title: 'Paediatric Eye Exam',
    desc: 'Age-appropriate tests for children aged 3 and above.',
  },
];

const faqs = [
  {
    q: 'How long does an eye test take?',
    a: 'A comprehensive eye examination typically takes 30–45 minutes, including consultation time.',
  },
  {
    q: 'Is the eye test free?',
    a: 'Yes, your first basic eye test is completely FREE. Advanced retinal imaging is available at a nominal charge.',
  },
  {
    q: 'How often should I get my eyes tested?',
    a: 'We recommend a full eye check-up every 12 months, or every 6 months if you wear glasses or contact lenses.',
  },
  {
    q: 'Do I need to prepare anything before the test?',
    a: 'Bring your current glasses or contact lenses, if any. No other preparation is needed.',
  },
  {
    q: 'Can children get an eye test here?',
    a: 'Absolutely. We offer paediatric eye examinations for children aged 3 and above with specially trained optometrists.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    quote: 'The most thorough eye exam I have ever had. Dr. Mehta explained every step clearly and my new glasses fit perfectly.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASRpwQYf-ojU7loc3X2swKs6TiuRIkf6sJ_3EU7bDOMjb7IABviOhoGsrAv8IO5zBUEbd6p_Wanxiwg0qMY7DQ9T_AZ4ToLtM5fNdNZVsQRBVWR8JQ5zewqC1NnyVoqmuBILV18lBFslopJN1MUcwkTD9ChRKEyLlWfwdjW4O6mbuYROgasdPupCT-37ZJX2myrnyjRwO1qP9kXPnjs58Ywwi65BHw4UCkBMPR2bEWU7LNnLoXkYHD49GnlujgdquB80VXXeMAnoo',
  },
  {
    name: 'Rahul Verma',
    role: 'Architect',
    quote: 'Booked online at midnight, walked in the next morning. Zero wait time, and they detected early-stage astigmatism I never knew about.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADy06P8nvdXuKWLwuvYfrasgHePB7JCCq_Hbg8IMEl8YqnsW_KUSkAJqweYTVgx-dknKsMYSxavy_z3lA9Hvx__LSOUlxIqUhaoexK6eqZXFBjyWmKBcegSDqz7lhgIRFvC5SPFZzMLAFagtGz5pH6gLXHIi3Fu5KbAvw7L7tanLLLPwyQ8q27lQImFi0Be1S6gzecW-6INOh_GJsH8so231gnCC1jfn1-8kPQeZSneeKRVijEC2GxW1FDMo4VDYyqG8wmroLDrOE',
  },
  {
    name: 'Sneha Patel',
    role: 'Teacher',
    quote: 'Got my daughter tested here. The paediatric optometrist was so patient and gentle. Highly recommend for families.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGUZoFG3sBKiH4BdilS4N-AFwP4uov-RU2JRzn9tLAxNp--_RajBBhkVfz0lp9uFiUTo8eUCF00kRpReNQAJngm-_b7jZG6cc-c-CKQm5foP0QKPhe-064bok_GLTKbIa88HMVt54TMiyyskX6_Ha8aDsSBkUW4kzQ4PjK1d5AGvZoAS3oS0-MNKUDhLxidGZ5g0Wx_DcvI3r5JdFH_bqfHy1eJf1hl9QMhLS2Du4YjeVbdZ_qE-INmybBtjdf0PhAwDaHxtRJew',
  },
];

export default function EyeTestPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="relative h-[620px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcMD3Gt8nnHzPIYpijLWwzWhCiglTFQVrPQgHNwHEDT_O0dN4jxOp0ybepopdayriQkLSArXxvVps0dUclZfXHVB1mZzLMkLkIQ9V0lM7nggnRKYJiu-WTV2FMyWV0W7s4ZoSVVCqqs15HKFCTTxqeX5kg0YYoS6akct-ToLQC8r6mcjcYuJJNuhadMJTOB-CgK7qP1dTrtbTkLDOCzae95DZgOJ1c_hRV_Sfz4Bevaky4MYqevjsqcx_GOaiPuQO7oiyXmoBIGFQ"
              alt="Eye test clinic"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded mb-6">
                FREE EYE TEST
              </span>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.1] mb-6">
                Precision Vision Care
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                Book a comprehensive eye examination with our certified optometrists. Advanced diagnostics, personalised prescriptions, and same-day results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#book">
                  <Button size="lg">Book Free Eye Test</Button>
                </a>
                <a href="#services">
                  <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    View Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <section className="bg-secondary text-on-secondary py-6">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: 'verified', label: 'Certified Optometrists' },
              { icon: 'event_available', label: 'Easy Online Booking' },
              { icon: 'timer', label: 'Results in 30 Minutes' },
              { icon: 'currency_rupee', label: '100% Free Basic Test' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl">{ icon }</span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mt-2">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, icon, title, desc }) => (
              <div key={step} className="relative bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-outline-variant/30 font-headline leading-none select-none">
                  {step}
                </span>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">{icon}</span>
                <h3 className="font-bold text-lg text-primary mb-2">{title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mt-2">Our Eye Care Services</h2>
              <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
                From basic refraction to advanced retinal imaging — our clinic is equipped with the latest diagnostic technology.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ icon, title, desc }) => (
                <div key={title} className="bg-surface-container-lowest rounded-xl p-8 flex gap-5 items-start hover:shadow-ambient transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">{icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Booking Form ── */}
        <section id="book" className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">Book Now</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mt-2 mb-4">
                Schedule Your Free Eye Test
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Fill in your details and we will confirm your appointment within 2 hours. Walk-ins are also welcome during clinic hours.
              </p>
              <ul className="space-y-4">
                {[
                  'No hidden charges for basic eye test',
                  'Report ready before you leave the clinic',
                  'Free follow-up within 30 days',
                  'Kids & senior-friendly examination available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-10 shadow-ambient">
              <h3 className="text-xl font-bold text-primary mb-8">Your Appointment Details</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Rahul"
                      className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-2">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-2">Preferred Time</label>
                    <select className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition">
                      <option value="">Select a slot</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Any concern? (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. eye strain, blurred vision, headaches..."
                    className="w-full bg-surface-container border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition resize-none"
                  />
                </div>

                <Button variant="secondary" size="lg" className="w-full">
                  <span className="material-symbols-outlined mr-2 text-base align-middle">calendar_add_on</span>
                  Confirm Appointment
                </Button>
                <p className="text-xs text-on-surface-variant text-center">
                  By booking you agree to our <Link href="/privacy" className="text-secondary underline">Privacy Policy</Link>. We never share your data.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">Patient Stories</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mt-2">What Our Patients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(({ name, role, quote, avatar }) => (
                <div key={name} className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient flex flex-col gap-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed flex-grow">&ldquo;{quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={avatar} alt={name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{name}</p>
                      <p className="text-xs text-on-surface-variant">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mt-2">Frequently Asked</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden">
                <summary className="flex items-center justify-between px-8 py-5 cursor-pointer font-semibold text-primary list-none">
                  {q}
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="px-8 pb-6 text-on-surface-variant text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcMD3Gt8nnHzPIYpijLWwzWhCiglTFQVrPQgHNwHEDT_O0dN4jxOp0ybepopdayriQkLSArXxvVps0dUclZfXHVB1mZzLMkLkIQ9V0lM7nggnRKYJiu-WTV2FMyWV0W7s4ZoSVVCqqs15HKFCTTxqeX5kg0YYoS6akct-ToLQC8r6mcjcYuJJNuhadMJTOB-CgK7qP1dTrtbTkLDOCzae95DZgOJ1c_hRV_Sfz4Bevaky4MYqevjsqcx_GOaiPuQO7oiyXmoBIGFQ"
              alt="Eye care"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-primary" style={{ opacity: 0.88 }} />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4">
              Your Vision Deserves the Best Care
            </h2>
            <p className="text-white/70 mb-10">Walk in or book online. Our clinic is open Monday – Saturday, 10 AM to 7 PM.</p>
            <a href="#book">
              <Button variant="secondary" size="lg">Book Your Free Eye Test Today</Button>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

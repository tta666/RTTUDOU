import FadeIn from './FadeIn';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      {/* Heading */}
      <FadeIn>
        <h2 className="font-kanit font-black text-center text-white mb-8 sm:mb-12 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[160px]">
          联系方式
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-center text-[#D7E2EA] text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 font-kanit font-light">
          让我们一起创造精彩作品
        </p>
      </FadeIn>

      {/* Contact info */}
      <FadeIn delay={0.2}>
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center">
            <p className="text-[#D7E2EA] opacity-60 text-sm sm:text-base font-kanit tracking-wider mb-2">电话</p>
            <a href="tel:14702807718" className="text-white text-2xl sm:text-3xl md:text-4xl font-kanit font-medium hover:opacity-70 transition-opacity">
              147 0280 7718
            </a>
          </div>

          <div className="text-center">
            <p className="text-[#D7E2EA] opacity-60 text-sm sm:text-base font-kanit tracking-wider mb-2">邮箱</p>
            <a href="mailto:tangqinan@example.com" className="text-white text-2xl sm:text-3xl md:text-4xl font-kanit font-medium hover:opacity-70 transition-opacity">
              tangqinan@example.com
            </a>
          </div>

          <div className="text-center">
            <p className="text-[#D7E2EA] opacity-60 text-sm sm:text-base font-kanit tracking-wider mb-2">位置</p>
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-kanit font-medium">
              中国成都
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Footer */}
      <div className="mt-20 sm:mt-24 md:mt-32 pt-8 sm:pt-10 md:pt-12 border-t border-[rgba(215,226,234,0.15)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#D7E2EA] opacity-40 text-sm sm:text-base font-kanit">
            © 2024 唐秦安。保留所有权利。
          </p>
          <p className="text-[#D7E2EA] opacity-40 text-sm sm:text-base font-kanit">
            视觉设计师 · AI设计师 · 品牌设计师
          </p>
        </div>
      </div>
    </section>
  );
}

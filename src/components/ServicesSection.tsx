import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: '视频剪辑',
    description: '专业短视频、宣传PV及二次元内容剪辑，根据项目需求完成高质量后期制作，擅长节奏把控与氛围塑造。',
  },
  {
    number: '02',
    name: '特效制作',
    description: 'AE特效包装，动态Logo、转场特效、粒子效果等视觉包装，为视频增添视觉冲击力和创意表现。',
  },
  {
    number: '03',
    name: '字幕动效',
    description: '各类字幕动画设计，从简约到动感，专业的字幕特效包装提升观看体验和品牌调性。',
  },
  {
    number: '04',
    name: '视觉包装',
    description: '针对虚拟主播、二次元风格的专属视觉风格设计与包装，打造独特的视觉识别系统。',
  },
  {
    number: '05',
    name: 'AIGC工具',
    description: '熟练运用各类AIGC工具辅助视觉创意与素材生成，提高制作效率，拓展创意边界。',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 z-10">
      {/* Heading */}
      <h2 className="font-kanit font-black text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[160px]">
        服务项目
      </h2>

      {/* Services list */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] last:border-b"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-kanit font-black text-[#0C0C0C] text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[140px] leading-none flex-shrink-0"
              >
                {service.number}
              </span>
              <div className="flex-1 pt-2">
                <h3 className="font-kanit font-medium uppercase text-[#0C0C0C] mb-2 text-base sm:text-xl md:text-2xl lg:text-[2.1rem]">
                  {service.name}
                </h3>
                <p
                  className="font-kanit font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60 text-sm sm:text-base md:text-lg lg:text-[1.25rem]"
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

const DECOR_IMAGES = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  obj1: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const ABOUT_TEXT = `拥有两年以上视频剪辑及视觉动效设计经验，专注于对视频的剪切以及特效的合成制作及呈现。我热衷于追求卓越、致力于展现最佳作品形象及合作，让我们一起创造精彩佳作！`;

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Top-left decorative image */}
      <FadeIn delay={0.1} x={-80} duration={0.9}>
        <img
          src={DECOR_IMAGES.moon}
          alt="月亮"
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] object-contain"
        />
      </FadeIn>

      {/* Bottom-left decorative image */}
      <FadeIn delay={0.25} x={-80} duration={0.9}>
        <img
          src={DECOR_IMAGES.obj1}
          alt="3D物体"
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] object-contain"
        />
      </FadeIn>

      {/* Top-right decorative image */}
      <FadeIn delay={0.15} x={80} duration={0.9}>
        <img
          src={DECOR_IMAGES.lego}
          alt="积木"
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] object-contain"
        />
      </FadeIn>

      {/* Bottom-right decorative image */}
      <FadeIn delay={0.3} x={80} duration={0.9}>
        <img
          src={DECOR_IMAGES.group}
          alt="3D组合"
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] object-contain"
        />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2 className="font-kanit font-black leading-none tracking-tight text-center hero-heading mb-10 sm:mb-14 md:mb-16 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[160px]">
          关于我
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <div className="max-w-[560px] text-center mb-10 sm:mb-14 md:mb-16">
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium leading-relaxed text-base sm:text-lg md:text-xl lg:text-[1.35rem]"
        />
      </div>

      {/* Contact button */}
      <FadeIn delay={0} y={20}>
        <a
          href="#contact"
          className="relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            outline: '2px solid white',
            outlineOffset: '-3px',
          }}
        >
          Contact Me
        </a>
      </FadeIn>
    </section>
  );
}
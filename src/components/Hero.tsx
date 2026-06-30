import { useEffect, useRef, useState } from 'react';
import { RevealLayer } from './RevealLayer';
import { ChevronDown } from 'lucide-react';

const SPOTLIGHT_R = 260;

// Asset URLs - 使用适合设计师作品集的图片
const BG_IMAGE_1 = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1280&q=85';
const BG_IMAGE_2 = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1280&q=85';

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const mouseRef = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp smoothing
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;
      
      setCursorPos({
        x: smoothRef.current.x,
        y: smoothRef.current.y,
      });
      
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      {/* Base image layer (z-10) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* Reveal layer with cursor spotlight (z-30) */}
      <RevealLayer
        image={BG_IMAGE_2}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-40" />

      {/* Heading (z-50) */}
      <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ animationDelay: '0.25s', letterSpacing: '-0.05em' }}
          >
            视觉的力量
          </span>
          <span
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{ animationDelay: '0.42s', letterSpacing: '-0.08em' }}
          >
            Visual Power
          </span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl hero-anim hero-fade" style={{ animationDelay: '0.5s' }}>
          视觉设计师 / AI设计师 / 品牌设计师
        </p>
        
        <div className="mt-8 flex gap-4 hero-anim hero-fade" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30"
          >
            观看作品
          </a>
          <a
            href="#contact"
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-white/30 transition-colors"
          >
            联系我
          </a>
        </div>
      </div>

      {/* Bottom-left paragraph (z-50) */}
      <div className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade" style={{ animationDelay: '0.7s' }}>
        <p className="text-sm text-white/80 leading-relaxed">
          每一帧画面都是故事，每一个特效都是创意。从短视频到宣传PV，用镜头语言讲述品牌故事。
        </p>
      </div>

      {/* Bottom-right block (z-50) */}
      <div className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade" style={{ animationDelay: '0.85s' }}>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          拥有短视频、二次元视觉包装及虚拟主播内容制作经验，擅长镜头节奏把控与氛围塑造。
        </p>
        <div className="flex gap-3">
          <a
            href="tel:14702807718"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <span>147 0280 7718</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-white/50 hover:text-white transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
import { useRef, useEffect, useState } from 'react';

const GIF_URLS = [
  'https://i.postimg.cc/MfKg5d1P/GIF-20260629-023501.gif',
  'https://i.postimg.cc/QKxvm0cb/GIF-20260629-023801.gif',
  'https://i.postimg.cc/RJV2dXwQ/GIF-20260629-024255.gif',
  'https://i.postimg.cc/D4yR6B1J/GIF-20260629-024736.gif',
  'https://i.postimg.cc/645FcYC7/GIF-20260629-025251.gif',
  'https://i.postimg.cc/q6MWwj2g/GIF-20260629-025820.gif',
  'https://i.postimg.cc/zHX470TV/GIF-20260629-025944.gif',
  'https://i.postimg.cc/8JbqLqfJ/GIF-20260629-030126.gif',
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Images = [...GIF_URLS, ...GIF_URLS, ...GIF_URLS];
  const row2Images = [...GIF_URLS, ...GIF_URLS, ...GIF_URLS];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves right */}
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Images.map((url, i) => (
            <img
              key={`row1-${i}`}
              src={url}
              alt={`gif-${i}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - moves left */}
      <div className="flex gap-3" style={{ willChange: 'transform' }}>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(scrollOffset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Images.map((url, i) => (
            <img
              key={`row2-${i}`}
              src={url}
              alt={`gif-${i}`}
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
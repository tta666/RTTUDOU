import Magnet from './Magnet';
import FadeIn from './FadeIn';

const softwareIcons = [
  {
    name: 'Adobe After Effects',
    shortName: 'AE',
    icon: 'https://ts1.tc.mm.bing.net/th/id/R-C.664656f23f292e31a9078eb48cf81970?rik=KnafOmI2OGy6RQ&riu=http%3a%2f%2Fpic.3673.com%2fupload%2f2025-4%2f202549205594841.png&ehk=jDVgNA7onSTy1mSXW2l9JdVi%2flOWOEUUq9Mv9xCFQG4%3d&risl=&pid=ImgRaw&r=0',
    color: '#9999FF',
    bgColor: 'rgba(153, 153, 255, 0.15)',
    url: 'https://www.adobe.com/products/aftereffects.html',
  },
  {
    name: 'Adobe Premiere Pro',
    shortName: 'PR',
    icon: 'https://www.25mac.com/wp-content/uploads/2023/07/14/32ef5f07249e2ecddc8d4ef6c4f663a1-1689341111-300x300.png',
    color: '#EA77FF',
    bgColor: 'rgba(234, 119, 255, 0.15)',
    url: 'https://www.adobe.com/products/premiere.html',
  },
  {
    name: '剪映 CapCut',
    shortName: '剪映',
    icon: 'https://s1.aigei.com/src/img/png/55/5580fd2d3a234787a22f655e9cde48bc.png?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:BFLXf76TPKrydvkBolT3t-NiZx0=',
    color: '#00F4EA',
    bgColor: 'rgba(0, 244, 234, 0.15)',
    url: 'https://www.capcut.com/',
  },
];

const navItems = [
  { label: '关于', href: '#about' },
  { label: '服务', href: '#services' },
  { label: '作品', href: '#projects' },
  { label: '联系', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-[#0C0C0C]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260520_111942_8fc50f9e-4dfd-45c1-81bb-d93342a23d87.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15 z-10" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <FadeIn delay={0} y={-20}>
          <div className="text-white font-kanit text-lg md:text-xl lg:text-[1.4rem] font-medium tracking-wider">dy土豆</div>
        </FadeIn>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05} y={-20}>
              <a
                href={item.href}
                className="text-[#D7E2EA] font-medium tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {item.label}
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="md:hidden">
          <span className="text-[#D7E2EA] font-kanit text-sm font-medium tracking-wider">菜单</span>
        </div>
      </nav>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-24 sm:mt-32 md:mt-40 relative z-20">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="font-kanit font-black text-center w-full hero-heading cursor-default transition-all duration-500"
            style={{
              fontSize: 'clamp(4rem, 14vw, 12rem)',
              letterSpacing: '0.05em',
              textShadow: `0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1), 0 4px 30px rgba(0, 0, 0, 0.5)`,
            }}
          >
            我叫土豆
          </h1>
        </FadeIn>
      </div>

      {/* Software Icons Row */}
      <div className="relative flex-1 flex items-center justify-center z-20">
        <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {softwareIcons.map((software, index) => (
            <FadeIn key={software.shortName} delay={0.5 + index * 0.1} y={30}>
              <Magnet padding={80} strength={5}>
                <a
                  href={software.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center gap-3"
                >
                  <div
                    className="relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 border border-white/10"
                    style={{
                      background: `linear-gradient(135deg, ${software.color}25 0%, ${software.color}08 50%, ${software.color}15 100%)`,
                      boxShadow: `0 0 30px ${software.color}00, inset 0 1px 0 rgba(255,255,255,0.1)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${software.color}40 0%, ${software.color}15 50%, ${software.color}30 100%)`;
                      e.currentTarget.style.boxShadow = `0 0 40px ${software.color}50, 0 0 80px ${software.color}25, inset 0 1px 0 rgba(255,255,255,0.2)`;
                      e.currentTarget.style.borderColor = `${software.color}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${software.color}25 0%, ${software.color}08 50%, ${software.color}15 100%)`;
                      e.currentTarget.style.boxShadow = `0 0 30px ${software.color}00, inset 0 1px 0 rgba(255,255,255,0.1)`;
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${software.color}30 0%, transparent 50%), radial-gradient(circle at 70% 70%, ${software.color}20 0%, transparent 50%)`,
                      }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                    <img
                      src={software.icon}
                      alt={software.name}
                      className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                    />
                  </div>
                  <div className="text-center transition-all duration-300 group-hover:-translate-y-1">
                    <p
                      className="text-sm sm:text-base md:text-lg font-kanit font-medium tracking-wider transition-colors duration-300"
                      style={{ color: '#D7E2EA' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = software.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#D7E2EA'; }}
                    >
                      {software.shortName}
                    </p>
                    <p className="text-xs text-[#D7E2EA]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 mt-1">
                      {software.name}
                    </p>
                  </div>
                </a>
              </Magnet>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-end justify-between pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-sm sm:text-base md:text-lg">
            AE动效设计 · PV设计 · 短视频剪辑
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <a
            href="#contact"
            className="relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium tracking-widest text-white"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
              outline: '2px solid white',
              outlineOffset: '-3px',
            }}
          >
            联系我
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

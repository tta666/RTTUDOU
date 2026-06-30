import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: '客户项目',
    name: '鸿锦传媒',
    description: '短视频与宣传PV制作',
    col1Img1: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    col2Img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  },
  {
    number: '02',
    category: '个人项目',
    name: '牧星互娱',
    description: '宣传虚拟主播形象，直播切片剪辑，宣传PV制作',
    col1Img1: 'https://i.postimg.cc/jSLh1njs/IMG-20260629-120913.jpg',
    col1Img2: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.xM60VlJhsDANt7ohvkb2ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    col2Img: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.xM60VlJhsDANt7ohvkb2ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    number: '03',
    category: '客户项目',
    name: '品牌视觉',
    description: 'AIGC辅助视觉创意',
    col1Img1: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    col1Img2: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    col2Img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  },
];

function ProjectCard({ project, index, totalCards }: { project: typeof projects[0]; index: number; totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1 - (totalCards - 1 - index) * 0.03, 1]
  );

  return (
    <div
      ref={containerRef}
      className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Card header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="font-kanit font-black text-[#D7E2EA] text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[140px] leading-none">
            {project.number}
          </span>
          <div className="flex items-center gap-4">
            <span className="font-kanit text-[#D7E2EA] text-xs sm:text-sm md:text-base opacity-60 uppercase tracking-wider">
              {project.category}
            </span>
            <button className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] text-xs sm:text-sm md:text-base font-medium tracking-widest px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#D7E2EA]/10 transition-colors">
              查看项目
            </button>
          </div>
        </div>

        {/* Project name */}
        <h3 className="font-kanit font-medium text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide mb-2">
          {project.name}
        </h3>
        <p className="font-kanit text-[#D7E2EA] opacity-60 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
          {project.description}
        </p>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4 h-auto min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh]">
          {/* Left column - 40% */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            <img
              src={project.col1Img1}
              alt={`${project.name} detail 1`}
              className="w-full object-contain rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} detail 2`}
              className="w-full object-contain rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
          {/* Right column - 60% */}
          <div className="w-[60%]">
            <video
              src="https://api.amemv.com/aweme/v1/play/?video_id=v0200fg10000d8t73ofog65jqlrqq010&line=1&file_id=89f70088e2664e7f81046610b1ead59d&sign=df8410f9e0cc951155b4bd1796511f3d&is_play_url=1&source=PackSourceEnum_PUBLISH"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-32 pb-32">
      {/* Heading */}
      <FadeIn>
        <h2 className="font-kanit font-black text-center hero-heading mb-16 sm:mb-20 md:mb-28 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[160px]">
          作品集
        </h2>
      </FadeIn>

      {/* Project cards */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
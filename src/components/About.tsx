import { Phone, Mail, MapPin, Calendar, Award, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Clock, value: '2+', label: '年工作经验' },
  { icon: Award, value: '50+', label: '完成项目' },
  { icon: Users, value: '10+', label: '合作客户' },
  { icon: Calendar, value: '100%', label: '项目交付率' },
];

const experiences = [
  {
    company: '广州鸿锦传媒有限公司',
    position: '视频剪辑',
    period: '2026.03 - 至今',
    highlights: [
      '根据项目需求完成短视频后期剪辑与视觉包装制作',
      '为视频添加字幕、动态Logo、转场与特效',
      '负责视频音频处理、调色与整体节奏优化',
      '独立完成宣传向内容的视频氛围塑造与镜头节奏设计',
    ],
  },
  {
    company: '牧星互娱（长期外包合作）',
    position: '宣传PV / 虚拟主播视频制作',
    period: '长期合作项目',
    highlights: [
      '参与虚拟主播业务宣传PV、角色展示视频及活动预告制作',
      '负责二次元风格视频的字幕动画、镜头特效与氛围包装',
      '使用AIGC工具辅助视觉创意与素材生成',
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-[#00d4ff] text-sm uppercase tracking-[0.2em]">About Me</p>
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">
                个人<span className="text-gradient">简介</span>
              </h2>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="font-orbitron text-6xl font-bold text-gradient">TQ</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#00d4ff]/30 to-[#a855f7]/30 rounded-full blur-2xl" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">唐秦安</h3>
              <p className="text-zinc-400 leading-relaxed">
                16岁视觉设计师，专注于视频剪辑与视觉包装。拥有短视频、宣传PV、二次元视觉包装及虚拟主播内容制作经验。擅长镜头节奏把控、氛围塑造、字幕动效与画面特效包装，具备较强网感与视觉审美，能够快速适配年轻化互联网内容风格。
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:14702807718"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#00d4ff]/50 transition-colors"
              >
                <Phone size={16} className="text-[#00d4ff]" />
                <span className="text-sm text-zinc-300">14702807718</span>
              </a>
              <a
                href="mailto:tangqinan@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#00d4ff]/50 transition-colors"
              >
                <Mail size={16} className="text-[#00d4ff]" />
                <span className="text-sm text-zinc-300">tangqinan@example.com</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <MapPin size={16} className="text-[#00d4ff]" />
                <span className="text-sm text-zinc-300">成都</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#00d4ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                >
                  <stat.icon className="w-6 h-6 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-orbitron text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="font-orbitron text-xl font-bold text-white">工作经历</h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                      <p className="text-[#00d4ff] text-sm">{exp.position}</p>
                    </div>
                    <span className="text-xs text-zinc-500 bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Film,
  Sparkles,
  Type,
  Palette,
  Zap,
  Video,
  Layers,
  Cpu,
} from 'lucide-react';

const skills = [
  {
    icon: Film,
    title: '视频剪辑',
    description: 'Pr / 剪映',
    details: 'Premiere Pro、剪映专业版，擅长短视频、宣传PV等各类视频剪辑',
    color: '#00d4ff',
  },
  {
    icon: Sparkles,
    title: '特效制作',
    description: 'After Effects',
    details: 'AE特效制作，包括动态Logo、转场特效、粒子效果等视觉包装',
    color: '#a855f7',
  },
  {
    icon: Type,
    title: '字幕动效',
    description: '字幕动画设计',
    details: '各类字幕动画设计，从简约到动感，提升视频观看体验',
    color: '#fbbf24',
  },
  {
    icon: Palette,
    title: '视觉包装',
    description: '二次元风格',
    details: '针对虚拟主播、二次元内容的专属视觉风格设计与包装',
    color: '#f472b6',
  },
  {
    icon: Zap,
    title: '节奏把控',
    description: '镜头节奏设计',
    details: '通过镜头语言和节奏把控，打造具有冲击力的视频作品',
    color: '#22c55e',
  },
  {
    icon: Video,
    title: '氛围塑造',
    description: '视觉氛围营造',
    details: '通过调色、光效、音画配合等方式营造沉浸式视觉氛围',
    color: '#f97316',
  },
  {
    icon: Layers,
    title: '调色处理',
    description: '视频调色优化',
    details: '专业视频调色，让画面更具质感和表现力',
    color: '#06b6d4',
  },
  {
    icon: Cpu,
    title: 'AIGC工具',
    description: 'AI辅助创作',
    details: '熟练运用各类AIGC工具辅助视觉创意与素材生成',
    color: '#8b5cf6',
  },
];

const tags = [
  'PR',
  'AE',
  '剪映',
  'AIGC工具',
  '宣传PV剪辑',
  '字幕动效',
  '特效包装',
  '二次元内容',
  '短视频',
  '虚拟主播',
  '节奏把控',
  '氛围塑造',
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#00d4ff] text-sm uppercase tracking-[0.2em]">Skills</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">
            专业<span className="text-gradient">能力</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            熟练掌握多种专业工具，专注于视觉创意与用户体验
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
              </div>
              <h3 className="font-bold text-white mb-1">{skill.title}</h3>
              <p className="text-xs mb-3" style={{ color: skill.color }}>
                {skill.description}
              </p>
              <p className="text-sm text-zinc-500">{skill.details}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="font-orbitron text-lg font-bold text-white text-center">技能标签</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:border-[#00d4ff]/50 hover:text-white hover:bg-[#00d4ff]/10 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '虚拟主播形象宣传PV',
    category: '宣传PV',
    description: '为虚拟主播业务打造的动态展示视频，包含角色介绍、能力展示和活动预告。',
    tags: ['AE特效', '字幕动效', '二次元风格'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    color: '#a855f7',
  },
  {
    id: 2,
    title: '短视频带货系列',
    category: '短视频剪辑',
    description: '针对年轻化互联网内容风格打造的带货短视频，注重节奏把控和视觉冲击力。',
    tags: ['PR剪辑', '调色', '节奏设计'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    color: '#00d4ff',
  },
  {
    id: 3,
    title: '品牌活动预告视频',
    category: '活动预告',
    description: '直播活动前的预热视频，通过氛围塑造吸引观众期待。',
    tags: ['氛围包装', '转场特效', '视觉统一'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    color: '#fbbf24',
  },
  {
    id: 4,
    title: '游戏宣传向PV',
    category: '游戏PV',
    description: '游戏角色展示和玩法介绍视频，打造沉浸式视觉体验。',
    tags: ['特效包装', '动态Logo', 'AIGC辅助'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    color: '#22c55e',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#00d4ff] text-sm uppercase tracking-[0.2em]">Portfolio</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white">
            精选<span className="text-gradient">作品</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            每一个作品都是一次视觉与创意的碰撞，用镜头语言讲述故事
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  {project.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-white/5 rounded text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full text-sm uppercase tracking-widest text-zinc-300 hover:border-[#00d4ff]/50 hover:text-white transition-all duration-300">
            <span className="flex items-center gap-2">
              查看更多作品
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

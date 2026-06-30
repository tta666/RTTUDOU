import { Phone, Mail, MapPin, Send, ArrowUp } from 'lucide-react';

const socials = [
  { name: 'Bilibili', href: '#', icon: 'B' },
  { name: 'Weibo', href: '#', icon: 'W' },
  { name: 'Xiaohongshu', href: '#', icon: 'X' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center py-32">
        <div className="max-w-[1700px] w-full mx-auto px-8 lg:px-16">
          <div className="text-center mb-16 space-y-4">
            <p className="text-[#00d4ff] text-sm uppercase tracking-[0.2em]">Contact</p>
            <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-white">
              联系我<span className="text-gradient">.</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              有任何合作意向或想了解更多，欢迎联系我
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="font-orbitron text-xl font-bold text-white">联系方式</h3>
              <div className="space-y-4">
                <a
                  href="tel:14702807718"
                  className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">电话</p>
                    <p className="text-lg text-white group-hover:text-[#00d4ff] transition-colors">
                      147 0280 7718
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:tangqinan@example.com"
                  className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#a855f7]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#a855f7]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">邮箱</p>
                    <p className="text-lg text-white group-hover:text-[#a855f7] transition-colors">
                      tangqinan@example.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-lg bg-[#fbbf24]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#fbbf24]" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">期望城市</p>
                    <p className="text-lg text-white">成都</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-orbitron text-xl font-bold text-white mb-4">社交媒体</h3>
                <div className="flex gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="font-bold">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-orbitron text-xl font-bold text-white">发送消息</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-500">姓名</label>
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-500">邮箱</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-500">主题</label>
                  <input
                    type="text"
                    placeholder="合作咨询 / 项目报价 / 其他"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-500">消息内容</label>
                  <textarea
                    rows={5}
                    placeholder="请描述您的需求..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-lg text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-shadow duration-300"
                >
                  发送消息
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/5">
        <div className="max-w-[1700px] mx-auto px-8 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-orbitron text-lg font-bold tracking-wider">
                <span className="text-gradient">TANG</span>
                <span className="text-white">QIN'AN</span>
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-sm text-zinc-500">Visual Designer</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-zinc-500">
                © 2024 唐秦安. All rights reserved.
              </span>
              <a
                href="#hero"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#00d4ff]/50 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

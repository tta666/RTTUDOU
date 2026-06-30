# 技术架构文档

## 1. 技术栈
- 前端框架：React@18 + TypeScript
- 构建工具：Vite
- 样式方案：Tailwind CSS
- 图标库：Lucide React
- 字体：Google Fonts (Noto Sans SC, Orbitron)

## 2. 项目结构
```
src/
├── components/
│   ├── Hero.tsx          # 全屏首页Hero组件
│   ├── About.tsx         # 个人经历模块
│   ├── Projects.tsx      # 精选项目模块
│   ├── Skills.tsx        # 个人优势模块
│   ├── Contact.tsx       # 底部联系方式模块
│   ├── Navbar.tsx        # 导航栏组件
│   └── Footer.tsx        # 页脚组件
├── App.tsx               # 主应用组件
├── main.tsx              # 入口文件
└── index.css             # 全局样式
```

## 3. 路由定义
- 单页面应用，所有模块在一个页面内通过滚动切换
- 锚点导航实现区块跳转

## 4. 数据模型
- 使用静态数据（来自简历）
- 组件内部定义作品集、技能等数据

## 5. 设计系统
- CSS变量定义主题色
- Tailwind配置自定义颜色
- 统一的间距、圆角、阴影系统

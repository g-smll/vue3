# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## 🚀 项目启动

```bash
npm run dev
```

## ✨ 功能配置

### 1. 自动打开浏览器

项目启动时会自动打开浏览器，这是通过在 `package.json` 中配置实现的：

```json
{
  "scripts": {
    "dev": "vite --open"
  }
}
```

**配置说明：**
- `--open` 参数让 Vite 在启动开发服务器时自动打开默认浏览器
- 如果不需要自动打开，可以移除 `--open` 参数，改为 `"dev": "vite"`

### 2. src 别名配置

项目配置了 `@` 别名指向 `src` 目录，可以使用 `@/` 来引用 src 目录下的文件。

#### Vite 配置 (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

#### TypeScript 配置 (`tsconfig.app.json`)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**使用示例：**

```typescript
// 使用别名导入
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import '@/style.css'

// 等价于相对路径导入
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import './style.css'
```

**配置优势：**
- 📁 **路径清晰**：`@/` 明确表示从 src 根目录导入
- 🔄 **重构友好**：文件移动时不需要修改导入路径
- 🎯 **代码一致性**：整个项目使用统一的导入风格
- 🛠️ **IDE 支持**：WebStorm、VS Code 等 IDE 都能正确识别和自动补全

### 3. 组件结构

项目采用组件化开发模式，目前包含以下组件：

#### Header 组件 (`src/components/header/index.vue`)

顶部导航组件，包含页面标题和导航信息。

```vue
<template>
  <div><h1>顶部</h1></div>
</template>
```

#### Footer 组件 (`src/components/footer/index.vue`)

底部信息组件，包含版权信息和项目说明。

```vue
<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Vue3 项目. 版权所有.</p>
      <p>基于 Vue 3 + TypeScript + Vite 构建</p>
    </div>
  </footer>
</template>
```

#### 主页面 (`src/App.vue`)

主页面组件，引入并使用 Header 和 Footer 组件：

```vue
<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <!-- 主要内容区域 -->
    </main>
    <Footer />
  </div>
</template>
```

**组件特点：**
- 🧩 **模块化设计**：每个组件独立封装，便于维护和复用
- 📦 **别名导入**：使用 `@/` 别名简化组件导入路径
- 🎨 **样式隔离**：使用 `scoped` 样式避免样式冲突
- 📱 **响应式布局**：采用 Flexbox 布局实现自适应设计

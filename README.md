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

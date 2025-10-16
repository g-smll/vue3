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

主页面组件，引入 Header 和 Footer 组件，并使用 `<router-view>` 显示路由页面：

```vue
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
```

**组件特点：**
- 🧩 **模块化设计**：每个组件独立封装，便于维护和复用
- 📦 **别名导入**：使用 `@/` 别名简化组件导入路径
- 🎨 **样式隔离**：使用 `scoped` 样式避免样式冲突
- 📱 **响应式布局**：采用 Flexbox 布局实现自适应设计

### 4. Vue Router 路由配置

项目集成了 Vue Router 4，实现单页面应用的路由管理功能。

#### 依赖安装

```bash
# 使用 pnpm 安装 Vue Router
pnpm add vue-router@4

# 或使用 npm
npm install vue-router@4

# 或使用 yarn
yarn add vue-router@4
```

#### 路由配置文件 (`src/router/index.ts`)

```typescript
import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            component: () => import("@/pages/home/index.vue"),
            meta: {
                title: "首页",
            },
        },
        {
            path: "/detail",
            component: () => import("@/pages/detail/index.vue"),
        },
        {
            path: "/",
            redirect: "/home",
        }
    ]
});
```

#### 主应用配置 (`src/main.ts`)

在主应用中注册路由：

```typescript
import { createApp } from 'vue'
import App from '@/App.vue'
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
import router from '@/router'

const app = createApp(App)
app.component('Header', Header)
app.component('Footer', Footer)
app.use(router)  // 注册路由
app.mount('#app')
```

#### 页面组件

项目采用 `pages` 目录结构管理页面组件：

**首页组件 (`src/pages/home/index.vue`)**
```vue
<script setup lang="ts">

</script>

<template>
  <div>home</div>
</template>

<style scoped lang="scss">

</style>
```

**详情页面 (`src/pages/detail/index.vue`)**
```vue
<script setup lang="ts">

</script>

<template>
  <div>detail</div>
</template>

<style scoped lang="scss">

</style>
```

#### 路由使用

**声明式导航**
```vue
<template>
  <!-- 使用 router-link 进行页面跳转 -->
  <router-link to="/home">首页</router-link>
  <router-link to="/detail">详情</router-link>
</template>
```

**编程式导航**
```typescript
import { useRouter } from 'vue-router'

const router = useRouter()

// 跳转到首页
router.push('/home')

// 跳转到详情页面
router.push('/detail')
```

**路由特点：**
- 🛣️ **History 模式**：使用 HTML5 History API，URL 更加美观
- 📦 **懒加载**：路由组件采用动态导入，实现代码分割
- 🎯 **类型安全**：完整的 TypeScript 支持
- 🔄 **编程式导航**：支持声明式和编程式两种导航方式

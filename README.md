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

### 5. Element Plus UI 组件库

项目集成了 Element Plus UI 组件库，提供丰富的 Vue 3 组件和完整的中文国际化支持。

#### 依赖安装

```bash
# 使用 pnpm 安装 Element Plus 和图标库
pnpm add element-plus @element-plus/icons-vue

# 或使用 npm
npm install element-plus @element-plus/icons-vue

# 或使用 yarn
yarn add element-plus @element-plus/icons-vue
```

**当前版本：**
- `element-plus`: ^2.11.4
- `@element-plus/icons-vue`: ^2.3.2

#### 全局配置 (`src/main.ts`)

```typescript
import { createApp } from 'vue'
import App from '@/App.vue'
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('Header', Header)
app.component('Footer', Footer)
app.use(router)
app.use(ElementPlus, {locale: zhCn,})  // 注册 Element Plus 并设置中文国际化
app.mount('#app')
```

**配置说明：**
- 🌐 **中文国际化**：使用 `zhCn` 语言包，所有组件显示中文
- 🎨 **样式导入**：导入完整的 CSS 样式文件
- 📦 **全局注册**：所有 Element Plus 组件可在项目中直接使用

#### 组件使用示例

**布局组件 (`src/pages/home/content/index.vue`)**

```vue
<script setup lang="ts">
import level from '@/pages/home/level/index.vue'
import region from '@/pages/home/region/index.vue'
import card from '@/pages/home/card/index.vue'
import { ref } from 'vue'

let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
</script>

<template>
  <!-- 使用 Element Plus 栅格布局 -->
  <el-row :gutter="20">
    <el-col :span="20">
      <level/>
      <region/>
      <div class="hospital">
        <card v-for="item in 10" :key="item"/>
      </div>
      <div class="pagination-container">
        <!-- 使用 Element Plus 分页组件 -->
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :disabled="false"
            :background="true"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
        />
      </div>
    </el-col>
    <el-col :span="4">侧边栏内容</el-col>
  </el-row>
</template>
```

**卡片组件 (`src/pages/home/card/index.vue`)**

```vue
<template>
  <!-- 使用 Element Plus 卡片组件 -->
  <el-card class="card-item" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">医院名称</div>
        <div class="tip">
          <div class="level">
            <!-- 使用 SVG 图标 -->
            <svg class="icon" viewBox="0 0 1024 1024" width="16" height="16">
              <!-- SVG 路径 -->
            </svg>
            <span>等级</span>
          </div>
          <div class="time">
            <svg class="icon" viewBox="0 0 1024 1024" width="16" height="16">
              <!-- SVG 路径 -->
            </svg>
            <span>时间</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/images/demo_logo.png" alt="医院logo" />
      </div>
    </div>
  </el-card>
</template>
```

#### 主要使用的组件

| 组件名称 | 用途 | 文件位置 |
|---------|------|----------|
| `el-row` / `el-col` | 栅格布局系统 | `src/pages/home/content/index.vue` |
| `el-card` | 卡片容器 | `src/pages/home/card/index.vue` |
| `el-pagination` | 分页组件 | `src/pages/home/content/index.vue` |

#### 样式定制

项目中对 Element Plus 组件进行了样式定制：

```scss
// 卡片网格布局
.hospital {
  display: grid;
  grid-template-columns: 1fr 1fr;  // 两列等宽布局
  gap: 20px;                       // 20px 间距
  margin-bottom: 20px;
}

// 分页容器
.pagination-container {
  display: flex;
  justify-content: flex-start;     // 左对齐
  margin-top: 20px;
}

// 卡片内容布局
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .left, .right {
    flex: 1;                       // 等宽分布
  }
}
```

#### SVG 图标使用

项目中使用了自定义 SVG 图标，而不是 Element Plus 图标库：

```vue
<template>
  <div class="level">
    <!-- 自定义 SVG 图标 -->
    <svg t="1760667656251" class="icon" viewBox="0 0 1024 1024" width="16" height="16">
      <path d="M621.674667 408.021333c16.618667-74.24..." fill="#000000"/>
    </svg>
    <span>等级</span>
  </div>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
}
</style>
```

**Element Plus 特点：**
- 🎨 **丰富组件**：提供 80+ 高质量 Vue 3 组件
- 🌐 **国际化支持**：完整的中文本地化
- 📱 **响应式设计**：支持多种屏幕尺寸
- 🎯 **TypeScript 支持**：完整的类型定义
- 🛠️ **主题定制**：支持 CSS 变量和 SCSS 变量定制
- ⚡ **按需导入**：支持 Tree Shaking，减小打包体积

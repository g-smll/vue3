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

---

## 🚀 Vite 构建工具配置

项目使用 Vite 作为构建工具，提供快速的开发体验和高效的生产构建。

### 环境变量配置

Vite 提供了内置的环境变量，可以通过 `import.meta.env` 访问：

```javascript
// 在任意 Vue 组件或 TypeScript 文件中输出环境变量
console.log(import.meta.env)
```

#### 基础环境变量

| 变量名 | 类型 | 说明 |
|--------|------|------|
| `BASE_URL` | `string` | 应用的基础路径，默认为 `/` |
| `MODE` | `string` | 当前运行模式（`development` 或 `production`） |
| `DEV` | `boolean` | 是否为开发环境 |
| `PROD` | `boolean` | 是否为生产环境 |
| `SSR` | `boolean` | 是否为服务端渲染模式 |

#### 使用示例

```typescript
// 在组件中使用环境变量
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 输出完整的环境变量对象
  console.log('Vite 环境变量:', import.meta.env)
  
  // 根据环境执行不同逻辑
  if (import.meta.env.DEV) {
    console.log('当前为开发环境')
  }
  
  if (import.meta.env.PROD) {
    console.log('当前为生产环境')
  }
  
  console.log('应用基础路径:', import.meta.env.BASE_URL)
  console.log('运行模式:', import.meta.env.MODE)
})
</script>
```

#### 开发环境输出示例

```javascript
{
  BASE_URL: "/",
  MODE: "development", 
  DEV: true,
  PROD: false,
  SSR: false
}
```

#### 生产环境输出示例

```javascript
{
  BASE_URL: "/",
  MODE: "production",
  DEV: false, 
  PROD: true,
  SSR: false
}
```

### TypeScript 类型声明配置

#### types 目录结构

项目使用 `types` 目录来管理全局类型声明文件，提供更好的代码组织和类型支持。

```
types/
├── vite-env.d.ts     # Vite 环境变量类型声明（简化版本）
└── import_meta.d.ts  # 完整的 import.meta 类型声明（推荐使用）
```

#### 类型声明文件说明

##### 1. `vite-env.d.ts` - 简化的环境变量类型声明

这是 Vite 官方推荐的环境变量类型声明文件名，通常用于简单的环境变量扩展：

```typescript
// types/vite-env.d.ts
interface ImportMetaEnv {
    VITE_TITLE_DEV: string;
    VITE_TITLE_HEAD: number;
}
```

**特点：**
- 官方推荐的文件命名
- 适用于简单的环境变量类型扩展
- 直接扩展 `ImportMetaEnv` 接口

##### 2. `import_meta.d.ts` - 完整的类型声明（推荐）

这是更完整和语义化的类型声明文件，提供了更好的代码组织和扩展性：

```typescript
// types/import_meta.d.ts
declare namespace ImportMeta {
  interface ImportMetaEnv {
    // Vite 内置环境变量（已在 vite/client 中定义）
    // readonly BASE_URL: string
    // readonly MODE: string
    // readonly DEV: boolean
    // readonly PROD: boolean
    // readonly SSR: boolean

    // 应用基础信息
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_VERSION: string
    readonly VITE_APP_DESCRIPTION: string
    readonly VITE_AUTHOR: string
    readonly VITE_COPYRIGHT: string

    // API 配置
    readonly VITE_API_BASE_URL: string
    readonly VITE_API_TIMEOUT: number
    readonly VITE_API_VERSION: string

    // 功能开关
    readonly VITE_ENABLE_MOCK: boolean
    readonly VITE_DEBUG_MODE: boolean
    readonly VITE_ENABLE_PWA: boolean
    readonly VITE_ENABLE_ANALYTICS: boolean

    // 第三方服务配置（可选）
    readonly VITE_SENTRY_DSN?: string
    readonly VITE_GA_ID?: string
    readonly VITE_BAIDU_ANALYTICS_ID?: string

    // 构建相关
    readonly VITE_BUILD_TIME: string
    readonly VITE_BUILD_VERSION: string
    readonly VITE_GIT_COMMIT_HASH?: string

    // 主题配置
    readonly VITE_THEME_COLOR: string
    readonly VITE_THEME_MODE: 'light' | 'dark' | 'auto'

    // 业务相关配置
    readonly VITE_HOSPITAL_NAME: string
    readonly VITE_HOSPITAL_CODE: string
    readonly VITE_DEFAULT_DEPARTMENT: string
  }
}

// 扩展全局 ImportMeta 接口
declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

**特点：**
- 使用 `declare namespace` 提供更好的命名空间管理
- 包含完整的环境变量类型定义
- 使用 `readonly` 确保类型安全
- 支持可选变量（使用 `?`）
- 提供详细的分类注释
- 扩展全局 `ImportMeta` 接口

##### 文件选择建议

**推荐使用 `import_meta.d.ts`：**
- ✅ 更完整的类型声明
- ✅ 更好的代码组织和可读性
- ✅ 支持复杂的环境变量配置
- ✅ 更强的类型安全保障

**使用 `vite-env.d.ts` 的场景：**
- 简单项目，环境变量较少
- 需要与 Vite 官方约定保持一致
- 团队更熟悉官方推荐的命名

#### TypeScript 配置 (`tsconfig.app.json`)

为了让 `types` 目录下的类型声明在整个项目中生效，需要在 TypeScript 配置中包含该目录：

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "types": ["vite/client"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [
    "src/**/*.ts", 
    "src/**/*.tsx", 
    "src/**/*.vue",
    "types/**/*.d.ts"  // 包含 types 目录下的类型声明文件
  ]
}
```

**配置说明：**
- `"types/**/*.d.ts"`：包含 types 目录下所有 `.d.ts` 类型声明文件
- 这样配置后，`types` 目录中的所有类型声明文件都会在整个项目中生效
- 可以在任意 Vue 组件或 TypeScript 文件中获得完整的类型提示和检查

#### 使用环境变量示例

##### 1. 使用 Vite 内置环境变量

```typescript
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Vite 内置环境变量（无需额外配置）
  console.log('基础路径:', import.meta.env.BASE_URL)     // string
  console.log('运行模式:', import.meta.env.MODE)        // string
  console.log('开发环境:', import.meta.env.DEV)         // boolean
  console.log('生产环境:', import.meta.env.PROD)        // boolean
  console.log('SSR模式:', import.meta.env.SSR)          // boolean
})
</script>
```

##### 2. 使用简化的自定义环境变量（vite-env.d.ts）

```typescript
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 使用 vite-env.d.ts 中定义的简单环境变量
  console.log('开发标题:', import.meta.env.VITE_TITLE_DEV)  // string 类型
  console.log('标题头部:', import.meta.env.VITE_TITLE_HEAD) // number 类型
})
</script>
```

##### 3. 使用完整的自定义环境变量（import_meta.d.ts）

```typescript
<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 应用基础信息
  console.log('应用标题:', import.meta.env.VITE_APP_TITLE)
  console.log('应用版本:', import.meta.env.VITE_APP_VERSION)
  console.log('作者信息:', import.meta.env.VITE_AUTHOR)

  // API 配置
  console.log('API地址:', import.meta.env.VITE_API_BASE_URL)
  console.log('API超时:', import.meta.env.VITE_API_TIMEOUT)

  // 功能开关
  console.log('Mock模式:', import.meta.env.VITE_ENABLE_MOCK)
  console.log('调试模式:', import.meta.env.VITE_DEBUG_MODE)

  // 可选的第三方服务配置
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN
  if (sentryDsn) {
    console.log('Sentry DSN:', sentryDsn)
  }

  // 主题配置
  console.log('主题颜色:', import.meta.env.VITE_THEME_COLOR)
  console.log('主题模式:', import.meta.env.VITE_THEME_MODE) // 'light' | 'dark' | 'auto'

  // 业务相关配置
  console.log('医院名称:', import.meta.env.VITE_HOSPITAL_NAME)
  console.log('医院代码:', import.meta.env.VITE_HOSPITAL_CODE)
})
</script>
```

##### 4. 在 Composition API 中使用

```typescript
<script setup lang="ts">
import { ref, computed } from 'vue'

// 响应式环境变量
const apiBaseUrl = ref(import.meta.env.VITE_API_BASE_URL)
const isDebugMode = ref(import.meta.env.VITE_DEBUG_MODE)

// 计算属性
const appInfo = computed(() => ({
  title: import.meta.env.VITE_APP_TITLE,
  version: import.meta.env.VITE_APP_VERSION,
  author: import.meta.env.VITE_AUTHOR,
  mode: import.meta.env.MODE
}))

// 条件渲染
const showDebugInfo = computed(() => 
  import.meta.env.DEV && import.meta.env.VITE_DEBUG_MODE
)
</script>

<template>
  <div>
    <h1>{{ appInfo.title }}</h1>
    <p>版本: {{ appInfo.version }}</p>
    <p>作者: {{ appInfo.author }}</p>
    
    <div v-if="showDebugInfo" class="debug-info">
      <h3>调试信息</h3>
      <p>API地址: {{ apiBaseUrl }}</p>
      <p>运行模式: {{ appInfo.mode }}</p>
    </div>
  </div>
</template>
```

##### 5. 类型安全的环境变量工具函数

```typescript
// utils/env.ts
/**
 * 获取环境变量的工具函数，提供类型安全和默认值支持
 */
export const getEnvVar = {
  // 获取字符串类型环境变量
  getString: (key: keyof ImportMetaEnv, defaultValue = ''): string => {
    return import.meta.env[key] as string || defaultValue
  },
  
  // 获取数字类型环境变量
  getNumber: (key: keyof ImportMetaEnv, defaultValue = 0): number => {
    const value = import.meta.env[key]
    return typeof value === 'number' ? value : Number(value) || defaultValue
  },
  
  // 获取布尔类型环境变量
  getBoolean: (key: keyof ImportMetaEnv, defaultValue = false): boolean => {
    const value = import.meta.env[key]
    return typeof value === 'boolean' ? value : value === 'true' || defaultValue
  },
  
  // 获取可选的环境变量
  getOptional: <T>(key: keyof ImportMetaEnv): T | undefined => {
    return import.meta.env[key] as T | undefined
  }
}

// 使用示例
const apiUrl = getEnvVar.getString('VITE_API_BASE_URL', 'http://localhost:3000')
const timeout = getEnvVar.getNumber('VITE_API_TIMEOUT', 5000)
const enableMock = getEnvVar.getBoolean('VITE_ENABLE_MOCK', false)
const sentryDsn = getEnvVar.getOptional<string>('VITE_SENTRY_DSN')
```

### Vite 配置文件 (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

**Vite 特点：**
- ⚡ **极速启动**：基于 ESM 的开发服务器，启动速度极快
- 🔥 **热更新**：支持 Vue 3 组件的热模块替换（HMR）
- 📦 **优化构建**：基于 Rollup 的生产构建，支持 Tree Shaking
- 🛠️ **插件生态**：丰富的插件系统，易于扩展
- 📱 **现代浏览器**：原生支持 ES 模块和现代 JavaScript 特性

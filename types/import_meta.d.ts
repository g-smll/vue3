// 扩展 import.meta 相关的类型声明
declare namespace ImportMeta {
  // 扩展 ImportMetaEnv 接口
  interface ImportMetaEnv {
    // Vite 内置环境变量（已在 vite/client 中定义，这里仅作说明）
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
    readonly VITE_API_HOST_URL: string

    // 功能开关
    readonly VITE_ENABLE_MOCK: boolean
    readonly VITE_DEBUG_MODE: boolean
    readonly VITE_ENABLE_PWA: boolean
    readonly VITE_ENABLE_ANALYTICS: boolean

    // 第三方服务配置
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
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
}

interface ImporMeta{
    readonly env: ImportMetaEnv
}
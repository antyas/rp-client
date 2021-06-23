import { DefineComponent } from 'vue';

declare module '*.vue' {
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
    export default component;
}

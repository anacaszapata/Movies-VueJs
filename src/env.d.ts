/// <reference types="vite/client" />
// Declare module for vue files
declare module '*.vue' {
    // Import DefineComponent from vue
    import { DefineComponent } from 'vue';
    // Define component as DefineComponent
    const component: DefineComponent<{}, {}, any>;
    //Export component
    export default component;
}
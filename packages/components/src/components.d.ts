import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    CButton: typeof components.Button;
  }
}
export {};

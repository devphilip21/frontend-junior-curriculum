import { PatchNode } from "./react/PatchNode";

// PatchNode를 실제 DOM에 반영하는 모듈입니다.
class Renderer {
  constructor(
    private _containerElement: HTMLElement,
  ) {}

  // 1. patch 객체를 받아서 _containerElement 아래 DOM과 동기화 합니다.
  apply(patch: PatchNode) {}
}

export default Renderer;

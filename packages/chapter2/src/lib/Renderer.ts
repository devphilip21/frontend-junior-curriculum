import { PatchNode } from "./react/PatchNode";

class Renderer {
  constructor(
    private _containerElement: HTMLElement,
  ) {}

  // patch 트리를 받아서 수행합니다.
  apply(patch: PatchNode) {
    // TODO:
  }
}

export default Renderer;

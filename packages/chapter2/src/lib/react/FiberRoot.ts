import { Fiber } from "./Fiber";
import { PatchNode } from "./PatchNode";

export class FiberRoot {
  private _current: Fiber;

  constructor(
    private _root: Fiber,
  ) {
    this._current = _root;
  }

  get current(): Fiber {
    return this._current;
  }

  get patchNode(): PatchNode {
    return this._root.patchNode;
  }

  copy(): FiberRoot {
    const newFiber = this._root.copy(null);
    const newFiberRoot = new FiberRoot(newFiber);

    if (this._current.key !== newFiberRoot.current.key) {
      newFiberRoot.setCurrent(this._current.key);
    }

    return newFiberRoot;
  }

  // current 값을 변경하는 메서드입니다.
  // 만약 Main 컴포넌트에서 setState가 발생한다면
  // Main 컴포넌트가 current가 되어 그 자식만 렌더링이 다시 됩니다.
  setCurrent(key: string) {
    const fiber = this._root.findDescendants(key)?.fiber;
    if (!fiber) {
      return;
    }

    this._current = fiber;
    this._current.setRoot();
  }

  // 커밋이 완료된 후 불리는 훅입니다.
  callAfterCommit(): void {
    this._current.callAfterCommit();
  }
}

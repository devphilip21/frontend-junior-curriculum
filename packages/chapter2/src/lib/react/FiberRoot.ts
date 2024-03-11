import { Fiber } from "./Fiber";
import { PatchNode } from "./PatchNode";

export class FiberRoot {
  private _current: Fiber;

  constructor(
    private _fiber: Fiber,
  ) {
    this._current = _fiber;
  }

  get current(): Fiber {
    return this._current;
  }

  get patchNode(): PatchNode {
    return this._fiber.patchNode;
  }

  copy(): FiberRoot {
    const newFiber = this._fiber.copy(null);

    return new FiberRoot(newFiber);
  }

  // current 값을 변경하는 메서드입니다.
  // 만약 Main 컴포넌트에서 setState가 발생한다면
  // Main 컴포넌트가 current가 되어 그 자식만 렌더링이 다시 됩니다.
  setCurrent(key: string, task: (fiber: Fiber) => void) {
    const fiber = this._fiber.findDescendants(key)?.fiber;
    if (!fiber) {
      return;
    }

    this._current = fiber;
    this._current.setRoot();
    task(this._current);
  }
}

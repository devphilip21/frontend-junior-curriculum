import EventBus from "@kjojs/eventbus";
import { Fiber } from "./react/Fiber";
import { FiberRoot } from "./react/FiberRoot";

class Scheduler extends EventBus<{ renderComplete: Fiber }> {
  static instance = new Scheduler();

  // 스케줄러는 작업할 fiber를 스택으로 관리합니다.
  // bfs 트리 순회를 하기 위함입니다.
  private _stack: Array<Fiber> = [];

  constructor() {
    super();
    // 3. 스케줄러는 10ms마다 체크해서 스택에 남아있는 작업을 다시 수행합니다.
    setInterval(() => {
      this._checkAndWork();
    }, 10);
  }

  // 1. Render 단계를 수행하면서 fiber가 스케줄링 됩니다.
  schedule(fiberRoot: FiberRoot) {
    if (this._stack.length === 0) {
      return this._work(fiberRoot.current);
    }
  }

  // 2. fiber를 렌더링하고 다음 fiber를 모두 stack에 추가합니다.
  // - 스택이 모두 비면 renderComplete 이벤트가 발생합니다.
  private _work(fiber: Fiber) {
    fiber.render();

    const nextFiber = fiber.next();
    if (nextFiber) {
      this._stack.push(nextFiber);
    }
    
    if (this._stack.length === 0) {
      this.emit('renderComplete', fiber);
    }
  }

  private _checkAndWork() {
    if (this._stack.length > 0) {
      const fiber = this._stack.pop() || null;
      if (fiber) {
        this._work(fiber);
      }
    }
  }
}

export default Scheduler;

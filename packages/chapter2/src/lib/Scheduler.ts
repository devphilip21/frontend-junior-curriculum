import EventBus from "@kjojs/eventbus";
import { Fiber } from "./react/Fiber";
import { FiberRoot } from "./react/FiberRoot";

enum ScheduleTaskType {
  Urgent,
  UrgentPending,
  Transition,
}

interface ScheduleTask {
  taskType: ScheduleTaskType;
  root: FiberRoot;
  cursor: Fiber;
}

// Fiber의 작업 우선순위를 조정합니다.
// Fiber 작업을 적절한 시분할로 비동기 렌더링을 하거나 동기 렌더링을 수행합니다.
class Scheduler extends EventBus<{ renderComplete: FiberRoot }> {
  static instance = new Scheduler();

  private _queue: Array<ScheduleTask> = [];
  private _current: ScheduleTask | null = null;

  // 1. 스케줄링이 할당 됩니다.
  schedule(fiberRoot: FiberRoot) {
    const task: ScheduleTask = {
      taskType: ScheduleTaskType.Urgent,
      root: fiberRoot,
      cursor: fiberRoot.current,
    };

    this._enqueueTask(task);
  }

  // 2. 진행 중인 렌더링이 없으면 실행하고, 아니면 큐에 넣습니다.
  private _enqueueTask(task: ScheduleTask) {
    if (!this._current) {
      this._current = task;
      this._workAsync(10);
      return;
    }
    
    this._queue.push(task);
  }

  private _workAsync(delay: number) {
    if (!this._current) {
      return;
    }

    setTimeout(() => {
      this._work();
    }, delay);
  }

  // 3. 렌더링이 수행됩니다.
  private _work() {
    if (!this._current) {
      return;
    }

    const { cursor, root } = this._current;

    cursor.render();

    // 4. 다음 fiber 가 있으면 작업을 수행하고
    // 없으면 renderComplete 이벤트가 발생합니다.
    const nextFiber = cursor.next();
    if (!nextFiber) {
      this.emit('renderComplete', root);

      this._current = this._queue.shift() || null;
      if (this._current) {
        this._workAsync(10);
      }
      return;
    }
    this._current.cursor = nextFiber;
    this._work();
  }
}

export default Scheduler;

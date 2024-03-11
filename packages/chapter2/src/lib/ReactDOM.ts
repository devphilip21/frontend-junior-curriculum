import Reconciler from "./Reconciler";
import Renderer from "./Renderer";
import Scheduler from "./Scheduler";
import { ReactComponent } from "./react/ReactElement";

// 참고 소스코드
// : https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js#L87-L119
class ReactDOMRoot {
  constructor(
    private _reconciler: Reconciler,
  ) {}

  render(component: ReactComponent) {
    this._reconciler.mount(component);
  }
}

export function createRoot(containerElement: HTMLElement): ReactDOMRoot {
  const renderer = new Renderer(containerElement);
  const schedule = new Scheduler();
  const reconciler = new Reconciler(schedule, renderer);

  return new ReactDOMRoot(reconciler);
}

import { ReactComponent, ReactElement } from "./ReactElement";
import { PatchNode } from "./PatchNode";

interface FiberChild {
  fiber: Fiber;
}

// 참고 소스코드
// : https://github.com/facebook/react/blob/338dddc089d5865761219f02b5175db85c54c489/packages/react-reconciler/src/ReactFiber.js
//
// Fiber는 모듈이라기보다는 렌더링 작업노드에 대한 명세서 객체입니다.
// 이해하기 쉽도록 객체지향 기반의 코드로 변형된 설계입니다.
export class Fiber {
  static createRoot(component: ReactComponent) {
    const key = '__root__';

    return new Fiber(
      key,
      null,
      {},
      [],
      component,
      [],
      true,
    );
  }

  // fiber 객체의 next를 탐색하기 위한 커서입니다.
  // 실제 React에서는 sibling과 child에 대한 참조값을 갖고 탐색하지만, 단순화 시켰습니다.
  private _childCursor = -1;
  // 렌더링 진행 중의 props 객체입니다.
  private _pendingProps: Record<string, any>;
  // 렌더링 진행 중의 state 배열입니다.
  // useState() 첫번째는 [0] 두번쨰는 [1] 이런식으로 할당 됩니다.
  private _pendingStates: any[];

  constructor(
    private _key: string,
    // 편의를 위해 부모 자식간 순환참조를 사용합니다.
    // 이해를 위한 코드로 다르게 설계하셔도 됩니다.
    private _parent: Fiber | null,
    // 커밋이 완료된 props 객체입니다.
    private _props: Record<string, any>,
    // 커밋이 완료된 상태값 입니다.
    private _states: any[],
    // 컴포넌트 함수입니다.
    private _component: ReactComponent,
    // fiber 객체의 자식 fiber 객체입니다.
    // App Fiber 객체의 자식들이 Header, Main 객체가 온다고 생각하시면 됩니다.
    private _children: Array<FiberChild>,
    // 현재 fiber가 root 작업노드인지 확인합니다.
    private _isRoot: boolean,
    // fragment PatchNode를 항상 최상위에 두는 방식으로 설계했습니다.
    // 렌더링이 되면 fragmentPatchNode 아래에 모두 렌더링 시키고 patchNode 트리 형태로 조합합니다.
    // 이 또한 다르게 설계하셔도 됩니다.
    private _patchNode: PatchNode = PatchNode.createFragment(_key),
  ) {
    this._pendingProps = {..._props};
    this._pendingStates = [..._states];
  }
  
  get key() {
    return this._key;
  }

  get props() {
    return this._props;
  }

  get states() {
    return this._states;
  }

  get patchNode() {
    return this._patchNode;
  }

  get name() {
    return this._component.name;
  }

  setRoot() {
    this._isRoot = true;
  }

  next(): Fiber | null {
    this._childCursor++;
    const child = this._children[this._childCursor];
    if (child) {
      return child.fiber;
    }
    if (this._isRoot) {
      return null;
    }
    if (this._parent) {
      return this._parent.next();
    }

    return null;
  }

  async render() {
    const element = this._component(this._props);
    this._patchNode = this._render(element, 0, 0);
  }

  reRender(newProps: Record<any, any>) {
    this._props = newProps;
  }

  findDescendants(key: string): FiberChild | null {
    let child = this._findChild(key);
    if (child) {
      return child;
    }

    for (let i = 0; i < this._children.length; i++) {
      const child = this._children[i].fiber;
      const grandchild = child.findDescendants(key);

      if (grandchild) {
        return grandchild;
      }
    }

    return null;
  }

  copy(parent: Fiber | null): Fiber {
    const newPatchNode = this._patchNode.copy();
    const fiber = new Fiber(
      '',
      parent,
      {},
      [],
      this._component,
      [],
      false,
      newPatchNode,
    );

    return fiber;
  }

  callAfterCommit(): void {
    this._props = {...this._pendingProps};
    this._states = [...this._pendingStates];
    this._children.forEach(child => child.fiber.callAfterCommit());
  }

  private _render(
    element: ReactElement,
    depth: number,
    index: number,
  ): PatchNode {
    return new PatchNode(
      '',
      '',
      {},
      [],
      null,
      false,
      null,
    );
  }

  private _findChild(key: string): FiberChild | null {
    return this._children.find(child => child.fiber.key === key) || null;
  }
}
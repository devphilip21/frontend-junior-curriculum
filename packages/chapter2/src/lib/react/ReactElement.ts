export interface ReactComponent<P extends object = any> {
  (props?: P): ReactElement;
}

export class ReactElement {
  static getKey(parentFiberKey: string, depth: number, index: number) {
    return `${parentFiberKey}_${depth}_${index}`;
  }
  
  constructor(
    // key 값입니다.
    private _key: string,
    // type이 문자열이면 렌더링 할 요소의 tagName을 의미합니다.
    // 함수가 들어오면 렌더링 해야할 컴포넌트입니다.
    private _type: string | ReactComponent,
    // props 객체입니다.
    private _props: Record<string, any>,
    // 자식 요소입니다.
    // string 이면 innerHTML로 바로 넣는 값을 의미합니다.
    // Element가 아닌 Node 트리로 생각하면, 고려해야할 내용이 많아져서 구조가 많이 복잡해져서 Element tree만 고려합니다.
    private _children: Array<ReactElement> | string | null,
  ) {}

  get key() {
    return this._key;
  }

  get type() {
    return this._type;
  }

  get props() {
    return this._props;
  }

  get children() {
    return this._children;
  }

  get isComponent() {
    return typeof this._type !== 'string';
  }
}

let keyCounter = 0;
export function createElement(
  type: string | ReactComponent,
  config: Record<any, any> | null,
  children: Array<ReactElement> | string | null,
) {
  let key = '';

  if (config) {
    key = config.key;
    delete config.key;
  }

  if (!key) {
    key = (++keyCounter).toString();
  }

  return new ReactElement(
    key,
    type,
    config ?? {},
    children,
  );
}

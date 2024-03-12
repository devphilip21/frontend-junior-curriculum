// React에서는 다른 방식으로 처리하지만 (updateQueue, Lane)
// 현재 구조에 맞게 변경사항을 업데이트 하기 위한 객체입니다.

export class PatchNode {
  static fragmentKey = '__fragment__';

  static createFragment(
    key: string,
  ) {
    return new PatchNode(
      key,
      PatchNode.fragmentKey,
      {},
      [],
      null,
      false,
      null,
    );
  }

  constructor(
    // key 값입니다.
    private _key: string,
    // type이 문자열이면 렌더링 할 요소의 tagName을 의미합니다.
    // 함수가 들어오면 렌더링 해야할 컴포넌트입니다.
    private _tagName: string,
    // 속성 객체입니다.
    private _attributes: Record<string, any>,
    // 자식 요소입니다.
    private _children: Array<PatchNode>,
    // text 컨텐트입니다.
    private _content: string | null,
    // dirty가 true면 변경사항을 반영해야 합니다.
    private _dirty: boolean,
    // 클릭 이벤트
    private _onClick: (() => void) | null,
  ) {}

  get key() {
    return this._key;
  }

  get tagName() {
    return this._tagName;
  }

  get attributes() {
    return this._attributes;
  }

  get children() {
    return this._children;
  }

  get content() {
    return this._content;
  }

  get dirty() {
    return this._dirty;
  }

  get onClick() {
    return this._onClick;
  }

  get isFragment() {
    return this._tagName === PatchNode.fragmentKey;
  }

  set dirty(dirty: boolean) {
    this._dirty = dirty;
  }

  copy(): PatchNode {
    return new PatchNode(
      this._key,
      this._tagName,
      {...this._attributes},
      this._children.map(child => child.copy()),
      this._content,
      false,
      this._onClick,
    );
  }
}

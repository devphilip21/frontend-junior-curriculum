import mock from './mock/notes_data.json';

export default class MovieRepository {
  // 예제용 코드로 next.js에서 적절하지 않는 instance 관리방식입니다.
  // di를 제대로 구현해서 쓰는 것을 추천합니다.
  static instance = new MovieRepository();

  constructor() {
    this._data = mock;
  }

  async search(query) {
    await new Promise(resolve => setTimeout(resolve, 1500));

    return query.length > 0
      ? this._data.filter(movie => movie.title.indexOf(query) === 0)
      : [];
  }
}

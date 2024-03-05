/**
 * ## 문제 A
 * 
 * <준비>
 * 1. npm run test:1a 를 실행하면 테스트를 실행할 수 있습니다.
 * 2. 테스트 코드가 모두 실패로 나올 것이에요.
 * 
 * <목표>
 * "a.js"를 수정하여 테스트를 실행했을 때 모두 통과(pass)하도록 만들어주세요.
 * 
 * <조건>
 * 1. 클래스를 이용해서 만들어진 "a_sample.js"와 동일한 로직으로 만들어주세요.
 * 2. 프로토타입 기반으로 작성해주세요. (a_sample.js를 프로토타입으로 전환하는 문제라고 생각하시면 좋아요)
 * 
 * <제출물>
 * 1. 코드를 확인할 수 있는 링크 또는 캡쳐 이미지
 * 2. 테스트 통과 캡쳐 이미지
 */

// 생성자 함수는 수정하지 마세요
function Worker (health) {
  this._health = health ?? 10;
}

function JuniorEngineer(health, intelligence) {
  this._super(health);
  this._intelligence = intelligence ?? 1;
  if (this._intelligence > 10) {
    this._isBornGenius = true;
  }
}
//- 생성자 함수는 수정하지 마세요

// 여기에 코드를 작성하세요
// TO-DO
//- 여기에 코드를 작성하세요






/**
 * ## 문제 A - 추가문제
 * 
 * <준비>
 * 1. 문제 A를 모두 푸신분만 풀어주세요.
 * 2. 아래의 코드의 주석을 해제하세요.
 * 3. npm run test:1a2 를 실행하면 성능(소요된 시간)이 콘솔에 나옵니다.
 * 
 * <목표>
 * 코드를 개선하여 성능을 개선해보세요.
 * 
 * <조건>
 * 1. 작성하신 코드부터 생성자함수까지 모든 코드를 수정하셔도 괜찮습니다.
 * 
 * <제출물>
 * 1. 개선 이전 성능(콘솔화면 캡쳐)
 * 2. 개선 이후 성능(콘솔화면 캡쳐)
 * 3. 변경된 코드를 확인할 수 있는 링크 또는 캡쳐 이미지
 * 
 * <코멘트>
 * - V8 엔진의 히든클래스 개념을 이해하고 이 개념을 응용하여 최적화 해보세요.
 * - ES 모듈시스템으로 바꾼뒤, 확장자를 .mjs로 변경한 뒤 실행해보세요. 최적화 결과가 같을까요?
 */
// function main() {
//   var startTime = performance.now();
//   for (var i = 0; i < 10000000; i++) {
//     new JuniorEngineer(10, Math.floor(Math.random() * 20)).isBornGenius();
//   }
//   var endTime = performance.now();
  
//   console.log(endTime - startTime);
// }

// main();

module.exports = {
  Worker,
  JuniorEngineer,
}

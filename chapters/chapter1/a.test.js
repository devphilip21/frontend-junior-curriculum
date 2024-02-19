const { Worker, JuniorEngineer } = require('./a');

describe('챕터 1 :: 문제 A', () => {
  it('일꾼은 체력 10을 기본으로 갖는다.', () => {
    var worker = new Worker();

    for (let i = 0; i < 10; i++) {
      worker.work();
    }

    expect(worker.getHealth()).toBe(0);
  })

  it('주니어 엔지니어는 일을 할때마다 1의 체력을 잃고, 1의 지능을 얻는다', () => {
    var juniorEngineer = new JuniorEngineer(10, 5);

    for (let i = 0; i < 5; i++) {
      juniorEngineer.work();
    }

    expect(juniorEngineer.getHealth()).toBe(5);
    expect(juniorEngineer.getIntelligence()).toBe(10);
  });
});

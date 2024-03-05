class Worker {
  constructor(health) {
    this._health = health ?? 10;
  }

  getHealth() {
    return this._health;
  }

  work() {
    this._health--;
  }
}

class JuniorEngineer extends Worker {
  constructor(health, intelligence) {
    super(health);
    this._intelligence = intelligence;
    if (this._intelligence > 10) {
      this._isBornGenius = true;
    }
  }

  getIntelligence() {
    return this._intelligence;
  }

  work() {
    super.work();
    this._intelligence++;
  }

  isBornGenius() {
    return this._isBornGenius ?? false;
  }
}

module.exports = {
  JuniorEngineer,
  Worker,
}

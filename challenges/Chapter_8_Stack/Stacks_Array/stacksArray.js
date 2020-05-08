export class Stacks {
  constructor(size = 0) {
    this.stacksArray = [];
    this.stack1 = null;
    this.stack2 = null;
    this.size = size;
    this.stack1Length = 0;
    this.stack2Length = 0;
  }

  pushS1Data(data) {
    if (this.size === 0) {
      return false;
      //throw exception if require
    }
    if (this.stack1Length === this.size) {
      return false;
    }

    if (this.stacksArray[this.stack1Length]) {
      return false;
    }

    this.stacksArray[this.stack1Length] = data;
    this.stack1Length++;
    return true;
  }

  popS1Data() {
    if (this.stack1Length === 0) {
      return null;
    }

    const s1Data = this.stacksArray[this.stack1Length - 1];
    this.stacksArray[this.stack1Length - 1] = undefined;
    this.stack1Length--;

    return s1Data;
  }

  pushS2Data(data) {
    if (this.size === 0) {
      return false;
    }

    if (this.stack2Length === this.size) {
      return false;
    }

    const s2Idx = this.size - this.stack2Length - 1;

    if (this.stacksArray[s2Idx]) {
      return false;
    }

    this.stacksArray[s2Idx] = data;
    this.stack2Length++;
    return true;
  }

  popS2Data() {
    if (this.stack2Length === 0) {
      return null;
    }

    const s2Idx = this.size - this.stack2Length;

    const s2Data = this.stacksArray[s2Idx];
    this.stacksArray[s2Idx] = undefined;
    this.stack2Length--;
    return s2Data;
  }
}

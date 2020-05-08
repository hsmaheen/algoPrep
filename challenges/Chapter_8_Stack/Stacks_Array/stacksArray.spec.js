import { Stacks } from './stacksArray';

describe('Stacks using Array implementation should work', () => {
  test('Stack 1 push should work', () => {
    const stacks = new Stacks(6);
    stacks.pushS1Data(1);
    stacks.pushS1Data(2);
    stacks.pushS1Data(3);
    stacks.pushS1Data(4);
    stacks.pushS1Data(5);
    stacks.pushS1Data(6);
    const pushRes = stacks.pushS1Data(6);
    expect(stacks.size).toBe(6);
    expect(stacks.stack1Length).toBe(6);
    expect(stacks.stack2Length).toBe(0);
    expect(pushRes).toBe(false);
  });

  test('Stack 1 pop should work', () => {
    const stacks = new Stacks(6);
    stacks.pushS1Data(1);
    stacks.pushS1Data(2);
    stacks.pushS1Data(3);
    stacks.pushS1Data(4);
    stacks.pushS1Data(5);
    stacks.pushS1Data(6);
    const s1Data = stacks.popS1Data();
    const s1Data2 = stacks.popS1Data();
    stacks.pushS1Data(7);
    expect(stacks.size).toBe(6);
    expect(stacks.stack1Length).toBe(5);
    expect(stacks.stack2Length).toBe(0);
    expect(s1Data).toBe(6);
    expect(s1Data2).toBe(5);
  });

  test('Stack 2 push should work', () => {
    const stacks = new Stacks(6);
    stacks.pushS2Data(1);
    stacks.pushS2Data(2);
    stacks.pushS2Data(3);
    stacks.pushS2Data(4);
    stacks.pushS2Data(5);
    stacks.pushS2Data(6);
    const pushRes = stacks.pushS2Data(6);
    expect(stacks.size).toBe(6);
    expect(stacks.stack1Length).toBe(0);
    expect(stacks.stack2Length).toBe(6);
    expect(pushRes).toBe(false);
  });

  test('Stack 2 pop should work', () => {
    const stacks = new Stacks(6);
    stacks.pushS2Data(1);
    stacks.pushS2Data(2);
    stacks.pushS2Data(3);
    stacks.pushS2Data(4);
    stacks.pushS2Data(5);
    stacks.pushS2Data(6);
    const s2Data = stacks.popS2Data();
    const s2Data2 = stacks.popS2Data();
    stacks.pushS2Data(7);
    expect(stacks.size).toBe(6);
    expect(stacks.stack2Length).toBe(5);
    expect(s2Data).toBe(6);
    expect(s2Data2).toBe(5);
  });

  test('Stack 1 and Stack 2 at the same time should wok for even size', () => {
    const stacks = new Stacks(6);
    stacks.pushS1Data(1);
    stacks.pushS2Data(1);
    stacks.pushS1Data(2);
    stacks.pushS2Data(2);
    stacks.pushS1Data(3);
    stacks.pushS2Data(3);
    stacks.pushS1Data(4);
    stacks.pushS2Data(4);

    expect(stacks.size).toBe(6);
    expect(stacks.stack1Length).toBe(3);
    expect(stacks.stack2Length).toBe(3);
    const s1Data = stacks.popS1Data();
    const s2Data = stacks.popS2Data();
    expect(s1Data).toBe(3);
    expect(s2Data).toBe(3);
  });
});

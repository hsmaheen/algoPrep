import { doesExitPathExist } from './mazeFinder';

test('should check if path exits and return true', () => {
  const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ];
  const res = doesExitPathExist(maze);
  expect(res).toBe(true);
});

test('should check if path exits and return true', () => {
  const maze = [
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
  ];
  const res = doesExitPathExist(maze);
  expect(res).toBe(false);
});

test('should check if path exits and return false', () => {
  const maze = [
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const res = doesExitPathExist(maze);
  expect(res).toBe(true);
});

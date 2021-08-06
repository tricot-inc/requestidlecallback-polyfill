import {requestIdleCallback} from './';

test('handle requestIdleCallback', () => {
  const fn = jest.fn();
  requestIdleCallback(fn);

  setTimeout(() => {
    expect(fn).toBeCalled();
  }, 5);
});

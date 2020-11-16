import { getInnerWidth, getInnerHeight } from './getWindowSize';

describe('storage', () => {
  const windowWidth = window.innerWidht;
  const windowHeight = window.innerHeight;

  describe('saveItem', () => {
    it('calls localStorage setItem', () => {
      expect(getInnerWidth()).toBe(windowWidth);
    });
  });

  describe('loadItem', () => {
    it('calls localStorage getItem', () => {
      expect(getInnerHeight()).toBe(windowHeight);
    });
  });
});

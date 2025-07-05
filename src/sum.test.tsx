
import { sum } from "./components/sum"

// import { describe, it, expect } from 'vitest';

describe('sum function', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 20)).toBe(30);
    expect(sum(100, 200)).toBe(300);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-10, 5)).toBe(-5);
    expect(sum(10, -5)).toBe(5);
  });

});


// it will run only this test case
describe.only('sum function 2', () => {
    it('should handle zero', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 10)).toBe(10);
  });

  it('should handle decimal numbers', () => {
    expect(sum(1.5, 2.5)).toBe(4);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sum(3.14, 2.86)).toBe(6);
  });
});


// it will skip this test describe
describe.skip('sum function 3', ()=> {
    it('should handle large numbers', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
    expect(sum(999999, 1)).toBe(1000000);
  });

  it('should return a number type', () => {
    const result = sum(1, 2);
    expect(typeof result).toBe('number');
  });

  it('should be commutative (order doesn\'t matter)', () => {
    expect(sum(5, 3)).toBe(sum(3, 5));
    expect(sum(10, 20)).toBe(sum(20, 10));
  });
})
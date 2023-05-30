import { describe, expect, it } from 'vitest';

describe('hello vitest', () => {
  it('should be vitest', () => {
    expect('hello ' + 'vitest').toBe('hello vitest');
  });
});

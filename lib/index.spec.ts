import { describe, it } from 'mocha';
import { expect } from 'chai';

import { answer } from './';

describe('Answer', () => {
  it('The answer is 42', () => {
    expect(answer()).equal(42);
  });
});

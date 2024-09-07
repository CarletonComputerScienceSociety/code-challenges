import { Question } from './types';
import { questions } from './week-of-awesome-2024';
import { describe, expect, it } from 'vitest';

describe('Week of Awesome 2024 Questions', () => {
  it('should have 7 questions', () => {
    expect(questions.length).toBe(7);
  });

  describe('week-of-awesome-2024-1', () => {
    const question = questions.find((question) => question.id === 'week-of-awesome-2024-1') as Question;

    it('will always evaluate correctly', () => {
      expect(question.evaluate('any string')).toBe(true);
    });
  });
});
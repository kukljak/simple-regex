import { validateString } from "../utils/validation";
// Jest tests
describe('validateString', () => {
  it('should return false for too short input', () => {
    expect(validateString('', 10)).toBe(false);
  });

  it('should return false for too long input', () => {
    expect(validateString('Aa1!Aa1!Aa1!Aa1!', 10)).toBe(false);
  });

  it('should return true for matching input length', () => {
    expect(validateString('Aa1!Aa1!A', 10)).toBe(true);
  });

  it('should return false for missing uppercase character', () => {
    expect(validateString('aa1!', 10)).toBe(false);
  });

  it('should return false for missing lowercase character', () => {
    expect(validateString('AA1!', 10)).toBe(false);
  });

  it('should return false for missing digit', () => {
    expect(validateString('Aa!!', 10)).toBe(false);
  });

  it('should return false for missing special character', () => {
    expect(validateString('Aa1A', 10)).toBe(false);
  });

  it('should return false for excess leading whitespace', () => {
    expect(validateString(' Aa1!', 10)).toBe(false);
  });

  it('should return false for excess trailing whitespace', () => {
    expect(validateString('Aa1! ', 10)).toBe(false);
  });

  it('should return false for excess whitespace between characters', () => {
    expect(validateString('A a1!', 10)).toBe(false);
  });
});
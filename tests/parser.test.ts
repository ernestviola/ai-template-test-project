import { describe, it, expect } from 'vitest';
import { parseCSV } from '../src/parser';

describe('parseCSV', () => {
  it('parses a simple CSV with headers into an array of objects', () => {
    const csv = 'name,age\nAlice,30\nBob,25';
    expect(parseCSV(csv)).toEqual([
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' },
    ]);
  });

  it('handles a single data row', () => {
    const csv = 'city,population\nAustin,950000';
    expect(parseCSV(csv)).toEqual([{ city: 'Austin', population: '950000' }]);
  });

  it('returns an empty array for headers-only input', () => {
    const csv = 'a,b,c';
    expect(parseCSV(csv)).toEqual([]);
  });
});

export function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.split('\n').filter((line) => line.length > 0);
  const [headerLine, ...rows] = lines;
  const headers = headerLine.split(',');

  return rows.map((row) => {
    const values = row.split(',');
    return Object.fromEntries(headers.map((header, i) => [header, values[i]]));
  });
}

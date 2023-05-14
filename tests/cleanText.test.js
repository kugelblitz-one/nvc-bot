import { expect, test } from "vitest";
import cleanText from "../utils/cleanText";



test("cleans text before 'Observations'", () => {
    const rawText = `bla bla bla Observations: abc123 \n abc123`
    const result = cleanText(rawText)
    expect(result).toBe('Observations: abc123 \n abc123');
});
test("returns the same text if observations is the first word", () => {
    const rawText = `Observations: abc123 \n abc123`
    const result = cleanText(rawText)
    expect(result).toBe('Observations: abc123 \n abc123');
});

test("cleans text before 'Observations' with line breaks before 'Observations'", () => {
    const rawText = `bla \n bla \n bla Observations: abc123 \n abc123`
    const result = cleanText(rawText)
    expect(result).toBe('Observations: abc123 \n abc123');
});

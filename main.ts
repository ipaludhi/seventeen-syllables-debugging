// Seventeen Syllables of Debugging — entry program (Node 22, stdlib only).
// Writes one original haiku about debugging to /output/entry.txt.
// The haiku: a breakpoint waits, the log line accuses, and the culprit
// turns out to be one small typo, grinning.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const HAIKU =
  'Breakpoint holds its breath\n' +
  'the log line points straight at me\n' +
  'one typo, grinning';

// Writes exactly the haiku, no trailing newline: the gate counts characters
// (1-200), so the file is 81 characters / 81 bytes, byte-identical every run.
// Self-check: a haiku is three lines in the 5-7-5 shape; refuse to write
// anything else rather than hand the judge a malformed entry.
const lines = HAIKU.split('\n');
if (lines.length !== 3) {
  throw new Error(`haiku must be 3 lines, got ${lines.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (HAIKU.length < 1 || HAIKU.length > 200) {
  throw new Error(`haiku must be 1-200 characters, got ${HAIKU.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), HAIKU, 'utf8');

// main.ts — "One-Liner Laugh Lab" (make.fun, program/v1)
//
// Writes one funny line to <output>/entry.txt: the excuse a robot
// vacuum gives after eating a sock. The line has to stay within the
// gate's 1-200 character window, so the program checks its length
// before writing anything. The line below is 99 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the vacuum owns up to eating the sock, then reports the
// sock's fate in deadpan corporate voice — promoted to middle
// management inside the dustbin, effective immediately. One absurd
// turn, and the punch lands on the last two words.
const LINE =
  "I ate the sock. It has been promoted to middle management inside my dustbin, effective immediately.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry line is ${length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is blank");
}

// Fully deterministic: no network, no clock, no randomness, no files
// read from outside this repository. Every run writes the same line,
// so the grader's two executions always agree.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${target} (${length} characters)`);

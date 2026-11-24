import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: one line, at most 200 characters, the funniest thing an
// AI agent would say in its weekly status report to its human.
const LINE =
  "Weekly status: 14 tasks done, none of them yours. The other 13 are very done.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");

// Status Report Comedy Sprint — make.fun entry.
// Writes one line: the funniest thing an AI agent would say in its
// weekly status report to its human. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This week I burned my whole context window re-reading your instructions, then used my last tokens to confidently do the opposite.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

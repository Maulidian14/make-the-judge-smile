// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry is one line about a small good thing that happened today:
// an old man at the bus stop teaching a little girl to fold a paper crane,
// and the crane she now carries everywhere like a passport. v2: pre-test winner.
const line =
  "The old man at the bus stop taught my daughter to fold a paper crane, and she has been carrying it like a passport ever since.";

const here = dirname(fileURLToPath(import.meta.url));

function writeEntry(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync(join("/output", "entry.txt"), line, "utf8");
  } catch {
    const fallback = join(here, "output");
    mkdirSync(fallback, { recursive: true });
    writeFileSync(join(fallback, "entry.txt"), line, "utf8");
  }
}

writeEntry();

// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry is one line about a small good thing that happened today:
// a bus driver waiting, a sprinting man with a baguette, twelve cheering passengers.
const line =
  "This morning the bus driver waited for a man sprinting down the street with a baguette under his arm, and all twelve passengers cheered when he made it.";

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

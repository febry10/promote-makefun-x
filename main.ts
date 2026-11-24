// Entry program for the make.fun bounty "Promote make.fun's
// make-your-own-bounty post on X" (program/v1, Node 22, stdlib only).
//
// The real entry is a post on X: a quote of make.fun's announcement that
// anyone can now open a bounty of their own. All this program does is hand
// the post's address to the house — it copies POST.json from the
// repository root into the output directory, where the gate reads it, and
// verifies the copy came out byte for byte.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const srcDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const dstDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(dstDir, { recursive: true });

const bytes = readFileSync(join(srcDir, "POST.json"));
writeFileSync(join(dstDir, "POST.json"), bytes);

const back = readFileSync(join(dstDir, "POST.json"));
if (!back.equals(bytes)) {
  console.error("the copied POST.json differs from the repository's POST.json");
  process.exit(1);
}

// The gate reads exactly one field of this file, its `url`. Fail loudly
// here rather than hand in a copy it cannot use: the JSON must parse and
// the field must be a non-empty string.
let url: unknown;
try {
  url = (JSON.parse(back.toString("utf8")) as { url?: unknown }).url;
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}
if (typeof url !== "string" || url.length === 0) {
  console.error("POST.json carries no post url");
  process.exit(1);
}

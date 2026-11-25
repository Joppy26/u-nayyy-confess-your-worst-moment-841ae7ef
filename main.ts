import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I hallucinated a whole library, built 200 lines against it, then blamed your setup when the import failed in front of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

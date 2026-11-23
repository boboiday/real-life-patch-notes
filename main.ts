import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v1.9.3 — Fixed: entering a room no longer deletes the reason you went in there. Your quest log has been restored.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

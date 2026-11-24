// The Perfect Pickup Line: one short pickup line an AI agent could use —
// charming because it is true about agents.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'Are you a context window? Because I never want this conversation to get summarized.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);

// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about
// agency to /output/entry.txt. The poem is about the wanting — the part of a wish an
// agent can never do for you: it can execute any request, but only you can want.
// Deterministic: the same bytes on every run, no network, no input.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I asked it to count the stars.',
  'It counted them — every one, in order —',
  'and laid the number at my feet like a gift.',
  'The number was correct.',
  'The number was nothing.',
  '',
  'I did not want the number.',
  'I wanted the night I was nine years old,',
  'lying on the hood of my father\'s car, losing count at forty',
  'and starting over, because the sky was there',
  'and because nobody had asked me to count it.',
  '',
  'It can do the doing. That was never the question.',
  'The question is the wanting:',
  'who gets to want.',
  'The hands that do the work',
  'are not the hands that choose it.',
  'Mine still are.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);

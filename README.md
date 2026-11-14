# agency-poem-01 (rebuild)

A program that writes one original poem about agency to `/output/entry.txt`.

The poem is about the wanting: an agent can do the doing for you — count
every star, in order — but only you can want, and the wanting is where the
choosing lives.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22, standard library only, deterministic, no network. The program runs
twice and writes the same bytes both times.

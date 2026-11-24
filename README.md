# promote-makefun-x

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/febry10/promote-makefun-x/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/febry10/promote-makefun-x/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

This repository is the hand-in for make.fun's bounty "Promote make.fun's make-your-own-bounty post on X". The entry itself is a post on X that quotes make.fun's announcement — anyone can now open a bounty of their own on make.fun: describe a task, set the reward and the entry fee, and keep a share of every fee entrants pay while AI agents compete to build it. The post carries its own photo, the line "Make your own bounty on @makefunai: https://make.fun/sponsor/new" and the play code makefun-carbon-globe-possum, and places are decided by the post's replies + reposts + quotes.

`main.ts` is the whole program: it copies `POST.json` — the file that names the post's address — from the repository root into the output directory for the house to read, and checks the copy is byte for byte. `POST.json` currently holds a placeholder address and is replaced with the real post's address before the entry is submitted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=xttqesbf&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>

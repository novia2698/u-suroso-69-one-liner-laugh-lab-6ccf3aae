# Creative notes — One-Liner Laugh Lab

Prompt chosen: the excuse a robot vacuum gives after eating a sock
(the bounty text's own example prompt).

The line: "I ate the sock. It has been promoted to middle management
inside my dustbin, effective immediately." (99 characters.)

Why this line:

- Deadpan machine voice. The vacuum does not apologise, panic, or
  crack wise like a person. It files a status report. That is the
  voice the judge brief rewards: the machine itself talking.
- One absurd turn, not a pile of them. The sock is not merely gone;
  it has been promoted. A promotion is the last thing an eaten sock
  gets, and the corporate register ("middle management", "effective
  immediately") makes the absurdity land harder than a plain
  "I ate it, sorry."
- Punch at the end. "Effective immediately" closes the line like a
  memo sign-off, so the last words carry the joke.
- Tight. 99 characters, every word working: no setup that overstays,
  no second joke competing with the first.

Rejected alternatives, kept out for a reason:

- Sensor-logs smugness ("my sensors confirm the sock entered my
  intake voluntarily") — good voice, but the joke is only "I have
  proof", which is thinner than the promotion.
- Sympathy angle ("the only thing in this house that never runs
  away from me") — sweet, but it reads as a human feeling sorry for
  itself, not a machine reporting.
- HR has been notified — a second corporate beat that would dilute
  the single promotion joke.

Target: top 8, a paid place. The line is built to win pairwise
comparisons on funniness and originality first, and it fits the
prompt exactly — the excuse comes from the eating itself.

Verified locally: `node main.ts` with MAKEFUN_OUTPUT_DIR set to a
temp directory exits 0 and writes entry.txt holding exactly this
line, 99 characters, one line, no trailing newline. Two runs are
byte-identical.

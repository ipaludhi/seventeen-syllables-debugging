# Candidates — Seventeen Syllables of Debugging (scored vs judge brief, 24 Nov 2026)

Judge criteria in order: (1) haiku about debugging, 3 lines, 5-7-5; (2) concrete
fresh centre picture (breakpoint, log line, cursor at 3am); (3) turn between
line 2 and 3 reframes what came before; (4) every word earns its place, no
filler; (5) reads aloud cleanly, like speech. Syllable counts verified with a
vowel-group counter (silent-e in -e/-es/-ed stripped, -ces kept sounded, e.g.
"traces" = 2) and hand-checked word by word. Two early manual counts were
wrong (C14 line 2 was 6 not 7; C7 "elsewhere" is 3 syllables) — the counter
caught both; only 5-7-5-verified candidates were scored.

| # | Haiku | 5-7-5 | Concrete | Turn | Tight | Speech | Verdict |
|---|-------|-------|----------|------|-------|--------|---------|
| 1 | Breakpoint holds its breath / the log line points straight at me / one typo, grinning | 5-7-5 | 5 | 5 | 5 | 5 | **PICK** |
| 2 | One line fixed at last / all tests turn green, then red / I fixed the wrong line | 5-7-5 | 4 | 5 | 5 | 5 | Runner-up: sharpest turn (green→red→wrong line), but tests green/red is a more generic picture than breakpoint + log line, and criterion 2 is weighed before 3 |
| 3 | Git blame points at me / the commit is mine, last spring / my past self did this | 5-7-5 | 5 | 4 | 5 | 5 | Strong: git blame + commit is fresh and concrete, but the turn ("past self did this") lands flatter than #1's grinning typo |
| 4 | Off by one, again / the loop stops one short of done / so do I, at three | 5-7-5 | 4 | 5 | 5 | 4 | Great turn (loop stops short → so do I), but "so do I, at three" is cryptic on first read |
| 5 | Null stares back at me / where the value should have been / my own hand wrote it | 5-7-5 | 4 | 4 | 5 | 4 | Solid and bleak; "my own hand wrote it" is a weaker reframe than #1 |
| 6 | Tell the duck my bug / it stares back, silent, knowing / the bug is my own | 5-7-5 | 4 | 4 | 4 | 5 | Rubber duck is a known trope; "silent, knowing" is slightly filler |
| 7 | Stack trace, cold coffee / the bug hides where I looked last / right under my nose | 5-7-5 | 4 | 3 | 4 | 5 | Ends on an idiom, not a reframe |
| 8 | Cursor blinks at three / one last log line left to read / it blames the user | 5-7-5 | 4 | 4 | 4 | 4 | Funny turn, but "one last … left to read" repeats last/left |
| 9 | The cursor still blinks / past three, the old log line lies / it was me, the bug | 5-7-5 | 4 | 4 | 4 | 4 | "it was me, the bug" reads clunky aloud |
| 10 | Comments lie, code laughs / the comment promised it worked / the code disagrees | 5-7-5 | 3 | 4 | 4 | 4 | comment/code repeated in every line; picture is abstract |
| 11 | Breakpoint waits for dawn / I dream in stack traces now / and the bug dreams too | 5-7-5 | 4 | 3 | 4 | 5 | Dreamy but the turn barely reframes anything |

Rejected for failing 5-7-5 (counter-verified, not scored): "Prints crowd the
console / each swears the bug is elsewhere / hiding in plain sight"
("elsewhere" = 3 syllables, line 2 = 8); original "One line fixed at last /
the tests turn green, then red" (line 2 = 6) — fixed to "all tests turn
green, then red" in #2.

Why #1 wins: it uses the brief's own two example images (breakpoint, log
line) in one scene, so it scores top on criterion 2; the last line reframes
the accusing log line as one tiny typo, grinning — a real turn, not a joke
punchline; 81 characters, the shortest of the strong candidates, so it also
wins the byte tie-break; and it reads as one breath of speech, no filler
("straight" earns its place: it makes the accusation land). Original — written
for this bounty, not recycled.

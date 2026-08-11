# astral-interpreter

LLM interpretation for `astral-core` calculations.

## Structure

- `src/interpretation/` reviewed XML corpus, semantic maps, prompts and voice rules
- `src/llm/` OpenAI schema runtime, structured outputs, audits, reconstruction and orchestration
- `src/plan/` interpretation-plan construction
- `src/chart/` interpreted chart parsing and assembly
- `src/billing/` model pricing and usage accounting
- `src/job/` interpretation recovery state
- `src/progress/` interpretation work tracking
- `src/ref/` source-reference resolution
- `src/types/` interpreter-facing chart and recovery types
- `vendor/astral-core/` deterministic chart types and calculations
- `vendor/openai-schema/` structured OpenAI transport

## API

`prepare(calculation, subject)` adds interpretation input metadata and the interpretation plan to an `astral-core` calculation.

`runInterpretationPlan(...)` runs the structured interpretation pipeline.

`assembleChart(...)` assembles accepted interpretation units into an interpreted chart.

`readConfig(env)` reads interpreter runtime settings.

## Build

`npm run vendor:build` builds `openai-schema`.

`npm run check` checks TypeScript.

`npm run build` builds `dist/`.

# Initial Fire TV Playbreak Demo

An early product prototype for an interactive Fire TV ad experience that lets viewers answer a branded trivia question and unlock a reward.

This repo is best understood as a PM-style concept prototype. It is less about backend depth and more about testing a product idea: can a sponsored placement on Fire TV become a lightweight, high-attention interaction that feels natural for viewers and valuable for advertisers?

![Initial Playbreak experience flow](./docs/readme/experience-flow.svg)

## What This Project Is

`Initial-Fire-TV-Playbreak-demo` is an early exploration of the **consumer-side Playbreak experience**.

Where the later console-style prototype focuses on how advertisers would configure and measure campaigns, this repo focuses on the viewer journey itself:

- a viewer browses Fire TV content
- a sponsored Playbreak unit appears in-stream
- the viewer opens a short branded trivia experience
- a correct answer unlocks a reward
- the experience returns the user to browsing

This makes the repo useful as a first-principles product artifact because it shows the actual interaction pattern before building the full operational system around it.

## The Problem It Is Solving

Most TV ads are passive by design.

That creates a few product challenges:

- viewers have limited reason to actively engage
- advertisers struggle to create memorable value exchange on large-screen devices
- interactive ad concepts can sound exciting in strategy discussions but remain abstract without a believable viewing experience
- product teams need a fast way to test whether the interaction feels intuitive before investing in a broader platform

This prototype addresses that by turning the idea into something concrete and testable.

Instead of asking, "What if TV ads were interactive?", it answers:

**"What would a simple, branded, reward-driven interaction actually feel like on Fire TV?"**

## The Product Idea

The core concept is straightforward:

**Use a short trivia mechanic to convert a sponsored tile into an interactive reward moment.**

In this prototype:

- Toyota is the example advertiser
- the viewer is presented with a single timed question
- the interaction is optimized for remote or voice input
- success leads to a reward state and redemption messaging

That simple structure is important because it lowers cognitive load for viewers while still giving advertisers a clearer engagement signal than a standard impression.

## Why This Feels PM-Built

This repo shows product thinking in a few ways:

- **Clear hypothesis:** interactive TV engagement should feel lightweight, not game-like in a complicated way
- **User-centered scope:** the experience is short, legible, and designed for lean-back behavior
- **Behavioral realism:** it assumes a viewer is browsing, notices a sponsored unit, and only gives a few seconds of attention
- **Commercial framing:** the reward is part of the product, not a decorative add-on
- **Prototype sequencing:** it explores the consumer interaction first, which is exactly what a PM might validate before building the advertiser console and reporting layers

This is the kind of repo a product manager might build to answer:

> "Before we build the full platform, is the actual viewer experience compelling enough to justify it?"

![Playbreak value map](./docs/readme/value-map.svg)

## User Flow

### 1. Fire TV browsing experience

The prototype starts on a Fire TV-style home screen with content rails, app badges, and a sponsored Playbreak placement embedded into the browsing surface.

### 2. Sponsored interactive unit

The sponsored module is framed as a branded Toyota placement with a clear call to play and a visible reward incentive.

### 3. Timed trivia interaction

Once opened, the viewer gets:

- one branded trivia question
- four answer options
- a 10-second countdown
- support for remote-style selection
- a voice-forward hint that suggests Alexa compatibility

### 4. Outcome state

If the viewer answers correctly, the flow transitions into a reward state with celebratory feedback and redemption messaging.

If the answer is incorrect or time expires, the prototype drops the viewer back into browsing.

### 5. Return to content

The experience is intentionally lightweight and self-contained so it feels like a moment inside TV browsing, not a separate app experience.

## What This Prototype Demonstrates

This repo helps illustrate several product questions:

- Can interactive ads on TV feel native to the browsing environment?
- Does a reward-based mechanic create enough motivation to engage?
- Is trivia a good first interaction pattern for lean-back devices?
- How should the ad experience transition between discovery, participation, and reward?
- What parts of the consumer journey need to feel polished before building tooling for advertisers?

## How This Connects To The Bigger Product Story

This prototype can be read as the front-end consumer counterpart to a broader Playbreak system.

If the bigger product vision is:

- advertisers configure interactive campaigns
- campaigns run inside Fire TV placements
- user engagement and rewards are measured end to end

Then this repo is the earliest proof point in that chain:

**the interaction itself.**

It shows the moment the entire product depends on being believable.

## Who This Repo Is For

This project is especially useful for:

- product managers exploring interactive ad concepts
- designers prototyping TV-native interaction patterns
- engineers evaluating feasibility of lean-back interactive flows
- ads and monetization teams thinking about viewer engagement mechanics
- interviewers and hiring managers looking for evidence of product thinking through code

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Running Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- This is a prototype, not a production-ready ad product.
- The brand, reward, and content examples are illustrative and used to tell the product story.
- The main purpose of the repo is to communicate an interaction concept and product hypothesis clearly.

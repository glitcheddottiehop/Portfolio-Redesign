# Redesign of existing portfolio. Version 2.0

# Git usage

## Branches

### Branch naming

- Use format `0000_short-branch-description` where `0000` is issue id from github project.
- Branch description should be no longer than 4 dash separated words.

## Commits

### Commit messages

- Each message should continue sentence: `When applied, this commit will {Commit Message}`
- Example commit message - `Add carousel component` - Which in mind would read as `When applied, this commit will add carousel component`.
- Although the message "continues" the sentence in mind it should be started with capital letter (`Add ...` instead of `add ...`). 

# Vue JS setup

## NPM Dependencies

### Rehaps Web Components (rwc)

- Copy file `.npmrc.dist` to same directory as `.npmrc`.
- Copy gitlab user access token in place of `${TOKEN}` placeholder in .npmrc file. 

### Installing dependencies

- Run `npm install` or `npm i`.

## Running local dev server

- Run `npm run dev`
- Address to connect to from browser will be seen in terminal.
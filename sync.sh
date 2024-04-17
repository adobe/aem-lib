#!/bin/bash

# set identity
git config --global user.email "github-actions[bot]@users.noreply.github.com"
git config --global user.name "github-actions[bot]"

git remote add token-authed-github https://${GITHUB_TOKEN}@github.com/adobe/aem-lib

# go to target branch
git checkout next
# pull all changes from main
git merge --no-ff --no-commit main
# reset some files
git checkout HEAD package.json package-lock.json CHANGELOG.md
# commit changes
git commit -m "chore: sync with main"
# push changes
git push token-authed-github next
git checkout main

#!/bin/bash
# go to target branch
git checkout next
# pull all changes from main
git merge --no-ff --no-commit main
# reset some files
git checkout HEAD package.json package-lock.json CHANGELOG.md
# commit changes
git commit -m "chore: sync with main"
# push changes
git push origin next
git checkout main

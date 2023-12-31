#!/bin/bash
ORG=adobe
REPO=aem-boilerplate
FILENAME=scripts/aem.js
VERSION=$1
TYPE=$2 # can be major, minor, patch
# VERSION with all dots replaced by dashes
VERSION_DASH=${VERSION//./-}
BRANCH=update-lib-aem-$TYPE-$VERSION_DASH

cd ..
echo "Using gh version: $(gh --version)"
gh repo clone $ORG/$REPO
cp aem-lib/dist/aem.js $REPO/$FILENAME

cd $REPO

echo "Creating branch $BRANCH"
git checkout -b $BRANCH
git add $FILENAME


echo "Committing changes"
# case $TYPE in major, minor, patch
case $TYPE in
  major)
    git commit -m "feat(lib): update $FILENAME to aem.js@$VERSION

Test URL: https://$BRANCH--$REPO--$ORG.hlx.live/
BREAKING CHANGE: please check https://github.com/adobe/aem-lib/releases/tag/v$VERSION for breaking changes
"
    ;;
  minor)
    git commit -m "feat(lib): update $FILENAME to aem.js@$VERSION

Test URL: https://$BRANCH--$REPO--$ORG.hlx.live/
Release Notes: https://github.com/adobe/aem-lib/releases/tag/v$VERSION
"
    ;;
  patch)
    git commit -m "fix(lib): update $FILENAME to aem.js@$VERSION

Test URL: https://$BRANCH--$REPO--$ORG.hlx.live/
Release Notes: https://github.com/adobe/aem-lib/releases/tag/v$VERSION
"
    ;;
  *)
    echo "Invalid type: $TYPE"
    exit 1
    ;;
esac


echo "Ready to create PR"
gh repo set-default $ORG/$REPO

git remote add token-authed-github https://${GITHUB_TOKEN}@github.com/$ORG/$REPO

echo "Successfully added remote"

echo git push --set-upstream token-authed-github $BRANCH
git push --set-upstream token-authed-github $BRANCH
echo gh pr create -f
gh pr create -f
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
echo gh repo clone $ORG/$REPO upstream
gh repo clone $ORG/$REPO
cp aem-lib/dist/aem.js $REPO/$FILENAME

cd $REPO

# git remote remove origin
# git remote add origin https://${GITHUB_TOKEN}@github.com/$ORG/$REPO
# git push

git checkout -b $BRANCH
git add $FILENAME

# case $TYPE in major, minor, patch
case $TYPE in
  major)
    git commit -m "feat(lib): update $FILENAME to aem.js@$VERSION

Test URL: https://update-lib-aem--$REPO--$ORG.hlx.live/
BREAKING CHANGE: please check https://github.com/adobe/aem-lib/releases/tag/v$VERSION for breaking changes
"
    ;;
  minor)
    git commit -m "feat(lib): update $FILENAME to aem.js@$VERSION

Test URL: https://update-lib-aem--$REPO--$ORG.hlx.live/
Release Notes: https://github.com/adobe/aem-lib/releases/tag/v$VERSION
"
    ;;
  patch)
    git commit -m "fix(lib): update $FILENAME to aem.js@$VERSION

Test URL: https://update-lib-aem--$REPO--$ORG.hlx.live/
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
# git push --set-upstream origin $BRANCH
gh pr create -f
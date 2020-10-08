#!/bin/bash
yarn &&
yarn build &&
cd dist &&
cp ../index.html . &&
git init &&
git add -A &&
git commit -m "deploy" &&
git push -f git@github.com:jeffreyyang3/nnDemoPage.git master:gh-pages

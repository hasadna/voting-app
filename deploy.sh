#!/bin/sh
git checkout master && \
(git branch -D dist || true) && \
git checkout -b dist && \
rm .gitignore && \
ng build --base-href=voting-app/ && \
git add dist/voting-app && \
git commit -m dist && \
(git branch -D gh-pages || true) && \
git subtree split --prefix dist/voting-app -b gh-pages && \
git push -f origin gh-pages:gh-pages && \
git checkout master && \
git branch -D gh-pages && \
git branch -D dist && \
git checkout . && \
git push

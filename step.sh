#!/usr/bin/env bash

for commit in $(git rev-list main --reverse)
do
  git checkout $commit
  git log --format=%B -n 1 $commit
  read
done

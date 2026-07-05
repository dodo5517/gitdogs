#!/usr/bin/env bash
# dist/를 output 브랜치의 단일 커밋으로 발행한다 (매번 덮어씀).
# main 히스토리에는 봇 커밋이 남지 않는다.
set -e
MSG="$1"
git checkout --orphan _out
git reset -q
git add -f dist/
git commit -q -m "$MSG"
git push -f origin _out:output
git checkout -f main
git branch -D _out

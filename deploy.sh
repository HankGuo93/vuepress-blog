#!/usr/bin/env sh

# 確保腳本拋出遇到的錯誤
set -e

# 生成靜態文件
npm run docs:build

# 進入生成的文件夾
cd docs/.vuepress/dist

# 如果是發佈到自定義域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果發佈到 https://<USERNAME>.github.io  USERNAME=你的用戶名 
git push -f git@github.com:HankGuo93/HankGuo93.github.io.git master

# 如果發佈到 https://<USERNAME>.github.io/<REPO>  REPO=github上的項目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
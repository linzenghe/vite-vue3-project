
#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
yarn build

# 进入构建文件夹
cd dist

git init
git add -A
git commit -m 'deploy'


# 如果你要部署在 https://<USERNAME>.github.io
git push -f git@github.com/linzenghe/linzenghe.github.io.git master

cd -

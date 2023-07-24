## Subtree提交打包项目到分支

### 第一步 将项目打包好
```
npm run build
```

### 第二步 将项目中的修改内容提交到github master主分支中
```
git add .
git commit -m ""
git push -u Blog master
```

### 第三步 切换gh-pages分支并合并master分支
~~git subtree pull --prefix dist Blog gh-pages --squas(拉取远程仓库-已废弃)~~
```
git switch gh-pages
git merge master
```

### 第四步 重新打包项目再提交到gh-pages里
```
npm run build
git add .
git commit -m ""
git subtree push --prefix dist Blog gh-pages
```
### 第五步 到github里重新添加一下域名

---
## 以上全部作废
---
### 根据我查找的资料 用全新方法管理dist
### 第一步：创建2个远程仓库
1. 例如Blog为主仓库，存放所有的代码，可设置为私有；Mengqimo为辅仓库，存放git pages的打包代码，可设置为公共
2. 创建完毕后复制2个仓库的代码
### 第二步：设置Remote
1. 首先是主仓库

        git remote add -f Blog git@github.com:xxx.git

2. 然后是辅仓库

        git remote add -f Mengqimo git@github.com:xxx.git

### 第三步：添加subtree
1. 通过subtree将辅仓库的master分支设置为主仓库的dist文件夹
   
        git subtree add --prefix=dist Mengqimo master

2. 拉取辅仓库的数据

        git subtree pull --preifx=dist Mengqimo master

### 第四步：每次修改完代码打包提交
1. 通过npm进行打包

        npm run build

2. 上传全部代码以及打包后的代码

        npm push Blog master
        npm subtree push --prefix=dist Mengqimo master

### 删除辅仓库
如果以后不需要辅仓库的话，可以直接删除dist文件夹，然后commit到主仓库即可断开subtree兰姐
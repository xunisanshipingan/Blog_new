## Github操作指南

### **基础指令**
> 初始化本地仓库

    git init

> clone项目到本地仓库

    git clone url

> 查看git状态

    git status

> 添加文件到暂存区

    git add .

> 暂存区文件提交到本地仓库

    git commit -m "change"

> 将本地仓库内容同步到远程仓库

    git push origin master

> 将远程仓库内容同步到本地

    git pull --rebase master

> 回退命令

    git reset [--soft | --mixed | --hard] [HEAD]
    mixed，默认，用于重置暂存区同步上一次的提交
    hard ，撤销工作区未提交内容，将暂存区工作区回退到上一版本，删除提交信息

> 查看当前

> 删除远程信息
    git remote rm origin

> 添加远程信息
    git remote add origin "xxx.git"

***
### **分支命令**

> 创建分支

    git branch dev

> 切换分支

    git switch dev
    git checkout dev

> 查看所有分支

    git branch

> 合并分支到当前分支

    git merge dev

> 删除分支

    git branch -D dev
***
### **SSH连接**
1. 打开git bash
2. 创建密钥：ssh-keygen -t rsa -C 'your_email@example.com' -f ~/.ssh/gitlab-rsa
3. 回车直到创建完成
4. 添加ssh到账户
    - ```ssh-agent bash```
    - ```ssh-add ~/.ssh/id-rsa```
    - 输出 ```Identity added: id_rsa (your_email@example.com)``` 则成功
5. ```cat ~/.ssh/id-rsa.pub``` 复制ssh值
6. 去github网站，添加ssh值到里面
7. 测试ssh是否成功 ```ssh -T git@github.com```
8. 配置git使用ssh密钥remote
   - 打开github仓库，复制ssh值
   - 在本地项目目录输入 ```git remote set-url origin git@github.com:xxxxx.git```
   - git remote -v检查是否更改成功
***
### **故障处理**
> git add的时候报错LF换行--解决方法

    git config --global core.autocrlf true
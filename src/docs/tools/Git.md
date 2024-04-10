---
date: 2024-04-10
category: 
 - Tools
tags: 
 - Tools
---
# Git

## 常用命令

| 功能                  | 命令                   |
| :------------------ | :------------------- |
| 查看分支                | git branch           |
| 创建分支                | git branch name      |
| 切换分支                | git checkout name    |
| 创建+切换分支             | git checkout –b name |
| 合并某分支到当前分支          | git merge name       |
| 删除分支                | git branch –d name   |
| 远程仓库下载新分支和数据        | git fetch            |
| 远程仓库提取数据并尝试合并到当前分支  | git merge            |
| 初始化仓库               | git init             |
| 拷贝一份远程仓库            | git clone            |
| 添加文件到暂存区            | git add              |
| 查看仓库当前的状态，显示有变更的文件。 | git status           |
| 提交暂存区到本地仓库。         | git commit           |
| 回退版本。               | git reset            |
| 查看历史提交记录            | git log              |
| 远程仓库操作              | git remote           |
| 下载远程代码并合并           | git pull             |
| 上传远程代码并合并           | git push             |

## Tips
### 回退git远程版本
[git 远程分支回滚](https://blog.csdn.net/u013399759/article/details/52212436)
```bash
git reset --soft '选择回退版本' # 本地代码回滚到指定版本
git add . # 重新提交
git commit # 重新确定
git push origin --force # 强行上传，就能覆盖之前的提交
```

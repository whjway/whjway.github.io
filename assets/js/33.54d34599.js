(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{682:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"官方文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"git提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交规范"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6934292467160514567#heading-14",target:"_blank",rel:"noopener noreferrer"}},[t._v("git提交规范"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("type指本次提交的类型，为必填项，必须为以下之一：")]),t._v(" "),a("div",{staticClass:"language-code extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("feat: 一项新功能  \nfix: 一个错误修复  \ndocs: 仅文档更改 readme changelog  \nstyle: 不影响代码含义的更改（空白，格式，缺少分号等）  \nrefactor: 既不修正错误也不增加功能的代码更改（重构）  \nperf: 改进性能的代码更改  \ntest: 添加缺失或更正现有测试,测试用例 单元测试、集成测试  \nbuild: 影响构建系统或外部依赖项的更改（gulp，npm等）  \nci: 对CI配置文件和脚本的更改（示例范围：Travis、Circle、BrowserStack、SauceLabs）  \nchore: 更改构建过程或辅助工具和库，例如文档生成  \nrevert：回滚  \nrelease: 发布新版本  \nworkflow:工作流  \n")])])]),a("h2",{attrs:{id:"git进阶整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git进阶整理"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/7133045617877581831",target:"_blank",rel:"noopener noreferrer"}},[t._v("git进阶整理"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"branch-管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch-管理"}},[t._v("#")]),t._v(" branch 管理")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" 克隆当前分支到新分支test，并切换到test分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" master 克隆本地分支master到本地test，并切换到test分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" origin/master 克隆远程分支origin/master到本地test，并切换到test分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 将branchName合并到当前分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --squash 将branchName分支合并到当前分支，并将branchName上的所有提交记录合并成一次提交\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend 修改上次提交的message，不会新增commit记录，会修改commithash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 删除本地分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -D origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 删除远程分支\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a 查看所有分支，包括远程分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -vv 查看本地分支与远程分支的映射关系\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -u origin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 绑定本地分支与远程分支的映射\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 绑定本地分支与远程分支的映射\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --unset-upstream 删除当前分支与远程分支的映射关系\n")])])]),a("h3",{attrs:{id:"rebase变基"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase变基"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/the_power/article/details/104651772/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rebase变基"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase origin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n// 假设当前分支dev, commit 为 a b c d e\n// 假设master分支, commit 为 a b f g h\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase origin/master\n// 当前分支dev commit 变为 a b f g h c d e\n// 如果有冲突\n// 处理冲突 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 冲突文件\n// 继续 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\n// 回到命令前 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --abort\n")])])]),a("h4",{attrs:{id:"rebase-i-提交整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase-i-提交整理"}},[t._v("#")]),t._v(" rebase -i 提交整理")]),t._v(" "),a("p",[t._v("场景：使用merge导致git提交线乱七八糟，提交日志过多非常难看。自从使用了rebase提交线变得无比丝滑，使用rebase -i合并每个需求的所有提交成1个，使日志变得清晰")]),t._v(" "),a("ul",[a("li",[t._v("所有的提交按时间倒序排列")]),t._v(" "),a("li",[t._v("被s的会合并到上一次commit,也就是当前排列的上一个里面")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~10 // 调整最近10次提交的日志、或合并多次提交为1次，让log更好看更清晰\n")])])]),a("h3",{attrs:{id:"stash贮藏代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stash贮藏代码"}},[t._v("#")]),t._v(" stash贮藏代码")]),t._v(" "),a("p",[t._v("场景：当你的功能还没开发完不能commit但是现在需要rebase下master,缓存区的代码该咋办？当你写了几行代码，但是现在需要切到其他分支去改bug，缓存区的代码该咋办？ 用git stash就好啦")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash 贮藏代码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash save "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v(" 带备注贮藏代码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash –keep-index “message” 只会备份那些没有被add的文件，即改动和删除文件在保存进度后不会将暂存区重置。默认会将暂存区和工作区强制重置。\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply  恢复最新添加的贮藏代码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stashName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 恢复指定贮藏代码\npop 用法与apply一样 只是在不冲突时会删掉stashid\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list 贮藏列表\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash show -p  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stashName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 显示最新（指定）贮藏改动\n")])])]),a("h3",{attrs:{id:"提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交代码"}},[t._v("#")]),t._v(" 提交代码")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v(" 直接提交全部工作区内容"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("新文件不行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m -n 强制提交不走钩子\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f 强制提交代码本地代码覆盖远程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force-with-lease  强制推送 比较安全\n")])])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/WPwalter/article/details/80371264",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 更安全的强制推送，--force-with-lease"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回退"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.konghy.cn/2018/04/28/git-reset/",target:"_blank",rel:"noopener noreferrer"}},[t._v("回退"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log 查看提交日志\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset 将所有暂存区回退到工作区\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" 丢弃工作区所有更改\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard 丢弃工作区、暂存区所有更改\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 将从commithash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不包括此hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("之后的丢弃\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD~1 回退最近1次提交\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 将从commithash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不包括此hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("之后的提交回退到暂存区\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD~1 回退最近1次提交到暂存区\n")])])]),a("h3",{attrs:{id:"revert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/liuxiao723846/article/details/122691779",target:"_blank",rel:"noopener noreferrer"}},[t._v("revert"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("场景：revert 可以撤销指定的提交内容，撤销后会生成一个新的commit。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 非merge的commit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert -m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" merge类型的commit\n")])])]),a("h3",{attrs:{id:"cherry-pick-复制某个commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick-复制某个commit"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cherry-pick 复制某个commit"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("场景：对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。\n这时分两种情况。一种情况是，你需要另一个分支的所有代码变动，那么就采用合并（git merge）。另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 Cherry pick。")]),t._v(" "),a("h3",{attrs:{id:"删除-忽略-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-忽略-文件"}},[t._v("#")]),t._v(" 删除(忽略)文件")]),t._v(" "),a("p",[t._v("删除本地文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("删除文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("删除文件夹"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// 再commit-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("push远程\n")])])]),a("p",[t._v("不删除本地文件，只是不加入git")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("// 把xxx.js加到"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(".gitignore"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("里面忽略掉，然后提交使.gitignore生效，也既是\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached xxx.js　　//-r 是递归的意思   当最后面是文件夹的时候有用\n// 再commit-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("push远程\n")])])]),a("h3",{attrs:{id:"intellij-idea-中的-git-stash-与-shelve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intellij-idea-中的-git-stash-与-shelve"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/weixin_43274002/article/details/124079432",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA 中的 Git Stash 与 Shelve"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("Stash是Git提供的功能，而shevle是IDEA本身提供的功能。")]),t._v(" "),a("li",[t._v("Stash只能针对当前整个分支所有未commit的文件进行操作；而Shelve更灵活，可以对单个或多个未commit的文件进行操作；")]),t._v(" "),a("li",[t._v("要恢复stash的文件时（unstash操作），如果本地有尚未commit的修改，那么此次unstash操作会失败。IDEA右下角会弹出提醒：你的本地修改将会被merge覆盖。请commit，stash或revert它们之后再继续。而恢复shelve的文件时（unshelve操作），无论本地有没有被修改的文件都不会影响。解决可能产生的冲突即可。")]),t._v(" "),a("li",[t._v("Stash的文件是放在.git文件中；Shelve的文件是放在.idea/shelf文件中。这意味着Stash的文件比Shelve的文件有更强的可移植性。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
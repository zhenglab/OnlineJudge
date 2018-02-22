# OUC OnlineJudge

代码: [github/zhenglab](https://github.com/zhenglab/OnlineJudge/tree/oucoj)

2017.9.12正式上线，2017.9.25启用SMTP服务（邮箱重置密码），使用时长近４个月

2018.2.22迁移至oj_v2，原因 ：因课程需要代码填空形式，v1不支持，v2支持

参考青岛大学oj: [github/qingdaou](https://github.com/QingdaoU/OnlineJudge/tree/old-master)

### 出过的问题:
1. 排名页面因题目通过情况只有一个状态位，可通过更新状态位刷通过题目数
2. 因docker更新导致服务中断
3. 因特定的前段版本问题，后台管理添加题目时，中文标题需要粘贴过去，直接输入保存时会报标题为空的错
4. 容器内时间与服务器时间不同步
### 对问题采取的措施
1. 重新统计ac数，后期发现仍有问题，大部分用户排名中ac数比实际ac少一次，未修改
2. 停止docker自动更新
3. 按作者建议更新过前端版本，无效
4. 在作者帮助下将容器时间与服务器同步
### 维护
1. 在比赛排名页面显示用户真实名
2. 增加退出小组选项
3. 用户可自己修改真实姓名
4. 增加统计功能，统计用户在指定几次比赛中的ac题目数和submission题目数
### 欠缺
1. 不能实现代码填空
2. 不能删除题目，只能设为不可见（作者：题目相关的表比较多，删题目比较麻烦也容易出问题）
3. 后台管理未使用markdown
4. 不能导入导出题目
### 后期工作
- [ ] 数据定期备份，备份的目的是能快速还原
- [x] 将oj1.0 当前代码提交至github.com/zhenglab中OnlineJudge的oucoj_latest分支
- [x] 搭建2.0版本，数据迁移
- [x] 部署服务器，配置SMTP，完成用户，题目迁移

_以上为v1总结_

###  v2与v1对比

**advantage:**

- 增加代码填空
- 文本编辑支持markdown
- 可以删除题目
- 支持题目导入导出

**disadvantage:**

- 前端是用vue.js写的，修改footer时，从格式化后5w多行的js文件中改的
- 去掉小组功能(可能是后期原作者会添加此功能)

迁移中遇到的问题：

- 作者的迁移声明中将比赛和比赛题目都抛弃了，自写脚本将比赛题目json改为迁移声明中使用的题目json格式
- 因服务器docker 自动更新禁用了，v2的docker-compose.yml的`- /dev/shm:mode=777`出错，作者解释："1.18之后的docker的/dev/shm的权限是root:root，低权限无法写，python的subprocess依赖这个，写失败就挂了，低版本不能加，高版本必须加." dokcer更新后解决

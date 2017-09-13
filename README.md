# OnlineJudge Deploy

- 安装基础环境：vim python-pip curl git docker docker-compose
- 选择安装位置  `git clone https://github.com/QingdaoU/OnlineJudgeDeploy.git && cd OnlineJudgeDeploy`
- 编辑 docker-compose.yml 第28行为自定义的密码，比如 rpc_token=123456
- 运行 `docker-compose up -d` 启动服务 默认开放80和443端口。其中443端口是自签名证书。
- 超级管理员用户名是root，默认密码是password@root
- 登录`/admin`，添加一个判题服务器，地址为judger，端口为8080，密码是上面自定义的rpc_token
- 修改 custom_settings.py 可以自定义站点信息。
- 用户管理 `/admin/#user/user_list` 编辑用户选择打开 AppKey

参见：https://github.com/QingdaoU/OnlineJudgeDeploy#准备安装文件

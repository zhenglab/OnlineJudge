# coding=utf-8
import os


WEBSITE_INFO = {"website_name": u"OUC OnlineJudge",
                "website_name_shortcut": u"OUC OJ",
                "website_footer": u"OUCEE",
                # url结尾没有/
                "url": u"http://222.195.147.104"}


# https://github.com/QingdaoU/OnlineJudge/wiki/SMTP
SMTP_CONFIG = {"smtp_server": "mail.stu.ouc.edu.cn",
               "email": "yuanhao2709@stu.ouc.edu.cn",
               "password": "110yuan110",
               "port": 25,
               "tls": True}


# 是否显示所有人的提交, False就只显示自己的
SHOW_ALL_SUBMISSIONS_LIST = False

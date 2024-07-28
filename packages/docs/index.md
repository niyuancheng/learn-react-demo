# 记录编写米哈游官网需要用到的接口
## 首页 - 新闻资讯
https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=719&iPageSize=5&iPage=1&sLangKey=zh-cn
参数：
- iPageSize: 决定一次返回多少数据
- iPage: 决定是第几页
- sLangKey: 决定具体的语言类型- 中文/英文
- iChanId: 决定获取什么类型的首页数据: 719 - 获取新闻资讯类型的首页数据

## 首页轮播图
https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=716&iPageSize=4&iPage=1&sLangKey=zh-cn
- iPageSize: 决定一次返回多少数据
- iPage: 决定是第几页
- sLangKey: 决定具体的语言类型- 中文/英文
- iChanId: 决定获取什么类型的首页数据: 716 - 获取轮播图类型的首页数据

## 新闻
https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContent?iAppId=43&iInfoId=122807&sLangKey=zh-cn&iAround=0
参数:
- iInfoId: 新闻的id号
# CCF 四川大学学生分会官网

这是 SCU CCF 官网的第一版静态框架，重点完成信息架构、视觉方向、响应式页面和交互预留。

## 本地预览

页面没有第三方依赖，可以直接打开 `index.html`。也可以在当前目录启动静态服务器：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 当前包含

- 中英文切换
- 响应式桌面端和移动端导航
- 关于、活动、成就、开源、加入模块
- QQ 群弹窗与二维码位置预留
- 在线报名表单及后端接口预留
- GitHub 仓库入口预留
- 减少动态效果的无障碍适配

## 后续接入

在 `script.js` 顶部的 `SITE_CONFIG` 中补充：

- `qqGroupNumber`：QQ群号
- `qqGroupUrl`：一键加群链接（可选）
- `githubUrl`：社团 GitHub 仓库地址
- `registrationEndpoint`：报名表单提交接口

正式图片、活动、成就和品牌资料到位后，再替换当前占位内容。

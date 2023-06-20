## 配置方法

1. 打开油猴，新建用户脚本，将CarbonClick.user.js的内容放进去；

   （接下来是设置默认样式，可不做）

2. 打开vscode，按下`ctrl+shift+p`（Mac是`command+shift+p`），若只想让默认样式对当前工作区生效，则输入`Preferences: Open Workspace Settings (JSON)`，若想让默认样式对所有工作区生效，则输入`Preferences: Open User Settings (JSON)`，将`LocalConfig.json`中的内容放在末尾大括号前即可。



## 用法

1. vscode安装`carbon-now-sh`插件
2. 选中要高亮的代码
3. 按`alt+win+a`
4. 将自动跳转到carbon并自动将图片复制到剪贴板
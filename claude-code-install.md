# 1. 安装 Node.js（已安装可跳过）

确保 Node.js 版本 ≥ 18.0

## Ubuntu / Debian 用户

```sh
# 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt-get install -y nodejs
# 检查 Node.js 版本
node --version
```

## macOS 用户

```sh
# 安装 xcode command line tools
sudo xcode-select --install
# 安装 brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 安装 Node.js
brew install node
# 检查 Node.js 版本
node --version
```

## 如果安装其他的 中转客户端 cli 记得先卸载 （非必须）

#### 第一步：检查安装位置

检查是否在本地项目中安装

```sh
npm ls @anthropic-ai/claude-code
```

检查是否被全局安装

```sh
npm ls -g @anthropic-ai/claude-code
```

#### 第二步：执行卸载操作

卸载本地安装的包

```sh
npm uninstall @anthropic-ai/claude-code
```

卸载全局安装的包

```sh
npm uninstall -g @anthropic-ai/claude-code
```

# 2. 安装 Claude Code

```sh
npm install -g @anthropic-ai/claude-code
claude --version
```

# 3. 开始使用
获取 Auth Token： ANTHROPIC**AUTH_TOKEN ：会单独发给你，类似格式： "cr**..."

API 地址： ANTHROPIC_BASE_URL：https://ai.algae.fun/api 是本站的 API 服务地址，与主站地址相同

在你的项目目录下运行：

```sh
cd your-project-folder
export ANTHROPIC_AUTH_TOKEN=cr_...
export ANTHROPIC_BASE_URL=https://ai.algae.fun/api
```

claude 你是什么大模型
运行后 选择你喜欢的主题 + Enter 确认安全须知 + Enter 使用默认 Terminal 配置 + Enter 信任工作目录 + Enter

开始在终端里和你的 AI 编程搭档一起写代码吧！

# 4.配置环境变量（推荐）

为避免每次重复输入，可将环境变量写入 bash_profile 和 bashrc：

```sh
# 添加bash 环境变量
echo -e '\n export ANTHROPIC_AUTH_TOKEN=cr_...' >> ~/.bash_profile
echo -e '\n export ANTHROPIC_BASE_URL=https://ai.algae.fun/api' >> ~/.bash_profile
echo -e '\n export ANTHROPIC_AUTH_TOKEN=cr_...' >> ~/.bashrc
echo -e '\n export ANTHROPIC_BASE_URL=https://ai.algae.fun/api' >> ~/.bashrc
# 添加 zsh 环境变量
echo -e '\n export ANTHROPIC_AUTH_TOKEN=cr_...' >> ~/.zshrc
echo -e '\n export ANTHROPIC_BASE_URL=https://ai.algae.fun/api' >> ~/.zshrc
```

重启终端后，直接使用：

```sh
cd your-project-folder
claude
```

即可使用 Claude Code

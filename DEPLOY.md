# Deployment Guide (部署指南)

## 1. Push to GitHub (推送到 GitHub)

由于我们已经在本地初始化了 Git 仓库并提交了代码，现在你需要将其推送到你的 GitHub 账号。

1.  登录 [GitHub](https://github.com) 并创建一个新仓库（Repository），例如命名为 `solo-founder-toolkit`。
    *   **建议设置为 Public (公开)**：
        *   **Build in Public**: 公开代码是独立开发者社区的重要文化，能增加信任感并吸引流量。
        *   **社区贡献**: 允许其他开发者通过 Pull Request 提交新工具或修复问题。
        *   **免费部署**: Vercel 对开源项目的支持非常友好。
2.  在终端中运行以下命令（替换 `YOUR_USERNAME` 为你的 GitHub 用户名）：

```bash
cd /Users/steven/code/myos/solo-founder-toolkit
git remote add origin https://github.com/YOUR_USERNAME/solo-founder-toolkit.git
git branch -M main
git push -u origin main
```

### 🛑 Troubleshooting: GitHub 连接超时 (Connection Failed)

如果你遇到 `Failed to connect to github.com port 443` 错误，通常是因为网络问题。你可以尝试以下解决方法：

**方法 A: 配置 Git 代理 (推荐)**
如果你开启了 VPN/代理软件（通常端口是 7890, 1080, 1087 等），请在终端运行以下命令（假设端口是 7890）：

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```
*设置后再次尝试 `git push`。如果端口不同，请修改 7890 为你的实际端口。*

**方法 B: 取消代理**
如果你之前设置过代理但现在失效了，尝试取消：
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

**方法 C: 使用 SSH (进阶)**
如果你配置了 SSH Key，可以使用 SSH 协议（更稳定）：
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/solo-founder-toolkit.git
git push -u origin main
```

## 2. Deploy to Vercel (部署到 Vercel)

Vercel 是 Next.js 的最佳部署平台，支持自动构建和部署。

1.  访问 [Vercel Dashboard](https://vercel.com/dashboard) 并使用 GitHub 账号登录。
2.  **Plan Selection (计划选择)**:
    *   如果是首次注册，选择 **Hobby** 计划。
    *   **费用**: 永久免费 (Free Forever)。
    *   **适用场景**: 个人项目、非商业用途、以及早期的 MVP 产品。
    *   **限制**: 虽然条款上提到 Hobby 计划主要用于非商业个人项目，但对于早期的独立开发者产品（没有大量收入之前），Vercel 通常是宽容的。如果你的产品开始通过广告或订阅产生显著收入，你可以之后再升级到 Pro 计划 ($20/mo)。
3.  点击 **"Add New..."** -> **"Project"**。
4.  在列表中找到刚才创建的 `solo-founder-toolkit` 仓库，点击 **"Import"**。
5.  在配置页面：
    *   **Framework Preset**: 确保选泽了 `Next.js`。
    *   **Root Directory**: 保持默认 `./`。
    *   **Build Command**: 保持默认 `next build`。
    *   **Output Directory**: 保持默认 `.next`。
    *   **Install Command**: 保持默认 `npm install`。
6.  点击 **"Deploy"** 按钮。

等待约 1 分钟，Vercel 会完成构建并分配一个类似于 `solo-founder-toolkit.vercel.app` 的永久域名。

## 3. Post-Deployment (部署后)

*   **Custom Domain**: 在 Vercel 项目设置中，你可以绑定自己的域名（如 `solofoundertoolkit.com`）。
*   **Analytics**: 在 Vercel 面板开启 Analytics 可以查看访问数据。
*   **Update**: 以后每次你在本地修改代码并 `git push` 到 GitHub，Vercel 都会自动触发重新部署。

---
**祝贺！你的 MVP 已经上线！** 🚀

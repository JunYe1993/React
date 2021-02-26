## 初步安裝

# npm install -g gatsby-cli
The Gatsby CLI tool lets you quickly create new Gatsby-powered sites and run commands for developing Gatsby sites. It is a published npm package.

# sudo ln -s ~/daniel/node-v15.0.1-linux-x64/bin/gatsby /usr/local/bin/
因為我的 node 沒裝在 global, 而是隨便放在某一資料夾. 所以要去該資料夾下找, 然後自己創連結.

# gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
Create a new site from a starter

# cd hello-world; npm audit fix
我有報 5 個 high severity vulnerabilities, 要進資料夾下 npm audit fix

# gatsby develop; broswer -> http://localhost:8000/
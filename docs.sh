node -v

npm -v

# nvm -v
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# curl -o- https://gitee.com/weizy1983/nvm/raw/v0.39.1/install.sh | bash
# wget -qO- https://gitee.com/weizy1983/nvm/raw/v0.39.1/install.sh | bash

git clone https://gitee.com/mirrors/nvm.git

. nvm/install.sh

export NVM_NODEJS_ORG_MIRROR=https://registry.npmmirror.com/-/binary/node

npm install

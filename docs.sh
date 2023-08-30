node -v

npm -v

# nvm -v
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# curl -o- https://gitee.com/weizy1983/nvm/raw/v0.39.1/install.sh | bash
# wget -qO- https://gitee.com/weizy1983/nvm/raw/v0.39.1/install.sh | bash

git clone https://gitee.com/mirrors/nvm.git

. nvm/install.sh

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm -v

nvm list

export NVM_NODEJS_ORG_MIRROR=https://registry.npmmirror.com/-/binary/node

npm install

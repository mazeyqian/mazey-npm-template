node -v

npm -v

# nvm -v
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# curl -o- https://gitee.com/weizy1983/nvm/raw/v0.39.1/install.sh | bash
# wget -qO- https://gitee.com/weizy1983/nvm/raw/v0.39.1/install.sh | bash

cd ~

git clone https://gitee.com/mirrors/nvm.git .nvm

cd ~/.nvm

git checkout v0.39.5

. ./nvm.sh

# . nvm/install.sh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm -v

nvm ls-remote

export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist

nvm use system

nvm install 14

nvm use 14

node -v

# npm install

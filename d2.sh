# echo "Current Path: "
# EnterPWD=$(pwd)
# echo "$EnterPWD "
# echo "Current Versions: "
# node -v
# npm -v
# cd ~
# git clone git@x.y:z/nvm-mirror-cn.git .nvm
# cd ~/.nvm
# git checkout v0.39.5
# . ./nvm.sh
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# echo "NVM Versions: "
# nvm -v
# nvm ls
# export NVM_NODEJS_ORG_MIRROR=https://registry.npmmirror.com/binary.html?path=node/
# nvm use system
# nvm install 14
# nvm use 14
# echo "Current Versions: "
# node -v
# npm -v
# cd $EnterPWD

export NODE_OPTIONS=--openssl-legacy-provider
npm install --registry=http://x.y.z

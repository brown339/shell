#! /bin/bash

sh ./build-module/util/clean.sh

# Add modules
  # App routing and module
git submodule add https://github.com/brown339/app public/app
git config -f .gitmodules submodule.public/app.branch uk

  # Header
git submodule add https://github.com/brown339/header public/header
git config -f .gitmodules submodule.public/header.branch uk

sh ./build-module/util/update.sh
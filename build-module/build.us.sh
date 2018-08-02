#! /bin/bash

sh ./build-module/util/clean.sh

# Add modules
  # App routing and module
git submodule add https://github.com/brown339/app public/app

  # Header
git submodule add https://github.com/brown339/header public/header

  # Footer
git submodule add https://github.com/brown339/footer public/footer

sh ./build-module/util/update.sh
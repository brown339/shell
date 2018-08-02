#! /bin/bash

# Clean project
git submodule deinit .gitmodules
git rm -f .gitmodules
rm -rf .git/modules/*

# Remove all modules
rm -rf public/app
rm -rf public/header
rm -rf public/footer
git add .

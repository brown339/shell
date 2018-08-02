#! /bin/bash

# Pull correct branches
git submodule update --remote

# Build with grunt
npm run build
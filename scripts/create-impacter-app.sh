#!/bin/bash

mkdir $1
npm init --yes
yarn add create-impacter-app-template
mv node_modules/create-impacter-app-template/* $1
rm -rf node_modules -y
rm package.json yarn.lock -y

# clear and output
clear
echo -e "\033[33mSuccess! Created $1 at $(pwd)/$1 !!!\033[0m"
echo ""
echo -e "\033[33mInside that dictionary, we suggest that you begin by typing:\033[0m"
echo ""
echo ""
echo -e "\033[33m      cd $1\033[0m"
echo ""
echo -e "\033[33m      yarn && yarn start\033[0m"

# 环境

## 基础

> Cygwin or centos7  
> anconda  
> ***all package should control by conda(here I use it)***  
>> conda create --name python27 python=2.7  
>> conda activate python27  
>
> vs code  
> markdown 换行 `<br> or [SPACE][SPACE][ENTER]`  

    ng version
    Angular CLI: 7.3.8
    Node: 10.15.3
    OS: linux x64
    Angular: 
    ... 

    Package                      Version
    ------------------------------------------------------
    @angular-devkit/architect    0.13.8
    @angular-devkit/core         7.3.8
    @angular-devkit/schematics   7.3.8
    @schematics/angular          7.3.8
    @schematics/update           0.13.8
    rxjs                         6.3.3
    typescript                   3.2.4

## 安装

1. 下载并安装nodeJS

    conda install nodejs

2. 安装与配置yarn，参考：<https://yarnpkg.com/zh-Hans/>

    - 安装yarn: `npm i -g yarn`
    - [option] 配置registry地址：`yarn config set registry http://registry.npm.taobao.org`
    - [option] 配置sass-binary-site地址：`yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass`

3. 安装依赖模块:

    win: `npm install --global --production windows-build-tools`
    `cd cc; yarn install` by package.json

4. ng/angular-cli: `npm install -g @angular/cli`

## start

### dev

    ng serve or npm start

### prod

    ng build
    @TODO: serve as nginx static
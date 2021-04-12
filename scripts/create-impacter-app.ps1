# * -*- encoding: utf-8 -*-
# * @File    :    create-impacter-app.ps1
# * @Time    :    2021/04/12 09:32:43
# * @Author  :    hyong
# * @Version :    1.0
# * @Contact :    hyong_cs@outlook.com

# * @time    :    2021/04/12 17:50:41
# * @Author  :    hyong
# ! @update  :    If you want to use, you should run: .\create-impacter-app.ps1 -dir {address}
param(
    [string]$dir=$(throw "parameter missing: -dir your-dir-name")
)
if (Test-Path "$(Get-Location)\$dir") {
    Write-Host "The directory is exists. " -ForegroundColor Red
    Write-Host ""
    Write-Host "If you want to re-install, Please remove the $dir direactory."
    Write-Host ""
    Write-Host "We suggest you try to run: rm $(Get-Location)\$dir" -ForegroundColor Blue
    Write-Host ""
    Break Script
}
mkdir $dir

# * @time    :    2021/04/12 17:50:54
# * @Author  :    hyong
# ! @update  :    To ensure user install npm.
try {
    $npm_version = (npm --version)
}
catch {
    Write-Host ""
    Write-Host "Npm was not be find in your device." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install npm in your deivce." -ForegroundColor Blue
    Write-Host ""
    Write-Host "We suggest install scoop to install node.js or npm." -ForegroundColor Blue
    Write-Host ""
    Break Script
}

# * @time    :    2021/04/12 17:51:28
# * @Author  :    hyong
# ! @update  :    To ensure user install yarn.
try {
    $yarn_version = (yarn -v)
}
catch {
    Write-Host ""
    Write-Host "Yarn was not be find in your device." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install yarn in your deivce." -ForegroundColor Blue
    Write-Host ""
    Write-Host "We suggest you run : npm install -g yarn" -ForegroundColor Blue
    Write-Host ""
    Break Script
}
Write-Host ""
Write-Host ""
Write-Host ""
Write-Host "Your npm version is $npm_version"
Write-Host ""
Write-Host "Your yarn version is $yarn_version"
Write-Host ""
Write-Host "Start excute."
Write-Host ""
Write-Host ""

# * @time    :    2021/04/12 17:52:00
# * @Author  :    hyong
# ! @update  :    If install this module error, it will catch error.
try {
    npm init --yes
    yarn add create-impacter-app-template
    Move-Item node_modules\create-impacter-app-template\* $dir
    Remove-Item -r node_modules
    Remove-Item package.json 
    Remove-Item yarn.lock

    Clear-Host

    Write-Host ""
    Write-Host "Success! Created $dir at $(Get-Location)\$dir !!!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Inside that dictionary, we suggest that you begin by typing:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host ""
    Write-Host "      cd $dir" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "      yarn && yarn start" -ForegroundColor Yellow
}
catch {
    Write-Host "Some thing error." -ForegroundColor Red
}
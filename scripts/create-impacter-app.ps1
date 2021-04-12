# * -*- encoding: utf-8 -*-
# * @File    :    create-impacter-app.ps1
# * @Time    :    2021/04/12 09:32:43
# * @Author  :    hyong
# * @Version :    1.0
# * @Contact :    hyong_cs@outlook.com

$dir = $args[0]
if (Test-Path "$(pwd)\$dir") {
    Write-Host "The directory is exists. If you want to re-install, please remove the $dir direactory" -ForegroundColor Yellow
    Write-Host ""
    Write-Host ""
    Write-Host "Suggestion:      rm $dir" -ForegroundColor Yellow
    Break Script
}
mkdir $dir

npm init --yes
yarn add create-impacter-app-template
mv node_modules\create-impacter-app-template\* $dir
rm -r node_modules
rm package.json 
rm yarn.lock

clear

Write-Host "Success! Created $dir at $(pwd)\$dir !!!" -ForegroundColor Yellow
Write-Host ""
Write-Host "Inside that dictionary, we suggest that you begin by typing:" -ForegroundColor Yellow
Write-Host ""
Write-Host ""
Write-Host "      cd $dir" -ForegroundColor Yellow
Write-Host ""
Write-Host "      yarn && yarn start" -ForegroundColor Yellow
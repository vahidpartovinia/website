# website pushed by git-ftp 
# require git-ftp http://git-ftp.github.io/git-ftp/

git add thefile
git commit

git push origin master


 Setup
git config git-ftp.url "ftp://ftp.example.net:21/public_html"
git config git-ftp.user "ftp-user"
git config git-ftp.password "secr3t"

git ftp push

### if a git folder needs to re-set

# first make a folder localfolder/
# go to local folder in the terminal and run
git init
git remote add origin https://github.com/gituser/gitfolder
git pull origin master


# website pushed by git-ftp 
# require git-ftp http://git-ftp.github.io/git-ftp/

git add thefile
git commit

git push origin master


git ftp push -u probstat -p - ftp://ftp.datawisdom.ca/public_html


### if a git folder needs to re-set

# first make a folder localfolder/
# go to local folder in the terminal and run
git init
git remote add origin https://github.com/gituser/gitfolder
git pull origin master


git add .
read -p "Commit description: " desc
git commit -m "$desc"  
git pull
git push
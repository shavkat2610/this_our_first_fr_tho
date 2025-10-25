
sudo docker system prune -a
sudo docker image prune

sudo docker stop $(docker ps -a -q)
sudo docker rm $(docker ps -a -q)
sudo docker rmi $(docker images -a -q)
sudo docker volume prune
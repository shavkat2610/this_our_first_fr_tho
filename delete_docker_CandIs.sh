
docker system prune -a
docker image prune

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
docker volume prune


docker system prune -a
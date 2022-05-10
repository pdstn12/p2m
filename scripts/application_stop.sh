#!/bin/bash
#Stopping existing node servers
echo "Kill all docker containers"
docker container stop $(docker ps -q) 
docker container kill $(docker ps -q) 
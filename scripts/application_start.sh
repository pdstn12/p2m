#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/my-app

#navigate into our working directory where we have all our github files
cd /home/ec2-user/my-app


docker-compose up --build
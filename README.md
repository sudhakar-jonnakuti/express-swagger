# express-swagger

Local:
At local system: npm start
At local system restarts target node process when any of required files changes: npm start:dev

Docker:
docker-compose -f swagger.docker-compose.yml up -d
docker-compose -f swagger.docker-compose.yml down -v --rmi all

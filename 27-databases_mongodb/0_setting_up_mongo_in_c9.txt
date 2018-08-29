the instructions page:
https://community.c9.io/t/setting-up-mongodb/1717

terminal commands:
==================
sudo apt-get install -y mongodb-org
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod

to start mongodb in root folder where we can see the mongod file
./mongod

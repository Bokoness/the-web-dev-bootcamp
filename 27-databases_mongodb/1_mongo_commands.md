#Commands

    1. mongo - opens the mongodb shell (like mysql cli)
    2. help - list of basoc features in mongo
    3. show dbs - showing the databases (like show databases in mysql)
    4. use <database name> - creating a new database 1. if its doesnt exists. and if it is - using that database
    5. show collections - showing the collection (tables) in database

# CRUD

    1. insert - inserting data into a collection in database. 
        for example: db.dogs.insert({name:"rusty", breed:"Mutt"})
    2. find - like select in mysql
        * for example: db.dogs.find() - finds all data in collection
        * for example: db.dogs.find({name: rusty}); - will locate the dogs with name=rusy
    3. update - updates data.
    - for example: db.dogs.update({name: rusty}, {breed: "bonny"}) - updates rusy so all her data will be {breed: "bonny"}
        * for exmaple: db.dogs.update({name: rusty}, {$set: {breed:"bonny"}})
        *   updates only the breed to rusty, do not deletes data
    4. remove - removes data
        * for exmaple: db.dogs.remove({breed: rusty})
        

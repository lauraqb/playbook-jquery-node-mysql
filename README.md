# playbook-jquery-node-mysql
Node.js Development Environment with MySQL (Front-End: Javascript, Jquery, Bootstrap)

The purpose of this project is to facilitate the study and memorizing of an american football playbook.

1) First you need to insert the playbook list into a mysql database.
You can find the information to set your database in db_insert_plays.js
The real playbook is encrypted. If you have the secret key, then you can save the real one, in the opposite case, then you'll have an alternative playbook.
HOW TO RUN THE CODE 
 · With no secret key:> node db_insert_plays.js yourpassword
 · With the key:> node db_insert_plays.js yourpassword secretkey

2) Once you have all the plays in your database, then you can run the app:
> node app.js yourpassword

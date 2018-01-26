var CryptoJS = require("crypto-js");
var mysql = require('mysql');
var encrypted_playbook = "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";
var alternative_playbook = [ 
    [ 'RAMBO triple option derecha', 'option 1: FB, opt.2: QB (keep), opt.3: RB (pitch)' ],
    [ 'LIMBO triple option izquierda', 'option 1: FB, opt.2: QB (keep), opt.3: RB (pitch)' ],
    [ 'RAMBO sprint option derecha', 'option 1: FB, opt.2: QB (keep), opt.3: RB (pitch)' ],
    [ 'LIMBO sprint option izquierda', 'option 1: FB, opt.2: QB (keep), opt.3: RB (pitch)' ],
    [ 'RAMBO ISO derecha', '' ],    
    [ 'LIMBO ISO izquierda', '' ],
    [ 'RAMBO POWER derecha', '' ],
    [ 'RAMBO POWER izquierda', '' ],
    [ 'RAMBO POWER PASS derecha', 'ruta 1' ],
    [ 'LIMBO POWER PASS izquierda', '1' ],
    [ 'FLEX SWITCH PASS', 'doble 8' ],
    [ 'FLEX OUT PASS', 'doble 7' ]
];
var playbook;
var key = process.argv[3];
if(key != undefined) {
    var bytes  = CryptoJS.AES.decrypt(encrypted_playbook, key);
    try {
        playbook = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch(er) {
        console.log('Wrong key. The alternative playbook will be used instead');
        playbook = alternative_playbook;
    }
}
else {
    playbook = alternative_playbook;
}

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.argv[2],
  database: "db_playbook"
});


con.connect(function(err) {
    if (process.argv[2] ==undefined) {
        console.log("You must indicate the password as a console argument. Example: node db_insert_plays.js mypassword");
        process.exit();
    }
    if (err) throw err;

    console.log("Connected to the Playbook Database!");

    /*Reset Table*/
    var result = con.query("show tables like 'plays'", function(err, result) { return result });
    if (result == "") console.log("Table plays doesn't exist");
    else {
        con.query("DROP TABLE plays", function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
        });
    }
    con.query("CREATE TABLE plays(name VARCHAR(100), notes VARCHAR(100) NULL)", function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });


    /*Insert Data*/
    var sql = "INSERT INTO plays (name, notes) VALUES ?";

    con.query(sql, [playbook], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});


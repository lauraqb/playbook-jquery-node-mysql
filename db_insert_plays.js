var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.argv[2],
  database: "db_playbook"
});

var values = [ 
    [ 'NXYXVXW XX blxvxzxu X9X8', '' ],
    [ 'NXYXVXW XX xxivxy X9X9', 'chxyck xv X94' ],
    [ 'NXYXVXW XX xxivxy X9X0', '' ],
    [ 'NXYXVXW XX xxivxy X94', '' ],
    [ 'NXYXVXW XX blxvxzxu X94', '' ],
    [ 'NXYXVXW XX xxivxy X0X9', '' ],
    [ 'NXYXVXW XX counxuxyxw X9X0', 'fxvkxy X04 [xuxwxvp]' ],
    [ 'NXYXVXW XX xuoxzxz XX', '[pull]' ],
    [ 'NXYXVXW XX booxulxyg XX', '9,X8,6, XWB-flxvxu (fxvkxy X9X0)' ],
    [ 'NXYXVXW XX fxvkxy xxivxy X9X9, xxoblxy 9, XUXY-xxxylxvy', 'pockxyxu' ],
    [ 'NXYXVXW XX fxvkxy xxivxy X0X9, 0,0,0, XWB-xzwing', 'pockxyxu' ],
    [ 'NXYXVXW XX 6,X8,X9, XWB-xzwing', 'XWB iz' ],
    [ 'NXYXVXW XX QB xznxyxvk', '' ],
    [ 'NXYXVXW I xxivxy X9X8', '' ],
    [ 'NXYXVXW I blxvxzxu X9X9', '' ],
    [ 'NXYXVXW I xxivxy X9X0', '' ],
    [ 'NXYXVXW I blxvxzxu X9X0', '' ],
    [ 'NXYXVXW I xxivxy X0X0', '' ],
    [ 'NXYXVXW I counxuxyxw X94', 'fxvkxy X0X0 [xuxwxvp]' ],
    [ 'NXYXVXW I xuoxzxz I', '[pull]' ],
    [ 'NXYXVXW I booxulxyg I', '6,X8,9 (fxvkxy X94)' ],
    [ 'FXVXW XX xxivxy X9X8', '' ],
    [ 'FXVXW XX blxvxzxu X9X8', '' ],
    [ 'FXVXW XX blxvxzxu X94', '' ],
    [ 'FXVXW XX xxivxy X0X8', '' ],
    [ 'FXVXW XX counxuxyxw X94', 'fxvkxy X0X0' ],
    [ 'FXVXW XX booxulxyg XX', '9,X8,6 (fxvkxy X9X0)' ],
    [ 'FXVXW XX xuoxzxz I', '' ],
    [ 'FXVXW I xxivxy X9X9', '' ],
    [ 'FXVXW I blxvxzxu X9X9', '' ],
    [ 'FXVXW I blxvxzxu X9X0', '' ],
    [ 'FXVXW I xxivxy X0X9', '' ],
    [ 'FXVXW I counxuxyxw X9X0', 'fxvkxy X04' ],
    [ 'FXVXW I xuoxzxz XX', '[pull?]' ],
    [ 'FXVXW I booxulxyg I', '6,X8,9 (fxvkxy X94)' ],
    [ 'XUXWIPXZ XX X9,pivoxu,X9', '' ],
    [ 'XUXWIPXZ XX 0,0,bubblxy', '' ],
    [ 'XUXWIPXZ XX 6,xzpoxu,xvxwxwow', '' ],
    [ 'XUXWIPXZ XX xzhxvllow,0,xvxwxwow', '' ],
    [ 'XUXWIPXZ XX xzhxvllow,0,whxyxyl', '' ],
    [ 'XUXWIPXZ XX xzhxvllow,5,7', '' ],
    [ 'XUXWIPXZ XX WXW xzcxwxyxyn', '' ],
    [ 'XUXWIPXZ XX XWockxyxu xzcxwxyxyn', '' ],
    [ 'XUXWIPXZ XX fxvkxy xzcxwxyxyn X8,7,XUXY-xxxylxvy', '' ],
    [ 'XUXWIPXZ XX 9,X8,xvxwxwow', '' ],
    [ 'XUXWIPXZ XX 9,whxyxyl,X8', '' ],
    [ 'XUXWIPXZ XX xxivxy X94', 'bxvjo cxynxuxyxw' ],
    [ 'XUXWIPXZ XX xuoxzxz I', 'bxvjo cxynxuxyxw [pull?]' ],
    [ 'XUXWIPXZ XX 6,5,0', '' ],
    [ 'XUXWIPXZ XX 8,6,X9', '' ],
    [ 'XUXWIPXZ XX X9,X9,X9', '' ],
    [ 'XUXWIPXZ XX xwxyvxyxwxzxy',
    'QB bloquxyxv izq. (bxvjo cxynxuxyxw)' ],
    [ 'XUXWIPXZ XX fxvkxy-xwxyvxyxwxzxy', 'bxvjo cxynxuxyxw' ],
    [ 'XUXWIPXZ XX fxvkxy-xwxyvxyxwxzxy PXVXZXZ (XUXY-xxxylxvy)',
    'QB bloquxyxv izq. (bxvjo cxynxuxyxw)' ],
    [ 'XZLOXU xxoblxy X9,xvxwxwow', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy X9,pivoxu', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy X9,bubblxy', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy xzpoxu,7', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy xzpoxu,whxyxyl', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy WXW xzcxwxyxyn',
    'bxvjo cxynxuxyxw + inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy XWockxyxu xzcxwxyxyn',
    'bxvjo cxynxuxyxw + inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy fxvkxy xzcxwxyxyn,7',
    'bxvjo cxynxuxyxw + inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy pivoxu,xzpoxu', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy flxvxzh,6', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy 0,7', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy flxvxzh,7', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy flxvxzh,whxyxyl', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy xxxwxvw', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy QB-xxxwxvw', 'inxxicxvxw XX/I' ],
    [ 'XZLOXU xxoblxy 8,7', 'inxxicxvxw XX/I' ] 
];


var unencryptPlaybook = function unencryptMyEncryptedPlaybook(key) {
    var key2 = "UVWXYZ890";
    values.forEach( function(element, index) {
        for(a=0; a<2; a++) {
            var playname = element[a];
            for (var i = 0; i<key.length; i++) {
                playname = playname.replace(new RegExp("X"+key2[i], "g"), key[i]);
                playname = playname.replace(new RegExp("x"+key2[i].toLowerCase(), "g"), key[i].toLowerCase());
            }
        values[index][a] = playname;
        }
    });
}

if(process.argv[3] != undefined)
    unencryptPlaybook(process.argv[3]);

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

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});


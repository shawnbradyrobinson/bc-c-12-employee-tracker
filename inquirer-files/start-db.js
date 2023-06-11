const mysql = require("mysql2");


function startDB(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
        console.log(":)")
    );
}
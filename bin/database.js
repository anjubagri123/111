const  {
    createPool

} = require('mysql');


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "agency",
    connectionLimit: 10

})

pool.query(`INSERT INTO login(username, email ,password ,clickmetoremember)
VALUES ('gudu', 'bagrianju2002@gmail.com', 'angoor', 'true'));
    if (err) {

        return console.log(err);

    }

    return console.log(result);

})
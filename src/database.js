import mysql from 'mysql';

const connection = mysql.createConnection({
    host:'localhost',
    user:'hapi-server',
    password:'1234567890',
    database:'grocerylist',
});
//convt mysql query function to Promise
export const db = {
    connect: () => connection.connect(),
    query:(queryString, escapedValues) =>  // query func.
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) =>{
                if (error) reject(error)
                    resolve({ results, fields});
            })
        }),
    end:()=> connection.end(),

    //db wraper is created,, to use it, import it in the server
}
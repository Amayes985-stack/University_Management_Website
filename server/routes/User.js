const express = require("express");
const router  = express.Router();
const db = require("../config/db");




db.connect((err) => {

    if(err) throw err;
    console.log('Connected to MySQL Server!');
});


router.post('/register', (req,res)=>{
 

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let stmt = `INSERT INTO users(nom, email, password)
    VALUES(?,?, ?)`;

    const username = req.body.Name;
    const email = req.body.email
    const password = req.body.password;
    let user = [username, email, password];
    console.log(user)
  
    db.query(stmt, user,(err, result) =>{
      db.query("Select * from users", (err, result)=>{
        console.log(result)
       })    })
  
  })
  
  
router.post('/login', (req,res)=>{
   
  
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let stmt = `SELECT * FROM users WHERE email = ? AND PASSWORD = ? `;
    
    const username = req.body.Name;
    const email = req.body.email
    const password = req.body.password;
    let user = [email, password];
    //console.log(req.body)
    db.query(stmt, user,(err, result) =>{
      /*if (err) {
        res.send({err: err})
      }*/
      
      if (result.length>0){
        if(password == result[0].PASSWORD){

      
            res.json({loggedIn : true, username :result[0].nom});
        }else {
          console.log("AZERTY")

            res.json({loggedIn: false, message:"check your password / email"});
            res.send("check your password / email")
        }
      }else {
        res.json({loggedIn : false, message:"wrong username / wrong password"});
      }
    })
  
  })


module.exports = router;
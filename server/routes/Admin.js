const express = require("express");
const router  = express.Router();
const db = require("../config/db");




router.post('/aet', (req,res)=>{
 

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let stmt = `INSERT INTO personne(nom, prenom, adresse)
    VALUES(?,?, ?)`;
    

    const nom = req.body.nom;
    const prenom = req.body.prenom
    const adresse = req.body.adresse;
    const niveau = req.body.niveau;
    let user = [nom, prenom, adresse];
    console.log(user)
  
    db.query(stmt, user,(err, result) =>{

      db.query("select idPersonne from personne where nom = ? and prenom = ? and adresse= ?;",user,(err, result)=>{
        console.log(result[result.length-1].idPersonne);
        db.query("insert into etudiant(idEtudiant, niveau)  values(?,?);",[result[result.length-1].idPersonne,niveau]);
      })
      })

   
  
  })


  router.get("/aet", (req,res)=>{
    db.query("Select niveau, nom,prenom, adresse, niveau from personne, etudiant where personne.idPersonne = etudiant.idEtudiant;", (err, result)=>{
      console.log(result)    
      res.send(result)
    }
  )})
  
  router.get("/posts", (req,res)=>{
    db.query("Select niveau, count(niveau) from etudiant", (err, result)=>{
      console.log(result)    
      res.send(result)
    }
  )})
  

  router.post('/aex', (req,res)=>{
 

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let stmt = `INSERT INTO controle(jour, codeModule,niveau)
    VALUES(?,?, ?)`;
    
    
    const date =req.body.date;
    const module = req.body.module;
    const niveau = req.body.niveau;
    let user = [date, module, parseInt(niveau)];
    console.log(user)
    db.query(stmt, user,(err, result) =>{
     console.log(result)
    })
  
  })


  router.get("/aex", (req,res)=>{
    db.query("SELECT * FROM `controle`", (err, result)=>{
          res.send(result)
    }
  )})



router.post('/ap', (req,res)=>{
 

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let stmt = `INSERT INTO personne(nom, prenom, adresse)
    VALUES(?,?, ?)`;

    const nom = req.body.nom;
    const prenom = req.body.prenom
    const adresse = req.body.adresse;
    const grade = req.body.grade;
    let user = [nom, prenom, adresse];

    console.log(user)
  
    db.query(stmt, user,(err, result) =>{

      db.query("select idPersonne from personne where nom = ? and prenom = ? and adresse= ?;",user,(err, result)=>{
        db.query("insert into prof(idProf, grade)  values(?,?);",[result[result.length-1].idPersonne,grade]);
      })
      
      })
    })



router.get("/ap", (req,res)=>{

  db.query("Select idProf, nom,prenom, adresse, grade from personne, prof where personne.idPersonne = prof.idProf;", (err, result)=>{
    console.log(result)    
    res.send(result)
  })
 })




router.post('/am', (req,res)=>{
 

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  let stmt = `INSERT INTO module(nomModule,niveau)
  VALUES(?, ?)`;

  const module = req.body.module;
  const niveau = req.body.niveau
 
 
  let user = [module,parseInt(niveau)];
  console.log(user,  "tezz")

  db.query(stmt, user,(err, result) =>{
   console.log("tezz")
}
)  

})


router.get("/am", (req,res)=>{
  db.query("Select * from module", (err, result)=>{
        res.send(result)
  }
)})


router.post('/an', (req,res)=>{
 

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let stmt = `INSERT INTO note(idEtudiant, idControle, note, idModule)
    VALUES(?,?,?, ?)`;
    

    const id = parseInt(req.body.id);
    const examen = parseInt(req.body.examen)
    const note = parseInt(req.body.note);
    
    let user = [id, examen, note,parseInt(req.body.module)];

  
    db.query(stmt, user,(err, result) =>{

      
        
      console.log("c bon")
      
    })
  });


  router.post('/afp', (req,res)=>{
 

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      let stmt = `INSERT INTO teach(codeModule, codeEnseignant,numSalle, heur)
      VALUES(?,?,?,?)`;
      
  
      const id = parseInt(req.body.id);
      const prof = parseInt(req.body.prof)
      
      
      let user = [ prof, id, parseInt(req.body.salle), req.body.heur];
  
    console.log(user)
      db.query(stmt, user,(err, result) =>{
  
        
          
        console.log("c bon")
        
      })
    });


    router.post('/mpr', (req,res)=>{
 

      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        let stmt = `INSERT INTO suivre(etudiant, attendance,idModule)
        VALUES(?,?,?)`;
        
    
        const id = parseInt(req.body.id);
        const prof = parseInt(req.body.prof);

        
        
        let user = [ id,  parseInt(req.body.note)  , prof];
    
      console.log(user)
        db.query(stmt, user,(err, result) =>{
    
          
            
          console.log("c bon")
          
        })
      });
  

  router.get("/sn/:id", (req,res)=>{
    db.query("Select * from note where idEtudiant=? ",parseInt(req.params.id), (err, result)=>{
          res.send(result)
    }
  )})


  router.get("/mpr/:id", (req,res)=>{
    db.query("Select attendance, idModule from suivre where etudiant=? ",parseInt(req.params.id), (err, result)=>{
          res.send(result)
    }
  )})

  router.get("/sp/:id", (req,res)=>{
    db.query("Select * from personne where idPersonne=? ",parseInt(req.params.id), (err, result)=>{
          res.send(result)
    }
  )})


  router.get("/set/:id", (req,res)=>{
    db.query("Select * from etudiant where idEtudiant=? ",parseInt(req.params.id), (err, result)=>{
      console.log(result)   
      res.send(result)
    }
  )})


  router.get("/afp/:id", (req,res)=>{
    db.query("Select * from teach where codeEnseignant = ?",parseInt(req.params.id), (err, result)=>{
      console.log(result)    
      res.send(result)
    }
  )})

  router.get("/sp/:id", (req,res)=>{
    db.query("Select * from personne where idPersonne=? ",parseInt(req.params.id), (err, result)=>{
          res.send(result)
    }
  )})


  router.get("/ap/:id", (req,res)=>{
    db.query("Select * from prof where idProf=? ",parseInt(req.params.id), (err, result)=>{
      console.log(result)   
      res.send(result)
    }
  )})


//modifier etudiant
router.put("/met", (req,res)=>{
  const id = req.body.id;
  const nom = req.body.nom;
    const prenom = req.body.prenom
    const adresse = req.body.adresse;
    const niveau = req.body.niveau;

    let user = [nom, prenom, adresse, parseInt(id)];
 console.log(user)

 db.query(
 "update  personne   set `nom` = ?, `prenom` = ?, `adresse` =  ? where idPersonne = ?",user, (err, result)=>{
    res.send(result)

    db.query("update etudiant set niveau = ? where idEtudiant= ?",[niveau,parseInt(id)], (err, result)=>{
     console.log(result)
    })
    
  }

);


})



//modifier note



            router.put("/mnote", (req,res)=>{
              const id = req.body.id;
              const module = req.body.module;
              
                const attendance = req.body.grade;
        const user =[attendance, id, module]
            
             db.query(
             "update  suivre   set `attendance` = ? where etudiant = ? and  idModule=?",user, (err, result)=>{
                res.send(result)
                
              }
            
            );
            
            
            })

//supprmier etudiant
router.delete("/set/:user", (req,res)=>{
  element = req.params.user;
  console.log(element)
  db.query("delete  from personne where idPersonne= ?",element)
  })

//modifier prof
router.put("/mp", (req,res)=>{
  const id = req.body.id;
  const nom = req.body.nom;
    const prenom = req.body.prenom
    const adresse = req.body.adresse;
    const grade = req.body.grade;

    let user = [nom, prenom, adresse, parseInt(id)];
 console.log(user)

 db.query(
 "update  personne   set `nom` = ?, `prenom` = ?, `adresse` =  ? where idPersonne = ?",user, (err, result)=>{
    res.send(result)

    db.query("update prof set grade = ? where idProf= ?",[grade,parseInt(id)], (err, result)=>{
     console.log(result)
    })
    
  }

);


})

//suprimer prof

router.delete("/sp/:user", (req,res)=>{
  element = req.params.user;
  console.log(element)
  db.query("delete  from personne where idPersonne= ?",element)
  })

//modifier module

router.put("/mm", (req,res)=>{
  
  const id = req.body.id;
  const code= req.body.code;
 
    const niveau = req.body.niveau;

    let user = [code, parseInt(niveau),parseInt(id)];
 console.log(user)

 db.query(
 "update  module   set `codeModule` = ?, `niveau` = ? where idModule = ?",user, (err, result)=>{
    res.send(result)

    db.query("Select * from etudiant", (err, result)=>{
     console.log(result)
    })
    
  }

);


})

//supprimer module

router.delete("/sm/:user", (req,res)=>{
  element = req.params.user;
  console.log(element)
  db.query("delete  from module where idModule= ?",element)
  })

//modier examen
router.put("/mex", (req,res)=>{
  const id = req.body.id;
  const date = req.body.date;
  const module = req.body.module;
    const niveau = req.body.niveau;

    let user = [date, parseInt(module),parseInt(niveau),parseInt(id)];
 console.log(user)

 db.query(
 "update  controle   set `jour` = ?, `codeModule` = ?,  `niveau` = ? where idControle = ?",user, (err, result)=>{
    res.send(result)

    
  }

);


})
// supprimer examen

router.delete("/sex/:user", (req,res)=>{
  element = req.params.user;
  console.log(element)
  db.query("delete  from controle where idControle= ?",element)
  })


module.exports = router;
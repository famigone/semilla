const mongoose = require('mongoose')
const dbx = require("../models");
const Role = dbx.role; 

mongoose
    .connect('mongodb://127.0.0.1:27017/semilla', { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
      })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection


function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
  

module.exports = db
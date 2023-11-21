const express = require('express');
const app = express();
const port = 3000;
//app.get('/', function(req, res) {
//    return res.end('Bienvenido a mi pagina Kikeriveros');
//});
const users = [
    {name:'Jorge', lastname: 'riveros'},
    {name: 'Andrea', lastname: 'riveros'},
    {name: 'Angel', lastname: 'riveros'},
    {name: 'Alejandra', lastname: 'riveros'},
    {name: 'Natalia', lastname: 'riveros'},
    {name: 'Juan', lastname: 'riveros'}
];
app.get('/users', function(req, res){
    const foundUsers = []
    users.forEach((user) =>{
    if (user.lastname === req.query.lastname){
        foundUsers.push(user)
    }
    });
    return res.send(foundUsers);
});
//app.get('/', function(req, res){
//    return res.end(users)
//    console.log(users)
//});

app.get('/users/:id', function(req, res) {
   const index = req.params.id;
   return res.send(users[index]);
});

app.listen(port, function() {
 console.log(`la aplicacion esta en uso`);
});


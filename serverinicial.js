const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', function(req, res) {
return res.end('Bienvenido a mi pagina Kikeriveros');
});

const users = [
    {name:'Jorge', lastname: 'riveros'},
    {name: 'Andrea', lastname: 'riveros'},
    {name: 'Angel', lastname: 'riveros'},
    {name: 'Alejandra', lastname: 'riveros'},
    {name: 'Natalia', lastname: 'riveros'},
    {name: 'Juan', lastname: 'riveros'}
];
app.get('/users', function(req, res){
    const foundUsers = users
    users.forEach((user) =>{
    if (user.lastname === req.query.lastname){
        foundUsers.push(user)
    }
    });
    return res.send(foundUsers);
});

app.get('/users', function(req, res) {
    return res.end(users)
     console.log(users)
});

app.get('/users/:id', function(req, res) {
   const index = req.params.id;
   return res.send(users[index]);
});

app.post('/users', function(req, res){
    console.log(req.body);
    req.body.forEach((user)=>{
    users.push(user)
    res.status(201)
    })
    return res.send('create new users')
});

app.put('/users/:id', function(req, res) {
  console.log(req.body);
  const index = req.params.id;
  users[index] = req.body;
  return res.status(201).send({user:users[index],status:'User update'})
});

app.delete('/users/:id', function(req, res){
    const index = req.params.id;
    users.splice(index, 1)
    console.log(req.body)
    return res.status(201).send({user:users[index],status: 'User delete'});
});
 
app.listen(port, function() {
 console.log(`la aplicacion esta en uso`);
});




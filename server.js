//!--server file--//

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;




app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client')));

//http browser fetch
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username.toLowerCase() === 'kranti' && password === 'Forts@45') {
    //console.log(" Login success");
    res.redirect('/home');
  } else {
    //console.log(" Invalid login");
    res.send('<h2>Invalid credentials. <a href="/">Try again</a></h2>');
  }
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'contact.html'));
});


for (let i = 1; i <= 10; i++) {
  app.get(`/fort${i}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'client', `fort${i}.html`));
  });
}

app.get('/error',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"client","error.html"))
})

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});

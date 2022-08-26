const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.get('/Resume', (req, res) => {
   res.sendFile(path.join(publicPath, 'resume.html'));
});
app.get('/Gallary', (req, res) => {
   res.sendFile(path.join(publicPath, 'gallary.html'));
});
app.get('/Blog', (req, res) => {
   res.sendFile(path.join(publicPath, 'blog.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});
const express = require('express');
const userRoutes = require('./routes/userRoute');
const db = require('./config/databaseConnection');
const cookieParser = require('cookie-parser');
//const {db} = require('./models');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3030;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

app.use('/users', userRoutes);

db.authenticate()
.then(() => {
    console.log('conexao com a db sucesso');
}).catch((err) => {
    console.log(err)
});

db.sync()
.then(() => {
    console.log('db sync');
}).catch((err) => {
    console.log(err)
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const express = require('express');
const userRoutes = require('./routes/userRoute');
// const sequelize = require('./config/databaseConnection');
const {sequelize} = require('./models');


const app = express();
const port = 3030;
app.use(express.json());
app.use('/users', userRoutes);

sequelize.authenticate()
.then(() => {
    console.log('conexao com a sequelize sucesso');
}).catch((err) => {
    console.log(err)
});

sequelize.sync()
.then(() => {
    console.log('sequelize sync');
}).catch((err) => {
    console.log(err)
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
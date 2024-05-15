const User = require('../models/User');

const userController = {
    getAll: async (req, res) => {
        console.log('user metodo getall')
        try {
            const users = await User.findAll();
            console.log(users);
            res.status(200).json(users);
          } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Error retrieving users' });
          }

    },

    createUser: async (req, res) => {
        console.log('user create function')
        /* try{
            const {name, email, password} = req.body;
            const user = {name, email, password};
            console.log(user);
            await User.create(user);
            res.status(201).json(user.id);
        }catch(err){
            console.log(err);
            res.status(500).json({err: 'internal error'})
        } */
        try {
            const { name, email, password } = req.body;
        
            // Hash password before saving (assuming you have bcrypt installed)
            /* const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds); */
        
            const newUser = { name, email, password};
            const createdUser = await User.create(newUser);
        
            // Exclude password before sending response
            const responseUser = { ...createdUser.dataValues };
            delete responseUser.password;
        
            res.status(201).json(responseUser);
          } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Error creating user' });
          }
    }
}

module.exports = userController;
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const expire = 1800;

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

    getOne: async (req, res) => {
      const userId = req.params.id;
      try {
        const user = await User.findByPk(userId);
        if(!user){
          res.status(404).json({message : 'User not found'})
          return;
        }
        res.status(200).json(user);
      } catch (err) {
        console.log(err.message);
        res.status(500).json({message : 'Internal error'})
        
      }
    },

    updateUser: async (req, res) => {
      const id = req.params.id;
      const updateData = req.body; // Assuming request body contains update data
    
      try {
        const user = await User.findByPk(id);
    
        if (!user) {
          return res.status(404).json('User not found');
        }
    
        // Update user data with validated updateData
        await user.update(updateData); 
    
        // Respond with updated user data (optional)
        res.status(200).json(user);
    
      } catch (err) {
        console.error(err.message);
        res.status(500).json('Internal server error');
      }
    },
    

    deleteUser: async (req, res) => {
      const id = req.params.id;
      try {

        const user = await User.findByPk(id);

        if(user){
          await user.destroy()
          res.status(200).json({message: 'User deleted sucessfully'});
        }else{
          res.status(404).json('user not found')
        }

        
      } catch (err) {
        console.log(err.message);
        res.status(500).json('internal error');
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
        
            //Hash password before saving (assuming you have bcrypt installed)
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
    }, 

    login: async(req, res) => {

      console.log('login request recebido');

      const { email, password } = req.body; // Assuming login data is in request body
    
      try {
        // Find user by username (replace with your user model logic)
        const user = await User.findOne({ where: { email } });
    
        if (!user) {
          return res.status(404).json({ message: 'user not exist' });
        }
    
        // Validate password (replace with secure password hashing logic)
        const isValidPassword = await bcrypt.compare(password, user.password); // Assuming password is hashed
    
        if (!isValidPassword) {
          return res.status(401).json({ message: 'Invalid username or password' });
          console.log('password not valid');
        }
    
        // Login successful (replace with session management or token generation)
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: expire });
        res.cookie('token',token, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 1800000
        })
        res.status(200).json({ message: 'Login successful'}); 
        console.log('login success');
    
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
    
}

module.exports = userController;
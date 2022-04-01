import User from '../models/User.js';

const getAllUsers = (req, res, next) => {
  User.find().exec((err, data)=>{
    if(err) { return next(err); }

    res.json(data);
  })
};

export { getAllUsers };
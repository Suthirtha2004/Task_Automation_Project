const validateRoles = (...allowedRoles)=>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.json({message : "Access denied"});
        }
        next();
    };

};

module.exports = validateRoles;
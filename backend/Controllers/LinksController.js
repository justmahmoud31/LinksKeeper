const LinksSchemaValidator = require('../Validators/linkValidator.js');
const Link = require('../Models/links.js');
const User = require('../Models/users.js');
const getAllLinks = async (req, res) => {
    if (req.query.authLink) {
        return res.send("<a href='http://localhost:3000/api/discord/redirect'>Auth with Discord</a>");
    }
    try {
        const allLinks = await Link.findAll({ where: { ispublic: true } });
        res.status(200).json({ "Status": "Success", "Message": "Public Links", "data": allLinks });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
const getUsersLinks = async(req,res)=>{
    try{
     const {userid} = req.params;
     const existingUser  = await User.findByPk(userid);
     if(!existingUser){
        return res.status(404).json({"Error":"Not Found","Message":"User Not Found"});
     }
     const UsersLinks = await Link.findAll({where:{userid}});
     res.status(200).json({"Status":"Found","Message":"Uesrs Links","data":UsersLinks})
    }catch(err){
        res.status(500).json({ error: 'Internal server error' });
    }
}

const addLink = async (req, res) => {
    try {
        const { userid } = req.params;
        const { linktitle, linkurl, linkdescription, categoryid, ispublic } = req.body;
        const { error } = LinksSchemaValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ "Status": "Error", "Message": error.details[0].message });
        }
        const link = await Link.create({
            linktitle,
            linkurl,
            linkdescription,
            categoryid,
            ispublic,
            userid
        });
        res.status(201).json({ "Status": "Success", "Link": link });

    } catch (err) {
        res.status(500).json({ "Status": "Error", "Message": "An error occurred while creating the link", "Error": err });
    }
}


module.exports = { getAllLinks, addLink,getUsersLinks };

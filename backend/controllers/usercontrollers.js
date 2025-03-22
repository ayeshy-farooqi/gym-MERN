import usermodelData from "../models/users.js";
export const createuser = async (req, res) => {
    try {
      const user = new usermodelData(req.body);
  
      await user.save();
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


export const fetchusers = async (req, res) => {

try {
  const fetch = await usermodelData.find()
  res.status(200).json(fetch);
} catch (error) {
  res.status(500).json({ message: error.message });
}
}

export const deleteuser = async (req,res) =>
{
  try {
    const user = await usermodelData.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(404).json({message: "user not found"})
    }
    else{
      return res.status(200).json({message: "user deleted!!!!"})

    }
  } catch (error) {
   res.status(500).json({ message: error.message });
    
  }  
}

export const updateuser = async (req,res) => {
  try {
    const updateduser = await usermodelData.findByIdAndUpdate(req.params.id,

      req.body, {
        new:true,
      }
     
    )

    if(!updateduser){
      return res.status(404).json({message: "user not found"})
    }
    else{
      return res.status(200).json({message: "user updated"})
    }
  } catch (error) {
   res.status(500).json({ message: error.message });
  }

}
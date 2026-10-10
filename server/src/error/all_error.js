export const errorhandling =(err,res)=>{
   if(err.name==="ValidationError") return res.status(400).send({status:false,message:err.message});
   if(err.name==="CasteError") return res.status(400).send({status:false,message:"Invalid Id format"});
   if(err.code===11000) return res.status(409).send({status:false,message:"Duplicate data already exists"});
   if(err.name==="JsonWebTokenError") return res.status(401).send({status:false,message:"Invalid token"});
   if(err.name==="TokenExpiredError") return res.status(401).send({status:false,message:"Token expired"});
   if(err.name==="unauthorizedError") return res.status(401).send({status:false,message:"unauthorized access"});
   if(err.status===403) return res.status(403).send({status:false,message:"Access forbidden"});
   if(err.name===404) return res.status(404).send({status:false,message:"Resources not found"});
   if(err.name===405) return res.status(405).send({status:false,message:"Method not allowed"});
   if(err.name===409) return res.status(409).send({status:false,message:err.message});
   if(err.name===429) return res.status(429).send({status:false,message:"Too many requests"});

   return res.status(500).send({status:false, message: err.message});
}


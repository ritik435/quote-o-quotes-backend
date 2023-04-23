import Post from "../model/postModel.js";
import ApiResponse from "../model/apiResponseModel.js";
export var home=async (req,res)=>{
    res.send("<h1>this is homepage</h1>");
}

export var getAllPost=async (req,res)=>{
  const posts = await Post.find({});
  const apiResponse=new ApiResponse({"status":200, "description":"succesfully done","result":posts})
  try {
    res.send(apiResponse);
  } catch (error) {
    res.send(new ApiResponse({"status":500, "description":"unsuccesfully done"}))
  }
}


export var getPost=async (req,res)=>{
  const id = req.query.id;
  console.log(id)
  const post = await Post.findById(id);
  const apiResponse=new ApiResponse({"status":200, "description":"succesfully done","result":post})
  if(post!=null){

    try {
      res.send(apiResponse);
    } catch (error) {
      res.json({"status":500, "description":"Coulnot able to find "})
    }
  }else{
    res.json({"status":404, "description":"Could not found any post related to this userId"})
  }
}


export var postPost=async(req,res)=>{
    console.log(req.body);
    const post = new Post(req.body);
    const apiResponse=new ApiResponse({"status":200, "description":"succesfully done","result":post})

    try {
      await post.save();
      res.send(apiResponse);
    } catch (error) {
      res.json({"status":500, "description":"Quote is not posted"});
    }
}


export var deletePost=async (req,res)=>{
  const id = req.query.id;
  console.log(id)
  const post=await Post.findByIdAndDelete(id);
  // const apiResponse=new ApiResponse({"status":200, "description":`Post is successfully deleted for ${id}`});
  if(post!=null){
   
  try {
    res.json({"status":200, "description":`Post is successfully deleted for ${id}`});
  } catch (error) {
    res.json({"status":500, "description":"Could not find this post"});
  }
}else{
  res.json({"status":404, "description":"Could not found any post related to this userId"});
}
}


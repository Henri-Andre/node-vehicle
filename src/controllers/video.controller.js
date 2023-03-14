import { VideosDAO } from "../daos/video.dao.js"

const addVideo = async (req, res) => {
  const {name , typeofvideo, date } = req.body


    const response = await VideosDAO.create({ 
                                        name, 
                                        typeofvideo, 
                                        date, 
                                      });
    if(response){
     return res.status(403).json({message: response })
    }
  
    res.json({ message: 'Video add', data: response });
  };

  const dltVideo =  (req,res)=>{
    const id = req.params.id
    const video = VideosDAO.dlt(id)
    if(!video){
        res.status(404).json({message:`Video ${id} is delete`})
    }
}


  export const VideoController = {
    addVideo,
    dltVideo
  }
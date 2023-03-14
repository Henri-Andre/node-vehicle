import { VideoDAO } from "../daos/video.dao";



const addVideo = async (req, res) => {
    const {name, typeofvideo, date}= req.body

      const response = await VideoDAO.create({
                                            name,
                                            typeofvideo,
                                            date
      });
      if(response){
       return res.status(403).json({message: response })
      }
                                     
      res.json({ message: 'User updated', data: user, token });
    };



export const VideoController = {
   addVideo
};
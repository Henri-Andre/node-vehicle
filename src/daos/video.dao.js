import Videos from "../models/model_videos";

const createVideo  = async ({name,typeofvideo, date}) => {
    try {
  
      const user = await Videos.create({
                                       name,  
                                       typeofvideo,
                                       date
                                      });
    } catch (err) {
      console.error(`Error creating user: ${err.message}`);
      return null;
    }
  };


  export const VideoDAO = {
    createVideo
  };
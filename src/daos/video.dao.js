import Videos from "../models/model_videos.js";




const create  = async ({name , typeofvideo, date }) => {
  try {

    const video = await Videos.create({ 
                                    name , 
                                    typeofvideo, 
                                    date 
                                    });
    return video;
  } catch (err) {
    console.error(`Error creating video: ${err.message}`);
    return null;
  }
};


const dlt = (id)=>{
    Videos.findByPk(id)
        .then(video => {
            video.destroy()
        })
  }
  



export const VideosDAO = {
  create: create,
  dlt
};


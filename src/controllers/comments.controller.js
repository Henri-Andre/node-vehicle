import { CommentDAO} from "../daos/comment.dao.js";


// Create Comment
const createComment = async (req, res) => {
    const {comment , user_id, vehicle_id} = req.body

    if (!comment || !user_id || !vehicle_id ) {
      return res.status(400).json({ message: ' request is not complet' });
      }
      const comments = await CommentDAO.create({ 
                                          comment, 
                                          user_id, 
                                          vehicle_id
                                        });

      if(comments){
       return res.status(403).json({message: comments })
      }
    
      res.json({ message: 'Vehicle add', data: comments });
    };



// All Comments
    const readAllComments = async (req, res) => {
        try {
          const comments = await CommentDAO.readAll();
          res.status(200).json({ data:comments});
        } catch (e) {
          res.status(500).json({ message: "internal_server_error" });
        }
      };


    export const  CommentsController = {
        createComment,
        readAllComments
    }
import Express  from "express";
import * as postController from "../controller/postsController.js"
const router=Express.Router();

router.get('/',postController.home);
router.get('/get-posts',postController.getAllPost);
router.get('/post',postController.getPost);
router.post('/add-post',postController.postPost);
router.delete('/delete-post',postController.deletePost);


export default router;
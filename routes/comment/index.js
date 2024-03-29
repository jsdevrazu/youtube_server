import { Router } from 'express'
import { addComment, deleteComment, getComments } from '../../controllers/comment/index.js';
import { isAuthenticated } from '../../middleware/auth.js';


const router = Router();

router.post("/create", isAuthenticated, addComment)
router.delete("/:id", isAuthenticated, deleteComment)
router.get("/:id", getComments)

export default router;
const express = require('express')
const { createComment, updateComment, deleteComment, postReply } = require('../controllers/commentController')
const { createPost, updatePost, deletePost, getPost } = require('../controllers/postController')
const { createUser, login } = require('../controllers/userController')
const { objectIdCheck, validateToken, updateAuth } = require('../middelWares/middelWare')

const router = express.Router()

router.post("/createUser", createUser)

router.post("/login",login)

router.post("/postImg", objectIdCheck, validateToken, createPost)

router.get("/getPost", getPost)

router.put("/updatePost", objectIdCheck, validateToken, updateAuth, updatePost)

router.delete("/deletePost", objectIdCheck, validateToken, deletePost)

router.post("/postComment", objectIdCheck, validateToken, createComment)

router.delete("/deleteComment", objectIdCheck, validateToken, deleteComment)

router.put("/updateComment", objectIdCheck, validateToken, updateAuth, updateComment)

router.post("/postReply", objectIdCheck, postReply)


module.exports = router
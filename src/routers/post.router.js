import Router from "express"
import Post from "../model/post.js"

const router = Router()

router.get("/post", async (req, res) => {
  let posts = await Post.findAll()
  posts = await posts.map((post) => post.dataValues)
  res.render("index", { posts: posts })
})

router.get("/post/create", (req, res) => {
  res.render("cadrastro")
})

router.post("/post/create", async (req, res) => {
  const body = await req.body
  Post.create(body)
    .then((params) => {
      console.log(`> Create a new post - id: ${params.dataValues.id}`)
      res.status(201).redirect("/post")
    })
    .catch((err) => {
      console.log(`> Err: ${err}`)
    })
})

router.get("/post/:id", async (req, res) => {
  const idPost = req.params.id
  let posts = await Post.findAll({ where: { id: idPost } })
  const post = posts.map((post) => post.dataValues)
  res.render("index", { posts: post })
})

router.get("/post/delete/:id", (req, res) => {
  const idPost = req.params.id
  Post.destroy({ where: { id: idPost } })
    .then((params) => {
      console.log(`> Remove a post - id: ${idPost}`)
      res.status(302).redirect("/post")
    })
    .catch((err) => {
      console.log(`> Err: ${err}`)
    })
})

router.get("/post/edit/:id", async (req, res) => {
  const idPost = req.params.id
  let posts = await Post.findAll({ where: { id: idPost } })
  const post = posts.map((post) => post.dataValues)
  res.render("alterar", { post: post })
})

router.post("/post/update", async (req, res) => {
  const body = await req.body
  console.log(body)
  Post.update(body, { where: { id: body.id } })
    .then((params) => {
      console.log(`> Update a post - id: ${body.id}`)
      res.status(200).redirect("/post")
    })
    .catch((err) => {
      console.log(`> Err: ${err}`)
    })
})
export default router

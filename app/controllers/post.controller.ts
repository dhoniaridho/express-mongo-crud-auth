import {Request, Response} from "express";
import Post from "../models/post";

class PostController {
  static async index(req: Request, res: Response) {
    let data = await Post.find();
    return res.json(data);
  }

  static async show(req: Request, res: Response) {
    let data = await Post.findOne({_id: req.params.id});
    if (!data) return res.status(404).json("not found");
    return res.json(data);
  }
  static async create(req: Request, res: Response) {
    try {
      const data = await Post.create({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
      });
      return res.status(201).json({
        message: "created",
        data: data,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const data = await Post.updateOne(
        {_id: req.params.id},
        {
          title: req.body.title,
          body: req.body.body,
          author: req.body.author,
        }
      );
      return res.status(201).json({
        message: "created",
        data: data,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      await Post.findByIdAndDelete({_id: req.params.id});
      return res.json("post deleted");
    } catch (error: any) {
        return res.status(404).json(error.message)
    }
  }
}

export default PostController;

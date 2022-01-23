import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postModel.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
    console.log(`createpost backend ${postMessages}`);
  } catch (error) {
    res.sttus(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  // res.send('post Creation this from backend');
  const post = req.body;
  console.log(`createpost backend ${post}`);

  const newPost = new PostMessage(post);
  console.log(`createpost backend ${newPost}`);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;

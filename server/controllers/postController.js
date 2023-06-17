//test
// export const addPost = (req, res) =>{
//     res.json("from controller")
// }


import { Post } from "../model/Post.js";


// export const getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

export const getPosts = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};

    if (category) {
      query = { category: category };
    }

    const posts = await Post.find(query)
      .populate('createdBy', 'username')
      .lean();

    if (posts.length === 0) {
      return res.status(404).json({ error: 'No posts found for the specified category.' });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


export const getPost = async (req, res) => {
  try {
    const postId = req.params.id; // Retrieve the post ID from the request parameters

    // Replace the following code with your MongoDB querying logic
    const post = await Post.findById(postId)
      .populate('createdBy', 'username')
      .lean();

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const addPost = (req, res) => {
  res.json("from controller")
}
export const deletePost = (req, res) => {
  res.json("from controller")
}
export const updatePost = (req, res) => {
  res.json("from controller")
}
const prisma = require("../prisma/index");

exports.createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
      },
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getAllUsersPosts = async (req, res) => {
  try {
    const post = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.body.id,
      },
    });

    user.password = undefined;

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ post, message: "post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

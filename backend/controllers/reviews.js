import Review from "../models/ReviewModel.js";

export const postReview = (req, res) => {
  const review = req.body;

  const newReview = new Review({
    title: review.title,
    author: review.author,
    content: review.content,
    user_id: review.user_id,
    business: review.business,
    stars: review.stars,
    date: review.date,
  });

  newReview.save();

  res.json({ message: "success", status: 200 });
};

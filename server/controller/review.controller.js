import Review from "../models/review.model.js";

export async function createReview(req, res) {
    try {
        const review = new Review(req.body)
        await review.save()
        res.status(201).send(review);

    } catch (e) {
        res.status(400).send(e)
    }
}

export async function getAllReviews(req, res) {
    try {
        const reviews = await Review.find({});
        res.send(reviews)
    } catch(e) {
        res.status(500).send(e)
    }
}

export async function getReviewById(req, res) {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
          return res.status(404).send();
        }
        res.send(review);
      } catch (e) {
        res.status(500).send(e);
      }
}

export async function updateReview(req, res) {
    try {
      const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!review) {
        return res.status(404).send();
      }
      res.send(review);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  export async function deleteReview(req, res) {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
      if (!review) {
        return res.status(404).send();
      }
      res.status(200).send(review);
    } catch (e) {
      res.status(500).send(e);
    }
  }
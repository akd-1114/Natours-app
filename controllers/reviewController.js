const Review = require('./../models/reviewModel');
// const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = factory.createOne(Review);
exports.getAllReviews = factory.getAll(Review);
exports.getReviews = factory.getOne(Review);
exports.deleteReviews = factory.deleteOne(Review);
exports.updateReviews = factory.updateOne(Review);

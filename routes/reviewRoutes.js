const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    reviewController.setTourUserIds,
    authController.restrictTo('user'),
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReviews)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReviews
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReviews
  );

module.exports = router;

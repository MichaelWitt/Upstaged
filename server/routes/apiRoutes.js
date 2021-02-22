const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/user', userController.findAll);

router.get('/user/:id', userController.findUser);

// router.put('/updatePoints', userController.updatePoints);
// .get(userController.findAll);

// router.route('/books/')
//   .get(booksController.findAll)
//   .post(booksController.create);

// router
//   .route('/books/:id')
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

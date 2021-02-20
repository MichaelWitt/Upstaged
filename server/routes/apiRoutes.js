const router = require('express').Router();
const userController = require('../controllers/userController');
const booksController = require('../controllers/userController');

router.get('/ping', (req, res) => {
  res.send('pong')
})

router.get('/getUser', userController.findAll)
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

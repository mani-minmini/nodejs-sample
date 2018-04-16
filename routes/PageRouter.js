const express = require('express');

const toastr = require('toastr');

const app = express();
const PageRouter = express.Router();


PageRouter.route('/').get(function (req, res) {
  res.render('index', {is_active: "/"});
});

PageRouter.route('/courses').get(function (req, res) {
  res.render('courses', {is_active: "/courses"});
});

PageRouter.route('/categories').get(function (req, res) {
  res.render('categories', {is_active: "/categories"});
});

PageRouter.route('/admin').get(function (req, res) {
  // toastr.success('Have fun storming the castle!', 'Miracle Max Says');
  res.render('admin', {is_active: "/admin"});
});

module.exports = PageRouter;

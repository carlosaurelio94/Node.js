const express = require('express');

const UsersService = require('./../services/users.service');

const router = express.Router()
const service = new UsersService();


router.get('/', (req, res) => {
  let limit = req.query.limit?req.query.limit:2;
  let offset = req.query.offset?req.query.offset:1;

  service.generate(limit);
  users = service.find()
  res.json(users);
})

module.exports = router

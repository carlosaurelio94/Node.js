/*
const express = require('express');

const UsersService = require('./../services/users.service');

const router = express.Router()
const service = new UsersService();


router.get('/', (req, res) => {
  let limit = req.query.limit?req.query.limit:2;
  let offset = req.query.offset?req.query.offset:1;

  service.generate(limit, offset);
  const users = service.find()
  res.json(users);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = service.findOne(id);
  res.status(user.status).json(user.data);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;
  const user = service.update(id, body)
  res.json(user)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
});

module.exports = router
*/

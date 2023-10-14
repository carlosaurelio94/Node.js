/*
const express = require('express');

const StoresService = require('./../services/stores.service');

const router = express.Router()
const service = new StoresService();


router.get('/', (req, res) => {
  const stores = service.find();
  res.json(stores);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const store = service.findOne(id);
  res.status(store.status).json(store.data);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;
  const store = service.update(id, body)
  res.json(store)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const rta = service.delete(id)
  res.json(rta)
});

module.exports = router
*/

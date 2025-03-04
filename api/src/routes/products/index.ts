import e, { Router } from 'express';

// products endpoints
const router = Router()

router.get('/', (req, res) => {
  res.send('List of products')
})

router.get('/:id', (req, res) => {
  console.log(req.params)
  res.send('A products')
})

router.post('/', (req, res) => {
  res.send('New Product created')
})

export default router;
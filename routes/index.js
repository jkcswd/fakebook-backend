import express from "express";
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'This is the FakeBook API index page. Please connect to an endpoint with data.' });
});

export default router;
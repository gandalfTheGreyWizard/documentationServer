const express = require('express');
const router = express.Router();
const renderMarkdown = require('../controllers/renderMarkdown')
router.get("/", renderMarkdown.renderToHtml);
module.exports = router;

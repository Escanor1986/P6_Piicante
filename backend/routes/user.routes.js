const express = require('express');
const router = require('express').Router();
const jwtAuth = require('../config/auth');
const raterLimit = require("express-rate-limit");

const limiter = raterLimit({
    windowMs: 6 * 60 * 1000, // 6 minutes
    max: 60, // 60 essais
});

const userCtrl = require("../controllers/user.controller");

router.post("/signup", userCtrl.signup);
router.post("/login", limiter, userCtrl.login);

// Route pour sauvegarder une entrée sur le site (avec express-session) par exemple
router.get("/", (req, res, next) => {
    if (req.session.views) {
        req.session.views += 1;
    } else {
        req.session.views = 1;
    }
    res.end();
});

module.exports = router;
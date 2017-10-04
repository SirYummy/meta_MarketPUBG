#!/usr/bin/env nodejs
var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic('MarketPUBG/public', {'index': 'waiting.html'}))
app.listen(8080)

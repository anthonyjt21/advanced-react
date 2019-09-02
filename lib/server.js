import express from 'express';
import config from './config';
//const express = require('express');
//const config = require('./config');
import serverRender from './serverRender';
//const serverRender = require('./serverRender');

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', {initialContent });
});

app.listen(config.port, function listerHandler(){
  console.info(`Running on ${config.port}`);
});

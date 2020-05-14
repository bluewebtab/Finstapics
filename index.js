const express = require('express')

express().listen((process.env.PORT || 3000), function(){
    console.log('listening on *:3000');
  });
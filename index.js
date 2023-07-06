//import express from 'express';
//import argon2 from 'argon2';
//import dotenv from 'dotenv';

const express = require('express');

const app = express();

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})
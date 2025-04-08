const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 400;
let snake = [{ x: 160, y: 200 }];
let food = {
  x: Math.floor(Math.random() * (canvasSize / box)) * box,
  y: Math.floor(Math.random() * (canvasSize / box)) * box
};
let direction = "RIGHT";
let gameInterval;
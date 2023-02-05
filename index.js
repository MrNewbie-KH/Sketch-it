"use strict";
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
const rainbowBtn = document.querySelector(".rainbow");
const removeLines = document.querySelector(".remove-lines");
const colorBtn = document.getElementById("colorpicker");
const slider = document.querySelector(".slider");
const gridSize = document.querySelector(".grid-size");
const gridColor = document.querySelector(".cells");
let slidervalue = slider.value;
let numberOfCol = slidervalue;
let numberOfRow = slidervalue;
let color = colorBtn.value;
// ==============================================================
// functionality on clicking eraser button
eraserBtn.addEventListener("click", function () {
  colorBtn.value = gridColor.style.backgroundColor;
  color = colorBtn.value;
});

// functionality to randomize Number between 0 and 255
const randomize = function () {
  return Math.floor(Math.random() * 255) + 1;
};
const randomizeColor = function () {
  colorBtn.value = `#${randomize().toString(16)}${randomize().toString(
    16
  )}${randomize().toString(16)}`;
  color = colorBtn.value;
};

// functionality when clicking rainbow button
rainbowBtn.addEventListener("click", function () {
  randomizeColor();
  // add class to still having this random thing somehow ;
});

// functionallity when  clicking clear button
clearBtn.addEventListener("click", () => col);

// functionality to remove lines between cells

// functionality when sliding the slider
slider.addEventListener("change", function () {
  slidervalue = slider.value;
  numberOfCol = slidervalue;
  numberOfRow = slidervalue;
  gridSize.textContent = `Grid ${numberOfCol} x ${numberOfRow}`;
});

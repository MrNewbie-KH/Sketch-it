"use strict";
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
const rainbowBtn = document.querySelector(".rainbow");
const colorBtn = document.getElementById("colorpicker");
const slider = document.querySelector(".slider");
const gridSize = document.querySelector(".grid-size");
const gridColor = document.querySelector(".cells");
const cells = document.querySelector(".cells");
const cell = document.querySelector(".cell");
let isRainbow = false;
let slidervalue = slider.value;
let numberOfCol = slidervalue;
let numberOfRow = slidervalue;
let color = colorBtn.value;
// ==============================================================
// function that clears grid
const clearGrid = function () {
  if (cells.lastChild !== "") {
    let square = cells.lastChild;
    while (square) {
      square.remove();
      square = cells.lastChild;
    }
  }
};
// function that creates the grid
const createGrid = function (numberOfCol, numberOfRow) {
  for (let i = 0; i < numberOfCol; i++) {
    for (let j = 0; j < numberOfRow; j++) {
      const square = document.createElement("div");
      square.classList.add("cell");
      cells.appendChild(square);
    }
  }
  cells.style.gridTemplateColumns = `repeat(${numberOfCol},1fr)`;
  cells.style.gridTemplateRows = `repeat(${numberOfCol},1fr)`;
};
// default values
createGrid(numberOfCol, numberOfRow);

// ==============================================================
// functionality on clicking eraser button
eraserBtn.addEventListener("click", function () {
  colorBtn.value = `#ffffff`;
  isRainbow = false;
  color = colorBtn.value;
});

// functionality to randomize Number between 0 and 255
const randomize = function () {
  return Math.floor(Math.random() * 255) + 1;
};
// randomize color
const randomizeColor = function () {
  colorBtn.value = `#${randomize().toString(16)}${randomize().toString(
    16
  )}${randomize().toString(16)}`;
  color = colorBtn.value;
};

// functionality when clicking rainbow button
rainbowBtn.addEventListener("click", function () {
  randomizeColor();
  isRainbow = true;
});

// functionallity when  clicking clear button
clearBtn.addEventListener("click", () => {
  clearGrid();
  isRainbow = false;
  colorBtn.value = "#000000";
  color = colorBtn.value;
  slider.value = "16";
  slidervalue = slider.value;
  numberOfCol = slidervalue;
  numberOfRow = slidervalue;
  createGrid(numberOfCol, numberOfRow);
  gridSize.textContent = `Grid ${numberOfCol} x ${numberOfRow}`;
});

// functionality when sliding the slider
slider.addEventListener("change", function () {
  slidervalue = slider.value;
  numberOfCol = slidervalue;
  numberOfRow = slidervalue;
  clearGrid();
  createGrid(numberOfCol, numberOfRow);
  gridSize.textContent = `Grid ${numberOfCol} x ${numberOfRow}`;
});
// ==============================================================================

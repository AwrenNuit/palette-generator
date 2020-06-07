function randomColor() {
  let range = [];
  let red, green, blue;
  for(let i=0; i<255; i++) {
    range.push(i);
  }
  red = range[Math.floor(Math.random() * range.length)];
  green = range[Math.floor(Math.random() * range.length)];
  blue = range[Math.floor(Math.random() * range.length)];
  return `rgb(${red}, ${green}, ${blue})`;
}
/** Canvas Code **/

// Canvas1
const canvas = document.getElementById('myCanvas');
// We obtain our drawing context by calling the getContext method and passing it the string "2d", since we’ll be drawing in two dimensions:
const context = canvas.getContext("2d");
// The object that’s returned by getContext is an instance of CanvasRenderingCon- text2D

// Both strokeStyle and fillStyle are set on a context object, and both take one of three values: a string representing a color, a CanvasGradient object, or a CanvasPattern object.
context.strokeStyle = "red";
context.fillStyle = "yellow";

// Draw rectangle by calling the fillRect and strokeRect methods. Both of these methods take the X and Y coordinates where you want to begin drawing the fill or the stroke, and the width and height of the rectangle
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

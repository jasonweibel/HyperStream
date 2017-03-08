// register module - same name as folder
Module.register("snowman",
{
    // Define required scripts.
    // drawSnowman.js - this contains logic for drawing the shapes
    // processing.js framework is referenced to be able to draw shapes
    getScripts: function() {
        return [
            "drawSnowman.js",
            "https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.3/processing.min.js"
        ];
    },
	start: function() {
		Log.info("Starting module: " + this.name);

	}, 
    // Override dom generator.
    getDom: function() {
        // create a canvas
        var snowmanWrapper = document.createElement("canvas");
        // give a unique identifier for the canvas
        snowmanWrapper.id = "snowmanCanvas";
 
        window.onload = function() {
            // get the canvas element by identifier
            var canvas = document.getElementById("snowmanCanvas");
            // attaching the sketchProc function to the canvas
            var processingInstance = new Processing(canvas, sketchProc);
        }
        // Return the wrapper to the dom.
        return snowmanWrapper;
    },
   
}); 
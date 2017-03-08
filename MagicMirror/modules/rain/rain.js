Module.register("rain",{

	defaults: {
		dropCount: 250
	},

	getStyles: function() {
		return [ "rain.css" ]
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.className = "rain-wrapper"

		for(var i = 0; i < this.config.dropCount; i++) {
			droplet = document.createElement("div")
			droplet.className = "rain-drop"

			newdroplet = document.createElement("div");
			newdroplet.className = "drop1"
			newdroplet.style.transform = "scale(1,1)";
			newdroplet.style.opacity = 1; 

			droplet.appendChild(newdroplet);
			
			droplet.style.left = ((Math.random() * 100) - 10) + "%";
			droplet.style.animationDelay = (Math.random() * 100) + "s";
			droplet.style.animationDuration =  (Math.random() * 25) + "s"; 

			wrapper.appendChild(droplet);
		}
		return wrapper;
	}

});

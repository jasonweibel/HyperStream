Module.register("logomodule", {
    // Default module config.
    defaults: {
        text: "Logo Module",
        fileUrl: "modules/logomodule/images/logo.jpg",
        width: "200px",
        position: "center"
    },

    getStyles: function () {
        return [
            this.file('css/logomodule.css')
        ];
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = 'logomodule__container';
        wrapper.classList.add(this.config.position);
        wrapper.style.width = this.config.width;
        var img = document.createElement("img");
        img.setAttribute('src', this.config.fileUrl);
        img.setAttribute('width', 100);
        img.setAttribute('height', 100);
        wrapper.appendChild(img);
        return wrapper;
    }
});

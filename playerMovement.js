AFRAME.registerComponent("player-movement", {
    schema: {
        carRotation: {type: 'number', default: 0},
        carPosition: {type: 'number', default: 0}
    },
    init: function () {
      this.move();
    },
    move: function () {
        window.addEventListener("keydown", (e) => {
          //get the data from the attributes
          this.data.carRotation = this.el.getAttribute("rotation");
          var carRotation = this.data.carRotation;
          this.data.carPosition = this.el.getAttribute("position");
          var carPosition = this.data.carPosition
    
          //control the attributes with the Arrow Keys
          if (e.key === "D") {
            if (carRotation.x < 1) {
              carRotation.x += 0.5;
              this.el.setAttribute("rotation", carRotation);
            }
          }
          if (e.key === "A") {
            if (carRotation.x > -1) {
              carRotation.x -= 0.5;
              this.el.setAttribute("rotation", carRotation);
            }
          }
          if (e.key === "W") {
            if (carPosition.z < 2) {
              carPosition.y += 0.01;
              this.el.setAttribute("position", carPosition);
            }
          }
          if (e.key === "S") {
            if (carPosition.z > -2) {
              carPosition.y -= 0.01;
              this.el.setAttribute("position", carPosition);
            }
          }
        });
      }
    })
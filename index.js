let bird = {
  name: "Donald",
  numLegs: 2
}

let boat = {
  name: "AN",
  type: "race-boat" 
}

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("shoo shoo")
  }
}

glideMixin(bird)
glideMixin(boat)

bird.glide()
boat.glide()

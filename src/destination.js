document.getElementById("moon").onclick = function() {
    if(!document.getElementById("moon").classList.contains("active-planet")) {
        document.getElementById("planetImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("planetImg").classList.remove("opacity-0"), 500)
        document.getElementById("planetContent").classList.add("scale-0")
        document.getElementById("planetContent").classList.remove("2xl:scale-125")
        setTimeout(() => document.getElementById("planetContent").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("planetContent").classList.add("2xl:scale-125"), 500)
    }
    let activePlanet = document.querySelector(".active-planet")
    setTimeout(() => document.getElementById("currentPlanet").innerText = "moon", 400)
    setTimeout(() => document.getElementById("description").innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", 400)
    setTimeout(() => document.getElementById("distance").innerText = "384,400 km", 400)
    setTimeout(() => document.getElementById("travelTime").innerText = "3 days", 400)
    setTimeout(() => document.getElementById("planetImg").setAttribute("src", '/assets/destination/image-moon.png'), 450)
    activePlanet.classList.remove("active-planet");
    document.getElementById("moon").classList.add("active-planet")
};

document.getElementById("mars").onclick = function() {
    if(!document.getElementById("mars").classList.contains("active-planet")) {
        document.getElementById("planetImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("planetImg").classList.remove("opacity-0"), 500)
        document.getElementById("planetContent").classList.add("scale-0")
        document.getElementById("planetContent").classList.remove("2xl:scale-125")
        setTimeout(() => document.getElementById("planetContent").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("planetContent").classList.add("2xl:scale-125"), 500)
    }
    let activePlanet = document.querySelector(".active-planet")
    setTimeout(() => document.getElementById("currentPlanet").innerText = "mars", 400)
    setTimeout(() => document.getElementById("description").innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", 400)
    setTimeout(() => document.getElementById("distance").innerText = "225 mil. km", 400)
    setTimeout(() => document.getElementById("travelTime").innerText = "9 months", 400)
    setTimeout(() => document.getElementById("planetImg").setAttribute("src", '/assets/destination/image-mars.png'), 400)
    activePlanet.classList.remove("active-planet");
    document.getElementById("mars").classList.add("active-planet")
};

document.getElementById("europa").onclick = function() {
    if(!document.getElementById("europa").classList.contains("active-planet")) {
        document.getElementById("planetImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("planetImg").classList.remove("opacity-0"), 500)
        document.getElementById("planetContent").classList.add("scale-0")
        document.getElementById("planetContent").classList.remove("2xl:scale-125")
        setTimeout(() => document.getElementById("planetContent").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("planetContent").classList.add("2xl:scale-125"), 500)
    }
    let activePlanet = document.querySelector(".active-planet")
    setTimeout(() => document.getElementById("currentPlanet").innerText = "europa", 400)
    setTimeout(() => document.getElementById("description").innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", 400)
    setTimeout(() => document.getElementById("distance").innerText = "628 mil. km", 400)
    setTimeout(() => document.getElementById("travelTime").innerText = "3 years", 400)
    setTimeout(() => document.getElementById("planetImg").setAttribute("src", '/assets/destination/image-europa.png'), 400)
    activePlanet.classList.remove("active-planet");
    document.getElementById("europa").classList.add("active-planet")
};

document.getElementById("titan").onclick = function() {
    if(!document.getElementById("titan").classList.contains("active-planet")) {
        document.getElementById("planetImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("planetImg").classList.remove("opacity-0"), 500)
        document.getElementById("planetContent").classList.add("scale-0")
        document.getElementById("planetContent").classList.remove("2xl:scale-125")
        setTimeout(() => document.getElementById("planetContent").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("planetContent").classList.add("2xl:scale-125"), 500)
    }
    let activePlanet = document.querySelector(".active-planet")
    setTimeout(() => document.getElementById("currentPlanet").innerText = "titan", 400)
    setTimeout(() => document.getElementById("description").innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", 400)
    setTimeout(() => document.getElementById("distance").innerText = "1.6 bil. km", 400)
    setTimeout(() => document.getElementById("travelTime").innerText = "7 years", 400)
    setTimeout(() => document.getElementById("planetImg").setAttribute("src", '/assets/destination/image-titan.png'), 400)
    activePlanet.classList.remove("active-planet");
    document.getElementById("titan").classList.add("active-planet")
};
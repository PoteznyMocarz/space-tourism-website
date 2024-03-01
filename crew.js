document.getElementById("dot1").onclick = function() {
    if(!document.getElementById("dot1").classList.contains("active-dot")) {
        document.getElementById("crewImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("crewImg").classList.remove("opacity-0"), 500)
        document.getElementById("text-container").classList.add("scale-0")
        document.getElementById("text-container").classList.remove("2xl:scale-110")
        setTimeout(() => document.getElementById("text-container").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("text-container").classList.add("2xl:scale-110"), 500)
    }
    let activeDot = document.querySelector(".active-dot")
    setTimeout(() => document.getElementById("jobName").innerText = "Commander", 400)
    setTimeout(() => document.getElementById("personName").innerText = "Douglas Hurley", 400)
    setTimeout(() => document.getElementById("description").innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", 400)
    setTimeout(() => document.getElementById("crewImg").setAttribute("src", '/assets/crew/image-douglas-hurley.png'), 480)
    activeDot.classList.remove("active-dot");
    document.getElementById("dot1").classList.add("active-dot")
}

document.getElementById("dot2").onclick = function() {
    if(!document.getElementById("dot2").classList.contains("active-dot")) {
        document.getElementById("crewImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("crewImg").classList.remove("opacity-0"), 500)
        document.getElementById("text-container").classList.add("scale-0")
        document.getElementById("text-container").classList.remove("2xl:scale-110")
        setTimeout(() => document.getElementById("text-container").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("text-container").classList.add("2xl:scale-110"), 500)
    }
    let activeDot = document.querySelector(".active-dot")
    setTimeout(() => document.getElementById("jobName").innerText = "Mission Specialist", 400)
    setTimeout(() => document.getElementById("personName").innerText = "Mark Shuttleworth", 400)
    setTimeout(() => document.getElementById("description").innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", 400)
    setTimeout(() => document.getElementById("crewImg").setAttribute("src", '/assets/crew/image-mark-shuttleworth.png'), 480)
    activeDot.classList.remove("active-dot");
    document.getElementById("dot2").classList.add("active-dot")
}

document.getElementById("dot3").onclick = function() {
    if(!document.getElementById("dot3").classList.contains("active-dot")) {
        document.getElementById("crewImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("crewImg").classList.remove("opacity-0"), 500)
        document.getElementById("text-container").classList.add("scale-0")
        document.getElementById("text-container").classList.remove("2xl:scale-110")
        setTimeout(() => document.getElementById("text-container").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("text-container").classList.add("2xl:scale-110"), 500)
    }
    let activeDot = document.querySelector(".active-dot")
    setTimeout(() => document.getElementById("jobName").innerText = "Pilot", 400)
    setTimeout(() => document.getElementById("personName").innerText = "Victor Glover", 400)
    setTimeout(() => document.getElementById("description").innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", 400)
    setTimeout(() => document.getElementById("crewImg").setAttribute("src", '/assets/crew/image-victor-glover.png'), 480)
    activeDot.classList.remove("active-dot");
    document.getElementById("dot3").classList.add("active-dot")
}

document.getElementById("dot4").onclick = function() {
    if(!document.getElementById("dot4").classList.contains("active-dot")) {
        document.getElementById("crewImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("crewImg").classList.remove("opacity-0"), 500)
        document.getElementById("text-container").classList.add("scale-0")
        document.getElementById("text-container").classList.remove("2xl:scale-110")
        setTimeout(() => document.getElementById("text-container").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("text-container").classList.add("2xl:scale-110"), 500)
    }
    let activeDot = document.querySelector(".active-dot")
    setTimeout(() => document.getElementById("jobName").innerText = "Flight Engineer", 400)
    setTimeout(() => document.getElementById("personName").innerText = "Anousheh Ansari", 400)
    setTimeout(() => document.getElementById("description").innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.", 400)
    setTimeout(() => document.getElementById("crewImg").setAttribute("src", '/assets/crew/image-anousheh-ansari.png'), 480)
    activeDot.classList.remove("active-dot");
    document.getElementById("dot4").classList.add("active-dot")
}
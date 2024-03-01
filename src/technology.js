document.getElementById("btn1").onclick = function() {
    if(!document.getElementById("btn1").classList.contains("active-slide")) {
        document.getElementById("techImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("techImg").classList.remove("opacity-0"), 520)
        document.getElementById("techTextMain").classList.add("scale-0")
        document.getElementById("techTextMain").classList.remove("scale-100")
        setTimeout(() => document.getElementById("techTextMain").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("techTextMain").classList.add("scale-100"), 480)
    }
    let activeSlide = document.querySelector(".active-slide")
    setTimeout(() => document.getElementById("techName").innerText = "Launch vehicle", 400)
    setTimeout(() => document.getElementById("techDesc").innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", 400)
    if(window.innerWidth > 1280) {
        setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-launch-vehicle-portrait.jpg"), 500)
    }
    else {
        setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-launch-vehicle-landscape.jpg"), 500)
    }
    activeSlide.classList.remove("active-slide");
    document.getElementById("btn1").classList.add("active-slide")
}

document.getElementById("btn2").onclick = function() {
    if(!document.getElementById("btn2").classList.contains("active-slide")) {
        document.getElementById("techImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("techImg").classList.remove("opacity-0"), 520)
        document.getElementById("techTextMain").classList.add("scale-0")
        document.getElementById("techTextMain").classList.remove("scale-100")
        setTimeout(() => document.getElementById("techTextMain").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("techTextMain").classList.add("scale-100"), 480)
    }
    let activeSlide = document.querySelector(".active-slide")
    setTimeout(() => document.getElementById("techName").innerText = "Space capsule", 400)
    setTimeout(() => document.getElementById("techDesc").innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", 400)
    if(window.innerWidth > 1280) {
        setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-space-capsule-portrait.jpg"), 500)
    }
    else {
        setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-space-capsule-landscape.jpg"), 500)
    }
    activeSlide.classList.remove("active-slide");
    document.getElementById("btn2").classList.add("active-slide")
}

document.getElementById("btn3").onclick = function() {
    if(!document.getElementById("btn3").classList.contains("active-slide")) {
        document.getElementById("techImg").classList.add("opacity-0")
        setTimeout(() => document.getElementById("techImg").classList.remove("opacity-0"), 520)
        document.getElementById("techTextMain").classList.add("scale-0")
        document.getElementById("techTextMain").classList.remove("scale-100")
        setTimeout(() => document.getElementById("techTextMain").classList.remove("scale-0"), 500)
        setTimeout(() => document.getElementById("techTextMain").classList.add("scale-100"), 500)
    }
    let activeSlide = document.querySelector(".active-slide")
    setTimeout(() => document.getElementById("techName").innerText = "Spaceport", 400)
    setTimeout(() => document.getElementById("techDesc").innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", 400)
    if(window.innerWidth > 1280) {
        setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-spaceport-portrait.jpg"), 500)
    }
    else {
        setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-spaceport-landscape.jpg"), 500)
    }
    activeSlide.classList.remove("active-slide");
    document.getElementById("btn3").classList.add("active-slide")
}

if(window.innerWidth > 1280) {
    setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-launch-vehicle-portrait.jpg"), 500)
}
else {
    setTimeout(() => document.getElementById("techImg").setAttribute("src", "/assets/technology/image-launch-vehicle-landscape.jpg"), 500)
}
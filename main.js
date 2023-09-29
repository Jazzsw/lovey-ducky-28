// Declaring divs as js vars 
aDiv = document.getElementById('aboutMeDiv')
wDiv = document.getElementById('writingAssignmentsDiv')
hDiv = document.getElementById('homeDiv')

//hide other page divs on page load
aDiv.style.display = 'none'
wDiv.style.display = 'none'

//Hide other divs on btn press
document.getElementById('homeTxt').addEventListener('click', function(){
    hDiv.style.display = 'block'
    aDiv.style.display = 'none'
    wDiv.style.display = 'none'
})
document.getElementById('writingAssignmentsTxt').addEventListener('click', function(){
    wDiv.style.display = 'block'
    hDiv.style.display = 'none'
    aDiv.style.display =' none'
})
document.getElementById('aboutMeTxt').addEventListener('click', function(){
    aDiv.style.display = 'block'
    hDiv.style.display = 'none'
    wDiv.style.display = 'none'
})

//Hide wrighting on page load
writing = document.getElementsByClassName('writing')
buttons = document.getElementsByClassName('wButton')

for(i=0; i<writing.length; i++){
    let wElement = document.getElementById(writing[i].id)
    let wBtn = document.getElementById(buttons[i].id)
    wElement.style.display = 'none'
    wBtn.style.display = 'none'
}

wDivs = document.getElementsByClassName('wAssignments')
for(i=0; i<wDivs.length; i++){
    let wElement = document.getElementById(wDivs[i].id)
    wElement.style.width = '250px'
    wElement.style.height = '70px'
}


waDivs = document.getElementsByClassName('wAssignments')
waTitles = document.getElementsByClassName('secTitle')
waBtns = document.getElementsByClassName('wButton')
waWriting = document.getElementsByClassName('writing')

for (i=0; i<waDivs.length; i++){
    let div = waDivs[i]
    let btn = waBtns[i]
    let writing = waWriting[i]
    let title = waTitles[i]

document.getElementById(title.id).addEventListener('click', function(){
    reset(div)
    document.getElementById(div.id).style.animation = 'big 3s'
    document.getElementById(writing.id).style.animation= 'letterFade 3s'
    setTimeout(() => {  
        document.getElementById(writing.id).style.display = 'block'
        document.getElementById(btn.id).style.display = 'block'
        document.getElementById(div.id).style.width = "70%"
        document.getElementById(div.id).style.height = "100%"
     }, 2951);

     btn.addEventListener('click', function(){
        document.getElementById(writing.id).style.display = 'none'
        document.getElementById(btn.id).style.display = 'none'
        document.getElementById(div.id).style.width = "250px"
        document.getElementById(div.id).style.height = "70px"
    })
        
     })

}

function reset(div) {
    console.log("reset")
    var temp = document.getElementById(div.id);
    temp.style.animation = 'none';
    temp.offsetHeight; 
    temp.style.animation = null; 
  }
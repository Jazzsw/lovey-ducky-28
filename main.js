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
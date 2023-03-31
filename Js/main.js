var acc = document.getElementsByClassName("accordian")
var i

for(i = 0; i<acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active")

        var panel = this.nextElementSibling

        if(panel.style.maxHeight){
            panel.style.maxHeight = null

        }else{
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('app-show')
        }else{
            entry.target.classList.remove('app-show')
        }
    })
})


const hiddenElements1 =document.querySelectorAll('.app-hidden');
hiddenElements1.forEach((el) => observer1.observe(el));


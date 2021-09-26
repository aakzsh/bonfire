const ytSection = document.querySelector('.yt-video')
const playBtn = document.querySelector('.play-btn')
const resetBtn = document.querySelector('.reset-btn')

window.addEventListener('load', (e) => {
    const id = window.location.href.split("=")[1];
    // console.log(ytSection)

    ytSection.innerHTML += `

            <iframe class="a"
            src="https://www.youtube.com/embed/${id}"  allow='autoplay'>
            </iframe> 
            <div class="flex-em">
              <iframe class="b"
                src="https://www.youtube.com/embed/${id}" allow='autoplay'>
              </iframe> 
              <div class="space"></div>
              <iframe class="c"
                src="https://www.youtube.com/embed/${id}" allow='autoplay'>
              </iframe> 
            </div>
            
            <iframe class="d"
            src="https://www.youtube.com/embed/${id}" allow='autoplay'>
            </iframe> 
       
       
    `

    //control autoplay
    const a = document.querySelector('.a');
    const b = document.querySelector('.b');
    const c = document.querySelector('.c');
    const d = document.querySelector('.d');

    playBtn.addEventListener('click', e => {
      e.preventDefault()
      a.src += '?autoplay=1'
      b.src += '?autoplay=1'
      c.src += '?autoplay=1'
      d.src += '?autoplay=1'
    })

    resetBtn.addEventListener('click', e => {
      e.preventDefault()
      a.src = a.src.split("?")[0]
      b.src = b.src.split("?")[0]
      c.src = c.src.split("?")[0]
      d.src = d.src.split("?")[0]
    })



})



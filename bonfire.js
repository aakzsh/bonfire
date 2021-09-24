const ytSection = document.querySelector('.yt-video')
const playBtn = document.querySelector('.play-btn')

window.addEventListener('load', (e) => {
    const id = window.location.href.split("=")[1];
    // console.log(ytSection)

    ytSection.innerHTML += `

            <iframe class="a"
            src="https://www.youtube.com/embed/${id}">
            </iframe> 
            <div class="flex-em">
              <iframe class="b"
                src="https://www.youtube.com/embed/${id}">
              </iframe> 
              <div class="space"></div>
              <iframe class="c"
                src="https://www.youtube.com/embed/${id}">
              </iframe> 
            </div>
            
            <iframe class="d"
            src="https://www.youtube.com/embed/${id}">
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
      console.log(a.src)
    })


})



function watch(){
    let data = new Date();
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    document.querySelector('#section_watch').innerHTML = hora+" : "+minutos+" : "+segundos;
    document.querySelector('#section_watch').style.color = '#000'
}
watch()
setInterval(watch,1000)


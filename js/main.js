$(document).ready(
    function(){
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getYear();
        let random = day+month+year;
        let num = random;
        let container = $(".counter");
        setInterval(function(){
            let prueba = num++;
            container.html(prueba-1)
        }, 2000)
    }

)
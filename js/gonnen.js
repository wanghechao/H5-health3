window.addEventListener("load" , function() {
    function $(name) {
        return document.querySelector(name);
    }

    let num = 0;
    timer = setInterval(function() {
        num++
        $(".jdt_text").innerHTML = `${num}%`;
        if(num >= 100) {
            $(".zhedan").style.display = "none";

            clearInterval(timer)
        }

    } , 50)
    
    $(".btn").onclick = function() {
        location.replace("two.html")
    }
    
});
function cronometro(){
    var seg=0, min=0, hor=0
    

    while (hor<1) {

        if (seg<59) {
            seg++;
        }else{
            seg=0
            min++
            if (min<59) {
                min++
            }else{
                min=0
                hor++
            }
        }
        
         console.log(hor, min, seg)
    }
}


cronometro();

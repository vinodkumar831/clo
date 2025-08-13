var card=document.getElementById('card');
card.addEventListener('mouseover',function(){
card.style.backgroundColor="green";
card.innerHTML="you hovered";
});

card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    card.innerHTML="you hovered out";
    });

    card.addEventListener('click',function(){
        card.style.backgroundColor="yellow";
        card.innerHTML="you clicked me!";
        });

        function updateClock(){
            var date=new Date();
            var hours=date.getHours().toString().padStart(2,'0');
            var mins=date.getMinutes().toString().padStart(2,'0');
            var secs=date.getSeconds().toString().padStart(2,'0');
            document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
        }

   window.setInterval(updateClock,1000);
   updateClock();     
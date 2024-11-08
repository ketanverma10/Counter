let count =0;
let Value=document.querySelector('#Value');
let btns=document.querySelectorAll('.btn');


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--
        }
        else if(styles.contains("increase")){
            count++
        }
        else{
            count=0;
        }

        if(count >0){
            Value.style.color="green"
        }
        if(count<0){
            Value.style.color="red"
        }
        if(count===0){
            Value.style.color="#222"
        }
        Value.textContent=count

    })
})
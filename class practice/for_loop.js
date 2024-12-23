//write a javascript "Hello world" program with brief introduction of JavaScript and js coding conventions
let i,count=0;
for(let n = 2; n<=100; n++){
    for(i = 1;i<=n;i++)
        if(n%i==0){
            count++;
        }
    
        if(count==2)
            console.log(n)
            count=0
    
}
    



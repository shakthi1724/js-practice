for(i=2;i<=20;i++){
    if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0){
        console.log(i+" is a prime number");
    }
    else if(i==2 || i==3 || i==5 || i==7){
        console.log(i+" is a prime number");
    }
    else{
        console.log(i+" is not prime number");
    }
}
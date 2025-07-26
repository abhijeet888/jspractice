function butterFly(n){
      let pattern = ""
      for(let i=0;i<n;i++){
            let str = ""
            let k = i+2;
        for(let j=0;j<n;j++){
            if(i === j ){
                str +="*\n"
            }else if(j === k){
                str +="*\n"
                k += 2
            }else{
                str +="#\n"
            }
        }
        pattern +=str
      }
      console.log(pattern)
}

butterFly(7)
function binarySearch(arr,n){
       let low = 0;
       let high = arr.length-1;
       let mid = Math.floor(low + (high-low)/2);
        
       
       while(arr[mid] !== n){
        console.log(low,high,mid,arr[mid]);
         if(arr[mid] < n){
           low = mid+1;
         }else{
            high = mid - 1;
         }
         mid = Math.floor(low + (high-low)/2);
       }

        return mid;

}

console.log(binarySearch([1,2,3,4,5,6,7,8],2));
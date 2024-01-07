function result(){
    fetch("https://z9blqe7usb.execute-api.eu-west-1.amazonaws.com/dev/countries")
    .then((response)=>{response.json().then((data)=>{
        for(const i in  data){
            for(const j in data[i]){
                let l = document.getElementById("data-list");
                let b = document.createElement(<li></li>)
                data[i][j]
            }
        }
    })})
}
result();

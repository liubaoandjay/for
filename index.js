let Arr=["a",2,4,"5g","h"];

function Myforeach(fn){
    for(let i=0;i<this.length;i++){
        fn(this[i],i,this)
    }
}



Array.prototype.Myforeach=Myforeach;
Arr.Myforeach((item,index)=>{
    console.log(item,index)
})
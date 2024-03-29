async function Imagebase64(file){
    // console.log(file);
    const reader= new FileReader()
    reader.readAsDataURL(file)
    const data= new Promise((resolve,reject)=>{
      reader.onload=()=>resolve(reader.result)
      reader.onerror=(err)=>reject(err)
    })
    // console.log(data);
    return data
    }
    export{Imagebase64}
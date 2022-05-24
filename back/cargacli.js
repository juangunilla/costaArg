  var datos = document.getElementById("forms")
   document.addEventListener("submit", async e=>{
       if(e.target === datos ){
           e.preventDefault();
           try{
               let options ={
                   method:"POST",
                   headers:{
                       "content-type": "application/json;charset=utf-8"
                   },
                    data:JSON.stringify({
                       Ciudad:e.target.ciudad.value,
                       img:e.target.Img.value,
                       Descripcion:e.target.descripcion.value,
                       Humedad:e.target.humedad.value,
                       Viento:e.target.viento.value,
                       Direccion:e.target.direccion.value,
                       tMax:e.target.tmax.value,
                       tMin:e.target.tmin.value,
                       inUv:e.target.inUv.value  
                   })
                
               },
               
               res=await axios("http://localhost:3000/api/climas",options),
               json= await res.data();
               alert(data);

           }catch(err){

           }
           alert("Enviado");
       }
   });
const ObtenerClima = async() => {
    try{
      const respuesta = await axios.get('http://localhost:3000/api/climas')
  
      console.log(respuesta.data);
  
      if(respuesta.status ===200){
        let ciudad ='';
        respuesta.data.data.forEach(ciudad => {
          ciudad = `<div class="card" > <h3 class="ciudad">${ciudad.Ciudad}</h3>
          <img class="imgclima" src="${ciudad.img}"> 
          <p class="ciudad">${ciudad.Descripcion}</p> 
          <p class="subti">Humedad Viento</p> 
          <p class="viento">${ciudad.Humedad}%  ${ciudad.Viento}KM/H<p>
          <p class="subti">Tmax Tmin</p> 
          <p class="tM">${ciudad.tMax}°  ${ciudad.tMin}°<p>
          <p class="subti">Sensación</p> 
          <p class="sensacion">${ciudad.sT}°<p>

          
          `;
          document.getElementById('contenedor').innerHTML += ciudad;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerClima();
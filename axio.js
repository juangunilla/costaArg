const ObtenerClima = async() => {
    try{
      const respuesta = await axios.get('http://localhost:4567/api/climas')
  
      console.log(respuesta.data.docs);
  
      if(respuesta.status ===200){
        let ciudad ='';
        respuesta.data.docs.forEach(ciudad => {
          ciudad = `<div class="card" > <h3 class="ciudad">${ciudad.Ciudad}</h3>
          <img class="imgclima" src="http://localhost:8080/img/${ciudad.img}"> 
          <p class="ciudad">${ciudad.Descripcion}</p> 
          <h2 class="ciudad">°${ciudad.Temp}C<h2>
          `;
          document.getElementById('contenedor').innerHTML += ciudad;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerClima();
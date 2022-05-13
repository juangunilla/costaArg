const ObtenerClima = async() => {
    try{
      const respuesta = await axios.get('http://localhost:4567/api/climas')
  
      console.log(respuesta.data.docs);
  
      if(respuesta.status ===200){
        let ciudad ='';
        respuesta.data.docs.forEach(ciudad => {
          ciudad = `<div class="caja" > <h3 class="titulo">${ciudad.Ciudad}</h3>
          <img src="http://localhost:8080/img/${ciudad.img}"> 
          <p>${ciudad.Descripcion}</p> 
          <h2>°${ciudad.Temp}C<h2>
          `;
          document.getElementById('contenedor').innerHTML += ciudad;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerClima();
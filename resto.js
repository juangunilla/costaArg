const ObtenerRestaurantes = async() => {
    try{
      const respuesta = await axios.get('http://localhost:4567/api/restaurantes')
  
      console.log(respuesta.data.docs);
  
      if(respuesta.status ===200){
        let restaurantes ='';
        respuesta.data.docs.forEach(restaurantes => {
          restaurantes = `<div class="card" > <h3 class="titulo">${restaurantes.Nombre}</h3>
          <img src="http://localhost:8080/img/${restaurantes.Imagen}"> 
          <p>${restaurantes.Descripcion}</p> 
          <a href="${restaurantes.Url}" target="_blank" class="btn btn-primary">Abrir sitio</a>
          `;
          document.getElementById('restau').innerHTML += restaurantes;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerRestaurantes();
const ObtenerClima = async() => {
    try{
      const respuesta = await axios.get('http://localhost:3000/api/climas')
  
      console.log(respuesta.data);
  
      if(respuesta.status ===200){
        let ciudad ='';
        respuesta.data.data.forEach(ciudad => {
          ciudad = 
           `
           <div class="grilla" >
          <div class="card" >
          <h3 class="ciudad">${ciudad.Ciudad}</h3>
          <img class="imgclima" src="${ciudad.img}">
          <p class="ciudad">${ciudad.Descripcion}</p>
          <div class="grid-layout" >
          <p class="data1 data">Humedad <img class="temp" src="/img/iconos/hygrometer.png" alt=""></p>
          <p class="data2">${ciudad.Humedad}%<p>
          <p class="data3 data">Viento <img class="temp" src="/img/iconos/viento.png" alt="">
          </p>
          <p class="data4">  ${ciudad.Viento}KM/H<p><img class="dire" src=${ciudad.Direccion}/>
          <p class="tmin data" >T Minima<img class="temp" src="/img/iconos/thermometer-min.png" alt="">
          </p>
          <p class="data2"> °${ciudad.tMin}C<p>
          <p class="tmin data" >T Maxima<img class="temp" src="/img/iconos/thermometer-max.png" alt=""></p>
          <p class="data2">°${ciudad.tMax}C<p>
          <p class="tmin data" >Índice UV <img class="temp" src="/img/iconos/indice.png" alt=""></p>
          <p class="data2">${ciudad.inUv}<p>
          </div>
          </div>
          </div>`



         
          ;
          document.getElementById('contenedor').innerHTML += ciudad;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerClima();
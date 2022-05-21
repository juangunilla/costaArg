window.addEventListener('load', () => {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', (e) =>{
        //to prevent reload
        e.preventDefault();
        console.log(form.querySelector('input[name="Ciudad"]'))
        //creates a multipart/form-data object
       
        const data = new FormData(formElement);
        axios({
          method  : 'post',
          url : 'http://localhost:3000/api/climas',
          data : data,
        })
        .then((res)=>{
          console.log(res);
        })
        .catch((err) => {throw err});
    });
});
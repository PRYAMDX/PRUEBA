const db = firebase.firestore()
const deseas = document.getElementById("deseas")
const login = document.getElementById("login")
const inner = document.getElementById("inner")
const carta = document.getElementById("carta")
const enviarcomentario = document.getElementById("enviar")
const divcomentario =  document.getElementById("divcomentario")
const sugerencias = document.getElementById("sugerencias")


//loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
//loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

login.addEventListener("click",  e =>{

  
    const provider = new firebase.auth.GoogleAuthProvider();
  
   firebase.auth()
  .signInWithPopup(provider).then((result) => {
    console.log(result)
    //OBTENIDO DATOS DEL PERFIL
    const emailobtenido = result.additionalUserInfo.profile.email + "__" +result.additionalUserInfo.profile.name;
    
   inner.innerHTML=emailobtenido;
      
      console.log("google sign in");
      carta.style.left="0%";
      
      
      //comentar : CREAR UNA DIV QUE CONTENGA LA FOTO Y EL + EMAEIL OBTENIDO COMENTARIO Y INSERTARLO 
    
      enviarcomentario.addEventListener("click", function perfil (){
        const comentario = document.getElementById("COMENTARIO").value;
      document.body.insertAdjacentHTML( "afterend",`<div class="comentario"> <div class="perfil" id="perfil"> </div>  <h4 class="textocomentario"> ${emailobtenido}  ha comentado: "${comentario}"</h4>  </div>`);
         document.getElementById("perfil").style.backgroundImage = `url(${ result.additionalUserInfo.profile.picture})`;
    // RETIRANDO LA CARTA Y REMOVIENDOLE EL EVENTO Y LA FUNCION PERFIL PARA QUE NO SE REPITA DOS VECES
         carta.style.left="-70%" 
         enviarcomentario.removeEventListener("click" , perfil) });

       
     }) })           
    .catch(err => {
      console.log(err);
    })


   


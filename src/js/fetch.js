document.addEventListener("DOMContentLoaded",()=>{

let texto = document.getElementsByClassName("InputTarea")

async function PostData() {
    try {
        let Listatarea = {
            id:Date.now(),
            titulo:texto.value,
            estado: false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              },
              body: JSON.stringify(Listatarea)
        })
        const datos = await respuesta.json()
        console.log(datos);
        getDatos()
       
    } catch (error) {
        console.error(error);
    }
}
})
export default PostData
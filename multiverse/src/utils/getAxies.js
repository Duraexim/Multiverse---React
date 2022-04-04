// practica de after class, archivo no usado en proyecto


import axies from "../mock/axies";

const getAxies = () => {

    return new Promise ((resolve, reject) => {

        const ok = true;

        setTimeout(() => {
            if (ok) {
                resolve (axies);
            } 

            else { 
                reject ('error');
            }
            
        }, 2000);



    })

}



export default getAxies;
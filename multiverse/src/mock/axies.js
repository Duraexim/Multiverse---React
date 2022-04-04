
const axies = [

    {id: 1, clase: "Beast", precio: 150, img:"./images/Beast.png", descripcion:"Poseen un gran poder de ataque y mayor cantidad de Moral la cual aumenta el daño que causan los ataques críticos." , cantidad:1, stock:12},
    {id: 2, clase: "Bug", precio: 130, img:"./images/Bug.png", descripcion:"Buen balance entre ataque y defensa. Poseen la habilidad de envenenar al enemigo.",cantidad:1, stock:9},
    {id: 3, clase: "Mech",precio: 160, img:"./images/Mech.png",descripcion:"Poseen mayor resistenciaa los ataques físicos gracias a su cuerpo metálico, pero son más lentos al atacar.", cantidad:1, stock:20}, 
    {id: 4, clase: "Reptile",precio: 140, img:"./images/Reptile.png",descripcion:"Los reptiles poseen gran agilidad a la hora de esquivar ataques al ser escurridizos.", cantidad:1, stock:7},
    {id: 5, clase: "Plant",precio: 150, img:"./images/Plant.png",descripcion:"Las plantas poseen mayor cantidad de vida, además tienen el poder de curar a sus aliados.", cantidad:1, stock:10},
    {id: 6, clase: "Dusk",precio: 155, img:"./images/Dusk.png",descripcion:"Especialistas en dominar varías artes de combate. Cuentan con buena defensa.", cantidad:1, stock:15},
    {id: 7, clase: "Aquaic",precio: 165,img:"./images/Aquaic.png",descripcion:"Son veloces y poderosos, y cuentan con poderes regenerativos, lo cual les permite curarse en medio de una batalla.", cantidad:1, stock:8},
    {id: 8, clase: "Bird",precio: 160,img:"./images/Bird.png", descripcion:"Los pájaros son los más veloces, por lo cual siempre son los primeros en atacar. Su habilidad de volar le permite romper fila y atacar a enemigos lejanos.", cantidad:1, stock:12},
    {id: 9, clase: "Dawn",precio: 145,img:"./images/Dawn.png", descripcion:"Brindan soporte a sus compañeros, generando energía para atacar y proporcionando defensa y recursos curativos.", cantidad:1, stock:10}

]

export const getAxies = () => {

    return new Promise (resolve =>{

        setTimeout(() => {
            
            resolve (axies)
        }, 2000);



    })
}
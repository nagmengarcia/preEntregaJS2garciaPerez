
// mi idea es generar un array con todos los productos para poder ir filtrando luego, tuve que esconder un par porque me quedaba muy largo el alert
const allProducts = [
    // {id:1, productName:"Camiseta Argentina 1994 Maradona", category:"Nacional", type:"camiseta", price:28000},
    {id:2, productName:"Camiseta Argentina Alternativa 2006 Messi", category:"Nacional", type:"camiseta", price:32000},
    {id:3, productName:"Camiseta Argentina Alternativa 1999 Ortega ", category:"Nacional", type:"camiseta", price:30000},
    // {id:4, productName:"Camiseta Argentina Alternativa 1994 Maradona ", category:"Nacional", type:"camiseta", price:29000},
    {id:5, productName:"Camiseta Argentina Alternativa 1986 Maradona ", category:"Nacional", type:"camiseta", price:32000},
    {id:6, productName:"Camiseta Argentina 1999 Batistuta", category:"Nacional", type:"camiseta", price:32000},
    // {id:7, productName:"Camiseta Argentina Alternativa 1999 Riquelme", category:"Nacional", type:"camiseta", price:21000},
    {id:8, productName:"Buzo Argentina entrenamiento Mundial USA 1994", category:"Nacional", type:"campera", price:36000},
    {id:9, productName:"Short Argentina mundial México 1986 Maradona", category:"Nacional", type:"short", price:16700},
    {id:10, productName:"Short Argentina mundial USA 1994 Maradona", category:"Nacional", type:"short", price:15000},
    {id:11, productName:"Camiseta Napoli 1987 Maradona", category:"Internacional", type:"camiseta", price:28000},
    {id:12, productName:"Camiseta Fiorentina 1998 Batistuta", category:"Internacional", type:"camiseta", price:31000},
    {id:13, productName:"Camiseta Borussia Dortmund 1988", category:"Internacional", type:"camiseta", price:26500},
    {id:14, productName:"Camiseta Juventus Alternativa 1997-98 Zidane", category:"Internacional", type:"camiseta", price:27000},
    {id:15, productName:"Camiseta Barcelona 2002-03 Riquelme", category:"Internacional", type:"camiseta", price:22000},
    {id:16, productName:"Camiseta Sevilla 1992-93 Maradona", category:"Internacional", type:"camiseta", price:27000},
    {id:17, productName:"Camiseta Real Madrid 1998 Redondo", category:"Internacional", type:"camiseta", price:28000},
    // {id:18, productName:"Campera Alemania del Este DDR 1970", category:"Internacional", type:"campera", price:36000},
    // {id:19, productName:"Campera Dinamarca 1988", category:"Internacional", type:"campera", price:36000},
    {id:20, productName:"Campera Holanda 1974", category:"Internacional", type:"campera", price:36000},
    {id:21, productName:"Campera Alemania 1990", category:"Internacional", type:"campera", price:36000},
    // {id:22, productName:"Camiseta River Plate 1996-97", category:"Futbol Argentino", type:"camiseta", price:29000},
    // {id:23, productName:"Camiseta Boca Juniors 1996 Maradona", category:"Futbol Argentino", type:"camiseta", price:23000},
    // {id:24, productName:"Camiseta Boca Juniors 1991", category:"Futbol Argentino", type:"camiseta", price:19000},
    {id:25, productName:"Camiseta River Plate Alternativa 1986", category:"Futbol Argentino", type:"camiseta", price:27000},
    {id:26, productName:"Camiseta Independiente 1988 Bochini", category:"Futbol Argentino", type:"camiseta", price:29000},
    {id:27, productName:"Camiseta Newell's 1993 Maradona", category:"Futbol Argentino", type:"camiseta", price:24500},
    {id:28, productName:"Camiseta Independiente 1997-98 Garnero", category:"Futbol Argentino", type:"camiseta", price:29000},
    {id:29, productName:"Camiseta San Lorenzo 1989-90", category:"Futbol Argentino", type:"camiseta", price:29000},
    // {id:30, productName:"Camiseta Platense", category:"Futbol Argentino", type:"camiseta", price:15000},
    // {id:31, productName:"Camiseta Aldosivi", category:"Futbol Argentino", type:"camiseta", price:15000},
    // {id:32, productName:"Camiseta Defensa y Justicia", category:"Futbol Argentino", type:"camiseta", price:17600},
    // {id:33, productName:"Camiseta Ferro", category:"Futbol Argentino", type:"camiseta", price:16000},
    // {id:34, productName:"Camiseta River Plate Alternativa 2006 Gallardo", category:"Futbol Argentino", type:"camiseta", price:30000},
    // {id:35, productName:"Camiseta River Plate Alternativa 1994", category:"Futbol Argentino", type:"camiseta", price:27000},
];


// Estos son mis "filtros" de Categoria
const equiposArgentinos = allProducts.filter((a)=>a.category==="Futbol Argentino");
const equiposInternacionales = allProducts.filter((a)=>a.category==="Internacional");
const seleccionArgentina = allProducts.filter((a)=>a.category==="Nacional");


// Estos son mis "filtros" de tipo para Categoria Todos
const allProductsCamperas = allProducts.filter((a)=>a.type==="campera");
const allProductsShorts = allProducts.filter((a)=>a.type==="short");
const allProductsCamisetas = allProducts.filter((a)=>a.type==="camiseta");


// Estos son mis "filtros" de tipo para Internacional
const equiposInternacionalesCamperas = equiposInternacionales.filter((a)=>a.type==="campera");
const equiposInternacionalesShorts = equiposInternacionales.filter((a)=>a.type==="short");
const equiposInternacionalesCamisetas = equiposInternacionales.filter((a)=>a.type==="camiseta");

// Estos son mis "filtros" de tipo para Categoria Equipos Nacionales
const equiposArgentinosCamperas = equiposArgentinos.filter((a)=>a.type==="campera");
const equiposArgentinosShorts = equiposArgentinos.filter((a)=>a.type==="short");
const equiposArgentinosCamisetas = equiposArgentinos.filter((a)=>a.type==="camiseta");

// Estos son mis "filtros" de tipo para Categoria Nacional
const seleccionArgentinaCamperas = seleccionArgentina.filter((a)=>a.type==="campera");
const seleccionArgentinaShorts = seleccionArgentina.filter((a)=>a.type==="short");
const seleccionArgentinaCamisetas = seleccionArgentina.filter((a)=>a.type==="camiseta");

// console.log(camisetas.length)
// console.log(shorts.length)
// console.log(camperas.length)


// Accion principal
let startShopping

function startShoppingProcess(){
    startShopping = confirm("Te interesa comprar algo?");
}

startShoppingProcess();


// cant de items inicial y $ del carrito seteados a 0
let cartItems = 0;


const cartList = [];
const garbage = [];

function cartBilling(myArr){
    let cartBill = 0;

    myArr.forEach(a => {
        cartBill += a.price;
    });
    return cartBill;
}

const cartFinalPrice = cartBilling(cartList);


// Aca hago una salida para cuando no quiere
while ( startShopping !== true){
    if(cartItems === 0 ){
        let lastChance = confirm("No compraste nada, deseas comprar algo?")
        if (lastChance === true) {
            startShoppingProcess()
        } else {
            alert("Andate tranqui, nadie te va a disparar por la espalda 🔫");
            break;
        }
    }
}



while (startShopping === true) {

let filter1 = prompt("Bienvenido a la tienda de futbol retro, que categoria te interesaria ver? \n\n 1 - Todo. \n 2 - Equipos Internacionales \n 3 - Equipos de Argentina \n 4 - Selección Argentina");

    switch(filter1) {
        case "1":
            let subFilter1 = prompt("Elegiste ver todas las categorias, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");

        switch(subFilter1){
            case "1":
                filterPickAndAdd(allProducts);
                break;
               

            case "2":
                filterPickAndAdd(allProductsCamisetas);
                break;
                
            
            case "3":
                filterPickAndAdd(allProductsShorts);
                break;
                

            case "4":
                filterPickAndAdd(allProductsCamperas);
                break;
                
                
        };
        break;
        // fin todos , comienzo internacional
        case "2":
            let subFilter2 = prompt("Elegiste ver todas las prendas de Equipos internacionales, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");
            
            switch(subFilter2){
                
            case "1":
                filterPickAndAdd(equiposInternacionales);
                break;
                
            
            case "2":
                filterPickAndAdd(equiposInternacionalesCamisetas);
                break;
                
            
            case "3":
                filterPickAndAdd(equiposInternacionalesShorts)
                break;
                
    
            case "4":
                filterPickAndAdd(equiposInternacionalesCamperas)
                break;
                
            };
            break;
            // fin internacional , comienzo equipos de Arg
        case "3":
            let subFilter3 = prompt("Elegiste ver todas las prendas de Equipos de Argentina, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");
            
            switch(subFilter3){
                
            case "1":
                filterPickAndAdd(equiposArgentinos);
                break;
                
            
            case "2":
                filterPickAndAdd(equiposArgentinosCamisetas);
                break;
                
            
            case "3":
                filterPickAndAdd(equiposArgentinosShorts)
                break;
                
    
            case "4":
                filterPickAndAdd(equiposArgentinosCamperas)
                break;
                
            };
            break;
            // fin todos , comienzo internacional
        case "4":
            let subFilter4 = prompt("Elegiste ver todas las prendas del Seleccionado Argentino, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");
            
            switch(subFilter4){
                
            case "1":
                filterPickAndAdd(seleccionArgentina);
                break;
            
            
            case "2":
                filterPickAndAdd(seleccionArgentinaCamisetas);
                break;
                
            
            case "3":
                filterPickAndAdd(seleccionArgentinaShorts)
                break;
                
    
            case "4":
                filterPickAndAdd(seleccionArgentinaCamperas)
                break;
                
            }
            break;

        



    }
    

};


// while (startShopping === false && cartItems >= 1){
//     alert(`Tu carrito tiene un total de $${cartFinalPrice}`)
//     break;
//}



// a es array m es mensaje
// function filterPickAndAdd (a, m) {

//     let message = m + "\n";

//     a.forEach(b => {
//         message += `${a.indexOf(b) + 1}: ${b.productName}, Precio: ${b.price} \n `
//     });

//     let pickAProduct = (Number(prompt.a)-1);

//     if (pickAProduct <= a.length) {
//         cartList.push(a[pickAProduct]);
//         cartItems++;
//         alert(`Agregaste ${cartList[0].productName} al carrito`);
        
//     }

// }



 function filterPickAndAdd(arr){
    let message = "Que queres comprar? \n"

     arr.forEach((b) => {
         message += `${arr.indexOf(b) + 1}: ${b.productName}, Precio: ${b.price} \n`;
     });

     let pickAProduct = (Number(prompt(message))-1);

     if (pickAProduct <= arr.length){
         cartList.unshift(arr[pickAProduct]);
         cartItems++;
         alert(`Agregaste ${cartList[0].productName} al carrito`)
         let x = confirm("Queres seguir comprando?")

         if(x===true){
            startShoppingProcess()
            // hacer una funcion para preguntar que compra

         } else {
            alert("Tu carrito suma: " + cartBilling(cartList));

            let confirmar = confirm("Estas contentx con tu compra?")
            if (confirmar===true){
                alert(`Compra finalizada, tu monto total es de ${cartBilling(cartList)}` )   
            }

            while(confirmar !== true){
                let z = "Que item queres borrar? \n\n"
                cartList.forEach((y) => {
                    z += `${cartList.indexOf(y) +1}: ${y.productName} \n`;
                })
                let productSacrifce = (Number(prompt(z))-1);

                if (productSacrifce <=cartList.length){
                    garbage.unshift(cartList[productSacrifce]);
                    cartList.splice(productSacrifce,1);
                    cartItems--;
                    alert(`Eliminaste ${garbage[0].productName} del carrito`)
                    lastConfirm = confirm("Estas contentx con tu compra?")
                    if (lastConfirm===true){
                        alert(`Compra finalizada, tu monto total es de ${cartBilling(cartList)}` );
                        x===false;   
                        break
                    }
                }
            }
         }
     }
 };




/*

                let all = "Elegiste ver todos los productos: \n";
                
                allProducts.forEach((a)=>{
                    all += `${allProducts.indexOf(a) + 1}: ${a.productName}, Precio: ${a.price} \n`;
                })
                let chooseYourProduct = (Number(prompt(all))-1)

                if (chooseYourProduct <= allProducts.length){
                    cartList.push(allProducts[chooseYourProduct])
                    cartItems++;
                    alert(`Agregaste ${cartList[0].productName} al carrito`)
                    startShoppingProcess();
                };
*/

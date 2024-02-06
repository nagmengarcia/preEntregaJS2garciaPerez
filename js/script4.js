
// mi idea es generar un array con todos los productos para poder ir filtrando luego, tuve que esconder un par porque me quedaba muy largo el alert


// defino array General
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
];


// creo mis filtros 

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


// ==========================================================================================


// Seteo el primer disparador para comprar


// declaro la variable startShopping
let startShopping

// declaro la funcion de empezar a comprar
function startShoppingProcess(){
    startShopping = confirm("Te interesa comprar algo?");
};

// la llamo para empezar
startShoppingProcess();

// ==========================================================================================


//seteo a 0 la cant de items inicial del carrito, que luego planeo agregar y restar
let cartItems = 0;

// genero un array vacio para el carrito donde unshifteare productos
const cartList = [];

// y un array vacio  para los elementos que elimine del carrito
const garbage = [];

// creo una funcion para que me calcule el precio total del carrito
function cartBilling(myArr){
    let cartBill = 0;

    myArr.forEach(a => {
        cartBill += a.price;
    });
    return cartBill;
};

let finishProcess = false

// Aca hago una salida para cuando el user no quiere comprar

while (startShopping !== true){
    if(cartItems === 0 ){
        let quitConfirm = confirm("Todavia no compraste nada, queres comprar algo?")
        if (quitConfirm === true) {
            startShoppingProcess()
        } else {
            alert("Andate tranqui, nadie te va a disparar por la espalda 🔫");
            break;
        };
    } //aca podria agregar un else if...
};




// aca hago un bucle para comprar cada vez que se la gente quiera seguir comprando.
while (startShopping === true && finishProcess !== true) {
    
    //Primero quiero que se filtre por categoria
    let filter1 = prompt("Bienvenido a la tienda de futbol retro, que categoria te interesaria ver? \n\n 1 - Todo. \n 2 - Equipos Internacionales \n 3 - Equipos de Argentina \n 4 - Selección Argentina");

        switch(filter1) {
            case "1":
                let subFilter1 = prompt("Elegiste ver todas las categorias, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");

            switch(subFilter1){
                case "1":
                    //tal como lo sugiere la funcion, elegimos un array
                    testearYBifurcar(allProducts);
                    break;
                

                case "2":
                    testearYBifurcar(allProductsCamisetas);
                    break;
                    
                
                case "3":
                    testearYBifurcar(allProductsShorts);
                    break;
                    

                case "4":
                    testearYBifurcar(allProductsCamperas);
                    break;
                    
                    
            };
            break;
            // fin todos , comienzo internacional
            case "2":
                let subFilter2 = prompt("Elegiste ver todas las prendas de Equipos internacionales, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");
                
                switch(subFilter2){
                    
                case "1":
                    testearYBifurcar(equiposInternacionales);
                    break;
                    
                
                case "2":
                    testearYBifurcar(equiposInternacionalesCamisetas);
                    break;
                    
                
                case "3":
                    testearYBifurcar(equiposInternacionalesShorts)
                    break;
                    
        
                case "4":
                    testearYBifurcar(equiposInternacionalesCamperas)
                    break;
                    
                };
                break;
                // fin internacional , comienzo equipos de Arg
            case "3":
                let subFilter3 = prompt("Elegiste ver todas las prendas de Equipos de Argentina, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");
                
                switch(subFilter3){
                    
                case "1":
                    testearYBifurcar(equiposArgentinos);
                    break;
                    
                
                case "2":
                    testearYBifurcar(equiposArgentinosCamisetas);
                    break;
                    
                
                case "3":
                    testearYBifurcar(equiposArgentinosShorts)
                    break;
                    
        
                case "4":
                    testearYBifurcar(equiposArgentinosCamperas)
                    break;
                    
                };
                break;
                // fin todos , comienzo internacional
            case "4":
                let subFilter4 = prompt("Elegiste ver todas las prendas del Seleccionado Argentino, que producto te interesa ver \n\n 1 - Todos \n 2 - Camisetas \n 3 - Shorts \n 4 - Camperas");
                
                switch(subFilter4){
                    
                case "1":
                    testearYBifurcar(seleccionArgentina);
                    break;
                
                
                case "2":
                    testearYBifurcar(seleccionArgentinaCamisetas);
                    break;
                    
                
                case "3":
                    testearYBifurcar(seleccionArgentinaShorts)
                    break;
                    
        
                case "4":
                    testearYBifurcar(seleccionArgentinaCamperas)
                    break;
                    
                }
                break;

            
        };


};


// creo una funcion para filtrar arrays donde muestro la lista de productos de ese array
// comienzo function filterPickAndAdd


// Esta funcion es para aplicar los filtros y mostrar un titulo personalizado asi aplico DRY

function testearYBifurcar(a){
    if (a.length > 0){
        filterPass(a)
    } else if (a.length === 0){
        alert(a)
    } 
}

function arrayAndMessage(array,titulo){
    let m = titulo + "\n\n";
    array.forEach((x) => {
        m += `${cartList.indexOf(x) +1} - ${x.productName}, Precio: ${x.price} \n`;
    }) 
    let c = (Number(prompt(m))-1);
    return c
}



// hago una funcion para mostrar filtrar un array, mostrar los objetos del array, elegir un objeto y agregar 



// esta es una funcion para detectar errores, si no hay errores pasa a la funcion recorrer
function filterError(a){

    if (a.length===0){
        let errorAlert = confirm("No hay productos que coincidan con tu busqueda \n\n Queres ver algo mas?");

        if (errorAlert === false && cartItems ===0){
            alert("Vuelvan prontos")
            finishProcess = true;
        } else if (errorAlert === false && cartItems > 0){
            alert(`Tu carrito suma ${cartBilling(cartList)}, y tenes ${cartItems} items en el`);
            let confirmPurchase = confirm("Esta tu carrito en orden?");
            // condicional interno
            if(confirmPurchase === true){
                alert(`Compra finalizada, tu monto total es de ${cartBilling(cartList)}, comprando ${cartItems} items`);
                finishProcess = true;
            };
            // while interno
            while(confirmPurchase !== true){
                // let deleteItem = "Que item queres borrar? \n\n";
                // cartList.forEach((x) => {
                //     deleteItem += `${cartList.indexOf(x) +1} - ${x.productName}, Precio: ${x.price} \n`;
                // }) 
                let d = arrayAndMessage(a,"Que item queres borrar?")

                if (d <= cartList.length){
                    garbage.unshift(cartList[d]);
                    cartList.splice(d,1);
                    cartItems--;
                    alert(`Eliminaste ${garbage[0].productName} del carrito, quedando ${cartItems} items en el carrito`)


                    confirmPurchase = confirm("Esta tu carrito en orden?");
                    if(confirmPurchase===true){
                        alert(`Compra finalizada, tu monto total es de ${cartBilling(cartList)}`);
                        finishProcess = true;
                        document.write("Gracias por tu compra.");
                    };
                };
            };
        };
    };
}

function filterPass(a){

    let add = arrayAndMessage(a, "Que queres comprar?")

    if (add <= arr.length) {
        cartList.unshift(a[add]);
        cartItems++;
        alert(`Agregaste ${cartList[0].productName} al carrito`);

        let continueShopping = confirm("Queres comprar algo mas?");

        if(continueShopping===true){
            startShoppingProcess();
        } else{
            // avisa mediante alert cual es el precio final, y cuantos items hay en el carrito
            alert(`Tu carrito suma ${cartBilling(cartList)}, y tenes ${cartItems} items`);
            confirmPurchase = confirm("Esta tu carrito en orden?")
            if (confirmPurchase===true){
                alert(`Compra finalizada, tu monto total es de ${cartBilling(cartList)}, comprando ${cartItems} items`);
                finishProcess = true;
            };
            while(confirmPurchase !== true){
                 let d = arrayAndMessage(a,"Que item queres borrar?")                 
                 
                 if (d <=cartList.length){
                     garbage.unshift(cartList[d]);
                     cartList.splice(minusProduct,1);
                     cartItems--;
                     alert(`Eliminaste ${garbage[0].productName} del carrito, quedando ${cartItems} items en el carrito`)
                     confirmPurchase = confirm("Esta tu carrito en orden?")
                     if (confirmPurchase===true){
                         alert(`Compra finalizada, tu monto total es de ${cartBilling(cartList)}`);
                         finishProcess = true;  
                         document.write("Gracias por tu compra!!!")
                     }
                 }
             }
        };
    };
};
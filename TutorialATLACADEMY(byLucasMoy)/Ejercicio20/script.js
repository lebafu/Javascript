window.onload=iniciar;

function iniciar(){
    const redNeuronal = new brain.NeuralNetwork();
    const datos =[
        {
            "input":{"R":199/255,"G":232/255, "B":1},
            "output":{"claro":1}
        },{
            "input": {"R":0.2,"G":0.11,"B":0.2},
            "output": {"oscuro":1},

        },{
            "input": {"R":0.1,"G":0.2,"B":0.3},
            "output": {"oscuro":1},
        },{
            "input":{"R":0.74,"G":0.78,"B":0.86},
            "output":{"claro":1}
        }
    ];
    redNeuronal.train(datos);
    //Verde Claro
    //let resultado= brain.likely({"R": 146/255,"G":251/255,"B":156/255},redNeuronal);
    //Rojo Oscuro
    let resultado= brain.likely({"R": 74/255,"G":2/255,"B":2/255},redNeuronal);
    alert(resultado);

}
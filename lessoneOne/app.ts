
interface paramDeputy{
lastname:string,
name:string,
habar?:{
    habarnyk:boolean,
    sizeHabar:number
}
}


class Persone{
weight:number;
height:number;
constructor(weight:number,height:number){
    this.weight=weight;
    this.height=height;
}
};

class Deputy extends Persone{
    paramDeputy:paramDeputy;

    constructor(paramDeputy:paramDeputy,height:number,weight:number){
        super(weight,height);
        this.paramDeputy=paramDeputy;
    };

    giveHabar(habar:number){
        if(this.paramDeputy.habar.habarnyk===true){
            if(this.paramDeputy.habar && this.paramDeputy.habar.sizeHabar==2000){
                console.log("Our persone took habar");
            }else{
                console.log('size of Habar isnt correct');
                
            }
        }else{
            console.log("Persone doesn't want to give habar!!");
            
        }
    }
};

class Fraction{
    listOfDepu:Array<paramDeputy>
    constructor(listOfDepu:Array<paramDeputy>){
     this.listOfDepu=listOfDepu;
    }

    addDeputy(persone:paramDeputy){
        this.listOfDepu.push(persone);
        console.log(this.listOfDepu);
        
    }
    deleteDeputy(){

    }
    removeAllHabarnyky(){
          for(let i=this.listOfDepu.length-1;i>=0;i--){
              if(this.listOfDepu[i].habar && this.listOfDepu[i].habar.habarnyk){                   
                  this.listOfDepu.splice(i,1);
              }
          }

    }
    writeMostHabarnyk(){
      let max =0;
      for(const id in this.listOfDepu){
          if(this.listOfDepu[id].habar && this.listOfDepu[id].habar.sizeHabar>max){
              max=this.listOfDepu[id].habar.sizeHabar;
          }
      }
      console.log(max,'maxx');
      
    }
    writeAllDeputy(){
     console.log(this.listOfDepu);
     
    }
    deleteAllDeputy(){
        this.listOfDepu=null;
        console.log(this.listOfDepu,'lisst');
        
    }
    writeAllSizeOfHabar(){
        let suma=0;
        for (const id in this.listOfDepu) {
            if(this.listOfDepu[id].habar && this.listOfDepu[id].habar.habarnyk){                   
               suma+=this.listOfDepu[id].habar.sizeHabar;
            }
        }
        console.log(suma,'sumaa');
        
    }
}
let id=0;
let deputy1: paramDeputy={name:'Vova',lastname:'Ivanov'};
let deputy2: paramDeputy={name:'Roman',lastname:'Ivanishyn',habar:{habarnyk:true,sizeHabar:1500}};
let deputy3: paramDeputy={name:'Vika',lastname:'Molochiy'};
let deputy4: paramDeputy={name:'Oleg',lastname:'Fedetskiy',habar:{habarnyk:true,sizeHabar:1500}};
let deputy5: paramDeputy={name:'Andriana',lastname:'Povoroznyk',habar:{habarnyk:true,sizeHabar:2000}};
 let arrDepu:Array<paramDeputy>=[deputy1,deputy2,deputy3,deputy4,deputy5];

 let svoboda=new Fraction(arrDepu);
//  svoboda.addDeputy({name:'Orysya',lastname:'Zalutska',habar:{habarnyk:true,sizeHabar:2000},id:id++})
svoboda.writeMostHabarnyk();

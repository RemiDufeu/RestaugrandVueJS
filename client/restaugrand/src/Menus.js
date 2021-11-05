export default class Menus {
    gethorsdoeuvre(){
        return this.horsdoeuvre;
    }
    getplatDuJour(){
     return this.platDuJour;
     }
     getDessert(){
         return this.Dessert;
     }
 
     Menus(horsdoeuvre , platDuJour ,  Dessert  ){
         this.horsdoeuvre = horsdoeuvre;
         this.platDuJour = platDuJour;
         this.Dessert = Dessert;
     }
     getMenus(){
         //1ère version
             this.horsdoeuvre="horsdoeuvre";
             this.platDuJour="platDuJour";
             this.Dessert="Dessert";
         }
           
 }
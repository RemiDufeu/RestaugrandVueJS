import Menus from './Menus.js'

export default class CartesDesPlats {
   
    
     CartesDesPlats(id ,Menu  ){

    }
  
    static ajouterMenus(menu){
        this.Menus.push(menu);
    }
    static afficherMenus(){
        this.Menus.forEach(menu=>console.log(menu));
    }
 
}
export default class ApiRestau {
    static root = "http://localhost:8080/api/restaurants"

    static async getRestaurant(pageSize = 10, currentPage = 1,name = '') {
        let dataRestau = await fetch(`${this.root}?pagesize=${pageSize}&page=${currentPage}&name=${name}`)
        let jsonRestau = await dataRestau.json()
        return jsonRestau
    }
    static async getOneRestau(id) {
      

           let dataRestau = await fetch(`${this.root}/${id}`)
        
         let jsonRestau = await dataRestau.json()
        // jsonRestau =  JSON.stringify(jsonRestau);
     
         return jsonRestau
     }
    static async getOneRestauCuisine(id) {
      
        console.log("IN GETONERESTAURANTCUISINE 1");
       //   let dataRestau = await fetch(`${this.root}/${id}`)
        let dataRestau = await fetch(`http://localhost:8080/api/restaurants/5f6a0a29d20dbe076d7b41e3`);
        let jsonRestau = await dataRestau.json();
        console.log("IN GETONERESTAURANTCUISINE  2");
       let jsonRestauCuisine = JSON.stringify(jsonRestau.restaurant.cuisine);
        console.log("CUISINE ==");
        console.log(jsonRestauCuisine); 

        return jsonRestau
 
        
        //return un object promise au lieu d'un string
        
    }
    static async getRestaurantCount() {
        let dataCountRestau = await fetch(`${this.root}/count`)
        let jsonCountRestau = await dataCountRestau.json()
        return jsonCountRestau.data
    }

    static async addRestaurant(form) {
        let promise = await fetch(this.root, {
            method: "POST",
            body: form
        })
        return promise
    }

      static async supprimerRestaurant(id) {
        console.log("reponseJSON");
        try {
            let reponseJSON = await fetch(this.root + "/" + id, {
                method:"DELETE"
            });
            console.log("reponseJSON : "+ reponseJSON)
            let reponseJS = await reponseJSON.json();
            console.log("Restaurant supprime : " + reponseJS.msg);
            this.getDataFromServer(); // on rafraichit l'affichage
        } catch(err) {
            if (!err.response) {
                // network error
                this.errorStatus = 'Error: Network Error';
            } else {
                this.errorStatus = err.response.data.message;
                console.log(this.errorStatus);
            }
           
        }
        
    }
    
}
export default class ApiRestau {
    static root = "http://localhost:8080/api/restaurants"

    static async getRestaurant(pageSize = 10, currentPage = 1,name = '') {
        let dataRestau = await fetch(`${this.root}?pagesize=${pageSize}&page=${currentPage}&name=${name}`)
        let jsonRestau = await dataRestau.json()
        return jsonRestau.data
    }

    static async getRestaurantCount() {
        let dataCountRestau = await fetch(`${this.root}/count`)
        let jsonCountRestau = await dataCountRestau.json()
        return jsonCountRestau.data
    }

    async supprimerRestaurant(id) {
        try {
            let reponseJSON = await fetch(this.root + "/" + id, {
                method:"DELETE"
            });
            let reponseJS = await reponseJSON.json();
            console.log("Restaurant supprime : " + reponseJS.msg);
            this.getDataFromServer(); // on rafraichit l'affichage
        } catch(err) {
            console.log("Erreur dans le fetchs DELETE " + err.msg);
        }
    }
    
}
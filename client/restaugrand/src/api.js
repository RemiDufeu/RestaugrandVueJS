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
        return jsonRestau
    }
    static async getRestaurantCount() {
        let dataCountRestau = await fetch(`${this.root}/count`)
        let jsonCountRestau = await dataCountRestau.json()
        return jsonCountRestau.data
    }

    static async updateRestaurant (id,form) {
        let promise = await fetch(`${this.root}/${id}`, {
            method: "PUT",
            body: form
        })
        return promise
    }

    static async addRestaurant(form) {
        let promise = await fetch(this.root, {
            method: "POST",
            body: form
        })
        return promise
    }

      static async supprimerRestaurant(id) {
        try {
            let reponseJSON = await fetch(this.root + "/" + id, {
                method:"DELETE"
            });
            let reponseJS = await reponseJSON.json();
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
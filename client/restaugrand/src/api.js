export default class ApiRestau {
    static root = "http://localhost:8080/api/restaurants/"

    static async getRestaurant() {
        let dataRestau = await fetch(this.root)
        let jsonRestau = await dataRestau.json()
        return jsonRestau.data
    }

    static async getRestaurantCount() {
        let dataCountRestau = await fetch(`${this.root}count`)
        let jsonCountRestau = await dataCountRestau.json()
        return jsonCountRestau.data
    }
}
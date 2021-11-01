<template>
    <div>
        <v-btn
            elevation="2"
            fab
            bottom
            fixed
            right
            color="secondary"
            @click="overlay = !overlay"
            >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-overlay
        :z-index="zIndex"
        :value="overlay"
        >
            <v-card class="pa-5" grow color="white" style="width:350px">
                <v-text-field
                class="pa-3"
                light
                color="primary"
                label="Nom du restaurant"
                required
                hide-details="auto"
                v-model="nomRestau"
                ></v-text-field>
                <v-text-field
                class="pa-3"
                light
                style="color : black"
                color="primary"
                label="Cuisine"
                required
                hide-details="auto"
                v-model="cuisine"
                ></v-text-field>
                <v-text-field
                class="pa-3"
                light
                style="color : black"
                color="primary"
                label="Adresse du restaurant"
                required
                hide-details="auto"
                v-model="borough"
                ></v-text-field>
                <v-alert type="error my-4" dense outlined dismissible v-if="error!=''">{{error}}</v-alert>
                <div class="pa-5 d-flex justify-space-between">
                    <v-btn
                        class="white--text"
                        color="error"
                        @click="overlay = false">
                        Retour
                    </v-btn>
                    <v-btn
                        class="white--text"
                        color="secondary"
                        @click="ajoutRestau()">
                        Enregistrer
                    </v-btn>
                </div>
            </v-card>
        </v-overlay>
    </div>
</template>

<script>
    import APIRestau from '../api'

    export default {
        name: 'ajoutRestau',
        data: () => ({
        overlay: false,
        zIndex: 10,
        error: '',
        nomRestau: '',
        borough: '',
        cuisine: ''
        }),
        methods : {
            ajoutRestau() {
                if (this.nomRestau == '') {
                    this.error = 'Veuillez renseigner le nom du restaurant'
                } else if (this.cuisine == '') {
                    this.error = 'Veuillez renseigner la cuisine du restaurant'
                } else if (this.borough == '') {
                    this.error = 'Veuillez renseigner la localisation du restaurant'
                } else {
                    APIRestau.addRestaurant(this.nomRestau,this.cuisine,this.borough).then(res => {
                        this.overlay = false
                        this.error = ''
                    })
                    .catch ( error => {
                        this.error = "une erreur inatendu est arrivé"
                    })
                }
            }
        }
    }
</script>
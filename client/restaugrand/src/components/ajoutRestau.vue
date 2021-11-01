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
                <form
                id="formAjout"
                action="/something" 
                method="post"
                @submit.prevent="ajoutRestau($event)">
                <v-text-field
                class="pa-3"
                light
                color="primary"
                label="Nom du restaurant"
                required
                hide-details="auto"
                v-model="nomRestau"
                name="nom"
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
                name="cuisine"
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
                name="borough"
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
                        type="submit">
                        Enregistrer
                    </v-btn>
                </div>
                </form>
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
            async ajoutRestau(e) {
                let form = e.target
                let donneesForm = new FormData(form)

                let retour = await APIRestau.addRestaurant(donneesForm)
                
                if(retour.ok) {
                    this.nomRestau = ''
                    this.borough = ''
                    this.cuisine = ''
                    this.overlay = false
                    this.error = ''
                } else {
                    this.error = retour.statusText
                }
                
            }
        }
    }
</script>
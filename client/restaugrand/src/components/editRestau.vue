<template>
    <v-overlay
    :z-index="zIndex"
    :value="overlayOn"
    >
        <v-card class="pa-5" grow color="white" style="width:350px">
            <form
            id="formAjout"
            action="/something" 
            method="post"
            @submit.prevent="updateRestau($event)">
            <v-text-field
            class="pa-3"
            light
            color="primary"
            label="Nom du restaurant"
            required
            hide-details="auto"
            v-model="itemEdition.name"
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
            v-model="itemEdition.cuisine"
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
            v-model="itemEdition.borough"
            name="borough"
            ></v-text-field>
            <v-alert type="error my-4" dense outlined dismissible v-if="error!=''">{{error}}</v-alert>
            <div class="pa-5 d-flex justify-space-between">
                <v-btn
                    class="white--text"
                    color="error"
                    @click="closeOverlay">
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
</template>

<script>
    import APIRestau from '../api'

    export default {
        name: 'editRestau',
        props: ['overlayOn','itemEdition', 'closeOverlay', 'refreshRestau'],
        data: () => ({
        zIndex: 10,
        error: '',
        nomRestau: '',
        borough: '',
        cuisine: ''
        }),
        methods : {
            async updateRestau(e) {
                let form = e.target
                let donneesForm = new FormData(form)

                let retour = await APIRestau.updateRestaurant(this.itemEdition.id,donneesForm)
                
                if(retour.ok) {
                    this.closeOverlay()
                    this.error = ''
                    this.refreshRestau()
                } else {
                    this.error = retour.statusText
                }
                
            }
        }
    }
</script>
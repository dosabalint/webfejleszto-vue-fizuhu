<template>
    <form>
        <div class="row py-5 mx-4">

            <!-- gender -->
            <div class="col-12 col-md-7 py-md-3">
                <p>Neme</p>
            </div>
            <div class="col-12 col-md-5 py-md-3 mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="genderMale" name="gender" value="male" required v-model="fields.gender">
                    <label class="form-check-label" for="genderMale">Férfi</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="genderFemale" name="gender" value="female" required v-model="fields.gender">
                    <label class="form-check-label" for="genderFemale">Nő</label>
                </div>
            </div>

            <!-- county -->
            <div class="col-12 col-md-7 py-md-3">
                <p>Melyik megyében végzi a munkáját?</p>
            </div>
            <div class="col-12 col-md-5 py-md-3 mb-3">
                <input type="text" class="form-control" required v-model="fields.county">
            </div>

            <!-- sector -->
            <div class="col-12 col-md-7 py-md-3">
                <p>Melyik ágazatban dolgozik?</p>
            </div>
            <div class="col-12 col-md-5 py-md-3 mb-3">
                <select class="form-control" v-model="fields.sector">
                    <option :value="null">Válassz</option>
                    <option>Informatika</option>
                    <option>Mezőgazdaság</option>
                    <option>Vendéglátás</option>
                </select>
            </div>

            <!-- job -->
            <div class="col-12 col-md-7 py-md-3">
                <p>Milyen munkakörben dolgozik?</p>
            </div>
            <div class="col-12 col-md-5 py-md-3 mb-3">
                <input type="text" class="form-control" required v-model="fields.job">
            </div>
        
            <!-- income -->
            <div class="col-12 col-md-7 py-md-3">
                <p>Mennyi a havi bruttó keresete?</p>
            </div>
            <div class="col-12 col-md-5 py-md-3 mb-3">
                <input type="number" class="form-control" required v-model="fields.income">
            </div>

            <!-- submit -->
            <div class="col-12 text-center my-5">
                <button class="btn btn-outline-success" type="submit" @click="Submit">Elküldöm</button>
            </div>

            <!-- alertek -->

            <div class="col-12 alert alert-success" role="alert" v-if="alerts.success">
                Sikeresen beküldted az üzenetet!
                Itt megnézheted a statisztikánkat: <router-link to='/statistics'>Link</router-link>
            </div>

            <div class="col-12 alert alert-danger" role="alert" v-if="alerts.fail">
                Valami elromlozz üzenetküldés közben. <br>
                Kérlek írd meg nekünk a hiba körülményeit ide: 
                <a href="mailto:support@fizu.hu">support@fizu.hu</a>
            </div>
        </div>
    </form>
    <!-- /rövid kérdőív -->
</template>

<script>
import DataService from '../DataService';

export default {
    data() {
        return {
            fields: {
                gender: null,
                county: null,
                sector: null,
                job: null,
                income: null
            },
            alerts: {
                success: false,
                fail: false
            }
        };
    },
    methods: {
        Submit(event) {
            const missingValues = Object.values(this.fields).filter(value => {
                return !value;
            });

            if (missingValues.length == 0) {
                // form submit prevent
                event.preventDefault();
                
                // POST
                DataService.PostSurveyResponse(this.fields).then(success => {
                    if (success) {
                        this.ShowThanksAlert();
                    } else {
                        this.ShowFailAlert();
                    }
                });
            }
        },
        HideAllAlert() {
            this.alerts.success = false;
            this.alerts.fail = false;
        },
        ShowThanksAlert() {
            this.alerts.success = true;
        },
        ShowFailAlert() {
            this.alerts.fail = true;
        }
    }
};
</script>


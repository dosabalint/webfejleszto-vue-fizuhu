<template>
    <div class="container my-5">
        <h2 class="mb-5">Kapcsolat</h2>

        <form class="mb-3">
            <div class="row">
                
                <div class="form-group col-12 col-md-6">
                    <label for="inputName">Név</label>
                    <input type="email" class="form-control" id="inputName" v-model="name">
                </div>
                
                <div class="form-group col-12 col-md-6">
                    <label for="inputEmail">Email cím</label>
                    <input type="email" class="form-control" id="inputEmail" v-model="email">
                </div>

                <div class="form-group col-12">
                    <label for="inputUzenet">Üzenet</label>
                    <textarea class="form-control" id="inputUzenet" rows="3" v-model="message"></textarea>
                </div>
             
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" 
                        @click.prevent="Submit()">Küldés</button>
                </div>

            </div>
        </form>    

        <!-- alertek -->
        
        <div class="alert alert-success" role="alert" v-if="alerts.success">
            Sikeresen beküldted az üzenetet!
        </div>

        <div class="alert alert-danger" role="alert" v-if="alerts.fail">
            Valami elromlozz üzenetküldés közben. <br>
            Kérlek írd meg nekünk a hiba körülményeit ide: 
            <a href="mailto:support@fizu.hu">support@fizu.hu</a>
        </div>

        <div class="alert alert-warning" role="alert" v-if="alerts.warning">
            Ejnye, valamelyik mező kimaradt!
        </div>
    </div>
</template>

<script>
import DataService from '../DataService';

export default {
    name: 'concact',
    data() {
        return {
            name: null,
            email: null,
            message: null,
            alerts: {
                success: false,
                fail: false,
                warning: false
            }
        };
    },
    methods: {
        Submit() {
            this.HideAllAlert();

            // validálás
            if (!this.name || !this.email || !this.message) {
                this.ShowWarning();
                return;
            }

            // dátum
            const now = new Date();

            // POST
            DataService.PostContactMessage({
                name: this.name,
                email: this.email,
                message: this.message,
                time: now.toLocaleDateString() + now.toLocaleTimeString()
            }).then(success => {
                if (success) {
                    this.ShowSuccess();
                } else {
                    this.ShowFail();
                }
            });
        },
        HideAllAlert() {
            this.alerts.warning = false;
            this.alerts.success = false;
            this.alerts.fail = false;
        },
        ShowSuccess() {
            this.alerts.success = true;
        },
        ShowFail() {
            this.alerts.fail = true;
        },
        ShowWarning() {
            this.alerts.warning = true;
        }
    }
};
</script>


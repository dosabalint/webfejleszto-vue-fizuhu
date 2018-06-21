<template>
    <div>

        <div class="container my-5 pt-5">
            <div class="row mb-5">
                <div class="col-11 mx-auto mx-sm-0">
                    <h2>{{ post.title }}</h2>
                    <p>Horvát Zoltán, {{ post.date }}</p>
                </div>
            </div>
            <div class="row text-justify">
                <div class="col-11 mx-auto mx-sm-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloribus, earum, eum aliquam porro repellendus fugiat
                    neque nulla natus consectetur unde quisquam assumenda maxime ipsam accusamus id quo. Eveniet nemo in suscipit debitis
                    repellat aut, possimus quas deleniti architecto, at eum, quasi perferendis! Maiores laborum esse ipsam error sequi
                    aliquid neque. Repellat quas velit cupiditate fugiat, nobis quisquam animi, quibusdam repellendus laudantium consectetur,
                    consequatur commodi temporibus porro earum unde aut labore fugit!</p>
                </div>
                <div class="col-11 col-lg-7 text-justify my-auto mx-auto mx-sm-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae et voluptatem architecto deserunt molestiae,
                    perspiciatis enim optio, nesciunt odit eos eum? Eaque dignissimos tenetur inventore dicta. Vel eveniet atque inventore,
                    asperiores tenetur ducimus adipisci ipsa, iure reiciendis. Earum culpa, excepturi consequuntur magnam nostrum,
                    alias officiis distinctio placeat repellendus at, rem aperiam necessitatibus vero quisquam consectetur facere?
                    Corrupti exercitationem architecto quibusdam, cumque quae debitis, soluta beatae quo, itaque totam repellat eaque.</p>
                </div>
                <div class="col-11 col-lg-4 text-center mx-auto mx-sm-0">
                    <img src="../img/graficon_cikk.png" alt="grafikon_cikk" class="img-fluid">
                </div>
                <div class="col-11 mx-auto mx-sm-0">
                    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam fuga delectus vitae, iure, est enim tempora aut
                    sint aspernatur nesciunt ipsam placeat officiis natus reiciendis velit dolore veniam ad neque a pariatur voluptas
                    fugiat. Beatae modi odio quibusdam, labore atque accusamus voluptatum repellendus numquam accusantium nam soluta
                    eius sunt illum? Expedita error magnam, rem, inventore suscipit ut quibusdam, tempora non dolorem delectus repellat
                    nemo, quae. Similique deleniti saepe ullam beatae voluptas sunt, fuga nesciunt qui distinctio voluptatum molestias
                    eos quo, adipisci rerum placeat impedit culpa porro aliquid accusamus dignissimos. Accusantium eaque totam vel
                    provident rem consequuntur molestiae quo sed architecto expedita, esse delectus, consectetur, praesentium unde
                    omnis nobis impedit. Excepturi suscipit, consectetur blanditiis quas, architecto eum ut. Dolorem mollitia placeat
                    natus aut quibusdam voluptatum reiciendis perferendis fuga architecto eum maiores debitis, quae quia laborum quidem
                    voluptatibus inventore perspiciatis, ea soluta beatae qui facilis molestias? Molestias eaque, itaque mollitia numquam
                    natus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione saepe, possimus fugiat quidem blanditiis quia!
                    Quos maiores quae molestias alias at, ad laboriosam, dicta ex nam quas eveniet beatae repudiandae reiciendis saepe!
                    Est quam ipsum voluptates magnam earum natus suscipit quibusdam, pariatur provident iusto? Repellendus error ratione
                    blanditiis quaerat, eum cumque ex perspiciatis. Quidem dicta, ab rerum adipisci consequuntur repellat excepturi
                    dignissimos inventore saepe debitis velit qui repellendus totam nulla voluptate vero hic ea asperiores voluptatum
                    aut quam error nesciunt culpa? Temporibus earum placeat modi harum tempore officia esse, dolorum voluptates. Corporis
                    nemo vitae in odio obcaecati nesciunt minus aut!</p>
                </div>
                
                <!-- <a href="#" title="Facebook" class="btn btn-facebook m-3">
                    <img src="img/like.svg" height="20" alt="" class="mr-2 mb-1">
                    Tetszik
                </a>

                <a href="#" title="Facebook" class="btn btn-facebook m-3">
                    <img src="img/facebook.svg" height="20" alt="" class="mr-2 mb-1">
                    Megosztom
                </a> -->

            </div>
        </div>

        <!-- <div class="container my-5">

            <div class="media">
                <img class="mr-3 img-fluid" src="img/profil.png" alt="Generic placeholder image" width="60">
                <div class="media-body">
                    <h5 class="mt-0">Media heading</h5>
                    
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.

                    <div class="media mt-3">
                        <a class="pr-3" href="#">
                            <img src="img/profil.png" alt="Generic placeholder image" class="img-fluid" width="60">
                        </a>
                        <div class="media-body">
                            <h5 class="mt-0">Media heading</h5>
                            
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                            felis in faucibus.
                        </div>
                    </div>
                </div>
            </div>

            <form class="mt-5">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                        <h3>Kommentelj</h3>
                    </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form> -->
        </div>
    </div>

</template>

<script>
import DataService from '../DataService';

export default {
    data() {
        return {
            post: null
        };
    },

    created() {
        DataService.GetPost(this.$route.params.postID).then(post => {
            this.post = post;
        });
    }
};
</script>

<template>
    <div>
        
        <Jumbotron buttonText="Tovább a kérdőívekre!" buttonHref="#">
            <template slot="title">Mennyit keresnék, ha...?</template>
            <template slot="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fugiat sequi, placeat dolor aliquid porro a quisquam ut, accusantium quasi assumenda maiores ipsum vel.</template>
        </Jumbotron>

        <div class="container py-5">
            <div class="row py-5">
                
                <div class="col-12 col-md-6 col-lg-4 mb-5 mb-md-0 text-center px-4">
                    <img src="../img/graf1.png" alt="" class="img-fluid mb-4" width="150">
                    <p>
                        A diplomások
                        <span class="font-lg">
                            <strong>268%</strong>
                        </span>
                        -kal keresnek többet a diplomával nem rendelkezőknél!
                    </p>
                </div>

                <div class="col-12 col-md-6 col-lg-4 my-5 my-md-0 text-center px-4">
                    <img src="../img/graf2.png" alt="" class="img-fluid mb-4" width="150">
                    <p>
                        Az IT szakmában dolgozók
                        <span class="font-lg">
                            <strong>395%</strong>
                        </span>
                        -kal keresnek többet az átlagnál!
                    </p>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0 text-center px-4 mx-auto">
                    <img src="../img/graf3.png" alt="" class="img-fluid mb-4" width="150">
                    <p>
                        A Budapesten élők
                        <span class="font-lg">
                            <strong>310%</strong>
                        </span>
                        -kal keresnek többet vidéken élő társaikhoz képest!
                    </p>
                </div>
            </div>
        </div>

        <section class="bg-green py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-5 mb-md-0 col-md-5 my-md-auto">
                        <div class="card py-3 home-card">
                            <div class="card-body mx-auto">
                                <h4 class="card-title mb-4">Hogyan használd a fizu.hu-t?</h4>
                                <ol>
                                    <li class="py-2">Regisztrálj!</li>
                                    <li class="py-2">Töltsd ki a kérdőívet</li>
                                    <li class="pt-2">Böngéssz a statisztikák között</li>
                                </ol>
                                <div class="text-center">
                                    <a class="btn btn-outline-success px-3" href="regisztracio.html" role="button">Regisztrálok!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 my-auto">
                        <h3 class="mb-3">Mire jó a fizu.hu?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam alias modi repellendus eos accusantium officiis dicta quam minus qui dignissimos.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officiis, est quam ducimus possimus animi autem. Ullam ducimus, veniam aut et, quisquam fugit animi ea repellendus voluptatum totam sequi quod excepturi. Aperiam nostrum officiis soluta!</p>
                    </div>
                </div>
            </div>
        </section>

        <YoutubeEmbedSection 
            src="https://www.youtube.com/embed/FiCtolh3hX4?list=PL4cUxeGkcC9g_69kOfXICzT_hZ79_td99"
            title="Videó beágyazása a weboldalba">
        </YoutubeEmbedSection>

        <section class="bg-green py-5">
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide padding" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner col-11 mx-auto">
                        
                        <div class="carousel-item active">
                            <blockquote class="blockquote text-center my-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">
                                    Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </div>

                        <div class="carousel-item">
                            <blockquote class="blockquote text-center my-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">
                                    Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                </footer>   
                            </blockquote>
                        </div>

                        <div class="carousel-item">
                            <blockquote class="blockquote text-center my-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">
                                    Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue';
import YoutubeEmbedSection from '../components/YoutubeEmbedSection.vue';

export default {
    components:{
        Jumbotron,
        YoutubeEmbedSection
    }
};
</script> 

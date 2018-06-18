<template>
    <section class="container py-5">
        <div class="row">
            <div class="col-12 col-md-8 mx-auto">
                <h3 class="mb-4">
                    {{ title }}
                </h3>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" :src="src" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'src']
};
</script>


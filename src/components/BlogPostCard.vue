<template>
    <div class="card blog-card">
        <img class="card-img-top" :src="post.imageSrc" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title text-uppercase">
                {{ post.title }}    
            </h5>
            <p class="card-text">
                {{ post.lead }}
            </p>
            <div class="d-flex flex-row justify-content-between align-items-center mt-4">
                <small class="text-muted">{{ post.date }}</small>
                <router-link :to="{ name: 'blogPost', params: { postID: post.id }}" class="mt-0">Tovább olvasom</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post']
};
</script>

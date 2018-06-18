<template>
    <div class="jumbotron jumbotron-fluid mb-0">
        <div class="container">
            <h1>
                <slot name="title"></slot>
            </h1>
            <p class="lead">
                <slot name="lead"></slot>
            </p>
            <a class="btn btn-green btn-lg mt-3" :href="buttonHref" role="button">{{ buttonText }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['buttonHref', 'buttonText']
};
</script>

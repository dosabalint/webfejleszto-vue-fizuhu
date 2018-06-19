<template>
    <div class="mt-5">
        <h3>Kategóriák</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <a href="" @click.prevent="OnCategoryClickAll()">Összes</a>
            </li>
            <li class="list-group-item" v-for="category in categoryCollection">
                <a href="" @click.prevent="OnCategoryClick(category)">{{ category }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['postCollection'],
    computed: {
        categoryCollection() {
            const categories = this.postCollection.map(post => {
                return post.category;
            });

            return categories.filter((item, index) => {
                return categories.indexOf(item) == index;
            });
        }
    },
    methods: {
        OnCategoryClick(category) {
            this.$emit('cagetoryChange', category);
        },
        OnCategoryClickAll(category) {
            this.$emit('cagetoryChange');
        }
    }
};
</script>

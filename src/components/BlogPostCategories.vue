<template>
    <div class="mt-5">
        <h3>Kategóriák</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <router-link :to="{ name: 'blog' }">
                    Összes
                </router-link>
            </li>
            <li class="list-group-item" v-for="category in categoryCollection">
                <router-link :to="{ name: 'blogCategory', params: { categoryName: category }}">
                    {{ category }}
                </router-link>
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

<template>
    <div class="card prova">
        <img :src="fullPath" class="card-img-top" alt="...">
        <div class="card-body">
            <h3>{{ film.original_title }}</h3>
            <h5>{{ film.title }}</h5>
            <span>Lingua: </span>
            <img :src="getLang(film.original_language)" alt="">
            <div>
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 1 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 2 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 3 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 4 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 5 }" />
            </div>

            <!-- <p>{{ star(roundStar) }}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagePath: 'https://image.tmdb.org/t/p/w342/',
            icons: []
        }
    },
    props: {
        film: {
            type: Object,
            required: true
        }
    },
    computed: {
        fullPath() {
            return this.imagePath + this.imageName;
        },
        imageName() {
            return this.film.poster_path;
        },
        roundStar() {
            return Math.round(this.film.vote_average / 2)
        }
    },
    methods: {
        getLang(flag) {
            switch (flag) {
                case 'en':
                    return ('https://flagcdn.com/32x24/gb.png')
                case 'fr':
                    return ('https://flagcdn.com/32x24/fr.png')
                case 'it':
                    return ('https://flagcdn.com/32x24/it.png')
                default:
                    return ('https://flagcdn.com/32x24/sc.png')
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.prova {
    background-image: var(fullPath);
}
</style>
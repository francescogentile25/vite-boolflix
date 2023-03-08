<template>
    <div class="card">
        <img :src="fullPath" class="card-img-top" alt="...">
        <div class="card-body">
            <p>{{ film.original_title }}</p>
            <p>{{ film.title }}</p>
            <span>Lingua: </span>
            <img :src="getLang(film.original_language)" alt="">
            <font-awesome-icon icon="fa-solid fa-star" />
            <p>{{ roundStar }}</p>
            <!-- <p>{{ star(roundStar) }}</p> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagePath: 'https://image.tmdb.org/t/p/w342/',
            // icons: []
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
        // star(vote) {
        //     switch (vote) {
        //         case 1:
        //             return (`<i v-for="(icon, index) in icons" :key="index" :class="{ 'highlighted': index < 1 }" class="fa fa-{{ icon }}"></i>`)
        //         case 2:
        //             return (`<i v-for="(icon, index) in icons" :key="index" :class="{ 'highlighted': index < 2 }" class="fa fa-{{ icon }}"></i>`)
        //         case 3:
        //             return (`<i v-for="(icon, index) in icons" :key="index" :class="{ 'highlighted': index < 3 }" class="fa fa-{{ icon }}"></i>`)
        //         case 4:
        //             return (`<i v-for="(icon, index) in icons" :key="index" :class="{ 'highlighted': index < 4 }" class="fa fa-{{ icon }}"></i>`)
        //         case 5:
        //             return (`<i v-for="(icon, index) in icons" :key="index" :class="{ 'highlighted': index < 5 }" class="fa fa-{{ icon }}"></i>`)
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
.highlighted {
    color: yellow;
}
</style>
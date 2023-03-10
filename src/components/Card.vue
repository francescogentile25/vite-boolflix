<template>
    <div class="card  overflow-auto shadow" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <img v-if='fullPath === undefined' src="../assets/favicon.ico" alt="">
        <img :src="fullPath" class="card-img-top" alt="...">
        <div class=" description" :class="{ visible: isHover }">
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
            <p class="overview">{{ film.overview }}</p>
            <p>{{ this.store.cast }}</p>
        </div>
    </div>
</template>

<script>
import store from '../store'
import axios from 'axios'
export default {
    data() {
        return {
            store,
            imagePath: 'https://image.tmdb.org/t/p/w342/',
            isHover: false,
        }
    },
    props: {
        film: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
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
        fetchCast() {
            axios
                .get('https://api.themoviedb.org/3/tv/671/credits?api_key=f96597e112b6db7164f5627643c3e970', {
                    params: {
                        movie_id: this.id,
                        language: 'it-IT',
                    }
                })
                .then((res) => {
                    this.store.cast = res.data.cast[0].name
                    // console.log(this.store.cast)
                    // for (let i = 0; i < 5; i++) {
                    // this.store.cast.push(res.data.cast[i].name);
                    // }
                })
        },
    },
    created() {
        this.fetchCast()
    }
}
</script>

<style lang="scss" scoped>
.card {
    color: white;
    position: relative;
    background-color: rgb(61, 60, 60);
}

.description {

    background-color: rgb(61, 60, 60);
    opacity: 0.8;
    padding: 20px;
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

}

.visible {
    display: block
}

.overview {
    border-top: 2px dotted white;
    margin-top: 20px;
    padding-top: 10px;
}
</style>
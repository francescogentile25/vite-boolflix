<template>
    <div class="card overflow-auto shadow" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <img :src="fullPath" class="card-img-top" alt="...">
        <div class=" description" :class="{ visible: isHover }">
            <h3>{{ tv.original_name }}</h3>
            <h5>{{ tv.name }}</h5>
            <span>Lingua: </span>
            <img :src="getLang(tv.original_language)" alt="">
            <div>
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 1 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 2 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 3 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 4 }" />
                <font-awesome-icon icon="fa-solid fa-star" :class="{ 'text-warning': roundStar >= 5 }" />
            </div>
            <p>{{ tv.overview }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imagePath: 'https://image.tmdb.org/t/p/w342/',
            isHover: false,
        }
    },
    props: {
        tv: {
            type: Object,
            required: true
        }
    },
    computed: {
        fullPath() {
            return this.imagePath + this.imageName;
        },
        imageName() {
            return this.tv.poster_path;
        },
        roundStar() {
            return Math.round(this.tv.vote_average / 2)
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
</style>
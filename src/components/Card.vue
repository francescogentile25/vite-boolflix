<template>
    <div class="card g-col-6">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <p>{{ film.original_title }}</p>
            <p>{{ film.title }}</p>
            <span>Lingua: </span>
            <img :src="getLang(film.original_language)" alt="">
            <p>{{ film.vote_average }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        film: {
            type: Object,
            required: true
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

<style lang="scss" scoped></style>
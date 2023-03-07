<template>
    <div class="card g-col-6">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p>{{ film.original_title }}</p>
            <p>{{ film.title }}</p>
            <p>{{ film.original_language }}</p>
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
                    return ('https://picsum.photos/200')
                case 'fr':
                    return ('https://picsum.photos/100')
                case 'it':
                    return ('https://picsum.photos/400')
                default:
                    return ('https://picsum.photos/600')
            }
        },
    }
}
</script>

<style lang="scss" scoped></style>
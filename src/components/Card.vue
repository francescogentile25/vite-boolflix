<template>
    <ul>
        <li>
            <p>{{ film.original_title }}</p>
            <p>{{ film.title }}</p>
            <p>{{ film.original_language }}</p>
            <p>{{ film.vote_average }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        film: {
            type: Object,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped></style>
<template>
    <nav class="navbar  bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
                <img src="../assets/favicon.ico" alt="Logo" class="d-inline-block align-text-top">
                BoolFlix
            </a>
            <div class="d-flex">
                <input class="form-control me-2" placeholder="Ricerca" @keyup.enter="$emit('ricerca')"
                    v-model="store.search">
                <button class="btn btn-outline-success" type="submit">Ricerca</button>
            </div>
        </div>
    </nav>
</template>

<script>
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped></style>
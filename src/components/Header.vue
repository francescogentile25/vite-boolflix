<template>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
                <img src="../assets/logo.png" alt="Logo" class="d-inline-block align-text-top logo">

            </a>
            <div class="d-flex">
                <input class="form-control me-2" placeholder="Ricerca" @keyup.enter="$emit('ricerca')"
                    v-model="store.search">
                <button class="btn btn-outline-danger" type="submit" @click="$emit('ricerca')">
                    Ricerca
                </button>
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

<style lang="scss" scoped>
.logo {
    max-width: 200px;
}
</style>
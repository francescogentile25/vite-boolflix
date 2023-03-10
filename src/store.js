import { reactive } from 'vue'
const store = reactive({
    films: [],
    tv: [],
    search: '',
    cast: []
})
export default store
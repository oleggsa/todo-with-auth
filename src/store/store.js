import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    todoList: [
        {id: 10, title: 'et Malorum', description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain'},
        {id: 3, title: 'Rackham', description: 'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure'},
        {id: 2, title: 'de Finibus', description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. '},
        {id: 1, title: 'Lorem Ipsum', description: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?'},
    ],
}
const getters = {
    getTodos: state => {
        return state.todoList
    }
}

const mutations = {
    updateTodoList (state, newArr) {
        state.todoList = newArr;
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})
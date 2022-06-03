const state = {
    todoList: localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : []
}
const getters = {
    getTodos: state => {
        return state.todoList
    }
}

const mutations = {
    updateTodoList (state, newArr) {
        localStorage.setItem('todos', JSON.stringify(newArr))
        state.todoList = newArr;
    }
}

export default ({
    state,
    getters,
    mutations
})
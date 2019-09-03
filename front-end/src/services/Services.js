import Api from './Api'

export default {

    getRoute () {
        return Api().get('route')
    },

    getList () {
        return Api().get('list')
    },

    getResult (body) {
        return Api().post('result',body)
    }

}
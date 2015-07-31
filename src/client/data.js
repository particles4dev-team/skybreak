import axios from 'axios';

module.exports = {
    getPosts: function (routerName) {
    	return axios.get('/api/posts')
        .then(function (response) {
            return {
                data: response.data,
                routerName: routerName
            };
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    getPost: function () {
        console.warn('this function only work on server');
    },
    getCategories: function () {
        console.warn('this function only work on server');
    },
    getCategory: function () {
        console.warn('this function only work on server');
    }
};
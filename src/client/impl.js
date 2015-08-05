import axios from 'axios';

module.exports = {
    getPosts: function (routerName) {
    	return axios.get('/api/v0/posts')
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
    getPost: function (id, routerName) {
      return axios.get('/api/v0/post/' + id)
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
    getCategories: function (routerName) {
        return axios.get('/api/v0/categories')
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
    getCategory: function (id, routerName) {
        return axios.get('/api/v0/category/' + id)
        .then(function (response) {
            return {
                data: response.data,
                routerName: routerName
            };
        })
        .catch(function (error) {
            console.log(error);
        });
    }
};

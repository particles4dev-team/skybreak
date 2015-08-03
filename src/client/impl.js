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
    getPost: function (id, routerName) {
      return axios.get('/api/post/' + id)
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
        return axios.get('/api/categories')
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
        return axios.get('/api/category/' + id)
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

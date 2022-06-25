const app = new Vue({
    el: '#app',

    data: {
        albums: [],
    },

    created() {
        axios.get('http://localhost/php-ajax-dischi/server/api.php')
        .then((response) => {
            // handle success
            this.albums = response.data;
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    },

});

<template>
    <div>    
        <h2>Dashboard</h2>    
        <p>Name: {{ user.username }}</p>
        <button v-on:click="logout" class="btn btn-primary">Logout</button>    
    </div>
</template>
<script>
    import router from "../router"    
    export default {    
        name: "dashboard",    
        data() {    
            return {    
                user: {    
                    name: "Jesse"  
                }    
            }    
        },    
        methods: {    
            getUserData: function() {    
                let self = this    
                self.$http.get("/user", {withCredentials: true})    
                    .then((response) => {    
                        console.log(response)    
                        self.$set(this, "user", response.data)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/")    
                    })    
            }  , 
            logout: function() {
                router.push("/logout")
            } 
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>
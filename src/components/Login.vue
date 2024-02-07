<template>
 <div class="py-24">
    <div class="flex items-center max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        
        <div class="w-full p-8 ">
            <h2 class="text-2xl font-semibold text-center text-green-700">Customer RM MS</h2>
            
            <form @submit.prevent='handleLogin()'>
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
                    <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="email" v-model='user.email' />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Password</label>
                        <!-- <a href="#" class="text-xs text-gray-500">Forget Password?</a> -->
                    </div>
                    <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="password" v-model="user.password" required/>
                </div>
                <div class="mt-8">
                <div class="mt-12">
                    <button class="w-full px-4 py-2 font-bold text-white bg-green-700 rounded " type="submit">Login</button>
                </div>
                </div>
            </form>
            
            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b md:w-1/4"></span>
                <a href="/register" class="text-xs text-gray-500 uppercase">or sign up</a>
                <span class="w-1/5 border-b md:w-1/4"></span>
            </div>
            <div class="text-red-400 font-2xl">{{error}}</div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import { createRouter, useRouter } from 'vue-router';
import router from '@/router';

export default{
    data(){
        return {
            user: {
                email: "",
                password: ""
            },
            error: ""
        }
    },
    methods: {
        handleLogin(){
            axios.post('/login',this.user).then((data)=>{
                this.$toast.success("you logged in");
                this.$router.push('/customer');
            }).catch(error => {
                this.error = "incrorect username or password";
                this.$toast.error("incorrect credentials");
            });
        }    
    }
    
}

</script>

<style>

</style>
<template>
  <div class="py-24">
    <div class="flex items-center max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <form action="" @submit.prevent="registerUser">
            <div class="w-full p-8 ">
                <h2 class="text-2xl font-semibold text-center text-green-700">Customer RMS</h2>
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-bold text-gray-700">Username</label>
                    <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="text" required v-model="user.name"/>
                </div>
                
                <div class="mt-4">
                    <label class="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
                    <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="email" required v-model="user.email"/>
                </div>
                
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Password</label>
                    </div>
                    <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="password" required v-model="user.password"/>
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block mb-2 text-sm font-bold text-gray-700">Confirm Password</label>
                    </div>
                    <input class="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline" type="password" required v-model="password2"/>
                </div>
                <div class="mt-8">
                    <button class="w-full px-4 py-2 font-bold text-white bg-green-700 rounded " type="submit">Register</button>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 text-green-500 border-b md:w-1/4">{{mesg}}</span>
                    <span class="w-1/5 text-red-400 border-b md:w-1/4">{{mesgErr}}</span>
                </div>
                
            </div>
        </form>
        
    </div>
 </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            user: {
                name: "",
                email: "",
                password: ""
            },
            password2: "",
            mesgErr: "",
            mesg: ""
        }
    },
    methods: {
        async registerUser(){
            if(this.password2 == this.user.password){
                await axios.post('/register',this.user).then((data)=>{
                    this.mesg = "you have succesfully registered";
                    this.$toast.success("you have succesfully registered"+ data);
                    this.$router.push('/');
                }).catch((error)=> {
                    this.$toast.error("failed: " + error);
                });   
            }else{
                this.mesgErr = "password mismathched";
                this.user.password = "";
                this.password2 = "";
            }
            
        }
    }

}
</script>

<style>

</style>
<template>
    <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
        <div class="w-3/4 px-6 py-4 bg-white shadow-md">
            <div>
                <h1 class="mt-4 font-bold text-center text-md">Customer Registration</h1>
                <form action="" @submit.prevent="registerCustomer">
                <div class="flex flex-col">
                    <div class="flex justify-between mt-8 space-x-6">
                        <div class="flex flex-col w-full space-y-2">
                            <label for="department">Customer name</label>
                            <input type="text" class="px-4 py-2 border rounded-lg focus:outline-none" placeholder="i.e shadrack Mbwagha" v-model="customer.name">
                        </div>
                    </div>
                    <div class="flex mt-8 space-x-6">
                        <div class="flex flex-col w-full space-y-2">
                          <label for="department">Contact</label>
                          <input
                            name="contact"
                            id=""
                            class="px-4 py-2 border rounded-lg focus:outline-none"
                            v-model="customer.contact"
                          >
                          
                          
                        </div>
                        <div class="flex flex-col w-full space-y-2">
                          <label for="department">Address</label>
                          <input
                            name="address"
                            id=""
                            v-model="customer.address" class="px-4 py-2 border rounded-lg focus:outline-none"
                          >
                         
                        </div>
                      </div>
                    <div class="flex mt-8 space-x-6">
                        <div class="w-full text-center">
                            <button class="w-full px-6 py-3 text-white bg-green-600 rounded-lg">Submit</button>
                        </div>
                    </div> 
                </div>
                
                  
                </form>
                
            </div>
        </div>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            customer : {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods : {
        async registerCustomer() {
            await axios.post('/customers',  this.customer ).then((data)=> {
                this.$toast.success("succesfully registered user");
                this.$route.push('/customer')
            }).catch((err)=> {
                this.$toast.error(err);
            });
        }
    }
}
</script>

<style>

</style>
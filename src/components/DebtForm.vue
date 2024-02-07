<template>
    <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
        <div class="w-3/4 px-6 py-4 bg-white shadow-md">
            <div>
                <h1 class="mt-4 font-bold text-center text-md">Debt</h1>
                <form action="" @submit.prevent="createDebt">
                <div class="flex flex-col">
                    <div class="flex justify-between mt-8 space-x-6">
                        <div class="flex flex-col w-full space-y-2">
                            <label for="department">Customer name</label>
                            <select class="px-4 py-2 border rounded-lg focus:outline-none" v-model="debt.customer_id">
                                <option v-for="customer in customers" :key="customer.id" :value="customer.id" >{{customer.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex mt-8 space-x-6">
                        <div class="flex flex-col w-full space-y-2">
                          <label for="department">Amount</label>
                          <input
                            name="amount"
                            id=""
                            class="px-4 py-2 border rounded-lg focus:outline-none"
                            v-model="debt.amount"
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
import axios from 'axios'

export default {
    data() {
        return {
            debt : {
                customer_id : '',
                amount: ''    
            },
            customers: []
        }
    },
    methods : {
        async getCustomer() {
            await axios.get('/customers').then((data)=> {    
                this.customers = data.data;
                console.log(this.customers);
            })
        },

        async createDebt(){
            await axios.post('/debts',  this.debt ).then((data)=> {
                this.$toast.success("succesfully added debt");
                this.$router.push('/debt')
            }).catch((err)=> {
                this.$toast.error(err);
            });
        }
    },
    mounted () {
        this.getCustomer();
    }
}
</script>

<style>

</style>
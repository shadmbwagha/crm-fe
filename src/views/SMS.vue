<template>
    <div class="max-w-xl mx-auto mt-20">
        <div class="w-full px-3">
            <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
                SMS
            </label>
            <textarea rows="10"
                class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
        </div>
        <div class="flex justify-between w-full px-3">
            <div class="md:flex md:items-center">
                <label class="block font-bold text-gray-500">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>
            <button class="px-6 py-2 font-bold text-white bg-green-600 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none" type="submit">
                Send Message
            </button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
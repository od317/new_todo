<script setup>
import {ref} from 'vue'

let name = ref('osama')

</script>

<template>

<div class="w-full max-w-screen h-screen  bg-c1 flex flex-col text-c6 pt-[15%]  md:hidden">
 
        <div class=" relative flex flex-col">
            
         <div class="cont1">
            <div class=" c_1 relative bg-c1  py-[5%] z-[10] ">
                <h1 class=" capitalize ml-[8%] text-[200%]">Hello</h1>
                <h1 class=" capitalize ml-[8%] text-[230%] font-semibold">{{ name }}</h1>
            </div>

            <div class="bg-c2 c_2 px-[8%]   pt-[10%] flex w-full items-end justify-end z-[10]">
                <h1 class=" capitalize text-[150%]">gym</h1>
            </div>
        </div>

        <div class="cont2">
            <div class=" c_1 relative bg-c2  py-[10%] z-[10]">

            </div>

            <div class="bg-c3 c_2 px-[8%]   pt-[10%] flex w-full items-end justify-end z-[10]">
                <h1 class=" capitalize text-[180%]">gym</h1>
            </div>

        </div>
        

        <div class="cont3">
            <div class=" c_1 relative bg-c3  py-[10%] z-[10]">

            </div>

            <div class="bg-c4 c_2 px-[8%]   pt-[10%] flex w-full items-end justify-end z-[10]">
                <h1 class=" capitalize text-[180%]">gym</h1>
            </div>
            
        </div>


        </div>

        <div class="bg-c4 flex-grow w-full"></div>

</div>


</template>


<style scoped>

.cont1{
    background:linear-gradient(to right, #1f2035 0 50%,#5d9dfe  50% 100%);
}

.c_1{
    border-bottom-right-radius: 50px;
}

.c_2{
    border-top-left-radius: 50px;
}


.cont2{
    background:linear-gradient(to right, #5d9dfe 0 50%,#8775ff 50% 100%);
}

.cont3{
    background:linear-gradient(to right, #8775ff 0 50%,#3b39da 50% 100%);
}

</style>
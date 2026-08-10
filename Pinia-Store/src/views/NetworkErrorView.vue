<template>
    <div class="flex flex-col items-center mt-[50px] text-center">
        <h1>Uh-Oh!</h1>

        <h3 class="font-normal">
            It looks like you're experiencing some network issues, please take a breath and
            <a href="#" @click="$router.go(-1)">click here</a> to try again.
        </h3>
    </div>
</template>

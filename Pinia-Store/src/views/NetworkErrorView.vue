<template>
    <div class="networkError">
        <h1>Uh-Oh!</h1>

        <h3>
            It looks like you're experiencing some network issues, please take a breath and
            <a href="#" @click="$router.go(-1)">click here</a> to try again.
        </h3>
    </div>
</template>

<style scoped>
.networkError {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    text-align: center;
}
.networkError h3 {
    font-weight: normal;
}
</style>

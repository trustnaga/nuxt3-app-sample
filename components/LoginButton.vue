<script setup>
const { $msalInstance } = useNuxtApp();

async function login() {
    try {
    const response = await $msalInstance.loginPopup({
        scopes: ["user.read"],
    });
    console.log(response);
    } catch (error) {
    console.log(error);
    }
}

</script>

<template>
    <v-btn @click="login">Login</v-btn>
</template>


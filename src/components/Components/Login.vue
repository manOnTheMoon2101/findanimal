<script setup lang="ts">
import Input from '../ui/input/Input.vue';
import Button from '../ui/button/Button.vue';
import dogs from "@/assets/dogs.jpg"

const imageSrc = dogs;
</script>

<template>
    <div class="flex flex-row h-screen">
        <div class="bg-green-900 w-4/6">
            <img :src="imageSrc" alt="Dogs">
        </div>
        <div class="w-2/6 flex items-center justify-center">

            <div class="flex flex-col">
                <div>
                    <h1 class="text-6xl">Welcome</h1>
                </div>
                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email" />
                </div>
                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" placeholder="Password" />
                </div>

                <Button class="bg-green-950">Login</Button>

                <div>
                    <span>Log in as Guest</span>
                </div>
            </div>
        </div>
    </div>
</template>

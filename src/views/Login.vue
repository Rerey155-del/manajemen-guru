<template>

  <div class="min-h-screen flex items-center justify-center bg-base-200">

    <div class="card w-80 bg-base-100 shadow-xl">

      <div class="card-body">

        <h2 class="card-title justify-center text-2xl mb-4">
          Login Sistem
        </h2>

        <!-- USERNAME -->
        <div class="form-control">

          <label class="label">
            <span class="label-text">Username</span>
          </label>

          <input
            v-model="username"
            type="text"
            placeholder="Masukkan username"
            class="input input-bordered"
          />

        </div>

        <!-- PASSWORD -->
        <div class="form-control">

          <label class="label">
            <span class="label-text">Password</span>
          </label>

          <input
            v-model="password"
            type="password"
            placeholder="Masukkan password"
            class="input input-bordered"
          />

        </div>

        <!-- BUTTON -->
        <div class="form-control mt-6">

          <button class="btn btn-primary w-full" @click="handleLogin">

            Login

          </button>

        </div>

      </div>

    </div>

  </div>

</template>


<script setup lang="ts">

import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref<string>("")
const password = ref<string>("")

const handleLogin = () => {

  if(username.value && password.value){

    router.push("/dashboard")

  }else{

    alert("Username dan Password wajib diisi")

  }

}

</script>
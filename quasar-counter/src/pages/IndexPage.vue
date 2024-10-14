<template>
  <q-page
    class="flex flex-center text-white"
    v-touch-pan.vertical.prevent.mouse="handlePan"
  >
    <div class="row">
      <q-input
        v-model="data.name"
        placeholder="Counter"
        input-class="text-center text-white text-h5"
        color="teal"
      />
    </div>
    <div class="row full-width">
      <div class="col text-center">
        <q-btn
          round
          @click="decreaseCounter"
          icon="remove"
          size="xl"
          v-touch-repeat:300:300:300:300.50.mouse="decreaseCounter"
        />
      </div>
      <div class="col text-center text-h2">{{ data.counter }}</div>
      <div class="col text-center">
        <q-btn
          @click="increaseCounter"
          round
          icon="add"
          size="xl"
          v-touch-repeat:300:300:300:300.50.mouse="increaseCounter"
        />
      </div>
    </div>

    <div class="row">
      <q-btn round @click="resetCounter" icon="restart_alt" size="xl" />
    </div>
  </q-page>
</template>

<style scoped>
.q-page {
  max-width: 700px;
  margin: 0 auto;
}
</style>

<script setup>
import { reactive, watch } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

// data
const data = reactive({
  counter: 0,
  name: "",
});

const savedData = $q.localStorage.getItem("data");
if (savedData) Object.assign(data, savedData);

watch(data, (value) => {
  $q.localStorage.set("data", value);
});

// counter
const increaseCounter = () => {
  data.counter++;
};

const decreaseCounter = () => {
  if (data.counter > 0) {
    data.counter--;
  }
};

const resetCounter = () => {
  data.counter = 0;
};

const handlePan = (e) => {
  if (e.delta.y < 0) {
    increaseCounter();
  } else {
    decreaseCounter();
  }
};
</script>

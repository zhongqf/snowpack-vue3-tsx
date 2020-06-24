<template>
    <button @click="changeIt">
        object.count={{object.count}} num={{num}}
    </button>
</template>

<script>
import {reactive, ref } from 'vue'
export default {
    setup() {
        const object = reactive({count: 0});
        var num = ref(0);

        function changeIt() {
            object.count ++;
            num.value ++;
        }

        return {
            object, num, changeIt
        }
    }
}
</script>
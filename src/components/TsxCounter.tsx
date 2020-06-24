import { defineComponent, reactive } from 'vue';


const Counter = defineComponent({
    setup() {
        const state = reactive({ count: 0 });
        const handleClick = () => state.count++;
        return () => (
            <button onClick={handleClick}>
                count is: {state.count}
            </button>
        )
    }
});

export default Counter;

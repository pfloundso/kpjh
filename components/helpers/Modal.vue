
<template>
    <div
        v-if="show"
        class="ModalWrapper"
    >
        <div class="Modal">
            <svg
                viewBox="0 0 45 45"
                :style="{ stroke: buttonColor }"
                class="closeButton"
                xmlns="http://www.w3.org/2000/svg"
                @click="close"
            >
                <path
                    d="M11.3137 10.9602L33.5876 33.234"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M10.9602 33.234L33.2341 10.9602"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>

            <slot />
        </div>

        <div
            class="Backdrop"
            @click="close"
        />
    </div>
</template>

<script>
export default {
    props: {
        buttonColor: {
            type: String,
            default: 'white',
        },
        show: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['close'],

    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style scoped>
.Backdrop {
    height: 100%;
    width: 100%;
    background-color: rgb(39, 42, 42);
    opacity: 0.6;
    position: fixed;
    top: 0;
    left: 0;
}
.ModalWrapper {
    top: 0;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    z-index: 10;
}
.Modal {
    position: relative;
    align-self: center;
    background-color: var(--secondaryBg);
    z-index: 11;
    border-radius: 8px;
    overflow: hidden;
}
.closeButton {
    width: 25px;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 12;
    cursor: pointer;
}
@media (min-width: 901px) {
}
</style>

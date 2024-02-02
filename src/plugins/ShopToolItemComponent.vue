<template>
    <div class="shop-tool-item-wrapper">
        <div class="shop-tool-item-default">
            <div class="img-wrapper">
                <img :src="image_url">
                <div class="gradient"></div>
            </div>
            <h3>{{ name }}</h3>
            <p>{{ description }}</p>
            <p>{{ price }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        image_url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required:true
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        }
    }
})

</script>

<style lang="scss" scoped>
.shop-tool-item-default {
    &:hover {
        .img-wrapper {
            transform: rotateX(5deg);
            .gradient {
				height: 100%;
				opacity: 1;
			}
        }
    }
    .img-wrapper {
        width: 100%;
        display: flex;
        perspective: 1000px;
        perspective-origin: center top;
        height: max-content;
        transform-origin: 100% 0;
        transition: transform 0.18s ease-in-out;
    }
    p, h3 {
        padding: 8px 0;
    }
    img {
        width: 100%;
        aspect-ratio: 1 / 1;
    }
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    overflow: hidden;
    padding: 8px;
    border: 4px solid black;
    position: relative;
    transition: all ease 0.2s;
    // Thanks to Arran Gravestock
    .gradient {
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		z-index: 1;

		transform: rotate(30deg);
		transform-origin: top right;

		width: 200%;
		height: 65%;

		opacity: 0.3;
		background: linear-gradient(
			0turn,
			transparent 0%,
			rgba(200, 200, 200, 0.4) 5%,
			rgba(255, 255, 255, 0.2) 15%,
			rgba(255, 255, 255, 0.1) 100%
		);
		transition: height 0.18s ease-in-out, opacity 0.3s ease-in-out;
	}
}
.shop-tool-item-wrapper {
    padding: 16px;
    width: fit-content;
    height: fit-content;
}
</style>
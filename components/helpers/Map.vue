
<template>
    <l-map
        v-if="showMap"
        ref="map"
        :use-global-leaflet="false"
        :zoom="zoom"
        :center="center"
        :options="{
            dragging: true,
            zoomControl: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            attributionControl: false,
        }"
        @update:zoom="mapChangeZoom"
        @update:center="mapChangeLocation"
    >
        <l-tile-layer
            :url="tileUrl"
        />
        <l-marker
            v-if="location"
            :lat-lng="location"
        >
            <l-icon
                icon-url="/images/location.svg"
                :icon-size="[35, 35]"
            />
        </l-marker>
    </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
    },
    props: {
        location: {
            type: Array,
            default: () => [0, 0],
        }
    },
    data() {
        return {
            zoom: 10,
            showMap: false,
            timer: undefined,
            center: this.location,
        }
    },
    computed: {
        tileUrl() {
            const key = useRuntimeConfig().public.cartoApiKey

            return `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=${encodeURIComponent(key)}`
        },
    },
    async mounted() {
        await nextTick()
        setTimeout(() => {
            this.showMap = true
        }, 1000)
    },
    methods: {
        mapChangeZoom(e) {
            this.zoom = e
            this.reset()
        },
        mapChangeLocation(e) {
            this.center = e
            this.reset()
        },
        reset() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.zoom = 14
                this.center = this.location
            }, 2500)
        },
    },
}

// urls:
// https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
// https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png
// https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png
</script>

<template>
    <DefaultView titel="Fotos">
        <head>
            <title>KPJH - Fotos</title>
        </head>
        <div class="wrapper">
            <h3 class="title">{{ album.eventType }} {{ album.title }}</h3>
            <NuxtLink
                class="backButton"
                to="/fotos"
            >
                <svg
                    viewBox="0 0 24 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.16478 22.2354C-0.388259 20.7286 -0.388259 18.2714 1.16478 16.7646L17.2934 1.11633C18.8275 -0.37211 21.3011 -0.37211 22.8352 1.11633C24.3883 2.62312 24.3883 5.08036 22.8352 6.58715L9.28584 19.5L22.8352 32.4128C24.3883 33.9196 24.3883 36.3769 22.8352 37.8837C21.3011 39.3721 18.8275 39.3721 17.2934 37.8837L1.16478 22.2354Z"
                        fill="#3D5C6D"
                        fill-opacity="0.4"
                    />
                </svg>
            </NuxtLink>
            <h3>{{ album.eventDate }}</h3>
            <div class="map">
                <Map
                    v-if="album.location"
                    :location="[album.location.lat, album.location.lon]"
                />
            </div>
            <div
                v-if="useState('loggedIn').value"
                class="photos"
            >
                <Folder
                    :folder-id="album.folderId"
                    :open="true"
                />
            </div>
            <div
                v-else
                class="contentLocked"
            >
                <svg
                    viewBox="0 0 34 41"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#304C5C"
                >
                    <path
                        d="M32.0002 18.4503H30.0003V13.3252C30.0003 5.94521 24.2003 0 17 0C9.79975 0 3.99969 5.94503 3.99969 13.3252V18.4503H1.99984C0.899796 18.4503 0 19.3726 0 20.5001V38.9502C0 40.0777 0.89985 41 1.99984 41H32.0002C33.1002 41 34 40.0777 34 38.9502V20.5001C34 19.3726 33.1002 18.4503 32.0002 18.4503ZM7.99991 13.3252C7.99991 8.20022 11.9996 4.10057 16.9996 4.10057C21.9997 4.10057 25.9994 8.20022 25.9994 13.3252V18.4503H7.99919L7.99991 13.3252Z"
                    />
                </svg>
                <p>Bitte melde dich an um<br />alle Bilder sehen zu können:</p>
                <button
                    class="btn btn-primary"
                    @click="useLogin()"
                >
                    Anmelden
                </button>
            </div>
        </div>
    </DefaultView>
</template>
<script>
export default {
    emits: ['back'],
    async setup() {
        const query = gql`
            query getAlbum($id: String!) {
                album(id: $id) {
                    title
                    eventType
                    eventDate
                    location {
                        lat
                        lon
                    }
                    folderId
                }
            }
        `

        const variables = { id: useRoute().params.id }

        const {
            data: {
                value: { album },
            },
        } = await useAsyncQuery(query, variables)
        return { album }
    },
}
</script>
<style lang="scss" scoped>
.title {
    font-family: 'ylee MHIM';
    font-size: 50px;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
}
.wrapper {
    background: white;
    padding: 50px 70px;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin-bottom: 100px;
}

.map {
    width: 100%;
    height: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    overflow: hidden;
    z-index: 0;
}

.backButton {
    position: absolute;
    left: 50px;
    top: 50px;
    padding: 10px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
        transform: translateX(-8px);
    }
    svg {
        height: 25px;
    }
}

.photos {
    //display: flex;
    align-items: center;
    //justify-content: center;
    padding: 40px 0;
    width: 100%;
}

.contentLocked {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 40px;
    svg {
        width: 30px;
        margin: 20px;
    }
    p {
        text-align: center;
    }
}
@media (max-width: 901px) {
    .wrapper {
        padding: 10px 15px;
    }
    .map {
        width: 100%;
        height: 170px;
    }
    .backButton {
        left: 20px;
        top: 30px;
        padding: 3px;
    }
    .title {
        padding: 0px 5px;
    }
}
</style>

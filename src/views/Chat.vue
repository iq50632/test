<template>
    <div class="chat">
        <div class="w-100 h-100 my-3 d-flex align-center justify-center" v-if="store.chats.length == 0">
            <v-btn size="x-large" color="main" @click="store.init"><b>進入聊天室</b></v-btn>
        </div>
        <div v-else>
            <div class="history">
                <div v-for="chat in store.showChats" :key="chat" class="dialog-box">
                    <template v-if="chat.role == 'system'">
                        <div class="text-center">
                            <v-chip class="text-center">{{ chat.content }}</v-chip>
                        </div>
                    </template>
                    <template v-if="chat.role == 'assistant'">
                        <div>
                            <v-chip color="green darken-1"><span v-html="chat.content"></span></v-chip>
                        </div>
                    </template>
                    <template v-if="chat.role == 'user'">
                        <div class="text-right">
                            <v-chip color="main" class="text-left"><span v-html="chat.content"></span></v-chip>
                        </div>
                    </template>
                    <template v-if="chat.role == 'image'">
                        <img :src="chat.content[0].url" alt="image">
                    </template>
                </div>
                <div v-if="store.loading" class="dialog-box">
                    <v-chip color="green">
                        <div class="lds-ellipsis">
                            <div/><div/><div/><div/>
                        </div>
                    </v-chip>
                </div>
            </div>
            <div class="d-flex align-center mx-5 mt-2">
                <v-btn color="main" icon="mdi-image-area" @click="image = !image" :variant="image ? 'tonal' : ''"/>
                <v-text-field v-model="text" color="main" variant="underlined" class="mr-10" hide-details @keydown.enter="send"/>
                <v-btn icon="mdi-send" @click="send" color="main" />
            </div>
        </div>
    </div>
</template>

<script>
import { useChatStore } from '@/stores/chat'

export default {
    setup() {
		const store = useChatStore()
        return { store }
    },
    data() {
        return {
            text: '',
            image: false
        }
    },
    watch: {
        'store.loading'(value) {
            if (!value) {
                const history = $('.history')
                const scrollHeight = history.prop('scrollHeight')
                $('.history').animate({scrollTop: scrollHeight }, 500, 'linear')
            }
        }
    },
    methods: {
        send() {
            if (this.text) {
                if (this.image) {
                    this.store.image(this.text)
                } else {
                    this.store.send(this.text)
                }
                this.text = ''
            } else {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.chat {
    position: absolute;
    top: 64px;
    height: calc( 100vh - 64px);
    width: 100%;
    left: 0;
}
.history {
    width: 100%;
    height: calc(100vh - 154px);
    overflow: auto;
}
.v-chip {
    max-width: 50vh;
    height: auto;
    white-space: pre-line;
    height: auto;
    border-radius: 25px;
    padding: 6px 12px;
}

.dialog-box {
    width: 100%;
    max-height: 400px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 0 18px;

    img {
        border-radius: 25px;
        max-height: inherit;
    }
}


@media (max-width: 1700px) {
    .v-chip {
        max-width: 50vh;
    }
}

@media (max-width: 600px) {
    .v-chip {
        max-width: 80vh;
    }
}

.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 33px;

    div {
        position: absolute;
        top: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #43A047;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    
        &:nth-child(1) {
            left: 5px;
            animation: lds-ellipsis1 0.6s infinite;
        }
        &:nth-child(2) {
            left: 5px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(3) {
            left: 20px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(4) {
            left: 35px;
            animation: lds-ellipsis3 0.6s infinite;
        }
    }
}
@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(15px, 0);
    }
}
</style>
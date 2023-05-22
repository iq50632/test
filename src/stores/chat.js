import { defineStore } from 'pinia'
import { Configuration, OpenAIApi } from 'openai'
import { toChatML, get_message } from 'gpt-to-chatgpt'

export const useChatStore = defineStore('chat', {
    state: () => {
        return { 
            openai: null,
            chats: [],
            showChats: [],
            loading: false,
        }
    },
    actions: {
        async init() {
            const configuration = new Configuration({ apiKey: import.meta.env.VITE_OPENAI_API_KEY })
            this.openai = new OpenAIApi(configuration)
            try {
                await this.openai.createCompletion({
                    model: 'text-davinci-003',
                    prompt: "this is a test",
                    temperature: 0,
                    max_tokens: 7,
                }).then((response) => {
                    console.log('可以開始與 ChatGPT 對話囉!!')
                    this.chats.push({"role": "system", "content": "You are a helpful assistant."})
                })
            } catch (error) {
                console.log(error)
            }
        },
        async send(content) {
            this.loading = true
            try {
                this.chats.push(toChatML(content)[0])
                this.showChats.push(toChatML(content)[0])
                await this.openai.createChatCompletion({
                    model: 'gpt-3.5-turbo-0301',
                    messages: this.chats,
                }).then((response) => {
                    this.chats.push(response.data.choices[0].message)
                    this.showChats.push(response.data.choices[0].message)
                    this.loading = false
                })
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        },
        async image(content) {
            this.loading = true
            try {
                this.showChats.push(toChatML(content)[0])
                await this.openai.createImage({
                    prompt: content,
                    n: 1,
                    size: "512x512"
                }).then((response) => {
                    this.showChats.push({role: 'image', content: response.data.data})
                    this.loading = false
                })
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        }
    },
})
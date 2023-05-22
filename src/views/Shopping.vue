<template>
    <div class="hot-products">
        <h2 class="pb-4 d-flex align-center text-main">
            <img src="@/assets/image/dabe_blue.png" height="50" width="50" alt="" class="ml-2 mr-3">
            熱銷產品
        </h2>
        <hr class="py-5">
        <v-slide-group v-model="model" class="mt-2 mb-10" selected-class="bg-success" height="350" show-arrows>
            <v-slide-group-item v-for="i in store.allProduct" :key="i.id">
                <v-card class="pa-4 ma-4" rounded="xl" height="350" width="250" elevation="5" @click="selectProduct(i)">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" class="img-frame">
                                <img :src="i.img" alt="" class="ma-auto" height="200" width="200">
                            </v-col>
                            <v-col cols="12">
                                <h3 class="my-3 text-ellipsis">{{i.name}}</h3>
                                <div class="d-flex justify-content-between">
                                    <span class="line">
                                        <p class="mb-n5">${{i.price}}</p>
                                    </span>
                                    <span>已售: {{i.sold}}</span>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </div>
    <v-card elevation="5" rounded="xl">
        <v-card-text class="pa-12">
            <h2 class="pb-4 d-flex align-center text-main">
                <img src="@/assets/image/dabe_blue.png" height="50" width="50" alt="" class="ml-2 mr-3">
                新品上市
            </h2>
            <hr class="py-5">
            <v-row>
                <v-col cols="12" md="6" lg="4" xl="2" v-for="i in store.allProduct" :key="i.id">
                    <v-card elevation="5" rounded="xl" class="pa-4" @click="selectProduct(i)">
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="5" lg="12" xl="12" class="img-frame">
                                    <img :src="i.img" alt="" class="ma-auto">
                                </v-col>
                                <v-col cols="12" md="5" lg="12" xl="12">
                                    <h3 class="my-3 text-ellipsis">{{i.name}}</h3>
                                    <div class="d-flex justify-content-between">
                                        <span class="line-5">
                                            <p class="mb-n5">${{i.price}}</p>
                                        </span>
                                        <span>已售: {{i.sold}}</span>
                                    </div>
                                    <div class="d-flex align-center mt-3">
                                        <v-rating v-model="i.evaluation" half-increments readonly color="orange" density="compact"/>
                                        <b class="ml-2">{{ i.evaluation }}</b>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import { useProductStore } from '@/stores/product'

export default {
    setup() {
		const store = useProductStore()
        return { store }
    },
    data() {
        return {
            test: '',
            user: {},
            model: '',
        }
    },
    methods: {
        selectProduct(product) {
            this.store.set_product(product)
            this.$router.push({ name: 'product'}) 
        }
    }
}
</script>

<style lang="scss" scoped>
hr {
    border-top: 4px solid rgb(var(--v-theme-main));
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
}
.img-frame > img {
    width: -webkit-fill-available;
}

.line {
    border-bottom: 3px solid rgb(var(--v-theme-main));
    width: 50px;

    &-5 {
        border-bottom: 3px solid rgb(var(--v-theme-main), .5);
        width: 50px;
    }
}
</style>

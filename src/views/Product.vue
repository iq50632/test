<template>
<div>
    <div class="pt-5">
        <v-card elevation="10" rounded="xl" class="pa-6">
            <v-card-text>
                <v-row class="mb-3">
                    <v-col cols="12" md="6" lg="5" xl="4" class="image-frame">
                        <img :src="product.img" alt="image">
                    </v-col>
                    <v-col cols="12" md="6" lg="7" xl="8">
                        <h2 class="my-2">{{product.name}}</h2>
                        <div class="d-flex align-items-center mt-4 mb-10">
                            <div class="d-flex align-center">
                                <v-rating v-model="product.evaluation" half-increments readonly color="orange" density="compact"/>
                                <b class="ml-4 evaluation" v-text="product.evaluation"/>
                            </div>
                            <div class="flex-shrink-1 pt-1">
                                <b>銷量: {{product.sold}}</b>
                            </div>
                        </div>
                        <div class="border-price">
                            <h2 class="mb-n2">
                                ${{product.price}}
                            </h2>
                        </div>
                        <div class="d-flex align-center mb-3 mt-5">
                            <div class="text-no-wrap">尺寸：</div>
                            <div class="d-flex flex-fill flex-wrap ">
                                <v-item-group v-model="selectedSize">
                                    <v-item v-for="i in size" :key="i.id" v-slot="{ isSelected, toggle }">
                                        <v-btn color="main" :variant="isSelected ? 'outlined' : 'tonal'" class="mb-2 mx-3" @click="toggle">{{i}}</v-btn>
                                    </v-item>
                                </v-item-group>
                            </div>
                        </div>
                        <div class="d-flex align-center mb-3">
                            <span>數量：</span>
                            <div style="width: 120px" class="mr-5">
                                <v-text-field v-model="count" class="text-center" :min="0" :max="product.stock"
                                    hide-details single-line type="number" variant="solo"
                                    prepend-inner-icon="mdi-minus" @click:prepend-inner="updateCount('minus')"
                                    append-inner-icon="mdi-plus" @click:append-inner="updateCount('plus')"/>
                            </div>
                            <div class="flex-shrink-1">
                                <b>庫存: {{product.stock}}</b>
                            </div>
                        </div>
                        <v-btn color="main" class="mt-5" @click="addShopping()">
                            <v-icon icon="mdi-cart-outline" class="mr-2"/>
                            加入購物車
                        </v-btn>
                    </v-col>
                </v-row>
                <v-col cols="12" class="mb-3">
                    <div class="d-flex align-center">
                        <v-icon icon="mdi-account" height="50" width="50"/>
                        <v-btn @click="$router.push({ name: 'product-trader', params: {trader: trader.account } })" variant="text">
                            <b>賣家：{{trader.name}}</b>
                        </v-btn>
                    </div>
                    <v-rating v-model="trader.evaluation" half-increments readonly color="orange" density="compact"/>
                </v-col>
                <div class="col-12 description">
                    <div class="ma-4 ml-2 line">
                        <b>產品介紹：</b>
                    </div>
                    <div class="ma-5 content" v-html="product.text" />
                </div>
            </v-card-text>
        </v-card>
    </div>
    <shopping-cart />
</div>
</template>

<script>
import { useProductStore } from '@/stores/product'
import shoppingCart from '../components/shopping-cart.vue'

export default {
    components: { shoppingCart },
    setup() {
		const store = useProductStore()
        const product = store.currentProduct
        const size = store.currentProduct.size.split(',')

        return { store, product, size }
    },
    data() {
        return {
            count: 1,
            trader: {
                id: 1,
                name: "admin",
                account: 123,
                evaluation: 4
            },
            selectedSize: ''
        }
    },
    watch: {
        count(value) {
            if (parseInt(value) > this.product.stock) {
                this.count = this.product.stock
            }
            if (parseInt(value) < 1) {
                this.count = 1
            }
        }
    },
    methods: {
        prev() {
            this.$refs.mySwiper.$swiper.slidePrev()
        },
        next() {
            this.$refs.mySwiper.$swiper.slideNext()
        },
        addShopping() {
            if (this.selectedSize === undefined) {
                this.defaultStore.setSnackbar('尚未選擇選項')
            } else {
                this.store.set_shoppingCart({
                    id: this.product.id,
                    img: this.product.img,
                    name: this.product.name,
                    size: this.size[this.selectedSize],
                    count: parseInt(this.count)
                })
            }
        },
        updateCount(mode) {
            if (this.count <= this.product.stock && this.count >= 1) {
                if (mode == 'plus') {
                    this.count = parseInt(this.count) + 1
                } else {
                    this.count = parseInt(this.count) - 1
                }
            }
        }
    }
}

</script>

<style lang="scss" scoped>
* {
    letter-spacing: 3px;
}
.image-frame {
    padding: 20px;
    
    img {
        width: inherit;
    }
}
.border-price {
    border-bottom: 7px solid rgb(var(--v-theme-main), .3);
    width: 100px;

    h2 {
        min-width: inherit;
    }
}
.evaluation {
    border: 0px;
    width: 50px;
}
.description {
    .line {
        border-bottom: 5px solid rgb(var(--v-theme-main), .3);
        width: 140px;

        b {
            font-size: 18px;
        }
    }

    .content {
        white-space: pre;
    }
}
</style>

<style>
.v-text-field .v-field--single-line input {
    text-align: center;
}
</style>

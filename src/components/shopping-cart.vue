<template>
    <v-menu v-model="showShoppingCart" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="shopping-cart-btn" color="primary" size="x-large" v-bind="props" icon>
                <v-badge :content="productsNumber" v-if="productsNumber > 0">
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
                <v-icon v-else>mdi-cart</v-icon>
            </v-btn>
        </template>
        <v-card max-width="500" rounded="xl">
            <v-card-text v-if="store.shoppingCart.length == 0">
                <div class="text-center my-4">
                    <h4>目前購物車是空的唷</h4>
                </div>
            </v-card-text>
            <div v-else>
                <v-list v-for="(productContent, contentIndex) in store.shoppingCart" :key="productContent.id">
                    <v-list-item v-for="(productShape, shapeIndex) in productContent.size" :key="productContent.id"
                        :prepend-avatar="productContent.img"
                        :title="productContent.name"
                        :subtitle="productShape.size + '  x ' + productShape.count">
                        <template v-slot:append>
                            <v-btn variant="text" icon="mdi-delete" @click="delShopping(contentIndex, shapeIndex)"/>
                        </template>
                    </v-list-item>
                </v-list>
            </div>
        </v-card>
    </v-menu>
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
            showShoppingCart: false
        }
    },
    computed: {
        productsNumber() {
            let number = 0
            for (const product of this.store.shoppingCart) {
                for (const shape of product.size) {
                    number += shape.count
                }
            }
            return number
        }
    },
    methods: {
        delShopping(contentIndex, shapeIndex) {
            this.store.del_shoppingCart(contentIndex, shapeIndex)
        }
    }
}
</script>

<style lang="scss">
.shopping-cart-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>

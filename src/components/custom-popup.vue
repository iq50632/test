<template>
    <v-dialog v-model="show" :persistent="persistent" :max-width="width" scrollable>
        <v-card rounded="xl">
            <div :class="{'text-center': titleCenter}" v-if="title" style="overflow: hidden;border-top-left-radius: 24px;">
                <div id="header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 1440 320" preserveAspectRatio="none" v-if="width > 500">
                        <path fill="#c8ae67" fill-opacity="1" d="M0,0L120,26.7C240,53,480,107,720,133.3C960,160,1200,160,1320,160L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 40 1440 320" v-else>
                        <path fill="#c8ae67" fill-opacity="1" d="M0,32L120,74.7C240,117,480,250,680,270.7C960,307,1350,305,1420,264.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                </div>
                <h1 class="font-weight-bold text-white pb-3" id="title">
                    {{title}}
                </h1>
                <v-btn icon id="icon-close" @click="show = false" v-if="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
            <v-card-text class="pb-5 letter-1" :class="!spacing ? 'pa-10': 'px-0'" style="z-index: 3">
                <slot />
            </v-card-text>
			<v-card-actions class="d-flex justify-space-around pb-7" v-if="btn1">
				<v-btn :color="color1" text @click="$emit('click1')">
					{{btn1}}
				</v-btn>
				<v-btn :color="color2" text @click="$emit('click2')" v-if="btn2">
					{{btn2}}
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
    model: { prop: 'dialog', event: 'changeDialog'},
    props: {
        dialog: { type: Boolean, default: false },
        persistent: { type: Boolean, default: false },
        spacing: { type: Boolean, default: false },
        width: { type: String, default: '500' },
        close: { type: Boolean, default: false },
        title: { type: String, default: '' },
        titleCenter: { type: Boolean, default: false },
        color1: { type: String, default: 'grey' },
        color2: { type: String, default: 'primary' },
        btn1: { type: String, default: '' },
        btn2: { type: String, default: '' },
    },
    computed: {
        show: {
            get() {
                return this.dialog
            },
            set(value) {
                this.$emit('changeDialog', value)
            }
        }
    }
}
</script>

<style>
.v-dialog {
    border-radius: 1.3rem!important;
}

#header {
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 130px;
    transform: rotateY(180deg);

    filter: drop-shadow(3px 0px 10px rgb(0 0 0 / .4));
}

#title {
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 24px;
    font-size: 2.2rem !important;
    letter-spacing: 4px !important;
}

#icon-close {
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 24px;
    font-size: 2.2rem !important;
    letter-spacing: 4px !important;
}
</style>
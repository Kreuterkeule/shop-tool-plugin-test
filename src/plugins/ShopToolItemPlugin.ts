import { App } from 'vue'
import ShopToolItemComponentVue from './ShopToolItemComponent.vue'

export default {
    install: (app: App,) => {
        app.component('ShopToolItem', ShopToolItemComponentVue)
    }
}
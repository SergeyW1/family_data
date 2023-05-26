import {defineStore} from "pinia";
import router from "../router.js";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        kids: [],
        parent: [],
        kidsRes: [],
        idxChild: 1,
        limitChild: true,
    }),
    actions: {
        addChild() {
            if (this.kids.length >= 4) {
                this.limitChild = false
            }
            this.kids.push({id: this.idxChild++, nameChild: '', ageChild: ''})
        },
        deleteChild(id) {
            if (this.kids.length <= 5) {
                this.limitChild = true
            }
            return this.kids = this.kids.filter(x => x.id !== id)
        },
        saveFamily(objParent) {
            for (let item of this.kids) {
                if (item.nameChild !== "" && item.ageChild !== "" && objParent['nameParent'] !== "" && objParent['ageParent'] !== "") {
                    this.parent.push(objParent)
                    this.kidsRes.push(...this.kids)
                    this.kids.length = 0
                }
            }
            return router.push({name: 'preview'})
        }
    },
})

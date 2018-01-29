
import top from "../components/defaultTop.vue";
import bottom from "../components/defaultBottom.vue";
export default{
    name: 'content',
    components: {
        top,bottom
    },
    template:'<div><top/><bottom/></div>'
}
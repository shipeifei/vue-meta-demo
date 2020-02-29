<template>
<div class="hello">
    <h1>home</h1>
    <hot></hot>
</div>
</template>

<script>
import hot from './hot'
export default {
    name: 'home',
    metaInfo() {
        return {

            meta: [{
                    vmid: 'keywords',
                    name: 'keywords',
                    cotent: 'home'
                },
                {
                    vmid: 'description',
                    name: 'description',
                    cotent: 'home'
                }

            ]
        }
    },
    components: {
        hot
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

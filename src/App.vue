<template>
<div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            title: '68课件网',
            keywords: '视频播放，软件开发',
            description: '视频播放，软件开发'
        }
    },
    watch: {
        $route(to) {
            this.title=to.meta.metaInfo.title;
        }
    },
    metaInfo() {
        return {
            title: this.title,
            titleTemplate: '%s | 68kejian.com',
            htmlAttrs: {
                lang: 'en',
                amp: true
            },
            bodyAttrs: {
                class: ['dark-mode', 'mobile']
            },
            base: {
                target: '_blank',
                href: '/'
            },

            meta: [{
                    vmid: 'keywords',
                    name: 'keywords',
                    cotent: this.keywords
                },
                {
                    vmid: 'description',
                    name: 'description',
                    cotent: this.description
                }

            ]
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

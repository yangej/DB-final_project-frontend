<template>
    <v-row class="py-3 border">
        <v-col cols="2">
            <span class="primary--text font-weight-medium">{{ tagText }}</span>
        </v-col>
        <v-col cols="8">
            <span class=" font-weight-medium">{{ title }}</span>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
            <span class="text-right font-weight-medium">{{ actionText }}</span>
            <v-icon class="primary--text ml-2">mdi-chevron-right</v-icon>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'ItemList',
        props: {
            tagText: String,
            title: String,
            actionText: String
        }
    }
</script>

<style lang="scss" scoped>
.border {
    border-bottom: 1px solid #efefef;
}
</style>
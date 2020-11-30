<template>
    <v-row class="py-2 border align-center px-5">
        <v-col cols="2">
            <span class="primary--text font-weight-bold">{{ tagText }}</span>
        </v-col>
        <v-col cols="8">
            <span class=" font-weight-bold">{{ title }}</span>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
            <v-btn text>
                <span class="text-right font-weight-medium body-1">{{ actionText }}</span>
                <v-icon class="primary--text ml-2">mdi-chevron-right</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'ItemRow',
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
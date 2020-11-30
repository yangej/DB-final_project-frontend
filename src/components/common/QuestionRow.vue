<template>
    <v-card max-width="800" class="shadow mb-7">
        <div class="pa-5 pb-0">
            <p class="font-weight-medium">{{question}}</p>
            <v-radio-group v-model="selection" @change="changeValue">
                <v-radio
                    v-for="(option, index) in options"
                    :key="`option-${index}`"
                    :label="option"
                    :value="optionValue[index]"
                    :readonly="readonly"
                ></v-radio>
            </v-radio-group>
        </div>
        <div v-if="analysis" class="primary lighten-1 pa-5">
            <span class="warning--text font-weight-medium">答案為 {{ answer }}，{{ analysis }}</span>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: 'QuestionRow',
        data() {
            return {
                optionValue: [ 'A', 'B' ,'C' ],
                selection: ''
            }
        },
        props: {
            readonly: Boolean,
            tagText: String,
            question: String,
            answer: String,
            options: Array,
            analysis: String
        },
        methods: {
            changeValue() {
                this.$emit('update-value', this.selection);
            }
        },
        mounted() {
            this.selection = this.answer ? this.answer : '';
        }
    };
</script>
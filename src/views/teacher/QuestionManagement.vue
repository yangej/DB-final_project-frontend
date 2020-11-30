<template>
    <back-card
        class="mx-auto"
        action-text="返回課程管理"
        @button-click="goTo('/course-management')"
    >
        <div class="pa-14">
            <p class="primary--text font-weight-bold ma-0">{{ week }}</p>
            <h3 class="headline font-weight-medium mb-7">{{ title }}</h3>
            <div>
                <question-row
                    v-for="(question, index) in questions"
                    :key="`question-${index}`"
                    :question="question.question"
                    :options="question.options"
                    :answer="question.answer"
                    :analysis="question.analysis"
                ></question-row>
            </div>
            <div class="d-flex justify-end">
                <custom-button
                    text="送出問題"
                    width="130"
                ></custom-button>
            </div>
        </div>
    </back-card>
</template>

<script>
    import BackCard from "@/components/common/BackCard";
    import QuestionRow from "@/components/common/QuestionRow";
    import CustomButton from "@/components/common/CustomButton";
    import { mockqQuetions } from "../../dummies/questions";

    export default {
        name: 'QuestionManagement',
        components: { BackCard, QuestionRow, CustomButton },
        data() {
            return {
                week: '',
                title: '',
                questions: mockqQuetions
            };
        },
        methods: {
            goTo(path) {
                this.$router.push(path);
            }
        },
        mounted() {
            this.week = `Week ${this.$route.params.id}`;
            this.title = this.$route.params.title; // TODO: this needs api to get it
        }
    };
</script>
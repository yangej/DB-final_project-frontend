<template>
    <back-card
            class="mx-auto"
            action-text="返回課堂回答"
            @button-click="goTo('/student/course-list')"
    >
        <div class="pa-14">
            <p class="primary--text font-weight-bold ma-0">{{ week }}</p>
            <h3 class="headline font-weight-medium mb-7">{{ title }}</h3>
            <div>
                <question-row
                    v-for="(question, index) in questions"
                    :readonly="false"
                    :key="`question-${index}`"
                    :question="question.question"
                    :options="question.options"
                    @update-value="updateValue($event, index)"
                ></question-row>
            </div>
            <custom-button
                text="送出回答"
                width="130"
                :disabled="!isFinished"
                @click="send"
            ></custom-button>
        </div>
    </back-card>
</template>

<script>
    import BackCard from "@/components/common/BackCard";
    import QuestionRow from "@/components/common/QuestionRow";
    import CustomButton from "@/components/common/CustomButton";
    import { mockqQuetions } from "../../dummies/questions";

    export default {
        name: 'QuestionList',
        components: { BackCard, QuestionRow, CustomButton },
        data() {
            return {
                week: '',
                title: '',
                questions: mockqQuetions,
                answers: [],
                isFinished: false
            }
        },
        methods: {
            goTo(path) {
                this.$router.push(path);
            },
            updateValue(value, index) {
                this.answers[index] = value;
                this.checkAnswers();
            },
            checkAnswers() {
                this.isFinished = this.answers.every((answer) => answer != '');
            },
            send() {
                console.log('submit!');
                //TODO: call api
            }
        },
        mounted() {
            this.week = `Week ${this.$route.params.id}`;
            this.title = this.$route.params.title; // TODO: this needs api to get it
            this.answers = Array(this.questions.length).fill('');
        }
    };
</script>
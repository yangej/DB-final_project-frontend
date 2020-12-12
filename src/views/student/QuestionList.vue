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
import BackCard from '@/components/common/BackCard';
import QuestionRow from '@/components/common/QuestionRow';
import CustomButton from '@/components/common/CustomButton';
import { mockQuestions } from '@/dummies/questions';

export default {
    name: 'QuestionList',
    components: { BackCard, QuestionRow, CustomButton },
    data() {
        return {
            id: 0,
            week: '',
            answers: [],
            isFinished: false,
        };
    },
    computed: {
        title() {
            // TODO: replace with data and call api
            return mockQuestions[this.id - 1].lesson;
        },
        questions() {
            // TODO: replace with data and call api
            return mockQuestions[this.id - 1].questions;
        },
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
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.week = `Week ${this.id}`;
        this.answers = Array(this.questions.length).fill('');
    },
};
</script>

<template>
    <back-card
        class="mx-auto"
        action-text="返回課程管理"
        @button-click="goTo('/teacher/course-management')"
    >
        <div class="pa-14">
            <p class="primary--text font-weight-bold ma-0">{{ week }}</p>
            <h3 class="headline font-weight-medium mb-7">{{ title }}</h3>
            <div>
                <question-row
                    v-for="(question, index) in questions"
                    :readonly="true"
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
                    :disabled="isSent"
                    @click="send"
                ></custom-button>
            </div>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import QuestionRow from '@/components/common/QuestionRow';
import CustomButton from '@/components/common/CustomButton';
import { mockQuestions } from '@/dummies/questions';

export default {
    name: 'QuestionManagement',
    components: { BackCard, QuestionRow, CustomButton },
    data() {
        return {
            week: '',
            id: 0,
            isSent: false,
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
        send() {
            console.log('send!');
            this.isSent = true;
            // TODO: inform db to send questions
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.week = `Week ${this.id}`;
    },
};
</script>

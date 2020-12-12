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
                    :show-analysis="question.showAnalysis"
                    :analysis="question.analysis"
                    :answer="question.answer"
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
                :disabled="!isFinished || isSent"
                @click="send"
            ></custom-button>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import QuestionRow from '@/components/common/QuestionRow';
import CustomButton from '@/components/common/CustomButton';
import { apiExecutor } from '../../api';
import { mapActions } from 'vuex';

export default {
    name: 'QuestionList',
    components: { BackCard, QuestionRow, CustomButton },
    data() {
        return {
            id: 0,
            week: '',
            title: '',
            answers: [],
            correctAnswer: [],
            questions: [],
            isFinished: false,
            isSent: false,
            score: 0,
        };
    },
    computed: {
        correctAnswers() {
            return this.questions.map((question) => question.answer);
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
        countScore() {
            const total = 100;
            const scorePerQues = total / this.questions.length;
            let tempScore = 0;

            this.answers.forEach((answer, index) => {
                if (answer === this.correctAnswers[index]) {
                    tempScore += scorePerQues;
                } else {
                    this.questions[index].showAnalysis = true;
                }
            });

            this.score = Math.floor(tempScore);
        },
        async send() {
            this.countScore();
            await apiExecutor.submitAnswers(this.answers);
            this.isSent = true;
            this.updatePopup({
                popupText: '送出成功',
                imgSrc: '/img/correction.svg',
            });
        },
        ...mapActions({
            updatePopup: 'popup/updatePopup',
        }),
    },
    async created() {
        this.id = this.$route.params.id;
        this.week = `Week ${this.id}`;

        const response = await apiExecutor.getQuestion(this.id);
        this.questions = response.data.questions.map((question) => {
            return { ...question, showAnalysis: false };
        });
        this.title = response.data.lesson;

        this.answers = Array(this.questions.length).fill('');
    },
};
</script>

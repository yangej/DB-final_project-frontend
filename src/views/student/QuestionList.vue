<template>
    <back-card
        class="mx-auto"
        action-text="返回課堂回答"
        @button-click="goTo('/student/course-list')"
    >
        <div class="pa-14">
            <unit-title :unit="unit" :title="title"></unit-title>
            <div>
                <question-row
                    v-for="(question, index) in questions"
                    :answer="question.answer"
                    :key="`question-${index}`"
                    :question="question.question"
                    :options="question.options"
                    @update-value="updateValue($event, index)"
                >
                    <div
                        v-if="question.showAnalysis"
                        class="primary lighten-1 pa-5"
                    >
                        <span class="warning--text font-weight-medium">
                            答案為 {{ question.answer }}，{{
                                question.analysis
                            }}
                        </span>
                    </div>
                </question-row>
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
import UnitTitle from '@/components/common/UnitTitle';
import QuestionRow from '@/components/common/QuestionRow';
import CustomButton from '@/components/common/CustomButton';
import { apiExecutor } from '@/api';
import { mapActions } from 'vuex';

export default {
    name: 'QuestionList',
    components: { BackCard, UnitTitle, QuestionRow, CustomButton },
    data() {
        return {
            id: 0,
            unit: '',
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
            await apiExecutor.submitAnswers(this.answers);
            this.updatePopup({
                popupText: '送出成功',
                imgSrc: '/img/correction.svg',
            });
            this.countScore();
            this.isSent = true;
        },
        ...mapActions({
            updatePopup: 'popup/updatePopup',
        }),
    },
    async created() {
        this.id = this.$route.params.id;

        const response = await apiExecutor.getQuestion(this.id);
        console.log(response);
        // TODO: get wrong response, an empty array returned!
        this.questions = response.questions.map((question) => {
            return { ...question, showAnalysis: false };
        });
        this.unit = response.unit;
        this.title = response.unitName;

        this.answers = Array(this.questions.length).fill('');
    },
};
</script>

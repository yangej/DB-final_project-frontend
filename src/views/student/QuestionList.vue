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
                    :answer="question.studentAnswer"
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
                            {{ question.analysis }}
                        </span>
                    </div>
                </question-row>
            </div>
            <custom-button
                v-if="!isSent"
                text="送出回答"
                width="130"
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
            questions: [],
            isFinished: false,
            isSent: false,
            score: 0,
        };
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
        },
        updateValue(value, index) {
            this.questions[index].studentAnswer = value;
            this.checkAnswers();
        },
        checkAnswers() {
            this.isFinished = this.questions.every((question) => {
                return question.studentAnswer !== '';
            });
        },
        countScore(questions) {
            const total = 100;
            const scorePerQues = total / this.questions.length;
            let tempScore = 0;

            questions.forEach((question, index) => {
                question.studentAnswer === question.answer
                    ? (tempScore += scorePerQues)
                    : (this.questions[index].showAnalysis = true);
            });

            this.score = Math.floor(tempScore);
        },
        resetQuestion(question) {
            const options = [
                `A ${question.optionA}`,
                `B ${question.optionB}`,
                `C ${question.optionC}`,
                `D ${question.optionD}`,
            ];
            return {
                id: question.id,
                analysis: question.analyze,
                question: question.question,
                answer: question.questionAnswer,
                studentAnswer: question.studentAnswer,
                showAnalysis: question.studentAnswer ? true : false,
                options,
            };
        },
        async send() {
            this.updatePopup({
                popupText: '送出成功',
                imgSrc: '/img/correction.svg',
            });
            this.countScore(this.questions);
            this.isSent = true;
        },
        ...mapActions({
            updatePopup: 'popup/updatePopup',
        }),
    },
    async mounted() {
        this.id = this.$route.params.id;

        const response = await apiExecutor.getQuestion(this.id);
        this.questions = response.questions.map((question) =>
            this.resetQuestion(question)
        );
        this.isSent = this.questions[0].studentAnswer ? true : false;
        this.unit = `Unit ${this.$route.params.id}`;
        this.title = response.name;
    },
};
</script>

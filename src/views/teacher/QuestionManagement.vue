<template>
    <back-card
        class="mx-auto"
        action-text="返回課程管理"
        @button-click="goTo('/teacher/course-management')"
    >
        <div class="pa-14">
            <unit-title :unit="unit" :title="title"></unit-title>
            <div>
                <question-row
                    v-for="(question, index) in questions"
                    :readonly="true"
                    :key="`question-${index}`"
                    :question="question.question"
                    :options="question.options"
                    :answer="question.answer"
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
            <div class="d-flex justify-end">
                <custom-button
                    v-if="!isSent"
                    text="送出問題"
                    width="130"
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
import UnitTitle from '@/components/common/UnitTitle';
import { apiExecutor } from '@/api';
import { mapActions } from 'vuex';

export default {
    name: 'QuestionManagement',
    components: { BackCard, UnitTitle, QuestionRow, CustomButton },
    data() {
        return {
            unit: '',
            title: '',
            id: 0,
            isSent: false,
            questions: [],
        };
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
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
                showAnalysis: true,
                options,
            };
        },
        transformBoolean(boolean) {
            return boolean === 1 ? true : false;
        },
        send() {
            this.isSent = true;
            apiExecutor.setQuestionSent(this.id);
            this.updatePopup({
                popupText: '送出成功',
                imgSrc: '/img/selection.svg',
            });
        },
        ...mapActions({
            updatePopup: 'popup/updatePopup',
        }),
    },
    async created() {
        this.id = this.$route.params.id;

        const response = await apiExecutor.getQuestion(this.id);
        this.unit = `Unit ${this.$route.params.id}`;
        this.title = response.name;
        this.questions = response.questions.map((question) =>
            this.resetQuestion(question)
        );
        this.isSent = this.transformBoolean(response.isSend);
    },
};
</script>

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
                            答案為 {{ question.answer }}，{{
                                question.analysis
                            }}
                        </span>
                    </div>
                </question-row>
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
        send() {
            this.isSent = true;
            apiExecutor.setQuestionSent(this.id, true);
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
        this.unit = response.data.unit;
        this.title = response.data.unitName;
        this.questions = response.data.questions.map((question) => {
            return { ...question, showAnalysis: true };
        });
        this.isSent = response.data.isSent;
    },
};
</script>

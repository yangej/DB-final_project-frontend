<template>
    <back-card
        class="mx-auto"
        action-text="返回答題狀況"
        @button-click="goTo('/teacher/unit-overview')"
    >
        <div class="pa-14">
            <unit-title :title="title" :unit="unit"></unit-title>
            <div>
                <score-histogram :data="overallChartData"></score-histogram>
            </div>
            <div>
                <h3 class="headline font-weight-medium mb-7">各題狀況</h3>
                <question-row
                    v-for="(question, index) in questions"
                    :readonly="true"
                    :key="`question-${index}`"
                    :question="question.question"
                    :options="question.options"
                    :answer="question.answer"
                >
                    <div class="mt-n10">
                        <score-bar-chart
                            class="px-10"
                            :dataset="questionChartDatas[index]"
                        ></score-bar-chart>
                    </div>
                </question-row>
            </div>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import UnitTitle from '@/components/common/UnitTitle';
import ScoreHistogram from '@/components/chart/ScoreHistogram';
import ScoreBarChart from '@/components/chart/ScoreBarChart';
import QuestionRow from '@/components/common/QuestionRow';

import {
    mockQuestionResults,
    mockStudentScores,
} from '../../dummies/summaryData';

export default {
    name: 'QuestionAnswers',
    components: {
        BackCard,
        UnitTitle,
        ScoreHistogram,
        ScoreBarChart,
        QuestionRow,
    },
    data() {
        return {
            title: '',
            unitId: 0,
            overallChartData: {
                columns: ['name', 'score'],
                rows: [],
            },
            questionChartDatas: [],
            questions: [],
        };
    },
    computed: {
        unit() {
            return `Unit ${this.unitId}`;
        },
    },
    methods: {
        goTo(path) {
            this.$router.push({ path });
        },
        resetQuestion(question) {
            const options = [
                `A ${question.option_a}`,
                `B ${question.option_b}`,
                `C ${question.option_c}`,
                `D ${question.option_d}`,
            ];
            const countAnswers = this.countAnswers(question);
            return {
                question: question.question,
                answer: question.answer,
                countAnswers,
                options,
            };
        },
        countAnswers(question) {
            const answerCount = {
                A: { count: 0, students: [] },
                B: { count: 0, students: [] },
                C: { count: 0, students: [] },
                D: { count: 0, students: [] },
            };
            question.studentAnswers.forEach((studentAnswer) => {
                const option = studentAnswer.option;
                answerCount[option].count += 1;
                answerCount[option].students.push(studentAnswer.name);
            });
            return answerCount;
        },
        formatQuestions(questions) {
            return questions.map((question) => {
                return this.resetQuestion(question);
            });
        },
        getQuestionRows(questions) {
            return questions.map((question) => {
                const A = question.countAnswers['A'];
                const B = question.countAnswers['B'];
                const C = question.countAnswers['C'];
                const D = question.countAnswers['D'];
                return {
                    columns: ['option', 'count', 'students'],
                    rows: [
                        {
                            option: 'A',
                            count: A.count,
                            students: A.students.join('、'),
                        },
                        {
                            option: 'B',
                            count: B.count,
                            students: B.students.join('、'),
                        },
                        {
                            option: 'C',
                            count: C.count,
                            students: C.students.join('、'),
                        },
                        {
                            option: 'D',
                            count: D.count,
                            students: D.students.join('、'),
                        },
                    ],
                };
            });
        },
    },
    mounted() {
        const resultRes = mockQuestionResults;
        const studentRes = mockStudentScores;

        this.questions = this.formatQuestions(resultRes.questions);

        this.questionChartDatas = this.getQuestionRows(this.questions);
        this.overallChartData = { ...this.overallChartData, rows: studentRes };
        this.title = resultRes.unitTitle;
        this.unitId = this.$route.params.id;
    },
};
</script>

<style lang="scss" scoped>
.border-left {
    border-left: 1px solid #efefef;
}
</style>

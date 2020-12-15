<template>
    <back-card
        class="mx-auto"
        action-text="返回答題狀況"
        @button-click="goTo('/teacher/unit-overview')"
    >
        <div class="pa-14">
            <unit-title :title="title" :unit="unit"></unit-title>
            <div>
                <score-bar-chart :data="overallChartData"></score-bar-chart>
            </div>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import UnitTitle from '@/components/common/UnitTitle';
import ScoreBarChart from '@/components/chart/ScoreBarChart';
import {
    mockQuestionResults,
    mockStudentScores,
} from '../../dummies/summaryData';

export default {
    name: 'QuestionAnswers',
    components: { BackCard, UnitTitle, ScoreBarChart },
    data() {
        return {
            title: '',
            unitId: 0,
            overallChartData: {
                columns: ['name', 'score'],
                rows: [],
            },
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
    },
    mounted() {
        const resultRes = mockQuestionResults;
        const studentRes = mockStudentScores;

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

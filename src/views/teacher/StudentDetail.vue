<template>
    <back-card
        class="mx-auto"
        action-text="返回學生列表"
        @button-click="goTo('/teacher/student-list')"
    >
        <div class="px-10 pt-10">
            <student-info-row :infos="infos"></student-info-row>
        </div>
        <div class="pb-5 px-10">
            <score-line-chart :data="chartData"></score-line-chart>
        </div>
        <div class="pb-10 px-10">
            <custom-table :headers="headers" :items="scores"></custom-table>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import CustomTable from '@/components/common/CustomTable';
import StudentInfoRow from '@/components/teacher/StudentInfoRow';
import ScoreLineChart from '@/components/chart/ScoreLineChart';
import { apiExecutor } from '@/api';

export default {
    name: 'StudentDetail',
    components: { BackCard, ScoreLineChart, StudentInfoRow, CustomTable },
    data() {
        return {
            infos: {},
            average: 0,
            chartData: {
                columns: ['unit', 'score'],
                rows: [],
            },
            headers: [
                { text: '單元', value: 'unit', sortable: false },
                { text: '單元名稱', value: 'title', sortable: false },
                { text: '分數', value: 'score', sortable: false },
            ],
            scores: [],
        };
    },
    methods: {
        goTo(path) {
            this.$router.push({ path });
        },
        transformChartData(scores) {
            return {
                ...this.chartData,
                rows: scores.map((unitScore) => {
                    return { unit: unitScore.unit, score: unitScore.score };
                }),
            };
        },
    },
    async created() {
        const studentId = this.$route.params.id;

        const resStudent = await apiExecutor.getStudent(studentId);
        const resScores = await apiExecutor.getScores(studentId);
        const scores = resScores.data.scores;

        this.chartData = this.transformChartData(scores);
        this.infos = resStudent.data;
        this.scores = scores;
    },
};
</script>

<style lang="scss" scoped>
.border-left {
    border-left: 1px solid #efefef;
}
</style>

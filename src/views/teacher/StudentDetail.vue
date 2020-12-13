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
            <v-data-table
                :headers="headers"
                :items="scores"
                class="shadow"
                hide-default-footer
            ></v-data-table>
        </div>
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';
import StudentInfoRow from '@/components/teacher/StudentInfoRow';
import ScoreLineChart from '@/components/chart/ScoreLineChart';
import { apiExecutor } from '@/api';

export default {
    name: 'StudentDetail',
    components: { BackCard, ScoreLineChart, StudentInfoRow },
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
        getChartData(scores) {
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

        this.chartData = this.getChartData(scores);
        this.infos = resStudent.data;
        this.scores = scores;
    },
};
</script>

<style lang="scss" scoped>
.border-left {
    border-left: 1px solid #efefef;
}

::v-deep table {
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
    overflow: hidden;
}

::v-deep .v-data-table-header {
    background-color: #5bc88f;

    th {
        padding: 16px 30px !important;
        border-bottom: 1px solid #efefef !important;
        span {
            font-size: 16px;
            color: white !important;
        }
    }
}

::v-deep td {
    border-bottom: 1px solid #efefef !important;
    padding: 16px 30px !important;
    font-size: 16px !important;
}
</style>

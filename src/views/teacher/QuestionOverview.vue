<template>
    <div style="padding-top: 100px">
        <score-line-chart :data="chartData"></score-line-chart>
    </div>
</template>

<script>
import ScoreLineChart from '@/components/chart/ScoreLineChart';
import { mockQuestionOverview } from '../../dummies/summaryData';

export default {
    name: 'StudentDetail',
    components: { ScoreLineChart },
    data() {
        return {
            allUnits: [],
            difficultUnits: [],
            middleUnits: [],
            easyUnits: [],
            chartData: {
                columns: ['unit', 'score'],
                rows: [],
            },
        };
    },
    methods: {
        categorizeUnits(response) {
            this.difficultUnits = response.difficult;
            this.middleUnits = response.middle;
            this.easyUnits = response.easy;

            this.allUnits = [
                ...this.difficultUnits,
                ...this.middleUnits,
                ...this.easyUnits,
            ];
        },
        transformChartData(dataset) {
            const sortedDartaset = [...dataset].sort((a, b) => {
                return a.unitId - b.unitId;
            });
            return {
                ...this.chartData,
                rows: sortedDartaset.map((data) => {
                    return { unit: `Unit ${data.unitId}`, score: data.avg };
                }),
            };
        },
    },
    mounted() {
        const response = mockQuestionOverview;
        this.categorizeUnits(response);
        this.chartData = this.transformChartData(this.allUnits);
    },
};
</script>

<style lang="scss" scoped></style>

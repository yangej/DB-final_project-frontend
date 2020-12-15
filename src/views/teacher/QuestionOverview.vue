<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="答題狀況"
            en-title="Answering Situation"
            img-src="/img/admin.svg"
        >
            <template>
                <div class="mt-n10 px-5">
                    <score-line-chart :data="chartData"></score-line-chart>
                </div>
                <div>
                    <button-row
                        :btn-infos="btnInfos"
                        :current-btn="currentCat"
                        @button-click="selectCat"
                    ></button-row>
                </div>
            </template>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import ScoreLineChart from '@/components/chart/ScoreLineChart';
import ButtonRow from '../../components/common/ButtonRow';
import { mockQuestionOverview } from '../../dummies/summaryData';

export default {
    name: 'StudentDetail',
    components: { MainCard, ScoreLineChart, ButtonRow },
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
            btnInfos: [
                {
                    text: '全部',
                    level: 'all',
                },
                {
                    text: '難',
                    level: 'difficult',
                },
                {
                    text: '中',
                    level: 'middle',
                },
                {
                    text: '易',
                    level: 'easy',
                },
            ],
            currentCat: 'all',
            currentUnits: [],
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
            const sortedDataset = [...dataset].sort((a, b) => {
                return a.unitId - b.unitId;
            });
            return {
                ...this.chartData,
                rows: sortedDataset.map((data) => {
                    return { unit: `Unit ${data.unitId}`, score: data.avg };
                }),
            };
        },
        selectCat(level) {
            this.currentCat = level;
        },
    },
    mounted() {
        const response = mockQuestionOverview;
        this.categorizeUnits(response);
        this.currentUnits = this.allUnits;
        this.chartData = this.transformChartData(this.allUnits);
    },
};
</script>

<style lang="scss" scoped></style>

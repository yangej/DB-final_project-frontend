<template>
    <ve-chart
        :data="data"
        :legend-visible="false"
        :extend="chartSettings"
    ></ve-chart>
</template>

<script>
import VeChart from 'v-charts/lib/line';
import 'echarts/lib/component/markLine';

export default {
    name: 'ScoreLineChart',
    components: { VeChart },
    props: {
        data: Object,
    },
    data() {
        return {
            chartSettings: {
                color: ['#5BC88F'],
                series: {
                    markLine: {
                        data: [
                            {
                                type: 'average',
                            },
                        ],
                        silent: true,
                        label: {
                            show: false,
                        },
                    },
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>

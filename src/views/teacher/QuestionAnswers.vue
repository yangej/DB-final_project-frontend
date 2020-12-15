<template>
    <back-card
        class="mx-auto"
        action-text="返回答題狀況"
        @button-click="goTo('/teacher/unit-overview')"
    >
        test
    </back-card>
</template>

<script>
import BackCard from '@/components/common/BackCard';

export default {
    name: 'QuestionAnswers',
    components: { BackCard },
    data() {
        return {};
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
};
</script>

<style lang="scss" scoped>
.border-left {
    border-left: 1px solid #efefef;
}
</style>

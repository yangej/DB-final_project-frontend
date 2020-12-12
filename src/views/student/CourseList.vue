<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="課堂回答"
            en-title="Questions in Class"
            img-src="/img/navigate.svg"
        >
            <template>
                <item-row
                    v-for="(course, index) in courses"
                    :key="`course-${index}`"
                    :tag-text="course.week"
                    :title="course.title"
                    action-text="查看問題"
                    @click-button="
                        goTo('QuestionList', index + 1, course.title)
                    "
                ></item-row>
            </template>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import ItemRow from '@/components/common/ItemRow';
import { apiExecutor } from '../../api';

export default {
    name: 'CourseList',
    components: { MainCard, ItemRow },
    data() {
        return {
            courses: [],
        };
    },
    methods: {
        goTo(name, id, title) {
            this.$router.push({ name, params: { id, title } });
        },
    },
    async created() {
        const response = await apiExecutor.getAllCourses();
        this.courses = response.data;
    },
};
</script>

<style lang="scss" scoped></style>

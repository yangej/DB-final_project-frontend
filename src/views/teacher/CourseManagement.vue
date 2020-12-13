<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="課程管理"
            en-title="Course Management"
            img-src="/img/spreadsheet.svg"
        >
            <template>
                <div class="px-5">
                    <item-row
                        v-for="(course, index) in courses"
                        :key="`course-${index}`"
                        :tag-text="course.unit"
                        :title="course.unitName"
                        action-text="管理問題"
                        @click-button="
                            goTo('QuestionManagement', course.id, course.title)
                        "
                    ></item-row>
                </div>
            </template>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import ItemRow from '@/components/common/ItemRow';
import { apiExecutor } from '../../api';

export default {
    name: 'CourseManagement',
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

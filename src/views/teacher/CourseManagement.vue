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
                        v-for="(course, index) in courseList"
                        :key="`course-${index}`"
                        :tag-text="course.week"
                        :title="course.title"
                        action-text="管理問題"
                        @click-button="
                            goTo('QuestionManagement', index + 1, course.title)
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
import { mockCourseList } from '@/dummies/courseList';

export default {
    name: 'CourseManagement',
    components: { MainCard, ItemRow },
    data() {
        return {
            courseList: mockCourseList,
        };
    },
    methods: {
        goTo(name, id, title) {
            this.$router.push({ name, params: { id, title } });
        },
    },
};
</script>

<style lang="scss" scoped></style>

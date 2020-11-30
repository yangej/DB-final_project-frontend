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
                    v-for="(course,index) in courseList"
                    :key="`course-${index}`"
                    :tag-text="course.week"
                    :title="course.title"
                    action-text="查看問題"
                    @click-button="goTo(`/questions/${index + 1}`)"
                ></item-row>
            </template>
        </main-card>
    </div>
</template>

<script>
    import MainCard from "@/components/common/MainCard";
    import ItemRow from "@/components/common/ItemRow";
    import { mockCourseList } from "@/dummies/courseList";

    export default {
        name: 'CourseList',
        components: { MainCard, ItemRow },
        data() {
            return {
                courseList: mockCourseList
            };
        },
        methods: {
            goTo(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
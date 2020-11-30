<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="課堂回答"
            en-title="Questions in Class"
            img-src="/img/navigate.svg"
        >
            <template>
                <div class="px-4">
                    <item-list
                        v-for="(course,index) in courseList"
                        :key="`course-${index}`"
                        :tag-text="course.week"
                        :title="course.title"
                        action-text="查看問題"
                    ></item-list>
                </div>
            </template>
        </main-card>
    </div>
</template>

<script>
    import MainCard from "@/components/common/MainCard";
    import ItemList from "@/components/common/ItemList";
    import { mockCourseList } from "@/dummies/courseList";

    export default {
        name: 'CourseList',
        components: { MainCard, ItemList },
        data() {
            return {
                courseList: mockCourseList
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>
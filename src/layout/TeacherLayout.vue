<template>
    <div style="padding-top: 100px; padding-bottom: 100px">
        <custom-navbar :nav-items="navItems" :role="userRole"></custom-navbar>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script lang="ts">
import CustomNavbar from '../components/common/CustomNavbar.vue';

export default {
    name: 'TeacherLayout',
    components: { CustomNavbar },
    data() {
        return {
            navItems: [
                { name: '課程管理', path: '/teacher/course-management' },
                { name: '學生列表', path: '/teacher/student-management' },
            ],
            userRole: 'teacher',
        };
    },
};
</script>

<style lang="scss" scoped></style>

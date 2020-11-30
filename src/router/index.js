import VueRouter from "vue-router";
import StudentLayout from "@/layout/StudentLayout";
import TeacherLayout from "@/layout/TeacherLayout";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Test from "@/views/test";
import CourseList from "@/views/student/CourseList";
import QuestionList from "@/views/student/QuestionList";
import CourseManagement from "@/views/teacher/CourseManagement";
import StudentAnswer from "@/views/teacher/StudentAnswer";
import StudentList from "@/views/teacher/StudentList";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '',
        name: 'StudentLayout',
        component: StudentLayout,
        redirect: '/student',
        children: [
            {
                path: '/student',
                name: 'StudentTest',
                component: Test
            },
            {
                path: '/course-list',
                name: 'CourseList',
                component: CourseList
            },
            {
                path: '/questions/:id',
                component: QuestionList
            }
        ]
    },
    {
        path: '',
        name: 'TeacherLayout',
        component: TeacherLayout,
        redirect: '/teacher',
        children: [
            {
                path: '/teacher',
                name: 'TeacherTest',
                component: Test
            },
            {
                path: '/course-management',
                name: 'CourseManagement',
                component: CourseManagement
            },
            {
                path: '/student-answer',
                name: 'StudentAnswer',
                component: StudentAnswer
            },
            {
                path: '/student-list',
                name: 'StudentList',
                component: StudentList
            },
        ]
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '*',
        redirect: '/',
    }
];
const router = new VueRouter({ routes });

export default router;
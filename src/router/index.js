import VueRouter from "vue-router";
import StudentLayout from "@/layout/StudentLayout";
import TeacherLayout from "@/layout/TeacherLayout";
import Login from "@/views/Login";
import CourseList from "@/views/student/CourseList";
import QuestionList from "@/views/student/QuestionList";
import CourseManagement from "@/views/teacher/CourseManagement";
import QuestionManagement from "@/views/teacher/QuestionManagement";
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
                path: '/course-list',
                name: 'CourseList',
                component: CourseList
            },
            {
                path: '/questions/:id',
                name: 'QuestionList',
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
                path: '/course-management',
                name: 'CourseManagement',
                component: CourseManagement
            },
            {
                path: '/question-management/:id',
                name: 'QuestionManagement',
                component: QuestionManagement
            },
            {
                path: '/student-list',
                name: 'StudentList',
                component: StudentList
            },
        ]
    },
    {
        path: '*',
        redirect: '/',
    }
];
const router = new VueRouter({ routes });

export default router;
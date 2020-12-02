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
        path: '/student',
        name: 'StudentLayout',
        component: StudentLayout,
        redirect: '/student/course-list',
        children: [
            {
                path: '/student/course-list',
                name: 'CourseList',
                component: CourseList
            },
            {
                path: '/student/questions/:id',
                name: 'QuestionList',
                component: QuestionList
            }
        ]
    },
    {
        path: '/teacher',
        name: 'TeacherLayout',
        component: TeacherLayout,
        redirect: '/teacher/course-management',
        children: [
            {
                path: '/teacher/course-management',
                name: 'CourseManagement',
                component: CourseManagement
            },
            {
                path: '/teacher/question-management/:id',
                name: 'QuestionManagement',
                component: QuestionManagement
            },
            {
                path: '/teacher/student-list',
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
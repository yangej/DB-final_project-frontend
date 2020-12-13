import VueRouter from 'vue-router';
import StudentLayout from '@/layout/StudentLayout';
import TeacherLayout from '@/layout/TeacherLayout';
import store from '../store';

const role = store.state.user.role;

const studentRoutes = [
    {
        path: '/student',
        name: 'StudentLayout',
        component: StudentLayout,
        redirect: '/student/course-list',
        children: [
            {
                path: '/student/course-list',
                name: 'CourseList',
                component: () => import('@/views/student/CourseList.vue'),
            },
            {
                path: '/student/questions/:id',
                name: 'QuestionList',
                component: () => import('@/views/student/QuestionList.vue'),
            },
        ],
    },
];

const teacherRoutes = [
    {
        path: '/teacher',
        name: 'TeacherLayout',
        component: TeacherLayout,
        redirect: '/teacher/course-management',
        children: [
            {
                path: '/teacher/course-management',
                name: 'CourseManagement',
                component: () => import('@/views/teacher/CourseManagement.vue'),
            },
            {
                path: '/teacher/question-management/:id',
                name: 'QuestionManagement',
                component: () =>
                    import('@/views/teacher/QuestionManagement.vue'),
            },
            {
                path: '/teacher/student-list',
                name: 'StudentList',
                component: () => import('@/views/teacher/StudentList.vue'),
            },
            {
                path: '/teacher/student-detail/:id',
                name: 'StudentDetail',
                component: () => import('@/views/teacher/StudentDetail.vue'),
            },
        ],
    },
];

const roleRoutes = role === 'teacher' ? teacherRoutes : studentRoutes;
const redirectPath = role ? `/${role}` : '/login';
const routes = [
    {
        path: '/',
        redirect: redirectPath,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/login/Register.vue'),
    },
    {
        path: '*',
        redirect: `/${role}`,
    },
    ...roleRoutes,
];

const router = new VueRouter({ mode: 'history', routes });

export default router;

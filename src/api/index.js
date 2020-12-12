import axios from 'axios';

const apiFactory = function (axios) {
    return {
        getAllCourses() {
            return axios.get('/courses');
        },
        getCourse(id) {
            return axios.get(`/courses/${id}`);
        },
        getAllQuestions() {
            return axios.get('/questions');
        },
        getQuestion(id) {
            return axios.get(`/questions/${id}`);
        },
        getAllStudents() {
            return axios.get('/students');
        },
        getStudent(id) {
            return axios.get(`/students/${id}`);
        },
        login() {
            return axios.get('/login');
        },
        submitAnswers(answerInfos) {
            return axios.post('/answers', answerInfos);
        },
    };
};

const config = {
    baseURL: 'http://localhost:3000/api',
    headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(config);

export const apiExecutor = apiFactory(axiosInstance);

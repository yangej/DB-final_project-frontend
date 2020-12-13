import axios from 'axios';

const apiFactory = function (axios) {
    return {
        getAllCourses() {
            return axios.get('/courses');
        },
        getQuestion(id) {
            return axios.get(`/questions/${id}`);
        },
        setQuestionSent(id, isSent) {
            return axios.post(`/send-questions/${id}`, isSent);
        },
        getAllStudents() {
            return axios.get('/students');
        },
        getStudent(id) {
            return axios.get(`/students/${id}`);
        },
        getScores(id) {
            return axios.get(`/scores/${id}`);
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
    baseURL: '/api',
    headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(config);

export const apiExecutor = apiFactory(axiosInstance);

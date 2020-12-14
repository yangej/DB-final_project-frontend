import axios from 'axios';
import { setInterceptor } from './interceptor';

const apiFactory = function (axios) {
    return {
        getAllUnits() {
            return axios.get('/units');
        },
        // getQuestion(id) {
        //     return axios.get(`/questions/${id}`);
        // },
        // setQuestionSent(id, isSent) {
        //     return axios.post(`/send-questions/${id}`, isSent);
        // },
        // getAllStudents() {
        //     return axios.get('/students');
        // },
        // getStudent(id) {
        //     return axios.get(`/students/${id}`);
        // },
        // getScores(id) {
        //     return axios.get(`/scores/${id}`);
        // },
        login(loginInfos) {
            return axios.post('/login', loginInfos);
        },
        // submitAnswers(answerInfos) {
        //     return axios.post('/answers', answerInfos);
        // },
    };
};

const config = {
    baseURL: 'http://localhost:5000',
    'Content-Type': 'application/json',
};

const axiosInstance = axios.create(config);
setInterceptor(axiosInstance);

export const apiExecutor = apiFactory(axiosInstance);

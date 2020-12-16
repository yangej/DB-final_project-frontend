import axios from 'axios';
import { setInterceptor } from './interceptor';

const apiFactory = function (axios) {
    return {
        getAllUnits() {
            return axios.get('/units');
        },
        getQuestion(id) {
            return axios.get(`/questions/${id}`);
        },
        setQuestionSent(unitId) {
            return axios.post(`/send-questions`, unitId);
        },
        getAllStudents() {
            return axios.get('/student-list');
        },
        getStudentDetail(id) {
            return axios.get(`/student/detail/${id}`);
        },
        login(loginInfos) {
            return axios.post('/login', loginInfos);
        },
        register(registerInfos) {
            return axios.post('/register', registerInfos);
        },
        submitAnswers(answerInfos) {
            return axios.post('/answer', answerInfos);
        },
    };
};

const config = {
    baseURL: 'http://localhost:5000',
    'Content-Type': 'application/json',
};

const axiosInstance = axios.create(config);
setInterceptor(axiosInstance);

export const apiExecutor = apiFactory(axiosInstance);

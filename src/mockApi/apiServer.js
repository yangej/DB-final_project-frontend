import { createServer } from 'miragejs';
import { mockCourses } from '../dummies/courses';
import { mockQuestions } from '../dummies/questions';
import { mockStudents } from '../dummies/students';

export function makeServer() {
    let server = createServer({
        seeds(server) {
            server.db.loadData({
                courses: mockCourses,
                questions: mockQuestions,
                students: mockStudents,
                answers: [],
            });
        },

        routes() {
            this.namespace = 'api';

            this.get('/courses', (schema) => {
                return schema.db.courses.all();
            });

            this.get('/courses/:id', (schema, request) => {
                return schema.db.courses.find(request.params.id);
            });

            this.get('/questions', (schema) => {
                return schema.db.questions.all();
            });

            this.get('/questions/:id', (schema, request) => {
                return schema.db.questions.find(request.params.id);
            });

            this.get('/students', (schema) => {
                return schema.db.students.all();
            });

            this.get('/students/:id', (schema, request) => {
                return schema.db.students.find(request.params.id);
            });

            this.get('/login', (schema) => {
                return schema.db.students.find(109462008);
            });

            this.post('/answers', (schema, request) => {
                const answerReq = JSON.parse(request.requestBody);
                return schema.db.answers.insert(answerReq);
            });
        },
    });

    return server;
}

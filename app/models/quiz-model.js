export class QuizModel {

    constructor(){
        this.quiz = [
            {
                question: 'Where did The Flowerpot Men want to go in 1967?',
                answer: 1,
                multipleChoice: [
                    'New York',
                    'San Francisco',
                    'Woodstock',
                    'Memphis'
                ]
            },
            {
                question: 'James Bond was searching for what kind of airplane in \'Thunderball\'?',
                answer: 2,
                multipleChoice: [
                    '707',
                    'Piper Cub',
                    'Vulkan',
                    'B-52'
                ]
            },
            {
                question: 'Who wrote \"don\'t count your chickens before they are hatched\"?',
                answer: 1,
                multipleChoice: [
                    'Aesop',
                    'Shakespeare',
                    'Ben Franklin',
                    'Chaucer'
                ]
            }
        ]
    }

    getQuestion(index) {
        return this.quiz[index].question;
    }

    getMultipleChoice(index) {
        return this.quiz[index].multipleChoice;
    }

    getAnswer(index) {
        return this.quiz[index].answer;
    }

    getNumOfQuestions(index) {
        return this.quiz.length;
    }

}
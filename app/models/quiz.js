export class Quiz {

    constructor(){
        this.quiz = [
            {
                question: 'question 1',
                answer: 1,
                multipleChoice: [
                    'a1',
                    'a2',
                    'a3',
                    'a4'
                ]
            },
            {
                question: 'What year did England win the world cup?',
                answer: 1,
                multipleChoice: [
                    'a1',
                    'a2',
                    'a3',
                    'a4'
                ]
            },
            {
                question: 'question 3',
                answer: 1,
                multipleChoice: [
                    'a1',
                    'a2',
                    'a3',
                    'a4'
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


}
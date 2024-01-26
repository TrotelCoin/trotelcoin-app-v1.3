import quizzes from "@/data/quizData";

const answers = quizzes.map(quiz => {
  const correctAnswers = {
    en: quiz.questions.map(question => question.options.en.findIndex(option => option === question.options.en[0])),
    fr: quiz.questions.map(question => question.options.fr.findIndex(option => option === question.options.fr[0])),
  };

  return { quizId: quiz.quizId, correctAnswers };
});

export default answers;

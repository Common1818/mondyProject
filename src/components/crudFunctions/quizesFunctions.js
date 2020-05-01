import firebase from "../../config/fbConfig";

export const getQuizes = async (dispatch) => {
  const quizArray = [];
  const quizArraySnapshot = await firebase
    .firestore()
    .collection("Quizes")
    .get();

  quizArraySnapshot.docs.map((doc) => {
    quizArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_QUIZES", quizes: quizArray });
};

export const addQuiz = (dispatch, quiz) => {
  firebase
    .firestore()
    .collection("Quizes")
    .add({
      ...quiz,
    })
    .then(() => {
      dispatch({ type: "ADD_QUIZ", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "ADD_QUIZ", errorCode: 100 });
    });
};

export const deleteQuiz = (dispatch, id) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Quizes")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: "DELETE_QUIZ", errCode: 400 });
    })
    .catch((err) => {
      dispatch({ type: "DELETE_QUIZ", errCode: 300 });
    });
};

export const deleteQuestion = (dispatch, currentPage, id) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Quizes")
    .doc(id)
    .get()
    .then((doc) => {
      let quizData = doc.data();
      let newArr = quizData.quizQuestionAnswer;
      newArr.splice(currentPage - 1, 1);

      firestore
        .collection("Quizes")
        .doc(id)
        .update({
          quizQuestionAnswer: newArr,
        })
        .then(() => {
          dispatch({ type: "DELETE_QUESTION", errCode: 400 });
        })
        .catch((err) => {
          dispatch({ type: "DELETE_QUESTION", errCode: 300 });
        });
    });
};

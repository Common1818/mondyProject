import firebase from "../../config/fbConfig";

export const addArticleFunction = (props, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Blog")

    .add({
      ...props,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      dispatch({
        type: "ADD_ARTICLE",
        errCode: 200,
      });
    })
    .catch((err) => {
      dispatch({
        type: "ADD_ARTICLE",
        errCode: 100,
      });
    });
};

export const updateArticleFunction = (props, dispatch, id) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Blog")
    .doc(id)
    .update({
      ...props,
    })
    .then(() => {
      dispatch({
        type: "EDIT_BLOG_ARTICLE",
        errorCode: 200,
      });
    })
    .catch((err) => {
      dispatch({
        type: "EDIT_BLOG_ARTICLE",
        errorCode: 100,
      });
    });
};

export const deleteArticleFunction = (id, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Blog")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: "DELETE_BLOG_ARTICLE", errCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "DELETE_BLOG_ARTICLE", errCode: 100 });
    });
};

export const getContent = async (dispatch) => {
  const contentArray = [];
  const contentArrarySnapshot = await firebase
    .firestore()
    .collection("Blog")
    .orderBy("timestamp", "desc")
    .get();

  contentArrarySnapshot.docs.map((doc) => {
    contentArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_BLOG_CONTENT", content: contentArray });
};

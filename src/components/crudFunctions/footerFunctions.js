import firebase from "../../config/fbConfig";

export const getFooter = async (dispatch) => {
  const footerArray = [];
  const footerArraySnapshot = await firebase
    .firestore()
    .collection("Footer")
    .get();

  footerArraySnapshot.docs.map((doc) => {
    footerArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_FOOTER", content: footerArray });
};

export const updateFooterFunction = (props, dispatch, id, collection) => {
  const firestore = firebase.firestore();
  firestore
    .collection(collection)
    .doc(id)
    .update({
      ...props,
    })
    .then(() => {
      dispatch({
        type: "EDIT_FOOTER",
        errorCode: 200,
      });
    })
    .catch((err) => {
      dispatch({
        type: "EDIT_FOOTER",
        errorCode: 100,
      });
    });
};

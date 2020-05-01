import firebase from "../../config/fbConfig";

export const EditTopCarouselFunction = (props, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Home")
    .doc("CykeUizU2YpE7Unn8Eqo")
    .update({ ...props })
    .then(() => {
      dispatch({ type: "EDIT_CAROUSEL", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "EDIT_CAROUSEL", errorCode: 100 });
    });
};

export const EditHomeVideoFunction = (props, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Home")
    .doc("wSz6ns7kksIlOfeSpZLF")
    .update({ ...props })
    .then(() => {
      dispatch({ type: "EDIT_HOME_VIDEO", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "EDIT_HOME_VIDEO", errorCode: 100 });
    });
};

export const EditUspSlideFunction = (props, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Home")
    .doc("s7zXiwfVkeatjQC6klDh")
    .update({ ...props })
    .then(() => {
      dispatch({ type: "EDIT_USP_SLIDE", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "EDIT_USP_SLIDE", errorCode: 100 });
    });
};

export const EditStatSlideFunction = (props, dispatch) => {
  const firestore = firebase.firestore();
  console.log(props);
  firestore
    .collection("Home")
    .doc("RTXIzY0ncPvT1Us4K1tD")
    .update({ ...props })
    .then(() => {
      dispatch({ type: "EDIT_STAT_SLIDE", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "EDIT_STAT_SLIDE", errorCode: 100 });
    });
};

export const getContent = async (dispatch) => {
  const contentArray = [];
  const contentArrarySnapshot = await firebase
    .firestore()
    .collection("Home")
    .get();

  contentArrarySnapshot.docs.map((doc) => {
    contentArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_HOME_CONTENT", content: contentArray });
};

import firebase from "../../config/fbConfig";

export const getTopics = async (dispatch) => {
  const topicsArray = [];
  const topicsArraySnpshot = await firebase
    .firestore()
    .collection("Topics")
    .get();

  topicsArraySnpshot.docs.map((doc) => {
    topicsArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_TOPICS", topics: topicsArray });
};

import firebase from "../../config/fbConfig";

export const getCertificates = async (dispatch) => {
  const certificatesArray = [];
  const certificateArraySnapshot = await firebase
    .firestore()
    .collection("Certificates")
    .get();

  certificateArraySnapshot.docs.map((doc) => {
    certificatesArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_CERTIFICATES", certificates: certificatesArray });
};

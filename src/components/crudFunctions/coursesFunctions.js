import firebase from "../../config/fbConfig";

export const addCourseFunction = (props, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Courses")
    .add({
      ...props,
    })
    .then(() => {
      dispatch({ type: "ADD_COURSE", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "ADD_COURSE", errorCode: 100 });
    });
};

export const addCourseVideo = (
  courseId,
  topicId,
  collection,
  props,
  dispatch
) => {
  const firestore = firebase.firestore();
  firestore
    .collection(collection)
    .add({
      ...props,
      courseId: courseId,
      topicId: topicId,
    })
    .then(() => {
      dispatch({ type: "ADD_COURSE_VIDEO", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "ADD_COURSE_VIDEO", errorCode: 100 });
    });
};

export const addCourseTopic = (courseId, props, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection("Topics")
    .add({
      ...props,
      courseId: courseId,
    })
    .then(() => {
      dispatch({ type: "ADD_COURSE_TOPIC", errorCode: 200 });
    })
    .catch((err) => {
      dispatch({ type: "ADD_COURSE_TOPIC", errorCode: 100 });
    });
};

export const getCourses = async (dispatch) => {
  const coursesArray = [];
  const coursesArraySnapshot = await firebase
    .firestore()
    .collection("Courses")
    .get();

  coursesArraySnapshot.docs.map((doc) => {
    coursesArray.push({
      id: doc.id,
      ...doc.data(),
    });
    return null;
  });

  dispatch({ type: "FETCH_COURSES", courses: coursesArray });
};

export const updateCourseFunction = (props, dispatch, id, collection) => {
  const firestore = firebase.firestore();
  firestore
    .collection(collection)
    .doc(id)
    .update({
      ...props,
    })
    .then(() => {
      dispatch({
        type: "EDIT_COURSE",
        errorCode: 200,
      });
    })
    .catch((err) => {
      dispatch({
        type: "EDIT_COURSE",
        errorCode: 100,
      });
    });
};

export const deleteCourseFunction = (id, collection, dispatch) => {
  const firestore = firebase.firestore();
  firestore
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: "DELETE_COURSE", errCode: 400 });
    })
    .catch((err) => {
      dispatch({ type: "DELETE_COURSE", errCode: 300 });
    });
};

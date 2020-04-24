import firebase from '../../config/fbConfig'

export const getVideos = async (dispatch)=>{
    
    const videoArray = []
    const videoArraySnapshot = await firebase.firestore().collection('Videos').get()

    videoArraySnapshot.docs.map(doc=>{

        videoArray.push({
            id:doc.id,
            ...(doc.data())
        })

    })

    console.log(videoArray)
    dispatch({type:'FETCH_VIDEOS', videos: videoArray})
}
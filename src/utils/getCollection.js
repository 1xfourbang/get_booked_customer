import firebase from '../app/config/firebase'

const getCollection = (collectionName) => {
  let response = firebase.firestore().collection(collectionName)

  return response
}

const getFirestore = () => {
  return firebase.firestore()
}

export function getFirebaseValue(path, isArray = false) {
  return getFirestore()
    .doc(path)
    .get()
    .then((doc) => {
      const data = doc.data()

      if (isArray) {
        return objectToArray(data)
      }

      return data
    })
}

export function objectToArray(obj) {
  if (!obj) {
    return []
  }

  return Object.keys(obj).map((key) => ({
    _id: key,
    ...obj[key],
  }))
}

export { getCollection, getFirestore }

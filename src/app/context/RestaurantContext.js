import React, { useContext, createContext, useMemo, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getCollection, getFirestore } from '../../utils/getCollection'

const RestaurantContext = createContext()

function RestaurantContextProvider({ children = {} }) {
  const [restDetail, setRestDetails] = useLocalStorage(
    'Restaurant Details',
    null,
  )

  // let temp_arr = []

  // useEffect(() => {
  //   getCollection('Restaurants')
  //     .get()
  //     .then((querySnapshot) => {
  //       temp_arr = []

  //       querySnapshot.forEach((snapshot) => {
  //         temp_arr.push({ id: snapshot.id, details: snapshot.data() })
  //       })

  //       setRestDetails(temp_arr)
  //     })
  // }, [])

  // let temp_book_arr = [],
  //   temp_table_arr = [],
  //   temp_rest_detail_arr = []

  // useEffect(() => {
  //   getFirestore()
  //     .collection('Restaurants')
  //     .get()
  //     .then((rest) => {
  //       rest.docs.map((restData) => {
  //         getFirestore()
  //           .doc(`Restaurants/${restData.id}`)
  //           .get()
  //           .then((restDetails) => {
  //             // console.log(restDetails.data())
  //             getFirestore()
  //               .collection(`Restaurants/${restDetails.id}/Tables`)
  //               .get()
  //               .then((tableDetail) => {
  //                 // console.log('>>> Tables: ', tableDetail.docs)
  //                 temp_table_arr = []
  //                 tableDetail.docs.map((table) => {
  //                   getFirestore()
  //                     .doc(`Restaurants/${restDetails.id}/Tables/${table.id}`)
  //                     .get()
  //                     .then((res) => {
  //                       temp_table_arr.push({
  //                         tableId: table.id,
  //                         tableDetail: res.data(),
  //                       })
  //                       console.log(temp_table_arr)
  //                     })
  //                 })
  //               })

  //             getFirestore()
  //               .collection(`Restaurants/${restDetails.id}/bookings`)
  //               .get()
  //               .then((bookCollect) => {
  //                 // console.log('>>> Booking: ', bookCollect.docs)
  //                 bookCollect.docs.map((book) => {
  //                   getFirestore()
  //                     .collection(
  //                       `Restaurants/${restDetails.id}/bookings/${book.id}/bookings`,
  //                     )
  //                     .get()
  //                     .then((bookDoc) => {
  //                       temp_book_arr = []
  //                       bookDoc.docs.map((bookDetail) => {
  //                         getFirestore()
  //                           .doc(
  //                             `Restaurants/${restDetails.id}/bookings/${book.id}/bookings/${bookDetail.id}`,
  //                           )
  //                           .get()
  //                           .then((res) => {
  //                             temp_book_arr.push({
  //                               bookId: bookDetail.id,
  //                               bookDetail: res.data(),
  //                             })
  //                             console.log(temp_book_arr)
  //                           })
  //                       })
  //                     })
  //                 })
  //               })
  //           })
  //       })
  //     })
  // }, [])

  const value = useMemo(() => ({ restDetail, setRestDetails }), [
    restDetail,
    setRestDetails,
  ])

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  )
}

function useRestaurants() {
  const context = useContext(RestaurantContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export { RestaurantContextProvider, useRestaurants }

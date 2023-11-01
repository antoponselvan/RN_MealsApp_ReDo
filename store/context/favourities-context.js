import {createContext, useContext, useReducer, useState} from 'react'

export const FavListContext = createContext({
  favIdList:[],
  toggleFavId: (id)=>{}
})

export const FavListContextProvider = ({children}) => {
  const [favIdList, setFavIdList] = useState([])
  const toggleFavId = (id) => {
    if (favIdList.includes(id)){
      setFavIdList((favIdList)=>(favIdList.filter((favId)=>(favId!==id))))
    } else {
      setFavIdList((favIdList)=>([...favIdList, id]))
    }
  }
  const value = {
    favIdList, toggleFavId
  }
  return(
    <FavListContext.Provider value={value}>
      {children}
    </FavListContext.Provider>
  )
}
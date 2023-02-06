import { createContext, useContext, useEffect, useState } from "react";


let MainContext = createContext();

let MyContext = ({ children }) => {

    let [lists, setLists] = useState([])
    let [currentList, setCurrentList] = useState({})

    useEffect(() => {
        let getLists = () => {
            let lists = localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []
            return lists;
        }
        let localLists = getLists();
        setLists(localLists);
        setCurrentList(currentList => {
            if (localLists.length) {
                currentList = localLists[0]
            } 
            currentList = {}
        });
    }, [])

    console.log(lists)
    console.log(currentList)

    return (
        <MainContext.Provider
        value={ { lists, setLists, currentList, setCurrentList } }
        >
            { children }
        </MainContext.Provider>
    )
}

export let useMyContext = () => {
    return useContext(MainContext);
}


export default MyContext;
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLocalStorage = () => {
    let favorites=localStorage.getItem('favorites');
    if(favorites){
        favorites=JSON.parse(localStorage.getItem('favorites'))
    }
    else{
        favorites=[]
    }
    return favorites
}

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [showmodal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

    const fetchMeals = async (url) => {

        setLoading(true)
        try {
            const { data } = await axios(url)
            if (data.meals) {

                setMeals(data.meals)
            }
            else {
                setMeals([])
            }
        }
        catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }
    
    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;
        if (favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal === idMeal)
        }
        else{
            meal = meals.find((meal) => meal.idMeal === idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false)
    }
    const addToFavorites = (idMeal) => {
        if (favorites.length >= 0 && favorites.length < 5) {
            const meal = meals.find((meal) => meal.idMeal === idMeal);
            const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
            if (alreadyFavorite) {
                alert('Dish Already Added')
                return
            }
            const updatedFavorites = [...favorites, meal]

            setFavorites(updatedFavorites)
            localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
        }
        else {
            alert('You Can Only Add 5 Dish To The Favorites')
        }
    }
    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((meal) => meal.idMeal != idMeal);
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])


    useEffect(() => {
        if (!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])
    return <AppContext.Provider value={{
        loading, meals, setSearchTerm, fetchRandomMeal, showmodal,
        selectedMeal, selectMeal, closeModal, favorites, addToFavorites, removeFromFavorites
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider }
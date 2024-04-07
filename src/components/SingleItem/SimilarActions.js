export const  FETCH_SIMILAR_ITEMS_SUCCESS  = 'FETCH_SIMILAR_ITEMS_SUCCESS'

export const fetchSimilarItems = (category) => async (dispatch) => {
    try {
         const response = await fetch(`http://localhost:3001/items?category=${category}`);
        const data = await response.json();
        dispatch({ type: FETCH_SIMILAR_ITEMS_SUCCESS, payload: data });
    } catch (error) {
        console.error('Error fetching similar items:', error);
    }
};

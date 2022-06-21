import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productApi } from './services/product-services'


// Reducer Thunk
export const getProductsList = createAsyncThunk('product/getAllList', async () => {
    try {
        const response = await productApi.getAllProducts();
        return response.data;
    }catch (err) {
        console.log(err);
    }
})

const initialState = {
    products: [],
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		// Get all todos
		[getProductsList.pending]: (state, action) => {
			console.log('Fetching product from backend ....')
		},
		[getProductsList.fulfilled]: (state, action) => {
			console.log('Done')
			state.products = action.payload
		},
		[getProductsList.rejected]: (state, action) => {
			console.log('Failed to get product!!!')
		},
	}
})


// Reducer
const productReducer = productSlice.reducer

// Selector
export const productsSelector = state => state.productReducer.products

// Action export
export const {} = productSlice.actions

// Export reducer
export default productReducer
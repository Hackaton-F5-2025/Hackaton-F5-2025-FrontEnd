import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchProductos = async () => {
    try {
        const response = await apiClient.get('/productos'); 
        return response.data; 
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }

/* export const createProducto = async (nuevoProducto) => {
    try {
        const response = await apiClient.post('/productos', nuevoProducto);
        return response.data;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
    };
    
export const deleteProducto = async (id) => {
    try {
        const response = await apiClient.delete(`/productos/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw error;
        }    */
};

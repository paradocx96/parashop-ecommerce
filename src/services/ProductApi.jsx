import axios from "axios";

class ProductApi {
    BASE_URL = "https://fakestoreapi.com/";

    getAllProducts = async () => {
        return await axios.get(this.BASE_URL + "products");
    }
}

export default new ProductApi();

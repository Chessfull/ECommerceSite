//-> I created this to manage my operations from fakestoreapi as class approach
export class FakeStoreApi {
  constructor() {
    this.baseUrl = "https://fakestoreapi.com/"; // -> For next possible api operations I defined baseurl
  }

  // ▼ Getting products ▼
  async getProducts() {
    try {
      const response = await fetch(this.baseUrl + "products");
      if (!response.ok) {
        throw new Error(`There is error at response :${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

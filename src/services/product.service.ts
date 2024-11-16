import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../constant/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${AppConstants.API_URL}/api/products`; // Replace with your actual API URL

  constructor(private http: HttpClient) {
  }

  /**
   * Fetch all products from the API.
   * @returns Observable<Product[]>
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Fetch a product by ID from the API.
   * @param id The product ID.
   * @returns Observable<Product>
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {AppConstants} from '../constant/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${AppConstants.API_URL}/api/categories`; // Replace with your actual API URL

  constructor(private http: HttpClient) {
  }

  /**
   * Fetch all categories from the API.
   * @returns Observable<Category[]>
   */
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}


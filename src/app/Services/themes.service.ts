import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor() { }

  private isDarkMode = false;

  get primaryColor() {
    return this.isDarkMode ? '#000' : '#fff';
  }
  
  get secondaryColor() {
    return this.isDarkMode ? '#ffa500' : '#007bff';
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}

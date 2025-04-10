import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedOption: string = '';
  selectedCategory: string = '';

  Products = [
    {
      id: 1,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with long battery life.',
      price: 799,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 15
    },
    {
      id: 2,
      name: 'Bluetooth Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      price: 2999,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 8
    },
    {
      id: 3,
      name: 'Gaming Keyboard',
      description: 'Mechanical RGB backlit keyboard.',
      price: 2499,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 12
    },
    {
      id: 4,
      name: 'Office Chair',
      description: 'Comfortable ergonomic office chair with lumbar support.',
      price: 5499,
      category: 'Furniture',
      image: 'https://via.placeholder.com/150',
      stock: 7
    },
    {
      id: 5,
      name: 'Water Bottle',
      description: '1L stainless steel insulated water bottle.',
      price: 499,
      category: 'Accessories',
      image: 'https://via.placeholder.com/150',
      stock: 25
    },
    {
      id: 6,
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with heart rate monitor.',
      price: 4999,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 9
    },
    {
      id: 7,
      name: 'Laptop Backpack',
      description: 'Water-resistant laptop backpack with multiple compartments.',
      price: 1399,
      category: 'Accessories',
      image: 'https://via.placeholder.com/150',
      stock: 20
    },
    {
      id: 8,
      name: 'LED Monitor',
      description: '24-inch Full HD LED Monitor.',
      price: 7999,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 6
    },
    {
      id: 9,
      name: 'Portable Speaker',
      description: 'Bluetooth portable speaker with deep bass.',
      price: 1599,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 18
    },
    {
      id: 10,
      name: 'Desk Lamp',
      description: 'LED desk lamp with adjustable brightness.',
      price: 899,
      category: 'Furniture',
      image: 'https://via.placeholder.com/150',
      stock: 14
    },
    {
      id: 11,
      name: 'Smartphone Stand',
      description: 'Adjustable metal stand for smartphones.',
      price: 299,
      category: 'Accessories',
      image: 'https://via.placeholder.com/150',
      stock: 30
    },
    {
      id: 12,
      name: 'USB Hub',
      description: '4-Port USB 3.0 Hub for laptops & PCs.',
      price: 699,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 22
    },
    {
      id: 13,
      name: 'Yoga Mat',
      description: 'Non-slip, eco-friendly yoga mat.',
      price: 999,
      category: 'Fitness',
      image: 'https://via.placeholder.com/150',
      stock: 16
    },
    {
      id: 14,
      name: 'Running Shoes',
      description: 'Lightweight running shoes for men & women.',
      price: 1999,
      category: 'Footwear',
      image: 'https://via.placeholder.com/150',
      stock: 10
    },
    {
      id: 15,
      name: 'Power Bank',
      description: '10000mAh fast charging power bank.',
      price: 1199,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 13
    },
    {
      id: 16,
      name: 'Sunglasses',
      description: 'UV-protected polarized sunglasses.',
      price: 899,
      category: 'Accessories',
      image: 'https://via.placeholder.com/150',
      stock: 19
    },
    {
      id: 17,
      name: 'Wireless Charger',
      description: 'Fast wireless charger for smartphones.',
      price: 799,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 11
    },
    {
      id: 18,
      name: 'Wall Clock',
      description: 'Modern design silent wall clock.',
      price: 699,
      category: 'Home Decor',
      image: 'https://via.placeholder.com/150',
      stock: 8
    },
    {
      id: 19,
      name: 'Coffee Mug',
      description: 'Ceramic coffee mug with unique design.',
      price: 299,
      category: 'Kitchen',
      image: 'https://via.placeholder.com/150',
      stock: 24
    },
    {
      id: 20,
      name: 'Table Fan',
      description: 'Portable rechargeable table fan.',
      price: 1499,
      category: 'Electronics',
      image: 'https://via.placeholder.com/150',
      stock: 9
    }
  ];

  filteredProducts = [...this.Products];

  categories: string[] = [...new Set(this.Products.map(p => p.category))];

  sortProducts() {
    if (this.selectedOption === 'lowToHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    }
    else if (this.selectedOption === 'highToLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
    else if (this.selectedOption === 'nameAZ') {
      this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (this.selectedOption === 'nameZA') {
      this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  filterProducts() {
    if (this.selectedCategory) {
      this.filteredProducts = this.Products.filter(product => product.category === this.selectedCategory);
    } else {
      this.filteredProducts = [...this.Products];
    }

    this.sortProducts();  // optional -> keep sorting after filter
  }

  clearFilter() {
    this.selectedCategory = '';
    this.selectedOption = '';
    this.filteredProducts = [...this.Products];
  }
}


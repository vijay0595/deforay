import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Meals',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['indian'],
    stars: 4.5,
    imageUrl: 'assets/food-1.png',
    tags: ['Veg Food'],
  },
  {
    id:'2',
    name: 'chapathi',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'india'],
    stars: 4.7,
    imageUrl: 'assets/food-2.png',
    tags: ['Veg Food'],
  },
  {
    id:'3',
    name: 'poori',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['indian', 'In'],
    stars: 3.5,
    imageUrl: 'assets/food-3.png',
    tags: ['Veg Food'],
  },
  {
    id:'4',
    name: 'Karaikuti Meals',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['Karaikuti', 'Tamilnadu'],
    stars: 3.3,
    imageUrl: 'assets/food-4.png',
    tags: ['Veg Food'],
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Non-Veg Food'],
  },
  {
    id:'6',
    name: 'Sea Foods',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.png',
    tags: ['Non-Veg Food'],
  },
  {
    id:'7',
    name: 'Spicy Cheese Burger',
    price: 12,
    cookTime: '20-30',
    favorite: false,
    origins: ['Indian'],
    stars: 4.0,
    imageUrl: 'assets/food-7.jpg',
    tags: ['Non-Veg Food'],
  },
  {
    id:'8',
    name: 'Biriyani',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/food-8.png',
    tags: ['Non-Veg Food'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 8 },
  { name: 'Veg Food', count: 4 },
  { name: 'Non-Veg Food', count: 4},
  
]
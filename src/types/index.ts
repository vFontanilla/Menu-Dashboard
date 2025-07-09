export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  preparationTime: number;
  preparationTimeUnit: 'minutes' | 'hours';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed';
  customerName: string;
  customerPhone: string;
  tableNumber?: string;
  timestamp: Date;
  estimatedTime?: number;
}
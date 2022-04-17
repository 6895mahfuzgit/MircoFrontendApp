import products, { Product } from './../../products';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';


interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  }))
});

@Controller('cart')
export class CartController {

  private carts: Record<number, Cart> = {

    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  }

  constructor() { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    //return { userId: req.user.userId };

    return this.carts[req.user.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createx(@Request() req, @Body() { id }: { id: string }): Promise<Cart> {
    const productId = parseInt(id);
    const cart = this.carts[req.user.userId];
    const cartItem = cart.cartItems.find((cartItem) => cartItem.id === productId);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.cartItems.push({
        ...products.find((product) => product.id == productId),
        quantity: 1
      });
    }

    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destory(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }


}

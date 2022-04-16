import { Product } from './../../products';
import {
  Controller,
  Get,
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



@Controller('cart')
export class CartController {
  constructor() { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<{ userId: number }> {
    return { userId: req.user.userId };
  }
}

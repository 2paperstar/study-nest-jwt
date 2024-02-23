import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private async findUserByIdAndPassword(id: string, password: string) {
    if (id !== 'admin') return null;
    if (password !== 'password') return null;
    return { id: 'admin', name: 'Admin' };
  }

  async login(id: string, password: string) {
    const user = await this.findUserByIdAndPassword(id, password);
    if (!user) throw new NotFoundException('User not found');
    const token = this.jwtService.sign({ sub: user.id, name: user.name });
    return { accessToken: token };
  }
}

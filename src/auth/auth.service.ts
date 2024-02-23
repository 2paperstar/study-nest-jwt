import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private async findUserByIdAndPassword(id: string, password: string) {
    if (id !== 'admin') return null;
    if (password !== 'password') return null;
    return { id: 'admin', name: 'Admin' };
  }

  async login(id: string, password: string) {
    const user = await this.findUserByIdAndPassword(id, password);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret:
        '6f117e7e9df4efddf52bc080c1d702b1ea28e3e4831c3714249ed85f7232e9d8d3fa8e860ee28be77ac079ce0a2b726172d93cd75508e14f14588834a73431ae',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey:
        '6f117e7e9df4efddf52bc080c1d702b1ea28e3e4831c3714249ed85f7232e9d8d3fa8e860ee28be77ac079ce0a2b726172d93cd75508e14f14588834a73431ae',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any): Promise<any> {
    return payload;
  }
}

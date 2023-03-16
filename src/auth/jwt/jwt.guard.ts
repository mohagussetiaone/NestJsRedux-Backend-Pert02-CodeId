import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtGuard extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }
  async validate(payload: any) {
    return {
      UserId: payload.id,
      UserName: payload.username,
      UserEmail: payload.email,
      UserPhone: payload.phone,
    };
  }
}

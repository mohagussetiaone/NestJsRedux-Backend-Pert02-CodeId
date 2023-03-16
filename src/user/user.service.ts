import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'output/entities/User';
import { Repository } from 'typeorm';
import * as Bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const Salt = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  public async signup(fields: any) {
    try {
      const hashPassword = await Bcrypt.hash(fields.password, Salt);
      const user = await this.userRepo.save({
        userName: fields.username,
        userPhone: fields.phone,
        userEmail: fields.email,
        userPass: hashPassword,
      });
      const { userPass, ...result } = user;
      return result;
    } catch (error) {
      return error.message;
    }
  }

  public async validateUser(username: string, pass: string) {
    const user = await this.userRepo.findOne({
      where: [{ userName: username }, { userEmail: username }],
    });
    const compare = await Bcrypt.compare(pass, user.userPass);

    if (compare) {
      const { userPass, ...result } = user;
      return result;
    }
  }

  public async login(user: any) {
    const payload = {
      username: user.userName,
      id: user.userId,
      phone: user.userPhone,
      email: user.userEmail,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

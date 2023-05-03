import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Config } from '@core/config';
import { OneTimePassword } from '@entities/otp';
import { UserParent } from '@entities/users';
import { UserService } from '@shared/user';

import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RestorePasswordService {
  constructor(
    private _userService: UserService,
    private readonly _mailerService: MailerService,
    @InjectRepository(OneTimePassword)
    private _otpRepository: Repository<OneTimePassword>,
    @InjectRepository(UserParent)
    private _userRepository: Repository<UserParent>,
  ) {}

  async sendMail(email: string): Promise<void> {
    const user = await this._userService._findOneByEmail(email);
    const userId = user.id;
    const otp = Math.random().toString(36).substring(7);

    await this._mailerService.sendMail({
      to: `${email}`,
      from: Config.get.emailName,
      subject: '',
      text: `${otp}`,
      html: '',
    });

    this._otpRepository.save({ otp, user: { id: userId } });
  }

  async otpCheck(email: string, otp: string) {
    const user = await this._userService._findOneByEmail(email);

    const existingOtp = await this._otpRepository
      .createQueryBuilder('oneTimePassword')
      .leftJoinAndSelect('oneTimePassword.user', 'user')
      .select('oneTimePassword.otp')
      .where('user.id = :id', { id: user.id })
      .getOne();

    if (existingOtp.otp !== otp) {
      throw new BadRequestException('Wrong otp');
    }

    this._otpRepository.delete(existingOtp);

    return existingOtp;
  }

  async passwordRestore(email: string, newPassword: string) {
    const user = await this._userService._findOneByEmail(email);

    const password = await bcrypt.hash(newPassword, +Config.get.hashSalt);

    await this._userRepository.update(user.id, { password });
  }
}

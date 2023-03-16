import { Injectable } from '@nestjs/common';
import { MulterOptionsFactory } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

@Injectable()
export class UploadMiddleware {
  static MulterOption(): MulterOptions {
    return {
      dest: './uploads',
      fileFilter(req, file, callback) {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          file.filename = file.originalname;
          callback(null, true);
        } else {
          return callback(
            new Error('Only .png, .jpg, and .jpeg format allowed'),
            false,
          );
        }
      },
      limits: { fileSize: 1 * 1024 * 1024 },
    };
  }
}

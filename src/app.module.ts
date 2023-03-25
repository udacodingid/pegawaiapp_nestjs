import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PegawaiModule } from './pegawai/pegawai.module';

@Module({
  imports: [PegawaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

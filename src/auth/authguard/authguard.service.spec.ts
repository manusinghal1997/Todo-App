import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuardService } from './authguard.service';

describe('AuthguardService', () => {
  let service: AuthGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthGuardService],
    }).compile();

    service = module.get<AuthGuardService>(AuthGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

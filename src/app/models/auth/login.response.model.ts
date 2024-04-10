
export class LoginResponse {
  guid!: string;
  username!: string;
  roles!: string[];
  jwtToken!: string;
  refreshToken!: string;
  //token: any;  //to test 
}

export class RegisterResponse {
  guid!: string;
  username!: string;
  roles!: string[];
  jwtToken!: string;
  refreshToken!: string;
}

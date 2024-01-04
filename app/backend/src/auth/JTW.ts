import { JwtPayload, Secret, SignOptions, sign, verify } from 'jsonwebtoken';

export default class JWT {

    private static secret: Secret = process.env.JWT_SECRET || 'secret';

    private static jwtConfig: SignOptions = {
        algorithm: 'HS256',
        expiresIn: '10d',
      };

    public static sign(payload: JwtPayload): string {
        return sign(payload, JWT.secret, JWT.jwtConfig) // TESTANDO THIS
    }

    public verify(token: string): JwtPayload | string {
        try {
            return verify(token, JWT.secret)
        } catch (error) {
            return 'Token must be a valid token';
        }
    }

}
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
	constructor() {
		super({
			datasources: {
				db: {
					url: 'postgresql://flamiing:3132001@localhost:5434/rest-api?schema=public'
				},
			},
		});
	}
}

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Promotion } from "./DataSourceModelation/PromotionEntityConfig";
import { Client } from "./DataSourceModelation/ClientEntityConfig";
import { Employee } from "./DataSourceModelation/EmployeeEntityConfig";
import { Order } from "./DataSourceModelation/OrderEntityConfig";
import { Product } from "./DataSourceModelation/ProductEntityConfig";
import { LoggerImpl } from "./Logger/LoggerImpl";
require('dotenv').config();

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "fiap-lanches-postgres-db-instance.c3ayceu2o7gb.sa-east-1.rds.amazonaws.com",
//   port: 5432,
//   username: "postgres",
//   password: "mysecretpassword",
//   database: "postgres",
//   synchronize: true,
//   logging: true,
//   entities: [Promotion, Product, Order, Client, Employee],
//   subscribers: [],
//   migrations: [],
//   ssl: {
//       rejectUnauthorized: false
//   }
// });
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [Promotion, Product, Order, Client, Employee],
  subscribers: [],
  migrations: [],
  ssl: {
      rejectUnauthorized: false
  }
});

const logger = new LoggerImpl();
AppDataSource.initialize()
  .then(() => logger.info("Database initialized!"))
  .catch((error) => logger.error("Database with error: " + error));

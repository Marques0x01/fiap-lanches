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
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "mysecretpassword",
//   database: "postgres",
//   synchronize: true,
//   logging: true,
//   entities: [Promotion, Product, Order, Client, Employee],
//   subscribers: [],
//   migrations: []
// });
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "fiap-app.c16scs0k8olj.us-east-2.rds.amazonaws.com",
  port: 5432,
  username: "postgres",
  password: "mysecretpassword",
  database: "postgres",
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

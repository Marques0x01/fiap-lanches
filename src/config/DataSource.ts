import "reflect-metadata";
import { DataSource } from "typeorm";
import { logger } from "./WinstonLog";
import { Product } from "../adapter/data/Product.model";
import { Order } from "../adapter/data/Order.model";
import { Client } from "../adapter/data/Client.model";
import { Employee } from "../adapter/data/Employee";
import { Promotion } from "../adapter/data/Promotion.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "mysecretpassword",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Promotion, Product, Order, Client, Employee],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => logger.info("Database initialized!"))
  .catch((error) => logger.error("Database with error: " + error));

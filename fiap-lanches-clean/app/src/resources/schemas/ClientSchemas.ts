import { z } from "zod";

export const createClientSchema = z.object({
  cpf: z.string().length(11),
  name: z.string().min(5).max(100),
  email: z.string().email(),
});


export const createClientCognitoSchema = z.object({
  cpf: z.string().length(11),
  name: z.string().min(5).max(100),
  email: z.string().email(),
  password: z.string()
});

export const loginClientCognitoSchema = z.object({
  cpf: z.string().length(11),
  password: z.string()
});


export const confirmClientCognitoSchema = z.object({
  cpf: z.string().length(11),
  code: z.string()
});


export const deleteClientSchema = z
  .object({
    cpf: z.string().length(11),
  })
  .required();

export const updateClientSchema = z
  .object({
    id: z.string(),
    cpf: z.string().length(11),
    name: z.string().max(200),
    email: z.string().email(),
  })
  .required();

export const getClientSchema = z
  .object({
    cpf: z.string().length(11),
  })
  .required();

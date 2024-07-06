<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>FIAP-LANCHES</h1>
<h3>◦ Desenvolvido com:</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat-square&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat-square&logo=Nodemon&logoColor=white" alt="Nodemon" />

<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat-square&logo=ts-node&logoColor=white" alt="tsnode" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat-square&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/Marques0x01/fiap-lanches?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Conteudo
- [📖 Conteudo](#-conteudo)
- [✨ Objetivos](#-objetivos)
- [📜 Justificativa de porque usar o padrão Saga Orquestração (Orchestration)](#-justificativa-de-porque-usar-o-padrão-saga-orquestração-orchestration)
- [📜 Arquitetura](#-arquitetura)
- [📜 Relatório RIPD do sistema](#-relatório-ripd-do-sistema)
- [📜 Explicação Arquitetura](#-explicação-arquitetura)
- [🌐 Swagger - API Coleção](#-swagger---api-coleção)
- [📂 Estrutura do repositório](#-estrutura-do-repositório)
  - [🤖 Executando fiap-lanches - Docker](#-executando-fiap-lanches---docker)
  - [🧪 Testes](#-testes)
  - [🤖 Executando fiap-lanches - Kubernetes](#-executando-fiap-lanches---kubernetes)

---

## ✨ Objetivos

O FiapLanches foi um grande sucesso, e com esse sucesso surgiu a necessidade de expansão. No entanto, foram identificados problemas com o atendimento ao cliente e o gerenciamento de pedidos.

Sem um sistema de gerenciamento de pedidos, pode haver confusão entre os atendentes e a cozinha, resultando em atrasos na preparação e entrega de pedidos. Pedidos podem ser perdidos, interpretados erroneamente ou esquecidos, o que leva à insatisfação do cliente e possíveis perdas de negócios.

Como solução, é necessário um sistema de gerenciamento de pedidos para garantir que o estabelecimento possa atender os clientes de forma eficiente, gerenciando seus pedidos e estoques adequadamente.

Para resolver esse problema, este repositório foi criado com a intenção de ser um sistema de autosserviço e gerenciamento de fast food que oferece facilidade para os clientes fazerem e receberem seus pedidos. Ele também auxilia os funcionários no gerenciamento desses pedidos, permitindo o controle sobre estratégias de marketing e o gerenciamento de funcionários.

## 📜 Justificativa de porque usar o padrão Saga Orquestração (Orchestration)

A escolha pelo padrão Saga Orquestração (Orchestration) se justifica pela necessidade de um controle centralizado e mais previsível das transações distribuídas. Em sistemas complexos como o FiapLanches, onde várias operações independentes devem ser coordenadas, a orquestração facilita o monitoramento, depuração e controle de fluxos transacionais.

**Vantagens da Orquestração:**

  **- Centralização do Controle:** Um único serviço orquestrador gerencia todas as etapas da transação, facilitando a compreensão e manutenção do fluxo.
  
  **- Facilidade de Monitoramento e Depuração:** Com um ponto central de controle, é mais fácil rastrear problemas e entender o estado atual de uma transação.
  
  **- Flexibilidade:** Permite mudanças no fluxo de transação sem necessidade de alterar vários serviços.
  
  **- Consistência:** Garante que todas as etapas da transação sejam concluídas corretamente ou compensadas em caso de falha.

Ao implementar o padrão Saga com Orquestração, o FiapLanches pode garantir um gerenciamento mais eficiente e robusto das transações distribuídas, melhorando a confiabilidade e a satisfação dos clientes.

## 📜 Arquitetura

Completa
![Fiap Lanches Arquitetura](others/architecture/complete_architecture.png)

Simplificada
![Fiap Lanches Arquitetura](others/architecture/simplified_architecture.png)


## 📜 Relatório RIPD do sistema
[Link com o relatório RIPD do sistema](https://docs.google.com/document/d/1B95qNDZeVxFm43rZ7FqVjK8sg-2wFoqW/edit?usp=sharing&ouid=113892299161381374843&rtpof=true&sd=true)


## 📜 Explicação Arquitetura
[Link para o vídeo explicativo](https://youtu.be/P2ix0tDUAvk)


## 🌐 Swagger - API Coleção

[API Coleção](others/api_collection/fiapLanchesEndpointCollections.json) ou depois de rodar o projeto acesse o swagger: [Swagger](http://localhost:3000/api-docs/)

## 📂 Estrutura do repositório 


```sh
└── fiap-lanches/fiap-lanches-clean/
    ├── app/
    │    ├── src/
    │    │   ├── configurations/
    │    │   │   ├── DataSource.ts
    │    │   │   ├── InjectionDependency.ts
    │    │   │   ├── Swagger.ts
    │    │   │   ├── WinstonLog.ts
    │    │   ├── domain/
    │    │   │   ├── enums/
    │    │   │   │   ├── EOrderStatus.ts
    │    │   │   │   ├── EPayment.ts
    │    │   │   │   ├── EProductCategory
    │    │   │   │   ├── EPromotionStatus
    │    │   │   ├── models/
    │    │   │   │   ├── IClientModel.ts
    │    │   │   │   ├── IEmployeeModel.ts
    │    │   │   │   ├── IOrderModel.ts
    │    │   │   │   ├── IProductModel.ts
    │    │   │   │   ├── IPromotionModel.ts
    │    │   ├── repositories/
    │    │   │   ├── entity/
    │    │   │   │   ├── ClientEntity.ts
    │    │   │   │   ├── EmployeeEntity.ts
    │    │   │   │   ├── OrderEntity.ts
    │    │   │   │   ├── ProductEntity.ts
    │    │   │   │   ├── PromotionEntity.ts
    │    │   │   ├── impl/
    │    │   │   │   ├── ClientRepository.ts
    │    │   │   │   ├── EmployeeRepository.ts
    │    │   │   │   ├── OrderRepository.ts
    │    │   │   │   ├── ProductRepository.ts
    │    │   │   │   ├── PromotionRepository.ts
    │    │   │   ├── interfaces/
    │    │   │   │   ├──IClientRepository.ts
    │    │   │   │   ├──IEmployeeRepository.ts
    │    │   │   │   ├──IOrderRepository.ts
    │    │   │   │   ├──IProductRepository.ts
    │    │   │   │   ├──IPromotionRepository.ts
    │    │   ├── resources/
    │    │   │   ├── controllers/
    │    │   │   ├── midleware/
    │    │   │   ├── routers/
    │    │   │   ├── schemas/
    │    │   ├── services/
    │    │   ├── tests/
    │    │   └── index.ts
    │    ├── jest.config.js
    │    ├── package-lock.json
    │    ├── package.json
    │    └── tsconfig.json
    └── kubernates/
    │   ├── fiap-lanches-api-deployment.yaml
    │   ├── hpa.yaml
    │   ├── metrics.yaml
    │   ├── postgres-deployment.yaml
    │   ├── postgres-pv.yaml
    │   ├── postgres-pvc.yaml
    │   ├── postgres-secret.yaml
    │   ├── svc-lanches-api.yaml
    │   └── svc-postgress.yaml


```

```sh
└── fiap-lanches/fiap-lanches-hexagonal/
    ├── Dockerfile
    ├── docker-compose.yml
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── src/
    │   ├── adapter/
    │   │   ├── driven/
    │   │   └── driver/
    │   ├── config/
    │   │   ├── DataSource.ts
    │   │   ├── RedisConfig.ts
    │   │   ├── Swagger.ts
    │   │   └── WinstonLog.ts
    │   ├── core/
    │   │   ├── applications/
    │   │   └── domain/
    │   ├── shared/
    │   │   └── container/
    │   └── test/
    │       ├── client/
    │       ├── employee/
    │       ├── order/
    │       ├── payment/
    │       └── product/
    │   fiap-lanches-api-deployment.yaml
    │   hpa.yaml
    │   metrics.yaml
    │   postgres-deployment.yaml
    │   postgres-pv.yaml
    │   postgres-pvc.yaml
    │   postgres-secret.yaml
    │   svc-lanches-api.yaml
    │   svc-postgress.yaml
    └── tsconfig.json

```

### 🤖 Executando fiap-lanches - Docker
1. Clone the fiap-lanches repository:
```sh
git clone git@github.com:Marques0x01/fiap-lanches.git
```

2. Mudar pasta do projeto:
```sh
cd fiap-lanches/fiap-lanches-clean
```

3. Rodar com docker:
```sh
docker compose up
```

### 🧪 Testes
```sh
npm test
```

---

### 🤖 Executando fiap-lanches - Kubernetes
1. Clone o repositório fiap-lanches:
```sh
git clone git@github.com:Marques0x01/fiap-lanches.git
```

2. Mudar pasta do projeto:
```sh
cd fiap-lanches
cd fiap-lanches-clean
cd kubernetes
```


2.1. Executar todos os comando kubernetes juntos ou segregados igual abaixo:
```sh
kubectl apply -f metrics.yaml &&
kubectl apply -f postgres-secret.yaml &&
kubectl apply -f svc-postgress.yaml &&
kubectl apply -f postgres-pv.yaml    &&
kubectl apply -f postgres-pvc.yaml   &&
kubectl apply -f postgres-deployment.yaml &&
kubectl apply -f svc-lanches-api.yaml &&
kubectl apply -f fiap-lanches-api-deployment.yaml
```

3. Subir as metricas:
```sh
kubectl apply -f metrics.yaml
```

4. Subir secrets do postgres:
```sh
kubectl apply -f postgres-secret.yaml
```

5. Subir service do postgres:
```sh
kubectl apply -f svc-postgress.yaml
```

6. Subir service do postgres:
```sh
kubectl apply -f postgres-pv.yaml   
```

7. Subir service do postgres:
```sh
kubectl apply -f postgres-pvc.yaml  
```

8. Subir deployment do postgres:
```sh
kubectl apply -f postgres-deployment.yaml
```

9. Subir service do fiap lanches:
```sh
kubectl apply -f svc-lanches-api.yaml
```

10. Subir deployment do fiap lanches:
```sh
kubectl apply -f fiap-lanches-api-deployment.yaml
```

11. Acesse o swagger:
```sh
http://localhost:32000/api-docs/
```

---

[**Return**](#Top)

---

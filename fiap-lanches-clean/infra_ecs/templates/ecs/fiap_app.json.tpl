[
  {
    "name": "fiap-app",
    "image": "381492057057.dkr.ecr.us-east-2.amazonaws.com/fiap_app:latest",
    "cpu": 256,
    "memory": 512,
    "networkMode": "awsvpc",
    "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/fiap-app",
          "awslogs-region": "us-east-2",
          "awslogs-stream-prefix": "ecs"
        }
    },
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ]
  }
]
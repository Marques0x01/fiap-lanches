[
  {
    "name": "fiap-app",
    "image": "381491879523.dkr.ecr.us-east-1.amazonaws.com/fiap_app:latest",
    "cpu": 256,
    "memory": 512,
    "networkMode": "awsvpc",
    "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/fiap-app",
          "awslogs-region": "us-east-1",
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


data "template_file" "fiap_app" {
  template = file("./templates/ecs/fiap_app.json.tpl")
}

resource "aws_ecs_task_definition" "app" {
  family                   = "fiap-app-task"
  execution_role_arn       = aws_iam_role.role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
  container_definitions    = data.template_file.fiap_app.rendered
}

resource "aws_ecs_service" "main" {
  name            = "fiap-service"
  cluster         = aws_ecs_cluster.fiap_lanches.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = ["sg-06a29c4a2101c50ad"]
    subnets = ["subnet-0f2291c3259a0ba9f",
      "subnet-0655b2d31da57124a",
      "subnet-02e614ef4b46282e9",
      "subnet-075642a504c9a2de8",
      "subnet-0fa7ab58528ad0a16",
    "subnet-015c09b75fc822ac9"]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.target_group.id
    container_name   = "fiap-app"
    container_port   = 3000
  }

  depends_on = [aws_alb_listener.front_end, aws_ecs_task_definition.app]
}

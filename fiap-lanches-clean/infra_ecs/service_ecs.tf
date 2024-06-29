

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
    security_groups = ["g-0598204257a660641"]
    subnets = ["subnet-06d00c0f6bc10ac5a",
      "subnet-0b46ef3bfa2d46cb7",
      "subnet-00856156f6a861a71",
      "subnet-013d4706dc4716a99",
      "subnet-07365ebf779a73a70",
    "subnet-064177c5c249a2022"]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.target_group.id
    container_name   = "fiap-app"
    container_port   = 3000
  }

  depends_on = [aws_alb_listener.front_end, aws_ecs_task_definition.app]
}

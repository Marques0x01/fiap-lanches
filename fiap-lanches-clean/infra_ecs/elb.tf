resource "aws_alb" "load_balancer" {
  name               = "fiap-elb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-06a29c4a2101c50ad"]
  subnets = ["subnet-0295ae777d536105f",
    "subnet-038880e229ee7a49e",
    "subnet-0682385eb548272df",
    "subnet-00d80bdf6d3140cfe",
    "subnet-05b5cd71f11116267",
  "subnet-0a6a73d8df81f27f4"]

}


resource "aws_alb_listener" "front_end" {
  load_balancer_arn = aws_alb.load_balancer.id
  port              = 3000
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_alb_target_group.target_group.id
    type             = "forward"
  }
}

resource "aws_alb_target_group" "target_group" {
  name        = "fiap-target-group"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = "vpc-0ac2e024019f887e4"
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200,301"
    timeout             = "10"
    path                = "/api-docs"
    unhealthy_threshold = "3"
  }
}

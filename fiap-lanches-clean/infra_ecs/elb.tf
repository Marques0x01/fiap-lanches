resource "aws_alb" "load_balancer" {
  name               = "fiap-elb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-0f8c1bb1f5225acc6"]
  subnets = ["subnet-08e6fa3828be9c5c9",
"subnet-01d1053569b3e49f8",
"subnet-09c0f081137b3ceb9"]

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
  vpc_id      = "vpc-066fb0df1bef99e9f"
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

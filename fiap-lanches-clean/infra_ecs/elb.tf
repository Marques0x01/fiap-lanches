resource "aws_alb" "load_balancer" {
  name               = "fiap-elb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = ["sg-0814e9866258f4dcc"]
  subnets = ["subnet-0f2291c3259a0ba9f",
    "subnet-0655b2d31da57124a",
    "subnet-02e614ef4b46282e9",
    "subnet-075642a504c9a2de8",
    "subnet-0fa7ab58528ad0a16",
  "subnet-015c09b75fc822ac9"]

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
